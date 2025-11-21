import mammoth from 'mammoth';
import * as XLSX from 'xlsx';
import { PDFDocument, StandardFonts, rgb, PageSizes } from 'pdf-lib';
import path from 'path';
import fs from 'fs/promises';
import os from 'os';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const htmlDocx = require('html-docx-js');
const pdfParse = require('pdf-parse-fork');

export interface ConversionOptions {
  includeImages?: boolean;
  preserveFormatting?: boolean;
  pageSize?: string;
}

// Helper function to strip HTML tags and extract text
function stripHtmlTags(html: string): string {
  return html
    .replace(/<style[^>]*>.*?<\/style>/gi, '')
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Helper function to create PDF from text using pdf-lib
async function createPdfFromText(text: string, options: ConversionOptions = {}): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  // Determine page size
  const pageSize = options.pageSize === 'Letter' ? PageSizes.Letter : PageSizes.A4;
  
  // Page margins
  const marginTop = 50;
  const marginBottom = 50;
  const marginLeft = 50;
  const marginRight = 50;
  
  const pageWidth = pageSize[0];
  const pageHeight = pageSize[1];
  const contentWidth = pageWidth - marginLeft - marginRight;
  const fontSize = 12;
  const lineHeight = fontSize * 1.5;
  
  let page = pdfDoc.addPage(pageSize);
  let yPosition = pageHeight - marginTop;
  
  // Split text into lines that fit within the page width
  const lines: string[] = [];
  const paragraphs = text.split('\n');
  
  for (const paragraph of paragraphs) {
    if (!paragraph.trim()) {
      lines.push('');
      continue;
    }
    
    const words = paragraph.split(' ');
    let currentLine = '';
    
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);
      
      if (textWidth > contentWidth) {
        if (currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          // Word is too long, break it
          lines.push(word);
          currentLine = '';
        }
      } else {
        currentLine = testLine;
      }
    }
    
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  
  // Draw text on pages
  for (const line of lines) {
    if (yPosition < marginBottom + lineHeight) {
      // Add new page
      page = pdfDoc.addPage(pageSize);
      yPosition = pageHeight - marginTop;
    }
    
    page.drawText(line, {
      x: marginLeft,
      y: yPosition,
      size: fontSize,
      font,
      color: rgb(0, 0, 0),
    });
    
    yPosition -= lineHeight;
  }
  
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

// Helper function to create table-like PDF from Excel data
async function createPdfFromExcelData(data: any[][], options: ConversionOptions = {}): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  // Use landscape for Excel tables
  const pageSize: [number, number] = options.pageSize === 'Letter' ? 
    [PageSizes.Letter[1], PageSizes.Letter[0]] : 
    [PageSizes.A4[1], PageSizes.A4[0]];
  
  const marginTop = 40;
  const marginBottom = 40;
  const marginLeft = 40;
  const marginRight = 40;
  
  const pageWidth = pageSize[0];
  const pageHeight = pageSize[1];
  const contentWidth = pageWidth - marginLeft - marginRight;
  const fontSize = 10;
  const lineHeight = fontSize * 1.8;
  const cellPadding = 5;
  
  let page = pdfDoc.addPage(pageSize);
  let yPosition = pageHeight - marginTop;
  
  // Calculate column widths (simple equal distribution)
  const maxCols = Math.max(...data.map(row => row.length));
  const colWidth = contentWidth / maxCols;
  
  // Draw each row
  for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
    const row = data[rowIndex];
    
    // Check if we need a new page
    if (yPosition < marginBottom + lineHeight) {
      page = pdfDoc.addPage(pageSize);
      yPosition = pageHeight - marginTop;
    }
    
    // Draw row background for header (first row)
    if (rowIndex === 0) {
      page.drawRectangle({
        x: marginLeft,
        y: yPosition - lineHeight + cellPadding,
        width: contentWidth,
        height: lineHeight,
        color: rgb(0.95, 0.95, 0.95),
      });
    }
    
    // Draw cell borders and text
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cellX = marginLeft + (colIndex * colWidth);
      const cellValue = String(row[colIndex] || '');
      
      // Draw cell border
      page.drawRectangle({
        x: cellX,
        y: yPosition - lineHeight + cellPadding,
        width: colWidth,
        height: lineHeight,
        borderColor: rgb(0.8, 0.8, 0.8),
        borderWidth: 0.5,
      });
      
      // Truncate text if too long
      let displayText = cellValue;
      const maxWidth = colWidth - (cellPadding * 2);
      let textWidth = (rowIndex === 0 ? boldFont : font).widthOfTextAtSize(displayText, fontSize);
      
      while (textWidth > maxWidth && displayText.length > 0) {
        displayText = displayText.slice(0, -1);
        textWidth = (rowIndex === 0 ? boldFont : font).widthOfTextAtSize(displayText + '...', fontSize);
      }
      
      if (displayText !== cellValue) {
        displayText = displayText + '...';
      }
      
      // Draw text
      page.drawText(displayText, {
        x: cellX + cellPadding,
        y: yPosition - lineHeight + cellPadding + (lineHeight / 2) - (fontSize / 2),
        size: fontSize,
        font: rowIndex === 0 ? boldFont : font,
        color: rgb(0, 0, 0),
      });
    }
    
    yPosition -= lineHeight;
  }
  
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
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
    // Convert Word to HTML
    const result = await mammoth.convertToHtml({ buffer: docxBuffer });
    const html = result.value;
    
    // Extract text from HTML
    const text = stripHtmlTags(html);
    
    // Create PDF from text using pdf-lib
    return createPdfFromText(text, options);
  } catch (error: any) {
    throw new Error(`Word to PDF conversion failed: ${error.message}`);
  }
}

export async function excelToPdf(excelBuffer: Buffer, options: ConversionOptions = {}): Promise<Buffer> {
  try {
    // Read Excel file
    const workbook = XLSX.read(excelBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to array of arrays
    const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    // Create PDF from Excel data using pdf-lib
    return createPdfFromExcelData(data, options);
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
  // Extract text from HTML
  const text = stripHtmlTags(htmlContent);
  
  // Create PDF from text using pdf-lib
  return createPdfFromText(text, options);
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

export async function textToWord(text: string): Promise<Buffer> {
  const html = await textToHtml(text);
  return htmlToWord(html);
}

export async function pdfToText(pdfBuffer: Buffer): Promise<string> {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text;
  } catch (error: any) {
    throw new Error(`PDF to Text conversion failed: ${error.message}`);
  }
}

export async function textToPdf(text: string, options: ConversionOptions = {}): Promise<Buffer> {
  // Create PDF directly from text using pdf-lib
  return createPdfFromText(text, options);
}

export async function excelToCsv(excelBuffer: Buffer): Promise<string> {
  try {
    const workbook = XLSX.read(excelBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    return csv;
  } catch (error: any) {
    throw new Error(`Excel to CSV conversion failed: ${error.message}`);
  }
}

export async function csvToExcel(csvContent: string): Promise<Buffer> {
  try {
    const worksheet = XLSX.utils.aoa_to_sheet(
      csvContent.split('\n').map(row => row.split(','))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    return excelBuffer;
  } catch (error: any) {
    throw new Error(`CSV to Excel conversion failed: ${error.message}`);
  }
}

export async function markdownToHtml(markdownContent: string): Promise<string> {
  let html = markdownContent
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
  html = html.replace(/^##### (.*?)$/gm, '<h5>$1</h5>');
  html = html.replace(/^###### (.*?)$/gm, '<h6>$1</h6>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');
  
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');
  
  html = html.replace(/^```([\s\S]*?)```$/gm, '<pre><code>$1</code></pre>');
  
  html = html.replace(/^\* (.+?)$/gm, '<li>$1</li>');
  html = html.replace(/^- (.+?)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
  
  html = html.replace(/^\d+\. (.+?)$/gm, '<li>$1</li>');
  
  html = html.replace(/^(?!<[h|ul|ol|li|pre|code])(.+?)$/gm, '<p>$1</p>');
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
    h1, h2, h3, h4, h5, h6 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; }
    h1 { font-size: 2em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #eee; padding-bottom: 0.3em; }
    h3 { font-size: 1.25em; }
    p { margin-bottom: 16px; }
    code { background-color: #f6f8fa; padding: 2px 6px; border-radius: 3px; font-family: monospace; }
    pre { background-color: #f6f8fa; padding: 16px; border-radius: 6px; overflow: auto; }
    pre code { background-color: transparent; padding: 0; }
    ul, ol { margin-bottom: 16px; padding-left: 2em; }
    li { margin-bottom: 4px; }
    a { color: #0366d6; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

export async function markdownToPdf(markdownContent: string, options: ConversionOptions = {}): Promise<Buffer> {
  // Convert markdown to HTML
  const html = await markdownToHtml(markdownContent);
  
  // Extract text from HTML
  const text = stripHtmlTags(html);
  
  // Create PDF from text using pdf-lib
  return createPdfFromText(text, options);
}
