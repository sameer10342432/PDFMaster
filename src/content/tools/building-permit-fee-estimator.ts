import { CalculatorContent } from '@/types';

export const BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Building Permit Fee Estimator - Calculate Permit Costs by City & Project',
  description: 'Estimate building permit fees for construction, renovation, and home improvement projects based on project value and location',
  icon: 'Icon',
  slug: 'building-permit-fee-estimator',
  category: 'Home Improvement',
  article: {
    title: 'Building Permit Fee Guide: Complete Cost Breakdown by Project Type',
    content: `
    <h2>Understanding Building Permit Fees</h2>
    <p>Building permits are required for most structural, electrical, plumbing, and mechanical work to ensure code compliance and safety. Permit fees vary dramatically by jurisdiction, typically ranging from 0.5-2% of project value ($100-$2,000 for typical projects). Factors include project type, valuation, square footage, locality fee structure, and inspection requirements. Understanding permit costs helps homeowners budget accurately and avoid illegal unpermitted work that can cause insurance and resale issues.</p>

    <h3>Permit Fee Calculation Methods</h3>
    <ul>
      <li><strong>Flat Fee Structure:</strong> Many cities charge flat fees by project type - $150 for deck, $250 for bathroom, $500 for addition.</li>
      <li><strong>Valuation-Based:</strong> Most common method charges percentage of project cost - typically 1-2% of total construction value.</li>
      <li><strong>Square Footage:</strong> Some jurisdictions charge per square foot - $0.50-$2.00 per sq ft for additions, new construction.</li>
      <li><strong>Tiered System:</strong> Graduated fees increase with project value - first $10k at 1%, next $40k at 0.75%, over $50k at 0.5%.</li>
      <li><strong>Base Fee + Valuation:</strong> $100-$300 base fee plus percentage of value - common for complex projects.</li>
      <li><strong>Multiple Trade Permits:</strong> Separate permits for electrical, plumbing, mechanical - each with its own fee ($50-$200 each).</li>
    </ul>

    <h3>Common Project Permit Costs</h3>
    <ul>
      <li><strong>Deck Addition:</strong> $100-$500 depending on size and height - higher decks require structural engineering, cost more.</li>
      <li><strong>Bathroom Remodel:</strong> $150-$600 for plumbing, electrical, structural permits - full gut remodel higher than cosmetic update.</li>
      <li><strong>Kitchen Remodel:</strong> $200-$800 for plumbing, electrical, gas, structural - more trades involved than bathroom.</li>
      <li><strong>Room Addition:</strong> $500-$2,500 based on square footage - includes building, electrical, plumbing, mechanical permits.</li>
      <li><strong>Roof Replacement:</strong> $100-$400 for roofing permit - some cities waive if no structural changes.</li>
      <li><strong>HVAC Replacement:</strong> $150-$400 for mechanical permit - requires load calculation submission, efficiency compliance.</li>
      <li><strong>Window Replacement:</strong> $50-$250 for multiple windows - some cities don't require permit for like-for-like replacement.</li>
      <li><strong>Fence Installation:</strong> $50-$200 for fence permit - heights over 6 feet may require zoning approval too.</li>
      <li><strong>Swimming Pool:</strong> $500-$1,500 for pool, electrical, plumbing permits - includes barrier/fence requirements.</li>
      <li><strong>Solar Panel Installation:</strong> $200-$600 for electrical and structural permits - plus utility interconnection paperwork.</li>
      <li><strong>Garage Addition:</strong> $800-$2,000 for detached garage - similar to room addition but may need separate foundation permit.</li>
    </ul>

    <h3>Additional Permit-Related Costs</h3>
    <ul>
      <li><strong>Plan Review Fees:</strong> 20-50% of permit fee for complex projects - architect/engineer review before permit issuance.</li>
      <li><strong>Inspection Fees:</strong> Usually included in permit cost, but some cities charge $50-$150 per inspection trip.</li>
      <li><strong>Re-Inspection Fees:</strong> $50-$200 if work fails inspection and re-inspection needed - incentive to do it right first time.</li>
      <li><strong>Engineer Stamp:</strong> $300-$1,000 for structural engineer review and stamp on plans - required for complex projects.</li>
      <li><strong>Survey:</strong> $300-$600 for property survey if required for setback verification - often needed for additions, pools.</li>
      <li><strong>Architect Drawings:</strong> $500-$3,000 for permit-ready drawings - some simple projects can use contractor drawings.</li>
      <li><strong>Impact Fees:</strong> $2,000-$10,000+ for new construction or large additions - funds schools, roads, utilities expansion.</li>
      <li><strong>Energy Code Compliance:</strong> $200-$800 for energy calculations and documentation - increasingly required for additions, renovations.</li>
    </ul>

    <h3>Permit Fees by Project Value</h3>
    <ul>
      <li><strong>Under $1,000:</strong> Often exempt from permits or $50-$100 flat fee - minor repairs and maintenance.</li>
      <li><strong>$1,000-$5,000:</strong> $75-$150 permit fee (1.5-3% of value) - small projects like fence, minor electrical.</li>
      <li><strong>$5,000-$15,000:</strong> $150-$400 permit fee (1-2.5%) - bathroom remodel, deck, small addition.</li>
      <li><strong>$15,000-$50,000:</strong> $400-$1,200 permit fee (1-1.5%) - kitchen remodel, large addition, garage.</li>
      <li><strong>$50,000-$150,000:</strong> $1,000-$3,000 permit fee (0.75-1.25%) - major renovation, second story addition.</li>
      <li><strong>Over $150,000:</strong> $2,500-$5,000+ permit fee (0.5-1%) - whole house remodel, new construction.</li>
    </ul>

    <h3>Geographic Variation in Fees</h3>
    <ul>
      <li><strong>Major Cities:</strong> Higher fees in NYC, San Francisco, Los Angeles, Boston - often 2-3x higher than suburbs.</li>
      <li><strong>Suburbs:</strong> Moderate fees, streamlined process - typical $100-$500 for common projects.</li>
      <li><strong>Rural Areas:</strong> Lowest fees, sometimes no permits required - county-level permitting with minimal fees.</li>
      <li><strong>California:</strong> Among highest permit fees nationwide - strict code enforcement, high plan review costs.</li>
      <li><strong>Texas:</strong> Moderate to low fees - varies by county, some rural areas have no building codes.</li>
      <li><strong>Florida:</strong> High fees in coastal areas due to hurricane code requirements - inland areas more moderate.</li>
      <li><strong>Northeast:</strong> Generally higher fees, complex approval process - historic districts add preservation review fees.</li>
    </ul>

    <h3>Work Requiring Permits</h3>
    <ul>
      <li><strong>Always Requires Permit:</strong> New construction, additions, structural changes, moving walls, foundation work.</li>
      <li><strong>Usually Requires Permit:</strong> Deck over 30" high, electrical panel work, new plumbing, HVAC replacement, roofing.</li>
      <li><strong>Sometimes Requires Permit:</strong> Fence, shed over 120 sq ft, window replacement, siding replacement, water heater.</li>
      <li><strong>Rarely Requires Permit:</strong> Paint, carpet, cabinets (no plumbing change), countertops, light fixture replacement.</li>
      <li><strong>Never Requires Permit:</strong> Minor repairs, maintenance, furniture, appliances, carpet cleaning, painting.</li>
    </ul>

    <h3>Benefits of Obtaining Permits</h3>
    <ul>
      <li><strong>Code Compliance:</strong> Ensures work meets safety standards - protects family from fire, structural failure, electrical hazards.</li>
      <li><strong>Resale Protection:</strong> Permitted work documented in public records - buyers confident work done properly.</li>
      <li><strong>Insurance Coverage:</strong> Insurance may deny claims for damage from unpermitted work - major financial risk.</li>
      <li><strong>Financing Qualification:</strong> Unpermitted additions can disqualify homes from FHA/VA financing - limits buyer pool.</li>
      <li><strong>Professional Accountability:</strong> Inspections ensure contractor doing quality work - leverage to demand corrections.</li>
      <li><strong>Peace of Mind:</strong> Sleep well knowing work done safely and legally - no worries about disclosure or liability.</li>
    </ul>

    <h3>Consequences of Skipping Permits</h3>
    <ul>
      <li><strong>Fines & Penalties:</strong> $500-$5,000+ fines if caught - plus retroactive permit fees at 2-3x normal rate.</li>
      <li><strong>Forced Removal:</strong> City can order unpermitted work removed - tear out addition, deck, fence at your expense.</li>
      <li><strong>Insurance Denial:</strong> Insurers deny claims for damage related to unpermitted work - fire, water damage, structural issues.</li>
      <li><strong>Resale Problems:</strong> Must disclose unpermitted work - buyer's lender may refuse financing, require removal or permitting.</li>
      <li><strong>Inspection Red Flags:</strong> Home inspectors note unpermitted work in reports - deals fall apart, renegotiation required.</li>
      <li><strong>Contractor Liability:</strong> Unlicensed contractors doing unpermitted work have no accountability - no recourse for poor work.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Select your project type, enter the estimated project value, indicate your location type (major city, suburb, or rural), and specify if multiple trade permits are needed. The calculator estimates base permit fees, plan review fees, inspection costs, and total permitting costs to help you budget accurately for your construction or renovation project.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'projectValue',
        label: 'Total Project Value ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'projectType',
        label: 'Project Type',
        type: 'select',
        options: [
          { label: 'Minor Repair/Alteration', value: 'minor' },
          { label: 'Bathroom/Kitchen Remodel', value: 'remodel' },
          { label: 'Room Addition', value: 'addition' },
          { label: 'Deck/Porch', value: 'deck' },
          { label: 'Garage/Accessory Structure', value: 'garage' },
          { label: 'Major Renovation', value: 'major' },
          { label: 'New Construction', value: 'new' },
        ],
        defaultValue: 'remodel',
      },
      {
        name: 'locationType',
        label: 'Location Type',
        type: 'select',
        options: [
          { label: 'Major City (High Fees)', value: 'city' },
          { label: 'Suburb (Moderate Fees)', value: 'suburb' },
          { label: 'Rural Area (Low Fees)', value: 'rural' },
        ],
        defaultValue: 'suburb',
      },
      {
        name: 'multiTrade',
        label: 'Multiple Trade Permits Needed',
        type: 'select',
        options: [
          { label: 'Yes (Electrical, Plumbing, Mechanical)', value: 'yes' },
          { label: 'No (Single Permit)', value: 'no' },
        ],
        defaultValue: 'yes',
      },
    ],
    results: [],
    calculate: (values) => {
      const { projectValue, projectType, locationType, multiTrade } = values;
      
      const locationMultipliers = { city: 1.5, suburb: 1.0, rural: 0.6 };
      const locationMultiplier = locationMultipliers[locationType as keyof typeof locationMultipliers];
      
      const projectBaseRates = {
        minor: 0.008,
        remodel: 0.015,
        addition: 0.018,
        deck: 0.012,
        garage: 0.016,
        major: 0.020,
        new: 0.022
      };
      
      const baseRate = projectBaseRates[projectType as keyof typeof projectBaseRates];
      const baseFee = Math.max(100, projectValue * baseRate * locationMultiplier);
      
      const planReviewFee = projectValue > 10000 ? baseFee * 0.3 : 0;
      const multiTradeFee = multiTrade === 'yes' ? 200 * locationMultiplier : 0;
      
      const totalPermitCost = baseFee + planReviewFee + multiTradeFee;
      const percentOfProject = (totalPermitCost / projectValue) * 100;

      return [
        { label: 'Base Permit Fee', value: baseFee.toFixed(2), isCurrency: true },
        { label: 'Plan Review Fee', value: planReviewFee.toFixed(2), isCurrency: true },
        { label: 'Additional Trade Permits', value: multiTradeFee.toFixed(2), isCurrency: true },
        { label: 'Total Estimated Permit Cost', value: totalPermitCost.toFixed(2), isCurrency: true },
        { label: 'Percent of Project Value', value: `${percentOfProject.toFixed(2)}%` },
      ];
    },
  },
};
