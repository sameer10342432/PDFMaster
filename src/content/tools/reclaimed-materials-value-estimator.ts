import { CalculatorContent } from '@/types';

export const RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Reclaimed Materials Value Estimator',
  description: 'Estimate the market value of reclaimed building materials for renovation or resale',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'reclaimed-materials-value-estimator',
  article: {
    title: "Understanding Reclaimed Materials Value",
    content: `
    <h2>What are Reclaimed Building Materials?</h2>
    <p>Reclaimed building materials are salvaged components from demolished or deconstructed structures that are reused in new construction or renovation projects. These materials offer unique character, environmental benefits, and often substantial cost savings or profit potential.</p>
    
    <h3>Why Reclaimed Materials Have Value</h3>
    <ul>
      <li><strong>Quality:</strong> Old-growth lumber is denser and more durable than modern timber</li>
      <li><strong>Character:</strong> Aged patina and unique characteristics impossible to replicate</li>
      <li><strong>Sustainability:</strong> Reduces environmental impact and appeals to eco-conscious buyers</li>
      <li><strong>Scarcity:</strong> Some materials (old-growth wood, vintage tiles) are no longer available new</li>
      <li><strong>Craftsmanship:</strong> Historic materials often showcase superior workmanship</li>
    </ul>
    
    <h3>Most Valuable Reclaimed Materials</h3>
    
    <h4>Lumber and Wood ($2-20 per board foot)</h4>
    <ul>
      <li>Old-growth Douglas fir: $8-15 per bf</li>
      <li>Reclaimed barn wood: $4-10 per bf</li>
      <li>Heart pine: $6-12 per bf</li>
      <li>Oak beams: $5-12 per bf</li>
      <li>Exotic hardwoods: $10-20 per bf</li>
    </ul>
    
    <h4>Flooring ($5-25 per sq ft)</h4>
    <ul>
      <li>Wide-plank hardwood: $10-25 per sq ft</li>
      <li>Parquet flooring: $8-18 per sq ft</li>
      <li>Vintage tile: $5-15 per sq ft</li>
      <li>Reclaimed brick pavers: $3-8 per sq ft</li>
    </ul>
    
    <h4>Architectural Elements</h4>
    <ul>
      <li>Vintage doors: $100-2,000 each</li>
      <li>Stained glass windows: $500-5,000+</li>
      <li>Mantels: $200-3,000</li>
      <li>Columns and posts: $300-2,000</li>
      <li>Decorative ironwork: $100-1,500</li>
    </ul>
    
    <h4>Fixtures and Hardware</h4>
    <ul>
      <li>Vintage lighting: $50-1,500</li>
      <li>Clawfoot tubs: $300-2,000</li>
      <li>Antique hardware: $10-200 per piece</li>
      <li>Radiators: $100-800</li>
    </ul>
    
    <h4>Bricks and Stone ($0.50-5 per unit)</h4>
    <ul>
      <li>Antique bricks: $0.50-2 per brick</li>
      <li>Paving stones: $2-8 per stone</li>
      <li>Granite blocks: $3-10 per block</li>
    </ul>
    
    <h3>Factors Affecting Value</h3>
    <ul>
      <li><strong>Condition:</strong> Better condition commands higher prices</li>
      <li><strong>Age and Provenance:</strong> Historic buildings or notable structures add value</li>
      <li><strong>Quantity:</strong> Larger quantities easier to sell and use</li>
      <li><strong>Species/Type:</strong> Rare or desirable materials worth more</li>
      <li><strong>Dimensions:</strong> Unusual sizes or large pieces more valuable</li>
      <li><strong>Local Market:</strong> Demand varies by region</li>
    </ul>
    
    <h3>Where to Sell Reclaimed Materials</h3>
    <ul>
      <li>Architectural salvage yards (40-60% of retail value)</li>
      <li>Online marketplaces (Craigslist, Facebook, eBay)</li>
      <li>Direct to contractors and builders</li>
      <li>Specialty reclaimed material dealers</li>
      <li>Auction houses (for high-value items)</li>
    </ul>
    
    <h3>Using Reclaimed Materials in Your Project</h3>
    <p>Using reclaimed materials can save 20-50% compared to buying new equivalents, while adding unique character to your space. A reclaimed wood accent wall might cost $8-15 per sq ft vs. $15-30 for new wood with similar character.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "lumberBoardFeet",
        label: "Reclaimed Lumber (board feet)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "lumberPricePerBF",
        label: "Lumber Price ($ per board foot)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "flooringSqFt",
        label: "Flooring (sq ft)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "flooringPricePerSqFt",
        label: "Flooring Price ($ per sq ft)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "bricks",
        label: "Number of Bricks",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "brickPrice",
        label: "Brick Price ($ per brick)",
        type: "number",
        placeholder: "1.5",
        defaultValue: "1.5",
      },
      {
        name: "fixtures",
        label: "Fixtures/Architectural Elements",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "fixtureAvgPrice",
        label: "Avg Fixture Price ($)",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
    ],
    results: [
      { label: "Lumber Value", isCurrency: true },
      { label: "Flooring Value", isCurrency: true },
      { label: "Brick Value", isCurrency: true },
      { label: "Fixtures Value", isCurrency: true },
      { label: "Total Estimated Value", isCurrency: true },
      { label: "Wholesale Value (60%)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const lumberBF = Number(data.lumberBoardFeet) || 0;
      const lumberPrice = Number(data.lumberPricePerBF) || 0;
      const floorSqFt = Number(data.flooringSqFt) || 0;
      const floorPrice = Number(data.flooringPricePerSqFt) || 0;
      const bricks = Number(data.bricks) || 0;
      const brickPrice = Number(data.brickPrice) || 0;
      const fixtures = Number(data.fixtures) || 0;
      const fixturePrice = Number(data.fixtureAvgPrice) || 0;
      
      const lumberValue = lumberBF * lumberPrice;
      const flooringValue = floorSqFt * floorPrice;
      const brickValue = bricks * brickPrice;
      const fixturesValue = fixtures * fixturePrice;
      const totalValue = lumberValue + flooringValue + brickValue + fixturesValue;
      const wholesaleValue = totalValue * 0.6;

      return [
        { label: "Lumber Value", value: lumberValue.toFixed(2), isCurrency: true },
        { label: "Flooring Value", value: flooringValue.toFixed(2), isCurrency: true },
        { label: "Brick Value", value: brickValue.toFixed(2), isCurrency: true },
        { label: "Fixtures Value", value: fixturesValue.toFixed(2), isCurrency: true },
        { label: "Total Estimated Value", value: totalValue.toFixed(2), isCurrency: true },
        { label: "Wholesale Value (60%)", value: wholesaleValue.toFixed(2), isCurrency: true },
      ];
    },
  },
};
