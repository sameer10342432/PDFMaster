import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Enabling Backend-Connected Tools...\n');

// Backend endpoints that are fully functional
const backendEndpoints = {
  // QR Code Tools - 7 endpoints
  qr: {
    generate: ['qr-code-generator', 'generate-qr-code', 'create-qr-code', 'qr-maker'],
    'generate-wifi': ['qr-code-wifi', 'wifi-qr-generator', 'qr-wifi-generator', 'wifi-qr-code'],
    'generate-vcard': ['qr-vcard-generator', 'vcard-qr-generator', 'contact-qr-code', 'qr-code-vcard'],
    'generate-email': ['qr-email-generator', 'email-qr-code', 'qr-code-email', 'email-qr-generator'],
    'generate-phone': ['qr-phone-generator', 'phone-qr-code', 'qr-code-phone', 'phone-qr-generator'],
    'generate-event': ['qr-event-generator', 'event-qr-code', 'qr-code-event', 'calendar-qr-code'],
    read: ['qr-code-reader', 'scan-qr-code', 'read-qr-code', 'qr-scanner', 'qr-code-scanner']
  },
  
  // Archive Tools - 5 endpoints
  archive: {
    'create-zip': ['zip-creator', 'create-zip', 'make-zip', 'zip-maker', 'compress-to-zip'],
    'extract-zip': ['zip-extractor', 'extract-zip', 'unzip-files', 'zip-unzipper', 'unzip'],
    'create-tar': ['tar-creator', 'create-tar', 'make-tar', 'tar-maker', 'compress-to-tar'],
    'extract-tar': ['tar-extractor', 'extract-tar', 'untar-files', 'tar-unarchiver', 'untar'],
    'list-contents': ['archive-viewer', 'zip-viewer', 'tar-viewer', 'archive-list', 'view-archive']
  },
  
  // Web/Color/CSS/SEO Tools - 11 endpoints
  web: {
    'color-convert': ['hex-to-rgb', 'rgb-to-hex', 'color-converter', 'hex-to-hsl', 'rgb-to-hsl', 
                      'hsl-to-rgb', 'hsl-to-hex', 'color-code-converter', 'convert-color-codes'],
    'generate-palette': ['color-palette-generator', 'palette-generator', 'color-scheme-generator', 
                         'generate-color-palette', 'color-combinations'],
    'color-picker': ['color-picker', 'extract-colors', 'image-color-picker', 'color-extractor'],
    'color-harmony': ['color-harmony', 'complementary-colors', 'analogous-colors', 'triadic-colors'],
    'color-blindness': ['color-blindness-simulator', 'colorblind-test', 'accessibility-checker'],
    'css-generator': ['css-box-shadow-generator', 'css-gradient-generator', 'css-border-radius-generator',
                      'css-flexbox-generator', 'css-grid-generator', 'css-text-shadow-generator',
                      'css-filter-generator', 'css-animation-generator', 'css-button-generator'],
    'seo/meta-tags': ['meta-tags-generator', 'seo-meta-generator', 'og-tags-generator', 
                      'twitter-card-generator', 'meta-description-generator'],
    'seo/sitemap': ['sitemap-generator', 'xml-sitemap-generator', 'create-sitemap'],
    'seo/robots-txt': ['robots-txt-generator', 'create-robots-txt', 'robotstxt-maker'],
    'seo/schema-markup': ['schema-markup-generator', 'json-ld-generator', 'structured-data-generator'],
    calculator: ['percentage-calculator', 'discount-calculator', 'loan-calculator', 'mortgage-calculator',
                 'bmi-calculator', 'age-calculator', 'tip-calculator', 'vat-calculator', 'gst-calculator',
                 'salary-calculator', 'time-calculator', 'date-calculator']
  },
  
  // Image Tools - 9 endpoints
  image: {
    transform: ['rotate-image', 'rotate-image-90', 'rotate-image-180', 'rotate-image-270', 'flip-image', 
                'flip-image-horizontal', 'flip-image-vertical', 'mirror-image', 'transpose-image'],
    filter: ['grayscale-image', 'sepia-image', 'invert-colors', 'negative-image', 'black-and-white-image',
             'duotone-image', 'posterize-image'],
    enhance: ['sharpen-image', 'blur-image', 'brighten-image', 'darken-image', 'adjust-brightness',
              'adjust-contrast', 'adjust-saturation', 'auto-enhance-image', 'denoise-image'],
    watermark: ['watermark-image', 'add-watermark-to-image', 'image-watermark', 'add-logo-to-image'],
    metadata: ['image-metadata', 'view-image-metadata', 'edit-image-metadata', 'exif-data-viewer',
               'image-properties', 'remove-exif-data']
  },
  
  // Video Tools - 3 endpoints  
  video: {
    edit: ['trim-video', 'cut-video', 'crop-video', 'rotate-video', 'flip-video', 'reverse-video',
           'speed-up-video', 'slow-down-video', 'video-trimmer', 'video-cutter', 'video-cropper',
           'adjust-video-speed', 'change-video-speed', 'video-rotate', 'rotate-video-90',
           'rotate-video-180', 'rotate-video-270', 'video-flip', 'loop-video', 'video-looper',
           'add-text-to-video', 'video-text-overlay', 'mute-video', 'remove-audio-from-video',
           'adjust-video-volume', 'fade-in-video', 'fade-out-video'],
    'extract-audio': ['video-to-mp3', 'video-to-audio', 'extract-audio-from-video', 'mp4-to-mp3',
                      'video-to-wav', 'avi-to-mp3', 'mov-to-mp3', 'webm-to-mp3', 'mkv-to-mp3']
  },
  
  // Audio Tools - 4 endpoints
  audio: {
    edit: ['trim-audio', 'cut-audio', 'split-audio', 'fade-in-audio', 'fade-out-audio',
           'adjust-audio-volume', 'change-audio-volume', 'normalize-audio', 'audio-trimmer',
           'audio-cutter', 'reverse-audio', 'speed-up-audio', 'slow-down-audio',
           'change-audio-speed', 'adjust-audio-speed', 'change-pitch', 'audio-pitch-shifter',
           'audio-speed-changer', 'audio-time-stretch', 'loop-audio', 'audio-looper'],
    effects: ['add-reverb', 'add-echo', 'audio-reverb', 'audio-echo', 'audio-delay',
              'bass-boost', 'treble-boost', 'audio-equalizer', 'eq-audio', 'audio-compressor',
              'audio-limiter', 'noise-reduction', 'remove-noise-from-audio', 'audio-denoiser'],
    metadata: ['audio-metadata', 'mp3-tag-editor', 'edit-audio-metadata', 'view-audio-metadata',
               'id3-tag-editor', 'audio-properties', 'music-metadata-editor']
  }
};

// Read schema file
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

let enabledCount = 0;
let totalChecked = 0;

// Process each category
for (const [category, endpoints] of Object.entries(backendEndpoints)) {
  console.log(`\n📂 Processing ${category.toUpperCase()} tools...`);
  
  for (const [endpoint, toolIds] of Object.entries(endpoints)) {
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
}

// Write updated schema
fs.writeFileSync(schemaPath, schemaContent);

console.log(`\n\n🎉 ENABLEMENT COMPLETE!`);
console.log(`\n📊 Statistics:`);
console.log(`  - Tools checked: ${totalChecked}`);
console.log(`  - Tools enabled: ${enabledCount}`);
console.log(`  - Backend endpoints used: ${Object.values(backendEndpoints).reduce((sum, cat) => sum + Object.keys(cat).length, 0)}`);
console.log(`\n✅ Schema file updated successfully!`);
console.log(`\nℹ️  Restart the application to see changes.\n`);
