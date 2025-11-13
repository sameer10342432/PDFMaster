import { CalculatorContent } from '@/types';

export const LOW_INCOME_HOUSING_TAX_CREDIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Low-Income Housing Tax Credit (LIHTC) Calculator',
  description: 'Calculate 9% and 4% LIHTC credits, eligible basis, qualified allocation plan scoring, and affordable housing project returns.',
  slug: 'low-income-housing-tax-credit-calculator',
  icon: '🏘️',
  category: 'Tax Strategy & Entity Planning',
  metaTitle: 'LIHTC Calculator - Low-Income Housing Tax Credit Analysis Tool',
  metaDescription: 'Free LIHTC calculator. Estimate 9% and 4% tax credits, eligible basis, applicable fraction, credit pricing, and affordable housing returns.',
  article: {
    title: 'Understanding Low-Income Housing Tax Credits (LIHTC)',
    content: `
    <h2>Understanding Low-Income Housing Tax Credits (LIHTC)</h2>
    <p>The Low-Income Housing Tax Credit (LIHTC) program is the federal government's primary mechanism for incentivizing private investment in affordable rental housing. Created by the Tax Reform Act of 1986, LIHTC provides dollar-for-dollar tax credits to developers and investors who build or rehabilitate affordable housing, creating over 3.6 million affordable apartments since inception.</p>
    
    <h3>What is LIHTC?</h3>
    <p>LIHTC provides federal income tax credits over a 10-year period to developers of qualifying affordable rental housing. Key characteristics include:</p>
    <ul>
      <li><strong>Two Credit Types:</strong> 9% credit (new construction without subsidies) and 4% credit (acquisition or with tax-exempt bonds)</li>
      <li><strong>30-Year Compliance:</strong> 15-year initial compliance period plus 15-year extended use period</li>
      <li><strong>Income Restrictions:</strong> Tenants must earn 60% or less of Area Median Income (AMI)</li>
      <li><strong>Rent Limits:</strong> Maximum rents capped at 30% of target AMI level</li>
      <li><strong>State Allocation:</strong> Credits distributed by state housing finance agencies based on Qualified Allocation Plan (QAP)</li>
    </ul>

    <h3>9% vs 4% LIHTC Credits</h3>
    <p>Understanding the difference between credit types:</p>
    <ul>
      <li><strong>9% Credit (Competitive):</strong> Approximately 9% annual credit for 10 years = ~70% present value subsidy</li>
      <li><strong>4% Credit (Non-Competitive):</strong> Approximately 4% annual credit for 10 years = ~30% present value subsidy</li>
      <li><strong>9% Allocation:</strong> Highly competitive, awarded through state QAP process</li>
      <li><strong>4% Availability:</strong> As-of-right when combined with tax-exempt bonds (50%+ bond financing)</li>
      <li><strong>9% Best For:</strong> New construction and deep affordability projects</li>
      <li><strong>4% Best For:</strong> Acquisition/rehab and preservation projects with bond financing</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following to estimate your LIHTC benefits:</p>
    <ul>
      <li><strong>Total Development Cost:</strong> All-in project costs including land, construction, soft costs</li>
      <li><strong>Land Cost:</strong> Land acquisition cost (not included in eligible basis)</li>
      <li><strong>Credit Type:</strong> Select 9% competitive or 4% non-competitive</li>
      <li><strong>Applicable Fraction:</strong> Percentage of units designated as affordable (typically 100%)</li>
      <li><strong>Boost Eligible:</strong> Whether project qualifies for 130% Difficult Development Area (DDA) or Qualified Census Tract (QCT) boost</li>
      <li><strong>Credit Pricing:</strong> Investor price per dollar of credit ($0.85-$1.00)</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Eligible Basis:</strong> Development costs eligible for credits (excludes land)</li>
      <li><strong>Adjusted Basis:</strong> Eligible basis after applying applicable fraction and boost</li>
      <li><strong>Annual Tax Credit:</strong> Yearly credit amount for 10 years</li>
      <li><strong>Total 10-Year Credits:</strong> Sum of all credits over credit period</li>
      <li><strong>Investor Equity Raised:</strong> Capital from tax credit investors</li>
      <li><strong>Developer Gap:</strong> Remaining funds needed after credit equity</li>
      <li><strong>Credit as % of Total Cost:</strong> Subsidy efficiency metric</li>
    </ul>

    <h3>Eligible Basis Calculation</h3>
    <p>Steps to determine qualified basis:</p>
    <ul>
      <li><strong>Step 1:</strong> Total Development Cost</li>
      <li><strong>Step 2:</strong> Subtract ineligible items (land, permanent financing, reserves)</li>
      <li><strong>Step 3:</strong> Result = Eligible Basis</li>
      <li><strong>Step 4:</strong> Multiply by Applicable Fraction (% of affordable units)</li>
      <li><strong>Step 5:</strong> Apply DDA/QCT boost if eligible (130%)</li>
      <li><strong>Step 6:</strong> Result = Qualified Basis</li>
      <li><strong>Step 7:</strong> Multiply by credit percentage (9% or 4%) = Annual Credit</li>
    </ul>

    <h3>Ineligible Basis Items</h3>
    <p>Costs that cannot be included in eligible basis:</p>
    <ul>
      <li>Land acquisition costs</li>
      <li>Permanent financing costs and fees</li>
      <li>Operating reserves and replacement reserves</li>
      <li>Rent-up reserves and lease-up costs</li>
      <li>Syndication costs and legal fees</li>
      <li>Developer fees exceeding state limits (typically capped at 15-18%)</li>
      <li>Historic tax credit basis (if stacking HTC and LIHTC)</li>
    </ul>

    <h3>Income and Rent Restrictions</h3>
    <p>LIHTC projects must meet minimum set-aside requirements:</p>
    <ul>
      <li><strong>20/50 Test:</strong> 20% of units for tenants at 50% AMI or below</li>
      <li><strong>40/60 Test:</strong> 40% of units for tenants at 60% AMI or below (most common)</li>
      <li><strong>Average Income Test:</strong> 40% of units at 60% AMI average (allows mix of 40%, 50%, 60%, 80% AMI units)</li>
      <li><strong>Rent Limits:</strong> Rents cannot exceed 30% of imputed income at target AMI</li>
      <li><strong>Utility Allowances:</strong> Deducted from maximum rent calculation</li>
    </ul>

    <h3>Qualified Allocation Plan (QAP) Criteria</h3>
    <p>States award 9% credits based on competitive scoring. Common QAP priorities:</p>
    <ul>
      <li><strong>Deeper Affordability:</strong> Units serving below 60% AMI (50%, 40%, 30%)</li>
      <li><strong>Location:</strong> High-opportunity areas, near transit, walkable neighborhoods</li>
      <li><strong>Serves Highest Need:</strong> Elderly, homeless, special needs populations</li>
      <li><strong>Preservation:</strong> Rehabilitation of existing affordable housing</li>
      <li><strong>Green Building:</strong> Energy efficiency, LEED certification</li>
      <li><strong>Developer Experience:</strong> Track record of successful LIHTC projects</li>
      <li><strong>Community Support:</strong> Local government resolutions, neighborhood backing</li>
      <li><strong>Readiness to Proceed:</strong> Site control, zoning approvals, financing commitments</li>
    </ul>

    <h3>DDA and QCT Basis Boost</h3>
    <p>Eligible projects can receive 30% increase in qualified basis:</p>
    <ul>
      <li><strong>Difficult Development Area (DDA):</strong> High-cost markets where construction costs exceed national average by 120%</li>
      <li><strong>Qualified Census Tract (QCT):</strong> Low-income areas where 50%+ of households earn below 60% AMI</li>
      <li><strong>Boost Benefit:</strong> Increases credits by 30% (e.g., 9% becomes 11.7%)</li>
      <li><strong>HUD Designation:</strong> DDA and QCT areas published annually by HUD</li>
      <li><strong>Strategic Value:</strong> Boost can make marginal projects financially feasible</li>
    </ul>

    <h3>Tax Credit Syndication</h3>
    <p>How developers raise equity from credits:</p>
    <ul>
      <li><strong>Partnership Flip Structure:</strong> Investor becomes 99.99% partner for tax benefits, flips to 0.01% after 15 years</li>
      <li><strong>Credit Pricing:</strong> Investors pay $0.85-$1.00 per dollar of credit depending on market conditions</li>
      <li><strong>Syndicators:</strong> National and regional firms connect developers with investors (Boston Capital, Enterprise, PNC, WNC)</li>
      <li><strong>Timing:</strong> Equity delivered in installments tied to construction milestones</li>
      <li><strong>Fees:</strong> Syndication costs typically 8-12% of equity raised</li>
    </ul>

    <h3>Compliance Requirements</h3>
    <p>LIHTC projects must meet strict ongoing requirements:</p>
    <ul>
      <li><strong>15-Year Compliance Period:</strong> Maintain affordability and income requirements</li>
      <li><strong>Annual Certifications:</strong> Submit tenant income certifications and rent rolls to state agency</li>
      <li><strong>Physical Inspections:</strong> Periodic property condition assessments</li>
      <li><strong>Extended Use Period:</strong> Additional 15 years (total 30 years) of affordability commitment</li>
      <li><strong>Recapture Risk:</strong> Non-compliance triggers credit recapture plus interest</li>
      <li><strong>Qualified Contract:</strong> Right to exit program after year 14 if buyer not found</li>
    </ul>

    <h3>Combining LIHTC with Other Incentives</h3>
    <ul>
      <li><strong>Historic Tax Credits:</strong> Can layer on eligible historic buildings (reduce HTC eligible basis by LIHTC)</li>
      <li><strong>Tax-Exempt Bonds:</strong> Required for 4% credit, provides low-cost debt</li>
      <li><strong>HOME Funds:</strong> Federal affordable housing grants from HUD</li>
      <li><strong>State Trust Funds:</strong> State housing trust fund gap financing</li>
      <li><strong>Local Subsidies:</strong> Fee waivers, land donations, property tax abatements</li>
      <li><strong>Energy Incentives:</strong> Utility rebates and renewable energy credits</li>
    </ul>

    <h3>Advantages of LIHTC</h3>
    <ul>
      <li>Largest source of affordable housing equity (30-70% of project cost)</li>
      <li>Proven track record with strong investor demand</li>
      <li>Creates new affordable housing supply in high-cost markets</li>
      <li>30-year affordability commitment ensures long-term community benefit</li>
      <li>Can be combined with other subsidies for deep affordability</li>
    </ul>

    <h3>Challenges and Risks</h3>
    <ul>
      <li>Highly competitive 9% allocation process (1 in 3-4 applications funded)</li>
      <li>Complex regulations and compliance requirements increase costs</li>
      <li>Income and rent restrictions limit revenue potential</li>
      <li>30-year affordability commitment reduces exit options</li>
      <li>Cost certification requirements add $50K-$100K in fees</li>
      <li>Syndication process takes 12-18 months from allocation to equity delivery</li>
    </ul>

    <h3>Typical LIHTC Project Timeline</h3>
    <ul>
      <li><strong>Months 1-6:</strong> Site control, feasibility, pre-development</li>
      <li><strong>Months 7-12:</strong> QAP application preparation and submission</li>
      <li><strong>Months 13-15:</strong> Credit award and carryover allocation</li>
      <li><strong>Months 16-24:</strong> Syndication, financing closing, construction start</li>
      <li><strong>Months 25-36:</strong> Construction and lease-up</li>
      <li><strong>Month 37+:</strong> Stabilization, final cost cert, IRS Form 8609</li>
      <li><strong>Years 2-15:</strong> Compliance period with investor ownership</li>
      <li><strong>Year 15-16:</strong> Partnership flip, developer regains control</li>
    </ul>

    <h3>Best Practices for Developers</h3>
    <ul>
      <li>Study state QAP thoroughly and tailor application to scoring priorities</li>
      <li>Secure strong site in high-opportunity area with community support</li>
      <li>Build experienced development team with LIHTC track record</li>
      <li>Obtain financing commitments and site control before applying</li>
      <li>Budget conservatively for construction and soft costs</li>
      <li>Engage LIHTC attorney and accountant early in process</li>
      <li>Develop relationships with syndicators before credit award</li>
      <li>Plan for compliance from inception, not as afterthought</li>
    </ul>

    <h3>Financial Pro Forma Considerations</h3>
    <ul>
      <li>Model multiple years of operations to ensure long-term viability</li>
      <li>Factor in below-market rents and operating cost increases</li>
      <li>Include reserves for replacements (typically $300-$400/unit/year)</li>
      <li>Account for debt service coverage ratios required by lenders (1.15-1.25x)</li>
      <li>Plan for partnership management fees and asset management</li>
      <li>Consider exit strategy and partnership flip implications</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalDevCost',
        label: 'Total Development Cost',
        type: 'number',
        defaultValue: 15000000,
      },
      {
        name: 'landCost',
        label: 'Land Cost',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'creditType',
        label: 'Credit Type',
        type: 'select',
        options: [
          { value: '9', label: '9% Competitive' },
          { value: '4', label: '4% Non-Competitive' },
        ],
        defaultValue: '9',
      },
      {
        name: 'applicableFraction',
        label: 'Applicable Fraction (%)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'boostEligible',
        label: 'DDA/QCT Boost Eligible',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes (130% Boost)' },
          { value: 'no', label: 'No Boost' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'creditPricing',
        label: 'Credit Pricing ($ per $1 credit)',
        type: 'number',
        defaultValue: 0.92,
      },
    ],
    results: [
      { label: 'Eligible Basis', isCurrency: true },
      { label: 'Qualified Basis (After Fraction & Boost)', isCurrency: true },
      { label: 'Annual Tax Credit', isCurrency: true },
      { label: 'Total 10-Year Credits', isCurrency: true },
      { label: 'Investor Equity Raised', isCurrency: true },
      { label: 'Equity as % of Total Cost', isPercentage: true },
      { label: 'Remaining Gap to Fill', isCurrency: true },
    ],
    calculate: (values) => {
      const { totalDevCost, landCost, creditType, applicableFraction, boostEligible, creditPricing } = values;
      
      const eligibleBasis = totalDevCost - landCost;
      const fraction = applicableFraction / 100;
      const boost = boostEligible === 'yes' ? 1.30 : 1.00;
      const creditRate = creditType === '9' ? 0.09 : 0.04;
      
      const qualifiedBasis = eligibleBasis * fraction * boost;
      const annualCredit = qualifiedBasis * creditRate;
      const total10YearCredits = annualCredit * 10;
      const investorEquity = total10YearCredits * creditPricing;
      const equityPercentage = (investorEquity / totalDevCost) * 100;
      const gap = totalDevCost - investorEquity;

      return [
        { label: 'Eligible Basis', value: eligibleBasis.toFixed(2), isCurrency: true },
        { label: 'Qualified Basis (After Fraction & Boost)', value: qualifiedBasis.toFixed(2), isCurrency: true },
        { label: 'Annual Tax Credit', value: annualCredit.toFixed(2), isCurrency: true },
        { label: 'Total 10-Year Credits', value: total10YearCredits.toFixed(2), isCurrency: true },
        { label: 'Investor Equity Raised', value: investorEquity.toFixed(2), isCurrency: true },
        { label: 'Equity as % of Total Cost', value: equityPercentage.toFixed(2), isPercentage: true },
        { label: 'Remaining Gap to Fill', value: gap.toFixed(2), isCurrency: true },
      ];
    },
  },
};
