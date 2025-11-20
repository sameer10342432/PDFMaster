import Tesseract from 'node-tesseract-ocr';
import  pdf2pic from 'pdf2pic';
import path from 'path';
import fs from 'fs/promises';
import os from 'os';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface OCROptions {
  language?: string;
  outputFormat?: 'text' | 'pdf' | 'json';
}

export async function performOCROnImage(imageBuffer: Buffer, options: OCROptions = {}): Promise<string> {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'ocr-'));
  const tempImagePath = path.join(tempDir, 'image.png');
  
  try {
    await fs.writeFile(tempImagePath, imageBuffer);
    
    const text = await Tesseract.recognize(tempImagePath, {
      lang: options.language || 'eng',
      oem: 3,
      psm: 3,
    });
    
    return text.trim();
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

export async function performOCROnPDF(pdfBuffer: Buffer, options: OCROptions = {}): Promise<string> {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'ocr-pdf-'));
  const tempPdfPath = path.join(tempDir, 'input.pdf');
  
  try {
    await fs.writeFile(tempPdfPath, pdfBuffer);
    
    const convert = pdf2pic({
      density: 300,
      savePath: tempDir,
      saveFilename: 'page',
      format: 'png',
      width: 2480,
      height: 3508
    });
    
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();
    
    const allText: string[] = [];
    
    for (let i = 1; i <= pageCount; i++) {
      const imagePath = await convert(i, { responseType: 'image' });
      
      if (imagePath && typeof imagePath === 'object' && 'path' in imagePath) {
        const imageBuffer = await fs.readFile(imagePath.path as string);
        const text = await performOCROnImage(imageBuffer, options);
        allText.push(`--- Page ${i} ---\n${text}`);
      }
    }
    
    return allText.join('\n\n');
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

export async function createSearchablePDF(pdfBuffer: Buffer, options: OCROptions = {}): Promise<Uint8Array> {
  const extractedText = await performOCROnPDF(pdfBuffer, options);
  
  const originalDoc = await PDFDocument.load(pdfBuffer);
  const newDoc = await PDFDocument.create();
  
  const font = await newDoc.embedFont(StandardFonts.Helvetica);
  
  const pages = await newDoc.copyPages(originalDoc, originalDoc.getPageIndices());
  
  const textLines = extractedText.split('\n--- Page ');
  
  for (let i = 0; i < pages.length; i++) {
    const page = newDoc.addPage(pages[i]);
    const { height } = page.getSize();
    
    const pageText = textLines[i + 1] || '';
    const lines = pageText.split('\n').filter(line => line.trim());
    
    page.drawText(lines.slice(0, 3).join(' '), {
      x: -1000,
      y: height + 1000,
      size: 1,
      font,
      color: rgb(1, 1, 1),
      opacity: 0.01,
    });
  }
  
  return await newDoc.save();
}

export async function ocrToWord(pdfBuffer: Buffer, options: OCROptions = {}): Promise<string> {
  const extractedText = await performOCROnPDF(pdfBuffer, options);
  return extractedText;
}

export async function ocrToExcel(pdfBuffer: Buffer, options: OCROptions = {}): Promise<string> {
  const extractedText = await performOCROnPDF(pdfBuffer, options);
  const lines = extractedText.split('\n').filter(line => line.trim() && !line.startsWith('---'));
  
  const rows = lines.map(line => {
    const columns = line.split(/\s{2,}|\t/).filter(col => col.trim());
    return columns.join('\t');
  });
  
  return rows.join('\n');
}
