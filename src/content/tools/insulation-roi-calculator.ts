import { CalculatorContent } from '@/types';

export const INSULATION_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Insulation ROI Calculator - Attic & Wall Insulation Return on Investment',
  description: 'Calculate return on investment for attic and wall insulation upgrades including energy savings, installation costs, and payback period',
  icon: 'Icon',
  slug: 'insulation-roi-calculator',
  category: 'Green & Sustainable',
  article: {
    title: 'How to Calculate ROI on Home Insulation Upgrades - Complete Guide',
    content: `
    <h2>Why Invest in Home Insulation?</h2>
    <p>Home insulation is one of the most cost-effective energy efficiency upgrades you can make. Proper insulation reduces heating and cooling costs, improves comfort, reduces carbon footprint, and increases home value - typically delivering 100-350% ROI while paying for itself in 2-7 years.</p>

    <h3>Types of Insulation Upgrades</h3>
    <ul>
      <li><strong>Attic Insulation:</strong> Most cost-effective upgrade ($1,500-$3,500) - can reduce energy bills 10-30%.</li>
      <li><strong>Wall Insulation (Blown-In):</strong> Retrofit existing walls ($2,000-$5,000) - saves 15-25% on heating/cooling.</li>
      <li><strong>Basement/Crawl Space Insulation:</strong> Prevents cold floors ($1,000-$3,000) - 10-20% energy savings.</li>
      <li><strong>Rim Joist Insulation:</strong> Air sealing critical areas ($500-$1,500) - high ROI for small investment.</li>
      <li><strong>Spray Foam Insulation:</strong> Premium air sealing ($3,000-$10,000) - maximum efficiency but higher cost.</li>
    </ul>

    <h3>Energy Savings from Insulation</h3>
    <ul>
      <li><strong>Attic Insulation (R-30 to R-60):</strong> $200-$600/year savings depending on climate.</li>
      <li><strong>Wall Insulation:</strong> $300-$800/year for uninsulated walls in cold climates.</li>
      <li><strong>Basement Insulation:</strong> $150-$400/year in heating savings.</li>
      <li><strong>Rim Joist Sealing:</strong> $100-$250/year from air leakage reduction.</li>
      <li><strong>Whole-Home Insulation Package:</strong> $600-$1,500/year total energy cost reduction.</li>
    </ul>

    <h3>Insulation Costs by Type</h3>
    <ul>
      <li><strong>Blown-In Fiberglass (Attic):</strong> $1.50-$2.50/sq ft - cost-effective, easy installation.</li>
      <li><strong>Blown-In Cellulose (Attic):</strong> $1.75-$3.00/sq ft - eco-friendly, excellent coverage.</li>
      <li><strong>Spray Foam (Attic):</strong> $3.00-$7.00/sq ft - air sealing, highest R-value per inch.</li>
      <li><strong>Blown-In Wall Insulation:</strong> $2.50-$4.50/sq ft - retrofit without removing drywall.</li>
      <li><strong>Batt Insulation (DIY):</strong> $0.50-$1.50/sq ft - cheapest but requires access.</li>
    </ul>

    <h3>Rebates and Tax Credits</h3>
    <ul>
      <li><strong>Federal Energy Tax Credit (2024-2032):</strong> 30% of insulation cost up to $1,200/year for upgrades.</li>
      <li><strong>Utility Rebates:</strong> Many utilities offer $200-$1,500 for insulation upgrades.</li>
      <li><strong>State/Local Rebates:</strong> Additional rebates vary by location - check DSIRE database.</li>
      <li><strong>Low-Income Weatherization:</strong> Free insulation for qualifying households through WAP program.</li>
    </ul>

    <h3>Home Value Increase</h3>
    <ul>
      <li><strong>Attic Insulation:</strong> 117% ROI at resale according to Remodeling Magazine.</li>
      <li><strong>Energy Efficiency Premium:</strong> Homes with energy upgrades sell for 3-5% more.</li>
      <li><strong>Faster Sale:</strong> Energy-efficient homes sell faster in competitive markets.</li>
      <li><strong>Appraisal Value:</strong> Documented energy upgrades can increase appraised value.</li>
    </ul>

    <h3>Climate and ROI</h3>
    <ul>
      <li><strong>Cold Climates (Heating Dominated):</strong> Highest ROI - insulation pays back in 2-4 years.</li>
      <li><strong>Hot Climates (Cooling Dominated):</strong> Good ROI - focus on attic and radiant barriers.</li>
      <li><strong>Mixed Climates:</strong> Balanced savings on heating and cooling.</li>
      <li><strong>Mild Climates:</strong> Lower absolute savings but still positive ROI.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your insulation upgrade costs, current energy bills, expected savings percentage, available rebates, and expected home value increase. The calculator computes your annual savings, payback period, ROI, and total lifetime savings to help you determine if insulation upgrades make financial sense for your property.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'installationCost',
        label: 'Total Insulation Installation Cost ($)',
        type: 'number',
        defaultValue: 3500,
      },
      {
        name: 'currentEnergyBill',
        label: 'Current Monthly Energy Bill ($)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'energySavingsPercent',
        label: 'Expected Energy Savings (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'rebatesCredits',
        label: 'Total Rebates & Tax Credits ($)',
        type: 'number',
        defaultValue: 1050,
      },
      {
        name: 'homeValueIncrease',
        label: 'Expected Home Value Increase ($)',
        type: 'number',
        defaultValue: 4000,
      },
      {
        name: 'energyCostInflation',
        label: 'Annual Energy Cost Inflation (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'timeHorizon',
        label: 'Analysis Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [],
    calculate: (values) => {
      const { installationCost, currentEnergyBill, energySavingsPercent, rebatesCredits, homeValueIncrease, energyCostInflation, timeHorizon } = values;
      
      const annualEnergyBill = currentEnergyBill * 12;
      const firstYearSavings = annualEnergyBill * (energySavingsPercent / 100);
      
      let totalSavings = 0;
      for (let year = 1; year <= timeHorizon; year++) {
        const yearSavings = firstYearSavings * Math.pow(1 + energyCostInflation / 100, year - 1);
        totalSavings += yearSavings;
      }
      
      const netCost = installationCost - rebatesCredits;
      const totalReturn = totalSavings + homeValueIncrease;
      const netProfit = totalReturn - netCost;
      const roi = (netProfit / netCost) * 100;
      const paybackPeriod = netCost / firstYearSavings;
      const simpleROI = ((firstYearSavings / netCost) * 100);

      return [
        { label: 'Net Installation Cost (After Rebates)', value: netCost.toFixed(2), isCurrency: true },
        { label: 'First Year Energy Savings', value: firstYearSavings.toFixed(2), isCurrency: true },
        { label: 'Monthly Energy Savings (Year 1)', value: (firstYearSavings / 12).toFixed(2), isCurrency: true },
        { label: `Total Energy Savings (${timeHorizon} Years)`, value: totalSavings.toFixed(2), isCurrency: true },
        { label: 'Home Value Increase', value: homeValueIncrease.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'Simple Payback Period', value: `${paybackPeriod.toFixed(1)} years` },
        { label: 'First Year ROI', value: `${simpleROI.toFixed(2)}%` },
        { label: `Total ${timeHorizon}-Year ROI`, value: `${roi.toFixed(2)}%` },
        { label: 'Lifetime CO2 Reduction', value: `${(totalSavings / annualEnergyBill * 7.5).toFixed(1)} tons` },
      ];
    },
  },
};
