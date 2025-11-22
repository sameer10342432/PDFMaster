import { CalculatorContent } from '@/types';

export const PASSIVE_HOUSE_COST_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Passive House Cost vs Benefit Calculator - Passivhaus ROI Analysis',
  description: 'Calculate costs and benefits of building to Passive House standard including construction premium, energy savings, and comfort benefits',
  icon: 'Icon',
  slug: 'passive-house-cost-benefit-calculator',
  category: 'Green & Sustainable',
  article: {
    title: 'Complete Guide to Passive House Construction - Costs, Benefits, and ROI',
    content: `
    <h2>What is Passive House (Passivhaus)?</h2>
    <p>Passive House is the world's most rigorous voluntary energy efficiency standard, reducing heating and cooling energy by 75-90% compared to typical new construction. While Passive House costs 5-15% more to build ($25,000-$75,000 premium for average home), ultra-low utility bills ($200-$600/year vs $2,000-$4,000), superior comfort, and excellent resale value typically deliver positive ROI within 7-12 years.</p>

    <h3>Passive House Principles</h3>
    <ul>
      <li><strong>Super Insulation:</strong> R-40 to R-60 walls, R-60 to R-100 roof, R-30 to R-40 foundation.</li>
      <li><strong>Airtight Construction:</strong> Less than 0.6 ACH50 air changes per hour at 50 pascals pressure.</li>
      <li><strong>High-Performance Windows:</strong> Triple-pane, U-value 0.14-0.20, strategically oriented.</li>
      <li><strong>Thermal Bridge-Free Design:</strong> Continuous insulation, no cold spots or heat loss paths.</li>
      <li><strong>Heat Recovery Ventilation:</strong> ERV/HRV recovers 75-95% of heat from exhaust air.</li>
    </ul>

    <h3>Passive House Certification Requirements</h3>
    <ul>
      <li><strong>Heating Demand:</strong> ≤ 4.75 kBtu/sq ft/year (15 kWh/m²/year) - incredibly low.</li>
      <li><strong>Cooling Demand:</strong> ≤ 4.75 kBtu/sq ft/year (same as heating).</li>
      <li><strong>Primary Energy:</strong> ≤ 38 kBtu/sq ft/year (120 kWh/m²/year) total energy.</li>
      <li><strong>Airtightness:</strong> ≤ 0.6 ACH50 verified by blower door test.</li>
      <li><strong>Thermal Comfort:</strong> Less than 10% hours above 77°F (25°C).</li>
      <li><strong>Certification:</strong> Must be modeled in PHPP software and verified by certifier.</li>
    </ul>

    <h3>Passive House Construction Premium</h3>
    <ul>
      <li><strong>Extra Insulation:</strong> $10,000-$25,000 for R-60 walls/roof vs standard R-20.</li>
      <li><strong>High-Performance Windows:</strong> $15,000-$40,000 premium for triple-pane vs double-pane.</li>
      <li><strong>Air Sealing:</strong> $3,000-$8,000 for tapes, membranes, gaskets, quality control.</li>
      <li><strong>ERV/HRV System:</strong> $3,000-$8,000 for ventilation with heat recovery.</li>
      <li><strong>Thermal Bridge Details:</strong> $5,000-$15,000 for continuous insulation, specialized connections.</li>
      <li><strong>Design & Modeling:</strong> $5,000-$15,000 for architect/consultant + PHPP modeling.</li>
      <li><strong>Certification Fees:</strong> $2,000-$6,000 for third-party certification.</li>
      <li><strong>Total Premium:</strong> 5-15% more than code-minimum home ($25,000-$75,000 for 2,000 sq ft).</li>
    </ul>

    <h3>Passive House Energy Performance</h3>
    <ul>
      <li><strong>Standard Home:</strong> 30,000-60,000 kWh/year total energy.</li>
      <li><strong>Code-Minimum Home:</strong> 20,000-40,000 kWh/year.</li>
      <li><strong>ENERGY STAR Home:</strong> 15,000-30,000 kWh/year (10-20% better than code).</li>
      <li><strong>Passive House:</strong> 3,000-8,000 kWh/year (75-90% less than typical).</li>
      <li><strong>Heating Energy:</strong> Typical home 50-150 therms/year; Passive House 5-20 therms.</li>
    </ul>

    <h3>Annual Utility Cost Savings</h3>
    <ul>
      <li><strong>Typical Home Utilities:</strong> $2,000-$4,000/year (heating, cooling, electric).</li>
      <li><strong>Passive House Utilities:</strong> $200-$800/year (minimal heating, no AC or mini-split only).</li>
      <li><strong>Annual Savings:</strong> $1,500-$3,500/year depending on climate and energy costs.</li>
      <li><strong>Cold Climate Savings:</strong> Highest in heating-dominated areas (Northeast, Midwest).</li>
      <li><strong>Hot Climate Savings:</strong> Significant in cooling-dominated areas (South, Southwest).</li>
    </ul>

    <h3>Comfort and Health Benefits</h3>
    <ul>
      <li><strong>Even Temperature:</strong> Less than 3°F variation between rooms, no cold spots.</li>
      <li><strong>Draft-Free:</strong> Airtight construction eliminates cold air infiltration.</li>
      <li><strong>Superior Air Quality:</strong> ERV provides continuous fresh filtered air.</li>
      <li><strong>Quiet:</strong> Thick walls and windows provide excellent sound insulation.</li>
      <li><strong>No Mold/Moisture:</strong> Proper ventilation and insulation prevent condensation.</li>
      <li><strong>Improved Sleep:</strong> Consistent temperature and fresh air enhance sleep quality.</li>
    </ul>

    <h3>Passive House HVAC Systems</h3>
    <ul>
      <li><strong>No Traditional Furnace/AC:</strong> Loads so low that systems not needed in many climates.</li>
      <li><strong>Mini-Split Heat Pump:</strong> $3,000-$6,000 for small backup system.</li>
      <li><strong>Air-Source Heat Pump:</strong> $8,000-$15,000 for comprehensive coverage.</li>
      <li><strong>Electric Resistance Backup:</strong> $500-$2,000 for duct heater in ERV.</li>
      <li><strong>Radiant Floor Heating:</strong> $8,000-$20,000 for ultimate comfort (rarely needed).</li>
      <li><strong>HVAC Savings:</strong> Passive House can save $5,000-$15,000 on equipment.</li>
    </ul>

    <h3>Passive House Resale Value</h3>
    <ul>
      <li><strong>Premium Market:</strong> Passive Houses command 5-10% price premium.</li>
      <li><strong>Faster Sale:</strong> Unique properties attract serious buyers, less time on market.</li>
      <li><strong>Future-Proof:</strong> As energy codes tighten, Passive Houses already exceed future requirements.</li>
      <li><strong>Low Operating Costs:</strong> Attractive to buyers concerned about utility bills.</li>
      <li><strong>Marketing Advantage:</strong> Certification provides third-party credibility.</li>
    </ul>

    <h3>Climate Considerations</h3>
    <ul>
      <li><strong>Cold Climates:</strong> Highest ROI - heating savings are substantial (payback 5-10 years).</li>
      <li><strong>Mixed Climates:</strong> Good ROI - both heating and cooling savings (payback 8-12 years).</li>
      <li><strong>Hot-Humid:</strong> Challenging but doable - focus on cooling + dehumidification.</li>
      <li><strong>Hot-Dry:</strong> Excellent performance - thermal mass + small cooling system.</li>
    </ul>

    <h3>Passive House vs Alternatives</h3>
    <ul>
      <li><strong>vs Code-Minimum:</strong> 5-15% more cost, 75-90% less energy.</li>
      <li><strong>vs ENERGY STAR:</strong> 3-10% more cost, 50-70% less energy.</li>
      <li><strong>vs LEED Platinum:</strong> Similar cost, more focus on energy vs. other green features.</li>
      <li><strong>vs Net Zero:</strong> Net Zero adds solar; Passive House minimizes need first.</li>
      <li><strong>vs Zero Energy Ready:</strong> Passive House exceeds ZERH efficiency requirements.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your home size, standard construction cost, Passive House premium estimate, current climate zone energy costs, and anticipated resale premium. The calculator computes total investment, annual savings, payback period, lifetime ROI, and cost-benefit analysis to help you decide if Passive House is right for your project.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homeSize',
        label: 'Home Size (Square Feet)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'standardCostPerSqFt',
        label: 'Standard Construction Cost ($/sq ft)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'passiveHousePremiumPercent',
        label: 'Passive House Premium (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'currentAnnualUtilities',
        label: 'Current Annual Utility Costs ($)',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'passiveHouseReduction',
        label: 'Passive House Energy Reduction (%)',
        type: 'number',
        defaultValue: 85,
      },
      {
        name: 'resaleValueIncrease',
        label: 'Resale Value Increase (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'energyInflation',
        label: 'Annual Energy Cost Inflation (%)',
        type: 'number',
        defaultValue: 3.5,
      },
    ],
    results: [],
    calculate: (values) => {
      const { homeSize, standardCostPerSqFt, passiveHousePremiumPercent, currentAnnualUtilities, passiveHouseReduction, resaleValueIncrease, energyInflation } = values;
      
      const standardCost = homeSize * standardCostPerSqFt;
      const passiveHousePremium = standardCost * (passiveHousePremiumPercent / 100);
      const totalPassiveHouseCost = standardCost + passiveHousePremium;
      
      const passiveHouseUtilities = currentAnnualUtilities * (1 - passiveHouseReduction / 100);
      const annualSavings = currentAnnualUtilities - passiveHouseUtilities;
      
      let totalSavings30Years = 0;
      for (let year = 1; year <= 30; year++) {
        const yearSavings = annualSavings * Math.pow(1 + energyInflation / 100, year - 1);
        totalSavings30Years += yearSavings;
      }
      
      const resaleBonus = standardCost * (resaleValueIncrease / 100);
      
      const totalBenefit = totalSavings30Years + resaleBonus;
      const netBenefit = totalBenefit - passiveHousePremium;
      const roi = (netBenefit / passiveHousePremium) * 100;
      const simplePayback = passiveHousePremium / annualSavings;
      
      const hvacSavings = 10000;
      const adjustedPremium = passiveHousePremium - hvacSavings;

      return [
        { label: 'Standard Construction Cost', value: standardCost.toFixed(2), isCurrency: true },
        { label: 'Passive House Premium', value: passiveHousePremium.toFixed(2), isCurrency: true },
        { label: 'HVAC Equipment Savings', value: hvacSavings.toFixed(2), isCurrency: true },
        { label: 'Net Premium (After HVAC Savings)', value: adjustedPremium.toFixed(2), isCurrency: true },
        { label: 'Total Passive House Cost', value: totalPassiveHouseCost.toFixed(2), isCurrency: true },
        { label: 'Standard Home Annual Utilities', value: currentAnnualUtilities.toFixed(2), isCurrency: true },
        { label: 'Passive House Annual Utilities', value: passiveHouseUtilities.toFixed(2), isCurrency: true },
        { label: 'Annual Utility Savings', value: annualSavings.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: (annualSavings / 12).toFixed(2), isCurrency: true },
        { label: '30-Year Energy Savings', value: totalSavings30Years.toFixed(2), isCurrency: true },
        { label: 'Resale Value Increase', value: resaleBonus.toFixed(2), isCurrency: true },
        { label: 'Total 30-Year Benefit', value: totalBenefit.toFixed(2), isCurrency: true },
        { label: 'Net Benefit (30 Years)', value: netBenefit.toFixed(2), isCurrency: true },
        { label: 'Simple Payback Period', value: `${simplePayback.toFixed(1)} years` },
        { label: '30-Year ROI', value: `${roi.toFixed(1)}%` },
      ];
    },
  },
};
