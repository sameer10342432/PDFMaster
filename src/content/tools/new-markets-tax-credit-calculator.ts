import { CalculatorContent } from '@/types';

export const NEW_MARKETS_TAX_CREDIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Markets Tax Credit (NMTC) Calculator',
  description: 'Calculate NMTC allocation benefits, qualified equity investment, and total credit value for community development projects.',
  slug: 'new-markets-tax-credit-calculator',
  icon: '🏗️',
  category: 'Tax Strategy & Entity Planning',
  metaTitle: 'NMTC Calculator - New Markets Tax Credit Analysis & Benefits',
  metaDescription: 'Free New Markets Tax Credit calculator. Estimate 39% total credits, QEI leverage, community development benefits, and NMTC investor returns.',
  article: {
    title: 'Understanding New Markets Tax Credits (NMTC)',
    content: `
    <h2>Understanding New Markets Tax Credits (NMTC)</h2>
    <p>The New Markets Tax Credit (NMTC) Program was established by Congress in 2000 to stimulate private investment and economic development in low-income urban and rural communities. The program provides a 39% tax credit over seven years to investors who make qualified equity investments (QEIs) in designated Community Development Entities (CDEs) that serve these distressed areas.</p>
    
    <h3>What is NMTC?</h3>
    <p>NMTC incentivizes investment in low-income communities through tax credits. Key features include:</p>
    <ul>
      <li><strong>39% Total Credit:</strong> 5% in years 1-3, then 6% in years 4-7 (total 39% of QEI)</li>
      <li><strong>7-Year Credit Period:</strong> Credits claimed annually over seven years</li>
      <li><strong>Community Development Entities:</strong> Credits allocated to certified CDEs who deploy capital</li>
      <li><strong>Low-Income Communities:</strong> Investments must occur in qualifying distressed areas</li>
      <li><strong>Competitive Allocation:</strong> Limited annual allocation awarded through competitive CDFI Fund process</li>
      <li><strong>Leverage Structure:</strong> Complex structure with investment fund and leverage lender</li>
    </ul>

    <h3>NMTC Structure and Mechanics</h3>
    <p>Typical NMTC transaction structure:</p>
    <ul>
      <li><strong>Step 1:</strong> Investor makes Qualified Equity Investment (QEI) in Investment Fund</li>
      <li><strong>Step 2:</strong> Investment Fund contributes QEI to Community Development Entity (CDE)</li>
      <li><strong>Step 3:</strong> CDE makes Qualified Low-Income Community Investment (QLICI) loan to operating business</li>
      <li><strong>Step 4:</strong> Leverage lender provides additional loan to Investment Fund (typically equal to QEI)</li>
      <li><strong>Step 5:</strong> Investor receives tax credits over 7 years while CDE loan is outstanding</li>
      <li><strong>Step 6:</strong> Year 7 unwind: operating business pays off CDE loan, structure unwinds</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to estimate NMTC benefits:</p>
    <ul>
      <li><strong>Total Project Cost:</strong> All-in project costs for business or real estate</li>
      <li><strong>NMTC Allocation Amount:</strong> CDE allocation available for project</li>
      <li><strong>Qualified Equity Investment:</strong> Investor equity contribution</li>
      <li><strong>Leverage Loan Amount:</strong> Bank loan to Investment Fund</li>
      <li><strong>CDE Loan Interest Rate:</strong> Rate charged by CDE to operating business</li>
      <li><strong>Leverage Loan Rate:</strong> Rate on leverage loan from bank</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total NMTC Credits (39%):</strong> Total credits over 7 years</li>
      <li><strong>Annual Credits Years 1-3:</strong> 5% of QEI per year</li>
      <li><strong>Annual Credits Years 4-7:</strong> 6% of QEI per year</li>
      <li><strong>Total QLICI Loan:</strong> Amount loaned to operating business</li>
      <li><strong>Investor Net Benefit:</strong> Credits minus equity investment</li>
      <li><strong>Effective Subsidy Rate:</strong> Net benefit as % of project cost</li>
      <li><strong>Credit as % of Project Cost:</strong> Credits relative to total cost</li>
    </ul>

    <h3>Eligible Low-Income Communities</h3>
    <p>Projects must be located in qualified areas:</p>
    <ul>
      <li><strong>Census Tract Poverty Rate:</strong> 20% or higher poverty rate</li>
      <li><strong>Median Income Test:</strong> Median family income ≤ 80% of area median</li>
      <li><strong>HUD Designation:</strong> Areas designated by HUD as low-income</li>
      <li><strong>Rural Areas:</strong> Population under 20,000 with additional distress criteria</li>
      <li><strong>Targeted Populations:</strong> Includes individuals from low-income backgrounds</li>
    </ul>

    <h3>Community Development Entities (CDEs)</h3>
    <p>CDEs are the allocatees and deployers of NMTC capital:</p>
    <ul>
      <li><strong>Certification Required:</strong> Must be certified by CDFI Fund</li>
      <li><strong>Mission:</strong> Primary mission of serving low-income communities</li>
      <li><strong>Accountability:</strong> Governing board maintains accountability to low-income community</li>
      <li><strong>Allocation Awards:</strong> CDEs compete for limited annual NMTC allocation</li>
      <li><strong>Deployment:</strong> Must deploy 85% of QEIs to QLICIs within 3 years</li>
      <li><strong>Types:</strong> National funds, regional funds, local development corporations</li>
    </ul>

    <h3>Qualified Low-Income Community Investments (QLICIs)</h3>
    <p>CDEs must use QEI proceeds for qualifying investments:</p>
    <ul>
      <li><strong>Business Loans:</strong> Loans to businesses operating in low-income communities</li>
      <li><strong>Equity Investments:</strong> Stock purchases in qualified businesses</li>
      <li><strong>Real Estate:</strong> Commercial, industrial, mixed-use development</li>
      <li><strong>Community Facilities:</strong> Charter schools, health clinics, community centers</li>
      <li><strong>Small Business:</strong> Manufacturing, retail, services creating jobs</li>
    </ul>

    <h3>Ineligible Businesses and Activities</h3>
    <p>NMTC cannot be used for:</p>
    <ul>
      <li>Rental residential housing (except mixed-use with substantial commercial)</li>
      <li>Private golf courses, country clubs, racetracks</li>
      <li>Liquor stores, massage parlors, hot tub facilities</li>
      <li>Suntan facilities, gambling facilities</li>
      <li>Farming businesses (with certain exceptions)</li>
      <li>Businesses with significant political activity</li>
    </ul>

    <h3>NMTC Allocation Process</h3>
    <p>How CDEs obtain allocation authority:</p>
    <ul>
      <li><strong>Annual Application:</strong> CDEs apply to CDFI Fund for allocation</li>
      <li><strong>Competitive Scoring:</strong> Based on business strategy, capitalization, management, community impact</li>
      <li><strong>Allocation Announcement:</strong> Awards announced annually (typically $3-5 billion total)</li>
      <li><strong>Deployment Period:</strong> 5-year period to raise QEIs and deploy to QLICIs</li>
      <li><strong>Success Rate:</strong> Approximately 20-30% of applications receive awards</li>
    </ul>

    <h3>Leverage and Unwind Structure</h3>
    <p>Understanding the financing structure:</p>
    <ul>
      <li><strong>1:1 Leverage Ratio:</strong> Most common structure uses equal QEI and leverage loan</li>
      <li><strong>Leverage Source:</strong> Bank loan to Investment Fund at market rates</li>
      <li><strong>Operating Business Loan:</strong> Combined QEI + Leverage loaned at below-market rate</li>
      <li><strong>7-Year Hold:</strong> Structure must remain in place for 7 years to avoid recapture</li>
      <li><strong>Unwind Mechanics:</strong> At year 7, operating business pays off QLICI, Investment Fund pays leverage loan</li>
      <li><strong>Put/Call Options:</strong> Operating business or sponsor typically has option to purchase investor interest</li>
    </ul>

    <h3>Combining NMTC with Other Incentives</h3>
    <ul>
      <li><strong>Historic Tax Credits:</strong> Can stack on eligible historic building projects</li>
      <li><strong>LIHTC:</strong> Affordable housing projects can combine both programs</li>
      <li><strong>Opportunity Zones:</strong> Some overlap in eligible areas, can layer benefits</li>
      <li><strong>State Tax Credits:</strong> Many states offer complementary credit programs</li>
      <li><strong>TIF and Other Local Incentives:</strong> Tax increment financing, property tax abatements</li>
      <li><strong>Federal Grants:</strong> EDA, HUD, USDA grants can provide gap funding</li>
    </ul>

    <h3>Advantages of NMTC</h3>
    <ul>
      <li>Provides 39% subsidy to project, significantly reducing financing costs</li>
      <li>Enables projects in distressed areas that otherwise wouldn't be feasible</li>
      <li>Flexible use: real estate, equipment, working capital</li>
      <li>Below-market interest rates on QLICI loans</li>
      <li>Supports job creation and economic development</li>
      <li>Can be combined with other tax credit programs</li>
    </ul>

    <h3>Challenges and Risks</h3>
    <ul>
      <li>Extremely complex transaction structure requiring specialized expertise</li>
      <li>High transaction costs ($200K-$500K in legal, accounting, consulting fees)</li>
      <li>Minimum project size typically $5-10 million to justify costs</li>
      <li>7-year compliance period with recapture risk</li>
      <li>Limited annual allocation creates scarcity and competition</li>
      <li>Extensive documentation and reporting requirements</li>
      <li>Must locate in qualifying low-income census tract</li>
    </ul>

    <h3>Typical NMTC Project Types</h3>
    <ul>
      <li><strong>Community Facilities:</strong> Charter schools, healthcare clinics, community centers</li>
      <li><strong>Manufacturing:</strong> Food processing, industrial facilities creating jobs</li>
      <li><strong>Mixed-Use Development:</strong> Urban mixed-use with retail, office, and some residential</li>
      <li><strong>Grocery Stores:</strong> Supermarkets in food deserts</li>
      <li><strong>Small Business:</strong> Manufacturing, technology, services in distressed areas</li>
      <li><strong>Arts and Culture:</strong> Theaters, museums, cultural facilities</li>
    </ul>

    <h3>Transaction Costs and Fees</h3>
    <ul>
      <li><strong>Legal Fees:</strong> $100K-$300K for complex deal structuring</li>
      <li><strong>Accounting/Tax:</strong> $50K-$100K for opinions and compliance</li>
      <li><strong>CDE Fees:</strong> 2-5% of allocation for origination and closing</li>
      <li><strong>Asset Management:</strong> Annual fees for ongoing compliance (0.5-1.5% of loan)</li>
      <li><strong>Consultant Fees:</strong> NMTC specialists charge $50K-$150K</li>
      <li><strong>Investor Costs:</strong> Credit pricing at $0.75-$0.85 per dollar of credit</li>
    </ul>

    <h3>Due Diligence for NMTC Projects</h3>
    <ul>
      <li>Confirm project location in eligible low-income census tract</li>
      <li>Verify project size justifies transaction costs (typically $5M minimum)</li>
      <li>Ensure operating business is viable and can service debt</li>
      <li>Review CDE's track record and allocation authority</li>
      <li>Model cash flows including QLICI loan terms and unwind</li>
      <li>Plan for 7-year hold period and exit strategy</li>
      <li>Engage experienced NMTC attorney and accountant early</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Engage NMTC specialists early in project feasibility stage</li>
      <li>Build 18-24 month timeline from CDE identification to closing</li>
      <li>Budget realistically for substantial transaction costs</li>
      <li>Identify multiple CDE partners to ensure allocation availability</li>
      <li>Understand unwind mechanics and plan exit strategy</li>
      <li>Maintain detailed compliance documentation throughout 7 years</li>
      <li>Consider stacking multiple credit programs to maximize subsidy</li>
      <li>Ensure project creates measurable community benefit (jobs, services)</li>
    </ul>

    <h3>Reporting and Compliance</h3>
    <ul>
      <li>Annual reporting to CDE and CDFI Fund</li>
      <li>Community impact metrics: jobs created, services provided</li>
      <li>Financial statements and rent rolls (for real estate)</li>
      <li>Certification of continued low-income community location</li>
      <li>7-year substantially all test (85% of CDE assets must remain QLICIs)</li>
    </ul>

    <h3>Recent Program Updates</h3>
    <ul>
      <li>Program extended through 2025 with $5 billion annual allocation</li>
      <li>Increased flexibility for COVID-19 impacted projects</li>
      <li>Enhanced focus on persistent poverty counties</li>
      <li>Streamlined reporting requirements for smaller transactions</li>
      <li>Growing use in Opportunity Zones for layered benefits</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'projectCost',
        label: 'Total Project Cost',
        type: 'number',
        defaultValue: 10000000,
      },
      {
        name: 'qeiAmount',
        label: 'Qualified Equity Investment (QEI)',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'leverageLoan',
        label: 'Leverage Loan Amount',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'cdeLoanRate',
        label: 'CDE Loan Interest Rate (%)',
        type: 'number',
        defaultValue: 2.5,
      },
      {
        name: 'leverageRate',
        label: 'Leverage Loan Rate (%)',
        type: 'number',
        defaultValue: 5.0,
      },
      {
        name: 'creditPricing',
        label: 'Credit Pricing ($ per $1 credit)',
        type: 'number',
        defaultValue: 0.80,
      },
    ],
    results: [
      { label: 'Total QLICI Loan to Business', isCurrency: true },
      { label: 'Total NMTC Credits (39%)', isCurrency: true },
      { label: 'Annual Credits Years 1-3 (5%)', isCurrency: true },
      { label: 'Annual Credits Years 4-7 (6%)', isCurrency: true },
      { label: 'Investor Benefit (Credits - QEI)', isCurrency: true },
      { label: 'Credits as % of Project Cost', isPercentage: true },
      { label: 'Effective Interest Rate Savings', isPercentage: true },
    ],
    calculate: (values) => {
      const { projectCost, qeiAmount, leverageLoan, cdeLoanRate, leverageRate, creditPricing } = values;
      
      const totalQLICI = qeiAmount + leverageLoan;
      const totalCredits = qeiAmount * 0.39;
      const credits1to3 = qeiAmount * 0.05;
      const credits4to7 = qeiAmount * 0.06;
      
      const investorBenefit = totalCredits - qeiAmount;
      const creditsPercent = (totalCredits / projectCost) * 100;
      const rateSavings = leverageRate - cdeLoanRate;

      return [
        { label: 'Total QLICI Loan to Business', value: totalQLICI.toFixed(2), isCurrency: true },
        { label: 'Total NMTC Credits (39%)', value: totalCredits.toFixed(2), isCurrency: true },
        { label: 'Annual Credits Years 1-3 (5%)', value: credits1to3.toFixed(2), isCurrency: true },
        { label: 'Annual Credits Years 4-7 (6%)', value: credits4to7.toFixed(2), isCurrency: true },
        { label: 'Investor Benefit (Credits - QEI)', value: investorBenefit.toFixed(2), isCurrency: true },
        { label: 'Credits as % of Project Cost', value: creditsPercent.toFixed(2), isPercentage: true },
        { label: 'Effective Interest Rate Savings', value: rateSavings.toFixed(2), isPercentage: true },
      ];
    },
  },
};
