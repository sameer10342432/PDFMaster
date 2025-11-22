import { CalculatorContent } from '@/types';

export const SUSTAINABLE_BUILDING_MATERIALS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sustainable Building Materials Calculator - Eco-Friendly Construction Cost Estimator',
  description: 'Calculate costs and environmental impact of sustainable building materials vs conventional options for green home construction and renovation',
  icon: 'Icon',
  slug: 'sustainable-building-materials-calculator',
  category: 'Green & Sustainable',
  article: {
    title: 'Complete Guide to Sustainable Building Materials - Costs, Benefits, and Environmental Impact',
    content: `
    <h2>Why Choose Sustainable Building Materials?</h2>
    <p>Sustainable building materials reduce environmental impact, improve indoor air quality, lower operating costs, and increase property value. While some green materials cost 5-15% more upfront, they typically offer superior durability, lower maintenance, and energy savings that provide positive ROI within 3-10 years.</p>

    <h3>Sustainable Framing Materials</h3>
    <ul>
      <li><strong>Engineered Lumber (LVL, I-Joists):</strong> Uses less old-growth timber, stronger than dimensional lumber, 5-10% cost premium.</li>
      <li><strong>Reclaimed Wood:</strong> Salvaged timber, unique character, comparable cost to new lumber, zero harvest impact.</li>
      <li><strong>Advanced Framing Techniques:</strong> Reduces lumber by 20% through optimized spacing, no cost premium.</li>
      <li><strong>Steel Framing:</strong> 100% recyclable, termite-proof, 10-15% more expensive, excellent for commercial.</li>
      <li><strong>Structural Insulated Panels (SIPs):</strong> Factory-built walls, superior insulation, 5-10% premium but faster construction.</li>
    </ul>

    <h3>Green Insulation Options</h3>
    <ul>
      <li><strong>Cellulose (Recycled Paper):</strong> 85% recycled content, excellent R-value, 10-20% cheaper than fiberglass.</li>
      <li><strong>Mineral Wool (Rockwool):</strong> Fire-resistant, sound dampening, recycled content, comparable price to fiberglass.</li>
      <li><strong>Cotton Insulation (Recycled Denim):</strong> Non-toxic, safe installation, 15-20% more than fiberglass.</li>
      <li><strong>Sheep's Wool Insulation:</strong> Natural, moisture-regulating, expensive ($2-3/sq ft) but non-toxic.</li>
      <li><strong>Cork Insulation:</strong> Renewable harvest, excellent R-value, premium pricing ($3-5/sq ft).</li>
    </ul>

    <h3>Sustainable Roofing Materials</h3>
    <ul>
      <li><strong>Metal Roofing:</strong> 50-75 year lifespan, 100% recyclable, $7-12/sq ft vs $3-5 for asphalt shingles.</li>
      <li><strong>Clay/Concrete Tiles:</strong> 50-100 year lifespan, excellent thermal mass, $10-18/sq ft installed.</li>
      <li><strong>Recycled Rubber Shingles:</strong> Made from tires, 50-year warranty, $4-6/sq ft.</li>
      <li><strong>Solar Shingles:</strong> Integrated solar + roofing, $21-25/sq ft but generates electricity.</li>
      <li><strong>Cool Roof Coatings:</strong> Reflect heat, reduce cooling 10-15%, $1-3/sq ft applied to existing roof.</li>
    </ul>

    <h3>Eco-Friendly Flooring</h3>
    <ul>
      <li><strong>Bamboo Flooring:</strong> Rapidly renewable (5-year harvest), $3-8/sq ft installed, comparable to hardwood.</li>
      <li><strong>Cork Flooring:</strong> Renewable bark harvest, soft underfoot, $5-12/sq ft, excellent for health.</li>
      <li><strong>Reclaimed Wood Flooring:</strong> Salvaged timber, unique character, $6-12/sq ft, zero new harvest.</li>
      <li><strong>Polished Concrete:</strong> Existing slab, no new materials, $3-12/sq ft to finish, ultra-durable.</li>
      <li><strong>Marmoleum (Natural Linoleum):</strong> Biodegradable, anti-microbial, $4-8/sq ft, 40-year lifespan.</li>
    </ul>

    <h3>Low-VOC Paints and Finishes</h3>
    <ul>
      <li><strong>Zero-VOC Paint:</strong> No off-gassing, healthier indoor air, $30-70/gallon vs $20-40 conventional.</li>
      <li><strong>Natural Paints (Clay, Milk, Lime):</strong> Plant-based, breathable, $40-100/gallon, specialized application.</li>
      <li><strong>Low-VOC Stains:</strong> Water-based wood finishes, $25-50/gallon.</li>
      <li><strong>Natural Oil Finishes:</strong> Linseed, tung oil for floors/wood, $30-80/gallon, maintenance-friendly.</li>
    </ul>

    <h3>Sustainable Siding and Cladding</h3>
    <ul>
      <li><strong>Fiber Cement Siding:</strong> 50-year lifespan, fire-resistant, $6-12/sq ft installed vs $3-8 for vinyl.</li>
      <li><strong>Reclaimed Wood Siding:</strong> Weathered barn wood, unique look, $8-15/sq ft.</li>
      <li><strong>Metal Siding:</strong> Recyclable, 40-year lifespan, $7-13/sq ft.</li>
      <li><strong>Stucco (Traditional Lime):</strong> Breathable, long-lasting, $6-10/sq ft.</li>
      <li><strong>Living Walls (Green Walls):</strong> Vegetation facade, excellent insulation, $100-200/sq ft premium application.</li>
    </ul>

    <h3>Environmental Impact Metrics</h3>
    <ul>
      <li><strong>Embodied Carbon:</strong> CO2 emissions from manufacturing and transport - concrete/steel high, wood low.</li>
      <li><strong>Recyclability:</strong> Metal (100%), wood (reusable), concrete (crushed aggregate), plastic (limited).</li>
      <li><strong>Durability:</strong> Longer lifespan reduces replacement impact - metal/concrete win.</li>
      <li><strong>Indoor Air Quality:</strong> Low-VOC materials prevent off-gassing toxins.</li>
      <li><strong>Renewable Content:</strong> Bamboo, cork, FSC-certified wood are rapidly renewable.</li>
    </ul>

    <h3>Cost Premium and Payback</h3>
    <ul>
      <li><strong>Upfront Premium:</strong> Sustainable materials typically 5-15% more than conventional.</li>
      <li><strong>Durability Savings:</strong> Longer lifespan reduces replacement costs by 20-50%.</li>
      <li><strong>Energy Savings:</strong> Better insulation/materials reduce operating costs $300-$1,500/year.</li>
      <li><strong>Resale Value:</strong> Green-certified homes sell for 3-5% premium.</li>
      <li><strong>Payback Period:</strong> Typically 5-10 years through savings and increased value.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your project size, select sustainable vs conventional materials, and input cost estimates. The calculator compares upfront costs, environmental impact, lifespan costs, and long-term ROI to help you make informed material choices for your green building project.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'projectSize',
        label: 'Project Size (Square Feet)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'sustainableCost',
        label: 'Sustainable Materials Cost ($/sq ft)',
        type: 'number',
        defaultValue: 180,
      },
      {
        name: 'conventionalCost',
        label: 'Conventional Materials Cost ($/sq ft)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'sustainableLifespan',
        label: 'Sustainable Materials Lifespan (Years)',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'conventionalLifespan',
        label: 'Conventional Materials Lifespan (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'annualEnergySavings',
        label: 'Annual Energy Savings from Sustainable Materials ($)',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'resaleValueIncrease',
        label: 'Resale Value Increase (%)',
        type: 'number',
        defaultValue: 4,
      },
    ],
    results: [],
    calculate: (values) => {
      const { projectSize, sustainableCost, conventionalCost, sustainableLifespan, conventionalLifespan, annualEnergySavings, resaleValueIncrease } = values;
      
      const totalSustainableCost = projectSize * sustainableCost;
      const totalConventionalCost = projectSize * conventionalCost;
      const upfrontPremium = totalSustainableCost - totalConventionalCost;
      const premiumPercent = (upfrontPremium / totalConventionalCost) * 100;
      
      const lifespanRatio = sustainableLifespan / conventionalLifespan;
      const replacementSavings = totalConventionalCost * (1 - 1/lifespanRatio);
      
      const lifetimeEnergySavings = annualEnergySavings * sustainableLifespan;
      
      const avgHomeValue = totalConventionalCost * 1.5;
      const resaleValueBonus = avgHomeValue * (resaleValueIncrease / 100);
      
      const totalSavings = replacementSavings + lifetimeEnergySavings + resaleValueBonus;
      const netBenefit = totalSavings - upfrontPremium;
      const roi = (netBenefit / upfrontPremium) * 100;
      const paybackYears = upfrontPremium / annualEnergySavings;
      
      const carbonReduction = (projectSize * 0.8 * sustainableLifespan) / 2000;

      return [
        { label: 'Sustainable Materials Total Cost', value: totalSustainableCost.toFixed(2), isCurrency: true },
        { label: 'Conventional Materials Total Cost', value: totalConventionalCost.toFixed(2), isCurrency: true },
        { label: 'Upfront Premium for Sustainable', value: upfrontPremium.toFixed(2), isCurrency: true },
        { label: 'Premium Percentage', value: `${premiumPercent.toFixed(1)}%` },
        { label: 'Replacement Cost Savings', value: replacementSavings.toFixed(2), isCurrency: true },
        { label: `Lifetime Energy Savings (${sustainableLifespan} yrs)`, value: lifetimeEnergySavings.toFixed(2), isCurrency: true },
        { label: 'Resale Value Increase', value: resaleValueBonus.toFixed(2), isCurrency: true },
        { label: 'Total Lifetime Savings', value: totalSavings.toFixed(2), isCurrency: true },
        { label: 'Net Benefit', value: netBenefit.toFixed(2), isCurrency: true },
        { label: 'Lifetime ROI', value: `${roi.toFixed(1)}%` },
        { label: 'Simple Payback Period', value: `${paybackYears.toFixed(1)} years` },
        { label: 'Carbon Footprint Reduction', value: `${carbonReduction.toFixed(1)} tons CO2` },
      ];
    },
  },
};
