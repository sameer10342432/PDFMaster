import * as XLSX from 'xlsx';

export interface DataFormatOptions {
  sheetName?: string;
  pretty?: boolean;
  includeHeaders?: boolean;
}

export async function excelToJson(excelBuffer: Buffer, options: DataFormatOptions = {}): Promise<string> {
  try {
    const workbook = XLSX.read(excelBuffer, { type: 'buffer' });
    const sheetName = options.sheetName || workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: options.includeHeaders ? 1 : undefined,
      defval: '',
      blankrows: false
    });
    
    return JSON.stringify(jsonData, null, options.pretty ? 2 : 0);
  } catch (error: any) {
    throw new Error(`Excel to JSON conversion failed: ${error.message}`);
  }
}

export async function jsonToExcel(jsonString: string, options: DataFormatOptions = {}): Promise<Buffer> {
  try {
    const jsonData = JSON.parse(jsonString);
    
    if (!Array.isArray(jsonData)) {
      throw new Error('JSON must be an array of objects');
    }
    
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, options.sheetName || 'Sheet1');
    
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    return excelBuffer;
  } catch (error: any) {
    throw new Error(`JSON to Excel conversion failed: ${error.message}`);
  }
}

export async function excelToCsv(excelBuffer: Buffer, options: DataFormatOptions = {}): Promise<string> {
  try {
    const workbook = XLSX.read(excelBuffer, { type: 'buffer' });
    const sheetName = options.sheetName || workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    const csvData = XLSX.utils.sheet_to_csv(worksheet);
    return csvData;
  } catch (error: any) {
    throw new Error(`Excel to CSV conversion failed: ${error.message}`);
  }
}

export async function csvToExcel(csvString: string, options: DataFormatOptions = {}): Promise<Buffer> {
  try {
    const worksheet = XLSX.utils.aoa_to_sheet(
      csvString.split('\n').map(row => row.split(','))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, options.sheetName || 'Sheet1');
    
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    return excelBuffer;
  } catch (error: any) {
    throw new Error(`CSV to Excel conversion failed: ${error.message}`);
  }
}
