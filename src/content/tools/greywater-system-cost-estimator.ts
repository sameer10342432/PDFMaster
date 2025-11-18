import { CalculatorContent } from '@/types';

export const GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Greywater System Cost Estimator - Water Reuse System ROI',
  description: 'Calculate the cost and savings of installing a greywater recycling system for landscape irrigation using shower, sink, and laundry water',
  icon: 'Icon',
  slug: 'greywater-system-cost-estimator',
  category: 'Water Conservation',
  article: {
    title: 'Greywater Systems: Complete Installation Cost & Savings Guide',
    content: `
    <h2>What is a Greywater System?</h2>
    <p>Greywater systems recycle lightly used household water from showers, sinks, and washing machines for landscape irrigation, reducing municipal water consumption by 30-50% and lowering water bills. Unlike rainwater harvesting, greywater provides year-round consistent supply, ideal for arid climates and areas with water restrictions. Simple laundry-to-landscape systems cost $300-$1,500 DIY, while complex whole-house systems run $2,000-$10,000 installed. Many states offer rebates of $500-$2,500, and water savings typically pay back systems in 3-8 years.</p>

    <h3>Types of Greywater Systems</h3>
    <ul>
      <li><strong>Laundry-to-Landscape (L2L):</strong> Cost $300-$1,500 DIY or $800-$2,500 installed. Diverts washing machine water to mulch basins. Simple 1-day installation, no permit needed in many states.</li>
      <li><strong>Branched Drain:</strong> Cost $1,000-$4,000 installed. Gravity-fed system splitting shower/bath water among multiple irrigation zones. No pump/electricity, low maintenance.</li>
      <li><strong>Pumped System:</strong> Cost $2,500-$6,000 installed. Collects greywater in tank, pumps to drip irrigation on schedule. Allows filtering, surge tank storage for better distribution.</li>
      <li><strong>Constructed Wetland:</strong> Cost $3,000-$8,000. Natural filtration through plants/gravel before landscape use. Aesthetic benefit, advanced biological treatment.</li>
      <li><strong>Whole-House Treatment System:</strong> Cost $8,000-$20,000. Commercial-grade filtration for toilet flushing, sub-surface irrigation. Includes automated controls, monitoring, dual plumbing.</li>
    </ul>

    <h3>Installation Cost Breakdown</h3>
    <ul>
      <li><strong>Simple L2L System:</strong> $300-$800 DIY (valve, pipes, mulch basins) or $800-$2,000 installed. Weekend DIY project for handy homeowners.</li>
      <li><strong>Basic Plumbing Modifications:</strong> $500-$2,000 to separate greywater from blackwater (toilet) drains, install diverter valves, run new supply lines.</li>
      <li><strong>Surge Tank & Pump:</strong> $800-$2,500 for 50-150 gallon tank, pump, float switches, irrigation distribution plumbing.</li>
      <li><strong>Filtration System:</strong> $300-$1,500 for sand filters, mesh screens, or commercial greywater filters depending on system complexity and end use.</li>
      <li><strong>Irrigation Infrastructure:</strong> $500-$3,000 for drip irrigation lines, mulch basins, valves, timers to distribute greywater effectively.</li>
      <li><strong>Professional Installation Labor:</strong> $800-$4,000 depending on system complexity, accessibility, local labor rates, permit requirements.</li>
    </ul>

    <h3>Greywater Sources & Volumes</h3>
    <ul>
      <li><strong>Shower/Bath:</strong> 25-40 gallons/person/day - largest greywater source. Ideal for landscape irrigation, minimal treatment needed.</li>
      <li><strong>Bathroom Sinks:</strong> 3-6 gallons/person/day. Often combined with shower greywater in branched drain systems.</li>
      <li><strong>Washing Machine:</strong> 15-40 gallons/load, 100-200 gallons/week typical household. Consistent high-volume source, great for L2L systems.</li>
      <li><strong>Kitchen Sink:</strong> NOT recommended for greywater due to food particles, grease, bacteria. Requires advanced treatment. Most codes prohibit kitchen greywater.</li>
      <li><strong>Total Household Greywater:</strong> 50-80 gallons/person/day. 4-person household generates 200-320 gallons/day - sufficient for 2,000-5,000 sq ft landscape irrigation.</li>
    </ul>

    <h3>Water Bill Savings</h3>
    <ul>
      <li><strong>Irrigation Offset:</strong> Greywater replaces 30-80% of outdoor irrigation needs depending on landscape size, climate, system capacity. Savings $30-$150/month in summer.</li>
      <li><strong>Annual Savings:</strong> $200-$1,200/year typical for residential systems in areas with $5-$10/thousand gallon water rates.</li>
      <li><strong>High-Cost Markets:</strong> California, Arizona, Nevada with $8-$15/thousand gallons see savings $400-$2,000/year for larger systems.</li>
      <li><strong>Tiered Rate Benefits:</strong> Greywater use keeps households in lower pricing tiers, avoiding expensive upper-tier rates ($10-$20/thousand gallons).</li>
      <li><strong>Drought Restrictions:</strong> During water restrictions, greywater exempt from limitations - can maintain landscape legally when neighbors face fines.</li>
    </ul>

    <h3>Regulations & Codes</h3>
    <ul>
      <li><strong>California:</strong> Most progressive greywater code. L2L systems require no permit if <250 gal/day. Complex systems need permit but streamlined approval.</li>
      <li><strong>Arizona:</strong> Allows greywater use statewide. Systems <400 gal/day generally exempt from permits. Tucson/Phoenix actively promote greywater.</li>
      <li><strong>Texas:</strong> Permits greywater irrigation. Austin offers rebates up to $500. Simple systems often exempt from permitting.</li>
      <li><strong>New Mexico:</strong> Supportive regulations, allows both simple and complex systems with straightforward permitting process.</li>
      <li><strong>Colorado, Oregon, Washington:</strong> Allow greywater with permits. Growing rebate programs. Check county/city specific codes.</li>
      <li><strong>Prohibited States:</strong> Currently few restrictions, but some jurisdictions within states prohibit or heavily regulate. Check local health department rules.</li>
    </ul>

    <h3>Utility Rebates & Incentives</h3>
    <ul>
      <li><strong>Los Angeles DWP:</strong> Rebates $250-$3,000 based on system type and expected water savings.</li>
      <li><strong>Tucson Water:</strong> Rebates up to $1,000 for qualifying greywater systems serving irrigation.</li>
      <li><strong>Austin Water:</strong> Rebates $500-$2,000 for commercial and multi-family greywater systems.</li>
      <li><strong>San Diego:</strong> Rebates $1-$2 per square foot of landscape converted to greywater irrigation.</li>
      <li><strong>Santa Fe Water:</strong> Rebates $500-$1,500 for residential greywater installation.</li>
      <li><strong>Check Local Programs:</strong> Over 50 utilities nationwide now offer greywater rebates. Contact water agency for current programs.</li>
    </ul>

    <h3>Environmental & Property Benefits</h3>
    <ul>
      <li><strong>Water Conservation:</strong> Typical system saves 10,000-30,000 gallons/year, reducing strain on municipal water supplies and aquifers.</li>
      <li><strong>Wastewater Reduction:</strong> Less water to wastewater treatment plants saves energy (treatment energy-intensive: 1-2 kWh per 1,000 gallons).</li>
      <li><strong>Healthier Landscapes:</strong> Greywater provides slow-release nitrogen and phosphorus - natural fertilizer for plants. Many report lusher growth.</li>
      <li><strong>Property Value:</strong> Water-wise features increasingly attractive to buyers, especially in drought-prone regions. Systems add $1,000-$4,000 to appraisals.</li>
      <li><strong>Drought Resilience:</strong> Greywater provides reliable irrigation even during severe droughts and mandatory restrictions.</li>
    </ul>

    <h3>System Design Considerations</h3>
    <ul>
      <li><strong>Soap Selection:</strong> Use plant-safe soaps/detergents. Avoid products with boron, sodium, chlorine bleach (toxic to plants). Look for greywater-safe labels.</li>
      <li><strong>Surge Tank Sizing:</strong> Size for daily greywater generation. 100-200 gallon tanks handle typical household. Larger tanks allow storage for optimal irrigation timing.</li>
      <li><strong>Distribution Method:</strong> Subsurface drip irrigation or mulch basins required by most codes. Prevents human contact, minimizes odor, optimal plant uptake.</li>
      <li><strong>Landscape Selection:</strong> Best for ornamentals, trees, lawns. Many codes restrict greywater on edible gardens - no root vegetables. Fruit trees OK with 2-week waiting period.</li>
      <li><strong>Backup Disposal:</strong> Include 3-way valve to divert greywater to sewer when not irrigating (winter, rainy periods) or during repairs.</li>
    </ul>

    <h3>Maintenance Requirements</h3>
    <ul>
      <li><strong>Filter Cleaning:</strong> Clean lint filters monthly (L2L systems), more often with hard water. Takes 10-20 minutes. Critical for preventing clogs.</li>
      <li><strong>Inspection:</strong> Check system quarterly - valves, pipes, distribution emitters for clogs or leaks. Flush drip lines 2-4x/year.</li>
      <li><strong>Mulch Basin Maintenance:</strong> Rotate irrigation to different mulch basins every 6-12 months to prevent soil saturation and allow recovery.</li>
      <li><strong>Pump Maintenance:</strong> Clean pump intake annually, check operation quarterly. Replace pump every 8-12 years ($200-$600).</li>
      <li><strong>Annual Costs:</strong> $50-$200/year for filter replacements, soap products, minor repairs. Minimal compared to water savings.</li>
    </ul>

    <h3>Best Candidates for Greywater</h3>
    <ul>
      <li><strong>High Water Costs:</strong> Areas with $6+/thousand gallons (CA, NV, AZ, parts of TX) see fastest payback.</li>
      <li><strong>Large Landscapes:</strong> Properties with 1,000+ sq ft landscaping, mature trees, extensive gardens benefit most from greywater irrigation.</li>
      <li><strong>Drought-Prone Climates:</strong> Southwest, California, Texas - greywater provides reliable water source during restrictions and shortages.</li>
      <li><strong>New Construction:</strong> Installing greywater plumbing during build costs 50-70% less than retrofitting. Pre-plumb even if not activating immediately.</li>
      <li><strong>Environmentally Conscious:</strong> For sustainability-focused homeowners, greywater offers tangible daily water conservation action.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your system type and costs, daily greywater generation, current water rates, percentage of irrigation to be replaced, available rebates, and annual maintenance costs. The calculator computes your annual water savings, net system cost, payback period, 15-year total savings, and ROI to help evaluate if greywater recycling makes sense for your property.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'systemEquipmentCost',
        label: 'Greywater System Equipment ($)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'installationCost',
        label: 'Installation Labor & Materials ($)',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'irrigationModifications',
        label: 'Irrigation System Modifications ($)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'utilityRebates',
        label: 'Utility Rebates ($)',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'dailyGreywaterGeneration',
        label: 'Daily Greywater Generation (gallons)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'percentUsedForIrrigation',
        label: 'Percent Used for Irrigation (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'waterRatePer1000Gal',
        label: 'Water Rate Per 1,000 Gallons ($)',
        type: 'number',
        defaultValue: 7.50,
      },
      {
        name: 'irrigationMonthsPerYear',
        label: 'Irrigation Months Per Year',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'annualMaintenanceCost',
        label: 'Annual Maintenance Cost ($)',
        type: 'number',
        defaultValue: 120,
      },
    ],
    results: [
      {
        name: 'totalSystemCost',
        label: 'Total System Cost',
        format: 'currency',
      },
      {
        name: 'netCostAfterRebates',
        label: 'Net Cost After Rebates',
        format: 'currency',
      },
      {
        name: 'annualWaterSaved',
        label: 'Annual Water Saved',
        format: 'number',
        suffix: ' gallons',
      },
      {
        name: 'annualWaterSavings',
        label: 'Annual Water Bill Savings',
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
        name: 'fifteenYearSavings',
        label: '15-Year Total Savings',
        format: 'currency',
      },
      {
        name: 'fifteenYearROI',
        label: '15-Year ROI',
        format: 'percentage',
      },
    ],
    calculate: (inputs: Record<string, number>) => {
      const totalSystemCost = 
        inputs.systemEquipmentCost +
        inputs.installationCost +
        inputs.irrigationModifications;
      
      const netCostAfterRebates = totalSystemCost - inputs.utilityRebates;
      
      // Calculate annual water saved
      const daysPerMonth = 30;
      const annualWaterSaved = 
        inputs.dailyGreywaterGeneration * 
        (inputs.percentUsedForIrrigation / 100) * 
        daysPerMonth * 
        inputs.irrigationMonthsPerYear;
      
      const annualWaterSavings = (annualWaterSaved / 1000) * inputs.waterRatePer1000Gal;
      const netAnnualSavings = annualWaterSavings - inputs.annualMaintenanceCost;
      
      const paybackPeriod = netAnnualSavings > 0 ? netCostAfterRebates / netAnnualSavings : 0;
      const fifteenYearSavings = (netAnnualSavings * 15) - netCostAfterRebates;
      const fifteenYearROI = netCostAfterRebates > 0 ? (fifteenYearSavings / netCostAfterRebates) * 100 : 0;

      return {
        totalSystemCost,
        netCostAfterRebates,
        annualWaterSaved: Math.round(annualWaterSaved),
        annualWaterSavings,
        netAnnualSavings,
        paybackPeriod,
        fifteenYearSavings,
        fifteenYearROI,
      };
    },
  },
};
