import { CalculatorContent } from '@/types';

export const COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Cost to Build a House Estimator',
  description: 'Estimate home construction costs by quality level, size, and regional factors',
  slug: 'cost-to-build-house-estimator',
  icon: '🏡',
  category: 'Advanced Analytics',
  article: {
    title: 'Home Construction Cost Estimation Guide',
    content: `
    <h2>Estimating Home Building Costs</h2>
    <p>Building a custom home requires careful cost estimation across multiple categories. Regional variations, quality levels, and design complexity significantly impact total investment required.</p>
    
    <h3>Construction Quality Levels</h3>
    <ul>
      <li><strong>Economy:</strong> Basic finishes, standard materials, minimal customization ($100-150/sq ft)</li>
      <li><strong>Standard:</strong> Quality finishes, good materials, some custom features ($150-200/sq ft)</li>
      <li><strong>Custom:</strong> Premium finishes, upgraded materials, significant customization ($200-300/sq ft)</li>
      <li><strong>Luxury:</strong> High-end finishes, designer materials, extensive customization ($300-500+/sq ft)</li>
    </ul>

    <h3>Cost Components</h3>
    <ul>
      <li><strong>Foundation:</strong> Slab, crawlspace, or basement ($10,000-$50,000)</li>
      <li><strong>Framing:</strong> Lumber, trusses, roof structure ($30,000-$70,000)</li>
      <li><strong>Exterior:</strong> Siding, roofing, windows, doors ($40,000-$100,000)</li>
      <li><strong>Major Systems:</strong> Plumbing, electrical, HVAC ($50,000-$100,000)</li>
      <li><strong>Interior Finishes:</strong> Flooring, cabinets, countertops, trim ($60,000-$150,000)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Select your quality level, enter square footage, choose number of stories, and specify any premium features. The calculator estimates:</p>
    <ul>
      <li>Base construction costs by quality tier</li>
      <li>Foundation and framing expenses</li>
      <li>Systems and finish costs</li>
      <li>Garage and additional features</li>
      <li>Total estimated cost to build</li>
    </ul>

    <h3>Regional Cost Variations</h3>
    <p>Construction costs vary significantly by location. Urban areas typically run 20-40% higher than rural regions. Coastal and high-demand markets command premium pricing. Remote locations may face increased material delivery costs.</p>
    
    <h3>Ways to Reduce Costs</h3>
    <p>Choose simpler floor plans with fewer corners and standard dimensions. Select standard materials over custom options. Handle some finish work yourself. Build during off-peak season. Consider pre-fabricated components where appropriate.</p>
    
    <h3>Hidden Costs to Remember</h3>
    <p>Don't forget utility connections, driveway and walkways, landscaping, window treatments, appliances, and temporary housing during construction. These can add $30,000-$80,000 to your total budget.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Square Footage',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'qualityLevel',
        label: 'Quality Level',
        type: 'select',
        options: [
          { value: 'economy', label: 'Economy ($100-150/sq ft)' },
          { value: 'standard', label: 'Standard ($150-200/sq ft)' },
          { value: 'custom', label: 'Custom ($200-300/sq ft)' },
          { value: 'luxury', label: 'Luxury ($300-500/sq ft)' },
        ],
        defaultValue: 'standard',
      },
      {
        name: 'stories',
        label: 'Number of Stories',
        type: 'select',
        options: [
          { value: '1', label: 'Single Story' },
          { value: '2', label: 'Two Story' },
          { value: '3', label: 'Three Story' },
        ],
        defaultValue: '2',
      },
      {
        name: 'garageSize',
        label: 'Garage Size (Cars)',
        type: 'select',
        options: [
          { value: '0', label: 'No Garage' },
          { value: '1', label: '1-Car' },
          { value: '2', label: '2-Car' },
          { value: '3', label: '3-Car' },
        ],
        defaultValue: '2',
      },
      {
        name: 'basement',
        label: 'Basement',
        type: 'select',
        options: [
          { value: 'none', label: 'No Basement' },
          { value: 'unfinished', label: 'Unfinished Basement' },
          { value: 'finished', label: 'Finished Basement' },
        ],
        defaultValue: 'none',
      },
      {
        name: 'porchDeck',
        label: 'Porch/Deck (Sq Ft)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'regionalMultiplier',
        label: 'Regional Cost Multiplier',
        type: 'number',
        defaultValue: 1.0,
      },
    ],
    results: [
      { label: 'Base Construction Cost', isCurrency: true },
      { label: 'Garage Cost', isCurrency: true },
      { label: 'Basement Cost', isCurrency: true },
      { label: 'Porch/Deck Cost', isCurrency: true },
      { label: 'Multi-Story Adjustment', isCurrency: true },
      { label: 'Subtotal', isCurrency: true },
      { label: 'Regional Adjustment', isCurrency: true },
      { label: 'Estimated Total Cost', isCurrency: true },
      { label: 'Cost Per Square Foot', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        squareFootage,
        qualityLevel,
        stories,
        garageSize,
        basement,
        porchDeck,
        regionalMultiplier,
      } = values;

      // Base cost per sq ft by quality
      const qualityRates: Record<string, number> = {
        economy: 125,
        standard: 175,
        custom: 250,
        luxury: 400,
      };
      
      const baseCostPerSqFt = qualityRates[qualityLevel as string] || 175;
      const baseConstructionCost = squareFootage * baseCostPerSqFt;
      
      // Garage cost (approximately $15,000-$50,000 per car based on quality)
      const garageCostPerCar = baseCostPerSqFt * 0.3 * 400; // Avg garage is 400 sq ft per car
      const garageCost = parseInt(garageSize as string) * garageCostPerCar;
      
      // Basement cost
      let basementCost = 0;
      if (basement === 'unfinished') {
        basementCost = squareFootage * 30; // Unfinished basement: $30/sq ft
      } else if (basement === 'finished') {
        basementCost = squareFootage * 80; // Finished basement: $80/sq ft
      }
      
      // Porch/deck cost ($30-60/sq ft)
      const porchDeckCost = porchDeck * 45;
      
      // Multi-story adjustment (2+ stories slightly cheaper per sq ft due to shared foundation/roof)
      const storyCount = parseInt(stories as string);
      const storyAdjustment = storyCount > 1 ? baseConstructionCost * -0.05 : 0;
      
      const subtotal = baseConstructionCost + garageCost + basementCost + porchDeckCost + storyAdjustment;
      const regionalAdjustment = subtotal * (regionalMultiplier - 1);
      const estimatedTotal = subtotal + regionalAdjustment;
      const costPerSqFt = estimatedTotal / squareFootage;

      return [
        { label: 'Base Construction Cost', value: baseConstructionCost.toFixed(2), isCurrency: true },
        { label: 'Garage Cost', value: garageCost.toFixed(2), isCurrency: true },
        { label: 'Basement Cost', value: basementCost.toFixed(2), isCurrency: true },
        { label: 'Porch/Deck Cost', value: porchDeckCost.toFixed(2), isCurrency: true },
        { label: 'Multi-Story Adjustment', value: storyAdjustment.toFixed(2), isCurrency: true },
        { label: 'Subtotal', value: subtotal.toFixed(2), isCurrency: true },
        { label: 'Regional Adjustment', value: regionalAdjustment.toFixed(2), isCurrency: true },
        { label: 'Estimated Total Cost', value: estimatedTotal.toFixed(2), isCurrency: true },
        { label: 'Cost Per Square Foot', value: costPerSqFt.toFixed(2), isCurrency: true },
      ];
    },
  },
};
