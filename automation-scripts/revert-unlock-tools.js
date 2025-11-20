import fs from 'fs';

// Tools that require PDF decryption (which pdf-lib doesn't support)
const unlockToolIds = [
  'unlock-pdf',
  'pdf-unlocker',
  'remove-pdf-password',
  'decrypt-pdf',
  'pdf-password-remover',
  'unlock-and-compress-pdf',
];

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let changedCount = 0;

unlockToolIds.forEach(toolId => {
  const regex = new RegExp(
    `(id:\\s*"${toolId}"[^}]*capability:\\s*")implemented(")`
  );
  if (schema.match(regex)) {
    schema = schema.replace(regex, '$1coming-soon$2');
    changedCount++;
    console.log(`↩ Reverted: ${toolId} (pdf-lib cannot decrypt PDFs)`);
  }
});

fs.writeFileSync('shared/schema.ts', schema);
console.log(`\n⚠️  Reverted ${changedCount} unlock tools to coming-soon`);
console.log(`📌 Reason: pdf-lib does not support password-based PDF decryption`);
console.log(`📊 Tools changed: ${changedCount}/${unlockToolIds.length}`);
