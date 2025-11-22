import { CalculatorContent } from '@/types';

export const INFLATE_PROOF_HOME_ENERGY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Inflate-Proof Home (Energy) Calculator',
  description: 'Calculate long-term energy savings and protection against rising utility costs with energy-efficient home improvements',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'inflate-proof-home-energy-calculator',
  article: {
    title: "Understanding Inflate-Proof Homes and Energy Efficiency",
    content: `
    <h2>What is an Inflate-Proof Home?</h2>
    <p>An "inflate-proof" home is a property designed to minimize the impact of rising energy costs through energy-efficient systems, renewable energy, and smart design. As utility prices increase over time, these homes maintain lower operating costs, protecting homeowners from inflation.</p>
    
    <h3>Key Components of Energy Inflation Protection</h3>
    <ul>
      <li><strong>High-Performance Insulation:</strong> Reduces heating and cooling needs by 30-50%</li>
      <li><strong>Energy-Efficient Windows:</strong> Double or triple-pane windows prevent heat loss</li>
      <li><strong>Solar Panels:</strong> Generate electricity and lock in energy costs for 25+ years</li>
      <li><strong>Heat Pumps:</strong> Provide efficient heating and cooling with lower operating costs</li>
      <li><strong>Smart Home Systems:</strong> Optimize energy usage automatically</li>
      <li><strong>LED Lighting:</strong> Uses 75% less energy than traditional bulbs</li>
    </ul>
    
    <h3>Long-Term Financial Benefits</h3>
    <p>Energy prices typically rise 3-5% annually. An energy-efficient home can save $2,000-$5,000 per year on utility bills. Over 20 years with 4% annual inflation, these savings compound significantly:</p>
    <ul>
      <li>Year 1 savings: $3,000</li>
      <li>Year 10 savings: $4,400</li>
      <li>Year 20 savings: $6,500</li>
      <li>Total 20-year savings: $90,000+</li>
    </ul>
    
    <h3>Investment vs. Return</h3>
    <p>While energy-efficient upgrades require upfront investment, they typically pay for themselves within 5-10 years through reduced utility bills. Additionally, they increase home value by 3-5% and make properties more attractive to buyers.</p>
    
    <h3>Beyond Cost Savings</h3>
    <ul>
      <li><strong>Comfort:</strong> Better temperature control and air quality</li>
      <li><strong>Resale Value:</strong> Energy-efficient homes sell faster and for more</li>
      <li><strong>Environmental Impact:</strong> Reduced carbon footprint</li>
      <li><strong>Energy Independence:</strong> Less reliance on volatile energy markets</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentEnergyBill",
        label: "Current Monthly Energy Bill ($)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "expectedReduction",
        label: "Expected Energy Reduction (%)",
        type: "number",
        placeholder: "40",
        defaultValue: "40",
      },
      {
        name: "upgradeCost",
        label: "Total Upgrade Cost ($)",
        type: "number",
        placeholder: "25000",
        defaultValue: "25000",
      },
      {
        name: "energyInflation",
        label: "Annual Energy Price Inflation (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "timeHorizon",
        label: "Time Horizon (years)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
    ],
    results: [
      { label: "Monthly Savings (Year 1)", isCurrency: true },
      { label: "Annual Savings (Year 1)", isCurrency: true },
      { label: "Payback Period (years)", isCurrency: false },
      { label: "20-Year Total Savings", isCurrency: true },
      { label: "ROI over Time Horizon", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentBill = Number(data.currentEnergyBill) || 0;
      const reduction = Number(data.expectedReduction) || 0;
      const upgradeCost = Number(data.upgradeCost) || 0;
      const inflation = Number(data.energyInflation) / 100 || 0;
      const years = Number(data.timeHorizon) || 0;
      
      const monthlySavings = currentBill * (reduction / 100);
      const annualSavingsYear1 = monthlySavings * 12;
      
      let totalSavings = 0;
      for (let year = 1; year <= years; year++) {
        const inflationMultiplier = Math.pow(1 + inflation, year - 1);
        totalSavings += annualSavingsYear1 * inflationMultiplier;
      }
      
      const paybackPeriod = annualSavingsYear1 > 0 ? upgradeCost / annualSavingsYear1 : 0;
      const roi = upgradeCost > 0 ? ((totalSavings - upgradeCost) / upgradeCost * 100) : 0;

      return [
        { label: "Monthly Savings (Year 1)", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Annual Savings (Year 1)", value: annualSavingsYear1.toFixed(2), isCurrency: true },
        { label: "Payback Period (years)", value: paybackPeriod.toFixed(1), isCurrency: false },
        { label: "20-Year Total Savings", value: totalSavings.toFixed(2), isCurrency: true },
        { label: "ROI over Time Horizon", value: `${roi.toFixed(1)}%`, isCurrency: false },
      ];
    },
  },
};
