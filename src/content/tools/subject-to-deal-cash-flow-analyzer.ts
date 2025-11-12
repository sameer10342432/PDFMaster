import { CalculatorContent } from '@/types';

export const SUBJECT_TO_DEAL_CASH_FLOW_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Subject-To (Sub-To) Deal Cash Flow Analyzer',
  description: 'Analyze cash flow and profitability of subject-to real estate deals where you take over existing mortgage payments.',
  slug: 'subject-to-deal-cash-flow-analyzer',
  icon: '🏘️',
  category: 'Investment Analysis',
  article: {
    title: 'Subject-To Real Estate Investing: Complete Strategy Guide',
    content: `
    <h2>Subject-To Real Estate Investing: Complete Strategy Guide</h2>
    <p>Subject-To (or "Sub-To") investing is a creative real estate strategy where you acquire property "subject to" the existing mortgage. The seller deeds you the property while their mortgage stays in place, and you take over making the payments—without formally assuming the loan.</p>
    
    <h3>What is a Subject-To Deal?</h3>
    <p>In a Subject-To transaction:</p>
    <ul>
      <li>Seller transfers property deed to buyer</li>
      <li>Existing mortgage remains in seller's name</li>
      <li>Buyer takes over making mortgage payments</li>
      <li>Buyer controls property (can rent, sell, renovate)</li>
      <li>Seller relieved of property burdens</li>
      <li>No new loan origination required</li>
    </ul>

    <p><strong>Example Deal:</strong></p>
    <ul>
      <li>Property Value: $250,000</li>
      <li>Existing Mortgage: $200,000 at 3.5% interest, $900/month</li>
      <li>Seller Equity: $50,000</li>
      <li>Investor pays seller $5,000 cash, takes over $900/month payments</li>
      <li>Investor rents property for $1,800/month</li>
      <li>Cash flow: $900/month after PITI</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Analyze subject-to deal profitability by entering:</p>
    <ul>
      <li><strong>Property Value:</strong> Current market value</li>
      <li><strong>Existing Mortgage Balance:</strong> Loan balance being taken over</li>
      <li><strong>Existing Monthly Payment:</strong> PITI payment you'll make</li>
      <li><strong>Interest Rate:</strong> Rate on existing mortgage</li>
      <li><strong>Cash to Seller:</strong> Upfront payment to seller (if any)</li>
      <li><strong>Expected Rent:</strong> Monthly rental income</li>
      <li><strong>Monthly Expenses:</strong> Management, maintenance, vacancy, CapEx</li>
      <li><strong>Acquisition Costs:</strong> Title, legal, etc.</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Instant Equity:</strong> Property value minus mortgage balance</li>
      <li><strong>LTV Ratio:</strong> Loan-to-value for risk assessment</li>
      <li><strong>Monthly Cash Flow:</strong> Net income after all expenses</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual cash flow / total cash invested</li>
      <li><strong>Total Cash Invested:</strong> Cash to seller + acquisition costs</li>
      <li><strong>Cap Rate:</strong> NOI / property value</li>
    </ul>

    <h3>Why Sellers Agree to Subject-To</h3>
    <p>Sellers motivated by:</p>
    
    <p><strong>Financial Distress:</strong></p>
    <ul>
      <li>Behind on payments, facing foreclosure</li>
      <li>Can't afford payments anymore (job loss, divorce, illness)</li>
      <li>Need to relocate quickly (job transfer, family emergency)</li>
      <li>Inherited property they can't manage</li>
    </ul>

    <p><strong>Property Issues:</strong></p>
    <ul>
      <li>Property needs major repairs they can't afford</li>
      <li>Negative cash flow rental they want to exit</li>
      <li>Property won't sell conventionally</li>
      <li>Upside down (owe more than value)</li>
    </ul>

    <p><strong>Life Changes:</strong></p>
    <ul>
      <li>Divorce settlements requiring quick exit</li>
      <li>Downsizing or moving to care facility</li>
      <li>Can't manage property from distance</li>
      <li>Want to preserve credit (avoid foreclosure)</li>
    </ul>

    <h3>Advantages of Subject-To Investing</h3>
    
    <p><strong>For Buyers/Investors:</strong></p>
    <ul>
      <li><strong>Low/No Money Down:</strong> Often acquire with minimal cash</li>
      <li><strong>No Bank Qualifying:</strong> Don't need to qualify for new loan</li>
      <li><strong>Keep Low Interest Rate:</strong> Benefit from seller's existing rate</li>
      <li><strong>Instant Equity:</strong> Buy below market value</li>
      <li><strong>Fast Closing:</strong> Close in days, not months</li>
      <li><strong>Positive Cash Flow:</strong> Rent often exceeds PITI payment</li>
      <li><strong>Build Portfolio Fast:</strong> Scale without using credit</li>
      <li><strong>No Seasoning Period:</strong> Can resell immediately</li>
    </ul>

    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Avoid foreclosure and credit damage</li>
      <li>Walk away from negative situation</li>
      <li>Get relief from payments immediately</li>
      <li>Preserve remaining credit</li>
      <li>Solve problem fast</li>
    </ul>

    <h3>Risks and Challenges</h3>
    
    <p><strong>Due-on-Sale Clause:</strong></p>
    <ul>
      <li>Most mortgages have due-on-sale acceleration clauses</li>
      <li>Lender can call loan due if title transfers</li>
      <li>However, rarely enforced if payments stay current</li>
      <li>Garn-St. Germain Act provides some protections</li>
      <li>Risk increases during market downturns or lender changes</li>
    </ul>

    <p><strong>Investor Risks:</strong></p>
    <ul>
      <li>Loan could be called due at any time</li>
      <li>Seller could file bankruptcy (complicates situation)</li>
      <li>Insurance may be difficult (property not in your name initially)</li>
      <li>Seller's credit issues could affect loan</li>
      <li>Must maintain perfect payment record</li>
    </ul>

    <p><strong>Seller Risks:</strong></p>
    <ul>
      <li>Mortgage remains in their name (affects credit/DTI)</li>
      <li>Investor might not make payments (damages seller credit)</li>
      <li>Still technically liable for the debt</li>
      <li>Could affect ability to get future mortgages</li>
    </ul>

    <h3>Legal Structure and Protection</h3>
    <p>Protect all parties with proper documentation:</p>
    
    <p><strong>Required Documents:</strong></p>
    <ul>
      <li><strong>Purchase Agreement:</strong> Spells out all deal terms</li>
      <li><strong>Warranty Deed:</strong> Transfers property to buyer</li>
      <li><strong>Authorization to Release:</strong> Allows buyer to communicate with lender</li>
      <li><strong>Mortgage Verification:</strong> Confirms loan balance and terms</li>
      <li><strong>Payment Agreement:</strong> Buyer's commitment to make payments</li>
      <li><strong>Insurance Agreement:</strong> Ensures proper coverage</li>
      <li><strong>Title Insurance:</strong> Protects buyer's interest</li>
    </ul>

    <p><strong>Additional Protections:</strong></p>
    <ul>
      <li>Land trust structure (consult attorney)</li>
      <li>LLC ownership (asset protection)</li>
      <li>Loan servicer arrangement (automated payments)</li>
      <li>Seller indemnification agreement</li>
    </ul>

    <h3>Finding Subject-To Deals</h3>
    <p>Where to find motivated sellers:</p>
    
    <p><strong>Marketing Channels:</strong></p>
    <ul>
      <li><strong>Pre-Foreclosure Lists:</strong> Contact homeowners before auction</li>
      <li><strong>Probate Properties:</strong> Heirs wanting quick exit</li>
      <li><strong>Divorce Attorneys:</strong> Referrals from legal professionals</li>
      <li><strong>Tired Landlords:</strong> Negative cash flow property owners</li>
      <li><strong>Expired Listings:</strong> Properties that didn't sell</li>
      <li><strong>Direct Mail:</strong> Letters to distressed homeowners</li>
      <li><strong>Bandit Signs:</strong> "We Buy Houses" marketing</li>
      <li><strong>Online Ads:</strong> Facebook, Google, Craigslist</li>
    </ul>

    <h3>Deal Structuring Strategies</h3>
    
    <h4>1. No Cash Down</h4>
    <ul>
      <li>Seller has no equity (or negative)</li>
      <li>Investor takes over payments only</li>
      <li>Investor might pay seller's moving costs ($2-5K)</li>
      <li>Best for motivated, distressed sellers</li>
    </ul>

    <h4>2. Small Cash Payment</h4>
    <ul>
      <li>Seller has some equity ($10-50K)</li>
      <li>Investor pays $3-10K upfront</li>
      <li>Remaining equity paid via note or profit share</li>
      <li>Balances seller relief with investor conservatism</li>
    </ul>

    <h4>3. Equity Share Agreement</h4>
    <ul>
      <li>Investor pays small amount upfront</li>
      <li>Seller gets percentage of future profit when sold</li>
      <li>Aligns incentives for both parties</li>
      <li>Reduces upfront cash required</li>
    </ul>

    <h4>4. Lease-Option Hybrid</h4>
    <ul>
      <li>Take property subject-to existing loan</li>
      <li>Offer property on lease-option to end buyer</li>
      <li>Generate monthly spread + option premium</li>
      <li>Exit when tenant-buyer exercises option</li>
    </ul>

    <h3>Cash Flow Optimization</h3>
    <p>Maximize profitability:</p>
    
    <p><strong>Rental Strategy:</strong></p>
    <ul>
      <li>Rent should exceed PITI + expenses by 30%+ for buffer</li>
      <li>Screen tenants thoroughly (protect the asset)</li>
      <li>Property management: DIY or hire (10% fee)</li>
      <li>Maintain reserves for repairs (6 months PITI minimum)</li>
    </ul>

    <p><strong>Lease-Option Strategy:</strong></p>
    <ul>
      <li>Charge $200-400/month above market rent</li>
      <li>Collect option premium ($5-15K)</li>
      <li>Lock in sale price above current value</li>
      <li>Lower tenant turnover (motivated buyers)</li>
    </ul>

    <p><strong>Quick Resale Strategy:</strong></p>
    <ul>
      <li>Buy at 70-80% of value</li>
      <li>Sell quickly for 80-90% of value</li>
      <li>Profit from instant equity</li>
      <li>Use as wholesaling alternative</li>
    </ul>

    <h3>Exit Strategies</h3>
    <ol>
      <li><strong>Hold as Rental:</strong> Long-term cash flow play</li>
      <li><strong>Resell Quickly:</strong> Capture instant equity profit</li>
      <li><strong>Refinance:</strong> Pull equity out, keep property</li>
      <li><strong>Lease-Option:</strong> Sell on terms to tenant-buyer</li>
      <li><strong>Sell on Land Contract:</strong> Become the bank</li>
      <li><strong>1031 Exchange:</strong> Trade up tax-deferred</li>
    </ol>

    <h3>Due Diligence Checklist</h3>
    <p>Before any Subject-To deal:</p>
    
    <p><strong>Loan Verification:</strong></p>
    <ul>
      <li>Get mortgage payoff statement and history</li>
      <li>Verify interest rate, payment amount, term remaining</li>
      <li>Check for PMI, prepayment penalties, ARM provisions</li>
      <li>Confirm no late payments in last 12 months</li>
    </ul>

    <p><strong>Title Search:</strong></p>
    <ul>
      <li>Run full title search for liens and encumbrances</li>
      <li>Check for judgments, tax liens, HOA liens</li>
      <li>Verify seller is on title and can convey</li>
      <li>Purchase title insurance</li>
    </ul>

    <p><strong>Property Inspection:</strong></p>
    <ul>
      <li>Full property inspection for major defects</li>
      <li>Estimate repair costs accurately</li>
      <li>Check code violations or permit issues</li>
      <li>Verify property taxes current</li>
    </ul>

    <h3>Best Practices for Success</h3>
    <ul>
      <li>Only do deals with significant equity or cash flow</li>
      <li>Maintain perfect payment record on existing loan</li>
      <li>Get proper insurance (work with knowledgeable agent)</li>
      <li>Use attorney experienced in creative real estate</li>
      <li>Make payments directly to lender (get servicer access)</li>
      <li>Maintain reserves for 6-12 months of payments</li>
      <li>Document everything in writing</li>
      <li>Don't advertise the arrangement publicly</li>
      <li>Consider land trust or LLC structure</li>
      <li>Build strong relationship with seller (mutual benefit)</li>
    </ul>

    <h3>Tax Considerations</h3>
    <ul>
      <li><strong>Mortgage Interest:</strong> You can deduct interest paid (complex)</li>
      <li><strong>Property Taxes:</strong> Deductible by whoever pays them</li>
      <li><strong>Depreciation:</strong> Take depreciation on your basis</li>
      <li><strong>Sale Gains:</strong> Capital gains treatment if held 1+ years</li>
      <li><strong>Consult CPA:</strong> Tax treatment complex, varies by structure</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Market Value',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'mortgageBalance',
        label: 'Existing Mortgage Balance',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'monthlyPayment',
        label: 'Monthly Mortgage Payment (PITI)',
        type: 'number',
        defaultValue: 1400,
      },
      {
        name: 'interestRate',
        label: 'Existing Interest Rate (%)',
        type: 'number',
        defaultValue: 4.5,
      },
      {
        name: 'cashToSeller',
        label: 'Cash Payment to Seller',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'acquisitionCosts',
        label: 'Acquisition Costs (Title, Legal, etc.)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'expectedRent',
        label: 'Expected Monthly Rent',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Expenses (Mgmt, Maint, Vacancy)',
        type: 'number',
        defaultValue: 400,
      },
    ],
    results: [
      { label: 'Instant Equity Acquired', isCurrency: true },
      { label: 'Loan-to-Value (LTV)', isPercentage: true },
      { label: 'Total Cash Invested', isCurrency: true },
      { label: 'Monthly Cash Flow', isCurrency: true },
      { label: 'Annual Cash Flow', isCurrency: true },
      { label: 'Cash-on-Cash Return', isPercentage: true },
      { label: 'Net Operating Income (NOI)', isCurrency: true },
      { label: 'Cap Rate', isPercentage: true },
    ],
    calculate: (values) => {
      const { propertyValue, mortgageBalance, monthlyPayment, interestRate, cashToSeller, acquisitionCosts, expectedRent, monthlyExpenses } = values;
      
      const instantEquity = propertyValue - mortgageBalance;
      const ltv = (mortgageBalance / propertyValue) * 100;
      const totalCashInvested = cashToSeller + acquisitionCosts;
      
      const monthlyCashFlow = expectedRent - monthlyPayment - monthlyExpenses;
      const annualCashFlow = monthlyCashFlow * 12;
      
      const cashOnCashReturn = totalCashInvested > 0 ? (annualCashFlow / totalCashInvested) * 100 : 0;
      
      const annualNOI = (expectedRent * 12) - (monthlyExpenses * 12);
      const capRate = (annualNOI / propertyValue) * 100;

      return [
        { label: 'Instant Equity Acquired', value: instantEquity.toFixed(2), isCurrency: true },
        { label: 'Loan-to-Value (LTV)', value: ltv.toFixed(2), isPercentage: true },
        { label: 'Total Cash Invested', value: totalCashInvested.toFixed(2), isCurrency: true },
        { label: 'Monthly Cash Flow', value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Return', value: cashOnCashReturn.toFixed(2), isPercentage: true },
        { label: 'Net Operating Income (NOI)', value: annualNOI.toFixed(2), isCurrency: true },
        { label: 'Cap Rate', value: capRate.toFixed(2), isPercentage: true },
      ];
    },
  },
};
