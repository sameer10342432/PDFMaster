import { CalculatorContent } from '@/types';

export const DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Drip Irrigation ROI Calculator - Efficient Watering System Savings',
  description: 'Calculate the cost and water savings of converting from spray irrigation to drip irrigation, reducing water use by 30-50% and improving plant health',
  icon: 'Icon',
  slug: 'drip-irrigation-roi-calculator',
  category: 'Water Conservation',
  article: {
    title: 'Drip Irrigation ROI: Complete Guide to Water-Efficient Irrigation',
    content: `
    <h2>Why Switch to Drip Irrigation?</h2>
    <p>Drip irrigation delivers water directly to plant roots through a network of tubing and emitters, achieving 90-95% efficiency vs 60-75% for spray systems. This precision watering reduces water use by 30-50%, lowers bills by $200-$800 annually, and improves plant health by reducing disease and weed growth. Installation costs $0.40-$1.50 per square foot, with utility rebates of $0.20-$0.80/sq ft available in many areas. In water-scarce regions with tiered pricing, drip irrigation typically pays for itself in 2-5 years while adding $1,000-$3,000 to property value.</p>

    <h3>Drip Irrigation Benefits</h3>
    <ul>
      <li><strong>Water Efficiency:</strong> 90-95% efficient vs 60-75% for spray irrigation. Eliminates overspray, runoff, evaporation losses. Delivers water precisely where needed.</li>
      <li><strong>Lower Water Bills:</strong> Reduce outdoor water consumption 30-50%. Savings $200-$800/year depending on landscape size, climate, water rates.</li>
      <li><strong>Healthier Plants:</strong> Consistent soil moisture, direct root watering reduces plant stress. Less fungal disease from wet foliage. Better flowering/fruiting.</li>
      <li><strong>Weed Suppression:</strong> Water only plants, not bare soil between them. Reduces weed germination by 50-70% vs spray irrigation that waters entire area.</li>
      <li><strong>Reduced Fertilizer Loss:</strong> Prevents runoff of fertilizers into storm drains. Nutrients stay in root zone. Lower fertilizer costs, better environmental impact.</li>
      <li><strong>Time Savings:</strong> Automated systems eliminate hand watering. Low maintenance - flush lines 2-4x/year, replace emitters as needed (every 5-10 years).</li>
    </ul>

    <h3>Drip Irrigation Installation Costs</h3>
    <ul>
      <li><strong>DIY Installation:</strong> $0.20-$0.60/sq ft for tubing, emitters, pressure regulator, filter, timer. Weekend project for handy homeowners with online tutorials.</li>
      <li><strong>Professional Installation:</strong> $0.40-$1.50/sq ft including design, materials, labor, programming. Complex landscapes, slopes require professional expertise.</li>
      <li><strong>Typical Garden (500 sq ft):</strong> $200-$750 total. $100-$400 DIY, $200-$750 professional.</li>
      <li><strong>Standard Yard (2,000 sq ft):</strong> $800-$3,000 total. $400-$1,200 DIY, $800-$3,000 professional.</li>
      <li><strong>Large Landscape (5,000 sq ft):</strong> $2,000-$7,500 total. Best suited for professional installation to ensure optimal coverage and pressure.</li>
    </ul>

    <h3>System Component Costs</h3>
    <ul>
      <li><strong>Drip Tubing:</strong> $0.10-$0.30/ft for 1/2" or 5/8" mainline, $0.05-$0.15/ft for 1/4" distribution tubing. Typical yard needs 200-800 ft.</li>
      <li><strong>Emitters:</strong> $0.10-$0.50 each depending on flow rate. Use 1-4 emitters per plant. Pressure-compensating emitters ($0.30-$0.50) maintain consistent flow on slopes.</li>
      <li><strong>Backflow Preventer:</strong> $30-$150 to prevent contamination of household water. Required by code in most jurisdictions.</li>
      <li><strong>Pressure Regulator:</strong> $15-$50 to reduce household pressure (40-80 PSI) to drip system pressure (15-30 PSI). Essential for system longevity.</li>
      <li><strong>Filter:</strong> $20-$80 to remove sediment that clogs emitters. 150-200 mesh screen filter standard. Clean monthly during irrigation season.</li>
      <li><strong>Timer/Controller:</strong> $30-$300. Basic hose-bib timer ($30-$80), WiFi smart controller ($80-$300) with weather-based adjustments and phone app.</li>
    </ul>

    <h3>Water Savings Calculation</h3>
    <ul>
      <li><strong>Spray Irrigation Efficiency:</strong> 60-75%. 25-40% lost to evaporation, wind drift, overspray onto hardscape. Hot windy days see 50% losses.</li>
      <li><strong>Drip Irrigation Efficiency:</strong> 90-95%. Water applied at soil surface directly above roots. Minimal evaporation, no wind drift, precise targeting.</li>
      <li><strong>Water Use Reduction:</strong> 30-50% less water for same landscape vs spray irrigation. Greater savings in hot, windy, low-humidity climates.</li>
      <li><strong>Example Savings:</strong> 2,000 sq ft garden using spray irrigation: 90,000 gal/year. With drip: 55,000 gal/year. Savings: 35,000 gal. At $7/1,000 gal: $245/year.</li>
      <li><strong>Peak Season Savings:</strong> Summer months see greatest savings when evaporation highest. Can reduce summer water bills 40-60%.</li>
    </ul>

    <h3>Utility Rebates & Incentives</h3>
    <ul>
      <li><strong>California Water Districts:</strong> Many offer $0.20-$0.80/sq ft for converting to drip irrigation. LADWP, SDCWA, East Bay MUD have active programs.</li>
      <li><strong>Nevada (SNWA):</strong> Southern Nevada rebates for drip irrigation conversion as part of water-smart landscaping programs.</li>
      <li><strong>Texas Programs:</strong> Austin, San Antonio water utilities offer rebates $100-$1,000 for drip irrigation installations.</li>
      <li><strong>Arizona:</strong> Phoenix, Tucson water departments provide rebates or free drip irrigation kits for residential customers.</li>
      <li><strong>Check Local Utility:</strong> Over 100 water agencies nationwide offer drip irrigation incentives. Contact water provider for current programs and application process.</li>
    </ul>

    <h3>System Design Considerations</h3>
    <ul>
      <li><strong>Zoning:</strong> Group plants with similar water needs in same zone. Separate drip zones for vegetable gardens, flower beds, shrubs, trees based on water requirements.</li>
      <li><strong>Emitter Spacing:</strong> Space emitters 12-18 inches apart for dense plantings, use 2-4 per shrub, 4-8 for large shrubs/small trees. Adjust for soil type (clay needs fewer, sand needs more).</li>
      <li><strong>Run Times:</strong> Deep, infrequent watering encourages deep roots. Run 30-60 minutes 2-3x/week vs daily shallow watering. Adjust seasonally - more in summer, less in cooler months.</li>
      <li><strong>Mainline Sizing:</strong> 1/2" tubing handles up to 200 ft run or 30 emitters. 5/8" tubing for longer runs or more emitters. Proper sizing prevents pressure drop.</li>
      <li><strong>Slope Management:</strong> Use pressure-compensating emitters on slopes to ensure uniform water delivery uphill and downhill. Check emitters compensate in 0-45 PSI range.</li>
    </ul>

    <h3>Maintenance Requirements</h3>
    <ul>
      <li><strong>Filter Cleaning:</strong> Clean screen filter monthly during irrigation season. Takes 5 minutes - unscrew housing, rinse screen, reassemble. Critical for preventing clogs.</li>
      <li><strong>Line Flushing:</strong> Flush system 2-4x/year by removing end caps, running water to clear sediment. Spring startup and fall shutdown essential maintenance.</li>
      <li><strong>Emitter Inspection:</strong> Check emitters monthly for clogs or damage. Clean clogged emitters with pin or replace ($0.10-$0.50 each). Inspect 10-20 per zone.</li>
      <li><strong>System Winterization:</strong> In freezing climates, drain system before winter to prevent freeze damage. Blow out lines with air compressor or drain via low points.</li>
      <li><strong>Annual Costs:</strong> $50-$150/year for replacement emitters, tubing repairs, fertilizer injector refills. Minimal vs ongoing spray system repairs and water waste.</li>
    </ul>

    <h3>Drip vs Spray Irrigation Comparison</h3>
    <ul>
      <li><strong>Water Efficiency:</strong> Drip 90-95% vs Spray 60-75%. Drip reduces water use 30-50% for same landscape.</li>
      <li><strong>Installation Cost:</strong> Drip $0.40-$1.50/sq ft vs Spray $0.80-$2.50/sq ft (includes trenching, PVC pipes, popup heads, valves). Drip often cheaper to install.</li>
      <li><strong>Maintenance:</strong> Drip requires filter cleaning, emitter inspection (low cost, easy). Spray needs head adjustments, repairs from lawn mowers, winterization (higher cost).</li>
      <li><strong>Aesthetic:</strong> Drip tubing visible unless mulched/buried. Spray heads mostly hidden but pop up during operation. Personal preference varies.</li>
      <li><strong>Best Uses:</strong> Drip ideal for beds, gardens, shrubs, trees. Spray better for large lawns, ground covers where uniform coverage needed.</li>
    </ul>

    <h3>Best Applications for Drip Irrigation</h3>
    <ul>
      <li><strong>Vegetable Gardens:</strong> Consistent moisture improves yields. Keeps foliage dry reducing disease. Delivers fertilizer directly to roots via injection systems.</li>
      <li><strong>Flower Beds & Borders:</strong> Targeted watering for each plant type. Mulch hides tubing. Reduces disease from overhead watering.</li>
      <li><strong>Shrubs & Trees:</strong> Deep root watering encourages drought resilience. Slow soaking prevents runoff on slopes. Can expand coverage as plants grow.</li>
      <li><strong>Container Plants:</strong> Automates watering for pots, hanging baskets, raised beds. Vacation-proof with timer. Reduces daily watering chores.</li>
      <li><strong>Slopes & Terraces:</strong> Prevents runoff that plagues spray irrigation on slopes. Water penetrates soil before running downhill.</li>
      <li><strong>Water-Scarce Regions:</strong> Maximum efficiency critical in drought-prone areas. Drip reduces water use 30-50% vs spray.</li>
    </ul>

    <h3>Property Value Impact</h3>
    <ul>
      <li><strong>Water-Efficient Appeal:</strong> Drip irrigation attractive to eco-conscious buyers, especially in drought-prone markets. Shows responsible water stewardship.</li>
      <li><strong>Lower Operating Costs:</strong> Buyers value documented water savings ($200-$800/year). Reduces total cost of homeownership.</li>
      <li><strong>Healthy Landscapes:</strong> Well-watered, thriving plants from efficient drip system enhance curb appeal. Contributes to higher appraisals.</li>
      <li><strong>Added Value:</strong> Drip irrigation adds $1,000-$3,000 to property value in water-conscious markets (California, Southwest, Texas).</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your landscape area, drip system installation costs, current spray irrigation water use and costs, expected drip irrigation water use, available rebates, and maintenance costs. The calculator computes your total system cost, net cost after rebates, annual water savings, payback period, 10-year total savings, and ROI to help determine if converting to drip irrigation makes financial sense for your property.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'irrigatedAreaSqFt',
        label: 'Irrigated Area (sq ft)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'dripSystemCostPerSqFt',
        label: 'Drip System Cost Per Sq Ft ($)',
        type: 'number',
        defaultValue: 0.80,
      },
      {
        name: 'rebatePerSqFt',
        label: 'Utility Rebate Per Sq Ft ($)',
        type: 'number',
        defaultValue: 0.30,
      },
      {
        name: 'currentAnnualWaterUse',
        label: 'Current Annual Water Use (gallons)',
        type: 'number',
        defaultValue: 90000,
      },
      {
        name: 'dripWaterReductionPercent',
        label: 'Water Reduction with Drip (%)',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'waterRatePer1000Gal',
        label: 'Water Rate Per 1,000 Gallons ($)',
        type: 'number',
        defaultValue: 7.00,
      },
      {
        name: 'currentAnnualMaintenance',
        label: 'Current Spray System Maintenance ($/year)',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'dripAnnualMaintenance',
        label: 'Drip System Maintenance ($/year)',
        type: 'number',
        defaultValue: 100,
      },
    ],
    results: [
      {
        name: 'totalSystemCost',
        label: 'Total System Cost',
        format: 'currency',
      },
      {
        name: 'totalRebates',
        label: 'Total Utility Rebates',
        format: 'currency',
      },
      {
        name: 'netCost',
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
        name: 'annualMaintenanceSavings',
        label: 'Annual Maintenance Savings',
        format: 'currency',
      },
      {
        name: 'totalAnnualSavings',
        label: 'Total Annual Savings',
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
      const totalSystemCost = inputs.irrigatedAreaSqFt * inputs.dripSystemCostPerSqFt;
      const totalRebates = inputs.irrigatedAreaSqFt * inputs.rebatePerSqFt;
      const netCost = totalSystemCost - totalRebates;

      const annualWaterSaved = inputs.currentAnnualWaterUse * (inputs.dripWaterReductionPercent / 100);
      const annualWaterSavings = (annualWaterSaved / 1000) * inputs.waterRatePer1000Gal;
      const annualMaintenanceSavings = inputs.currentAnnualMaintenance - inputs.dripAnnualMaintenance;
      const totalAnnualSavings = annualWaterSavings + annualMaintenanceSavings;

      const paybackPeriod = totalAnnualSavings > 0 ? netCost / totalAnnualSavings : 0;
      const tenYearSavings = (totalAnnualSavings * 10) - netCost;
      const tenYearROI = netCost > 0 ? (tenYearSavings / netCost) * 100 : 0;

      return {
        totalSystemCost,
        totalRebates,
        netCost,
        annualWaterSaved: Math.round(annualWaterSaved),
        annualWaterSavings,
        annualMaintenanceSavings,
        totalAnnualSavings,
        paybackPeriod,
        tenYearSavings,
        tenYearROI,
      };
    },
  },
};
