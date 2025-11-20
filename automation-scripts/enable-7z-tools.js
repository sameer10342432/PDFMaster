import fs from 'fs';

const sevenZToolIds = [
  '7z-extractor',
  'online-un-7z',
  'create-7z-archive',
  'zip-to-7z',
  '7z-to-zip',
  'rar-to-7z',
];

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let changedCount = 0;

sevenZToolIds.forEach(toolId => {
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
console.log(`\n✅ Enabled ${changedCount} 7Z archive tools!`);
console.log(`📊 Total tools changed: ${changedCount}/${sevenZToolIds.length}`);
