import { CalculatorContent } from '@/types';

export const EV_CHARGER_INSTALLATION_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'EV Charger Installation ROI Calculator - Electric Vehicle Home Charging',
  description: 'Calculate the cost and ROI of installing a Level 2 EV charger at home including installation costs, energy savings vs gas, and tax credits',
  icon: 'Icon',
  slug: 'ev-charger-installation-roi-calculator',
  category: 'Energy Efficiency',
  article: {
    title: 'EV Home Charger Installation: Complete Cost & ROI Guide',
    content: `
    <h2>Why Install a Home EV Charger?</h2>
    <p>Installing a Level 2 EV charger at home is one of the best investments for electric vehicle owners, offering convenience, significant fuel cost savings, and faster charging than standard outlets. While a standard 120V outlet (Level 1) adds only 3-5 miles of range per hour, a 240V Level 2 charger adds 25-30 miles per hour—fully charging most EVs overnight. With federal tax credits up to $1,000, state rebates up to $2,000, and utility incentives, home EV charging typically pays for itself in 2-4 years through gas savings alone.</p>

    <h3>Types of Home EV Chargers</h3>
    <ul>
      <li><strong>Level 1 Charging (120V):</strong> Free with car - uses standard outlet. Charges 3-5 miles/hour. Good for plug-in hybrids or low daily mileage. No installation needed.</li>
      <li><strong>Level 2 Hardwired (240V):</strong> Cost $400-$1,200 for charger + $300-$1,500 installation. Charges 25-30 miles/hour. Permanently wired, requires electrician. Most reliable option.</li>
      <li><strong>Level 2 Plug-In (240V NEMA 14-50):</strong> Cost $400-$900 for charger + $200-$1,200 for outlet installation. Portable between homes. Outlet also powers RVs, welders.</li>
      <li><strong>Smart Chargers:</strong> Cost $500-$1,500. WiFi-enabled, schedule charging for off-peak rates, track energy use, qualify for utility demand response programs.</li>
      <li><strong>Solar-Integrated Chargers:</strong> Cost $600-$1,800. Coordinate with home solar panels to maximize self-consumption and charge with 100% renewable energy.</li>
    </ul>

    <h3>Installation Costs Breakdown</h3>
    <ul>
      <li><strong>Charger Equipment:</strong> $400-$1,500 depending on features (smart capabilities, cable length, amperage). Popular brands: ChargePoint, JuiceBox, Grizzl-E, Tesla Wall Connector.</li>
      <li><strong>Electrician Labor:</strong> $300-$1,200 for straightforward installation near electrical panel. Includes running 240V circuit, mounting charger, testing.</li>
      <li><strong>Panel Upgrade:</strong> $1,500-$3,000 if existing panel lacks capacity. Most modern homes with 200-amp service can add charger without upgrade.</li>
      <li><strong>Trenching & Conduit:</strong> $10-$30 per linear foot if charger installed far from panel (garage, driveway). Underground conduit runs can add $500-$3,000.</li>
      <li><strong>Permit Fees:</strong> $50-$200 depending on jurisdiction. Required in most areas for 240V electrical work. Electrician typically handles permit application.</li>
      <li><strong>Total Typical Cost:</strong> $1,000-$2,500 for complete installation including equipment and labor for most homes.</li>
    </ul>

    <h3>Federal, State & Utility Incentives</h3>
    <ul>
      <li><strong>Federal Tax Credit (30C):</strong> 30% of cost up to $1,000 for EV charger equipment and installation (available through 2032). Covers hardware + labor.</li>
      <li><strong>California Incentives:</strong> Up to $2,000 rebate (Clean Vehicle Rebate Project), plus utility rebates $500-$1,000 (PG&E, SCE, SDG&E).</li>
      <li><strong>Colorado:</strong> $1,380 state tax credit + utility rebates up to $1,000 (Xcel Energy).</li>
      <li><strong>New York:</strong> $1,000 rebate (Charge Ready NY) + utility incentives $500-$1,500 (Con Edison, NYSEG).</li>
      <li><strong>Massachusetts:</strong> $1,000 rebate (MOR-EV) + utility incentives up to $1,000 (Mass Save participating utilities).</li>
      <li><strong>Utility Time-of-Use Rates:</strong> Many utilities offer special EV rates - charge overnight for 50-70% lower electricity costs ($0.05-$0.10/kWh vs $0.15-$0.35/kWh peak).</li>
    </ul>

    <h3>Fuel Cost Savings: Gas vs Electric</h3>
    <ul>
      <li><strong>Gas Vehicle Costs:</strong> At $3.50/gallon and 25 MPG, fuel costs $0.14/mile. Annual cost for 12,000 miles: $1,680.</li>
      <li><strong>EV Home Charging Costs:</strong> At $0.13/kWh average rate and 3.5 miles/kWh efficiency, electricity costs $0.037/mile. Annual cost for 12,000 miles: $444.</li>
      <li><strong>Annual Savings:</strong> $1,236/year for average driver replacing gas car with EV charging at home.</li>
      <li><strong>Premium Gas Savings:</strong> For luxury/sports cars using premium gas ($4.50/gal), savings increase to $1,800-$2,200/year vs EV.</li>
      <li><strong>Lifetime Savings:</strong> Over 10 years (120,000 miles), home EV charging saves $12,000-$15,000 vs gasoline at current prices.</li>
      <li><strong>Off-Peak Charging:</strong> Using time-of-use rates, charge for $0.05-$0.08/kWh overnight, reducing costs to $0.015-$0.025/mile ($180-$300/year for 12,000 miles).</li>
    </ul>

    <h3>Property Value Impact</h3>
    <ul>
      <li><strong>Resale Value Increase:</strong> Homes with Level 2 EV chargers sell for 3-5% premium in EV-friendly markets (California, Colorado, Washington, Northeast).</li>
      <li><strong>Buyer Demand:</strong> 40% of homebuyers now consider EV charging infrastructure important, 25% say it's essential (2024 NAR survey).</li>
      <li><strong>Future-Proofing:</strong> EV adoption accelerating - projected 30% of cars will be electric by 2030. Installing charger now positions home for future market.</li>
      <li><strong>Appraisal Consideration:</strong> Appraisers increasingly recognize EV chargers as value-add amenity similar to pool, spa, or smart home features.</li>
      <li><strong>Rental Property Appeal:</strong> For landlords, EV chargers attract high-quality tenants willing to pay $50-$100/month premium rent.</li>
    </ul>

    <h3>Operational Benefits Beyond Cost Savings</h3>
    <ul>
      <li><strong>Convenience:</strong> Wake up to full charge every morning - no more gas station trips, waiting, or detours. Save 2-3 hours/month vs refueling gas cars.</li>
      <li><strong>Safety:</strong> No exposure to gas fumes, extreme weather at gas stations, or unsafe late-night refueling locations.</li>
      <li><strong>Cleaner Energy:</strong> Home charging with solar panels achieves 100% renewable transportation - zero emissions driving.</li>
      <li><strong>Grid Benefits:</strong> Smart chargers can participate in demand response programs - earn $50-$200/year by allowing utility to manage charging during peak events.</li>
      <li><strong>Emergency Power:</strong> Some EVs support bidirectional charging (V2H) - use car as backup battery during outages (10-15 kWh usable, powers home 1-2 days).</li>
    </ul>

    <h3>Installation Process & Timeline</h3>
    <ul>
      <li><strong>Step 1 - Site Assessment:</strong> Electrician evaluates panel capacity, charger location, wire run distance. Free or $50-$150 consultation.</li>
      <li><strong>Step 2 - Choose Charger:</strong> Select based on car charging speed (most EVs: 40-48 amp charger optimal), smart features, warranty (3-5 years typical).</li>
      <li><strong>Step 3 - Permit Application:</strong> Electrician submits electrical permit ($50-$200) to local jurisdiction. Approval takes 1-7 days typically.</li>
      <li><strong>Step 4 - Installation:</strong> Run 240V circuit from panel to charger location, mount charger, connect wiring, test. Takes 4-8 hours for most installs.</li>
      <li><strong>Step 5 - Inspection:</strong> City inspector verifies electrical work meets code. Schedule within 2-5 days of installation completion.</li>
      <li><strong>Step 6 - Activation:</strong> Set up charger app (if smart charger), enroll in utility programs, start charging. Total timeline: 1-3 weeks from consultation to operation.</li>
    </ul>

    <h3>Choosing the Right Charger</h3>
    <ul>
      <li><strong>Amperage Selection:</strong> 40-48 amp chargers deliver 9.6-11.5 kW (fastest home charging). 32 amp (7.7 kW) adequate for most daily needs, lower installation cost.</li>
      <li><strong>Cable Length:</strong> 18-25 ft cable provides flexibility for parking on either side. Longer cables ($100-$200 premium) useful for multiple parking spots.</li>
      <li><strong>Indoor vs Outdoor:</strong> Outdoor chargers ($50-$100 more) have weatherproof NEMA 3R/4 rating. Garage installs can use indoor-rated chargers.</li>
      <li><strong>Smart Features:</strong> WiFi connectivity enables scheduling, monitoring, solar integration, utility programs. Worth $100-$300 premium for most users.</li>
      <li><strong>Brand Compatibility:</strong> Most chargers work with all EVs (J1772 standard). Tesla owners can use Tesla Wall Connector or universal charger with adapter.</li>
      <li><strong>Energy Monitoring:</strong> Chargers with built-in kWh metering help track costs, qualify for utility time-of-use credits, simplify EV tax credit documentation.</li>
    </ul>

    <h3>Common Installation Challenges</h3>
    <ul>
      <li><strong>Panel Capacity:</strong> Homes with 100-amp service may need upgrade to 200-amp ($1,500-$3,000). Load calculation determines if upgrade necessary.</li>
      <li><strong>Distance from Panel:</strong> Garages far from main panel increase wire costs ($3-$8/foot for 50A circuit). Subpanel installation ($800-$1,500) can reduce wire runs.</li>
      <li><strong>Condo/HOA Restrictions:</strong> Some HOAs restrict charger installation. California, Colorado, Florida, Oregon, Virginia have "right to charge" laws limiting HOA authority.</li>
      <li><strong>Rental Properties:</strong> Landlords increasingly required to allow charger installation in CA, CO, WA. Tenant typically pays installation, may relocate charger when moving.</li>
      <li><strong>Multi-Car Households:</strong> Install load-sharing system ($400-$800) to charge 2-3 EVs without panel upgrade. Alternates charging based on available capacity.</li>
    </ul>

    <h3>Maximizing Your EV Charger Investment</h3>
    <ul>
      <li><strong>Enroll in TOU Rate Plans:</strong> Switch to time-of-use electricity plan, charge overnight for 50-70% savings vs standard rates.</li>
      <li><strong>Apply for All Incentives:</strong> Stack federal tax credit + state rebate + utility incentive to reduce net cost to $300-$800 in many states.</li>
      <li><strong>Solar Integration:</strong> If you have or plan solar, size system to cover EV charging load (add 3-5 kW to solar system for EV charging).</li>
      <li><strong>Smart Scheduling:</strong> Use charger app to schedule charging during cheapest hours (typically 11 PM - 7 AM) for maximum savings.</li>
      <li><strong>Demand Response Programs:</strong> Enroll in utility programs that pay $50-$200/year for allowing charging adjustments during peak demand events.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your charger equipment cost, installation cost, available incentives, current annual fuel costs, and estimated EV charging costs. The calculator will compute your net installation cost after incentives, annual fuel savings, payback period, 10-year savings, and ROI to help determine if installing a home EV charger makes financial sense for your situation.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'chargerCost',
        label: 'EV Charger Equipment Cost ($)',
        type: 'number',
        defaultValue: 700,
      },
      {
        name: 'installationCost',
        label: 'Installation Labor & Materials ($)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'panelUpgrade',
        label: 'Electrical Panel Upgrade Cost ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'federalTaxCredit',
        label: 'Federal Tax Credit (30% up to $1,000) ($)',
        type: 'number',
        defaultValue: 570,
      },
      {
        name: 'stateUtilityRebates',
        label: 'State & Utility Rebates ($)',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'annualMilesDriven',
        label: 'Annual Miles Driven',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'gasPricePerGallon',
        label: 'Gas Price Per Gallon ($)',
        type: 'number',
        defaultValue: 3.50,
      },
      {
        name: 'gasMPG',
        label: 'Gas Car MPG',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'electricityRate',
        label: 'Home Electricity Rate ($/kWh)',
        type: 'number',
        defaultValue: 0.13,
      },
      {
        name: 'evEfficiency',
        label: 'EV Efficiency (miles per kWh)',
        type: 'number',
        defaultValue: 3.5,
      },
    ],
    results: [
      {
        name: 'totalProjectCost',
        label: 'Total Installation Cost',
        format: 'currency',
      },
      {
        name: 'totalIncentives',
        label: 'Total Incentives',
        format: 'currency',
      },
      {
        name: 'netCost',
        label: 'Net Cost After Incentives',
        format: 'currency',
      },
      {
        name: 'annualGasCost',
        label: 'Annual Gas Cost (Current)',
        format: 'currency',
      },
      {
        name: 'annualElectricCost',
        label: 'Annual EV Charging Cost',
        format: 'currency',
      },
      {
        name: 'annualSavings',
        label: 'Annual Fuel Savings',
        format: 'currency',
      },
      {
        name: 'paybackPeriod',
        label: 'Payback Period',
        format: 'years',
      },
      {
        name: 'tenYearSavings',
        label: '10-Year Total Savings',
        format: 'currency',
      },
      {
        name: 'tenYearROI',
        label: '10-Year ROI',
        format: 'percentage',
      },
    ],
    calculate: (inputs: Record<string, number>) => {
      const totalProjectCost = inputs.chargerCost + inputs.installationCost + inputs.panelUpgrade;
      const totalIncentives = inputs.federalTaxCredit + inputs.stateUtilityRebates;
      const netCost = totalProjectCost - totalIncentives;

      const annualGasCost = (inputs.annualMilesDriven / inputs.gasMPG) * inputs.gasPricePerGallon;
      const annualElectricCost = (inputs.annualMilesDriven / inputs.evEfficiency) * inputs.electricityRate;
      const annualSavings = annualGasCost - annualElectricCost;

      const paybackPeriod = annualSavings > 0 ? netCost / annualSavings : 0;
      const tenYearSavings = (annualSavings * 10) - netCost;
      const tenYearROI = netCost > 0 ? (tenYearSavings / netCost) * 100 : 0;

      return {
        totalProjectCost,
        totalIncentives,
        netCost,
        annualGasCost,
        annualElectricCost,
        annualSavings,
        paybackPeriod,
        tenYearSavings,
        tenYearROI,
      };
    },
  },
};
