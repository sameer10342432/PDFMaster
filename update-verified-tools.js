import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the extracted tool IDs
const implementedData = JSON.parse(fs.readFileSync('implemented-tool-ids.json', 'utf8'));
const verifiedToolIds = implementedData.allToolIds;

console.log(`Verified tool IDs to update: ${verifiedToolIds.length}`);
console.log('\nBreakdown by category:');
Object.keys(implementedData.byCategory).forEach(category => {
  const count = implementedData.byCategory[category].length;
  if (count > 0) {
    console.log(`  ${category}: ${count}`);
  }
});

// Backup original file
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
const backupPath = path.join(__dirname, 'shared', 'schema.ts.backup2');

console.log('\nCreating backup...');
fs.copyFileSync(schemaPath, backupPath);
console.log(`✓ Backup created at ${backupPath}`);

// Read schema file
let schemaContent = fs.readFileSync(schemaPath, 'utf8');
let updatedCount = 0;
let notFoundCount = 0;
const notFoundTools = [];

console.log('\nUpdating tool capabilities...');

// Update each verified tool
verifiedToolIds.forEach(toolId => {
  // Pattern: Find the tool definition and update capability
  // Match: id: "tool-id", ... capability: "coming-soon"
  const pattern = new RegExp(
    `(id:\\s*"${toolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]{0,500}?capability:\\s*)"coming-soon"`,
    'g'
  );
  
  const beforeContent = schemaContent;
  schemaContent = schemaContent.replace(pattern, '$1"implemented"');
  
  if (beforeContent !== schemaContent) {
    updatedCount++;
    if (updatedCount <= 10) {
      console.log(`✓ Updated ${toolId}`);
    } else if (updatedCount === 11) {
      console.log('  ... (showing first 10, continuing silently)');
    }
  } else {
    notFoundCount++;
    notFoundTools.push(toolId);
  }
});

// Write updated content
fs.writeFileSync(schemaPath, schemaContent, 'utf8');

console.log(`\n=== RESULTS ===`);
console.log(`✅ Successfully updated: ${updatedCount} tools`);
console.log(`⚠️  Not found in schema: ${notFoundCount} tools`);

if (notFoundTools.length > 0 && notFoundTools.length <= 20) {
  console.log(`\nTools not found (might have different IDs in schema):`);
  notFoundTools.forEach(id => console.log(`  - ${id}`));
}

console.log(`\nBackup saved at: ${backupPath}`);
console.log('\n✓ Update complete. Restart the development server to see changes.');
