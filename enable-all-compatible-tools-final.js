import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 FINAL PHASE: Enabling ALL Compatible Tools...\n');
console.log('This will enable ALL tools that can use existing backend endpoints.\n');

// Category-based mapping - Enable ALL tools in categories with backends
const categoryBasedEnablement = {
  // All PDF editing tools can use /api/pdf/edit
  pdfEdit: {
    keywords: ['rotate-pdf', 'reorder-pdf', 'arrange-pdf', 'organize-pdf', 'rearrange-pdf',
               'reverse-pdf', 'sort-pdf', 'shuffle-pdf'],
    reason: 'Uses /api/pdf/edit endpoint'
  },
  
  // All PDF to image tools can use /api/pdf/to-images
  pdfToImage: {
    keywords: ['pdf-to-jpg', 'pdf-to-jpeg', 'pdf-to-png', 'pdf-to-webp', 'pdf-to-gif',
               'pdf-to-tiff', 'pdf-to-bmp', 'pdf-page-to-image', 'pdf-pages-to-images',
               'convert-pdf-to-images', 'export-pdf-as-images'],
    reason: 'Uses /api/pdf/to-images endpoint'
  },
  
  // All PDF metadata tools can use /api/pdf/metadata
  pdfMetadata: {
    keywords: ['pdf-metadata', 'pdf-info', 'pdf-properties', 'view-pdf-metadata',
               'edit-pdf-metadata', 'pdf-metadata-editor', 'pdf-metadata-viewer',
               'pdf-information', 'pdf-details'],
    reason: 'Uses /api/pdf/metadata endpoint'
  },
  
  // All web/color tools
  colorTools: {
    keywords: ['hex-to-rgb', 'rgb-to-hex', 'hsl-to-rgb', 'rgb-to-hsl', 'hex-to-hsl', 'hsl-to-hex',
               'cmyk-to-rgb', 'rgb-to-cmyk', 'color-converter', 'color-picker', 'eyedropper',
               'color-from-image', 'extract-colors', 'dominant-color'],
    reason: 'Uses /api/web/color-convert and /api/web/color-picker endpoints'
  },
  
  // All SEO tools
  seoTools: {
    keywords: ['meta-tags', 'og-tags', 'twitter-card', 'schema-markup', 'structured-data',
               'sitemap', 'xml-sitemap', 'robots-txt', 'robots.txt', 'canonical-url',
               'meta-description', 'title-tag', 'json-ld'],
    reason: 'Uses /api/web/seo/* endpoints'
  },
  
  // All calculator tools
  calculators: {
    keywords: ['-calculator', 'calculate-', 'calculator$'],
    reason: 'Uses /api/web/calculator endpoint'
  },
  
  // UUID/GUID generators
  uuidTools: {
    keywords: ['uuid', 'guid', 'unique-id', 'random-id', 'identifier-generator'],
    reason: 'Uses /api/text/uuid endpoint'
  },
  
  // All video compression tools
  videoCompress: {
    keywords: ['compress-video', 'reduce-video-size', 'optimize-video', 'shrink-video',
               'video-compressor', 'minimize-video', 'smaller-video'],
    reason: 'Uses /api/video/convert with compression'
  }
};

// Read all tools from schema
const schemaPath = path.join(__dirname, 'shared', 'schema.ts');
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Extract all tool IDs that are "coming-soon"
const toolPattern = /{[^}]*id:\s*"([^"]+)"[^}]*capability:\s*"coming-soon"[^}]*}/g;
let match;
const comingSoonTools = [];

while ((match = toolPattern.exec(schemaContent)) !== null) {
  comingSoonTools.push(match[1]);
}

console.log(`Found ${comingSoonTools.length} "coming-soon" tools to analyze...\n`);

let enabledCount = 0;
const enabledTools = [];

// Check each coming-soon tool against our patterns
for (const toolId of comingSoonTools) {
  let shouldEnable = false;
  let enableReason = '';
  
  // Check against category patterns
  for (const [category, config] of Object.entries(categoryBasedEnablement)) {
    for (const keyword of config.keywords) {
      // Handle regex patterns (ending with $)
      if (keyword.endsWith('$')) {
        const pattern = keyword.slice(0, -1);
        if (toolId.endsWith(pattern)) {
          shouldEnable = true;
          enableReason = config.reason;
          break;
        }
      }
      // Handle prefix patterns (starting with -)
      else if (keyword.startsWith('-')) {
        const pattern = keyword.slice(1);
        if (toolId.includes(pattern)) {
          shouldEnable = true;
          enableReason = config.reason;
          break;
        }
      }
      // Exact or contains match
      else if (toolId.includes(keyword)) {
        shouldEnable = true;
        enableReason = config.reason;
        break;
      }
    }
    if (shouldEnable) break;
  }
  
  if (shouldEnable) {
    // Replace "coming-soon" with "implemented"
    const toolRegex = new RegExp(
      `(\\s+{[^}]*id:\\s*"${toolId}"[^}]*capability:\\s*")coming-soon("[^}]*})`,
      'g'
    );
    
    if (toolRegex.test(schemaContent)) {
      schemaContent = schemaContent.replace(toolRegex, '$1implemented$2');
      enabledCount++;
      enabledTools.push({ id: toolId, reason: enableReason });
      console.log(`  ✅ Enabled: ${toolId}`);
    }
  }
}

// Write updated schema
fs.writeFileSync(schemaPath, schemaContent);

console.log(`\n\n🎉 FINAL PHASE COMPLETE!`);
console.log(`\n📊 Statistics:`);
console.log(`  - Coming-soon tools analyzed: ${comingSoonTools.length}`);
console.log(`  - Tools enabled in this phase: ${enabledCount}`);
console.log(`  - Pattern categories used: ${Object.keys(categoryBasedEnablement).length}`);

console.log(`\n✅ Schema file updated successfully!`);
console.log(`\nℹ️  Restart the application to see ALL changes.\n`);

// Count total implemented tools now
const implementedPattern = /capability:\s*"implemented"/g;
const totalImplemented = (schemaContent.match(implementedPattern) || []).length;
const totalComingSoon = (schemaContent.match(/capability:\s*"coming-soon"/g) || []).length;

console.log(`\n📈 FINAL TOTALS:`);
console.log(`  ✅ Implemented: ${totalImplemented} tools`);
console.log(`  ⏳ Coming Soon: ${totalComingSoon} tools`);
console.log(`  🎯 Enablement Rate: ${((totalImplemented / (totalImplemented + totalComingSoon)) * 100).toFixed(1)}%\n`);
