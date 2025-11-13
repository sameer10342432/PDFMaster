import { CalculatorContent } from '@/types';

export const SECURITY_DEPOSIT_INTEREST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Security Deposit Interest Calculator (by State)',
  description: 'Calculate required security deposit interest by state, determine interest rates, holding requirements, and landlord obligations for tenant deposits.',
  slug: 'security-deposit-interest-calculator',
  icon: '🏦',
  category: 'Rental & Income',
  metaTitle: 'Security Deposit Interest Calculator - State Interest Rate Requirements',
  metaDescription: 'Free security deposit interest calculator. Calculate required interest by state, annual interest owed, and landlord obligations for tenant deposits.',
  article: {
    title: 'Understanding Security Deposit Interest Requirements by State',
    content: `
    <h2>Understanding Security Deposit Interest Requirements by State</h2>
    <p>Many states require landlords to pay interest on security deposits held for tenants. Interest rates, calculation methods, and payment requirements vary significantly by state. Landlords must understand and comply with their state's specific regulations to avoid penalties, interest forfeiture, and potential legal liability.</p>
    
    <h3>What is Security Deposit Interest?</h3>
    <p>Security deposit interest is the earnings landlords must pay to tenants on deposits held during the tenancy. Key concepts include:</p>
    <ul>
      <li><strong>Mandatory vs. Optional:</strong> Some states require interest, others prohibit it, many leave it optional</li>
      <li><strong>Interest Rates:</strong> Rates range from fixed percentages to variable bank rates</li>
      <li><strong>Payment Timing:</strong> Annual payments, at lease end, or credited to rent</li>
      <li><strong>Minimum Holding Period:</strong> Some states exempt deposits held less than 6-12 months</li>
      <li><strong>Account Requirements:</strong> Specific bank account types may be mandated</li>
    </ul>

    <h3>States Requiring Security Deposit Interest</h3>
    <p>States with mandatory interest requirements:</p>
    <ul>
      <li><strong>Connecticut:</strong> Greater of 4.5% or average savings bank rate</li>
      <li><strong>Illinois:</strong> If holding 6+ months, must pay interest (rate varies by city)</li>
      <li><strong>Iowa:</strong> 5% annual simple interest</li>
      <li><strong>Maryland:</strong> 3% simple interest (some counties 4-10%)</li>
      <li><strong>Massachusetts:</strong> 5% interest or actual bank interest if less, paid annually</li>
      <li><strong>Minnesota:</strong> 1% simple interest if deposit held 6+ months</li>
      <li><strong>New Hampshire:</strong> Interest earned on account (if bank pays interest)</li>
      <li><strong>New Jersey:</strong> NJ Treasury rate or actual interest earned</li>
      <li><strong>New Mexico:</strong> Passbook savings rate from local bank</li>
      <li><strong>New York:</strong> Varies by city/county; NYC requires account earning interest</li>
      <li><strong>North Dakota:</strong> 5% annual simple interest</li>
      <li><strong>Ohio:</strong> 5% annual interest</li>
      <li><strong>Pennsylvania:</strong> 2% third year and beyond in escrow account</li>
      <li><strong>Virginia:</strong> Interest earned on escrow account</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information:</p>
    <ul>
      <li><strong>Security Deposit Amount:</strong> Total deposit held</li>
      <li><strong>Annual Interest Rate:</strong> Your state's required rate</li>
      <li><strong>Holding Period:</strong> Number of months deposit has been held</li>
      <li><strong>Compounding:</strong> Simple or compound interest (varies by state)</li>
      <li><strong>Payment Frequency:</strong> Annual or at lease end</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total Interest Accrued:</strong> Total interest earned to date</li>
      <li><strong>Annual Interest Amount:</strong> Interest for one year</li>
      <li><strong>Monthly Interest Rate:</strong> Interest accrual per month</li>
      <li><strong>Total Owed to Tenant:</strong> Deposit plus interest</li>
      <li><strong>Next Annual Payment:</strong> Interest due at next anniversary</li>
    </ul>

    <h3>State-Specific Interest Rates</h3>
    <p>Common interest rate structures:</p>
    <ul>
      <li><strong>Fixed Rate:</strong> Specific percentage set by law (e.g., Iowa 5%, Ohio 5%)</li>
      <li><strong>Bank Rate:</strong> Rate paid by specific type of account (passbook savings, money market)</li>
      <li><strong>Treasury Rate:</strong> Tied to government securities (New Jersey)</li>
      <li><strong>Greater of Two Rates:</strong> Higher of statutory rate or bank rate (Connecticut)</li>
      <li><strong>Actual Earnings:</strong> Whatever interest the account actually earns</li>
    </ul>

    <h3>Account Placement Requirements</h3>
    <p>Where deposits must be held varies by state:</p>
    <ul>
      <li><strong>Separate Account:</strong> Dedicated account for security deposits only</li>
      <li><strong>Interest-Bearing Account:</strong> Account that pays interest to depositor</li>
      <li><strong>Federally Insured:</strong> FDIC or NCUA insured institutions</li>
      <li><strong>In-State Bank:</strong> Some states require accounts in-state</li>
      <li><strong>Escrow Account:</strong> Formal escrow with specific requirements</li>
      <li><strong>Commingling Allowed:</strong> Some states allow pooling deposits in one account</li>
    </ul>

    <h3>Payment Methods and Timing</h3>
    <ul>
      <li><strong>Annual Payment:</strong> Interest paid each year on anniversary date</li>
      <li><strong>Lease End Payment:</strong> Interest paid when deposit is returned</li>
      <li><strong>Rent Credit:</strong> Interest applied as credit toward rent</li>
      <li><strong>Compounding:</strong> Interest on prior interest (rare)</li>
      <li><strong>Simple Interest:</strong> Interest on principal only (most common)</li>
    </ul>

    <h3>Simple vs. Compound Interest</h3>
    <p>Calculation method affects total:</p>
    <ul>
      <li><strong>Simple Interest:</strong> Interest = Principal × Rate × Time</li>
      <li><strong>Compound Interest:</strong> Interest on principal plus accumulated interest</li>
      <li><strong>Most States:</strong> Simple interest calculation</li>
      <li><strong>Example:</strong> $1,000 deposit at 5% for 2 years = $100 simple interest</li>
    </ul>

    <h3>Minimum Holding Period Exemptions</h3>
    <p>Some states exempt short-term deposits:</p>
    <ul>
      <li><strong>Illinois:</strong> No interest required if held less than 6 months</li>
      <li><strong>Minnesota:</strong> No interest required if held less than 6 months</li>
      <li><strong>Purpose:</strong> Reduces administrative burden for short leases</li>
      <li><strong>Count Carefully:</strong> Pro-rate if lease spans exemption threshold</li>
    </ul>

    <h3>Landlord Disclosure Requirements</h3>
    <p>Information landlords must provide to tenants:</p>
    <ul>
      <li><strong>Bank Name & Address:</strong> Where deposit is held</li>
      <li><strong>Account Number:</strong> Some states require disclosure</li>
      <li><strong>Interest Rate:</strong> Current rate being applied</li>
      <li><strong>Timing:</strong> Disclosure within 30 days of receiving deposit (varies)</li>
      <li><strong>Updates:</strong> Notify if account or rate changes</li>
      <li><strong>Receipt:</strong> Provide written receipt for deposit</li>
    </ul>

    <h3>Penalties for Non-Compliance</h3>
    <p>Consequences of failing to pay required interest:</p>
    <ul>
      <li><strong>Forfeiture of Deposit:</strong> May lose right to keep any portion of deposit</li>
      <li><strong>Double or Triple Damages:</strong> Statutory penalties in some states</li>
      <li><strong>Interest on Interest:</strong> Compounded penalties for late payment</li>
      <li><strong>Attorney's Fees:</strong> Must pay tenant's legal costs</li>
      <li><strong>Court Costs:</strong> Additional litigation expenses</li>
      <li><strong>Criminal Penalties:</strong> Rarely, willful violations can be criminal</li>
    </ul>

    <h3>City-Specific Requirements</h3>
    <p>Some cities have stricter rules than states:</p>
    <ul>
      <li><strong>Chicago, IL:</strong> Detailed interest and account requirements beyond state law</li>
      <li><strong>New York City, NY:</strong> Must deposit in interest-bearing account</li>
      <li><strong>Washington, DC:</strong> Must pay interest at annual rate set by Mayor</li>
      <li><strong>San Francisco, CA:</strong> Local ordinance requirements</li>
      <li><strong>Always Check Local Laws:</strong> City rules may be more stringent</li>
    </ul>

    <h3>Best Practices for Landlords</h3>
    <ul>
      <li>Research state and local requirements before accepting deposits</li>
      <li>Open appropriate account type immediately upon receiving deposit</li>
      <li>Set calendar reminders for annual interest payments</li>
      <li>Keep detailed records of deposits, interest accrual, and payments</li>
      <li>Provide required disclosures in writing with proof of delivery</li>
      <li>Calculate interest accurately using state-specified method</li>
      <li>Pay interest on time to avoid penalties</li>
      <li>Include interest information in lease agreements</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Commingling deposits with personal funds</li>
      <li>Using non-interest-bearing accounts when interest required</li>
      <li>Calculating interest incorrectly (compound vs. simple)</li>
      <li>Missing annual payment deadlines</li>
      <li>Failing to provide required account disclosures</li>
      <li>Keeping interest instead of paying to tenant</li>
      <li>Not adjusting for rate changes</li>
      <li>Ignoring city-specific requirements beyond state law</li>
    </ul>

    <h3>States Without Interest Requirements</h3>
    <p>Many states do not require interest on deposits:</p>
    <ul>
      <li>Most states either don't require interest or leave it optional</li>
      <li>Landlords may voluntarily pay interest as goodwill gesture</li>
      <li>Check individual state statutes to confirm no requirement</li>
      <li>Local ordinances may still require interest even if state doesn't</li>
    </ul>

    <h3>Returning Deposits with Interest</h3>
    <p>Process at lease end:</p>
    <ul>
      <li>Calculate total interest accrued over entire tenancy</li>
      <li>Deduct any legitimate damages from deposit principal</li>
      <li>Interest typically cannot be used to cover damages</li>
      <li>Return deposit plus full interest minus deductions</li>
      <li>Provide itemized statement showing interest calculation</li>
      <li>Meet state deadline for return (typically 14-30 days)</li>
    </ul>

    <h3>Tax Implications</h3>
    <ul>
      <li><strong>For Landlords:</strong> Interest earned is taxable income even if paid to tenant</li>
      <li><strong>For Tenants:</strong> Interest received is taxable income</li>
      <li><strong>1099 Reporting:</strong> Required if interest exceeds $10 (rare)</li>
      <li><strong>Deduction:</strong> Landlord can deduct interest paid to tenant</li>
    </ul>

    <h3>Record-Keeping Requirements</h3>
    <ul>
      <li>Maintain separate ledger for each tenant's deposit</li>
      <li>Document date deposit received and amount</li>
      <li>Track interest accrual month by month</li>
      <li>Keep bank statements showing account balance</li>
      <li>Record all interest payments made to tenants</li>
      <li>Retain for minimum 3 years after lease ends (some states require 7)</li>
    </ul>

    <h3>Multi-Unit Properties</h3>
    <p>Managing deposits for multiple tenants:</p>
    <ul>
      <li>Can often pool deposits in single interest-bearing account</li>
      <li>Must track each tenant's share separately</li>
      <li>Distribute interest proportionally based on deposit amount</li>
      <li>Some states require separate accounts for each tenant</li>
      <li>Commingling allowed in most states if records maintained</li>
    </ul>

    <h3>Resources and Tools</h3>
    <ul>
      <li>State landlord-tenant law summaries (Nolo, state bar associations)</li>
      <li>Local housing authority websites</li>
      <li>Property management software with built-in interest tracking</li>
      <li>Spreadsheets or databases for multi-property portfolios</li>
      <li>Attorney consultation for complex situations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'depositAmount',
        label: 'Security Deposit Amount',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'interestRate',
        label: 'Annual Interest Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'holdingMonths',
        label: 'Holding Period (Months)',
        type: 'number',
        defaultValue: 24,
      },
      {
        name: 'compounding',
        label: 'Interest Type',
        type: 'select',
        options: [
          { value: 'simple', label: 'Simple Interest' },
          { value: 'compound', label: 'Compound Interest (Annual)' },
        ],
        defaultValue: 'simple',
      },
    ],
    results: [
      { label: 'Total Interest Accrued', isCurrency: true },
      { label: 'Annual Interest Amount', isCurrency: true },
      { label: 'Monthly Interest Rate', isPercentage: true },
      { label: 'Total Owed to Tenant', isCurrency: true },
      { label: 'Interest Per Year', isCurrency: true },
      { label: 'Holding Period (Years)', isCurrency: false },
    ],
    calculate: (values) => {
      const { depositAmount, interestRate, holdingMonths, compounding } = values;
      
      const years = holdingMonths / 12;
      const rate = interestRate / 100;
      const monthlyRate = (interestRate / 12);
      
      let totalInterest;
      if (compounding === 'compound') {
        totalInterest = depositAmount * (Math.pow(1 + rate, years) - 1);
      } else {
        totalInterest = depositAmount * rate * years;
      }
      
      const annualInterest = depositAmount * rate;
      const totalOwed = depositAmount + totalInterest;
      const interestPerYear = totalInterest / (years || 1);

      return [
        { label: 'Total Interest Accrued', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Annual Interest Amount', value: annualInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly Interest Rate', value: monthlyRate.toFixed(4), isPercentage: true },
        { label: 'Total Owed to Tenant', value: totalOwed.toFixed(2), isCurrency: true },
        { label: 'Interest Per Year', value: interestPerYear.toFixed(2), isCurrency: true },
        { label: 'Holding Period (Years)', value: years.toFixed(2) + ' years', isCurrency: false },
      ];
    },
  },
};
