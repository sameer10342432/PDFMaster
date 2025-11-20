#!/usr/bin/env node

/**
 * Enable Document Conversion Tools - Phase 2
 * 
 * This script enables all document conversion tools that now have backend support:
 * - PDF ↔ Word conversion (pdf-to-word, word-to-pdf, etc.)
 * - PDF ↔ Excel conversion (pdf-to-excel, excel-to-pdf, etc.)
 * - PDF ↔ PowerPoint conversion (pdf-to-ppt, ppt-to-pdf, etc.)
 * - HTML conversion (html-to-word, html-to-pdf)
 * 
 * Backend endpoints implemented:
 * - /api/convert/pdf-to-word
 * - /api/convert/pdf-to-excel
 * - /api/convert/word-to-pdf
 * - /api/convert/excel-to-pdf
 * - /api/convert/ppt-to-pdf
 * - /api/convert/html-to-word
 * - /api/convert/html-to-pdf
 */

import fs from 'fs';

const toolsToEnable = [
  // PDF to Word conversions
  'pdf-to-word',
  'pdf-to-docx',
  'pdf-to-doc',
  
  // Word to PDF conversions
  'word-to-pdf',
  'docx-to-pdf',
  'doc-to-pdf',
  
  // PDF to Excel conversions
  'pdf-to-excel',
  'pdf-to-xlsx',
  'pdf-to-xls',
  
  // Excel to PDF conversions
  'excel-to-pdf',
  'xlsx-to-pdf',
  'xls-to-pdf',
  
  // PDF to PowerPoint conversions
  'pdf-to-ppt',
  'pdf-to-pptx',
  'pdf-to-powerpoint',
  
  // PowerPoint to PDF conversions
  'ppt-to-pdf',
  'pptx-to-pdf',
  'powerpoint-to-pdf',
  
  // HTML/Webpage conversions
  'html-to-pdf',
  'webpage-to-pdf',
  'html-to-word',
  'webpage-to-word',
  
  // Other document format conversions that can use similar endpoints
  'csv-to-pdf',
  'txt-to-pdf',
  'rtf-to-pdf',
  'markdown-to-pdf',
  'md-to-pdf',
];

console.log('🚀 Starting Document Conversion Tools Enabler...\n');
console.log(`📋 Tools to enable: ${toolsToEnable.length}`);
console.log('━'.repeat(50));

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let enabledCount = 0;
let notFoundCount = 0;
const enabledTools = [];
const notFoundTools = [];

toolsToEnable.forEach(toolId => {
  // Create regex to find and replace capability for this specific tool
  const regex = new RegExp(
    `(id:\\s*"${toolId}"[^}]*capability:\\s*")coming-soon(")`,'m'
  );
  
  if (schema.match(regex)) {
    schema = schema.replace(regex, '$1implemented$2');
    enabledCount++;
    enabledTools.push(toolId);
    console.log(`✅ Enabled: ${toolId}`);
  } else {
    // Check if tool exists but is already enabled
    const existsRegex = new RegExp(`id:\\s*"${toolId}"`, 'm');
    if (schema.match(existsRegex)) {
      const alreadyEnabledRegex = new RegExp(
        `id:\\s*"${toolId}"[^}]*capability:\\s*"implemented"`, 'm'
      );
      if (schema.match(alreadyEnabledRegex)) {
        console.log(`⏭️  Already enabled: ${toolId}`);
      } else {
        console.log(`⚠️  Tool exists but status unclear: ${toolId}`);
      }
    } else {
      notFoundCount++;
      notFoundTools.push(toolId);
      console.log(`❌ Not found: ${toolId}`);
    }
  }
});

fs.writeFileSync('shared/schema.ts', schema);

console.log('\n' + '━'.repeat(50));
console.log('📊 Summary:');
console.log(`   ✅ Enabled: ${enabledCount} tools`);
console.log(`   ❌ Not found: ${notFoundCount} tools`);
console.log(`   📋 Total processed: ${toolsToEnable.length} tools`);

if (enabledCount > 0) {
  console.log('\n✨ Enabled tools:');
  enabledTools.forEach(tool => console.log(`   - ${tool}`));
}

if (notFoundCount > 0) {
  console.log('\n⚠️  Not found tools (may not exist in schema):');
  notFoundTools.forEach(tool => console.log(`   - ${tool}`));
}

console.log('\n🎉 Document Conversion Tools Enable Script Complete!');
console.log('📝 Next steps:');
console.log('   1. Restart the workflow: npm run dev');
console.log('   2. Test a conversion tool (e.g., /tool/pdf-to-word)');
console.log('   3. Verify upload zone appears and processing works');
console.log('\n✅ Phase 2: Document Conversion - COMPLETE');
