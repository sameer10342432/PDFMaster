import mammoth from 'mammoth';
import * as XLSX from 'xlsx';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import path from 'path';
import fs from 'fs/promises';
import os from 'os';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const htmlDocx = require('html-docx-js');
const pdf = require('html-pdf-node');
const pdfParse = require('pdf-parse-fork');

export interface ConversionOptions {
  includeImages?: boolean;
  preserveFormatting?: boolean;
  pageSize?: string;
}

export async function pdfToWord(pdfBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  try {
    const data = await pdfParse(pdfBuffer);
    const text = data.text;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Calibri', Arial, sans-serif; margin: 40px; line-height: 1.6; }
          p { margin-bottom: 1em; }
        </style>
      </head>
      <body>
        ${text.split('\n\n').map((para: string) => `<p>${para.replace(/\n/g, '<br>')}</p>`).join('\n')}
      </body>
      </html>
    `;
    
    const docxBuffer = htmlDocx.asBlob(htmlContent);
    return Buffer.from(docxBuffer);
  } catch (error: any) {
    throw new Error(`PDF to Word conversion failed: ${error.message}`);
  }
}

export async function pdfToExcel(pdfBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  try {
    const data = await pdfParse(pdfBuffer);
    const text = data.text;
    
    const lines = text.split('\n').filter((line: string) => line.trim());
    const rows = lines.map((line: string) => {
      const cells = line.split(/\s{2,}|\t/);
      return cells.length > 1 ? cells : [line];
    });
    
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    const excelBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    return excelBuffer;
  } catch (error: any) {
    throw new Error(`PDF to Excel conversion failed: ${error.message}`);
  }
}

export async function wordToPdf(docxBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  try {
    const result = await mammoth.convertToHtml({ buffer: docxBuffer });
    const html = result.value;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Calibri', Arial, sans-serif; margin: 40px; line-height: 1.6; }
          img { max-width: 100%; height: auto; }
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;
    
    const pdfOptions = { 
      format: options.pageSize || 'A4',
      printBackground: true,
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' }
    };
    
    const file = { content: htmlContent };
    const pdfBuffer = await pdf.generatePdf(file, pdfOptions);
    return pdfBuffer;
  } catch (error: any) {
    throw new Error(`Word to PDF conversion failed: ${error.message}`);
  }
}

export async function excelToPdf(excelBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  try {
    const workbook = XLSX.read(excelBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    const htmlTable = XLSX.utils.sheet_to_html(worksheet);
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
        </style>
      </head>
      <body>
        ${htmlTable}
      </body>
      </html>
    `;
    
    const pdfOptions = { 
      format: options.pageSize || 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    };
    
    const file = { content: htmlContent };
    const pdfBuffer = await pdf.generatePdf(file, pdfOptions);
    return pdfBuffer;
  } catch (error: any) {
    throw new Error(`Excel to PDF conversion failed: ${error.message}`);
  }
}

export async function pptToPdf(pptBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const page = pdfDoc.addPage([600, 400]);
  
  page.drawText('PowerPoint to PDF conversion', {
    x: 50,
    y: 200,
    size: 20,
    font,
    color: rgb(0, 0, 0),
  });
  
  page.drawText('Note: Full PPT conversion requires additional libraries', {
    x: 50,
    y: 170,
    size: 12,
    font,
    color: rgb(0.5, 0.5, 0.5),
  });
  
  return Buffer.from(await pdfDoc.save());
}

export async function htmlToWord(htmlContent: string): Promise<Buffer> {
  const docxBuffer = htmlDocx.asBlob(htmlContent);
  return Buffer.from(docxBuffer);
}

export async function htmlToPdf(htmlContent: string, options: ConversionOptions = {}): Promise<Buffer> {
  const pdfOptions = { 
    format: options.pageSize || 'A4',
    printBackground: true,
    margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' }
  };
  
  const file = { content: htmlContent };
  const pdfBuffer = await pdf.generatePdf(file, pdfOptions);
  return pdfBuffer;
}

export async function wordToHtml(docxBuffer: Buffer): Promise<string> {
  try {
    const result = await mammoth.convertToHtml({ buffer: docxBuffer });
    return result.value;
  } catch (error: any) {
    throw new Error(`Word to HTML conversion failed: ${error.message}`);
  }
}

export async function wordToText(docxBuffer: Buffer): Promise<string> {
  try {
    const result = await mammoth.extractRawText({ buffer: docxBuffer });
    return result.value;
  } catch (error: any) {
    throw new Error(`Word to Text conversion failed: ${error.message}`);
  }
}

export async function htmlToText(htmlContent: string): Promise<string> {
  return htmlContent
    .replace(/<style[^>]*>.*?<\/style>/gi, '')
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export async function textToHtml(text: string): Promise<string> {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  
  const paragraphs = escaped.split('\n\n').map(para => 
    `<p>${para.replace(/\n/g, '<br>')}</p>`
  ).join('\n');
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    p { margin-bottom: 1em; }
  </style>
</head>
<body>
  ${paragraphs}
</body>
</html>`;
}
