import fs from 'fs';

const ocrToolIds = [
  'ocr-pdf',
  'pdf-ocr',
  'ocr-to-word',
  'ocr-to-excel',
  'pdf-to-odt-ocr',
  'pdf-to-docx-ocr',
  'pdf-to-txt-ocr',
  'pdf-to-epub-ocr',
  'ocr-and-compress-pdf',
  'image-to-text',
  'scanned-pdf-to-text',
  'searchable-pdf-creator',
  'pdf-to-searchable',
  'pdf-to-searchable-pdf',
  'pdf-to-text',
  'compress-scanned-pdf',
];

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let changedCount = 0;

ocrToolIds.forEach(toolId => {
  const regex = new RegExp(
    `(id:\\s*"${toolId}"[^}]*capability:\\s*")coming-soon(")`
  );
  if (schema.match(regex)) {
    schema = schema.replace(regex, '$1implemented$2');
    changedCount++;
    console.log(`✓ Enabled: ${toolId}`);
  }
});

fs.writeFileSync('shared/schema.ts', schema);
console.log(`\n✅ Enabled ${changedCount} OCR tools!`);
console.log(`📊 Total tools changed: ${changedCount}/${ocrToolIds.length}`);
