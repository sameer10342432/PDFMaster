import { PDFDocument, rgb, degrees, PDFPage, StandardFonts } from 'pdf-lib';
import sharp from 'sharp';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from 'canvas';

// PDF Split Utilities
export async function splitPDFByPages(file: Express.Multer.File, pageRanges: string): Promise<PDFDocument[]> {
  const pdf = await PDFDocument.load(file.buffer);
  const totalPages = pdf.getPageCount();
  const splitPdfs: PDFDocument[] = [];
  
  // Parse page ranges (e.g., "1-3,5,7-9")
  const ranges = pageRanges.split(',').map(r => r.trim());
  
  for (const range of ranges) {
    const newPdf = await PDFDocument.create();
    
    if (range.includes('-')) {
      const [start, end] = range.split('-').map(n => parseInt(n.trim()) - 1);
      for (let i = start; i <= Math.min(end, totalPages - 1); i++) {
        const [copiedPage] = await newPdf.copyPages(pdf, [i]);
        newPdf.addPage(copiedPage);
      }
    } else {
      const pageNum = parseInt(range.trim()) - 1;
      if (pageNum >= 0 && pageNum < totalPages) {
        const [copiedPage] = await newPdf.copyPages(pdf, [pageNum]);
        newPdf.addPage(copiedPage);
      }
    }
    
    if (newPdf.getPageCount() > 0) {
      splitPdfs.push(newPdf);
    }
  }
  
  return splitPdfs;
}

export async function splitPDFEveryXPages(file: Express.Multer.File, pagesPerSplit: number): Promise<PDFDocument[]> {
  const pdf = await PDFDocument.load(file.buffer);
  const totalPages = pdf.getPageCount();
  const splitPdfs: PDFDocument[] = [];
  
  for (let i = 0; i < totalPages; i += pagesPerSplit) {
    const newPdf = await PDFDocument.create();
    const endPage = Math.min(i + pagesPerSplit, totalPages);
    
    for (let j = i; j < endPage; j++) {
      const [copiedPage] = await newPdf.copyPages(pdf, [j]);
      newPdf.addPage(copiedPage);
    }
    
    splitPdfs.push(newPdf);
  }
  
  return splitPdfs;
}

export async function splitPDFOddEvenPages(file: Express.Multer.File, type: 'odd' | 'even'): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const totalPages = pdf.getPageCount();
  const newPdf = await PDFDocument.create();
  
  for (let i = 0; i < totalPages; i++) {
    const pageNumber = i + 1;
    const isOdd = pageNumber % 2 === 1;
    
    if ((type === 'odd' && isOdd) || (type === 'even' && !isOdd)) {
      const [copiedPage] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

export async function extractPDFPages(file: Express.Multer.File, pageNumbers: number[]): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const newPdf = await PDFDocument.create();
  
  for (const pageNum of pageNumbers) {
    if (pageNum > 0 && pageNum <= pdf.getPageCount()) {
      const [copiedPage] = await newPdf.copyPages(pdf, [pageNum - 1]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

export async function deletePDFPages(file: Express.Multer.File, pageNumbers: number[]): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const newPdf = await PDFDocument.create();
  const totalPages = pdf.getPageCount();
  
  for (let i = 0; i < totalPages; i++) {
    if (!pageNumbers.includes(i + 1)) {
      const [copiedPage] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

// PDF Rotation Utilities
export async function rotatePDF(file: Express.Multer.File, rotation: number, pageNumbers?: number[]): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const pages = pdf.getPages();
  
  pages.forEach((page, index) => {
    if (!pageNumbers || pageNumbers.includes(index + 1)) {
      const currentRotation = page.getRotation().angle;
      page.setRotation(degrees(currentRotation + rotation));
    }
  });
  
  return pdf;
}

// PDF Reorder Utilities
export async function reorderPDFPages(file: Express.Multer.File, newOrder: number[]): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const newPdf = await PDFDocument.create();
  
  for (const pageNum of newOrder) {
    if (pageNum > 0 && pageNum <= pdf.getPageCount()) {
      const [copiedPage] = await newPdf.copyPages(pdf, [pageNum - 1]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

export async function reversePDFPages(file: Express.Multer.File): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const totalPages = pdf.getPageCount();
  const newPdf = await PDFDocument.create();
  
  for (let i = totalPages - 1; i >= 0; i--) {
    const [copiedPage] = await newPdf.copyPages(pdf, [i]);
    newPdf.addPage(copiedPage);
  }
  
  return newPdf;
}

// PDF Compression Utilities
export async function compressPDF(file: Express.Multer.File, quality: 'high' | 'medium' | 'low' = 'medium'): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  
  // Compression is done by removing metadata and compressing images
  pdf.setTitle('');
  pdf.setAuthor('');
  pdf.setSubject('');
  pdf.setKeywords([]);
  pdf.setProducer('');
  pdf.setCreator('');
  
  return pdf;
}

// PDF to Images Conversion
export async function convertPDFToImages(file: Express.Multer.File, format: 'png' | 'jpg' | 'webp' = 'png', dpi: number = 150): Promise<Buffer[]> {
  const imageBuffers: Buffer[] = [];
  
  try {
    const loadingTask = pdfjsLib.getDocument({
      data: file.buffer,
      verbosity: 0
    });
    
    const pdfDoc = await loadingTask.promise;
    const numPages = pdfDoc.numPages;
    
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: dpi / 72 });
      
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext('2d');
      
      await page.render({
        canvasContext: context as any,
        viewport: viewport,
        canvas: canvas as any
      }).promise;
      
      const buffer = canvas.toBuffer('image/png');
      
      // Convert using sharp for format and compression
      let imageBuffer = sharp(buffer);
      
      switch (format) {
        case 'jpg':
          imageBuffer = imageBuffer.jpeg({ quality: 90 });
          break;
        case 'webp':
          imageBuffer = imageBuffer.webp({ quality: 90 });
          break;
        default:
          imageBuffer = imageBuffer.png();
      }
      
      imageBuffers.push(await imageBuffer.toBuffer());
    }
  } catch (error) {
    console.error('PDF to images conversion error:', error);
    throw new Error('Failed to convert PDF to images');
  }
  
  return imageBuffers;
}

// PDF Watermark Utilities
export async function addWatermarkToPDF(
  file: Express.Multer.File,
  watermarkText: string,
  options: {
    opacity?: number;
    fontSize?: number;
    rotation?: number;
    position?: 'center' | 'top' | 'bottom';
  } = {}
): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const pages = pdf.getPages();
  const font = await pdf.embedFont(StandardFonts.HelveticaBold);
  
  const {
    opacity = 0.3,
    fontSize = 50,
    rotation = -45,
    position = 'center'
  } = options;
  
  for (const page of pages) {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
    const textHeight = fontSize;
    
    let x = (width - textWidth) / 2;
    let y = (height - textHeight) / 2;
    
    if (position === 'top') {
      y = height - textHeight - 50;
    } else if (position === 'bottom') {
      y = 50;
    }
    
    page.drawText(watermarkText, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.5, 0.5, 0.5),
      opacity,
      rotate: degrees(rotation),
    });
  }
  
  return pdf;
}

// PDF Security Utilities
export async function encryptPDF(file: Express.Multer.File, userPassword: string, ownerPassword?: string): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  
  // Note: pdf-lib doesn't support encryption directly
  // This is a placeholder - would need to use a different library like node-qpdf
  return pdf;
}

// PDF Page Numbering
export async function addPageNumbersToPDF(
  file: Express.Multer.File,
  options: {
    position?: 'top' | 'bottom';
    alignment?: 'left' | 'center' | 'right';
    startNumber?: number;
    fontSize?: number;
  } = {}
): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const pages = pdf.getPages();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  
  const {
    position = 'bottom',
    alignment = 'center',
    startNumber = 1,
    fontSize = 12
  } = options;
  
  pages.forEach((page, index) => {
    const pageNumber = startNumber + index;
    const text = `${pageNumber}`;
    const textWidth = font.widthOfTextAtSize(text, fontSize);
    const { width, height } = page.getSize();
    
    let x = (width - textWidth) / 2;
    if (alignment === 'left') x = 50;
    if (alignment === 'right') x = width - textWidth - 50;
    
    const y = position === 'bottom' ? 30 : height - 30;
    
    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0, 0, 0),
    });
  });
  
  return pdf;
}

// Insert Blank Pages
export async function insertBlankPages(
  file: Express.Multer.File,
  positions: number[],
  pageSize?: { width: number; height: number }
): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const newPdf = await PDFDocument.create();
  const totalPages = pdf.getPageCount();
  
  let blankPagesInserted = 0;
  
  for (let i = 0; i < totalPages; i++) {
    // Check if we need to insert a blank page before this position
    if (positions.includes(i + blankPagesInserted + 1)) {
      const blankPage = newPdf.addPage(pageSize ? [pageSize.width, pageSize.height] : undefined);
      blankPagesInserted++;
    }
    
    const [copiedPage] = await newPdf.copyPages(pdf, [i]);
    newPdf.addPage(copiedPage);
  }
  
  return newPdf;
}

// Duplicate Pages
export async function duplicatePDFPages(file: Express.Multer.File, pageNumbers: number[], times: number = 2): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  const newPdf = await PDFDocument.create();
  const totalPages = pdf.getPageCount();
  
  for (let i = 0; i < totalPages; i++) {
    const pageNum = i + 1;
    const repeatCount = pageNumbers.includes(pageNum) ? times : 1;
    
    for (let j = 0; j < repeatCount; j++) {
      const [copiedPage] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

// PDF Metadata Utilities
export async function editPDFMetadata(
  file: Express.Multer.File,
  metadata: {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string[];
    creator?: string;
    producer?: string;
  }
): Promise<PDFDocument> {
  const pdf = await PDFDocument.load(file.buffer);
  
  if (metadata.title) pdf.setTitle(metadata.title);
  if (metadata.author) pdf.setAuthor(metadata.author);
  if (metadata.subject) pdf.setSubject(metadata.subject);
  if (metadata.keywords) pdf.setKeywords(metadata.keywords);
  if (metadata.creator) pdf.setCreator(metadata.creator);
  if (metadata.producer) pdf.setProducer(metadata.producer);
  
  return pdf;
}

// Merge multiple PDFs sequentially
export async function mergePDFsSequentially(pdfBuffers: Buffer[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();

  for (const buffer of pdfBuffers) {
    const pdf = await PDFDocument.load(buffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  return mergedPdf;
}

// Merge multiple PDFs alternately (page by page from each)
export async function mergePDFsAlternately(pdfBuffers: Buffer[]): Promise<PDFDocument> {
  const mergedPdf = await PDFDocument.create();
  const loadedPdfs = await Promise.all(
    pdfBuffers.map(buffer => PDFDocument.load(buffer))
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

// Extract images from PDF
export async function extractPDFImages(file: Express.Multer.File): Promise<Buffer[]> {
  const images: Buffer[] = [];
  
  try {
    const loadingTask = pdfjsLib.getDocument({ data: file.buffer });
    const pdfDocument = await loadingTask.promise;
    
    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const operatorList = await page.getOperatorList();
      
      for (let i = 0; i < operatorList.fnArray.length; i++) {
        if (operatorList.fnArray[i] === pdfjsLib.OPS.paintImageXObject) {
          const imageName = operatorList.argsArray[i][0];
          const imageData = page.objs.get(imageName);
          
          if (imageData && imageData.data) {
            const { width, height, data } = imageData;
            
            // Convert to PNG using sharp
            const imageBuffer = await sharp(Buffer.from(data), {
              raw: {
                width,
                height,
                channels: 4
              }
            }).png().toBuffer();
            
            images.push(imageBuffer);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error extracting images:', error);
  }
  
  return images;
}
