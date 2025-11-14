import { CalculatorContent } from '@/types';

export const FLOORING_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Flooring Cost Estimator - Compare Hardwood vs Carpet vs LVP Costs',
  description: 'Compare costs for hardwood, carpet, and luxury vinyl plank (LVP) flooring including materials, installation, and long-term value',
  icon: 'Icon',
  slug: 'flooring-cost-estimator-hardwood-carpet-lvp',
  category: 'Home Improvement',
  article: {
    title: 'Flooring Cost Comparison: Hardwood vs Carpet vs Luxury Vinyl Plank (LVP)',
    content: `
    <h2>Comparing Flooring Options</h2>
    <p>Choosing the right flooring involves balancing upfront cost, durability, maintenance, and resale value. Hardwood flooring costs $6-$22 per square foot installed and adds the most value, carpet costs $3-$11 per square foot and offers the most comfort, while luxury vinyl plank (LVP) costs $4-$12 per square foot and provides the best water resistance. Understanding the total cost of ownership over 10-20 years helps homeowners make the right choice for each room.</p>

    <h3>Hardwood Flooring Costs</h3>
    <ul>
      <li><strong>Solid Hardwood:</strong> $8-$22 per sq ft installed - can be refinished 5-7 times, lasts 50-100+ years, adds most resale value.</li>
      <li><strong>Engineered Hardwood:</strong> $6-$15 per sq ft installed - more stable than solid, can refinish 1-3 times, good for basements.</li>
      <li><strong>Oak Flooring:</strong> $6-$12 per sq ft (most popular) - durable, refinishable, wide availability in red or white oak.</li>
      <li><strong>Exotic Hardwood:</strong> $10-$25 per sq ft - Brazilian cherry, teak, mahogany - exceptional hardness and unique grain patterns.</li>
      <li><strong>Materials Only:</strong> $3-$12 per sq ft for wood - varies by species, grade (select vs common), finish (prefinished vs site-finished).</li>
      <li><strong>Installation Labor:</strong> $3-$8 per sq ft - includes subfloor prep, underlayment, nailing/gluing, baseboard installation.</li>
      <li><strong>Refinishing:</strong> $3-$5 per sq ft every 10-15 years - sanding, staining, polyurethane - extends life indefinitely.</li>
    </ul>

    <h3>Carpet Flooring Costs</h3>
    <ul>
      <li><strong>Budget Carpet:</strong> $2-$4 per sq ft installed - basic polyester or olefin, 5-7 year lifespan, builder-grade quality.</li>
      <li><strong>Mid-Grade Carpet:</strong> $4-$8 per sq ft installed - nylon or polyester blend, 8-12 year lifespan, good stain resistance.</li>
      <li><strong>Premium Carpet:</strong> $6-$11 per sq ft installed - high-quality nylon, 12-20 year lifespan, excellent durability and feel.</li>
      <li><strong>Carpet Materials:</strong> $1-$6 per sq ft - varies by fiber type (nylon best, polyester mid-range, olefin budget).</li>
      <li><strong>Padding:</strong> $0.50-$1.50 per sq ft - quality pad extends carpet life 50%, improves comfort significantly.</li>
      <li><strong>Installation:</strong> $1-$3 per sq ft - includes removal of old carpet, tack strip installation, stretching, seaming.</li>
      <li><strong>Stairs:</strong> $10-$25 per step - labor-intensive, requires precise cutting and tucking around nose and risers.</li>
    </ul>

    <h3>Luxury Vinyl Plank (LVP) Costs</h3>
    <ul>
      <li><strong>Budget LVP:</strong> $2-$4 per sq ft installed - thinner wear layer (6-12 mil), limited warranty (5-10 years), basic designs.</li>
      <li><strong>Mid-Grade LVP:</strong> $4-$7 per sq ft installed - 12-20 mil wear layer, 15-20 year warranty, realistic wood/stone looks.</li>
      <li><strong>Premium LVP:</strong> $6-$12 per sq ft installed - 20-40 mil wear layer, lifetime warranty, embossed textures, superior realism.</li>
      <li><strong>Materials Only:</strong> $2-$8 per sq ft - varies by thickness (4-8mm), wear layer, locking mechanism quality.</li>
      <li><strong>Installation:</strong> $2-$4 per sq ft - click-lock floating floor, includes underlayment, transitions, baseboards.</li>
      <li><strong>Waterproof Core:</strong> Standard feature on quality LVP - 100% waterproof core (WPC or SPC), ideal for kitchens, bathrooms, basements.</li>
    </ul>

    <h3>Long-Term Cost Comparison</h3>
    <ul>
      <li><strong>Hardwood 20-Year Cost:</strong> $10-$25 initial + $3-$5 refinishing every 12 years = $16-$30 per sq ft total, adds $2-$5 per sq ft to home value.</li>
      <li><strong>Carpet 20-Year Cost:</strong> $4-$8 initial + replacement every 10 years = $8-$16 per sq ft total, minimal resale value impact.</li>
      <li><strong>LVP 20-Year Cost:</strong> $4-$12 initial, no refinishing needed, may replace once in 20 years = $4-$18 per sq ft total, adds $0-$1 per sq ft value.</li>
      <li><strong>Winner for ROI:</strong> Hardwood in main living areas (living, dining, master), LVP in wet areas (kitchen, bath, basement), carpet in bedrooms only.</li>
    </ul>

    <h3>Resale Value Impact</h3>
    <ul>
      <li><strong>Hardwood:</strong> Highest return - 75-85% of buyers prefer hardwood, willing to pay premium, adds $2-$5 per sq ft to home value.</li>
      <li><strong>LVP:</strong> Growing acceptance - modern buyers appreciate waterproof durability, especially in kitchens, adds $0-$2 per sq ft value.</li>
      <li><strong>Carpet:</strong> Lowest return - buyers often replace immediately, only adds value in bedrooms where expected, no value elsewhere.</li>
      <li><strong>Mixed Flooring:</strong> Best approach - hardwood in social areas, LVP in wet areas, carpet in bedrooms - appeals to all buyers.</li>
    </ul>

    <h3>Maintenance Costs</h3>
    <ul>
      <li><strong>Hardwood Maintenance:</strong> $100-$200/year for cleaning products, furniture pads, area rugs - refinish $1,000-$3,000 every 10-15 years.</li>
      <li><strong>Carpet Maintenance:</strong> $200-$500/year for professional cleaning (2x/year recommended), stain treatments, spot cleaning supplies.</li>
      <li><strong>LVP Maintenance:</strong> $50-$100/year for cleaning products only - most durable, easiest to maintain, no special treatments needed.</li>
    </ul>

    <h3>Best Flooring by Room</h3>
    <ul>
      <li><strong>Living Room:</strong> Hardwood first choice - high traffic, visible to guests, adds most value, can use area rugs for comfort.</li>
      <li><strong>Kitchen:</strong> LVP ideal - waterproof, comfortable to stand on, looks like wood, resists scratches from dropped items.</li>
      <li><strong>Dining Room:</strong> Hardwood preferred - formal space, chairs slide easily, spills easy to clean vs carpet.</li>
      <li><strong>Bedrooms:</strong> Carpet for comfort or hardwood for value - personal preference, carpet warmer and softer, hardwood easier for allergies.</li>
      <li><strong>Bathrooms:</strong> LVP only option - 100% waterproof, tile alternative, warm underfoot, easy to clean.</li>
      <li><strong>Basement:</strong> LVP best choice - handles moisture, installs over concrete, warmer than tile, hardwood risky in basements.</li>
      <li><strong>Stairs:</strong> Hardwood for durability or carpet for safety - hardwood most durable, carpet softer/safer but shows wear quickly.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Select your flooring type (hardwood, carpet, or LVP), enter square footage, choose quality tier, and indicate if professional installation or DIY. The calculator estimates material costs, installation labor, long-term maintenance costs, replacement frequency, and 20-year total cost of ownership to help you compare options and make the best flooring decision for your budget and goals.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Square Footage',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'flooringType',
        label: 'Flooring Type',
        type: 'select',
        options: [
          { label: 'Hardwood', value: 'hardwood' },
          { label: 'Carpet', value: 'carpet' },
          { label: 'Luxury Vinyl Plank (LVP)', value: 'lvp' },
        ],
        defaultValue: 'hardwood',
      },
      {
        name: 'qualityTier',
        label: 'Quality Tier',
        type: 'select',
        options: [
          { label: 'Budget', value: 'budget' },
          { label: 'Mid-Grade', value: 'midgrade' },
          { label: 'Premium', value: 'premium' },
        ],
        defaultValue: 'midgrade',
      },
      {
        name: 'installationType',
        label: 'Installation',
        type: 'select',
        options: [
          { label: 'Professional Installation', value: 'professional' },
          { label: 'DIY (Materials Only)', value: 'diy' },
        ],
        defaultValue: 'professional',
      },
    ],
    results: [],
    calculate: (values) => {
      const { squareFootage, flooringType, qualityTier, installationType } = values;
      
      const materialCosts = {
        hardwood: { budget: 5, midgrade: 8, premium: 14 },
        carpet: { budget: 2.5, midgrade: 4.5, premium: 7 },
        lvp: { budget: 3, midgrade: 5, premium: 8 }
      };
      
      const laborCosts = {
        hardwood: 5,
        carpet: 2,
        lvp: 3
      };
      
      const lifespan = {
        hardwood: { budget: 40, midgrade: 60, premium: 100 },
        carpet: { budget: 7, midgrade: 10, premium: 15 },
        lvp: { budget: 10, midgrade: 20, premium: 30 }
      };
      
      const annualMaintenance = {
        hardwood: 150,
        carpet: 350,
        lvp: 75
      };
      
      const materialCostPerSqFt = materialCosts[flooringType as keyof typeof materialCosts][qualityTier as keyof typeof materialCosts.hardwood];
      const laborCostPerSqFt = installationType === 'professional' ? laborCosts[flooringType as keyof typeof laborCosts] : 0;
      const totalCostPerSqFt = materialCostPerSqFt + laborCostPerSqFt;
      const initialCost = squareFootage * totalCostPerSqFt;
      
      const expectedLifespan = lifespan[flooringType as keyof typeof lifespan][qualityTier as keyof typeof lifespan.hardwood];
      const yearlyMaintenance = annualMaintenance[flooringType as keyof typeof annualMaintenance];
      const twentyYearMaintenance = yearlyMaintenance * 20;
      const replacements = Math.floor(20 / expectedLifespan);
      const replacementCost = replacements * initialCost;
      const twentyYearTotal = initialCost + twentyYearMaintenance + replacementCost;
      const twentyYearCostPerSqFt = twentyYearTotal / squareFootage;

      return [
        { label: 'Material Cost Per Sq Ft', value: `$${materialCostPerSqFt.toFixed(2)}` },
        { label: 'Labor Cost Per Sq Ft', value: `$${laborCostPerSqFt.toFixed(2)}` },
        { label: 'Total Cost Per Sq Ft', value: `$${totalCostPerSqFt.toFixed(2)}` },
        { label: 'Initial Installation Cost', value: initialCost.toFixed(2), isCurrency: true },
        { label: 'Expected Lifespan', value: `${expectedLifespan} years` },
        { label: 'Annual Maintenance Cost', value: yearlyMaintenance.toFixed(2), isCurrency: true },
        { label: '20-Year Maintenance Total', value: twentyYearMaintenance.toFixed(2), isCurrency: true },
        { label: 'Replacements in 20 Years', value: replacements.toString() },
        { label: 'Replacement Cost', value: replacementCost.toFixed(2), isCurrency: true },
        { label: '20-Year Total Cost', value: twentyYearTotal.toFixed(2), isCurrency: true },
        { label: '20-Year Cost Per Sq Ft', value: `$${twentyYearCostPerSqFt.toFixed(2)}` },
      ];
    },
  },
};
