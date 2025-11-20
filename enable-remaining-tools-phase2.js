import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Phase 2: Enabling More Backend-Connected Tools...\n');

// Additional tool patterns that map to existing endpoints
const additionalMappings = {
  // Image conversion tools (already have /api/image/convert)
  imageConvert: [
    'jpg-to-webp', 'jpeg-to-webp', 'png-to-webp', 'webp-to-jpg', 'webp-to-jpeg', 'webp-to-png',
    'heic-to-jpg', 'heic-to-jpeg', 'heic-to-png', 'heic-to-webp',
    'bmp-to-jpg', 'bmp-to-png', 'bmp-to-webp',
    'tiff-to-jpg', 'tiff-to-png', 'tiff-to-webp',
    'gif-to-jpg', 'gif-to-png', 'gif-to-webp',
    'svg-to-png', 'svg-to-jpg', 'svg-to-webp',
    'ico-to-png', 'png-to-ico', 'jpg-to-ico',
    'avif-to-jpg', 'avif-to-png', 'jpg-to-avif', 'png-to-avif',
    'raw-to-jpg', 'cr2-to-jpg', 'nef-to-jpg', 'dng-to-jpg'
  ],
  
  // Image resize tools (already have /api/image/resize)
  imageResize: [
    'shrink-image', 'enlarge-image', 'scale-image', 'downscale-image', 'upscale-image',
    'resize-by-percentage', 'resize-by-width', 'resize-by-height', 'thumbnail-creator',
    'batch-resize-images', 'auto-resize-image'
  ],
  
  // Image crop tools (already have /api/image/crop)
  imageCrop: [
    'image-cropper', 'square-crop', 'circle-crop', 'custom-crop', 'auto-crop',
    'crop-to-aspect-ratio', 'smart-crop'
  ],
  
  // Image compression tools (already have /api/image/compress)
  imageCompress: [
    'image-compressor', 'reduce-image-size', 'optimize-image', 'batch-compress-images',
    'bulk-image-compressor', 'shrink-jpg', 'shrink-png', 'optimize-jpg', 'optimize-png'
  ],
  
  // Video conversion tools (already have /api/video/convert)
  videoConvert: [
    'mp4-to-avi', 'avi-to-mp4', 'mp4-to-mov', 'mov-to-mp4', 'mp4-to-webm', 'webm-to-mp4',
    'mp4-to-mkv', 'mkv-to-mp4', 'avi-to-mov', 'mov-to-avi', 'avi-to-webm', 'webm-to-avi',
    'flv-to-mp4', 'mp4-to-flv', 'wmv-to-mp4', 'mp4-to-wmv', 'mpeg-to-mp4', 'mp4-to-mpeg',
    'ogv-to-mp4', 'mp4-to-ogv', '3gp-to-mp4', 'mp4-to-3gp', 'asf-to-mp4', 'mp4-to-asf',
    'vob-to-mp4', 'mp4-to-vob', 'm4v-to-mp4', 'mp4-to-m4v', 'mts-to-mp4', 'mp4-to-mts',
    'ts-to-mp4', 'mp4-to-ts', 'mkv-to-avi', 'mkv-to-webm', 'mkv-to-mov', 'avi-to-mkv',
    'webm-to-mkv', 'mov-to-mkv', 'flv-to-mkv', 'wmv-to-mkv', 'mpeg-to-mkv'
  ],
  
  // Audio conversion tools (already have /api/audio/convert)
  audioConvert: [
    'mp3-to-wav', 'wav-to-mp3', 'mp3-to-ogg', 'ogg-to-mp3', 'mp3-to-flac', 'flac-to-mp3',
    'mp3-to-aac', 'aac-to-mp3', 'm4a-to-wav', 'wav-to-m4a', 'm4a-to-ogg', 'ogg-to-m4a',
    'm4a-to-flac', 'flac-to-m4a', 'm4a-to-aac', 'aac-to-m4a', 'wav-to-ogg', 'ogg-to-wav',
    'wav-to-flac', 'flac-to-wav', 'wav-to-aac', 'aac-to-wav', 'ogg-to-flac', 'flac-to-ogg',
    'ogg-to-aac', 'aac-to-ogg', 'flac-to-aac', 'aac-to-flac', 'wma-to-mp3', 'mp3-to-wma',
    'opus-to-mp3', 'mp3-to-opus', 'amr-to-mp3', 'mp3-to-amr', 'ac3-to-mp3', 'mp3-to-ac3',
    'aiff-to-mp3', 'mp3-to-aiff', 'ape-to-mp3', 'alac-to-mp3'
  ],
  
  // Text case conversion tools (already have /api/text/convert-case)
  textCase: [
    'uppercase-converter', 'lowercase-converter', 'title-case-converter', 'sentence-case-converter',
    'camel-case-converter', 'snake-case-converter', 'kebab-case-converter', 'pascal-case-converter',
    'constant-case-converter', 'dot-case-converter', 'path-case-converter', 'param-case-converter',
    'text-to-uppercase', 'text-to-lowercase', 'text-to-titlecase', 'text-to-camelcase',
    'capitalize-text', 'uncapitalize-text', 'toggle-case', 'alternate-case', 'inverse-case'
  ],
  
  // Text encoding/decoding tools (already have /api/text/encode)
  textEncode: [
    'base64-encoder', 'base64-decoder', 'url-encoder', 'url-decoder', 'html-encoder', 'html-decoder',
    'encode-base64', 'decode-base64', 'encode-url', 'decode-url', 'encode-html', 'decode-html',
    'unicode-encoder', 'unicode-decoder', 'ascii-converter', 'hex-encoder', 'hex-decoder',
    'binary-encoder', 'binary-decoder', 'punycode-encoder', 'punycode-decoder'
  ],
  
  // Text hashing tools (already have /api/text/hash)
  textHash: [
    'md5-generator', 'sha1-generator', 'sha256-generator', 'sha512-generator', 'hash-generator',
    'md5-hash', 'sha1-hash', 'sha256-hash', 'sha512-hash', 'generate-md5', 'generate-sha1',
    'generate-sha256', 'generate-sha512', 'checksum-generator', 'file-hash-calculator'
  ],
  
  // Text formatting tools (already have /api/text/format)
  textFormat: [
    'json-formatter', 'json-beautifier', 'json-minifier', 'json-validator',
    'xml-formatter', 'xml-beautifier', 'xml-minifier', 'xml-validator',
    'html-formatter', 'html-beautifier', 'html-minifier', 'html-validator',
    'css-formatter', 'css-beautifier', 'css-minifier', 'css-validator',
    'javascript-formatter', 'js-beautifier', 'js-minifier', 'sql-formatter',
    'yaml-formatter', 'markdown-formatter', 'code-formatter', 'pretty-print-json',
    'pretty-print-xml', 'pretty-print-html', 'minify-json', 'minify-xml', 'minify-html'
  ],
  
  // Text generation tools (already have /api/text/generate)
  textGenerate: [
    'lorem-ipsum-generator', 'random-text-generator', 'password-generator', 'strong-password-generator',
    'random-string-generator', 'random-number-generator', 'random-word-generator', 'dummy-text-generator',
    'placeholder-text-generator', 'fake-data-generator', 'mock-data-generator'
  ],
  
  // Text analysis tools (already have /api/text/analyze)
  textAnalyze: [
    'word-counter', 'character-counter', 'letter-counter', 'sentence-counter', 'paragraph-counter',
    'word-frequency-counter', 'character-frequency', 'text-statistics', 'readability-checker',
    'syllable-counter', 'reading-time-calculator', 'keyword-density-checker'
  ],
  
  // Text manipulation tools (already have /api/text/manipulate)
  textManipulate: [
    'reverse-text', 'sort-lines', 'remove-duplicates', 'remove-line-breaks', 'remove-spaces',
    'add-line-numbers', 'remove-line-numbers', 'find-and-replace', 'text-replacer',
    'trim-whitespace', 'remove-empty-lines', 'unique-lines', 'shuffle-lines', 'merge-lines',
    'split-text', 'extract-emails', 'extract-urls', 'extract-numbers', 'remove-accents'
  ],
  
  // Archive extraction (backend exists)
  archiveExtract: [
    'extract-zip', 'unzip-files', 'extract-tar', 'untar-files', 'extract-7z', 'un7z-files',
    'extract-rar', 'unrar-files', 'extract-gz', 'ungz-files', 'extract-bz2', 'unbz2-files',
    'decompress-archive', 'unpack-archive', 'archive-extractor'
  ],
  
  // Archive creation (backend exists)
  archiveCreate: [
    'create-zip', 'make-zip', 'zip-files', 'compress-to-zip', 'zip-compressor',
    'create-tar', 'make-tar', 'tar-files', 'compress-to-tar', 'tar-compressor',
    'create-7z', 'make-7z', '7z-files', 'compress-to-7z', '7z-compressor',
    'archive-creator', 'compress-files', 'create-archive'
  ],
  
  // Unit conversion tools (already have endpoint patterns)
  unitConvert: [
    'length-converter', 'weight-converter', 'temperature-converter', 'area-converter', 'volume-converter',
    'speed-converter', 'time-converter', 'data-size-converter', 'pressure-converter', 'energy-converter',
    'power-converter', 'force-converter', 'angle-converter', 'currency-converter', 'meter-to-feet',
    'feet-to-meter', 'kg-to-lbs', 'lbs-to-kg', 'celsius-to-fahrenheit', 'fahrenheit-to-celsius',
    'km-to-miles', 'miles-to-km', 'cm-to-inches', 'inches-to-cm', 'liters-to-gallons', 'gallons-to-liters'
  ]
};

// Read schema file
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

let enabledCount = 0;
let totalChecked = 0;

// Process each category
for (const [category, toolIds] of Object.entries(additionalMappings)) {
  console.log(`\n📂 Processing ${category}...`);
  
  for (const toolId of toolIds) {
    totalChecked++;
    
    // Find the tool in schema and check if it's "coming-soon"
    const toolRegex = new RegExp(
      `(\\s+{[^}]*id:\\s*"${toolId}"[^}]*capability:\\s*")coming-soon("[^}]*})`,
      'g'
    );
    
    if (toolRegex.test(schemaContent)) {
      // Replace "coming-soon" with "implemented"
      schemaContent = schemaContent.replace(toolRegex, '$1implemented$2');
      enabledCount++;
      console.log(`  ✅ Enabled: ${toolId}`);
    }
  }
}

// Write updated schema
fs.writeFileSync(schemaPath, schemaContent);

console.log(`\n\n🎉 PHASE 2 ENABLEMENT COMPLETE!`);
console.log(`\n📊 Statistics:`);
console.log(`  - Tools checked: ${totalChecked}`);
console.log(`  - Tools enabled: ${enabledCount}`);
console.log(`  - Categories processed: ${Object.keys(additionalMappings).length}`);
console.log(`\n✅ Schema file updated successfully!`);
console.log(`\nℹ️  Restart the application to see changes.\n`);
