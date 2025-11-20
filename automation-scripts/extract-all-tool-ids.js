import fs from 'fs';

// Read routes.ts
const routesContent = fs.readFileSync('server/routes.ts', 'utf8');

// Find all switch statements and extract case labels
const toolIdsByEndpoint = {};

// Pattern to match app.post endpoints and their switch cases
const endpointRegex = /app\.post\('(\/api\/[^']+)'[^{]*\{([\s\S]*?)(?=app\.post|$)/g;

let match;
while ((match = endpointRegex.exec(routesContent)) !== null) {
  const endpoint = match[1];
  const content = match[2];
  
  // Extract tool IDs from switch cases
  const caseRegex = /case ['"]([^'"]+)['"]/g;
  const toolIds = [];
  let caseMatch;
  
  while ((caseMatch = caseRegex.exec(content)) !== null) {
    toolIds.push(caseMatch[1]);
  }
  
  if (toolIds.length > 0) {
    toolIdsByEndpoint[endpoint] = toolIds;
  }
}

// Display results
console.log('=== TOOL IDS BY ENDPOINT ===\n');

const categories = {
  'PDF Tools': [],
  'Image Tools': [],
  'Audio Tools': [],
  'Video Tools': [],
  'QR Tools': [],
  'Archive Tools': [],
  'Text Tools': [],
  'Web/Color/Calculator Tools': []
};

const allToolIds = [];

Object.keys(toolIdsByEndpoint).sort().forEach(endpoint => {
  const toolIds = toolIdsByEndpoint[endpoint];
  console.log(`${endpoint}`);
  console.log(`  Tools: ${toolIds.length}`);
  console.log(`  IDs: ${toolIds.join(', ')}`);
  console.log('');
  
  allToolIds.push(...toolIds);
  
  // Categorize
  if (endpoint.includes('/pdf/')) {
    categories['PDF Tools'].push(...toolIds);
  } else if (endpoint.includes('/image/')) {
    categories['Image Tools'].push(...toolIds);
  } else if (endpoint.includes('/audio/')) {
    categories['Audio Tools'].push(...toolIds);
  } else if (endpoint.includes('/video/')) {
    categories['Video Tools'].push(...toolIds);
  } else if (endpoint.includes('/qr/')) {
    categories['QR Tools'].push(...toolIds);
  } else if (endpoint.includes('/archive/')) {
    categories['Archive Tools'].push(...toolIds);
  } else if (endpoint.includes('/text/')) {
    categories['Text Tools'].push(...toolIds);
  } else {
    categories['Web/Color/Calculator Tools'].push(...toolIds);
  }
});

console.log('\n=== SUMMARY BY CATEGORY ===\n');
Object.keys(categories).forEach(category => {
  if (categories[category].length > 0) {
    console.log(`${category}: ${categories[category].length} tools`);
  }
});

console.log(`\n=== TOTAL IMPLEMENTED TOOLS: ${allToolIds.length} ===\n`);

// Save to JSON for the update script
fs.writeFileSync('implemented-tool-ids.json', JSON.stringify({
  byEndpoint: toolIdsByEndpoint,
  byCategory: categories,
  allToolIds: allToolIds
}, null, 2));

console.log('✓ Saved to implemented-tool-ids.json');
