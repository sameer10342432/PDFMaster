import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// These are the ACTUAL working backend endpoints
const workingEndpoints = [
  // PDF Tools
  '/api/pdf/merge', '/api/pdf/split', '/api/pdf/edit', '/api/pdf/compress',
  '/api/pdf/to-images', '/api/pdf/extract-images', '/api/pdf/watermark',
  '/api/pdf/page-numbers', '/api/pdf/metadata',
  
  // Image Tools
  '/api/image/compress', '/api/image/convert', '/api/image/resize',
  '/api/image/crop', '/api/image/transform', '/api/image/filter',
  '/api/image/enhance', '/api/image/watermark', '/api/image/metadata',
  
  // Audio Tools
  '/api/audio/convert', '/api/audio/edit', '/api/audio/effects', '/api/audio/metadata',
  
  // Video Tools
  '/api/video/convert', '/api/video/edit', '/api/video/extract-audio',
  
  // QR Tools
  '/api/qr/generate', '/api/qr/generate-wifi', '/api/qr/generate-vcard',
  '/api/qr/generate-email', '/api/qr/generate-phone', '/api/qr/generate-event',
  '/api/qr/read',
  
  // Archive Tools
  '/api/archive/create-zip', '/api/archive/extract-zip',
  '/api/archive/create-tar', '/api/archive/extract-tar',
  '/api/archive/list-contents',
  
  // Text Tools
  '/api/text/convert-case', '/api/text/generate', '/api/text/analyze',
  '/api/text/manipulate', '/api/text/encode', '/api/text/uuid',
  '/api/text/hash', '/api/text/format',
  
  // Web Tools
  '/api/web/color-convert', '/api/web/generate-palette', '/api/web/color-picker',
  '/api/web/color-harmony', '/api/web/color-blindness', '/api/web/css-generator',
  '/api/web/seo/meta-tags', '/api/web/seo/sitemap', '/api/web/seo/robots-txt',
  '/api/web/seo/schema-markup', '/api/web/calculator', '/api/web/convert-unit',
  '/api/web/time-date'
];

// Function to determine if a tool should be marked as implemented
// Based on getProcessingEndpoint logic from client/src/lib/tool-utils.ts
function shouldBeImplemented(toolId, toolType) {
  // PDF tools
  if (toolType === 'pdf') {
    if (toolId.includes('merge') || toolId.includes('combine') || toolId.includes('join') || 
        toolId.includes('append') || toolId.includes('add') || toolId.includes('interleave') ||
        toolId.includes('bind')) {
      return workingEndpoints.includes('/api/pdf/merge');
    }
    if (toolId.includes('split') || toolId.includes('extract') || toolId.includes('delete') ||
        toolId.includes('divide')) {
      return workingEndpoints.includes('/api/pdf/split');
    }
    if (toolId.includes('rotate') || toolId.includes('reorder') || toolId.includes('organize') ||
        toolId.includes('reverse') || toolId.includes('insert') || toolId.includes('duplicate')) {
      return workingEndpoints.includes('/api/pdf/edit');
    }
    if (toolId.includes('compress') || toolId.includes('reduce') || toolId.includes('optimize') ||
        toolId.includes('shrink')) {
      return workingEndpoints.includes('/api/pdf/compress');
    }
    if (toolId.includes('to-jpg') || toolId.includes('to-png') || toolId.includes('to-image')) {
      return workingEndpoints.includes('/api/pdf/to-images');
    }
    if (toolId.includes('extract-image')) {
      return workingEndpoints.includes('/api/pdf/extract-images');
    }
    if (toolId.includes('watermark')) {
      return workingEndpoints.includes('/api/pdf/watermark');
    }
    if (toolId.includes('page-number')) {
      return workingEndpoints.includes('/api/pdf/page-numbers');
    }
    if (toolId.includes('metadata') || toolId.includes('info')) {
      return workingEndpoints.includes('/api/pdf/metadata');
    }
  }
  
  // Image tools
  if (toolType === 'image') {
    if (toolId.includes('compress') || toolId.includes('reduce')) {
      return workingEndpoints.includes('/api/image/compress');
    }
    if (toolId.includes('convert') || toolId.includes('to-')) {
      return workingEndpoints.includes('/api/image/convert');
    }
    if (toolId.includes('resize') || toolId.includes('scale')) {
      return workingEndpoints.includes('/api/image/resize');
    }
    if (toolId.includes('crop')) {
      return workingEndpoints.includes('/api/image/crop');
    }
    if (toolId.includes('rotate') || toolId.includes('flip') || toolId.includes('mirror')) {
      return workingEndpoints.includes('/api/image/transform');
    }
    if (toolId.includes('filter') || toolId.includes('grayscale') || toolId.includes('sepia') || 
        toolId.includes('blur') || toolId.includes('invert')) {
      return workingEndpoints.includes('/api/image/filter');
    }
    if (toolId.includes('brightness') || toolId.includes('contrast') || toolId.includes('enhance') ||
        toolId.includes('sharpen')) {
      return workingEndpoints.includes('/api/image/enhance');
    }
    if (toolId.includes('watermark')) {
      return workingEndpoints.includes('/api/image/watermark');
    }
    if (toolId.includes('metadata')) {
      return workingEndpoints.includes('/api/image/metadata');
    }
  }
  
  // Audio tools
  if (toolType === 'audio') {
    if (toolId.includes('convert') || toolId.includes('to-')) {
      return workingEndpoints.includes('/api/audio/convert');
    }
    if (toolId.includes('trim') || toolId.includes('cut') || toolId.includes('volume') ||
        toolId.includes('normalize') || toolId.includes('fade') || toolId.includes('speed') ||
        toolId.includes('pitch') || toolId.includes('reverse')) {
      return workingEndpoints.includes('/api/audio/edit');
    }
    if (toolId.includes('reverb') || toolId.includes('echo') || toolId.includes('equalizer') ||
        toolId.includes('noise')) {
      return workingEndpoints.includes('/api/audio/effects');
    }
    if (toolId.includes('metadata') || toolId.includes('tag')) {
      return workingEndpoints.includes('/api/audio/metadata');
    }
  }
  
  // Video tools
  if (toolType === 'video') {
    if (toolId.includes('convert') && !toolId.includes('extract')) {
      return workingEndpoints.includes('/api/video/convert');
    }
    if (toolId.includes('trim') || toolId.includes('cut') || toolId.includes('compress') ||
        toolId.includes('resize') || toolId.includes('speed') || toolId.includes('rotate') ||
        toolId.includes('flip')) {
      return workingEndpoints.includes('/api/video/edit');
    }
    if (toolId.includes('extract-audio') || toolId.includes('video-to-audio') || toolId.includes('mute')) {
      return workingEndpoints.includes('/api/video/extract-audio');
    }
  }
  
  return false;
}

console.log('Analyzing schema.ts to find tools that map to working endpoints...\n');

// Read schema
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Extract all tool definitions with id, type, and capability
const toolPattern = /\{\s*id:\s*"([^"]+)"[\s\S]{0,800}?category:\s*"([^"]+)"[\s\S]{0,300}?capability:\s*"([^"]+)"/g;
const tools = [];
let match;

while ((match = toolPattern.exec(schemaContent)) !== null) {
  tools.push({
    id: match[1],
    category: match[2],
    capability: match[3]
  });
}

console.log(`Found ${tools.length} tools in schema.ts\n`);

// Determine which tools should be implemented
const toUpdate = [];
tools.forEach(tool => {
  // Map actual category strings to tool types
  let toolType = null;
  const cat = tool.category.toLowerCase();
  
  if (cat.includes('pdf') || cat.includes('merge') || cat.includes('split') || 
      cat.includes('compress') || cat.includes('convert') || cat.includes('watermark')) {
    toolType = 'pdf';
  } else if (cat.includes('image')) {
    toolType = 'image';
  } else if (cat.includes('audio')) {
    toolType = 'audio';
  } else if (cat.includes('video')) {
    toolType = 'video';
  } else if (cat.includes('text') || cat.includes('case') || cat.includes('generator') ||
             cat.includes('hash') || cat.includes('encode')) {
    toolType = 'text';
  } else if (cat.includes('qr')) {
    toolType = 'qr';
  } else if (cat.includes('archive') || cat.includes('zip') || cat.includes('tar')) {
    toolType = 'archive';
  } else if (cat.includes('color') || cat.includes('calculator') || cat.includes('seo') ||
             cat.includes('web') || cat.includes('converter')) {
    toolType = 'web';
  }
  
  if (toolType && shouldBeImplemented(tool.id, toolType) && tool.capability === 'coming-soon') {
    toUpdate.push(tool.id);
  }
});

console.log(`Tools to update: ${toUpdate.length}\n`);

if (toUpdate.length === 0) {
  console.log('No tools to update!');
  process.exit(0);
}

// Backup
const backupPath = schemaPath + '.backup3';
fs.copyFileSync(schemaPath, backupPath);
console.log(`✓ Backup created at ${backupPath}\n`);

// Update
let updatedCount = 0;
toUpdate.forEach(toolId => {
  const pattern = new RegExp(
    `(id:\\s*"${toolId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]{0,800}?capability:\\s*)"coming-soon"`,
    'g'
  );
  
  const before = schemaContent;
  schemaContent = schemaContent.replace(pattern, '$1"implemented"');
  
  if (before !== schemaContent) {
    updatedCount++;
    if (updatedCount <= 20) {
      console.log(`✓ Updated ${toolId}`);
    } else if (updatedCount === 21) {
      console.log('  ... (continuing)');
    }
  }
});

fs.writeFileSync(schemaPath, schemaContent, 'utf8');

console.log(`\n✅ Successfully updated ${updatedCount} tools`);
console.log(`Backup: ${backupPath}`);
console.log('\nRestart the server to see changes.');
