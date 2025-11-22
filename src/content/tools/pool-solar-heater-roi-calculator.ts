import { CalculatorContent } from '@/types';

export const POOL_SOLAR_HEATER_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Pool Solar Heater ROI Calculator',
  description: 'Calculate the return on investment for solar pool heating systems including installation costs, energy savings, and extended swimming season value',
  icon: 'Icon',
  category: 'Green & Sustainable',
  slug: 'pool-solar-heater-roi-calculator',
  article: {
    title: "Pool Solar Heater ROI Analysis",
    content: `
    <h2>Solar Pool Heating Benefits</h2>
    <p>Solar pool heaters can extend your swimming season by 2-4 months and reduce pool heating costs by 50-80%. They're one of the most cost-effective solar investments with typical payback periods of 3-7 years.</p>
    
    <h3>How Solar Pool Heating Works</h3>
    <p>Solar pool heating systems circulate pool water through solar collectors (panels) where it's heated by the sun before returning to the pool. The system includes:</p>
    <ul>
      <li><strong>Solar Collectors:</strong> Absorb heat from the sun (roof or ground-mounted)</li>
      <li><strong>Filter/Pump:</strong> Circulates water through collectors (often existing pool pump)</li>
      <li><strong>Flow Control Valve:</strong> Automatic or manual diversion to solar collectors</li>
      <li><strong>Controller:</strong> Monitors pool and collector temps for optimal efficiency</li>
    </ul>
    
    <h3>Types of Solar Pool Heaters</h3>
    <ul>
      <li><strong>Glazed Collectors:</strong> Metal panels with glass covers, best for year-round heating ($3,000-$8,000)</li>
      <li><strong>Unglazed Collectors:</strong> Durable rubber/plastic, ideal for warm climates ($2,000-$5,000)</li>
      <li><strong>Hybrid Systems:</strong> Combine solar with gas/electric backup ($4,000-$10,000+)</li>
    </ul>
    
    <h3>Installation Cost Factors</h3>
    <ul>
      <li><strong>Pool Size:</strong> Collectors should equal 50-100% of pool surface area</li>
      <li><strong>Climate:</strong> Colder climates need larger collector arrays</li>
      <li><strong>Roof Space:</strong> Adequate south-facing roof area reduces costs</li>
      <li><strong>System Type:</strong> Glazed vs. unglazed affects upfront investment</li>
      <li><strong>Labor:</strong> Professional installation runs $500-$2,000</li>
    </ul>
    
    <h3>Operating Savings</h3>
    <p>Solar pool heaters can save:</p>
    <ul>
      <li>Gas heaters: $300-$900/year in fuel costs</li>
      <li>Electric heaters: $600-$1,500/year in electricity</li>
      <li>Heat pumps: $200-$600/year in reduced runtime</li>
      <li>Minimal operating costs (pump uses same or less energy)</li>
    </ul>
    
    <h3>Additional Benefits</h3>
    <ul>
      <li><strong>Extended Season:</strong> Add 2-4 months of comfortable swimming (valued at $500-$2,000/year)</li>
      <li><strong>Environmental:</strong> Zero emissions, sustainable heating</li>
      <li><strong>Home Value:</strong> Attractive feature for homebuyers with pools</li>
      <li><strong>Longevity:</strong> 15-20 year lifespan with minimal maintenance</li>
      <li><strong>Rebates/Incentives:</strong> 26-30% federal tax credit + utility rebates</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "poolSize",
        label: "Pool Surface Area (sq ft)",
        type: "number",
        placeholder: "600",
        defaultValue: "600",
      },
      {
        name: "systemCost",
        label: "Solar System Cost ($)",
        type: "number",
        placeholder: "4500",
        defaultValue: "4500",
      },
      {
        name: "currentHeatingCost",
        label: "Current Annual Heating Cost ($)",
        type: "number",
        placeholder: "800",
        defaultValue: "800",
      },
      {
        name: "heatingReduction",
        label: "Expected Heating Cost Reduction (%)",
        type: "number",
        placeholder: "70",
        defaultValue: "70",
      },
      {
        name: "taxCredit",
        label: "Federal Tax Credit (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "utilityRebate",
        label: "Utility Rebate ($)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "extendedSeasonValue",
        label: "Value of Extended Season ($/year)",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "systemLifespan",
        label: "System Lifespan (years)",
        type: "number",
        placeholder: "18",
        defaultValue: "18",
      },
    ],
    results: [
      { label: "Total System Cost", isCurrency: true },
      { label: "Federal Tax Credit", isCurrency: true },
      { label: "Net Cost After Incentives", isCurrency: true },
      { label: "Annual Heating Savings", isCurrency: true },
      { label: "Total Annual Benefit", isCurrency: true },
      { label: "Simple Payback Period", isCurrency: false },
      { label: "Total Lifetime Savings", isCurrency: true },
      { label: "Return on Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const poolSize = Number(data.poolSize) || 0;
      const systemCost = Number(data.systemCost) || 0;
      const currentHeatingCost = Number(data.currentHeatingCost) || 0;
      const heatingReduction = Number(data.heatingReduction) || 0;
      const taxCredit = Number(data.taxCredit) || 0;
      const utilityRebate = Number(data.utilityRebate) || 0;
      const extendedSeasonValue = Number(data.extendedSeasonValue) || 0;
      const systemLifespan = Number(data.systemLifespan) || 0;
      
      const federalTaxCredit = systemCost * (taxCredit / 100);
      const netCost = systemCost - federalTaxCredit - utilityRebate;
      
      const annualHeatingSavings = currentHeatingCost * (heatingReduction / 100);
      const totalAnnualBenefit = annualHeatingSavings + extendedSeasonValue;
      
      const paybackPeriod = totalAnnualBenefit > 0 ? netCost / totalAnnualBenefit : 0;
      const lifetimeSavings = (totalAnnualBenefit * systemLifespan) - netCost;
      const roi = netCost > 0 ? ((lifetimeSavings) / netCost) * 100 : 0;

      return [
        { label: "Total System Cost", value: systemCost.toFixed(2), isCurrency: true },
        { label: "Federal Tax Credit", value: federalTaxCredit.toFixed(2), isCurrency: true },
        { label: "Net Cost After Incentives", value: netCost.toFixed(2), isCurrency: true },
        { label: "Annual Heating Savings", value: annualHeatingSavings.toFixed(2), isCurrency: true },
        { label: "Total Annual Benefit", value: totalAnnualBenefit.toFixed(2), isCurrency: true },
        { label: "Simple Payback Period", value: `${paybackPeriod.toFixed(1)} years`, isCurrency: false },
        { label: "Total Lifetime Savings", value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: "Return on Investment", value: `${roi.toFixed(1)}%`, isCurrency: false },
      ];
    },
  },
};
