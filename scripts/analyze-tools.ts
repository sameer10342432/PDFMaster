import { allTools } from '../shared/schema';
import { getProcessingEndpoint, getToolType } from '../client/src/lib/tool-utils';
import fs from 'fs';

interface ToolAnalysis {
  id: string;
  title: string;
  category: string;
  capability: string;
  toolType: string;
  processingEndpoint: string;
  needsConnection: boolean;
  hasBackendEndpoint: boolean;
}

const EXISTING_ENDPOINTS = [
  // PDF
  '/api/pdf/merge',
  '/api/pdf/split',
  '/api/pdf/compress',
  '/api/pdf/edit',
  '/api/pdf/to-images',
  '/api/pdf/watermark',
  '/api/pdf/page-numbers',
  '/api/pdf/metadata',
  // Image
  '/api/image/compress',
  '/api/image/convert',
  '/api/image/resize',
  '/api/image/crop',
  '/api/image/transform',
  '/api/image/filter',
  '/api/image/enhance',
  '/api/image/watermark',
  '/api/image/metadata',
  '/api/image/tint',
  '/api/image/border',
  // Video
  '/api/video/convert',
  '/api/video/edit',
  '/api/video/extract-audio',
  // Audio
  '/api/audio/convert',
  '/api/audio/edit',
  '/api/audio/effects',
  '/api/audio/metadata',
  // Text
  '/api/text/convert-case',
  '/api/text/generate',
  '/api/text/analyze',
  '/api/text/manipulate',
  '/api/text/encode',
  '/api/text/uuid',
  '/api/text/hash',
  '/api/text/format',
  // Web/SEO
  '/api/web/color-convert',
  '/api/web/generate-palette',
  '/api/web/color-picker',
  '/api/web/color-harmony',
  '/api/web/color-blindness',
  '/api/web/css-generator',
  '/api/web/seo/meta-tags',
  '/api/web/seo/sitemap',
  '/api/web/seo/robots-txt',
  '/api/web/seo/schema-markup',
  '/api/web/calculator',
  '/api/web/convert-unit',
  '/api/web/time-date',
  // QR
  '/api/qr/generate',
  '/api/qr/scan',
  // Archive
  '/api/archive/extract',
  '/api/archive/create',
];

// Analyze all tools
const analyses: ToolAnalysis[] = allTools.map(tool => {
  const toolType = getToolType(tool.category, tool.id);
  const processingEndpoint = getProcessingEndpoint(tool.id, toolType);
  const hasBackendEndpoint = EXISTING_ENDPOINTS.includes(processingEndpoint);
  const needsConnection = tool.capability === 'implemented' && !hasBackendEndpoint;

  return {
    id: tool.id,
    title: tool.title,
    category: tool.category,
    capability: tool.capability,
    toolType,
    processingEndpoint,
    needsConnection,
    hasBackendEndpoint,
  };
});

// Group by status
const byCapability = {
  implemented: analyses.filter(t => t.capability === 'implemented'),
  comingSoon: analyses.filter(t => t.capability === 'coming-soon'),
  requiresService: analyses.filter(t => t.capability === 'requires-service'),
};

const implementedWithBackend = byCapability.implemented.filter(t => t.hasBackendEndpoint);
const implementedNeedsConnection = byCapability.implemented.filter(t => t.needsConnection);

// Group implemented tools by endpoint
const byEndpoint: Record<string, ToolAnalysis[]> = {};
implementedWithBackend.forEach(tool => {
  if (!byEndpoint[tool.processingEndpoint]) {
    byEndpoint[tool.processingEndpoint] = [];
  }
  byEndpoint[tool.processingEndpoint].push(tool);
});

// Generate report
let report = `# Tool Inventory Analysis
Generated: ${new Date().toISOString()}
Total Tools: ${allTools.length}

## Summary
- ✅ Implemented: ${byCapability.implemented.length}
  - 🔌 Connected to backend: ${implementedWithBackend.length}
  - ⚠️ Needs connection: ${implementedNeedsConnection.length}
- ⏳ Coming Soon: ${byCapability.comingSoon.length}
- 🤖 Requires AI Service: ${byCapability.requiresService.length}

## Tools by Backend Endpoint

`;

// Sort endpoints by number of tools
const sortedEndpoints = Object.entries(byEndpoint).sort((a, b) => b[1].length - a[1].length);

sortedEndpoints.forEach(([endpoint, tools]) => {
  report += `### ${endpoint} (${tools.length} tools)\n`;
  tools.forEach(tool => {
    report += `- ${tool.id} - ${tool.title}\n`;
  });
  report += `\n`;
});

report += `## Tools Needing Connection (${implementedNeedsConnection.length})\n\n`;
implementedNeedsConnection.forEach(tool => {
  report += `- ${tool.id} (${tool.category}) -> ${tool.processingEndpoint}\n`;
});

report += `\n## Coming Soon Tools by Category\n\n`;
const comingSoonByCategory: Record<string, ToolAnalysis[]> = {};
byCapability.comingSoon.forEach(tool => {
  if (!comingSoonByCategory[tool.category]) {
    comingSoonByCategory[tool.category] = [];
  }
  comingSoonByCategory[tool.category].push(tool);
});

Object.entries(comingSoonByCategory)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([category, tools]) => {
    report += `### ${category} (${tools.length} tools)\n`;
  });

// Write report
fs.writeFileSync('TOOL_INVENTORY.md', report);
console.log('✅ Tool inventory created: TOOL_INVENTORY.md');
console.log(`\nQuick Stats:`);
console.log(`- Total: ${allTools.length}`);
console.log(`- Implemented with backend: ${implementedWithBackend.length}`);
console.log(`- Implemented needs connection: ${implementedNeedsConnection.length}`);
console.log(`- Coming soon: ${byCapability.comingSoon.length}`);
console.log(`- Requires AI service: ${byCapability.requiresService.length}`);
