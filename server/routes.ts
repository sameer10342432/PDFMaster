import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { PDFDocument } from "pdf-lib";

const upload = multer({ 
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

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/process-pdf', upload.array('files', 100), async (req, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      const toolId = req.body.toolId;

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded. Please select at least one PDF file.' });
      }

      let mergedPdf: PDFDocument;

      switch (toolId) {
        case 'merge-pdf':
        case 'combine-pdf':
        case 'join-pdf-files':
        case 'pdf-merger':
        case 'pdf-combiner':
          mergedPdf = await mergePDFs(files);
          break;

        case 'append-pdf':
        case 'add-pdf-to-pdf':
          if (files.length < 2) {
            return res.status(400).json({ error: 'Append mode requires at least 2 PDF files. The first file is the base, and others will be appended to it.' });
          }
          mergedPdf = await appendPDFs(files);
          break;

        case 'merge-multiple-pdfs':
          mergedPdf = await batchMergePDFs(files);
          break;

        case 'combine-pdf-pages':
          mergedPdf = await combinePDFPages(files);
          break;

        case 'merge-pdf-alternately':
          if (files.length < 2) {
            return res.status(400).json({ error: 'Alternating merge requires at least 2 PDF files to interleave pages.' });
          }
          mergedPdf = await mergePDFsAlternately(files);
          break;

        default:
          return res.status(400).json({ error: `Invalid tool ID: ${toolId}. Please select a valid PDF tool.` });
      }

      const pdfBytes = await mergedPdf.save();
      
      if (!pdfBytes || pdfBytes.length === 0) {
        throw new Error('Failed to generate PDF: resulting file is empty');
      }
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${toolId}-result.pdf"`);
      res.send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error('PDF processing error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ error: `Failed to process PDF files: ${errorMessage}` });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function mergePDFs(files: Express.Multer.File[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const pdf = await PDFDocument.load(file.buffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
}

async function appendPDFs(files: Express.Multer.File[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const pdf = await PDFDocument.load(file.buffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
}

async function batchMergePDFs(files: Express.Multer.File[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();
  
  const loadedPdfs = await Promise.all(
    files.map(file => PDFDocument.load(file.buffer))
  );

  for (const pdf of loadedPdfs) {
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
}

async function combinePDFPages(files: Express.Multer.File[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const pdf = await PDFDocument.load(file.buffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
}

async function mergePDFsAlternately(files: Express.Multer.File[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();
  const loadedPdfs = await Promise.all(
    files.map(file => PDFDocument.load(file.buffer))
  );

  const maxPages = Math.max(...loadedPdfs.map(pdf => pdf.getPageCount()));

  for (let pageIndex = 0; pageIndex < maxPages; pageIndex++) {
    for (const pdf of loadedPdfs) {
      if (pageIndex < pdf.getPageCount()) {
        const [copiedPage] = await mergedPdf.copyPages(pdf, [pageIndex]);
        mergedPdf.addPage(copiedPage);
      }
    }
  }

  return mergedPdf;
}
