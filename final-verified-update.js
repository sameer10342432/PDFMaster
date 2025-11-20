import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ONLY tools that are VERIFIED to work in backend
// Extracted directly from server/routes.ts switch statements and conditionals
const verifiedToolIds = [
  // PDF Tools from /api/process-pdf endpoint (lines 2802-2870)
  // Merge tools
  'merge-pdf', 'combine-pdf', 'join-pdf-files', 'pdf-merger', 'pdf-combiner', 
  'append-pdf', 'add-pdf-to-pdf', 'merge-multiple-pdfs', 'combine-pdf-pages', 
  'interleave-pdf', 'pdf-binder', 'merge-pdf-bookmarks', 'combine-pdf-images', 
  'merge-pdf-word', 'merge-pdf-alternately',
  
  // Compress tools
  'compress-pdf', 'pdf-compressor', 'reduce-pdf-size', 'optimize-pdf',
  
  // Split/Extract tools
  'split-pdf', 'pdf-splitter', 'divide-pdf', 'break-pdf', 
  'extract-pdf-pages', 'pdf-page-extractor', 'delete-pdf-pages',
  
  // NOTE: Other PDF tools in dedicated endpoints (/api/pdf/merge, /api/pdf/split, etc.)
  // are NOT included because frontend's getProcessingEndpoint maps most PDF tools
  // to /api/process-pdf, not to those specialized endpoints
];

console.log(`Verified tools to update: ${verifiedToolIds.length}`);
console.log('\nTool list:');
verifiedToolIds.forEach((id, index) => {
  console.log(`${index + 1}. ${id}`);
});

// Backup
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
const backupPath = schemaPath + '.backup-final';
fs.copyFileSync(schemaPath, backupPath);
console.log(`\n✓ Backup created: ${backupPath}\n`);

// Read and update
let schemaContent = fs.readFileSync(schemaPath, 'utf8');
let updatedCount = 0;
let notFoundCount = 0;

verifiedToolIds.forEach(toolId => {
  const pattern = new RegExp(
    `(id:\\s*"${toolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]{0,800}?capability:\\s*)"coming-soon"`,
    'g'
  );
  
  const before = schemaContent;
  schemaContent = schemaContent.replace(pattern, '$1"implemented"');
  
  if (before !== schemaContent) {
    updatedCount++;
    console.log(`✓ ${toolId}`);
  } else {
    notFoundCount++;
    console.log(`✗ NOT FOUND: ${toolId}`);
  }
});

fs.writeFileSync(schemaPath, schemaContent, 'utf8');

console.log(`\n=== RESULTS ===`);
console.log(`✅ Updated: ${updatedCount}`);
console.log(`⚠️  Not found: ${notFoundCount}`);
console.log(`\nBackup: ${backupPath}`);
console.log('\nNOTE: Only updating PDF tools verified in /api/process-pdf');
console.log('Other tools (Image, Audio, Video, Text, QR) need separate verification.');
