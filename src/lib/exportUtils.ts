import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface ExportData {
  calculatorTitle: string;
  inputs: Record<string, any>;
  results: any[];
  timestamp: number;
  notes?: string;
}

/**
 * Export calculation data to CSV format
 */
export const exportToCSV = (data: ExportData, filename?: string) => {
  const csvRows = [];
  
  // Header
  csvRows.push(['Property Tools - ' + data.calculatorTitle]);
  csvRows.push(['Generated on: ' + new Date(data.timestamp).toLocaleString()]);
  csvRows.push(['']); // Empty row
  
  // Inputs section
  csvRows.push(['INPUTS']);
  csvRows.push(['Field', 'Value']);
  Object.entries(data.inputs).forEach(([key, value]) => {
    csvRows.push([key, value]);
  });
  csvRows.push(['']); // Empty row
  
  // Results section
  csvRows.push(['RESULTS']);
  csvRows.push(['Metric', 'Value']);
  data.results.forEach((result) => {
    csvRows.push([result.label, result.value]);
  });
  
  // Notes
  if (data.notes) {
    csvRows.push(['']); // Empty row
    csvRows.push(['NOTES']);
    csvRows.push([data.notes]);
  }
  
  const csvContent = csvRows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || `${data.calculatorTitle.replace(/\s+/g, '_')}_${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Export calculation data to JSON format
 */
export const exportToJSON = (data: ExportData, filename?: string) => {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || `${data.calculatorTitle.replace(/\s+/g, '_')}_${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Export calculation data to PDF format with professional formatting
 */
export const exportToPDF = (data: ExportData, options?: { 
  filename?: string;
  brandingText?: string;
  logoUrl?: string;
}) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPosition = 20;
  
  // Header with branding
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235); // Blue color
  doc.text(data.calculatorTitle, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 10;
  
  // Branding text
  if (options?.brandingText) {
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(options.brandingText, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;
  }
  
  // Timestamp
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text('Generated on: ' + new Date(data.timestamp).toLocaleString(), pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;
  
  // Inputs Table
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Calculator Inputs', 14, yPosition);
  yPosition += 7;
  
  const inputRows = Object.entries(data.inputs).map(([key, value]) => [
    key.replace(/([A-Z])/g, ' $1').trim(), // Convert camelCase to Title Case
    String(value)
  ]);
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Field', 'Value']],
    body: inputRows,
    theme: 'grid',
    headStyles: { fillColor: [37, 99, 235] },
    margin: { left: 14, right: 14 },
  });
  
  yPosition = (doc as any).lastAutoTable.finalY + 15;
  
  // Results Table
  doc.setFontSize(14);
  doc.text('Calculation Results', 14, yPosition);
  yPosition += 7;
  
  const resultRows = data.results.map(result => [
    result.label,
    String(result.value)
  ]);
  
  autoTable(doc, {
    startY: yPosition,
    head: [['Metric', 'Value']],
    body: resultRows,
    theme: 'grid',
    headStyles: { fillColor: [16, 185, 129] }, // Green color
    margin: { left: 14, right: 14 },
  });
  
  // Notes section
  if (data.notes) {
    yPosition = (doc as any).lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.text('Notes', 14, yPosition);
    yPosition += 7;
    doc.setFontSize(10);
    const splitNotes = doc.splitTextToSize(data.notes, pageWidth - 28);
    doc.text(splitNotes, 14, yPosition);
  }
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      'Property Tools - Professional Real Estate Calculators',
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }
  
  // Save PDF
  const filename = options?.filename || `${data.calculatorTitle.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(filename);
};

/**
 * Generate shareable link with encoded calculation data
 */
export const generateShareLink = (data: ExportData): string => {
  const encodedData = btoa(JSON.stringify({
    inputs: data.inputs,
    timestamp: data.timestamp,
  }));
  const currentUrl = window.location.origin + window.location.pathname;
  return `${currentUrl}?shared=${encodedData}`;
};

/**
 * Parse shared link data with comprehensive error handling
 */
export const parseShareLink = (): { inputs: Record<string, any>; timestamp: number } | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const params = new URLSearchParams(window.location.search);
    const sharedData = params.get('shared');
    
    if (!sharedData) return null;
    
    // Validate base64 format before decoding
    if (!/^[A-Za-z0-9+/]+=*$/.test(sharedData)) {
      console.warn('Invalid base64 format in shared link');
      return null;
    }
    
    const decoded = atob(sharedData);
    const parsed = JSON.parse(decoded);
    
    // Validate structure
    if (!parsed || typeof parsed !== 'object') {
      console.warn('Invalid shared link structure');
      return null;
    }
    
    // Ensure required fields exist
    if (!parsed.inputs || typeof parsed.inputs !== 'object') {
      console.warn('Missing or invalid inputs in shared link');
      return null;
    }
    
    return {
      inputs: parsed.inputs,
      timestamp: parsed.timestamp || Date.now(),
    };
  } catch (error) {
    console.error('Failed to parse shared link:', error);
    return null;
  }
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
