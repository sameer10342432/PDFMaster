import { CalculatorContent } from '@/types';

export const HISTORIC_TAX_CREDIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Historic Tax Credit (HTC) Benefit Calculator',
  description: 'Calculate federal and state historic preservation tax credits, qualified rehabilitation expenditures, and total project benefits.',
  slug: 'historic-tax-credit-calculator',
  icon: '🏛️',
  category: 'Tax Strategy & Entity Planning',
  metaTitle: 'Historic Tax Credit Calculator - Federal & State HTC Benefits',
  metaDescription: 'Free Historic Tax Credit calculator. Estimate 20% federal tax credits, state incentives, qualified rehabilitation costs, and total HTC project value.',
  article: {
    title: 'Understanding Historic Preservation Tax Credits (HTC)',
    content: `
    <h2>Understanding Historic Preservation Tax Credits (HTC)</h2>
    <p>The Federal Historic Preservation Tax Credit Program provides a 20% tax credit for the rehabilitation of historic buildings. Combined with state credits, developers can receive tax incentives worth 20-45% of qualified rehabilitation expenditures, making preservation projects financially viable and competitive with new construction.</p>
    
    <h3>What Are Historic Tax Credits?</h3>
    <p>Historic Tax Credits (HTC) are federal and state incentives that reward property owners for rehabilitating historic buildings. Key features include:</p>
    <ul>
      <li><strong>20% Federal Credit:</strong> Credit against federal income taxes for qualified rehabilitation costs</li>
      <li><strong>Income-Producing Requirement:</strong> Building must be used for commercial, industrial, agricultural, or rental residential purposes</li>
      <li><strong>Substantial Rehabilitation:</strong> Costs must exceed greater of $5,000 or adjusted basis in building</li>
      <li><strong>24-Month Test:</strong> Rehabilitation work must meet cost test within 24-month period (or 60 months for phased projects)</li>
      <li><strong>State Credits:</strong> Many states offer additional 20-30% credits that can be combined with federal credit</li>
    </ul>

    <h3>Eligibility Requirements</h3>
    <p>To qualify for the 20% federal credit, your project must meet these criteria:</p>
    <ul>
      <li><strong>Listed Building:</strong> Property must be listed individually in National Register or located in registered historic district and certified as contributing</li>
      <li><strong>Substantial Rehabilitation:</strong> Qualified costs exceed adjusted basis of building (excluding land)</li>
      <li><strong>Income-Producing:</strong> Cannot be owner's primary residence; must generate income</li>
      <li><strong>Secretary's Standards:</strong> Rehabilitation must comply with Secretary of Interior's Standards for Rehabilitation</li>
      <li><strong>External Walls Retained:</strong> At least 50% of existing external walls must remain in place as external walls</li>
      <li><strong>Internal Structure:</strong> At least 75% of existing internal structural framework must be retained</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to estimate your HTC benefits:</p>
    <ul>
      <li><strong>Building Purchase Price:</strong> Acquisition cost of historic property</li>
      <li><strong>Land Value:</strong> Value attributed to land (not eligible for credits)</li>
      <li><strong>Qualified Rehabilitation Costs:</strong> Eligible expenses for historic rehabilitation</li>
      <li><strong>Non-Qualified Costs:</strong> Ineligible expenses (new additions, land, personal property)</li>
      <li><strong>State Tax Credit Rate:</strong> Additional state historic tax credit percentage (if applicable)</li>
      <li><strong>Federal Tax Rate:</strong> Your marginal federal income tax rate</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total Project Cost:</strong> Sum of acquisition and all rehabilitation costs</li>
      <li><strong>Building Adjusted Basis:</strong> Depreciable building value before rehabilitation</li>
      <li><strong>Federal HTC (20%):</strong> Federal historic tax credit amount</li>
      <li><strong>State HTC:</strong> State historic preservation tax credit (if applicable)</li>
      <li><strong>Total Tax Credits:</strong> Combined federal and state benefits</li>
      <li><strong>Net Project Cost:</strong> Total cost after tax credit benefits</li>
      <li><strong>Effective Credit Rate:</strong> Total credits as percentage of qualified costs</li>
    </ul>

    <h3>Qualified Rehabilitation Expenditures (QREs)</h3>
    <p>Eligible costs that qualify for the credit include:</p>
    <ul>
      <li><strong>Structural Components:</strong> Walls, floors, roofs, windows, doors, stairs</li>
      <li><strong>HVAC Systems:</strong> Heating, ventilation, and air conditioning</li>
      <li><strong>Plumbing:</strong> Pipes, fixtures, water systems</li>
      <li><strong>Electrical:</strong> Wiring, panels, lighting systems</li>
      <li><strong>Interior Finishes:</strong> Historic millwork, plaster, flooring restoration</li>
      <li><strong>Elevator Installation:</strong> New elevators for accessibility</li>
      <li><strong>Fire Protection:</strong> Sprinklers and fire safety systems</li>
      <li><strong>Architectural Fees:</strong> Design fees related to qualified work</li>
      <li><strong>Engineering Costs:</strong> Structural and MEP engineering</li>
    </ul>

    <h3>Non-Qualified Expenditures</h3>
    <p>Costs that do NOT qualify for credits:</p>
    <ul>
      <li>Land acquisition costs</li>
      <li>New building additions (unless integrated historic design)</li>
      <li>Movable personal property (furniture, equipment)</li>
      <li>Parking lot and sidewalk construction</li>
      <li>Landscaping and site work</li>
      <li>Financing and legal fees</li>
      <li>Building acquisition costs (separate from rehabilitation)</li>
      <li>Developer fees not directly related to construction</li>
    </ul>

    <h3>Application Process</h3>
    <p>Three-part NPS (National Park Service) approval process:</p>
    <ul>
      <li><strong>Part 1 - Building Evaluation:</strong> Confirms building is historic and contributes to district</li>
      <li><strong>Part 2 - Description of Rehabilitation:</strong> Submit plans before work begins for pre-approval</li>
      <li><strong>Part 3 - Request for Certification:</strong> Submit after completion with photos and final cost documentation</li>
      <li><strong>Timeline:</strong> NPS has 30 days to review Part 1, 60 days for Parts 2 and 3</li>
      <li><strong>State SHPO:</strong> State Historic Preservation Officer reviews before federal NPS review</li>
    </ul>

    <h3>Secretary of Interior's Standards</h3>
    <p>10 Standards for Rehabilitation that guide all HTC projects:</p>
    <ul>
      <li>Property shall be used for its historic purpose or compatible new use</li>
      <li>Historic character shall be retained and preserved</li>
      <li>Each property shall be recognized as physical record of its time</li>
      <li>Changes that create false historical appearance are not allowed</li>
      <li>Distinctive features, finishes, and examples of craftsmanship shall be preserved</li>
      <li>Deteriorated features shall be repaired rather than replaced when possible</li>
      <li>Chemical or physical treatments shall not damage historic materials</li>
      <li>Significant archaeological resources shall be protected and preserved</li>
      <li>New additions, exterior alterations, or related new construction shall be compatible</li>
      <li>New work shall be differentiated and reversible</li>
    </ul>

    <h3>State Historic Tax Credit Programs</h3>
    <p>Many states offer additional incentives that can be combined with federal credit:</p>
    <ul>
      <li><strong>High-Value States (25-30% credit):</strong> Rhode Island (30%), Louisiana (25%), Massachusetts (20%)</li>
      <li><strong>Moderate States (20-25%):</strong> Virginia (25%), Missouri (25%), Ohio (25%)</li>
      <li><strong>Standard States (10-20%):</strong> New York (20%), Georgia (25%), Texas (25%)</li>
      <li><strong>Transferable Credits:</strong> Some states allow credit sales to investors</li>
      <li><strong>Refundable Credits:</strong> A few states provide cash refunds for unused credits</li>
      <li><strong>Residential Inclusion:</strong> Some states include owner-occupied homes (federal does not)</li>
    </ul>

    <h3>Combining HTC with Other Incentives</h3>
    <ul>
      <li><strong>Low-Income Housing Tax Credits (LIHTC):</strong> Can combine on affordable housing projects</li>
      <li><strong>New Markets Tax Credits (NMTC):</strong> Stackable in qualified census tracts</li>
      <li><strong>Opportunity Zones:</strong> Can layer OZ benefits with HTC</li>
      <li><strong>State Historic Easements:</strong> Charitable deduction for facade easement</li>
      <li><strong>Energy Incentives:</strong> Federal and state energy efficiency tax credits</li>
    </ul>

    <h3>Financial Structuring</h3>
    <p>Maximizing HTC value through proper structure:</p>
    <ul>
      <li><strong>Partnership Flip:</strong> Investor contributes capital for 99% of credits, then flips to 5% at stabilization</li>
      <li><strong>Credit Pricing:</strong> Investors typically pay $0.85-$0.95 per dollar of credit</li>
      <li><strong>Recapture Risk:</strong> Credits recaptured if property sold within 5 years (20% per year)</li>
      <li><strong>Basis Reduction:</strong> Depreciable basis reduced by amount of credit claimed</li>
      <li><strong>Passive Activity Rules:</strong> Credits offset passive income only (with exceptions for real estate professionals)</li>
    </ul>

    <h3>Common HTC Project Types</h3>
    <ul>
      <li><strong>Adaptive Reuse Hotels:</strong> Converting warehouses, schools, and office buildings to boutique hotels</li>
      <li><strong>Market-Rate Apartments:</strong> Historic buildings converted to luxury residential</li>
      <li><strong>Affordable Housing:</strong> Combined HTC/LIHTC projects in historic structures</li>
      <li><strong>Mixed-Use Developments:</strong> Retail, office, and residential in historic downtown buildings</li>
      <li><strong>Commercial Office:</strong> Rehabilitation of historic office buildings and headquarters</li>
      <li><strong>Industrial Conversions:</strong> Mills, factories, and warehouses to creative office/residential</li>
    </ul>

    <h3>Advantages of HTC Projects</h3>
    <ul>
      <li>Substantial tax credits reduce effective project costs by 20-45%</li>
      <li>Historic buildings often have superior construction quality and character</li>
      <li>Prime urban locations in established neighborhoods</li>
      <li>Community support for preservation projects</li>
      <li>Marketing advantage from unique historic character</li>
      <li>Contributes to neighborhood revitalization and placemaking</li>
    </ul>

    <h3>Challenges and Risks</h3>
    <ul>
      <li>Strict compliance with Secretary's Standards limits design flexibility</li>
      <li>NPS approval process adds 3-6 months to project timeline</li>
      <li>Unforeseen conditions common in old buildings increase costs</li>
      <li>Higher construction costs due to specialized preservation methods</li>
      <li>Five-year holding period requirement to avoid recapture</li>
      <li>Substantial rehabilitation test can be difficult to meet</li>
      <li>Limited availability of experienced HTC contractors and consultants</li>
    </ul>

    <h3>Cost Management Strategies</h3>
    <ul>
      <li>Engage HTC consultant early in design to maximize qualified costs</li>
      <li>Allocate costs properly between qualified rehabilitation and non-qualified items</li>
      <li>Submit Part 2 application before starting work to avoid compliance issues</li>
      <li>Use repair rather than replacement where Standards allow</li>
      <li>Separate building acquisition costs from rehabilitation in accounting</li>
      <li>Consider phased approach if 24-month test is difficult to meet</li>
    </ul>

    <h3>Due Diligence for HTC Investors</h3>
    <ul>
      <li>Verify building's National Register listing or contributing status</li>
      <li>Review architect's plans for Standards compliance</li>
      <li>Confirm project meets substantial rehabilitation test</li>
      <li>Analyze developer's experience with HTC projects</li>
      <li>Review cost allocation between qualified and non-qualified</li>
      <li>Ensure adequate reserves for cost overruns</li>
      <li>Confirm 5-year hold strategy to avoid recapture</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Hire architect with HTC experience from beginning</li>
      <li>Engage with SHPO and NPS early for informal guidance</li>
      <li>Budget conservatively for historic rehabilitation costs</li>
      <li>Document all work with photos before, during, and after</li>
      <li>Keep detailed cost records separating qualified vs. non-qualified</li>
      <li>Build contingency for unexpected conditions (15-20%)</li>
      <li>Consider energy efficiency upgrades compatible with Standards</li>
      <li>Explore combining multiple tax credit programs</li>
    </ul>

    <h3>Recent Program Changes</h3>
    <ul>
      <li>2017 Tax Cuts and Jobs Act changed credit from 20% in year 1 to 20% spread over 5 years</li>
      <li>COVID-19 relief temporarily allowed 20% credit in year placed in service</li>
      <li>Inflation Reduction Act 2022 restored 20% first-year credit for small projects (under $2.5M)</li>
      <li>Increased scrutiny on cost allocations and basis calculations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Building Purchase Price',
        type: 'number',
        defaultValue: 1000000,
      },
      {
        name: 'landValue',
        label: 'Land Value',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'qualifiedRehab',
        label: 'Qualified Rehabilitation Costs',
        type: 'number',
        defaultValue: 3000000,
      },
      {
        name: 'nonQualifiedCosts',
        label: 'Non-Qualified Costs',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'stateCreditRate',
        label: 'State Tax Credit Rate (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'federalTaxRate',
        label: 'Federal Tax Rate (%)',
        type: 'number',
        defaultValue: 35,
      },
    ],
    results: [
      { label: 'Building Adjusted Basis', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Federal HTC (20%)', isCurrency: true },
      { label: 'State HTC', isCurrency: true },
      { label: 'Total Tax Credits', isCurrency: true },
      { label: 'Net Project Cost After Credits', isCurrency: true },
      { label: 'Effective Credit Rate', isPercentage: true },
      { label: 'Meets Substantial Rehabilitation Test?', isCurrency: false },
    ],
    calculate: (values) => {
      const { purchasePrice, landValue, qualifiedRehab, nonQualifiedCosts, stateCreditRate, federalTaxRate } = values;
      
      const buildingBasis = purchasePrice - landValue;
      const totalProjectCost = purchasePrice + qualifiedRehab + nonQualifiedCosts;
      
      const federalCredit = qualifiedRehab * 0.20;
      const stateCredit = qualifiedRehab * (stateCreditRate / 100);
      const totalCredits = federalCredit + stateCredit;
      
      const netProjectCost = totalProjectCost - totalCredits;
      const effectiveRate = (totalCredits / qualifiedRehab) * 100;
      
      const meetsTest = qualifiedRehab > Math.max(5000, buildingBasis) ? '✅ Yes' : '❌ No';

      return [
        { label: 'Building Adjusted Basis', value: buildingBasis.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Federal HTC (20%)', value: federalCredit.toFixed(2), isCurrency: true },
        { label: 'State HTC', value: stateCredit.toFixed(2), isCurrency: true },
        { label: 'Total Tax Credits', value: totalCredits.toFixed(2), isCurrency: true },
        { label: 'Net Project Cost After Credits', value: netProjectCost.toFixed(2), isCurrency: true },
        { label: 'Effective Credit Rate', value: effectiveRate.toFixed(2), isPercentage: true },
        { label: 'Meets Substantial Rehabilitation Test?', value: meetsTest, isCurrency: false },
      ];
    },
  },
};
