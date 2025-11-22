import { CalculatorContent } from '@/types';

export const HOME_ENERGY_TAX_CREDIT_FINDER_CONTENT: CalculatorContent = {
  title: 'Home Energy Tax Credit Finder - Federal & State Energy Efficiency Rebates',
  description: 'Find federal and state tax credits and rebates for home energy efficiency upgrades including solar, insulation, HVAC, and windows',
  icon: 'Icon',
  slug: 'home-energy-tax-credit-finder',
  category: 'Green & Sustainable',
  article: {
    title: 'Complete Guide to Home Energy Tax Credits and Rebates 2024-2032',
    content: `
    <h2>Federal Energy Tax Credits (Inflation Reduction Act 2022)</h2>
    <p>The Inflation Reduction Act extended and expanded federal energy tax credits through 2032, providing homeowners with significant incentives to make energy-efficient upgrades. These credits can cover 30% of costs up to specific limits, making green home improvements more affordable than ever.</p>

    <h3>Energy Efficient Home Improvement Credit (25C)</h3>
    <ul>
      <li><strong>Insulation & Air Sealing:</strong> 30% credit up to $1,200/year for materials and labor.</li>
      <li><strong>Windows & Doors:</strong> 30% credit up to $600/year for windows, $500/year for exterior doors ($250/door limit).</li>
      <li><strong>Heat Pumps (HVAC):</strong> 30% credit up to $2,000/year for qualifying heat pumps.</li>
      <li><strong>Heat Pump Water Heaters:</strong> 30% credit up to $2,000/year for efficient water heating.</li>
      <li><strong>Biomass Stoves:</strong> 30% credit up to $2,000/year for qualified wood/pellet stoves.</li>
      <li><strong>Home Energy Audits:</strong> 30% credit up to $150 for professional energy assessments.</li>
      <li><strong>Electrical Panel Upgrades:</strong> 30% credit up to $600 for service upgrades to support EVs/efficiency.</li>
    </ul>

    <h3>Residential Clean Energy Credit (25D)</h3>
    <ul>
      <li><strong>Solar Panels:</strong> 30% credit with no annual or lifetime limit on qualified solar PV systems.</li>
      <li><strong>Solar Water Heaters:</strong> 30% credit for solar thermal systems.</li>
      <li><strong>Geothermal Heat Pumps:</strong> 30% credit for ground-source heat pump systems.</li>
      <li><strong>Small Wind Turbines:</strong> 30% credit for residential wind energy systems.</li>
      <li><strong>Fuel Cells:</strong> 30% credit up to $500 per 0.5 kW of capacity.</li>
      <li><strong>Battery Storage:</strong> 30% credit for standalone battery systems (3 kWh minimum) starting 2023.</li>
    </ul>

    <h3>Credit Timeline and Rates</h3>
    <ul>
      <li><strong>2022-2032:</strong> 30% federal tax credit for most qualifying upgrades.</li>
      <li><strong>2033:</strong> Credit steps down to 26% for clean energy systems.</li>
      <li><strong>2034:</strong> Credit steps down to 22% for clean energy systems.</li>
      <li><strong>2035+:</strong> Credit expires unless extended by Congress.</li>
    </ul>

    <h3>State Energy Rebates and Credits</h3>
    <ul>
      <li><strong>California:</strong> SGIP solar + storage rebates, TECH Clean California heat pump rebates.</li>
      <li><strong>New York:</strong> NY-Sun solar incentives, Clean Heat rebates up to $12,000.</li>
      <li><strong>Massachusetts:</strong> SMART solar program, Mass Save rebates for efficiency.</li>
      <li><strong>Colorado:</strong> Sales tax exemption on renewable energy equipment.</li>
      <li><strong>Arizona:</strong> Solar equipment sales tax exemption.</li>
      <li><strong>Check DSIRE Database:</strong> Comprehensive state-by-state incentive listings at dsireusa.org.</li>
    </ul>

    <h3>Utility Company Rebates</h3>
    <ul>
      <li><strong>HVAC Rebates:</strong> $300-$2,000 for high-efficiency heating and cooling systems.</li>
      <li><strong>Insulation Rebates:</strong> $200-$1,500 for attic and wall insulation.</li>
      <li><strong>Window Rebates:</strong> $50-$300 per window for energy-efficient replacements.</li>
      <li><strong>Smart Thermostat Rebates:</strong> $50-$200 for programmable thermostats.</li>
      <li><strong>Water Heater Rebates:</strong> $300-$1,000 for tankless or heat pump water heaters.</li>
      <li><strong>LED Lighting:</strong> Free or discounted LED bulbs through utility programs.</li>
    </ul>

    <h3>Low and Moderate Income Programs</h3>
    <ul>
      <li><strong>Home Electrification Rebates (HOMES):</strong> Up to $8,000 for whole-home efficiency upgrades.</li>
      <li><strong>High-Efficiency Electric Appliances (HEEHRA):</strong> Up to $14,000 in rebates for heat pumps, water heaters, etc.</li>
      <li><strong>Weatherization Assistance Program (WAP):</strong> Free weatherization for qualifying low-income households.</li>
      <li><strong>LIHEAP:</strong> Low Income Home Energy Assistance Program for utility bill help.</li>
    </ul>

    <h3>Qualifying for Energy Credits</h3>
    <ul>
      <li><strong>Product Requirements:</strong> Must meet ENERGY STAR or equivalent efficiency standards.</li>
      <li><strong>Installation:</strong> Some credits require professional installation; others allow DIY.</li>
      <li><strong>Documentation:</strong> Keep receipts, manufacturer certifications, and contractor invoices.</li>
      <li><strong>Tax Filing:</strong> Claim credits on IRS Form 5695 when filing federal taxes.</li>
      <li><strong>Principal Residence:</strong> Most credits apply to primary homes only, not rentals or second homes.</li>
    </ul>

    <h3>Combining Credits and Rebates</h3>
    <ul>
      <li><strong>Stack Federal + State + Utility:</strong> Credits and rebates can often be combined.</li>
      <li><strong>Example:</strong> $10,000 solar system = $3,000 federal + $1,000 state + $500 utility = $4,500 total savings.</li>
      <li><strong>Timing:</strong> Apply for rebates before claiming tax credits to maximize benefits.</li>
    </ul>

    <h3>How to Use This Finder</h3>
    <p>Enter your planned energy upgrade costs, location, and income level. The calculator estimates federal tax credits, state rebates, utility incentives, and total savings. It also calculates net upgrade cost after all incentives and ROI including energy savings.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'upgradeType',
        label: 'Type of Energy Upgrade',
        type: 'select',
        options: [
          { value: 'Solar Panels', label: 'Solar Panels' },
          { value: 'Heat Pump HVAC', label: 'Heat Pump HVAC' },
          { value: 'Heat Pump Water Heater', label: 'Heat Pump Water Heater' },
          { value: 'Insulation & Air Sealing', label: 'Insulation & Air Sealing' },
          { value: 'Energy Efficient Windows', label: 'Energy Efficient Windows' },
          { value: 'Geothermal Heat Pump', label: 'Geothermal Heat Pump' },
          { value: 'Battery Storage', label: 'Battery Storage' },
          { value: 'Comprehensive Package', label: 'Comprehensive Package' }
        ],
        defaultValue: 'Solar Panels',
      },
      {
        name: 'projectCost',
        label: 'Total Project Cost ($)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'householdIncome',
        label: 'Annual Household Income ($)',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'stateRebate',
        label: 'State Rebate Amount ($)',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'utilityRebate',
        label: 'Utility Rebate Amount ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'annualEnergySavings',
        label: 'Expected Annual Energy Savings ($)',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [],
    calculate: (values) => {
      const { upgradeType, projectCost, householdIncome, stateRebate, utilityRebate, annualEnergySavings } = values;
      
      let federalCreditPercent = 30;
      let federalCreditCap = 999999;
      
      if (upgradeType === 'Insulation & Air Sealing') {
        federalCreditCap = 1200;
      } else if (upgradeType === 'Energy Efficient Windows') {
        federalCreditCap = 600;
      } else if (upgradeType === 'Heat Pump HVAC' || upgradeType === 'Heat Pump Water Heater') {
        federalCreditCap = 2000;
      }
      
      const federalCredit = Math.min(projectCost * (federalCreditPercent / 100), federalCreditCap);
      
      let lowIncomeBonus = 0;
      if (householdIncome < 80000 && (upgradeType === 'Heat Pump HVAC' || upgradeType === 'Heat Pump Water Heater')) {
        lowIncomeBonus = Math.min(projectCost * 0.2, 2000);
      }
      
      const totalIncentives = federalCredit + stateRebate + utilityRebate + lowIncomeBonus;
      const netCost = projectCost - totalIncentives;
      const paybackYears = netCost / annualEnergySavings;
      const tenYearSavings = annualEnergySavings * 10;
      const roi = ((tenYearSavings - netCost) / netCost) * 100;

      return [
        { label: 'Project Cost', value: projectCost.toFixed(2), isCurrency: true },
        { label: 'Federal Tax Credit (30%)', value: federalCredit.toFixed(2), isCurrency: true },
        { label: 'State Rebate', value: stateRebate.toFixed(2), isCurrency: true },
        { label: 'Utility Rebate', value: utilityRebate.toFixed(2), isCurrency: true },
        { label: 'Low-Income Bonus', value: lowIncomeBonus.toFixed(2), isCurrency: true },
        { label: 'Total Incentives', value: totalIncentives.toFixed(2), isCurrency: true },
        { label: 'Net Cost After Incentives', value: netCost.toFixed(2), isCurrency: true },
        { label: 'Total Savings', value: `${((totalIncentives / projectCost) * 100).toFixed(1)}%` },
        { label: 'Annual Energy Savings', value: annualEnergySavings.toFixed(2), isCurrency: true },
        { label: 'Simple Payback Period', value: `${paybackYears.toFixed(1)} years` },
        { label: '10-Year ROI', value: `${roi.toFixed(1)}%` },
      ];
    },
  },
};
