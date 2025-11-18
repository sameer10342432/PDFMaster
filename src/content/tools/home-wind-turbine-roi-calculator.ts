import { CalculatorContent } from '@/types';

export const HOME_WIND_TURBINE_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Wind Turbine ROI Calculator - Residential Wind Power Investment',
  description: 'Calculate the cost and ROI of installing a residential wind turbine including equipment, installation, energy production, and available tax credits',
  icon: 'Icon',
  slug: 'home-wind-turbine-roi-calculator',
  category: 'Energy Efficiency',
  article: {
    title: 'Residential Wind Turbines: Complete Cost & ROI Guide',
    content: `
    <h2>Is a Home Wind Turbine Worth It?</h2>
    <p>Residential wind turbines can generate clean, renewable energy and reduce electricity bills, but they require specific conditions to be financially viable. Unlike solar panels that work almost anywhere, wind turbines need consistent wind speeds averaging 10+ mph (class 3 or higher wind resource), adequate property space (typically 1+ acre), and favorable local regulations. In optimal locations with high wind speeds and electricity costs, home wind turbines can achieve 8-15 year payback periods. The federal Investment Tax Credit (ITC) covers 30% of installation costs through 2032, significantly improving economics.</p>

    <h3>Types of Residential Wind Turbines</h3>
    <ul>
      <li><strong>Small Horizontal Axis (1-10 kW):</strong> Cost $15,000-$50,000 installed. Most common residential type. Mounted on 30-100 ft towers. Best efficiency and power output.</li>
      <li><strong>Micro Wind Turbines (400W-1kW):</strong> Cost $3,000-$10,000 installed. Suitable for off-grid cabins, RVs, boats. Lower tower heights (15-40 ft). Limited home power contribution.</li>
      <li><strong>Vertical Axis Turbines:</strong> Cost $8,000-$35,000. Can operate in turbulent wind, lower noise, smaller footprint. Lower efficiency than horizontal axis (20-30% less output).</li>
      <li><strong>Hybrid Solar-Wind Systems:</strong> Combine wind turbine with solar panels for year-round renewable energy. Wind generates more in winter, solar in summer. Total cost $25,000-$75,000.</li>
    </ul>

    <h3>Installation Cost Breakdown</h3>
    <ul>
      <li><strong>Turbine Equipment:</strong> $10,000-$40,000 for 5-10 kW residential turbine. Includes turbine, blades, controller, inverter. Popular brands: Bergey, Primus, Skystream.</li>
      <li><strong>Tower & Foundation:</strong> $5,000-$15,000 for 60-100 ft tower with concrete foundation. Tower height critical - power increases with height (exponential relationship).</li>
      <li><strong>Installation Labor:</strong> $3,000-$10,000 for professional installation including crane rental, electrical hookup, permits, testing. 2-5 day installation for most systems.</li>
      <li><strong>Electrical Work:</strong> $1,500-$4,000 for grid connection, transfer switch, electrical panel upgrade if needed, net metering setup.</li>
      <li><strong>Site Assessment:</strong> $500-$2,000 for professional wind resource evaluation including anemometer data collection (3-12 months), tower height optimization, ROI analysis.</li>
      <li><strong>Total Typical Cost:</strong> $20,000-$70,000 for complete 5-10 kW system. Cost per watt: $6-$10/watt installed (vs $3-$4/watt for solar).</li>
    </ul>

    <h3>Federal, State & Local Incentives</h3>
    <ul>
      <li><strong>Federal ITC (25D):</strong> 30% tax credit for small wind energy systems through 2032, steps down to 26% (2033), 22% (2034). Covers equipment + installation.</li>
      <li><strong>USDA REAP Grants:</strong> Rural Energy for America Program provides 25-50% grants for agricultural properties and small rural businesses. Combined with ITC for 55-80% total incentives.</li>
      <li><strong>State Property Tax Exemptions:</strong> Many states exempt wind system value from property taxes (CA, TX, NY, IL, OR, MN). Saves $200-$800/year.</li>
      <li><strong>Sales Tax Exemptions:</strong> 15+ states exempt small wind systems from sales tax (5-10% savings on equipment = $500-$3,000).</li>
      <li><strong>Net Metering:</strong> 38 states require utilities to credit excess wind generation at retail rates. Essential for financial viability - can eliminate electric bills entirely.</li>
      <li><strong>Production Incentives:</strong> Some utilities pay $0.01-$0.05/kWh bonus for renewable energy generation on top of net metering credits.</li>
    </ul>

    <h3>Energy Production & Savings</h3>
    <ul>
      <li><strong>Annual Output:</strong> 5 kW turbine produces 8,000-12,000 kWh/year in good wind sites (12+ mph average). 10 kW system: 16,000-24,000 kWh/year. Average US home uses 10,500 kWh/year.</li>
      <li><strong>Capacity Factor:</strong> Residential wind turbines typically achieve 20-35% capacity factor (vs 15-25% for residential solar). Means 5 kW turbine generates power equivalent to 1-1.75 kW continuous.</li>
      <li><strong>Monthly Savings:</strong> $80-$250/month electric bill reduction depending on turbine size, wind resource, electricity rates. High-wind sites with $0.25+/kWh rates see best returns.</li>
      <li><strong>Peak Production:</strong> Wind strongest in winter/spring, complementing solar (strongest summer). Provides more consistent year-round generation than solar alone.</li>
      <li><strong>Self-Consumption:</strong> Unlike solar that peaks midday, wind often strongest at night. Better alignment with evening home energy use patterns.</li>
    </ul>

    <h3>Site Requirements & Assessment</h3>
    <ul>
      <li><strong>Wind Resource:</strong> Need average wind speed 10+ mph (4.5 m/s) at turbine height. Class 3+ wind resource required for economic viability. Use NREL wind maps for preliminary assessment.</li>
      <li><strong>Property Size:</strong> Minimum 1 acre for small systems, 5+ acres ideal. Tower should be 300+ feet from nearest building/obstacle, twice the obstacle height.</li>
      <li><strong>Zoning & Permits:</strong> Check local ordinances - some jurisdictions ban or heavily restrict residential wind. Height restrictions (often 35-75 ft max) may prevent optimal turbine sizing.</li>
      <li><strong>Setback Requirements:</strong> Typical setback 1.1-1.5x tower height from property lines. 100 ft tower requires 110-150 ft setback, may not fit smaller lots.</li>
      <li><strong>Noise Concerns:</strong> Modern turbines generate 45-55 dB at 300 ft (similar to refrigerator). Neighbors within 500 ft may hear during high winds. Check noise ordinances.</li>
      <li><strong>Aviation Restrictions:</strong> FAA requires notification for structures 200+ ft tall. Proximity to airports may limit tower height or prohibit installation.</li>
    </ul>

    <h3>Maintenance & Operating Costs</h3>
    <ul>
      <li><strong>Annual Maintenance:</strong> $200-$500/year for inspections, lubrication, bolt tightening. Professional service recommended every 1-3 years ($300-$800).</li>
      <li><strong>Component Replacement:</strong> Bearings every 10-15 years ($800-$2,000), blades every 15-20 years ($2,000-$6,000), inverter every 10-15 years ($1,500-$3,500).</li>
      <li><strong>Tower Maintenance:</strong> Guy wire tensioning annually ($100-$300 DIY or $400-$800 professional). Tower painting/coating every 15-20 years ($1,000-$3,000).</li>
      <li><strong>Insurance:</strong> Add $200-$600/year to homeowners insurance for wind turbine coverage. Liability concerns due to moving parts, potential blade failure.</li>
      <li><strong>Lifetime Costs:</strong> Budget $400-$1,200/year for total maintenance and operating costs. 25-year system lifetime maintenance: $10,000-$30,000.</li>
    </ul>

    <h3>Wind vs Solar Comparison</h3>
    <ul>
      <li><strong>Installation Cost:</strong> Wind $6-$10/watt vs Solar $3-$4/watt. Wind 60-150% more expensive per watt capacity.</li>
      <li><strong>Energy Production:</strong> Wind produces 60-100% more kWh per rated watt due to higher capacity factor (20-35% vs 15-25% solar).</li>
      <li><strong>Maintenance:</strong> Wind requires significant ongoing maintenance vs solar (virtually maintenance-free). Wind maintenance $10,000-$30,000 over 25 years vs solar $1,000-$3,000.</li>
      <li><strong>Site Requirements:</strong> Solar works on most properties with roof/yard space. Wind requires high wind speeds, large property, favorable zoning - suitable for <10% of homes.</li>
      <li><strong>Seasonal Variation:</strong> Wind stronger in winter (heating season), solar stronger in summer (cooling season). Hybrid systems provide best year-round coverage.</li>
      <li><strong>Lifespan:</strong> Quality wind turbines last 20-25 years with maintenance. Solar panels last 25-30 years with minimal maintenance.</li>
    </ul>

    <h3>Best Candidates for Wind Turbines</h3>
    <ul>
      <li><strong>Rural Properties:</strong> Large lots (5+ acres) in unobstructed rural areas with class 3+ wind resources. Agricultural properties ideal candidates.</li>
      <li><strong>High Elevation:</strong> Hilltops, ridges, coastal areas experience stronger, more consistent winds than valleys or forested areas.</li>
      <li><strong>High Electricity Costs:</strong> States with $0.20+/kWh rates (CA, HI, MA, CT, NH, NY) see better ROI. Wind makes less sense in low-rate states (<$0.10/kWh).</li>
      <li><strong>Off-Grid Applications:</strong> Remote properties without grid access. Wind + solar + battery provides reliable 24/7 power, eliminates need for diesel generators.</li>
      <li><strong>Net Metering Availability:</strong> States with full retail net metering credit excess generation at retail rates, essential for economic viability.</li>
      <li><strong>Environmental Commitment:</strong> For eco-conscious landowners, wind provides clean energy despite longer payback periods than solar.</li>
    </ul>

    <h3>Common Challenges & Considerations</h3>
    <ul>
      <li><strong>Intermittent Production:</strong> Wind varies hourly, daily, seasonally. Battery storage ($10,000-$20,000 for 10-20 kWh) improves reliability but increases costs.</li>
      <li><strong>Neighbor Relations:</strong> Noise, visual impact, shadow flicker can cause neighbor complaints. Consult neighbors before installation, maximize setbacks beyond minimums.</li>
      <li><strong>Bird/Wildlife Impact:</strong> Small residential turbines pose minimal bird risk vs large commercial turbines. Avoid migratory flyways and raptor nesting areas.</li>
      <li><strong>Reliability:</strong> Mechanical systems with moving parts more prone to failures than solar. Lightning strikes, high winds, ice loading can damage turbines.</li>
      <li><strong>Resale Impact:</strong> Wind turbines may deter some buyers due to noise, aesthetics, maintenance concerns. Can reduce property marketability vs solar.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your turbine system cost, installation and tower costs, expected annual energy production, current electricity rates, available incentives, and estimated maintenance costs. The calculator computes your net cost after tax credits, annual savings, payback period, 25-year total savings, and ROI to help you determine if a residential wind turbine is a viable investment for your property.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'turbineEquipmentCost',
        label: 'Wind Turbine Equipment Cost ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'towerFoundationCost',
        label: 'Tower & Foundation Cost ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'installationCost',
        label: 'Installation Labor & Electrical ($)',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'siteAssessmentPermits',
        label: 'Site Assessment & Permits ($)',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'federalTaxCredit',
        label: 'Federal ITC (30% of total) ($)',
        type: 'number',
        defaultValue: 12750,
      },
      {
        name: 'stateLocalIncentives',
        label: 'State & Local Rebates ($)',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'annualEnergyProduction',
        label: 'Annual Energy Production (kWh)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'electricityRate',
        label: 'Electricity Rate ($/kWh)',
        type: 'number',
        defaultValue: 0.15,
      },
      {
        name: 'annualMaintenanceCost',
        label: 'Annual Maintenance Cost ($)',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'systemLifespan',
        label: 'Expected System Lifespan (years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      {
        name: 'totalProjectCost',
        label: 'Total Project Cost',
        format: 'currency',
      },
      {
        name: 'totalIncentives',
        label: 'Total Tax Credits & Incentives',
        format: 'currency',
      },
      {
        name: 'netCost',
        label: 'Net Cost After Incentives',
        format: 'currency',
      },
      {
        name: 'annualEnergySavings',
        label: 'Annual Energy Savings',
        format: 'currency',
      },
      {
        name: 'netAnnualSavings',
        label: 'Net Annual Savings (After Maintenance)',
        format: 'currency',
      },
      {
        name: 'paybackPeriod',
        label: 'Payback Period',
        format: 'years',
      },
      {
        name: 'lifetimeSavings',
        label: 'Lifetime Net Savings',
        format: 'currency',
      },
      {
        name: 'lifetimeROI',
        label: 'Lifetime ROI',
        format: 'percentage',
      },
    ],
    calculate: (inputs: Record<string, number>) => {
      const totalProjectCost = 
        inputs.turbineEquipmentCost +
        inputs.towerFoundationCost +
        inputs.installationCost +
        inputs.siteAssessmentPermits;
      
      const totalIncentives = inputs.federalTaxCredit + inputs.stateLocalIncentives;
      const netCost = totalProjectCost - totalIncentives;
      
      const annualEnergySavings = inputs.annualEnergyProduction * inputs.electricityRate;
      const netAnnualSavings = annualEnergySavings - inputs.annualMaintenanceCost;
      
      const paybackPeriod = netAnnualSavings > 0 ? netCost / netAnnualSavings : 0;
      const lifetimeSavings = (netAnnualSavings * inputs.systemLifespan) - netCost;
      const lifetimeROI = netCost > 0 ? (lifetimeSavings / netCost) * 100 : 0;

      return {
        totalProjectCost,
        totalIncentives,
        netCost,
        annualEnergySavings,
        netAnnualSavings,
        paybackPeriod,
        lifetimeSavings,
        lifetimeROI,
      };
    },
  },
};
