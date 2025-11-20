import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of implemented tool IDs based on backend endpoints in server/routes.ts
const implementedTools = {
  // PDF Tools - already correctly marked as implemented
  pdf: [
    'merge-pdf', 'combine-pdf', 'join-pdf-files', 'pdf-merger', 'pdf-combiner',
    'append-pdf', 'add-pdf-to-pdf', 'merge-multiple-pdfs', 'combine-pdf-pages',
    'interleave-pdf', 'pdf-binder', 'merge-pdf-bookmarks', 'combine-pdf-images',
    'merge-pdf-word', 'merge-pdf-alternately',
    'split-pdf', 'split-pdf-by-pages', 'split-pdf-every-x-pages', 
    'split-pdf-odd-pages', 'split-pdf-even-pages', 'extract-pdf-pages', 'delete-pdf-pages',
    'rotate-pdf', 'rotate-pdf-pages', 'reorder-pdf-pages',
    'compress-pdf', 'pdf-compressor', 'reduce-pdf-size', 'optimize-pdf',
    'pdf-to-jpg', 'pdf-to-png', 'pdf-to-images', 'pdf-page-to-image',
    'extract-images-from-pdf', 'pdf-image-extractor',
    'add-watermark-to-pdf', 'pdf-watermark',
    'add-page-numbers-to-pdf', 'pdf-page-numbers',
    'pdf-metadata-editor', 'edit-pdf-metadata', 'pdf-info'
  ],
  
  // Image Tools - Backend: /api/image/*
  image: [
    'compress-image', 'image-compressor', 'reduce-image-size',
    'jpg-to-png', 'png-to-jpg', 'webp-to-png', 'png-to-webp', 'jpg-to-webp',
    'webp-to-jpg', 'heic-to-jpg', 'heic-to-png', 'bmp-to-png',
    'resize-image', 'shrink-image', 'enlarge-image', 'scale-image',
    'crop-image', 'image-cropper',
    'rotate-image', 'flip-image', 'mirror-image',
    'grayscale-image', 'sepia-filter', 'invert-colors',
    'sharpen-image', 'blur-image', 'brighten-image', 'darken-image',
    'watermark-image', 'add-watermark-to-image',
    'image-metadata', 'view-image-metadata', 'edit-image-metadata'
  ],
  
  // QR Code Tools - Backend: /api/qr/*
  qr: [
    'qr-code-generator', 'qr-wifi-generator', 'qr-vcard-generator',
    'qr-email-generator', 'qr-phone-generator', 'qr-event-generator',
    'qr-code-reader', 'scan-qr-code'
  ],
  
  // Audio Tools - Backend: /api/audio/*
  audio: [
    'mp3-converter', 'wav-converter', 'flac-converter', 'aac-converter',
    'm4a-to-mp3', 'ogg-to-mp3', 'mp3-to-wav', 'wav-to-mp3',
    'trim-audio', 'cut-audio', 'fade-in-audio', 'fade-out-audio',
    'audio-volume', 'adjust-audio-speed',
    'add-reverb', 'add-echo', 'bass-boost', 'treble-boost',
    'noise-reduction', 'audio-equalizer',
    'audio-metadata', 'mp3-tag-editor'
  ],
  
  // Video Tools - Backend: /api/video/*
  video: [
    'mp4-converter', 'avi-converter', 'mov-to-mp4', 'mkv-to-mp4',
    'webm-to-mp4', 'flv-to-mp4',
    'trim-video', 'cut-video', 'crop-video', 'rotate-video',
    'resize-video', 'compress-video',
    'extract-audio-from-video', 'video-to-mp3', 'video-to-audio',
    'remove-audio-from-video', 'mute-video'
  ],
  
  // Archive Tools - Backend: /api/archive/*
  archive: [
    'create-zip', 'zip-files', 'compress-to-zip',
    'extract-zip', 'unzip-files',
    'create-tar', 'tar-files',
    'extract-tar', 'untar-files',
    'view-archive-contents', 'list-zip-files'
  ],
  
  // Text Tools - Backend: /api/text/*
  text: [
    'case-converter-upper', 'case-converter-lower', 'case-converter-title',
    'case-converter-sentence', 'case-converter-camel', 'case-converter-snake',
    'case-converter-kebab', 'case-converter-pascal',
    'lorem-ipsum-generator', 'random-text-generator',
    'password-generator', 'strong-password-generator',
    'uuid-generator', 'guid-generator',
    'word-counter', 'character-counter', 'reading-time-calculator', 'text-analyzer',
    'reverse-text', 'remove-line-breaks', 'remove-extra-spaces',
    'sort-lines', 'remove-duplicates', 'add-line-numbers',
    'base64-encode', 'base64-decode', 'url-encode', 'url-decode',
    'html-encode', 'html-decode',
    'md5-hash', 'sha1-hash', 'sha256-hash', 'sha512-hash',
    'json-formatter', 'json-minifier', 'json-validator',
    'xml-formatter', 'xml-validator',
    'sql-formatter', 'css-formatter', 'html-formatter'
  ],
  
  // Web/Color/Calculator Tools - Backend: /api/web/*
  web: [
    'color-converter', 'rgb-to-hex', 'hex-to-rgb',
    'color-palette-generator',
    'color-picker', 'image-color-picker',
    'color-harmony-generator',
    'color-blindness-simulator',
    'css-gradient-generator', 'box-shadow-generator',
    'meta-tag-generator', 'sitemap-generator', 'robots-txt-generator',
    'schema-markup-generator',
    'basic-calculator', 'scientific-calculator', 'percentage-calculator',
    'length-converter', 'weight-converter', 'temperature-converter',
    'time-converter', 'currency-converter',
    'time-zone-converter', 'date-calculator', 'age-calculator'
  ]
};

// Flatten all tools
const allImplementedTools = Object.values(implementedTools).flat();

console.log(`Total implemented tools to update: ${allImplementedTools.length}`);

// Backup original file
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
const backupPath = path.join(__dirname, 'shared', 'schema.ts.backup');

console.log('Creating backup...');
fs.copyFileSync(schemaPath, backupPath);
console.log(`✓ Backup created at ${backupPath}`);

// Read schema file
let schemaContent = fs.readFileSync(schemaPath, 'utf8');
let updatedCount = 0;

console.log('\nUpdating tool capabilities...');

// Update each tool
allImplementedTools.forEach(toolId => {
  // Pattern: Find the tool definition and update capability
  // We need to match the pattern: id: "tool-id", ... capability: "coming-soon"
  const pattern = new RegExp(
    `(id:\\s*"${toolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]{0,500}?capability:\\s*)"coming-soon"`,
    'g'
  );
  
  const beforeCount = (schemaContent.match(pattern) || []).length;
  schemaContent = schemaContent.replace(pattern, '$1"implemented"');
  const afterCount = (schemaContent.match(pattern) || []).length;
  
  if (beforeCount > afterCount) {
    updatedCount++;
    console.log(`✓ Updated ${toolId}`);
  }
});

// Write updated content
fs.writeFileSync(schemaPath, schemaContent, 'utf8');

console.log(`\n✅ Successfully updated ${updatedCount} tools`);
console.log(`Backup saved at: ${backupPath}`);
console.log('\nRestart the development server to see changes.');
