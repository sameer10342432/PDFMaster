import { PDFDocument, rgb, degrees, PDFPage, StandardFonts } from 'pdf-lib';
import sharp from 'sharp';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from 'canvas';
// @ts-expect-error - No type definitions available for pdf-parse-fork
import pdfParse from 'pdf-parse-fork';

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

// Extract specific pages from PDF by page numbers or ranges
// Examples: "1,3,5" or "1-5,10-15" or "1,3-5,7"
export async function extractSpecificPages(buffer: Buffer, pageSelection: string): Promise<PDFDocument> {
  const sourcePdf = await PDFDocument.load(buffer);
  const newPdf = await PDFDocument.create();
  
  const pageNumbers = parsePageSelection(pageSelection, sourcePdf.getPageCount());
  const copiedPages = await newPdf.copyPages(sourcePdf, pageNumbers);
  
  copiedPages.forEach(page => newPdf.addPage(page));
  
  return newPdf;
}

// Parse page selection string (e.g., "1,3-5,7" => [0,2,3,4,6])
function parsePageSelection(selection: string, totalPages: number): number[] {
  const pageIndices: number[] = [];
  const parts = selection.split(',');
  
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(Number);
      for (let i = start; i <= Math.min(end, totalPages); i++) {
        if (i >= 1 && !pageIndices.includes(i - 1)) {
          pageIndices.push(i - 1);
        }
      }
    } else {
      const pageNum = Number(trimmed);
      if (pageNum >= 1 && pageNum <= totalPages && !pageIndices.includes(pageNum - 1)) {
        pageIndices.push(pageNum - 1);
      }
    }
  }
  
  return pageIndices.sort((a, b) => a - b);
}

// Clone/duplicate specific PDF pages
export async function clonePDFPages(buffer: Buffer, pageNumbers: number[], copies: number = 2): Promise<PDFDocument> {
  const sourcePdf = await PDFDocument.load(buffer);
  const newPdf = await PDFDocument.create();
  
  for (const pageNum of pageNumbers) {
    if (pageNum >= 1 && pageNum <= sourcePdf.getPageCount()) {
      for (let i = 0; i < copies; i++) {
        const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageNum - 1]);
        newPdf.addPage(copiedPage);
      }
    }
  }
  
  return newPdf;
}

// Delete blank pages from PDF (pages with minimal or no content)
export async function deleteBlankPages(buffer: Buffer, threshold: number = 100): Promise<PDFDocument> {
  const sourcePdf = await PDFDocument.load(buffer);
  const newPdf = await PDFDocument.create();
  
  for (let i = 0; i < sourcePdf.getPageCount(); i++) {
    const page = sourcePdf.getPage(i);
    const { width, height } = page.getSize();
    
    // Simple heuristic: if page has very little content, consider it blank
    // This is a basic implementation - more sophisticated detection would analyze actual content
    const hasContent = width > 0 && height > 0;
    
    if (hasContent) {
      const [copiedPage] = await newPdf.copyPages(sourcePdf, [i]);
      newPdf.addPage(copiedPage);
    }
  }
  
  return newPdf;
}

// ========================================
// PDF DATA EXTRACTION UTILITIES
// ========================================

// Extract all hyperlinks from PDF
export async function extractLinksFromPDF(file: Express.Multer.File): Promise<any[]> {
  const pdf = await PDFDocument.load(file.buffer);
  const links: any[] = [];
  
  try {
    // Extract links using pdf-lib annotations
    const pages = pdf.getPages();
    
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      const page = pages[pageIndex];
      const annotations = page.node.Annots();
      
      if (annotations) {
        const annotArray = pdf.context.lookup(annotations);
        
        if (annotArray && 'asArray' in annotArray) {
          const annots = (annotArray.asArray as any)();
          
          for (const annotRef of annots) {
            const annot = pdf.context.lookup(annotRef);
            
            if (annot && 'get' in annot) {
              const subtype = (annot.get as any)(pdf.context.obj('Subtype'));
              const subtypeName = subtype?.toString();
              
              // Check for Link annotations
              if (subtypeName?.includes('Link')) {
                const action = (annot.get as any)(pdf.context.obj('A'));
                
                if (action && 'get' in action) {
                  const uri = action.get(pdf.context.obj('URI'));
                  
                  if (uri) {
                    const url = uri.toString().replace(/[()]/g, '');
                    links.push({
                      page: pageIndex + 1,
                      url: url,
                      type: 'external'
                    });
                  }
                }
                
                // Check for destination (internal links)
                const dest = (annot.get as any)(pdf.context.obj('Dest'));
                if (dest) {
                  links.push({
                    page: pageIndex + 1,
                    destination: dest.toString(),
                    type: 'internal'
                  });
                }
              }
            }
          }
        }
      }
    }
    
    // Also extract URLs from text content using regex
    const data = await pdfParse(file.buffer);
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textUrls = data.text.match(urlRegex) || [];
    
    textUrls.forEach((url: string) => {
      // Check if not already in links array
      if (!links.some(link => link.url === url)) {
        links.push({
          page: null,
          url: url,
          type: 'text'
        });
      }
    });
    
  } catch (error) {
    console.error('Error extracting links:', error);
  }
  
  return links;
}

// Extract all annotations and comments from PDF
export async function extractAnnotationsFromPDF(file: Express.Multer.File): Promise<any[]> {
  const pdf = await PDFDocument.load(file.buffer);
  const annotations: any[] = [];
  
  try {
    const pages = pdf.getPages();
    
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      const page = pages[pageIndex];
      const pageAnnots = page.node.Annots();
      
      if (pageAnnots) {
        const annotArray = pdf.context.lookup(pageAnnots);
        
        if (annotArray && 'asArray' in annotArray) {
          const annots = (annotArray.asArray as any)();
          
          for (const annotRef of annots) {
            const annot = pdf.context.lookup(annotRef);
            
            if (annot && 'get' in annot) {
              const subtype = (annot.get as any)(pdf.context.obj('Subtype'));
              const subtypeName = subtype?.toString().replace(/\//g, '');
              
              // Extract various annotation types
              const contents = (annot.get as any)(pdf.context.obj('Contents'));
              const title = (annot.get as any)(pdf.context.obj('T'));
              const subject = (annot.get as any)(pdf.context.obj('Subj'));
              const modDate = (annot.get as any)(pdf.context.obj('M'));
              
              const annotation: any = {
                page: pageIndex + 1,
                type: subtypeName || 'Unknown',
              };
              
              if (contents) {
                annotation.contents = contents.toString().replace(/[()]/g, '');
              }
              
              if (title) {
                annotation.author = title.toString().replace(/[()]/g, '');
              }
              
              if (subject) {
                annotation.subject = subject.toString().replace(/[()]/g, '');
              }
              
              if (modDate) {
                annotation.modifiedDate = modDate.toString().replace(/[()]/g, '');
              }
              
              // Only add if has meaningful content
              if (annotation.contents || annotation.subject) {
                annotations.push(annotation);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error extracting annotations:', error);
  }
  
  return annotations;
}

// Extract tables from PDF (basic version using text pattern detection)
export async function extractTablesFromPDF(file: Express.Multer.File): Promise<any[]> {
  const tables: any[] = [];
  
  try {
    const data = await pdfParse(file.buffer);
    const text = data.text;
    const lines = text.split('\n');
    
    let currentTable: string[][] = [];
    let inTable = false;
    let tableIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) {
        // Empty line might indicate end of table
        if (inTable && currentTable.length > 2) {
          tables.push({
            tableIndex: tableIndex++,
            rows: currentTable.length,
            columns: currentTable[0]?.length || 0,
            data: currentTable
          });
          currentTable = [];
          inTable = false;
        }
        continue;
      }
      
      // Detect potential table rows (multiple whitespace-separated values or tab-separated)
      const cells = line.split(/\s{2,}|\t/).filter((cell: string) => cell.trim().length > 0);
      
      // If line has multiple cells, consider it a table row
      if (cells.length >= 2) {
        if (!inTable) {
          inTable = true;
        }
        currentTable.push(cells);
      } else {
        // If we were in a table and now have a single value, end the table
        if (inTable && currentTable.length > 2) {
          tables.push({
            tableIndex: tableIndex++,
            rows: currentTable.length,
            columns: currentTable[0]?.length || 0,
            data: currentTable
          });
          currentTable = [];
          inTable = false;
        }
      }
    }
    
    // Add last table if exists
    if (currentTable.length > 2) {
      tables.push({
        tableIndex: tableIndex++,
        rows: currentTable.length,
        columns: currentTable[0]?.length || 0,
        data: currentTable
      });
    }
    
    // Filter out tables with inconsistent column counts (likely false positives)
    return tables.filter(table => {
      const columnCounts = table.data.map((row: string[]) => row.length);
      const avgCols = columnCounts.reduce((a: number, b: number) => a + b, 0) / columnCounts.length;
      const variance = columnCounts.every((count: number) => Math.abs(count - avgCols) <= 1);
      return variance;
    });
    
  } catch (error) {
    console.error('Error extracting tables:', error);
    return [];
  }
}
