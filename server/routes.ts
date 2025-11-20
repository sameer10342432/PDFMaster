import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { PDFDocument } from "pdf-lib";
import { allTools, toolCategories } from "@shared/schema";
import archiver from 'archiver';
import * as pdfUtils from './utils/pdf-utils';
import * as imageUtils from './utils/image-utils';
import * as textUtils from './utils/text-utils';
import * as textValidators from './utils/text-validators';
import * as webUtils from './utils/web-utils';
import * as audioVideoUtils from './utils/audio-video-utils';
import * as audioVideoValidators from './utils/audio-video-validators';
import * as imageValidators from './utils/image-validators';

// Configure multer for file uploads
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
});

const pdfOnly = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

const imageOnly = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

const audioOnly = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
    } else {
      cb(new Error('Only audio files are allowed'));
    }
  }
});

const videoOnly = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed'));
    }
  }
});

const audioOrVideo = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only audio or video files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Tool listing endpoints
  app.get('/api/tools', async (_req, res) => {
    try {
      res.json(allTools);
    } catch (error) {
      console.error('Error fetching tools:', error);
      res.status(500).json({ error: 'Failed to fetch tools' });
    }
  });

  app.get('/api/tools/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const tool = allTools.find(t => t.id === id);
      
      if (!tool) {
        return res.status(404).json({ error: 'Tool not found' });
      }
      
      res.json(tool);
    } catch (error) {
      console.error('Error fetching tool:', error);
      res.status(500).json({ error: 'Failed to fetch tool' });
    }
  });

  app.get('/api/categories', async (_req, res) => {
    try {
      res.json(toolCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  });

  app.get('/api/categories/:category/tools', async (req, res) => {
    try {
      const { category } = req.params;
      const filteredTools = allTools.filter(tool => tool.category === category);
      res.json(filteredTools);
    } catch (error) {
      console.error('Error fetching tools by category:', error);
      res.status(500).json({ error: 'Failed to fetch tools by category' });
    }
  });

  // ========================================
  // PDF TOOLS - Merge & Combine
  // ========================================
  app.post('/api/pdf/merge', pdfOnly.array('files', 100), async (req, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      const toolId = req.body.toolId;

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      let result: PDFDocument;

      switch (toolId) {
        case 'merge-pdf':
        case 'combine-pdf':
        case 'join-pdf-files':
        case 'pdf-merger':
        case 'pdf-combiner':
        case 'append-pdf':
        case 'add-pdf-to-pdf':
        case 'merge-multiple-pdfs':
        case 'combine-pdf-pages':
        case 'interleave-pdf':
        case 'pdf-binder':
        case 'merge-pdf-bookmarks':
        case 'combine-pdf-images':
        case 'merge-pdf-word':
          result = await pdfUtils.mergePDFsSequentially(files.map(f => f.buffer));
          break;

        case 'merge-pdf-alternately':
          result = await pdfUtils.mergePDFsAlternately(files.map(f => f.buffer));
          break;

        default:
          return res.status(400).json({ error: `Unknown merge tool: ${toolId}` });
      }

      const pdfBytes = await result.save();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF merge error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to merge PDFs: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Split & Extract
  // ========================================
  app.post('/api/pdf/split', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const toolId = req.body.toolId;
      const options = JSON.parse(req.body.options || '{}');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      let results: PDFDocument[] = [];
      let singleResult: PDFDocument | null = null;

      switch (toolId) {
        case 'split-pdf-by-pages':
          results = await pdfUtils.splitPDFByPages(file, options.pageRanges || '1-999');
          break;

        case 'split-pdf-every-x-pages':
          results = await pdfUtils.splitPDFEveryXPages(file, options.pagesPerSplit || 1);
          break;

        case 'split-pdf-odd-pages':
          singleResult = await pdfUtils.splitPDFOddEvenPages(file, 'odd');
          break;

        case 'split-pdf-even-pages':
          singleResult = await pdfUtils.splitPDFOddEvenPages(file, 'even');
          break;

        case 'extract-pdf-pages':
          singleResult = await pdfUtils.extractPDFPages(file, options.pageNumbers || [1]);
          break;

        case 'delete-pdf-pages':
          singleResult = await pdfUtils.deletePDFPages(file, options.pageNumbers || []);
          break;

        default:
          return res.status(400).json({ error: `Unknown split tool: ${toolId}` });
      }

      // If single result, return as PDF
      if (singleResult) {
        const pdfBytes = await singleResult.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
        res.send(Buffer.from(pdfBytes));
      } 
      // If multiple results, return as ZIP
      else if (results.length > 0) {
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-results.zip"`);
        
        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.pipe(res);

        for (let i = 0; i < results.length; i++) {
          const pdfBytes = await results[i].save();
          archive.append(Buffer.from(pdfBytes), { name: `${toolId}-part-${i + 1}.pdf` });
        }

        await archive.finalize();
      } else {
        return res.status(500).json({ error: 'No output generated' });
      }

    } catch (error) {
      console.error('PDF split error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to split PDF: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Rotate, Reorder, Edit Pages
  // ========================================
  app.post('/api/pdf/edit', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const toolId = req.body.toolId;
      const options = JSON.parse(req.body.options || '{}');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      let result: PDFDocument;

      switch (toolId) {
        case 'rotate-pdf':
        case 'rotate-pdf-pages':
          result = await pdfUtils.rotatePDF(file, options.rotation || 90, options.pageNumbers);
          break;

        case 'reverse-pdf-pages':
          result = await pdfUtils.reversePDFPages(file);
          break;

        case 'reorder-pdf-pages':
        case 'organize-pdf-pages':
          result = await pdfUtils.reorderPDFPages(file, options.newOrder || []);
          break;

        case 'insert-blank-page':
          result = await pdfUtils.insertBlankPages(file, options.positions || [1], options.pageSize);
          break;

        case 'duplicate-pdf-pages':
          result = await pdfUtils.duplicatePDFPages(file, options.pageNumbers || [1], options.times || 2);
          break;

        default:
          return res.status(400).json({ error: `Unknown edit tool: ${toolId}` });
      }

      const pdfBytes = await result.save();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF edit error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to edit PDF: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Compress & Optimize
  // ========================================
  app.post('/api/pdf/compress', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const toolId = req.body.toolId;
      const quality = req.body.quality || 'medium';

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await pdfUtils.compressPDF(file, quality);
      const pdfBytes = await result.save();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${toolId}-compressed.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF compress error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to compress PDF: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Convert to Images
  // ========================================
  app.post('/api/pdf/to-images', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const format = req.body.format || 'png';
      const dpi = parseInt(req.body.dpi || '150');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const images = await pdfUtils.convertPDFToImages(file, format, dpi);

      if (images.length === 1) {
        res.setHeader('Content-Type', `image/${format}`);
        res.setHeader('Content-Disposition', `attachment; filename="page-1.${format}"`);
        res.send(images[0]);
      } else {
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="pdf-images.zip"`);
        
        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.pipe(res);

        images.forEach((img, i) => {
          archive.append(img, { name: `page-${i + 1}.${format}` });
        });

        await archive.finalize();
      }

    } catch (error) {
      console.error('PDF to images error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to convert PDF to images: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Extract Images
  // ========================================
  app.post('/api/pdf/extract-images', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const toolId = req.body.toolId;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const images = await pdfUtils.extractPDFImages(file);

      if (images.length === 0) {
        return res.status(404).json({ error: 'No images found in PDF' });
      }

      if (images.length === 1) {
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', `attachment; filename="image-1.png"`);
        res.send(images[0]);
      } else {
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId || 'pdf'}-images.zip"`);
        
        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.pipe(res);

        images.forEach((img, i) => {
          archive.append(img, { name: `image-${i + 1}.png` });
        });

        await archive.finalize();
      }

    } catch (error) {
      console.error('PDF extract images error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to extract images from PDF: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Watermark & Stamp
  // ========================================
  app.post('/api/pdf/watermark', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const watermarkText = req.body.text || 'CONFIDENTIAL';
      const options = JSON.parse(req.body.options || '{}');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await pdfUtils.addWatermarkToPDF(file, watermarkText, options);
      const pdfBytes = await result.save();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="watermarked.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF watermark error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to add watermark: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Page Numbering
  // ========================================
  app.post('/api/pdf/page-numbers', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const options = JSON.parse(req.body.options || '{}');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await pdfUtils.addPageNumbersToPDF(file, options);
      const pdfBytes = await result.save();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="numbered.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF page numbering error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to add page numbers: ${errorMessage}` });
    }
  });

  // ========================================
  // PDF TOOLS - Metadata
  // ========================================
  app.post('/api/pdf/metadata', pdfOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const metadata = JSON.parse(req.body.metadata || '{}');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await pdfUtils.editPDFMetadata(file, metadata);
      const pdfBytes = await result.save();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="updated-metadata.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF metadata error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to update metadata: ${errorMessage}` });
    }
  });

  // ========================================
  
  // Helper function to separate validation errors (400) from server errors (500)
  function handleTextToolError(error: unknown, operation: string, res: any) {
    console.error(`${operation} error:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Zod validation errors should return 400
    if (error && typeof error === 'object' && 'issues' in error) {
      return res.status(400).json({ error: `Validation failed: ${errorMessage}` });
    }
    
    // Processing/formatting errors (JSON parse, etc.) should return 400
    if (errorMessage.includes('JSON') || errorMessage.includes('parse') || 
        errorMessage.includes('Invalid') || errorMessage.includes('required')) {
      return res.status(400).json({ error: errorMessage });
    }
    
    // Everything else is a server error
    return res.status(500).json({ error: `Failed to ${operation}: ${errorMessage}` });
  }

  // TEXT TOOLS - Case Conversion, Generators, Analysis
  // ========================================
  app.post('/api/text/convert-case', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.caseConvertSchema.parse({
        text: req.body.text,
        caseType: req.body.caseType
      });

      let result: string;
      switch (validated.caseType) {
        case 'uppercase':
          result = textUtils.convertToUpperCase(validated.text);
          break;
        case 'lowercase':
          result = textUtils.convertToLowerCase(validated.text);
          break;
        case 'titlecase':
          result = textUtils.convertToTitleCase(validated.text);
          break;
        case 'sentencecase':
          result = textUtils.convertToSentenceCase(validated.text);
          break;
        case 'camelcase':
          result = textUtils.convertToCamelCase(validated.text);
          break;
        case 'snakecase':
          result = textUtils.convertToSnakeCase(validated.text);
          break;
        case 'kebabcase':
          result = textUtils.convertToKebabCase(validated.text);
          break;
      }

      res.json({ result });
    } catch (error) {
      handleTextToolError(error, 'convert text case', res);
    }
  });

  app.post('/api/text/generate', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.textGeneratorSchema.parse({
        type: req.body.type,
        options: req.body.options
      });

      let result: string;
      const opts = validated.options || {};

      switch (validated.type) {
        case 'lorem':
          const paragraphs = opts.paragraphs ? parseInt(opts.paragraphs, 10) : 1;
          const wordsPerPara = opts.wordsPerPara ? parseInt(opts.wordsPerPara, 10) : 50;
          result = textUtils.generateLoremIpsum(isNaN(paragraphs) ? 1 : paragraphs, isNaN(wordsPerPara) ? 50 : wordsPerPara);
          break;
        case 'random':
          const length = opts.length ? parseInt(opts.length, 10) : 100;
          result = textUtils.generateRandomText(isNaN(length) ? 100 : length, opts.includeNumbers, opts.includeSpecial);
          break;
        case 'password':
          const pwdLen = opts.length ? parseInt(opts.length, 10) : 12;
          result = textUtils.generatePassword(isNaN(pwdLen) ? 12 : pwdLen, opts);
          break;
      }

      res.json({ result });
    } catch (error) {
      handleTextToolError(error, 'generate text', res);
    }
  });

  app.post('/api/text/analyze', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.textInputSchema.parse({
        text: req.body.text
      });

      const analysis = textUtils.analyzeText(validated.text);
      const wordFrequency = textUtils.getMostCommonWords(validated.text, 10);

      res.json({ analysis, wordFrequency });
    } catch (error) {
      handleTextToolError(error, 'analyze text', res);
    }
  });

  app.post('/api/text/manipulate', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.textManipulateSchema.parse({
        text: req.body.text,
        operation: req.body.operation,
        options: req.body.options
      });

      let result: string;
      const opts = validated.options || {};

      switch (validated.operation) {
        case 'remove-linebreaks':
          result = textUtils.removeLineBreaks(validated.text);
          break;
        case 'remove-spaces':
          result = textUtils.removeExtraSpaces(validated.text);
          break;
        case 'reverse':
          result = textUtils.reverseText(validated.text);
          break;
        case 'sort-lines':
          result = textUtils.sortLinesAlphabetically(validated.text, opts.ascending !== false);
          break;
        case 'remove-duplicates':
          result = textUtils.removeDuplicateLines(validated.text);
          break;
        case 'add-line-numbers':
          const startNum = opts.startNumber ? parseInt(opts.startNumber, 10) : 1;
          result = textUtils.addLineNumbers(validated.text, isNaN(startNum) ? 1 : startNum);
          break;
        case 'find-replace':
          result = textUtils.findAndReplace(validated.text, opts.find || '', opts.replace || '', opts.caseSensitive !== false);
          break;
      }

      res.json({ result });
    } catch (error) {
      handleTextToolError(error, 'manipulate text', res);
    }
  });

  app.post('/api/text/encode', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.encodeDecodeSchema.parse({
        text: req.body.text,
        type: req.body.type,
        action: req.body.action
      });

      let result: string;

      if (validated.action === 'encode') {
        switch (validated.type) {
          case 'base64':
            result = textUtils.encodeBase64(validated.text);
            break;
          case 'url':
            result = textUtils.encodeURL(validated.text);
            break;
          case 'html':
            result = textUtils.encodeHTML(validated.text);
            break;
        }
      } else {
        switch (validated.type) {
          case 'base64':
            result = textUtils.decodeBase64(validated.text);
            break;
          case 'url':
            result = textUtils.decodeURL(validated.text);
            break;
          case 'html':
            result = textUtils.decodeHTML(validated.text);
            break;
        }
      }

      res.json({ result });
    } catch (error) {
      handleTextToolError(error, 'encode/decode text', res);
    }
  });

  app.post('/api/text/uuid', upload.none(), async (req, res) => {
    try {
      const countValue = req.body.count ? parseInt(req.body.count, 10) : 1;
      const validated = textValidators.uuidGeneratorSchema.parse({
        count: isNaN(countValue) ? undefined : countValue
      });

      const uuids: string[] = [];
      for (let i = 0; i < validated.count; i++) {
        uuids.push(textUtils.generateUUID());
      }

      res.json({ result: validated.count === 1 ? uuids[0] : uuids });
    } catch (error) {
      handleTextToolError(error, 'generate UUID', res);
    }
  });

  app.post('/api/text/hash', upload.none(), async (req, res) => {
    try {
      const validated = textValidators.hashInputSchema.parse({
        text: req.body.text,
        algorithm: req.body.algorithm || 'sha256'
      });

      const result = textUtils.hashText(validated.text, validated.algorithm);
      
      res.json({ result, algorithm: validated.algorithm });

    } catch (error) {
      handleTextToolError(error, 'generate hash', res);
    }
  });

  app.post('/api/text/format', upload.none(), async (req, res) => {
    try {
      const indentValue = req.body.indent ? parseInt(req.body.indent, 10) : 2;
      const validated = textValidators.formatSchema.parse({
        text: req.body.text,
        type: req.body.type,
        action: req.body.action || 'format',
        indent: isNaN(indentValue) ? 2 : indentValue
      });

      let result: any;
      switch (validated.type) {
        case 'json':
          if (validated.action === 'validate') {
            result = textUtils.validateJSON(validated.text);
          } else if (validated.action === 'minify') {
            result = textUtils.minifyJSON(validated.text);
          } else {
            result = textUtils.formatJSON(validated.text, validated.indent);
          }
          break;
        case 'xml':
          if (validated.action === 'minify') {
            result = textUtils.minifyXML(validated.text);
          } else {
            result = textUtils.formatXML(validated.text, validated.indent);
          }
          break;
        case 'html':
          if (validated.action === 'minify') {
            result = textUtils.minifyHTML(validated.text);
          } else {
            result = textUtils.formatHTML(validated.text, validated.indent);
          }
          break;
        case 'css':
          if (validated.action === 'minify') {
            result = textUtils.minifyCSS(validated.text);
          } else {
            result = textUtils.formatCSS(validated.text, validated.indent);
          }
          break;
      }

      res.json({ result });
    } catch (error) {
      handleTextToolError(error, 'format text', res);
    }
  });

  // ========================================
  // QR CODE TOOLS - Generate & Read QR Codes
  // ========================================
  app.post('/api/qr/generate', upload.none(), async (req, res) => {
    try {
      const { text, type = 'url', size = 256, errorCorrection = 'M' } = req.body;

      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
      }

      if (text.length > 4000) {
        return res.status(400).json({ error: 'Text too long (max 4000 characters)' });
      }

      const sizeNum = parseInt(size, 10);
      if (isNaN(sizeNum) || sizeNum < 100 || sizeNum > 1000) {
        return res.status(400).json({ error: 'Size must be between 100 and 1000 pixels' });
      }

      const validErrorLevels = ['L', 'M', 'Q', 'H'];
      if (!validErrorLevels.includes(errorCorrection)) {
        return res.status(400).json({ error: 'Invalid error correction level' });
      }

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(text, {
        errorCorrectionLevel: errorCorrection as any,
        width: sizeNum,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        text,
        size: sizeNum,
        errorCorrection
      });

    } catch (error) {
      console.error('QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/generate-wifi', upload.none(), async (req, res) => {
    try {
      const { ssid, password, encryption = 'WPA', hidden = false, size = 256 } = req.body;

      if (!ssid) {
        return res.status(400).json({ error: 'WiFi SSID is required' });
      }

      const validEncryptions = ['WPA', 'WEP', 'nopass'];
      if (!validEncryptions.includes(encryption)) {
        return res.status(400).json({ error: 'Invalid encryption type' });
      }

      if (encryption !== 'nopass' && !password) {
        return res.status(400).json({ error: 'Password is required for secured networks' });
      }

      const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password || ''};H:${hidden ? 'true' : 'false'};;`;

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(wifiString, {
        errorCorrectionLevel: 'M',
        width: parseInt(size, 10) || 256,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        ssid,
        encryption
      });

    } catch (error) {
      console.error('WiFi QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate WiFi QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/generate-vcard', upload.none(), async (req, res) => {
    try {
      const { firstName, lastName, organization, phone, email, url, address, size = 256 } = req.body;

      if (!firstName && !lastName) {
        return res.status(400).json({ error: 'At least first name or last name is required' });
      }

      let vcardString = 'BEGIN:VCARD\nVERSION:3.0\n';
      vcardString += `FN:${firstName || ''} ${lastName || ''}\n`;
      if (firstName) vcardString += `N:${lastName || ''};${firstName};;;\n`;
      if (organization) vcardString += `ORG:${organization}\n`;
      if (phone) vcardString += `TEL:${phone}\n`;
      if (email) vcardString += `EMAIL:${email}\n`;
      if (url) vcardString += `URL:${url}\n`;
      if (address) vcardString += `ADR:;;${address};;;;\n`;
      vcardString += 'END:VCARD';

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(vcardString, {
        errorCorrectionLevel: 'M',
        width: parseInt(size, 10) || 256,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        name: `${firstName || ''} ${lastName || ''}`.trim()
      });

    } catch (error) {
      console.error('vCard QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate vCard QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/generate-email', upload.none(), async (req, res) => {
    try {
      const { email, subject = '', body = '', size = 256 } = req.body;

      if (!email) {
        return res.status(400).json({ error: 'Email address is required' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
      }

      const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(mailto, {
        errorCorrectionLevel: 'M',
        width: parseInt(size, 10) || 256,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        email
      });

    } catch (error) {
      console.error('Email QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate email QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/generate-phone', upload.none(), async (req, res) => {
    try {
      const { phone, size = 256 } = req.body;

      if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
      }

      const telString = `tel:${phone}`;

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(telString, {
        errorCorrectionLevel: 'M',
        width: parseInt(size, 10) || 256,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        phone
      });

    } catch (error) {
      console.error('Phone QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate phone QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/generate-event', upload.none(), async (req, res) => {
    try {
      const { title, location = '', startDate, endDate, description = '', size = 256 } = req.body;

      if (!title) {
        return res.status(400).json({ error: 'Event title is required' });
      }

      if (!startDate) {
        return res.status(400).json({ error: 'Start date is required' });
      }

      const parseDate = (dateStr: string): Date => {
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
        const timestamp = Date.parse(dateStr);
        if (!isNaN(timestamp)) {
          return new Date(timestamp);
        }
        
        const iso24Hour = /^(\d{4})-(\d{2})-(\d{2})[\s|T](\d{2}):(\d{2})(?::(\d{2}))?$/;
        const iso12Hour = /^(\d{4})-(\d{2})-(\d{2})[\s|T](\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i;
        const usFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})[\s|,]?\s*(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i;
        
        let match = dateStr.match(iso24Hour);
        if (match) {
          return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]), 
                          parseInt(match[4]), parseInt(match[5]), parseInt(match[6] || '0'));
        }
        
        match = dateStr.match(iso12Hour);
        if (match) {
          let hour = parseInt(match[4]);
          const isPM = match[7]?.toUpperCase() === 'PM';
          if (isPM && hour !== 12) hour += 12;
          if (!isPM && hour === 12) hour = 0;
          return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]), 
                          hour, parseInt(match[5]), parseInt(match[6] || '0'));
        }
        
        match = dateStr.match(usFormat);
        if (match) {
          let hour = parseInt(match[4]);
          if (match[7] && match[7].trim() !== '') {
            const isPM = match[7].toUpperCase() === 'PM';
            if (isPM && hour !== 12) hour += 12;
            if (!isPM && hour === 12) hour = 0;
          }
          if (hour < 0 || hour > 23) {
            throw new Error('Invalid hour value');
          }
          return new Date(parseInt(match[3]), parseInt(match[1]) - 1, parseInt(match[2]), 
                          hour, parseInt(match[5]), parseInt(match[6] || '0'));
        }
        
        throw new Error('Invalid date format');
      };

      let startDateObj: Date;
      try {
        startDateObj = parseDate(startDate);
      } catch {
        return res.status(400).json({ error: 'Invalid start date format. Please provide a valid date.' });
      }

      let endDateObj: Date | null = null;
      if (endDate) {
        try {
          endDateObj = parseDate(endDate);
        } catch {
          return res.status(400).json({ error: 'Invalid end date format. Please provide a valid date.' });
        }
      }

      const formatDateForICal = (date: Date): string => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      };

      let eventString = 'BEGIN:VEVENT\n';
      eventString += `SUMMARY:${title}\n`;
      eventString += `DTSTART:${formatDateForICal(startDateObj)}\n`;
      if (endDateObj) {
        eventString += `DTEND:${formatDateForICal(endDateObj)}\n`;
      }
      if (location) eventString += `LOCATION:${location}\n`;
      if (description) eventString += `DESCRIPTION:${description}\n`;
      eventString += 'END:VEVENT';

      const QRCode = await import('qrcode');
      const qrDataURL = await QRCode.toDataURL(eventString, {
        errorCorrectionLevel: 'M',
        width: parseInt(size, 10) || 256,
        margin: 2
      });

      res.json({ 
        qrCode: qrDataURL,
        title
      });

    } catch (error) {
      console.error('Event QR generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate event QR code: ${errorMessage}` });
    }
  });

  app.post('/api/qr/read', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      const { PNG } = await import('pngjs');
      const { default: jpeg } = await import('jpeg-js');
      const jsQR = (await import('jsqr')).default;
      
      let imageData;

      if (req.file.mimetype === 'image/png') {
        const png = PNG.sync.read(req.file.buffer);
        imageData = {
          data: new Uint8ClampedArray(png.data),
          width: png.width,
          height: png.height
        };
      } else if (req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg') {
        const jpegData = jpeg.decode(req.file.buffer);
        imageData = {
          data: new Uint8ClampedArray(jpegData.data),
          width: jpegData.width,
          height: jpegData.height
        };
      } else {
        return res.status(400).json({ error: 'Unsupported image format. Please use PNG or JPEG.' });
      }

      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        res.json({ 
          success: true,
          data: code.data,
          location: {
            topLeft: code.location.topLeftCorner,
            topRight: code.location.topRightCorner,
            bottomLeft: code.location.bottomLeftCorner,
            bottomRight: code.location.bottomRightCorner
          }
        });
      } else {
        res.status(400).json({ error: 'No QR code found in the image' });
      }

    } catch (error) {
      console.error('QR read error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to read QR code: ${errorMessage}` });
    }
  });

  // ========================================
  // ARCHIVE TOOLS - ZIP, TAR, 7Z Creation & Extraction
  // ========================================
  app.post('/api/archive/create-zip', upload.array('files', 50), async (req, res) => {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).json({ error: 'No files provided' });
    }

    const archiver = await import('archiver');
    const archive = archiver.default('zip', {
      zlib: { level: 9 }
    });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="archive.zip"');

    archive.on('error', (err) => {
      console.error('Archive error:', err);
      res.destroy();
    });

    archive.pipe(res);

    for (const file of req.files) {
      archive.append(file.buffer, { name: file.originalname });
    }

    await archive.finalize();
  });

  app.post('/api/archive/extract-zip', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No ZIP file provided' });
      }

      const unzipper = await import('unzipper');
      const { Readable } = await import('stream');
      
      const stream = Readable.from(req.file.buffer);
      const directory = await stream.pipe(unzipper.Parse({ forceStream: true }));

      const files: { name: string; size: number; content?: string }[] = [];

      for await (const entry of directory) {
        const fileName = entry.path;
        const type = entry.type;

        if (type === 'File') {
          const content = await entry.buffer();
          files.push({
            name: fileName,
            size: content.length,
            content: content.length < 1024 * 1024 ? content.toString('base64') : undefined
          });
        } else {
          entry.autodrain();
        }
      }

      res.json({
        success: true,
        filesCount: files.length,
        files: files.map(f => ({ name: f.name, size: f.size })),
        fileContents: files.filter(f => f.content).map(f => ({ name: f.name, content: f.content }))
      });

    } catch (error) {
      console.error('ZIP extraction error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to extract ZIP archive: ${errorMessage}` });
    }
  });

  app.post('/api/archive/create-tar', upload.array('files', 50), async (req, res) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
        return res.status(400).json({ error: 'No files provided' });
      }

      const tar = await import('tar-stream');
      const pack = tar.pack();

      const chunks: Buffer[] = [];
      pack.on('data', (chunk) => chunks.push(chunk));
      pack.on('end', () => {
        const buffer = Buffer.concat(chunks);
        res.setHeader('Content-Type', 'application/x-tar');
        res.setHeader('Content-Disposition', 'attachment; filename="archive.tar"');
        res.send(buffer);
      });

      pack.on('error', (err) => {
        throw err;
      });

      for (const file of req.files) {
        pack.entry({ name: file.originalname, size: file.size }, file.buffer);
      }

      pack.finalize();

    } catch (error) {
      console.error('TAR creation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to create TAR archive: ${errorMessage}` });
    }
  });

  app.post('/api/archive/extract-tar', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No TAR file provided' });
      }

      const tar = await import('tar-stream');
      const { Readable } = await import('stream');

      const extract = tar.extract();
      const files: { name: string; size: number; content?: string }[] = [];

      extract.on('entry', (header, stream, next) => {
        const chunks: Buffer[] = [];

        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => {
          const content = Buffer.concat(chunks);
          files.push({
            name: header.name,
            size: content.length,
            content: content.length < 1024 * 1024 ? content.toString('base64') : undefined
          });
          next();
        });

        stream.resume();
      });

      extract.on('finish', () => {
        res.json({
          success: true,
          filesCount: files.length,
          files: files.map(f => ({ name: f.name, size: f.size })),
          fileContents: files.filter(f => f.content).map(f => ({ name: f.name, content: f.content }))
        });
      });

      extract.on('error', (err) => {
        throw err;
      });

      const stream = Readable.from(req.file.buffer);
      stream.pipe(extract);

    } catch (error) {
      console.error('TAR extraction error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to extract TAR archive: ${errorMessage}` });
    }
  });

  app.post('/api/archive/list-contents', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No archive file provided' });
      }

      const fileName = req.file.originalname.toLowerCase();
      const files: { name: string; size: number; compressed: number }[] = [];

      if (fileName.endsWith('.zip')) {
        const unzipper = await import('unzipper');
        const { Readable } = await import('stream');
        
        const stream = Readable.from(req.file.buffer);
        const directory = await stream.pipe(unzipper.Parse({ forceStream: true }));

        for await (const entry of directory) {
          if (entry.type === 'File') {
            files.push({
              name: entry.path,
              size: entry.vars.uncompressedSize || 0,
              compressed: entry.vars.compressedSize || 0
            });
          }
          entry.autodrain();
        }

      } else if (fileName.endsWith('.tar')) {
        const tar = await import('tar-stream');
        const { Readable } = await import('stream');

        const extract = tar.extract();

        await new Promise<void>((resolve, reject) => {
          extract.on('entry', (header, stream, next) => {
            files.push({
              name: header.name,
              size: header.size || 0,
              compressed: header.size || 0
            });
            stream.on('end', next);
            stream.resume();
          });

          extract.on('finish', resolve);
          extract.on('error', reject);

          const stream = Readable.from(req.file.buffer);
          stream.pipe(extract);
        });

      } else {
        return res.status(400).json({ error: 'Unsupported archive format. Please use ZIP or TAR.' });
      }

      res.json({
        success: true,
        filesCount: files.length,
        files
      });

    } catch (error) {
      console.error('Archive listing error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to list archive contents: ${errorMessage}` });
    }
  });

  // ========================================
  // WEB TOOLS - Color, CSS, SEO, Calculators
  // ========================================
  app.post('/api/web/color-convert', upload.none(), async (req, res) => {
    try {
      const { color, from, to } = req.body;

      if (!color) {
        return res.status(400).json({ error: 'No color provided' });
      }

      let result: any;

      if (from === 'hex' && to === 'rgb') {
        result = webUtils.hexToRGB(color);
      } else if (from === 'rgb' && to === 'hex') {
        const rgb = JSON.parse(color);
        result = webUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      } else if (from === 'hex' && to === 'hsl') {
        result = webUtils.hexToHSL(color);
      } else {
        return res.status(400).json({ error: 'Unsupported conversion' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Color conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to convert color: ${errorMessage}` });
    }
  });

  app.post('/api/web/generate-palette', upload.none(), async (req, res) => {
    try {
      const { baseColor, count } = req.body;

      if (!baseColor) {
        return res.status(400).json({ error: 'No base color provided' });
      }

      const palette = webUtils.generateColorPalette(baseColor, count || 5);

      res.json({ palette });

    } catch (error) {
      console.error('Palette generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate palette: ${errorMessage}` });
    }
  });

  app.post('/api/web/color-picker', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      const sharp = await import('sharp');
      const image = sharp.default(req.file.buffer);
      
      const { dominant } = await image.stats();
      const dominantColor = `#${dominant.r.toString(16).padStart(2, '0')}${dominant.g.toString(16).padStart(2, '0')}${dominant.b.toString(16).padStart(2, '0')}`;

      const resized = await image.resize(50, 50, { fit: 'cover' }).raw().toBuffer({ resolveWithObject: true });
      const pixels = resized.data;
      const colorMap = new Map<string, number>();

      for (let i = 0; i < pixels.length; i += 3) {
        const hex = `#${pixels[i].toString(16).padStart(2, '0')}${pixels[i + 1].toString(16).padStart(2, '0')}${pixels[i + 2].toString(16).padStart(2, '0')}`;
        colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
      }

      const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([color]) => color);

      res.json({
        dominant: dominantColor,
        palette: sortedColors
      });

    } catch (error) {
      console.error('Color picker error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to extract colors from image: ${errorMessage}` });
    }
  });

  app.post('/api/web/color-harmony', upload.none(), async (req, res) => {
    try {
      const { color, scheme = 'complementary' } = req.body;

      if (!color) {
        return res.status(400).json({ error: 'Base color is required' });
      }

      const hexToHSL = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;

        if (max !== min) {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          
          switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
          }
        }

        return { h: h * 360, s: s * 100, l: l * 100 };
      };

      const HSLToHex = (h: number, s: number, l: number) => {
        s = s / 100;
        l = l / 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;

        if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
        else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
        else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
        else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
        else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
        else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      };

      const hsl = hexToHSL(color);
      const colors: string[] = [color];

      switch (scheme) {
        case 'complementary':
          colors.push(HSLToHex((hsl.h + 180) % 360, hsl.s, hsl.l));
          break;
        case 'analogous':
          colors.push(HSLToHex((hsl.h + 30) % 360, hsl.s, hsl.l));
          colors.push(HSLToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l));
          break;
        case 'triadic':
          colors.push(HSLToHex((hsl.h + 120) % 360, hsl.s, hsl.l));
          colors.push(HSLToHex((hsl.h + 240) % 360, hsl.s, hsl.l));
          break;
        case 'split-complementary':
          colors.push(HSLToHex((hsl.h + 150) % 360, hsl.s, hsl.l));
          colors.push(HSLToHex((hsl.h + 210) % 360, hsl.s, hsl.l));
          break;
        case 'tetradic':
          colors.push(HSLToHex((hsl.h + 90) % 360, hsl.s, hsl.l));
          colors.push(HSLToHex((hsl.h + 180) % 360, hsl.s, hsl.l));
          colors.push(HSLToHex((hsl.h + 270) % 360, hsl.s, hsl.l));
          break;
        case 'monochromatic':
          colors.push(HSLToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 20)));
          colors.push(HSLToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 20)));
          break;
        default:
          return res.status(400).json({ error: 'Invalid color scheme' });
      }

      res.json({ scheme, colors });

    } catch (error) {
      console.error('Color harmony error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate color harmony: ${errorMessage}` });
    }
  });

  app.post('/api/web/color-blindness', upload.none(), async (req, res) => {
    try {
      const { color, type = 'protanopia' } = req.body;

      if (!color) {
        return res.status(400).json({ error: 'Color is required' });
      }

      const hexToRGB = (hex: string) => ({
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
      });

      const rgbToHex = (r: number, g: number, b: number) => {
        r = Math.max(0, Math.min(255, Math.round(r)));
        g = Math.max(0, Math.min(255, Math.round(g)));
        b = Math.max(0, Math.min(255, Math.round(b)));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      };

      const rgb = hexToRGB(color);
      let result: { r: number; g: number; b: number };

      switch (type) {
        case 'protanopia':
          result = {
            r: 0.567 * rgb.r + 0.433 * rgb.g,
            g: 0.558 * rgb.r + 0.442 * rgb.g,
            b: 0.242 * rgb.g + 0.758 * rgb.b
          };
          break;
        case 'deuteranopia':
          result = {
            r: 0.625 * rgb.r + 0.375 * rgb.g,
            g: 0.7 * rgb.r + 0.3 * rgb.g,
            b: 0.3 * rgb.g + 0.7 * rgb.b
          };
          break;
        case 'tritanopia':
          result = {
            r: 0.95 * rgb.r + 0.05 * rgb.g,
            g: 0.433 * rgb.g + 0.567 * rgb.b,
            b: 0.475 * rgb.g + 0.525 * rgb.b
          };
          break;
        case 'achromatopsia':
          const gray = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
          result = { r: gray, g: gray, b: gray };
          break;
        default:
          return res.status(400).json({ error: 'Invalid color blindness type' });
      }

      res.json({
        original: color,
        type,
        simulated: rgbToHex(result.r, result.g, result.b)
      });

    } catch (error) {
      console.error('Color blindness simulation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to simulate color blindness: ${errorMessage}` });
    }
  });

  app.post('/api/web/css-generator', upload.none(), async (req, res) => {
    try {
      const { type, options } = req.body;
      let result: string;

      switch (type) {
        case 'box-shadow':
          result = webUtils.generateBoxShadow(options);
          break;
        case 'gradient':
          result = webUtils.generateGradient(options.gradientType || 'linear', options.colors || [], options.angle || 90);
          break;
        case 'border-radius':
          result = webUtils.generateBorderRadius(options.radius || 8);
          break;
        default:
          return res.status(400).json({ error: 'Unknown CSS generator type' });
      }

      res.json({ result });

    } catch (error) {
      console.error('CSS generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate CSS: ${errorMessage}` });
    }
  });

  app.post('/api/web/seo/meta-tags', upload.none(), async (req, res) => {
    try {
      const options = req.body;

      if (!options.title || !options.description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }

      const result = webUtils.generateMetaTags(options);

      res.json({ result });

    } catch (error) {
      console.error('Meta tags generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate meta tags: ${errorMessage}` });
    }
  });

  app.post('/api/web/seo/sitemap', upload.none(), async (req, res) => {
    try {
      const { urls } = req.body;

      if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'URLs array is required' });
      }

      const result = webUtils.generateSitemap(urls);

      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Content-Disposition', 'attachment; filename="sitemap.xml"');
      res.send(result);

    } catch (error) {
      console.error('Sitemap generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate sitemap: ${errorMessage}` });
    }
  });

  app.post('/api/web/seo/robots-txt', upload.none(), async (req, res) => {
    try {
      const { userAgents = ['*'], allows = [], disallows = [], sitemap } = req.body;

      let robotsTxt = '';
      
      userAgents.forEach((agent: string) => {
        robotsTxt += `User-agent: ${agent}\n`;
        allows.forEach((path: string) => robotsTxt += `Allow: ${path}\n`);
        disallows.forEach((path: string) => robotsTxt += `Disallow: ${path}\n`);
        robotsTxt += '\n';
      });

      if (sitemap) {
        robotsTxt += `Sitemap: ${sitemap}\n`;
      }

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Disposition', 'attachment; filename="robots.txt"');
      res.send(robotsTxt.trim());

    } catch (error) {
      console.error('Robots.txt generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate robots.txt: ${errorMessage}` });
    }
  });

  app.post('/api/web/seo/schema-markup', upload.none(), async (req, res) => {
    try {
      const { type, data } = req.body;

      if (!type || !data) {
        return res.status(400).json({ error: 'Schema type and data are required' });
      }

      const schema: any = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
      };

      res.json({ schema: JSON.stringify(schema, null, 2) });

    } catch (error) {
      console.error('Schema markup generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate schema markup: ${errorMessage}` });
    }
  });

  app.post('/api/web/calculator', upload.none(), async (req, res) => {
    try {
      const { type, values } = req.body;
      let result: any;

      switch (type) {
        case 'percentage':
          result = webUtils.calculatePercentage(values.value, values.total);
          break;
        case 'discount':
          result = webUtils.calculateDiscount(values.originalPrice, values.discountPercent);
          break;
        case 'tip':
          result = webUtils.calculateTip(values.billAmount, values.tipPercent, values.splitBy);
          break;
        case 'age':
          result = webUtils.calculateAge(values.birthDate);
          break;
        case 'days-between':
          result = webUtils.calculateDaysBetween(values.date1, values.date2);
          break;
        case 'dpi':
          const diagonalInches = parseFloat(values.diagonalInches);
          const widthPixels = parseFloat(values.widthPixels);
          const heightPixels = parseFloat(values.heightPixels);
          
          if (isNaN(diagonalInches) || isNaN(widthPixels) || isNaN(heightPixels)) {
            return res.status(400).json({ error: 'Invalid numeric values for DPI calculation' });
          }
          if (diagonalInches <= 0) {
            return res.status(400).json({ error: 'Diagonal inches must be greater than 0' });
          }
          
          const diagonalPixels = Math.sqrt(widthPixels * widthPixels + heightPixels * heightPixels);
          result = { dpi: Math.round(diagonalPixels / diagonalInches) };
          break;
        case 'aspect-ratio':
          const width = parseFloat(values.width);
          const height = parseFloat(values.height);
          
          if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
            return res.status(400).json({ error: 'Valid width and height are required' });
          }
          
          const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
          const divisor = gcd(Math.round(width), Math.round(height));
          result = {
            ratio: `${Math.round(width) / divisor}:${Math.round(height) / divisor}`,
            decimal: (width / height).toFixed(2)
          };
          break;
        case 'loan':
          const principal = parseFloat(values.principal);
          const annualRate = parseFloat(values.annualRate);
          const years = parseFloat(values.years);
          
          if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
            return res.status(400).json({ error: 'Invalid loan calculation values' });
          }
          if (principal <= 0 || annualRate < 0 || years <= 0) {
            return res.status(400).json({ error: 'Principal and years must be positive, rate must be non-negative' });
          }
          
          const monthlyRate = annualRate / 100 / 12;
          const numPayments = years * 12;
          const monthlyPayment = monthlyRate === 0 ? 
            principal / numPayments : 
            principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
          const totalPaid = monthlyPayment * numPayments;
          const totalInterest = totalPaid - principal;
          result = {
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPaid: totalPaid.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
          };
          break;
        case 'mortgage':
          const loanAmount = parseFloat(values.loanAmount);
          const interestRate = parseFloat(values.interestRate);
          const loanTerm = parseFloat(values.loanTerm);
          
          if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
            return res.status(400).json({ error: 'Invalid mortgage calculation values' });
          }
          if (loanAmount <= 0 || interestRate < 0 || loanTerm <= 0) {
            return res.status(400).json({ error: 'Loan amount and term must be positive, interest rate must be non-negative' });
          }
          
          const monthlyInterestRate = interestRate / 100 / 12;
          const numberOfPayments = loanTerm * 12;
          const monthlyPaymentCalc = monthlyInterestRate === 0 ?
            loanAmount / numberOfPayments :
            loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
          const totalPayment = monthlyPaymentCalc * numberOfPayments;
          const totalInt = totalPayment - loanAmount;
          result = {
            monthlyPayment: monthlyPaymentCalc.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            totalInterest: totalInt.toFixed(2)
          };
          break;
        default:
          return res.status(400).json({ error: 'Unknown calculator type' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Calculator error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Calculation failed: ${errorMessage}` });
    }
  });

  app.post('/api/web/convert-unit', upload.none(), async (req, res) => {
    try {
      const { value, from, to, category } = req.body;

      if (value === undefined || !from || !to || !category) {
        return res.status(400).json({ error: 'Value, from, to, and category are required' });
      }

      const numValue = parseFloat(value);
      if (isNaN(numValue) || !isFinite(numValue)) {
        return res.status(400).json({ error: 'Invalid numeric value for conversion' });
      }

      let result: number = 0;

      switch (category) {
        case 'length':
          const lengthUnits: Record<string, number> = {
            meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001,
            mile: 1609.34, yard: 0.9144, foot: 0.3048, inch: 0.0254
          };
          result = numValue * (lengthUnits[from] / lengthUnits[to]);
          break;

        case 'weight':
          const weightUnits: Record<string, number> = {
            kilogram: 1, gram: 0.001, milligram: 0.000001, ton: 1000,
            pound: 0.453592, ounce: 0.0283495
          };
          result = numValue * (weightUnits[from] / weightUnits[to]);
          break;

        case 'temperature':
          if (from === 'celsius' && to === 'fahrenheit') result = (numValue * 9/5) + 32;
          else if (from === 'fahrenheit' && to === 'celsius') result = (numValue - 32) * 5/9;
          else if (from === 'celsius' && to === 'kelvin') result = numValue + 273.15;
          else if (from === 'kelvin' && to === 'celsius') result = numValue - 273.15;
          else if (from === 'fahrenheit' && to === 'kelvin') result = (numValue - 32) * 5/9 + 273.15;
          else if (from === 'kelvin' && to === 'fahrenheit') result = (numValue - 273.15) * 9/5 + 32;
          else result = numValue;
          break;

        case 'area':
          const areaUnits: Record<string, number> = {
            'square-meter': 1, 'square-kilometer': 1000000, 'square-centimeter': 0.0001,
            'square-mile': 2589988.11, 'square-yard': 0.836127, 'square-foot': 0.092903,
            'acre': 4046.86, 'hectare': 10000
          };
          result = numValue * (areaUnits[from] / areaUnits[to]);
          break;

        case 'volume':
          const volumeUnits: Record<string, number> = {
            liter: 1, milliliter: 0.001, 'cubic-meter': 1000, 'cubic-centimeter': 0.001,
            gallon: 3.78541, quart: 0.946353, pint: 0.473176, cup: 0.236588,
            'fluid-ounce': 0.0295735, tablespoon: 0.0147868, teaspoon: 0.00492892
          };
          result = numValue * (volumeUnits[from] / volumeUnits[to]);
          break;

        default:
          return res.status(400).json({ error: 'Unknown unit category' });
      }

      res.json({ result: result.toFixed(6), value: numValue, from, to, category });

    } catch (error) {
      console.error('Unit conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Unit conversion failed: ${errorMessage}` });
    }
  });

  app.post('/api/web/time-date', upload.none(), async (req, res) => {
    try {
      const { type, ...values } = req.body;
      let result: any;

      switch (type) {
        case 'age':
          if (!values.birthDate) {
            return res.status(400).json({ error: 'Birth date is required' });
          }
          const birthDate = new Date(values.birthDate);
          if (isNaN(birthDate.getTime())) {
            return res.status(400).json({ error: 'Invalid birth date format' });
          }
          const today = new Date();
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          result = { age, years: age };
          break;

        case 'date-difference':
          if (!values.date1 || !values.date2) {
            return res.status(400).json({ error: 'Both dates are required' });
          }
          const date1 = new Date(values.date1);
          const date2 = new Date(values.date2);
          if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
            return res.status(400).json({ error: 'Invalid date format' });
          }
          const diffTime = Math.abs(date2.getTime() - date1.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const diffWeeks = Math.floor(diffDays / 7);
          const diffMonths = Math.floor(diffDays / 30.44);
          const diffYears = Math.floor(diffDays / 365.25);
          result = { days: diffDays, weeks: diffWeeks, months: diffMonths, years: diffYears };
          break;

        case 'timezone-convert':
          if (!values.dateTime) {
            return res.status(400).json({ error: 'Date and time are required' });
          }
          const sourceDate = new Date(values.dateTime);
          if (isNaN(sourceDate.getTime())) {
            return res.status(400).json({ error: 'Invalid date/time format' });
          }
          const sourceTimezone = values.sourceTimezone || 'UTC';
          const targetTimezone = values.targetTimezone || 'UTC';
          
          try {
            new Intl.DateTimeFormat('en-US', { timeZone: sourceTimezone });
            new Intl.DateTimeFormat('en-US', { timeZone: targetTimezone });
            
            const sourceTimeString = sourceDate.toLocaleString('en-US', { timeZone: sourceTimezone });
            const targetTimeString = sourceDate.toLocaleString('en-US', { timeZone: targetTimezone });
            
            result = {
              source: { timezone: sourceTimezone, dateTime: sourceTimeString },
              target: { timezone: targetTimezone, dateTime: targetTimeString }
            };
          } catch (tzError) {
            const errorMessage = tzError instanceof Error ? tzError.message : 'Invalid timezone';
            return res.status(400).json({ error: `Invalid timezone specified: ${errorMessage}` });
          }
          break;

        case 'add-time':
          if (!values.date) {
            return res.status(400).json({ error: 'Base date is required' });
          }
          const baseDate = new Date(values.date);
          if (isNaN(baseDate.getTime())) {
            return res.status(400).json({ error: 'Invalid date format' });
          }
          
          const addYears = parseInt(values.years) || 0;
          const addMonths = parseInt(values.months) || 0;
          const addDays = parseInt(values.days) || 0;
          const addHours = parseInt(values.hours) || 0;
          const addMinutes = parseInt(values.minutes) || 0;
          
          baseDate.setFullYear(baseDate.getFullYear() + addYears);
          baseDate.setMonth(baseDate.getMonth() + addMonths);
          baseDate.setDate(baseDate.getDate() + addDays);
          baseDate.setHours(baseDate.getHours() + addHours);
          baseDate.setMinutes(baseDate.getMinutes() + addMinutes);
          
          result = { resultDate: baseDate.toISOString() };
          break;

        default:
          return res.status(400).json({ error: 'Unknown time/date operation' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Time/date operation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Time/date operation failed: ${errorMessage}` });
    }
  });

  // ========================================
  // AUDIO TOOLS - Conversion
  // ========================================
  app.post('/api/audio/convert', audioOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.audioConversionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, outputFormat, bitrate, quality } = validation.data;
      let result: Buffer;
      const format = outputFormat;

      switch (toolId) {
        case 'audio-to-mp3':
        case 'mp3-converter':
        case 'convert-to-mp3':
          result = await audioVideoUtils.convertAudioToMP3(file.buffer, bitrate || '192k');
          break;
        case 'audio-to-wav':
        case 'wav-converter':
          result = await audioVideoUtils.convertAudioToWAV(file.buffer);
          break;
        case 'audio-to-aac':
        case 'aac-converter':
        case 'mp3-to-aac':
        case 'aac-to-mp3':
          result = await audioVideoUtils.convertAudioToAAC(file.buffer, bitrate || '192k');
          break;
        case 'audio-to-flac':
        case 'flac-converter':
        case 'mp3-to-flac':
        case 'flac-to-mp3':
          result = await audioVideoUtils.convertAudioToFLAC(file.buffer);
          break;
        case 'audio-to-ogg':
        case 'ogg-converter':
        case 'mp3-to-ogg':
        case 'ogg-to-mp3':
          result = await audioVideoUtils.convertAudioToOGG(file.buffer, quality);
          break;
        case 'audio-to-m4a':
        case 'm4a-converter':
        case 'mp3-to-m4a':
        case 'm4a-to-mp3':
          result = await audioVideoUtils.convertAudioToM4A(file.buffer, bitrate || '192k');
          break;
        case 'audio-to-wma':
        case 'wma-converter':
          result = await audioVideoUtils.convertAudioToWMA(file.buffer, bitrate || '192k');
          break;
        case 'audio-to-aiff':
        case 'aiff-converter':
          result = await audioVideoUtils.convertAudioToAIFF(file.buffer);
          break;
        default:
          return res.status(400).json({ error: 'Unknown audio conversion tool' });
      }

      res.setHeader('Content-Type', `audio/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="converted.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Audio conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Audio conversion failed: ${errorMessage}` });
    }
  });

  // ========================================
  // AUDIO TOOLS - Editing
  // ========================================
  app.post('/api/audio/edit', audioOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.audioEditingSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, startTime, duration, volume, speed, semitones, outputFormat } = validation.data;

      audioVideoValidators.validateTrimOperation(toolId, startTime, duration);
      audioVideoValidators.validateVolumeOperation(toolId, volume);
      audioVideoValidators.validateSpeedOperation(toolId, speed);
      audioVideoValidators.validatePitchOperation(toolId, semitones);
      audioVideoValidators.validateFadeOperation(toolId, parseFloat(startTime || '0'), parseFloat(duration || '0'));

      let result: Buffer;
      const format = outputFormat;

      switch (toolId) {
        case 'trim-audio':
        case 'cut-audio':
        case 'clip-audio':
          result = await audioVideoUtils.trimAudio(file.buffer, startTime, duration, format);
          break;
        case 'adjust-volume':
        case 'change-audio-volume':
        case 'increase-volume':
        case 'decrease-volume':
          result = await audioVideoUtils.adjustAudioVolume(file.buffer, parseFloat(volume), format);
          break;
        case 'normalize-audio':
        case 'audio-normalizer':
          result = await audioVideoUtils.normalizeAudio(file.buffer, format);
          break;
        case 'fade-in-audio':
          result = await audioVideoUtils.fadeInAudio(file.buffer, parseFloat(duration), format);
          break;
        case 'fade-out-audio':
          result = await audioVideoUtils.fadeOutAudio(file.buffer, parseFloat(startTime), parseFloat(duration), format);
          break;
        case 'change-audio-speed':
        case 'speed-up-audio':
        case 'slow-down-audio':
          result = await audioVideoUtils.changeAudioSpeed(file.buffer, parseFloat(speed), format);
          break;
        case 'change-pitch':
        case 'pitch-shifter':
          result = await audioVideoUtils.changePitch(file.buffer, parseInt(semitones), format);
          break;
        case 'reverse-audio':
        case 'audio-reverser':
          result = await audioVideoUtils.reverseAudio(file.buffer, format);
          break;
        default:
          return res.status(400).json({ error: 'Unknown audio editing tool' });
      }

      res.setHeader('Content-Type', `audio/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="edited.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Audio editing error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Audio editing failed: ${errorMessage}` });
    }
  });

  // ========================================
  // AUDIO TOOLS - Effects
  // ========================================
  app.post('/api/audio/effects', audioOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.audioEffectsSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, roomSize, delay, decay, bass, mid, treble, outputFormat } = validation.data;
      let result: Buffer;
      const format = outputFormat;

      switch (toolId) {
        case 'add-reverb':
        case 'reverb-effect':
          result = await audioVideoUtils.addReverbToAudio(file.buffer, parseInt(roomSize) || 50, format);
          break;
        case 'add-echo':
        case 'echo-effect':
          result = await audioVideoUtils.addEchoToAudio(file.buffer, parseInt(delay) || 1000, parseFloat(decay) || 0.5, format);
          break;
        case 'equalizer':
        case 'audio-equalizer':
          result = await audioVideoUtils.applyEqualizerToAudio(
            file.buffer,
            parseInt(bass) || 0,
            parseInt(mid) || 0,
            parseInt(treble) || 0,
            format
          );
          break;
        case 'noise-reduction':
        case 'remove-noise':
        case 'denoise-audio':
          result = await audioVideoUtils.removeNoiseFromAudio(file.buffer, format);
          break;
        default:
          return res.status(400).json({ error: 'Unknown audio effect tool' });
      }

      res.setHeader('Content-Type', `audio/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="effect.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Audio effects error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Audio effect failed: ${errorMessage}` });
    }
  });

  // ========================================
  // VIDEO TOOLS - Conversion
  // ========================================
  app.post('/api/video/convert', videoOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.videoConversionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, quality, outputFormat } = validation.data;
      let result: Buffer;
      const format = outputFormat;

      switch (toolId) {
        case 'video-to-mp4':
        case 'mp4-converter':
        case 'convert-to-mp4':
          result = await audioVideoUtils.convertVideoToMP4(file.buffer, quality || 'medium');
          break;
        case 'video-to-avi':
        case 'avi-converter':
        case 'mp4-to-avi':
          result = await audioVideoUtils.convertVideoToAVI(file.buffer);
          break;
        case 'video-to-mov':
        case 'mov-converter':
        case 'mp4-to-mov':
          result = await audioVideoUtils.convertVideoToMOV(file.buffer);
          break;
        case 'video-to-webm':
        case 'webm-converter':
        case 'mp4-to-webm':
          result = await audioVideoUtils.convertVideoToWebM(file.buffer, quality || 'medium');
          break;
        case 'video-to-mkv':
        case 'mkv-converter':
        case 'mp4-to-mkv':
          result = await audioVideoUtils.convertVideoToMKV(file.buffer);
          break;
        case 'video-to-flv':
        case 'flv-converter':
          result = await audioVideoUtils.convertVideoToFLV(file.buffer);
          break;
        case 'video-to-mpeg':
        case 'mpeg-converter':
          result = await audioVideoUtils.convertVideoToMPEG(file.buffer);
          break;
        case 'video-to-wmv':
        case 'wmv-converter':
          result = await audioVideoUtils.convertVideoToWMV(file.buffer);
          break;
        default:
          return res.status(400).json({ error: 'Unknown video conversion tool' });
      }

      res.setHeader('Content-Type', `video/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="converted.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Video conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Video conversion failed: ${errorMessage}` });
    }
  });

  // ========================================
  // VIDEO TOOLS - Editing
  // ========================================
  app.post('/api/video/edit', videoOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.videoEditingSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, startTime, duration, width, height, speed, angle, direction, quality, outputFormat } = validation.data;

      audioVideoValidators.validateTrimOperation(toolId, startTime, duration);
      audioVideoValidators.validateResizeOperation(toolId, width, height);
      audioVideoValidators.validateSpeedOperation(toolId, speed);
      audioVideoValidators.validateRotateOperation(toolId, angle);

      let result: Buffer;
      const format = outputFormat;

      switch (toolId) {
        case 'trim-video':
        case 'cut-video':
        case 'clip-video':
          result = await audioVideoUtils.trimVideo(file.buffer, startTime, duration, format);
          break;
        case 'compress-video':
        case 'reduce-video-size':
        case 'video-compressor':
          result = await audioVideoUtils.compressVideo(file.buffer, quality || 'medium');
          break;
        case 'resize-video':
        case 'scale-video':
        case 'change-video-resolution':
          result = await audioVideoUtils.resizeVideo(file.buffer, parseInt(width), parseInt(height), format);
          break;
        case 'change-video-speed':
        case 'speed-up-video':
        case 'slow-down-video':
          result = await audioVideoUtils.changeVideoSpeed(file.buffer, parseFloat(speed), format);
          break;
        case 'rotate-video':
        case 'rotate-video-90':
        case 'rotate-video-180':
        case 'rotate-video-270':
          result = await audioVideoUtils.rotateVideo(file.buffer, parseInt(angle) as 90 | 180 | 270, format);
          break;
        case 'flip-video':
        case 'flip-video-horizontal':
        case 'flip-video-vertical':
        case 'mirror-video':
          result = await audioVideoUtils.flipVideo(file.buffer, direction || 'horizontal', format);
          break;
        default:
          return res.status(400).json({ error: 'Unknown video editing tool' });
      }

      res.setHeader('Content-Type', `video/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="edited.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Video editing error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Video editing failed: ${errorMessage}` });
    }
  });

  // ========================================
  // VIDEO TO AUDIO - Extract Audio
  // ========================================
  app.post('/api/video/extract-audio', videoOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = audioVideoValidators.videoToAudioSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { toolId, outputFormat, bitrate } = validation.data;
      const result = await audioVideoUtils.extractAudioFromVideo(file.buffer, outputFormat, bitrate);

      res.setHeader('Content-Type', `audio/${outputFormat}`);
      res.setHeader('Content-Disposition', `attachment; filename="audio.${outputFormat}"`);
      res.send(result);

    } catch (error) {
      console.error('Audio extraction error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Audio extraction failed: ${errorMessage}` });
    }
  });

  // ========================================
  // AUDIO METADATA
  // ========================================
  app.post('/api/audio/metadata', audioOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const metadata = await audioVideoUtils.getAudioMetadata(file.buffer);
      res.json(metadata);

    } catch (error) {
      console.error('Metadata extraction error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Metadata extraction failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE COMPRESSION
  // ========================================
  app.post('/api/image/compress', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = imageValidators.imageCompressionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { quality, format } = validation.data;
      const result = await imageUtils.compressImage(file.buffer, quality, format);

      const outputFormat = format || 'jpeg';
      res.setHeader('Content-Type', `image/${outputFormat}`);
      res.setHeader('Content-Disposition', `attachment; filename="compressed.${outputFormat}"`);
      res.send(result);

    } catch (error) {
      console.error('Image compression error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image compression failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE CONVERSION
  // ========================================
  app.post('/api/image/convert', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = imageValidators.imageConversionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { outputFormat, quality } = validation.data;
      const result = await imageUtils.convertImageFormat(file.buffer, outputFormat);

      res.setHeader('Content-Type', `image/${outputFormat}`);
      res.setHeader('Content-Disposition', `attachment; filename="converted.${outputFormat}"`);
      res.send(result);

    } catch (error) {
      console.error('Image conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image conversion failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE RESIZE
  // ========================================
  app.post('/api/image/resize', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = imageValidators.imageResizeSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { width, height, fit } = validation.data;
      imageValidators.validateResizeOperation('resize', width, height);
      
      const result = await imageUtils.resizeImage(file.buffer, width, height, fit);

      res.setHeader('Content-Type', file.mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="resized.${file.originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image resize error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image resize failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE CROP
  // ========================================
  app.post('/api/image/crop', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = imageValidators.imageCropSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { left, top, width, height } = validation.data;
      imageValidators.validateCropOperation('crop', left, top, width, height);
      
      const result = await imageUtils.cropImage(file.buffer, left, top, width, height);

      res.setHeader('Content-Type', file.mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="cropped.${file.originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image crop error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image crop failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE ROTATE & FLIP
  // ========================================
  app.post('/api/image/transform', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const { toolId, angle, direction } = req.body;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      let result: Buffer;

      if (toolId?.includes('rotate')) {
        const validation = imageValidators.imageRotateSchema.safeParse(req.body);
        if (!validation.success) {
          return res.status(400).json({ 
            error: 'Invalid parameters', 
            details: validation.error.errors.map(e => e.message).join(', ')
          });
        }
        result = await imageUtils.rotateImage(file.buffer, validation.data.angle);
      } else if (toolId?.includes('flip')) {
        const validation = imageValidators.imageFlipSchema.safeParse(req.body);
        if (!validation.success) {
          return res.status(400).json({ 
            error: 'Invalid parameters', 
            details: validation.error.errors.map(e => e.message).join(', ')
          });
        }
        const horizontal = validation.data.direction === 'horizontal' || validation.data.direction === 'both';
        const vertical = validation.data.direction === 'vertical' || validation.data.direction === 'both';
        result = await imageUtils.flipImage(file.buffer, horizontal, vertical);
      } else {
        return res.status(400).json({ error: 'Unknown transform operation' });
      }

      res.setHeader('Content-Type', file.mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="transformed.${file.originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image transform error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image transform failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE FILTERS
  // ========================================
  app.post('/api/image/filter', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const { toolId } = req.body;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      let result: Buffer;

      switch (toolId) {
        case 'grayscale-image':
        case 'black-and-white':
          result = await imageUtils.applyGrayscale(file.buffer);
          break;
        
        case 'blur-image':
          const blurValidation = imageValidators.imageFilterSchema.safeParse(req.body);
          if (!blurValidation.success) {
            return res.status(400).json({ error: 'Invalid blur parameters' });
          }
          result = await imageUtils.applyBlur(file.buffer, blurValidation.data.sigma);
          break;
        
        case 'sharpen-image':
          const sharpenValidation = imageValidators.imageFilterSchema.safeParse(req.body);
          if (!sharpenValidation.success) {
            return res.status(400).json({ error: 'Invalid sharpen parameters' });
          }
          result = await imageUtils.applySharpen(file.buffer, sharpenValidation.data.sigma);
          break;
        
        case 'invert-colors':
        case 'negate-image':
          result = await imageUtils.applyNegate(file.buffer);
          break;
        
        default:
          return res.status(400).json({ error: 'Unknown filter type' });
      }

      res.setHeader('Content-Type', file.mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="filtered.${file.originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image filter error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image filter failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE ENHANCEMENT
  // ========================================
  app.post('/api/image/enhance', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const validation = imageValidators.imageEnhanceSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { brightness, saturation, hue, contrast } = validation.data;
      
      const result = await imageUtils.enhanceImage(file.buffer, {
        brightness,
        saturation,
        hue,
        contrast
      });

      res.setHeader('Content-Type', file.mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="enhanced.${file.originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image enhancement error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image enhancement failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE WATERMARK
  // ========================================
  app.post('/api/image/watermark', imageOnly.array('files', 2), async (req, res) => {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files || files.length !== 2) {
        return res.status(400).json({ error: 'Two files required: base image and watermark' });
      }

      const validation = imageValidators.imageWatermarkSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Invalid parameters', 
          details: validation.error.errors.map(e => e.message).join(', ')
        });
      }

      const { position, opacity } = validation.data;
      
      const result = await imageUtils.addImageWatermark(
        files[0].buffer, 
        files[1].buffer, 
        position, 
        opacity
      );

      res.setHeader('Content-Type', files[0].mimetype);
      res.setHeader('Content-Disposition', `attachment; filename="watermarked.${files[0].originalname.split('.').pop()}"`);
      res.send(result);

    } catch (error) {
      console.error('Image watermark error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Image watermark failed: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE METADATA
  // ========================================
  app.post('/api/image/metadata', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const metadata = await imageUtils.getImageMetadata(file.buffer);
      res.json(metadata);

    } catch (error) {
      console.error('Image metadata error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Metadata extraction failed: ${errorMessage}` });
    }
  });

  // ========================================
  // UNIFIED PROCESSING ENDPOINT
  // Routes tool requests to appropriate handlers
  // ========================================
  app.post('/api/process-pdf', pdfOnly.array('files', 100), async (req, res) => {
    try {
      const toolId = req.body.toolId;
      const files = req.files as Express.Multer.File[];

      if (!toolId) {
        return res.status(400).json({ error: 'Tool ID is required' });
      }

      const tool = allTools.find(t => t.id === toolId);
      if (!tool) {
        return res.status(404).json({ error: `Tool not found: ${toolId}` });
      }

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      // Merge tools (require multiple files)
      const mergeTools = ['merge-pdf', 'combine-pdf', 'join-pdf-files', 'pdf-merger', 'pdf-combiner', 'append-pdf', 'add-pdf-to-pdf', 'merge-multiple-pdfs', 'combine-pdf-pages', 'interleave-pdf', 'pdf-binder', 'merge-pdf-bookmarks', 'combine-pdf-images', 'merge-pdf-word'];

      if (mergeTools.includes(toolId)) {
        const result = await pdfUtils.mergePDFsSequentially(files.map(f => f.buffer));
        const pdfBytes = await result.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
        return res.send(Buffer.from(pdfBytes));
      }

      if (toolId === 'merge-pdf-alternately') {
        const result = await pdfUtils.mergePDFsAlternately(files.map(f => f.buffer));
        const pdfBytes = await result.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
        return res.send(Buffer.from(pdfBytes));
      }

      // For single-file operations, use first file
      const file = files[0];

      // Compress tools
      if (['compress-pdf', 'pdf-compressor', 'reduce-pdf-size', 'optimize-pdf'].includes(toolId)) {
        const result = await pdfUtils.compressPDF(file, 'medium');
        const pdfBytes = await result.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
        return res.send(Buffer.from(pdfBytes));
      }

      // Split tools - default to first page extraction for simplicity
      if (['split-pdf', 'pdf-splitter', 'divide-pdf', 'break-pdf', 'extract-pdf-pages', 'pdf-page-extractor', 'delete-pdf-pages'].includes(toolId)) {
        const result = await pdfUtils.extractPDFPages(file, [1]);
        const pdfBytes = await result.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${toolId}-page-1.pdf"`);
        return res.send(Buffer.from(pdfBytes));
      }

      return res.status(501).json({ 
        error: `Tool '${tool.title}' is coming soon!`,
        capability: tool.capability 
      });

    } catch (error) {
      console.error('Process error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Processing failed: ${errorMessage}` });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
