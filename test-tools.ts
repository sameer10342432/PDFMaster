import { allTools } from './shared/schema.js';

interface TestResult {
  toolId: string;
  toolTitle: string;
  capability: string;
  hasBackend: boolean;
  category: string;
  expectedEndpoint?: string;
}

// Map of tool IDs to their expected backend endpoints
const backendEndpoints: Record<string, string> = {
  // PDF Tools
  'merge-pdf': '/api/pdf/merge',
  'combine-pdf': '/api/pdf/merge',
  'join-pdf-files': '/api/pdf/merge',
  'pdf-merger': '/api/pdf/merge',
  'split-pdf': '/api/pdf/split',
  'pdf-splitter': '/api/pdf/split',
  'compress-pdf': '/api/pdf/compress',
  'pdf-compressor': '/api/pdf/compress',
  'pdf-to-jpg': '/api/pdf/to-images',
  'pdf-to-png': '/api/pdf/to-images',
  'add-watermark-to-pdf': '/api/pdf/watermark',
  'pdf-page-numbers': '/api/pdf/page-numbers',
  'pdf-metadata-editor': '/api/pdf/metadata',
  
  // Text Tools
  'text-case-converter': '/api/text/convert-case',
  'text-generator': '/api/text/generate',
  'text-analyzer': '/api/text/analyze',
  'word-counter': '/api/text/analyze',
  'uuid-generator': '/api/text/uuid',
  'hash-generator': '/api/text/hash',
  
  // Image Tools
  'compress-jpg': '/api/image/compress',
  'compress-png': '/api/image/compress',
  'resize-image': '/api/image/resize',
  'crop-image': '/api/image/crop',
  'image-converter': '/api/image/convert',
  'jpg-to-png': '/api/image/convert',
  'png-to-jpg': '/api/image/convert',
  
  // Video Tools
  'video-converter': '/api/video/convert',
  'extract-audio-from-video': '/api/video/extract-audio',
  
  // Audio Tools
  'audio-converter': '/api/audio/convert',
  'mp3-to-wav': '/api/audio/convert',
  
  // Web Tools
  'color-converter': '/api/web/color-convert',
  'css-gradient-generator': '/api/web/css-generator',
  'meta-tags-generator': '/api/web/seo/meta-tags',
  'calculator': '/api/web/calculator',
  'unit-converter': '/api/web/convert-unit',
};

async function analyzeTools() {
  const results: TestResult[] = [];
  
  // Analyze each tool
  allTools.forEach((tool: any) => {
    const result: TestResult = {
      toolId: tool.id,
      toolTitle: tool.title,
      capability: tool.capability || 'unknown',
      hasBackend: !!backendEndpoints[tool.id],
      category: tool.category,
      expectedEndpoint: backendEndpoints[tool.id]
    };
    
    results.push(result);
  });
  
  // Group by capability
  const byCapability = {
    implemented: results.filter(r => r.capability === 'implemented'),
    'coming-soon': results.filter(r => r.capability === 'coming-soon'),
    'requires-service': results.filter(r => r.capability === 'requires-service')
  };
  
  // Find mismatches (marked implemented but no backend)
  const implementedWithoutBackend = byCapability.implemented.filter(r => !r.hasBackend);
  const backendWithoutImplemented = results.filter(r => r.hasBackend && r.capability !== 'implemented');
  
  console.log('=== TOOL ANALYSIS REPORT ===\n');
  
  console.log('📊 CAPABILITY STATUS:');
  console.log(`   Implemented: ${byCapability.implemented.length}`);
  console.log(`   Coming Soon: ${byCapability['coming-soon'].length}`);
  console.log(`   Requires Service: ${byCapability['requires-service'].length}`);
  console.log('');
  
  console.log('🔧 BACKEND ENDPOINTS:');
  console.log(`   Total tools with backend: ${results.filter(r => r.hasBackend).length}`);
  console.log('');
  
  console.log('⚠️  MISMATCHES FOUND:');
  console.log(`   Tools marked 'implemented' but NO backend: ${implementedWithoutBackend.length}`);
  if (implementedWithoutBackend.length > 0) {
    console.log('   Examples:');
    implementedWithoutBackend.slice(0, 10).forEach(r => {
      console.log(`   - ${r.toolId}: ${r.toolTitle}`);
    });
  }
  console.log('');
  
  console.log(`   Tools with backend but NOT marked 'implemented': ${backendWithoutImplemented.length}`);
  if (backendWithoutImplemented.length > 0) {
    console.log('   Examples:');
    backendWithoutImplemented.slice(0, 10).forEach(r => {
      console.log(`   - ${r.toolId}: ${r.toolTitle} (${r.capability})`);
    });
  }
  console.log('');
  
  // Category breakdown
  const byCategory: Record<string, TestResult[]> = {};
  results.forEach(r => {
    if (!byCategory[r.category]) {
      byCategory[r.category] = [];
    }
    byCategory[r.category].push(r);
  });
  
  console.log('📁 TOP CATEGORIES:');
  Object.entries(byCategory)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 15)
    .forEach(([category, tools]) => {
      const implCount = tools.filter(t => t.capability === 'implemented').length;
      const backendCount = tools.filter(t => t.hasBackend).length;
      console.log(`   ${category}: ${tools.length} tools (${implCount} impl, ${backendCount} backend)`);
    });
  
  return {
    results,
    implementedWithoutBackend,
    backendWithoutImplemented,
    byCapability,
    byCategory
  };
}

analyzeTools().then(data => {
  console.log('\n✅ Analysis complete!');
}).catch(err => {
  console.error('Error:', err);
});
