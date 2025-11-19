import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { PDFDocument } from "pdf-lib";
import { allTools, toolCategories } from "@shared/schema";
import archiver from 'archiver';
import * as pdfUtils from './utils/pdf-utils';
import * as imageUtils from './utils/image-utils';
import * as textUtils from './utils/text-utils';
import * as webUtils from './utils/web-utils';

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
  // IMAGE TOOLS - Compression
  // ========================================
  app.post('/api/image/compress', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const quality = parseInt(req.body.quality || '80');
      const format = req.body.format;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await imageUtils.compressImage(file.buffer, quality, format);
      const outputFormat = format || (file.mimetype.includes('png') ? 'png' : 'jpeg');

      res.setHeader('Content-Type', `image/${outputFormat}`);
      res.setHeader('Content-Disposition', `attachment; filename="compressed.${outputFormat}"`);
      res.send(result);

    } catch (error) {
      console.error('Image compress error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to compress image: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE TOOLS - Resize & Crop
  // ========================================
  app.post('/api/image/resize', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const width = req.body.width ? parseInt(req.body.width) : undefined;
      const height = req.body.height ? parseInt(req.body.height) : undefined;
      const fit = req.body.fit || 'cover';

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await imageUtils.resizeImage(file.buffer, width, height, fit);
      const format = file.mimetype.includes('png') ? 'png' : 'jpeg';

      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="resized.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Image resize error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to resize image: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE TOOLS - Rotate & Flip
  // ========================================
  app.post('/api/image/rotate', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const angle = parseInt(req.body.angle || '90');

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await imageUtils.rotateImage(file.buffer, angle);
      const format = file.mimetype.includes('png') ? 'png' : 'jpeg';

      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="rotated.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Image rotate error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to rotate image: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE TOOLS - Convert Format
  // ========================================
  app.post('/api/image/convert', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const format = req.body.format || 'png';

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await imageUtils.convertImageFormat(file.buffer, format);

      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="converted.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Image convert error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to convert image: ${errorMessage}` });
    }
  });

  // ========================================
  // IMAGE TOOLS - Filters & Effects
  // ========================================
  app.post('/api/image/filter', imageOnly.single('file'), async (req, res) => {
    try {
      const file = req.file;
      const filterType = req.body.filter;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      let result: Buffer;

      switch (filterType) {
        case 'grayscale':
          result = await imageUtils.applyGrayscale(file.buffer);
          break;
        case 'blur':
          result = await imageUtils.applyBlur(file.buffer, parseInt(req.body.sigma || '5'));
          break;
        case 'sharpen':
          result = await imageUtils.applySharpen(file.buffer, parseInt(req.body.sigma || '2'));
          break;
        case 'negate':
          result = await imageUtils.applyNegate(file.buffer);
          break;
        default:
          return res.status(400).json({ error: 'Unknown filter type' });
      }

      const format = file.mimetype.includes('png') ? 'png' : 'jpeg';
      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Disposition', `attachment; filename="filtered.${format}"`);
      res.send(result);

    } catch (error) {
      console.error('Image filter error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to apply filter: ${errorMessage}` });
    }
  });

  // ========================================
  // TEXT TOOLS - Case Conversion, Generators, Analysis
  // ========================================
  app.post('/api/text/convert-case', upload.none(), async (req, res) => {
    try {
      const { text, caseType } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      let result: string;

      switch (caseType) {
        case 'uppercase':
          result = textUtils.convertToUpperCase(text);
          break;
        case 'lowercase':
          result = textUtils.convertToLowerCase(text);
          break;
        case 'titlecase':
          result = textUtils.convertToTitleCase(text);
          break;
        case 'camelcase':
          result = textUtils.convertToCamelCase(text);
          break;
        case 'snakecase':
          result = textUtils.convertToSnakeCase(text);
          break;
        case 'kebabcase':
          result = textUtils.convertToKebabCase(text);
          break;
        default:
          return res.status(400).json({ error: 'Unknown case type' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Text case conversion error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to convert text case: ${errorMessage}` });
    }
  });

  app.post('/api/text/generate', upload.none(), async (req, res) => {
    try {
      const { type, options } = req.body;
      let result: string;

      switch (type) {
        case 'lorem':
          result = textUtils.generateLoremIpsum(options?.paragraphs || 1, options?.wordsPerPara || 50);
          break;
        case 'random':
          result = textUtils.generateRandomText(options?.length || 100, options?.includeNumbers, options?.includeSpecial);
          break;
        case 'password':
          result = textUtils.generatePassword(options?.length || 12, options);
          break;
        default:
          return res.status(400).json({ error: 'Unknown generator type' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Text generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to generate text: ${errorMessage}` });
    }
  });

  app.post('/api/text/analyze', upload.none(), async (req, res) => {
    try {
      const { text } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      const analysis = textUtils.analyzeText(text);
      const wordFrequency = textUtils.getMostCommonWords(text, 10);

      res.json({ analysis, wordFrequency });

    } catch (error) {
      console.error('Text analysis error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to analyze text: ${errorMessage}` });
    }
  });

  app.post('/api/text/manipulate', upload.none(), async (req, res) => {
    try {
      const { text, operation, options } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      let result: string;

      switch (operation) {
        case 'remove-linebreaks':
          result = textUtils.removeLineBreaks(text);
          break;
        case 'remove-spaces':
          result = textUtils.removeExtraSpaces(text);
          break;
        case 'reverse':
          result = textUtils.reverseText(text);
          break;
        case 'sort-lines':
          result = textUtils.sortLinesAlphabetically(text, options?.ascending !== false);
          break;
        case 'remove-duplicates':
          result = textUtils.removeDuplicateLines(text);
          break;
        case 'add-line-numbers':
          result = textUtils.addLineNumbers(text, options?.startNumber || 1);
          break;
        case 'find-replace':
          result = textUtils.findAndReplace(text, options?.find || '', options?.replace || '', options?.caseSensitive !== false);
          break;
        default:
          return res.status(400).json({ error: 'Unknown operation' });
      }

      res.json({ result });

    } catch (error) {
      console.error('Text manipulation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to manipulate text: ${errorMessage}` });
    }
  });

  app.post('/api/text/encode', upload.none(), async (req, res) => {
    try {
      const { text, type, action } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      let result: string;

      if (action === 'encode') {
        switch (type) {
          case 'base64':
            result = textUtils.encodeBase64(text);
            break;
          case 'url':
            result = textUtils.encodeURL(text);
            break;
          case 'html':
            result = textUtils.encodeHTML(text);
            break;
          default:
            return res.status(400).json({ error: 'Unknown encoding type' });
        }
      } else {
        switch (type) {
          case 'base64':
            result = textUtils.decodeBase64(text);
            break;
          case 'url':
            result = textUtils.decodeURL(text);
            break;
          case 'html':
            result = textUtils.decodeHTML(text);
            break;
          default:
            return res.status(400).json({ error: 'Unknown decoding type' });
        }
      }

      res.json({ result });

    } catch (error) {
      console.error('Text encoding error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: `Failed to encode/decode text: ${errorMessage}` });
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

  const httpServer = createServer(app);
  return httpServer;
}
