import { CalculatorContent } from '@/types';

export const BANK_STATEMENT_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Bank Statement Loan Calculator (Self-Employed)',
  description: 'Calculate mortgage qualification for self-employed borrowers using bank statements instead of tax returns. Determine your purchasing power with bank statement loans.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'bank-statement-loan-calculator',
  article: {
    title: "Bank Statement Loan Calculator: Mortgage Guide for Self-Employed Borrowers",
    content: `
    <h2>What is a Bank Statement Loan?</h2>
    <p>A bank statement loan is a mortgage program designed for self-employed borrowers, business owners, freelancers, and gig economy workers who cannot provide traditional W-2 income documentation. Instead of tax returns, lenders use 12-24 months of personal or business bank statements to verify income and calculate your qualifying income.</p>

    <h3>Why Bank Statement Loans Exist</h3>
    <p>Self-employed borrowers often write off significant business expenses on their tax returns, reducing their taxable income. While this saves on taxes, it makes qualifying for a traditional mortgage difficult because lenders see very low "qualifying income" on tax returns.</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Gross Business Revenue:</strong> $200,000</li>
      <li><strong>Business Write-Offs:</strong> $80,000 (home office, vehicle, travel, equipment)</li>
      <li><strong>Taxable Income:</strong> $120,000</li>
      <li><strong>Actual Cash Flow:</strong> $180,000+ (many expenses are for assets you keep)</li>
    </ul>
    <p>With a traditional mortgage, you qualify based on $120,000. With a bank statement loan, lenders analyze your actual deposits and cash flow, potentially qualifying you based on $150,000-$180,000 or more.</p>

    <h3>How Bank Statement Loans Work</h3>
    <p>Lenders review your bank statements to calculate average monthly deposits:</p>
    <ul>
      <li><strong>12-Month Program:</strong> Analyze 12 consecutive months of bank statements</li>
      <li><strong>24-Month Program:</strong> Analyze 24 consecutive months (often results in higher qualifying income)</li>
      <li><strong>Expense Ratio:</strong> Lenders apply a standard expense ratio (typically 20-50%) to account for business costs</li>
      <li><strong>Qualifying Income:</strong> Average monthly deposits × (1 - expense ratio) × 12</li>
    </ul>

    <h3>Bank Statement Loan Calculation Example</h3>
    <p><strong>Scenario:</strong> Self-employed consultant with business bank account</p>
    
    <p><strong>12-Month Bank Statement Summary:</strong></p>
    <ul>
      <li><strong>Average Monthly Deposits:</strong> $18,000</li>
      <li><strong>Lender's Expense Ratio:</strong> 30% (conservative estimate of business expenses)</li>
      <li><strong>Net Qualifying Income:</strong> $18,000 × 70% = $12,600/month</li>
      <li><strong>Annual Qualifying Income:</strong> $12,600 × 12 = $151,200</li>
    </ul>
    
    <p>Even if your tax return shows $100,000 in taxable income, the bank statement loan qualifies you at $151,200, significantly increasing your purchasing power.</p>

    <h3>Types of Bank Statement Loans</h3>
    <ul>
      <li><strong>Personal Bank Statement Loan:</strong> Uses your personal checking/savings account deposits</li>
      <li><strong>Business Bank Statement Loan:</strong> Uses your business account deposits (typically higher qualifying income)</li>
      <li><strong>Hybrid Program:</strong> Combines personal and business bank statements for maximum qualifying income</li>
      <li><strong>12-Month vs. 24-Month:</strong> 24-month programs often result in 5-10% higher qualifying income due to averaging</li>
    </ul>

    <h3>Who Qualifies for Bank Statement Loans?</h3>
    <ul>
      <li>Self-employed business owners (LLC, S-Corp, Sole Proprietor)</li>
      <li>Freelancers and independent contractors (1099 workers)</li>
      <li>Gig economy workers (Uber, DoorDash, Airbnb hosts)</li>
      <li>Real estate investors with rental income</li>
      <li>Commission-based earners (realtors, salespeople)</li>
      <li>Small business owners with significant write-offs</li>
      <li>Entrepreneurs with fluctuating but substantial income</li>
    </ul>

    <h3>Bank Statement Loan Requirements</h3>
    <ul>
      <li><strong>Credit Score:</strong> Minimum 620-640, but 680+ is preferred for better rates</li>
      <li><strong>Down Payment:</strong> 10-20% minimum (20% gets better rates and terms)</li>
      <li><strong>Self-Employment History:</strong> At least 2 years in the same line of work</li>
      <li><strong>Bank Statements:</strong> 12 or 24 consecutive months from the same account</li>
      <li><strong>Debt-to-Income Ratio:</strong> Typically 43-50% (calculated using bank statement income)</li>
      <li><strong>Cash Reserves:</strong> 2-12 months of mortgage payments in savings (varies by lender)</li>
    </ul>

    <h3>Pros of Bank Statement Loans</h3>
    <ul>
      <li>Qualify based on actual cash flow, not tax returns</li>
      <li>Higher qualifying income for borrowers with significant write-offs</li>
      <li>No need to provide tax returns or profit & loss statements</li>
      <li>Faster approval process (no tax transcript delays)</li>
      <li>Available for purchase and refinance</li>
      <li>Can combine personal and business income</li>
      <li>Some programs allow 12 months of statements (vs. 24 for traditional)</li>
    </ul>

    <h3>Cons of Bank Statement Loans</h3>
    <ul>
      <li><strong>Higher Interest Rates:</strong> Typically 0.5-2% higher than conventional loans</li>
      <li><strong>Larger Down Payment:</strong> Often require 15-20% down vs. 3-5% for conventional</li>
      <li><strong>Higher Fees:</strong> Origination fees are typically 1-2% of the loan amount</li>
      <li><strong>More Scrutiny:</strong> Lenders carefully review every deposit and transaction</li>
      <li><strong>Irregular Income Penalty:</strong> Highly variable monthly deposits may result in lower qualifying income</li>
      <li><strong>No Government Backing:</strong> Not available through FHA, VA, or USDA programs</li>
    </ul>

    <h3>Bank Statement Loan vs. Traditional Mortgage</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Bank Statement Loan</th>
        <th>Traditional Mortgage</th>
      </tr>
      <tr>
        <td>Income Verification</td>
        <td>12-24 months of bank statements</td>
        <td>W-2s, pay stubs, tax returns</td>
      </tr>
      <tr>
        <td>Interest Rate</td>
        <td>6.5-8.5%</td>
        <td>6.0-7.5%</td>
      </tr>
      <tr>
        <td>Down Payment</td>
        <td>10-20%</td>
        <td>3-20%</td>
      </tr>
      <tr>
        <td>Credit Score</td>
        <td>620-680 minimum</td>
        <td>580-620 minimum</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Self-employed with write-offs</td>
        <td>W-2 employees</td>
      </tr>
    </table>

    <h3>Common Mistakes That Reduce Qualifying Income</h3>
    <ul>
      <li><strong>Irregular Deposits:</strong> Large fluctuations month-to-month result in conservative income calculations</li>
      <li><strong>Personal Transfers:</strong> Moving money between personal accounts inflates deposits (lenders subtract these)</li>
      <li><strong>One-Time Windfalls:</strong> Selling equipment or receiving a settlement is excluded from income calculation</li>
      <li><strong>Cash Deposits:</strong> Large unexplained cash deposits may be excluded or trigger additional documentation requests</li>
      <li><strong>NSF Fees:</strong> Overdrafts and returned payments raise red flags about financial stability</li>
    </ul>

    <h3>How to Maximize Your Qualifying Income</h3>
    <ul>
      <li>Use a dedicated business bank account with consistent monthly deposits</li>
      <li>Maintain 12-24 months of clean banking history before applying</li>
      <li>Avoid large one-time deposits or clearly document their source</li>
      <li>Minimize transfers between personal accounts during the review period</li>
      <li>Keep detailed records of business vs. personal expenses</li>
      <li>Consider the 24-month program for smoother, higher average income</li>
      <li>Work with a CPA to optimize business structure for mortgage qualification</li>
    </ul>

    <h3>Expense Ratios by Industry</h3>
    <p>Lenders apply industry-specific expense ratios to estimate your business costs:</p>
    <ul>
      <li><strong>Consultants/Coaches:</strong> 20-30% (low overhead businesses)</li>
      <li><strong>Real Estate Agents:</strong> 30-40% (marketing, licensing, commissions to brokerage)</li>
      <li><strong>Contractors/Tradespeople:</strong> 40-50% (materials, equipment, labor)</li>
      <li><strong>Retail/E-commerce:</strong> 50-60% (inventory, shipping, platform fees)</li>
      <li><strong>Restaurants:</strong> 60-70% (food costs, labor, rent)</li>
    </ul>
    <p><strong>Pro Tip:</strong> If you can prove lower expenses with a profit & loss statement, some lenders will use a custom expense ratio, increasing your qualifying income.</p>

    <h3>Alternative Documentation Options</h3>
    <p>If bank statement loans don't work, consider:</p>
    <ul>
      <li><strong>P&L Loan:</strong> Use profit & loss statements instead of tax returns (requires CPA verification)</li>
      <li><strong>Asset Depletion Loan:</strong> Qualify based on liquid assets divided by loan term</li>
      <li><strong>Stated Income Loan:</strong> Rare, requires 30-40% down and excellent credit</li>
      <li><strong>DSCR Loan:</strong> For investment properties, qualify based on rental income only</li>
      <li><strong>Traditional Loan:</strong> File amended tax returns to show higher income (takes 6-12 months)</li>
    </ul>

    <h3>Real-World Example: Self-Employed Realtor</h3>
    <p><strong>Traditional Mortgage (Using Tax Return):</strong></p>
    <ul>
      <li><strong>Gross Commissions:</strong> $250,000</li>
      <li><strong>Business Expenses:</strong> $100,000 (marketing, desk fees, vehicle, etc.)</li>
      <li><strong>Taxable Income:</strong> $150,000</li>
      <li><strong>Qualifying Income:</strong> $150,000</li>
      <li><strong>Max Home Price (28% DTI):</strong> $600,000</li>
    </ul>
    
    <p><strong>Bank Statement Loan (Using 24-Month Business Bank Statements):</strong></p>
    <ul>
      <li><strong>Average Monthly Deposits:</strong> $21,000</li>
      <li><strong>Lender's Expense Ratio:</strong> 35%</li>
      <li><strong>Net Qualifying Income:</strong> $21,000 × 65% = $13,650/month = $163,800/year</li>
      <li><strong>Max Home Price (28% DTI):</strong> $655,000</li>
      <li><strong>Additional Purchasing Power:</strong> $55,000</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your average monthly bank deposits, the lender's expense ratio (ask your loan officer, typically 20-50%), and your other financial details. The calculator will show you:</p>
    <ul>
      <li>Your qualifying monthly income based on bank statements</li>
      <li>Maximum home price you can afford</li>
      <li>Required down payment</li>
      <li>Estimated monthly mortgage payment</li>
      <li>Comparison with traditional mortgage qualification</li>
      <li>Additional purchasing power with bank statement loan</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'averageMonthlyDeposits',
        label: 'Average Monthly Bank Deposits ($)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'expenseRatio',
        label: 'Lender Expense Ratio (%)',
        type: 'number',
        defaultValue: 35,
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debt Obligations ($)',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
    ],
    results: [
      { label: 'Gross Monthly Income (from deposits)', isCurrency: true },
      { label: 'Qualifying Monthly Income (after expenses)', isCurrency: true },
      { label: 'Annual Qualifying Income', isCurrency: true },
      { label: 'Maximum Monthly Payment (43% DTI)', isCurrency: true },
      { label: 'Maximum Loan Amount', isCurrency: true },
      { label: 'Maximum Home Price', isCurrency: true },
      { label: 'Required Down Payment', isCurrency: true },
      { label: 'Estimated Monthly Mortgage Payment', isCurrency: true },
    ],
    calculate: (values) => {
      const { averageMonthlyDeposits, expenseRatio, monthlyDebts, downPaymentPercent, interestRate } = values;
      
      // Calculate qualifying income
      const grossMonthlyIncome = averageMonthlyDeposits;
      const netIncomeMultiplier = (100 - expenseRatio) / 100;
      const qualifyingMonthlyIncome = grossMonthlyIncome * netIncomeMultiplier;
      const annualQualifyingIncome = qualifyingMonthlyIncome * 12;
      
      // DTI calculation (43% max)
      const maxMonthlyPayment = (qualifyingMonthlyIncome * 0.43) - monthlyDebts;
      
      // Calculate maximum loan amount
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = 30 * 12;
      const maxLoanAmount = maxMonthlyPayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
      
      // Calculate maximum home price
      const downPaymentMultiplier = 1 - (downPaymentPercent / 100);
      const maxHomePrice = maxLoanAmount / downPaymentMultiplier;
      const requiredDownPayment = maxHomePrice - maxLoanAmount;
      
      // Estimated monthly payment (P&I only)
      const estimatedPayment = maxLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      return [
        { label: 'Gross Monthly Income (from deposits)', value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Qualifying Monthly Income (after expenses)', value: qualifyingMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Qualifying Income', value: annualQualifyingIncome.toFixed(2), isCurrency: true },
        { label: 'Maximum Monthly Payment (43% DTI)', value: maxMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Maximum Loan Amount', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Maximum Home Price', value: maxHomePrice.toFixed(2), isCurrency: true },
        { label: 'Required Down Payment', value: requiredDownPayment.toFixed(2), isCurrency: true },
        { label: 'Estimated Monthly Mortgage Payment', value: estimatedPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};
