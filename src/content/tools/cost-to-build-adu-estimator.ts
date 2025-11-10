import { CalculatorContent } from '@/types';

export const COST_TO_BUILD_ADU_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Cost to Build ADU Estimator - Accessory Dwelling Unit Construction Budget',
  description: 'Estimate total costs to build an ADU including design, permits, materials, labor, and site work based on size and type',
  icon: 'Icon',
  slug: 'cost-to-build-adu-estimator',
  category: 'Investment Analysis',
  article: {
    title: 'Complete Guide to Estimating ADU Construction Costs',
    content: `
    <h2>Understanding ADU Construction Costs</h2>
    <p>Building an Accessory Dwelling Unit (ADU) is a significant investment, with total costs ranging from $50,000 to $500,000+ depending on size, type, location, and finishes. Accurate cost estimation is critical for budget planning and ensuring your ADU project delivers positive returns.</p>

    <h3>ADU Cost Ranges by Type</h3>
    <ul>
      <li><strong>Junior ADU (JADU):</strong> $15,000-$50,000 - Converting existing bedroom, minimal construction.</li>
      <li><strong>Garage Conversion:</strong> $80,000-$180,000 - Existing structure reduces costs significantly.</li>
      <li><strong>Basement Conversion:</strong> $50,000-$120,000 - Good ROI but requires separate entrance and egress windows.</li>
      <li><strong>Attached ADU:</strong> $100,000-$250,000 - Addition to main house, shares some utilities.</li>
      <li><strong>Detached ADU (New Construction):</strong> $150,000-$400,000+ - Complete standalone structure, highest cost but best rental potential.</li>
      <li><strong>Above-Garage ADU:</strong> $120,000-$280,000 - Builds on existing garage, maximizes lot use.</li>
    </ul>

    <h3>Cost Breakdown by Construction Phase</h3>
    <ul>
      <li><strong>Pre-Construction (5-10%):</strong> Design, engineering, permits, surveys, soil tests ($10,000-$40,000).</li>
      <li><strong>Site Preparation (3-8%):</strong> Demolition, grading, utility trenching, tree removal ($5,000-$25,000).</li>
      <li><strong>Foundation (8-15%):</strong> Slab, crawl space, or basement foundation ($15,000-$60,000).</li>
      <li><strong>Framing & Shell (25-35%):</strong> Lumber, walls, roof, windows, doors ($45,000-$140,000).</li>
      <li><strong>Systems (20-30%):</strong> Electrical, plumbing, HVAC, insulation ($35,000-$120,000).</li>
      <li><strong>Interior Finishes (20-30%):</strong> Drywall, flooring, kitchen, bathroom, paint ($35,000-$120,000).</li>
      <li><strong>Exterior (5-10%):</strong> Siding, roofing, decks, landscaping ($10,000-$40,000).</li>
      <li><strong>Contingency (10-15%):</strong> Unexpected costs, changes, overruns ($15,000-$60,000).</li>
    </ul>

    <h3>Detailed Cost Components</h3>
    <ul>
      <li><strong>Architect/Designer:</strong> $5,000-$20,000 or $8-$15 per sq ft for custom plans. Stock plans $500-$3,000.</li>
      <li><strong>Permits & Fees:</strong> $5,000-$25,000 depending on jurisdiction - some cities have streamlined ADU permits.</li>
      <li><strong>Foundation:</strong> Slab ($8-$12/sq ft), Crawl space ($10-$15/sq ft), Full basement ($15-$25/sq ft).</li>
      <li><strong>Framing:</strong> $15-$30/sq ft including lumber, labor, roof trusses, sheathing.</li>
      <li><strong>Windows & Doors:</strong> $5,000-$15,000 for standard quality, $10,000-$25,000 for high-end.</li>
      <li><strong>Electrical:</strong> $8,000-$20,000 including panel upgrade, wiring, fixtures, outlets.</li>
      <li><strong>Plumbing:</strong> $10,000-$25,000 for full bathroom, kitchen, water heater, sewer connection.</li>
      <li><strong>HVAC:</strong> $5,000-$15,000 for split system or mini-split units.</li>
      <li><strong>Kitchen:</strong> $8,000-$25,000 for cabinets, countertops, appliances, sink, faucet.</li>
      <li><strong>Bathroom:</strong> $8,000-$20,000 for shower/tub, toilet, vanity, tile, fixtures.</li>
      <li><strong>Flooring:</strong> $3,000-$10,000 for vinyl plank, laminate, tile, or hardwood.</li>
    </ul>

    <h3>Regional Cost Variations</h3>
    <ul>
      <li><strong>High-Cost Markets:</strong> San Francisco, Los Angeles, Seattle, Boston - $250-$500+/sq ft total cost.</li>
      <li><strong>Medium-Cost Markets:</strong> Denver, Austin, Portland, San Diego - $180-$300/sq ft.</li>
      <li><strong>Lower-Cost Markets:</strong> Most suburban and rural areas - $120-$220/sq ft.</li>
      <li><strong>Labor Cost Factors:</strong> Union vs non-union, permit complexity, site accessibility all impact labor rates.</li>
    </ul>

    <h3>Cost-Saving Strategies</h3>
    <ul>
      <li><strong>Prefab/Modular ADUs:</strong> Factory-built units can save 15-30% vs stick-built construction.</li>
      <li><strong>Stock Plans:</strong> Use pre-designed plans instead of custom architecture to save $5,000-$15,000.</li>
      <li><strong>Simple Design:</strong> Rectangular shape, simple roofline, standard materials reduce costs significantly.</li>
      <li><strong>Right-Size the Unit:</strong> 500-800 sq ft is the sweet spot - larger doesn't proportionally increase rent.</li>
      <li><strong>Garage Conversion:</strong> Existing structure saves $30,000-$80,000 compared to new construction.</li>
      <li><strong>DIY Work:</strong> Handle demolition, painting, landscaping yourself to save 10-20%.</li>
      <li><strong>Bundle Permits:</strong> Some cities offer pre-approved ADU plans with streamlined permits saving time and money.</li>
      <li><strong>Standard Finishes:</strong> Vinyl plank vs hardwood, laminate vs granite saves $20,000-$50,000.</li>
    </ul>

    <h3>Hidden Costs to Budget For</h3>
    <ul>
      <li><strong>Utility Connection Fees:</strong> $5,000-$20,000 for water, sewer, electrical service upgrades.</li>
      <li><strong>Impact Fees:</strong> Some jurisdictions charge $3,000-$15,000 for new dwelling units.</li>
      <li><strong>Tree Removal/Protection:</strong> $1,000-$10,000 if protected trees are involved.</li>
      <li><strong>Soil Issues:</strong> $5,000-$30,000 for poor soil, expansive clay, or contamination remediation.</li>
      <li><strong>Retaining Walls:</strong> $5,000-$25,000 if site requires significant grading.</li>
      <li><strong>Accessibility Upgrades:</strong> $10,000-$30,000 for ADA-compliant features if required.</li>
      <li><strong>Fire Sprinklers:</strong> $3,000-$8,000 if code-required in your jurisdiction.</li>
      <li><strong>Furniture/Appliances:</strong> $5,000-$15,000 if renting furnished.</li>
    </ul>

    <h3>Financing Impacts on Total Cost</h3>
    <ul>
      <li><strong>Interest Costs:</strong> $30,000-$100,000 over 15-year loan depending on amount borrowed.</li>
      <li><strong>Loan Fees:</strong> 1-3% of loan amount for origination, appraisal, closing costs.</li>
      <li><strong>Construction Loan Interest:</strong> Higher rates (8-12%) during construction phase before permanent financing.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your ADU size in square feet, construction type (detached, garage conversion, etc.), quality level (standard vs luxury finishes), and your location cost multiplier. The calculator estimates costs across all construction phases and provides a total budget estimate including contingency to help you plan your ADU project accurately.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'aduSize',
        label: 'ADU Size (Square Feet)',
        type: 'number',
        defaultValue: 650,
      },
      {
        name: 'aduType',
        label: 'ADU Type',
        type: 'select',
        defaultValue: 'detached',
        options: [
          { label: 'Detached (New Construction)', value: 'detached' },
          { label: 'Garage Conversion', value: 'garage' },
          { label: 'Basement Conversion', value: 'basement' },
          { label: 'Attached Addition', value: 'attached' },
          { label: 'Above Garage', value: 'aboveGarage' },
        ],
      },
      {
        name: 'finishLevel',
        label: 'Finish Level',
        type: 'select',
        defaultValue: 'standard',
        options: [
          { label: 'Standard/Basic', value: 'basic' },
          { label: 'Standard/Mid-Range', value: 'standard' },
          { label: 'High-End/Luxury', value: 'luxury' },
        ],
      },
      {
        name: 'locationMultiplier',
        label: 'Location Cost Multiplier',
        type: 'select',
        defaultValue: '1.0',
        options: [
          { label: 'Low-Cost Area (0.8x)', value: '0.8' },
          { label: 'Average Cost Area (1.0x)', value: '1.0' },
          { label: 'High-Cost Area (1.3x)', value: '1.3' },
          { label: 'Very High-Cost Area (1.6x)', value: '1.6' },
        ],
      },
      {
        name: 'needPermits',
        label: 'Permits & Design',
        type: 'select',
        defaultValue: 'yes',
        options: [
          { label: 'Yes - Full Design & Permits', value: 'yes' },
          { label: 'Stock Plans - Streamlined', value: 'stock' },
        ],
      },
    ],
    results: [],
    calculate: (values) => {
      const { aduSize, aduType, finishLevel, locationMultiplier, needPermits } = values;
      
      // Base cost per sq ft by type and finish level
      let baseCostPerSqFt = 0;
      
      const costMatrix: Record<string, Record<string, number>> = {
        detached: { basic: 200, standard: 280, luxury: 400 },
        garage: { basic: 120, standard: 160, luxury: 240 },
        basement: { basic: 80, standard: 120, luxury: 180 },
        attached: { basic: 150, standard: 210, luxury: 320 },
        aboveGarage: { basic: 170, standard: 240, luxury: 350 },
      };
      
      baseCostPerSqFt = costMatrix[aduType][finishLevel];
      
      const baseConstructionCost = aduSize * baseCostPerSqFt * parseFloat(locationMultiplier);
      
      // Permits & Design
      const permitsCost = needPermits === 'yes' ? 
        Math.max(10000, baseConstructionCost * 0.08) : 
        Math.max(3000, baseConstructionCost * 0.03);
      
      // Site work (varies by type)
      const siteWorkMultiplier = aduType === 'detached' ? 0.08 : (aduType === 'aboveGarage' ? 0.06 : 0.03);
      const siteWork = baseConstructionCost * siteWorkMultiplier;
      
      // Utility connections (higher for detached)
      const utilityConnections = aduType === 'detached' ? 15000 : (aduType === 'garage' || aduType === 'basement' ? 8000 : 10000);
      
      // Landscaping & exterior
      const landscaping = aduType === 'detached' ? 8000 : 4000;
      
      // Contingency
      const contingency = (baseConstructionCost + permitsCost + siteWork + utilityConnections) * 0.12;
      
      const totalCost = baseConstructionCost + permitsCost + siteWork + utilityConnections + landscaping + contingency;
      const costPerSqFt = totalCost / aduSize;

      return [
        { label: 'ADU Size', value: `${aduSize} sq ft` },
        { label: 'Base Construction Cost', value: baseConstructionCost.toFixed(2), isCurrency: true },
        { label: 'Permits & Design', value: permitsCost.toFixed(2), isCurrency: true },
        { label: 'Site Preparation', value: siteWork.toFixed(2), isCurrency: true },
        { label: 'Utility Connections', value: utilityConnections.toFixed(2), isCurrency: true },
        { label: 'Landscaping & Exterior', value: landscaping.toFixed(2), isCurrency: true },
        { label: 'Contingency (12%)', value: contingency.toFixed(2), isCurrency: true },
        { label: 'Total Estimated Cost', value: totalCost.toFixed(2), isCurrency: true },
        { label: 'Cost per Square Foot', value: `$${costPerSqFt.toFixed(2)}` },
      ];
    },
  },
};
