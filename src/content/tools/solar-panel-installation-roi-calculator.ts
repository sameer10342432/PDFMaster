import { CalculatorContent } from '@/types';

export const SOLAR_PANEL_INSTALLATION_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Solar Panel Installation ROI Calculator - Calculate Solar Return on Investment',
  description: 'Calculate the return on investment for solar panel installation including energy savings, tax credits, home value increase, and payback period',
  icon: 'Icon',
  slug: 'solar-panel-installation-roi-calculator',
  category: 'Home Improvement',
  article: {
    title: 'Solar Panel ROI: Complete Guide to Returns, Savings, and Incentives',
    content: `
    <h2>Why Install Solar Panels?</h2>
    <p>Solar panel installation is one of the highest-returning home improvements, offering energy savings of 50-100% of electricity bills, substantial tax incentives, increased home value, and environmental benefits. With federal tax credits, state incentives, and net metering, most homeowners achieve payback in 6-12 years while enjoying 25-35 years of virtually free electricity thereafter.</p>

    <h3>Solar Panel System Types</h3>
    <ul>
      <li><strong>Grid-Tied System:</strong> Most common ($15,000-$30,000 after credits) - connects to utility grid, sells excess power via net metering, no batteries needed.</li>
      <li><strong>Hybrid System:</strong> Grid-tied with battery backup ($25,000-$45,000) - provides backup power during outages, stores excess for evening use.</li>
      <li><strong>Off-Grid System:</strong> Standalone with batteries ($30,000-$60,000) - complete independence from utility, requires larger battery bank, remote locations.</li>
      <li><strong>Ground-Mounted System:</strong> Panels on ground instead of roof ($18,000-$35,000) - easier maintenance, optimal angle adjustment, requires yard space.</li>
      <li><strong>Solar Shingles:</strong> Integrated roof tiles ($30,000-$50,000) - sleeker appearance, replaces roofing, higher cost per watt than panels.</li>
    </ul>

    <h3>Solar Installation Cost Breakdown</h3>
    <ul>
      <li><strong>Solar Panels:</strong> $5,000-$12,000 for panels (typical 6-8kW system, 18-24 panels) - monocrystalline most efficient, polycrystalline cheaper.</li>
      <li><strong>Inverter:</strong> $2,000-$4,000 for string inverter or microinverters - converts DC to AC power for home use.</li>
      <li><strong>Racking & Mounting:</strong> $1,500-$3,000 for roof mounts, flashing, hardware - critical for waterproofing and panel security.</li>
      <li><strong>Balance of System:</strong> $2,000-$4,000 for wiring, conduit, disconnects, junction boxes, monitoring system.</li>
      <li><strong>Labor & Installation:</strong> $3,000-$6,000 for professional installation including electrical work, inspection coordination.</li>
      <li><strong>Permits & Inspections:</strong> $500-$1,500 for building permits, electrical permits, utility interconnection paperwork.</li>
      <li><strong>Battery Storage (Optional):</strong> $10,000-$15,000 for Tesla Powerwall or equivalent 13.5kWh battery system.</li>
      <li><strong>Before Incentives:</strong> Total cost typically $20,000-$35,000 for average home system (6-8kW).</li>
    </ul>

    <h3>Federal & State Solar Incentives</h3>
    <ul>
      <li><strong>Federal Solar Tax Credit (ITC):</strong> 30% of total system cost as tax credit (through 2032) - saves $6,000-$10,000+ on typical system.</li>
      <li><strong>State Tax Credits:</strong> Some states offer additional credits - Arizona, Massachusetts, New York have generous programs (check DSIRE database).</li>
      <li><strong>State Rebates:</strong> Cash rebates of $500-$2,500 available in some states based on system size.</li>
      <li><strong>Solar Renewable Energy Certificates (SRECs):</strong> Earn tradable certificates in select states - can generate $100-$400/year passive income.</li>
      <li><strong>Net Metering:</strong> Sell excess power back to utility at retail rate - effectively runs meter backwards, critical for ROI.</li>
      <li><strong>Property Tax Exemption:</strong> Many states exempt solar value from property taxes - save thousands over system life.</li>
      <li><strong>Utility Rebates:</strong> Some utilities offer $500-$2,000 rebates for installing solar.</li>
      <li><strong>After All Incentives:</strong> Net cost often $12,000-$24,000 for system that was $20,000-$35,000 before incentives.</li>
    </ul>

    <h3>Solar Energy Savings</h3>
    <ul>
      <li><strong>Electricity Bill Reduction:</strong> Typical solar system offsets 70-100% of electricity usage - save $1,000-$2,500/year depending on rates.</li>
      <li><strong>Rising Energy Costs:</strong> Electricity rates increase 2-4% annually - solar locks in today's rates, savings compound over time.</li>
      <li><strong>Time-of-Use Rates:</strong> In states with TOU pricing, solar generates power during expensive peak hours, maximizing savings.</li>
      <li><strong>25-Year Savings:</strong> Over panel warranty life, save $25,000-$60,000+ on electricity vs buying from grid.</li>
      <li><strong>Net Metering Benefits:</strong> Excess production credits carry forward month-to-month, offset winter usage with summer surplus.</li>
      <li><strong>Battery Storage Value:</strong> Store solar power for evening use or outages - avoid expensive peak electricity rates.</li>
    </ul>

    <h3>Home Value Impact of Solar Panels</h3>
    <ul>
      <li><strong>Increased Home Value:</strong> Studies show solar adds $4-$5 per watt to home value - typical 6kW system adds $24,000-$30,000 value.</li>
      <li><strong>Faster Sales:</strong> Homes with solar sell 20% faster than comparable non-solar homes in most markets.</li>
      <li><strong>Buyer Appeal:</strong> 68% of homebuyers say solar is important or very important (National Association of Realtors survey).</li>
      <li><strong>Appraisal Recognition:</strong> Appraisers increasingly recognize solar value using PV Value methodology.</li>
      <li><strong>Owned vs. Leased:</strong> Owned systems add full value - leased systems may complicate sale or transfer fees to buyer.</li>
      <li><strong>Geographic Variation:</strong> Solar adds more value in high-electricity-cost states (CA, HI, NY, MA, CT) vs low-cost regions.</li>
    </ul>

    <h3>Solar System Longevity & Maintenance</h3>
    <ul>
      <li><strong>Panel Warranty:</strong> 25-year production warranty guarantees 80-85% output after 25 years - panels often last 30-40 years.</li>
      <li><strong>Inverter Lifespan:</strong> String inverters last 10-15 years, microinverters 20-25 years - budget $2,000-$4,000 replacement cost.</li>
      <li><strong>Minimal Maintenance:</strong> Panels are self-cleaning in most climates - occasional hosing off in dusty areas ($100-$200/year professional cleaning).</li>
      <li><strong>No Moving Parts:</strong> Solid-state technology means very few failures, no routine service required unlike HVAC or cars.</li>
      <li><strong>Monitoring Systems:</strong> Real-time production monitoring alerts you to issues immediately for quick resolution.</li>
      <li><strong>Performance Degradation:</strong> Panels lose 0.5-0.8% efficiency per year - still producing 80%+ after 25 years.</li>
    </ul>

    <h3>Financing Solar Installation</h3>
    <ul>
      <li><strong>Cash Purchase:</strong> Best ROI - no interest charges, capture full incentives, highest lifetime savings ($40,000-$70,000).</li>
      <li><strong>Solar Loan:</strong> Finance purchase with 10-25 year loan - monthly loan payment often less than old electric bill, own system.</li>
      <li><strong>HELOC:</strong> Home equity line of credit at 8-11% - interest may be tax deductible, flexible repayment.</li>
      <li><strong>Solar Lease:</strong> $0 down, pay monthly lease fee - save 10-30% vs buying power, no maintenance responsibility, don't own system.</li>
      <li><strong>Power Purchase Agreement (PPA):</strong> $0 down, pay per kWh produced - predictable rates, company owns/maintains system.</li>
      <li><strong>PACE Financing:</strong> Property Assessed Clean Energy - repay via property tax bill, transfers to buyer if sold.</li>
    </ul>

    <h3>Maximizing Solar ROI</h3>
    <ul>
      <li><strong>Right System Size:</strong> Size to offset 80-100% of usage - oversizing wastes money in states without full net metering credit.</li>
      <li><strong>Multiple Quotes:</strong> Get 3-5 quotes from certified installers (NABCEP certification preferred) - prices vary 20-40%.</li>
      <li><strong>Equipment Quality:</strong> Choose Tier 1 manufacturers (SunPower, LG, Panasonic, Q Cells) with strong warranties and proven track record.</li>
      <li><strong>Incentive Timing:</strong> Federal ITC remains 30% through 2032, drops to 26% in 2033 - install before reduction.</li>
      <li><strong>Roof Condition:</strong> If roof needs replacement within 10 years, do it before solar installation to avoid removal/reinstall costs.</li>
      <li><strong>Shade Analysis:</strong> Have installer perform shade analysis - even partial shade significantly reduces production.</li>
      <li><strong>Panel Orientation:</strong> South-facing optimal in northern hemisphere - east/west works but produces 10-20% less.</li>
      <li><strong>Energy Efficiency First:</strong> Improve insulation, HVAC, windows before solar - reduce system size needed, lower cost.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your solar system cost before incentives, system size (kW), annual electricity bill, federal tax credit percentage, state/local incentives, home value increase, and expected electricity rate inflation. The calculator computes your net cost after incentives, lifetime energy savings, total return, payback period, and overall ROI to help determine if solar makes financial sense for your situation.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'systemCostBefore',
        label: 'Total System Cost Before Incentives ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'systemSizeKW',
        label: 'System Size (kW)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'annualElectricBill',
        label: 'Current Annual Electricity Bill ($)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'offsetPercentage',
        label: 'Estimated Bill Offset (%)',
        type: 'number',
        defaultValue: 90,
      },
      {
        name: 'federalTaxCredit',
        label: 'Federal Tax Credit (%)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'stateLocalIncentives',
        label: 'State/Local Incentives & Rebates ($)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'homeValueIncrease',
        label: 'Estimated Home Value Increase ($)',
        type: 'number',
        defaultValue: 28000,
      },
      {
        name: 'electricityInflation',
        label: 'Annual Electricity Rate Inflation (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'systemLifespan',
        label: 'Expected System Lifespan (Years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [],
    calculate: (values) => {
      const { systemCostBefore, systemSizeKW, annualElectricBill, offsetPercentage, federalTaxCredit, stateLocalIncentives, homeValueIncrease, electricityInflation, systemLifespan } = values;
      
      const federalCredit = systemCostBefore * (federalTaxCredit / 100);
      const netSystemCost = systemCostBefore - federalCredit - stateLocalIncentives;
      
      const yearOneSavings = annualElectricBill * (offsetPercentage / 100);
      
      let totalEnergySavings = 0;
      for (let year = 1; year <= systemLifespan; year++) {
        const inflationFactor = Math.pow(1 + electricityInflation / 100, year - 1);
        const degradationFactor = 1 - (year - 1) * 0.005;
        totalEnergySavings += yearOneSavings * inflationFactor * degradationFactor;
      }
      
      const totalReturn = totalEnergySavings + homeValueIncrease;
      const netProfit = totalReturn - netSystemCost;
      const roi = (netProfit / netSystemCost) * 100;
      const paybackPeriod = netSystemCost / yearOneSavings;
      const annualizedROI = roi / systemLifespan;

      return [
        { label: 'System Cost Before Incentives', value: systemCostBefore.toFixed(2), isCurrency: true },
        { label: 'Federal Tax Credit (30%)', value: federalCredit.toFixed(2), isCurrency: true },
        { label: 'State/Local Incentives', value: stateLocalIncentives.toFixed(2), isCurrency: true },
        { label: 'Net System Cost After Incentives', value: netSystemCost.toFixed(2), isCurrency: true },
        { label: 'Year 1 Energy Savings', value: yearOneSavings.toFixed(2), isCurrency: true },
        { label: `Total Energy Savings (${systemLifespan} Years)`, value: totalEnergySavings.toFixed(2), isCurrency: true },
        { label: 'Home Value Increase', value: homeValueIncrease.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'Total ROI', value: `${roi.toFixed(2)}%` },
        { label: 'Annualized ROI', value: `${annualizedROI.toFixed(2)}%` },
        { label: 'Simple Payback Period', value: `${paybackPeriod.toFixed(1)} years` },
      ];
    },
  },
};
