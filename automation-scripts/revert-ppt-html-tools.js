#!/usr/bin/env node

/**
 * Revert PPT and HTML Conversion Tools to Coming Soon
 * 
 * These tools require additional implementation:
 * - PPT conversion needs proper PPT processing library
 * - HTML conversion needs frontend/backend integration for raw HTML handling
 * 
 * Reverting to maintain quality - only ship working tools
 */

import fs from 'fs';

const toolsToRevert = [
  // PPT to PDF - needs proper PPT library
  'ppt-to-pdf',
  
  // PDF to PPT - no conversion logic implemented
  'pdf-to-ppt',
  'pdf-to-pptx',
  
  // HTML conversions - need special raw HTML handling
  'html-to-word',
];

console.log('🔄 Reverting PPT and HTML tools to coming-soon...\n');

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let revertedCount = 0;

toolsToRevert.forEach(toolId => {
  const regex = new RegExp(
    `(id:\\s*"${toolId}"[^}]*capability:\\s*")implemented(")`,'m'
  );
  
  if (schema.match(regex)) {
    schema = schema.replace(regex, '$1coming-soon$2');
    revertedCount++;
    console.log(`✅ Reverted: ${toolId}`);
  } else {
    console.log(`⏭️  Not implemented or not found: ${toolId}`);
  }
});

fs.writeFileSync('shared/schema.ts', schema);

console.log(`\n📊 Reverted ${revertedCount} tools to coming-soon`);
console.log('✅ Only fully working tools remain as "implemented"');
