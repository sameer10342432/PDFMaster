import { CalculatorContent } from '@/types';

export const EARNER_1099_MORTGAGE_QUALIFIER_CONTENT: CalculatorContent = {
  title: '1099 Earner Mortgage Qualifier',
  description: 'Calculate mortgage qualification for 1099 contractors and freelancers. Determine how much home you can afford as an independent contractor with variable income.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: '1099-earner-mortgage-qualifier',
  article: {
    title: "1099 Earner Mortgage Qualifier: Complete Guide for Independent Contractors",
    content: `
    <h2>Mortgage Qualification for 1099 Earners</h2>
    <p>1099 earners (independent contractors, freelancers, gig workers, and self-employed individuals) face unique challenges when qualifying for a mortgage. Unlike W-2 employees with stable paychecks, 1099 workers have variable income, business expenses, and different documentation requirements. This calculator helps you determine your mortgage qualification based on your 1099 income structure.</p>

    <h3>Who is a 1099 Earner?</h3>
    <p>You're a 1099 earner if you:</p>
    <ul>
      <li>Receive 1099-NEC or 1099-MISC forms instead of W-2s</li>
      <li>Work as an independent contractor or freelancer</li>
      <li>Operate a sole proprietorship or single-member LLC</li>
      <li>Earn income from gig economy platforms (Uber, DoorDash, Upwork)</li>
      <li>Are self-employed without employees</li>
      <li>Have clients instead of an employer</li>
    </ul>

    <h3>How Lenders Calculate 1099 Income</h3>
    <p>Traditional lenders use a conservative formula to determine your qualifying income:</p>
    <ul>
      <li><strong>Step 1:</strong> Review your last 2 years of personal tax returns (Form 1040)</li>
      <li><strong>Step 2:</strong> Look at Schedule C (business income and expenses)</li>
      <li><strong>Step 3:</strong> Calculate your net profit after expenses for each year</li>
      <li><strong>Step 4:</strong> Average the 2 years of net profit</li>
      <li><strong>Step 5:</strong> Add back certain non-cash deductions (depreciation, depletion)</li>
      <li><strong>Step 6:</strong> Divide by 12 to get monthly qualifying income</li>
    </ul>

    <h3>Real-World 1099 Income Calculation Example</h3>
    <p><strong>Freelance Graphic Designer</strong></p>
    
    <p><strong>Year 1 (2023):</strong></p>
    <ul>
      <li>Gross 1099 Income: $95,000</li>
      <li>Business Expenses: $25,000 (software, equipment, marketing, home office)</li>
      <li>Net Profit (Schedule C Line 31): $70,000</li>
      <li>Depreciation (added back): $3,000</li>
      <li><strong>Qualifying Income Year 1:</strong> $73,000</li>
    </ul>
    
    <p><strong>Year 2 (2024):</strong></p>
    <ul>
      <li>Gross 1099 Income: $105,000</li>
      <li>Business Expenses: $28,000</li>
      <li>Net Profit (Schedule C Line 31): $77,000</li>
      <li>Depreciation (added back): $3,500</li>
      <li><strong>Qualifying Income Year 2:</strong> $80,500</li>
    </ul>
    
    <p><strong>Mortgage Qualification Calculation:</strong></p>
    <ul>
      <li><strong>Average Annual Income:</strong> ($73,000 + $80,500) ÷ 2 = $76,750</li>
      <li><strong>Monthly Qualifying Income:</strong> $76,750 ÷ 12 = $6,395.83</li>
      <li><strong>Maximum Monthly Payment (43% DTI):</strong> $6,395.83 × 0.43 = $2,750</li>
      <li><strong>Maximum Home Price (20% down, 7% rate):</strong> ~$470,000</li>
    </ul>

    <h3>Documentation Requirements for 1099 Borrowers</h3>
    <ul>
      <li><strong>Personal Tax Returns:</strong> Complete Form 1040 for the past 2 years (including all schedules)</li>
      <li><strong>Schedule C:</strong> Profit or Loss from Business for each year</li>
      <li><strong>1099 Forms:</strong> All 1099-NEC and 1099-MISC forms from clients</li>
      <li><strong>Business Bank Statements:</strong> 12-24 months (for some loan programs)</li>
      <li><strong>Profit & Loss Statement:</strong> Year-to-date P&L (if applying mid-year)</li>
      <li><strong>Business License:</strong> Proof of self-employment (if applicable)</li>
      <li><strong>Letter of Explanation:</strong> Describe your business, income sources, and stability</li>
    </ul>

    <h3>Challenges 1099 Earners Face</h3>
    <ul>
      <li><strong>Income Averaging:</strong> Lenders average 2 years, which penalizes recent income growth</li>
      <li><strong>Business Deductions:</strong> Every dollar in write-offs reduces your qualifying income</li>
      <li><strong>Variable Income:</strong> Inconsistent monthly earnings raise red flags for lenders</li>
      <li><strong>Declining Income:</strong> If Year 2 income is lower than Year 1, some lenders only use Year 2</li>
      <li><strong>Less Than 2 Years:</strong> Most lenders require 2+ years of self-employment history</li>
      <li><strong>Industry Risk:</strong> Seasonal or cyclical industries face more scrutiny</li>
    </ul>

    <h3>How to Maximize Your 1099 Qualifying Income</h3>
    <ul>
      <li><strong>Minimize Deductions:</strong> In the 2 years before applying, reduce business write-offs to show higher net profit</li>
      <li><strong>Document Add-Backs:</strong> Work with a CPA to identify deductions that can be added back (depreciation, one-time expenses)</li>
      <li><strong>Show Income Growth:</strong> Consistent year-over-year growth strengthens your application</li>
      <li><strong>Combine with Spouse's Income:</strong> If your spouse has W-2 income, combine incomes for higher qualification</li>
      <li><strong>Use Alternative Programs:</strong> Bank statement loans or stated income loans don't rely on tax returns</li>
      <li><strong>Apply Early in the Year:</strong> Applying in Q1-Q2 allows you to use the prior year's higher income if current year is slower</li>
    </ul>

    <h3>Deductions That Can Be Added Back</h3>
    <p>Certain non-cash or one-time expenses can be added back to your qualifying income:</p>
    <ul>
      <li><strong>Depreciation:</strong> Non-cash expense that reduced taxable income but didn't affect cash flow</li>
      <li><strong>Depletion:</strong> Similar to depreciation for natural resources</li>
      <li><strong>One-Time Expenses:</strong> Business startup costs, lawsuit settlements, major equipment purchases</li>
      <li><strong>Meals & Entertainment:</strong> Some lenders add back 50-100% of these deductions</li>
      <li><strong>Home Office Deduction:</strong> May be partially added back since it's a personal expense</li>
    </ul>
    <p><strong>Important:</strong> Not all lenders allow add-backs. Work with a mortgage broker familiar with self-employed borrowers.</p>

    <h3>1099 Earner vs. W-2 Employee Mortgage Qualification</h3>
    <table>
      <tr>
        <th>Factor</th>
        <th>1099 Earner</th>
        <th>W-2 Employee</th>
      </tr>
      <tr>
        <td>Income Documentation</td>
        <td>2 years tax returns + Schedule C</td>
        <td>Recent pay stubs + W-2s</td>
      </tr>
      <tr>
        <td>Income Calculation</td>
        <td>Net profit after expenses (averaged)</td>
        <td>Gross salary (current)</td>
      </tr>
      <tr>
        <td>Qualifying Income</td>
        <td>Lower (due to write-offs)</td>
        <td>Higher (full gross income)</td>
      </tr>
      <tr>
        <td>Approval Difficulty</td>
        <td>Moderate to Difficult</td>
        <td>Easy to Moderate</td>
      </tr>
      <tr>
        <td>Time to Close</td>
        <td>30-60 days</td>
        <td>30-45 days</td>
      </tr>
    </table>

    <h3>Declining Income Scenario</h3>
    <p>If your income declined from Year 1 to Year 2, mortgage qualification becomes challenging:</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Year 1 Net Profit:</strong> $90,000</li>
      <li><strong>Year 2 Net Profit:</strong> $70,000</li>
      <li><strong>Average:</strong> $80,000</li>
    </ul>
    
    <p><strong>Lender Treatment:</strong></p>
    <ul>
      <li><strong>Conservative Lenders:</strong> Use only Year 2 income ($70,000)</li>
      <li><strong>Standard Lenders:</strong> Average both years ($80,000)</li>
      <li><strong>Flexible Lenders:</strong> Average but require explanation of decline and proof of recovery</li>
    </ul>
    
    <p><strong>Solutions:</strong></p>
    <ul>
      <li>Provide a detailed letter explaining the decline (one-time event, market conditions, planned investment)</li>
      <li>Show year-to-date income demonstrating recovery</li>
      <li>Provide signed contracts for upcoming work</li>
      <li>Wait 1-2 months to improve the average</li>
    </ul>

    <h3>Alternative Loan Programs for 1099 Earners</h3>
    <ul>
      <li><strong>Bank Statement Loans:</strong> Qualify using 12-24 months of bank deposits instead of tax returns (rates 0.5-2% higher)</li>
      <li><strong>P&L Loans:</strong> Use year-to-date profit & loss statements verified by a CPA (requires 700+ credit)</li>
      <li><strong>Asset Depletion Loans:</strong> Qualify based on liquid assets (stocks, bonds, savings) divided by loan term</li>
      <li><strong>Stated Income Loans:</strong> Rare, require 30-40% down and excellent credit</li>
      <li><strong>FHA Loans:</strong> Accept 1099 income but still require 2 years of tax returns and averaging</li>
    </ul>

    <h3>Tips for First-Time 1099 Homebuyers</h3>
    <ul>
      <li>Work with a CPA to optimize your tax returns 1-2 years before buying</li>
      <li>Avoid large equipment purchases or deductions in the 2 years before applying</li>
      <li>Keep business and personal finances clearly separated</li>
      <li>Build 6-12 months of cash reserves (lenders like to see savings)</li>
      <li>Maintain excellent credit (740+ for best rates)</li>
      <li>Consider a larger down payment (20%+) to offset income variability concerns</li>
      <li>Shop multiple lenders—self-employed mortgage approval varies widely</li>
    </ul>

    <h3>When 1099 Income Isn't Enough</h3>
    <p>If your 1099 income doesn't qualify you for the home you want:</p>
    <ul>
      <li><strong>Co-Borrower:</strong> Add a spouse or family member with W-2 income</li>
      <li><strong>Reduce Debt:</strong> Pay off credit cards and car loans to improve DTI</li>
      <li><strong>Wait and Save:</strong> Larger down payment reduces monthly payment and loan amount</li>
      <li><strong>Increase Income:</strong> Take on more clients or projects for 6-12 months before applying</li>
      <li><strong>File Amended Returns:</strong> Work with a CPA to amend prior returns (shows higher income but takes 6-12 months)</li>
      <li><strong>Lower Purchase Price:</strong> Buy a less expensive home now, refinance later when income is higher</li>
    </ul>

    <h3>DTI Calculation for 1099 Earners</h3>
    <p>Debt-to-Income (DTI) ratio is critical for mortgage approval:</p>
    
    <p><strong>Formula:</strong> (Total Monthly Debts ÷ Gross Monthly Income) × 100</p>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Average Annual Net Profit (2 years):</strong> $85,000</li>
      <li><strong>Monthly Income:</strong> $85,000 ÷ 12 = $7,083</li>
      <li><strong>Proposed Mortgage Payment:</strong> $2,200 (PITI)</li>
      <li><strong>Other Debts:</strong> $500 (car), $300 (student loans), $200 (credit cards)</li>
      <li><strong>Total Monthly Debts:</strong> $3,200</li>
      <li><strong>DTI:</strong> ($3,200 ÷ $7,083) × 100 = 45.2%</li>
    </ul>
    
    <p><strong>DTI Guidelines:</strong></p>
    <ul>
      <li><strong>Excellent:</strong> Below 36% (easiest approval)</li>
      <li><strong>Good:</strong> 36-43% (standard approval)</li>
      <li><strong>Marginal:</strong> 43-50% (requires strong credit and reserves)</li>
      <li><strong>Difficult:</strong> Above 50% (very hard to qualify)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your 1099 income details from your last 2 years of tax returns, including gross income and business expenses. The calculator will show you:</p>
    <ul>
      <li>Your average annual qualifying income (2-year average of net profit)</li>
      <li>Monthly qualifying income for mortgage purposes</li>
      <li>Maximum monthly mortgage payment based on 43% DTI</li>
      <li>Maximum home price you can afford</li>
      <li>Required down payment</li>
      <li>Estimated monthly payment (principal, interest, taxes, insurance)</li>
      <li>Comparison with gross 1099 income to show impact of business expenses</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'year1GrossIncome',
        label: 'Year 1 Gross 1099 Income ($)',
        type: 'number',
        defaultValue: 95000,
      },
      {
        name: 'year1Expenses',
        label: 'Year 1 Business Expenses ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'year2GrossIncome',
        label: 'Year 2 Gross 1099 Income ($)',
        type: 'number',
        defaultValue: 105000,
      },
      {
        name: 'year2Expenses',
        label: 'Year 2 Business Expenses ($)',
        type: 'number',
        defaultValue: 28000,
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debt Obligations ($)',
        type: 'number',
        defaultValue: 800,
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
        defaultValue: 7.0,
      },
      {
        name: 'propertyTaxRate',
        label: 'Annual Property Tax Rate (%)',
        type: 'number',
        defaultValue: 1.2,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [
      { label: 'Year 1 Net Profit', isCurrency: true },
      { label: 'Year 2 Net Profit', isCurrency: true },
      { label: 'Average Annual Qualifying Income', isCurrency: true },
      { label: 'Monthly Qualifying Income', isCurrency: true },
      { label: 'Maximum Monthly Payment (43% DTI)', isCurrency: true },
      { label: 'Maximum Loan Amount', isCurrency: true },
      { label: 'Maximum Home Price', isCurrency: true },
      { label: 'Required Down Payment', isCurrency: true },
    ],
    calculate: (values) => {
      const { year1GrossIncome, year1Expenses, year2GrossIncome, year2Expenses, monthlyDebts, downPaymentPercent, interestRate, propertyTaxRate, homeInsurance } = values;
      
      // Calculate net profit for each year
      const year1NetProfit = year1GrossIncome - year1Expenses;
      const year2NetProfit = year2GrossIncome - year2Expenses;
      
      // Average annual income
      const averageAnnualIncome = (year1NetProfit + year2NetProfit) / 2;
      const monthlyIncome = averageAnnualIncome / 12;
      
      // Maximum monthly payment (43% DTI)
      const maxMonthlyPayment = (monthlyIncome * 0.43) - monthlyDebts;
      
      // Calculate maximum loan amount
      // We need to account for principal + interest + taxes + insurance
      // Monthly payment = P&I + (home price × property tax rate / 12) + (insurance / 12)
      // This requires solving for home price, which we'll approximate
      
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = 30 * 12;
      
      // Estimate insurance and tax as percentage of payment (typically 25-30%)
      const piPayment = maxMonthlyPayment * 0.75; // Assume 75% goes to P&I, 25% to taxes/insurance
      
      // Calculate loan amount from P&I payment
      const maxLoanAmount = piPayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
      
      // Calculate home price from loan amount
      const maxHomePrice = maxLoanAmount / (1 - downPaymentPercent / 100);
      const requiredDownPayment = maxHomePrice - maxLoanAmount;
      
      return [
        { label: 'Year 1 Net Profit', value: year1NetProfit.toFixed(2), isCurrency: true },
        { label: 'Year 2 Net Profit', value: year2NetProfit.toFixed(2), isCurrency: true },
        { label: 'Average Annual Qualifying Income', value: averageAnnualIncome.toFixed(2), isCurrency: true },
        { label: 'Monthly Qualifying Income', value: monthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Maximum Monthly Payment (43% DTI)', value: maxMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Maximum Loan Amount', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Maximum Home Price', value: maxHomePrice.toFixed(2), isCurrency: true },
        { label: 'Required Down Payment', value: requiredDownPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};
