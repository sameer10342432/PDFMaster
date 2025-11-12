import { CalculatorContent } from '@/types';

export const W2_EARNER_MORTGAGE_QUALIFIER_CONTENT: CalculatorContent = {
  title: 'W-2 Earner Mortgage Qualifier',
  description: 'Calculate mortgage qualification for W-2 employees with salary, bonuses, and overtime income. Determine how much home you can afford as a salaried employee.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'w2-earner-mortgage-qualifier',
  article: {
    title: "W-2 Earner Mortgage Qualifier: Complete Guide for Salaried Employees",
    content: `
    <h2>Mortgage Qualification for W-2 Employees</h2>
    <p>W-2 employees (salaried workers) typically have the easiest path to mortgage approval because lenders view regular paychecks as stable, predictable income. This calculator helps you determine how much home you can afford based on your W-2 income, including base salary, bonuses, overtime, and commissions.</p>

    <h3>Who is a W-2 Earner?</h3>
    <p>You're a W-2 earner if you:</p>
    <ul>
      <li>Receive a W-2 form from your employer each year</li>
      <li>Have taxes withheld from your paycheck automatically</li>
      <li>Work as a full-time or part-time employee (not a contractor)</li>
      <li>Receive regular paychecks (weekly, bi-weekly, semi-monthly, or monthly)</li>
      <li>May receive benefits like health insurance, 401(k), and paid time off</li>
    </ul>

    <h3>Types of W-2 Income Lenders Accept</h3>
    <p>Lenders count different types of W-2 income, but with varying rules:</p>
    
    <h4>1. Base Salary (100% Counted)</h4>
    <ul>
      <li><strong>Requirement:</strong> Current employment (usually 30+ days with current employer)</li>
      <li><strong>Documentation:</strong> Recent pay stubs (last 30 days) + W-2s (last 2 years)</li>
      <li><strong>Calculation:</strong> If paid hourly, average hours × hourly rate × 52 weeks ÷ 12 months</li>
      <li><strong>Best For:</strong> Consistent, predictable income with no variability</li>
    </ul>
    
    <h4>2. Overtime Income (Counted if 2-Year History)</h4>
    <ul>
      <li><strong>Requirement:</strong> 2-year history of consistent overtime</li>
      <li><strong>Documentation:</strong> Pay stubs showing overtime + W-2s proving consistency</li>
      <li><strong>Calculation:</strong> Average overtime from past 2 years</li>
      <li><strong>Risk:</strong> If overtime is declining or inconsistent, lenders may exclude it entirely</li>
    </ul>
    
    <h4>3. Bonus Income (2-Year Average)</h4>
    <ul>
      <li><strong>Requirement:</strong> 2-year history of bonuses</li>
      <li><strong>Documentation:</strong> W-2s showing bonus amounts for last 2 years</li>
      <li><strong>Calculation:</strong> Average of 2 years (if declining, lenders may use only Year 2)</li>
      <li><strong>Types Counted:</strong> Annual bonuses, performance bonuses, sign-on bonuses (if recurring)</li>
    </ul>
    
    <h4>4. Commission Income (2-Year Average, Closely Scrutinized)</h4>
    <ul>
      <li><strong>Requirement:</strong> 2 years of commission income in the same industry</li>
      <li><strong>Documentation:</strong> Pay stubs, W-2s, employer letter explaining commission structure</li>
      <li><strong>Calculation:</strong> Average commissions over 2 years (conservative lenders use only the lower year)</li>
      <li><strong>Risk:</strong> Highly variable commissions may be partially or fully excluded</li>
    </ul>

    <h3>W-2 Income Calculation Example</h3>
    <p><strong>Scenario: Software Engineer with Base + Bonus</strong></p>
    
    <p><strong>Income Breakdown:</strong></p>
    <ul>
      <li><strong>Base Salary:</strong> $120,000/year ($10,000/month)</li>
      <li><strong>Year 1 Bonus:</strong> $15,000</li>
      <li><strong>Year 2 Bonus:</strong> $18,000</li>
      <li><strong>Average Bonus:</strong> ($15,000 + $18,000) ÷ 2 = $16,500/year ($1,375/month)</li>
    </ul>
    
    <p><strong>Qualifying Income:</strong></p>
    <ul>
      <li><strong>Monthly Base:</strong> $10,000</li>
      <li><strong>Monthly Bonus (averaged):</strong> $1,375</li>
      <li><strong>Total Monthly Qualifying Income:</strong> $11,375</li>
    </ul>
    
    <p><strong>Mortgage Qualification (43% DTI):</strong></p>
    <ul>
      <li><strong>Maximum Monthly Payment:</strong> $11,375 × 0.43 = $4,891</li>
      <li><strong>Minus Existing Debts:</strong> $4,891 - $500 = $4,391 available for mortgage</li>
      <li><strong>Maximum Loan Amount (7% rate, 30 years):</strong> ~$660,000</li>
      <li><strong>Maximum Home Price (20% down):</strong> ~$825,000</li>
    </ul>

    <h3>Documentation Required for W-2 Borrowers</h3>
    <ul>
      <li><strong>Recent Pay Stubs:</strong> Last 30 days (showing year-to-date earnings)</li>
      <li><strong>W-2 Forms:</strong> Last 2 years from all employers</li>
      <li><strong>Employment Verification:</strong> Lender contacts your HR department to confirm employment</li>
      <li><strong>Personal Tax Returns:</strong> Last 2 years (required if you have rental income, side business, or write-offs)</li>
      <li><strong>Offer Letter or Contract:</strong> For new jobs or job changes</li>
      <li><strong>Explanation Letters:</strong> For employment gaps, job changes, or income fluctuations</li>
    </ul>

    <h3>Advantages of W-2 Income for Mortgages</h3>
    <ul>
      <li>Easier qualification—lenders prefer stable, predictable income</li>
      <li>Full gross salary counts (no deductions for business expenses)</li>
      <li>Faster approval process (less documentation than self-employed)</li>
      <li>Better interest rates compared to non-traditional income</li>
      <li>Qualify with as little as 30 days on the job (if in the same field)</li>
      <li>Bonus and overtime can significantly boost qualifying income</li>
    </ul>

    <h3>Challenges W-2 Earners Face</h3>
    <ul>
      <li><strong>Job Changes:</strong> Switching jobs during the mortgage process can delay approval (lender must re-verify employment)</li>
      <li><strong>Probationary Periods:</strong> Some employers have 90-day probation; lenders may require you to pass probation first</li>
      <li><strong>Declining Bonuses:</strong> If Year 2 bonus is lower than Year 1, lenders may only use Year 2 or exclude bonuses entirely</li>
      <li><strong>Part-Time to Full-Time:</strong> Transitioning from part-time to full-time requires a 2-year history at full-time hours to use full income</li>
      <li><strong>Salary vs. Hourly:</strong> Hourly workers must show consistent hours (variable hours may be averaged conservatively)</li>
    </ul>

    <h3>Special Situations for W-2 Earners</h3>
    
    <h4>Recent Job Change (Same Industry)</h4>
    <ul>
      <li><strong>Scenario:</strong> You changed jobs within the last 2 years but stayed in the same field</li>
      <li><strong>Lender Treatment:</strong> Generally no problem if it's a lateral move or promotion</li>
      <li><strong>Documentation Needed:</strong> Offer letter, first pay stub, employment verification</li>
      <li><strong>Timeline:</strong> Most lenders require 30 days on the new job (some allow 0 days if no employment gap)</li>
    </ul>
    
    <h4>Recent Job Change (Different Industry)</h4>
    <ul>
      <li><strong>Scenario:</strong> You switched careers (e.g., teacher to software developer)</li>
      <li><strong>Lender Treatment:</strong> Requires 6-12 months in the new role to prove stability</li>
      <li><strong>Documentation Needed:</strong> Detailed letter explaining career change and income stability</li>
      <li><strong>Workaround:</strong> Some lenders waive the waiting period if the new job is significantly higher paid</li>
    </ul>
    
    <h4>New Graduate</h4>
    <ul>
      <li><strong>Scenario:</strong> You just graduated and started your first full-time job</li>
      <li><strong>Lender Treatment:</strong> Many lenders accept offer letters and first pay stubs</li>
      <li><strong>Requirement:</strong> Job must be in your field of study</li>
      <li><strong>Documentation:</strong> Offer letter, diploma, transcripts, first pay stub</li>
    </ul>
    
    <h4>Two W-2 Jobs (Multiple Employers)</h4>
    <ul>
      <li><strong>Scenario:</strong> You work two jobs simultaneously</li>
      <li><strong>Lender Treatment:</strong> Both incomes count if you have a 2-year history of working multiple jobs</li>
      <li><strong>Documentation:</strong> Pay stubs and W-2s from both employers</li>
      <li><strong>Risk:</strong> If second job is new, lenders may exclude it</li>
    </ul>

    <h3>W-2 Earner vs. 1099 Contractor Mortgage Comparison</h3>
    <table>
      <tr>
        <th>Factor</th>
        <th>W-2 Employee</th>
        <th>1099 Contractor</th>
      </tr>
      <tr>
        <td>Qualifying Income</td>
        <td>Full gross salary</td>
        <td>Net profit after expenses</td>
      </tr>
      <tr>
        <td>Documentation</td>
        <td>Pay stubs + W-2s</td>
        <td>Tax returns + Schedule C</td>
      </tr>
      <tr>
        <td>Employment History</td>
        <td>30 days (same field)</td>
        <td>2 years required</td>
      </tr>
      <tr>
        <td>Approval Difficulty</td>
        <td>Easy</td>
        <td>Moderate to Hard</td>
      </tr>
      <tr>
        <td>Income Averaging</td>
        <td>Current income used</td>
        <td>2-year average</td>
      </tr>
      <tr>
        <td>Interest Rates</td>
        <td>Best available</td>
        <td>0-0.5% higher</td>
      </tr>
    </table>

    <h3>Debt-to-Income (DTI) Ratio for W-2 Earners</h3>
    <p>DTI is the most important factor in mortgage qualification:</p>
    
    <p><strong>Formula:</strong> (Total Monthly Debts ÷ Gross Monthly Income) × 100</p>
    
    <p><strong>Example Calculation:</strong></p>
    <ul>
      <li><strong>Gross Monthly Income:</strong> $8,000</li>
      <li><strong>Car Payment:</strong> $400</li>
      <li><strong>Student Loans:</strong> $250</li>
      <li><strong>Credit Cards (minimum payment):</strong> $100</li>
      <li><strong>Proposed Mortgage:</strong> $2,200 (PITI)</li>
      <li><strong>Total Monthly Debts:</strong> $2,950</li>
      <li><strong>DTI:</strong> ($2,950 ÷ $8,000) × 100 = 36.9%</li>
    </ul>
    
    <p><strong>DTI Guidelines:</strong></p>
    <ul>
      <li><strong>Excellent (Below 36%):</strong> Easy approval, best rates</li>
      <li><strong>Good (36-43%):</strong> Standard approval</li>
      <li><strong>Marginal (43-50%):</strong> Requires strong credit and reserves</li>
      <li><strong>Difficult (Above 50%):</strong> Hard to qualify, consider paying off debts first</li>
    </ul>

    <h3>How to Maximize Your W-2 Qualifying Income</h3>
    <ul>
      <li><strong>Include Bonuses:</strong> Provide 2 years of W-2s showing consistent bonuses</li>
      <li><strong>Document Overtime:</strong> Show 2-year history of regular overtime on pay stubs</li>
      <li><strong>Employer Letter:</strong> Get a letter confirming income, bonuses, and employment stability</li>
      <li><strong>Pay Off Debts:</strong> Reduce or eliminate car loans, credit cards, and student loans to lower DTI</li>
      <li><strong>Increase Credit Score:</strong> 740+ credit score qualifies for the best rates</li>
      <li><strong>Combine Incomes:</strong> If married, combine both W-2 incomes for higher qualification</li>
      <li><strong>Wait After Job Change:</strong> If possible, wait 30-60 days after starting a new job before applying</li>
    </ul>

    <h3>Common W-2 Income Mistakes to Avoid</h3>
    <ul>
      <li><strong>Changing Jobs Mid-Process:</strong> Switching jobs during underwriting can derail your approval</li>
      <li><strong>Not Providing All W-2s:</strong> Lenders need W-2s from all employers for the past 2 years</li>
      <li><strong>Assuming Bonuses Count 100%:</strong> Bonuses are averaged over 2 years, not taken at face value</li>
      <li><strong>Ignoring Employment Gaps:</strong> Gaps longer than 30 days require written explanations</li>
      <li><strong>Forgetting Part-Time Income:</strong> If you have a second job with 2+ year history, it counts!</li>
    </ul>

    <h3>The 28/36 Rule for W-2 Borrowers</h3>
    <p>A traditional rule of thumb for mortgage affordability:</p>
    <ul>
      <li><strong>28% Rule (Front-End Ratio):</strong> Housing costs should not exceed 28% of gross monthly income</li>
      <li><strong>36% Rule (Back-End Ratio):</strong> Total debts (housing + all other debts) should not exceed 36% of gross income</li>
    </ul>
    
    <p><strong>Example ($100,000 Annual Salary):</strong></p>
    <ul>
      <li><strong>Gross Monthly Income:</strong> $8,333</li>
      <li><strong>Maximum Housing Payment (28%):</strong> $2,333</li>
      <li><strong>Maximum Total Debts (36%):</strong> $3,000</li>
      <li><strong>Maximum Non-Housing Debts:</strong> $667 (car, credit cards, student loans)</li>
    </ul>
    
    <p><strong>Note:</strong> Many lenders now use 43% DTI for back-end ratio, allowing higher debt levels.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your W-2 income details, including base salary and any bonuses or overtime from the past 2 years. The calculator will show you:</p>
    <ul>
      <li>Your total monthly qualifying income (base + averaged bonuses/overtime)</li>
      <li>Maximum monthly mortgage payment based on 43% DTI</li>
      <li>Maximum loan amount you can qualify for</li>
      <li>Maximum home price based on your down payment percentage</li>
      <li>Required down payment amount</li>
      <li>Estimated monthly payment including taxes and insurance</li>
      <li>Your debt-to-income ratio</li>
      <li>Front-end and back-end ratios</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'annualSalary',
        label: 'Annual Base Salary ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'year1Bonus',
        label: 'Year 1 Bonus ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'year2Bonus',
        label: 'Year 2 Bonus ($)',
        type: 'number',
        defaultValue: 18000,
      },
      {
        name: 'overtimeIncome',
        label: 'Annual Overtime Income (if consistent 2+ years) ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'monthlyDebts',
        label: 'Monthly Debt Obligations ($)',
        type: 'number',
        defaultValue: 500,
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
      { label: 'Monthly Base Salary', isCurrency: true },
      { label: 'Average Monthly Bonus', isCurrency: true },
      { label: 'Monthly Overtime Income', isCurrency: true },
      { label: 'Total Monthly Qualifying Income', isCurrency: true },
      { label: 'Maximum Monthly Payment (43% DTI)', isCurrency: true },
      { label: 'Maximum Loan Amount', isCurrency: true },
      { label: 'Maximum Home Price', isCurrency: true },
      { label: 'Required Down Payment', isCurrency: true },
      { label: 'Your Debt-to-Income Ratio', isCurrency: false },
    ],
    calculate: (values) => {
      const { annualSalary, year1Bonus, year2Bonus, overtimeIncome, monthlyDebts, downPaymentPercent, interestRate, propertyTaxRate, homeInsurance } = values;
      
      // Calculate monthly income components
      const monthlyBaseSalary = annualSalary / 12;
      const averageBonus = (year1Bonus + year2Bonus) / 2;
      const monthlyBonus = averageBonus / 12;
      const monthlyOvertime = overtimeIncome / 12;
      
      // Total monthly qualifying income
      const totalMonthlyIncome = monthlyBaseSalary + monthlyBonus + monthlyOvertime;
      
      // Maximum monthly payment (43% DTI)
      const maxMonthlyPayment = (totalMonthlyIncome * 0.43) - monthlyDebts;
      
      // Calculate maximum loan amount
      // Estimate P&I as 75% of total payment, with 25% for taxes/insurance
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = 30 * 12;
      const piPayment = maxMonthlyPayment * 0.75;
      
      const maxLoanAmount = piPayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
      
      // Calculate maximum home price
      const maxHomePrice = maxLoanAmount / (1 - downPaymentPercent / 100);
      const requiredDownPayment = maxHomePrice - maxLoanAmount;
      
      // Calculate DTI ratio
      const dtiRatio = ((monthlyDebts + maxMonthlyPayment) / totalMonthlyIncome * 100).toFixed(1) + '%';
      
      return [
        { label: 'Monthly Base Salary', value: monthlyBaseSalary.toFixed(2), isCurrency: true },
        { label: 'Average Monthly Bonus', value: monthlyBonus.toFixed(2), isCurrency: true },
        { label: 'Monthly Overtime Income', value: monthlyOvertime.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Qualifying Income', value: totalMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Maximum Monthly Payment (43% DTI)', value: maxMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Maximum Loan Amount', value: maxLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Maximum Home Price', value: maxHomePrice.toFixed(2), isCurrency: true },
        { label: 'Required Down Payment', value: requiredDownPayment.toFixed(2), isCurrency: true },
        { label: 'Your Debt-to-Income Ratio', value: dtiRatio, isCurrency: false },
      ];
    },
  },
};
