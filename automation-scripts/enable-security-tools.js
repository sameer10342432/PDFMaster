import fs from 'fs';

const securityToolIds = [
  'unlock-pdf',
  'protect-pdf',
  'pdf-protector',
  'add-password-to-pdf',
  'encrypt-pdf',
  'pdf-encryptor',
  'password-protect-pdf',
  'pdf-unlocker',
  'remove-pdf-password',
  'decrypt-pdf',
  'pdf-password-remover',
  'secure-pdf',
  'unlock-and-compress-pdf',
];

let schema = fs.readFileSync('shared/schema.ts', 'utf8');
let changedCount = 0;

securityToolIds.forEach(toolId => {
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
console.log(`\n✅ Enabled ${changedCount} PDF security tools!`);
console.log(`📊 Total tools changed: ${changedCount}/${securityToolIds.length}`);
