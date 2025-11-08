import { Calculator } from '@/types/calculators';
import { Calculator as CalcIcon } from 'lucide-react';

export const debtToIncomeCalculator: Calculator = {
  title: 'Debt-to-Income (DTI) Ratio Calculator',
  description: 'Calculate your DTI ratio to determine mortgage eligibility and maximum affordable loan amount.',
  icon: CalcIcon,
  category: 'Basic Calculators',
  slug: 'debt-to-income-calculator',
  metaTitle: 'DTI Ratio Calculator | Debt-to-Income Calculator for Mortgage Approval',
  metaDescription: 'Calculate your debt-to-income ratio with our DTI calculator. Determine mortgage qualification, understand lender requirements, and improve your DTI for better loan approval odds.',
  
  article: {
    introduction: `
      <p>Your debt-to-income (DTI) ratio is one of the most important factors lenders consider when evaluating your mortgage application. It measures how much of your monthly income goes toward debt payments. Our DTI Ratio Calculator helps you understand where you stand and what you can afford.</p>
      
      <p>A lower DTI ratio indicates better financial health and increases your chances of mortgage approval with favorable terms.</p>
    `,
    
    sections: [
      {
        title: 'What is Debt-to-Income Ratio?',
        content: `
          <p>The debt-to-income ratio is the percentage of your gross monthly income that goes toward paying debts. It's calculated as:</p>
          
          <p><strong>DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100</strong></p>
          
          <h3>Two Types of DTI Ratios</h3>
          
          <h4>1. Front-End DTI (Housing Ratio)</h4>
          <p>Only includes housing-related expenses:</p>
          <ul>
            <li>Mortgage principal and interest</li>
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>HOA fees (if applicable)</li>
            <li>Mortgage insurance (PMI/MIP)</li>
          </ul>
          <p><strong>Formula:</strong> (Housing Costs ÷ Gross Income) × 100</p>
          <p><strong>Ideal Range:</strong> 28% or less</p>
          
          <h4>2. Back-End DTI (Total DTI)</h4>
          <p>Includes all monthly debt payments:</p>
          <ul>
            <li>All housing costs (from front-end)</li>
            <li>Car loans and leases</li>
            <li>Student loans</li>
            <li>Credit card minimum payments</li>
            <li>Personal loans</li>
            <li>Child support/alimony</li>
            <li>Other installment debts</li>
          </ul>
          <p><strong>Formula:</strong> (Total Debt Payments ÷ Gross Income) × 100</p>
          <p><strong>Ideal Range:</strong> 36% or less (up to 43-50% for some loans)</p>
        `
      },
      {
        title: 'DTI Requirements by Loan Type',
        content: `
          <table>
            <tr>
              <th>Loan Type</th>
              <th>Max Front-End DTI</th>
              <th>Max Back-End DTI</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>Conventional</td>
              <td>28%</td>
              <td>36% (up to 45% with compensating factors)</td>
              <td>Higher DTI allowed with excellent credit, reserves</td>
            </tr>
            <tr>
              <td>FHA</td>
              <td>31%</td>
              <td>43% (up to 50% with strong credit)</td>
              <td>More flexible for first-time buyers</td>
            </tr>
            <tr>
              <td>VA</td>
              <td>No set limit</td>
              <td>41% preferred (up to 50%+ possible)</td>
              <td>Residual income method also used</td>
            </tr>
            <tr>
              <td>USDA</td>
              <td>29%</td>
              <td>41%</td>
              <td>Strict income limits apply</td>
            </tr>
            <tr>
              <td>Jumbo</td>
              <td>28%</td>
              <td>36% (rarely higher)</td>
              <td>Stricter requirements, fewer exceptions</td>
            </tr>
          </table>
          
          <p><strong>Note:</strong> Maximum allowed DTI varies by lender and individual qualifications. These are general guidelines.</p>
        `
      },
      {
        title: 'What Counts as Debt in DTI Calculations?',
        content: `
          <h3>Debts That Count (Always Included)</h3>
          <ul>
            <li><strong>Mortgage/Rent:</strong> Principal, interest, taxes, insurance, HOA</li>
            <li><strong>Auto Loans:</strong> Car payments and leases</li>
            <li><strong>Student Loans:</strong> Actual payment or 1% of balance if deferred</li>
            <li><strong>Credit Cards:</strong> Minimum monthly payment</li>
            <li><strong>Personal Loans:</strong> All installment payments</li>
            <li><strong>Child Support/Alimony:</strong> Court-ordered payments</li>
            <li><strong>Other Mortgages:</strong> Investment properties, second homes</li>
          </ul>
          
          <h3>Debts That Don't Count</h3>
          <ul>
            <li><strong>Utilities:</strong> Electric, gas, water, internet, phone</li>
            <li><strong>Insurance:</strong> Health, auto, life insurance (except home)</li>
            <li><strong>Groceries and Food:</strong> Everyday living expenses</li>
            <li><strong>Medical Bills:</strong> Unless in formal payment plan</li>
            <li><strong>Debts Paid Off:</strong> Loans being paid off at/before closing</li>
            <li><strong>Short-Term Debts:</strong> Debts with < 10 months remaining</li>
            <li><strong>Authorized User Cards:</strong> Cards where you're not responsible</li>
          </ul>
          
          <h3>Special Cases</h3>
          <p><strong>Student Loans in Deferment:</strong></p>
          <ul>
            <li>FHA: 1% of outstanding balance OR actual payment</li>
            <li>Conventional: 1% of balance OR documented payment amount</li>
            <li>Income-driven plans: Use actual documented payment</li>
          </ul>
          
          <p><strong>Business Debt:</strong></p>
          <ul>
            <li>Personal guarantee: Included in DTI</li>
            <li>Corporate only: May be excluded with documentation</li>
          </ul>
        `
      },
      {
        title: 'How to Improve Your DTI Ratio',
        content: `
          <h3>Strategy 1: Reduce Monthly Debt Payments</h3>
          <ul>
            <li><strong>Pay Off Small Debts:</strong> Eliminate smaller loans completely</li>
            <li><strong>Pay Down Credit Cards:</strong> Reduce balances to lower minimum payments</li>
            <li><strong>Refinance High-Interest Debt:</strong> Lower payments through better rates</li>
            <li><strong>Consolidate Loans:</strong> Combine multiple payments into one lower payment</li>
            <li><strong>Extend Car Loan:</strong> Refinance to lower monthly payment (increases total cost)</li>
          </ul>
          
          <h3>Strategy 2: Increase Gross Income</h3>
          <ul>
            <li><strong>Add Co-Borrower:</strong> Include spouse or partner's income</li>
            <li><strong>Document All Income:</strong> Include bonuses, overtime, commissions (if 2+ year history)</li>
            <li><strong>Rental Income:</strong> Include income from investment properties (typically 75%)</li>
            <li><strong>Side Business:</strong> Self-employment income (with 2 years tax returns)</li>
            <li><strong>Part-Time Job:</strong> Additional employment (2+ year history required)</li>
          </ul>
          
          <h3>Strategy 3: Timing Your Mortgage Application</h3>
          <ul>
            <li><strong>Wait to Pay Off Debt:</strong> Get pre-approved first, pay off debts before closing</li>
            <li><strong>Avoid New Debt:</strong> Don't open new credit cards or loans before applying</li>
            <li><strong>Delay Large Purchases:</strong> Wait until after closing to buy cars, furniture</li>
            <li><strong>10-Month Rule:</strong> Debts with <10 months remaining may not count</li>
          </ul>
          
          <h3>Strategy 4: Alternative Loan Programs</h3>
          <ul>
            <li><strong>VA Loan:</strong> More flexible DTI, uses residual income method</li>
            <li><strong>FHA Loan:</strong> Allows up to 50% DTI with strong compensating factors</li>
            <li><strong>Portfolio Lenders:</strong> May have more flexible DTI requirements</li>
          </ul>
        `
      },
      {
        title: 'DTI and Mortgage Qualification',
        content: `
          <h3>What Your DTI Ratio Means</h3>
          
          <h4>Excellent (DTI < 28%)</h4>
          <ul>
            <li>Qualify for best interest rates</li>
            <li>Approved for conventional, FHA, VA, USDA loans</li>
            <li>Maximum flexibility in loan options</li>
            <li>Strong financial position</li>
          </ul>
          
          <h4>Good (DTI 28-36%)</h4>
          <ul>
            <li>Qualify for most loan types</li>
            <li>Competitive interest rates</li>
            <li>May need compensating factors for conventional loans</li>
            <li>Generally healthy financial situation</li>
          </ul>
          
          <h4>Fair (DTI 37-43%)</h4>
          <ul>
            <li>Qualify for FHA, VA, some conventional loans</li>
            <li>May need excellent credit score to compensate</li>
            <li>Higher cash reserves may be required</li>
            <li>Limited loan program options</li>
          </ul>
          
          <h4>Poor (DTI 44-50%)</h4>
          <ul>
            <li>Very limited loan options</li>
            <li>FHA possible with strong credit, reserves</li>
            <li>VA possible with residual income test</li>
            <li>Conventional loans unlikely</li>
            <li>Should focus on debt reduction</li>
          </ul>
          
          <h4>Very Poor (DTI > 50%)</h4>
          <ul>
            <li>Mortgage approval extremely difficult</li>
            <li>Focus on debt reduction before applying</li>
            <li>May need non-traditional lenders</li>
            <li>Higher interest rates if approved</li>
          </ul>
        `
      },
      {
        title: 'How to Use This DTI Calculator',
        content: `
          <p>To calculate your debt-to-income ratio:</p>
          
          <ol>
            <li><strong>Enter Gross Monthly Income:</strong> Pre-tax income from all sources</li>
            <li><strong>Enter Housing Costs:</strong> Proposed mortgage payment including PITI</li>
            <li><strong>List All Debts:</strong> Monthly minimum payments for all debts</li>
            <li><strong>Include Specifics:</strong>
              <ul>
                <li>Car loan/lease payments</li>
                <li>Student loan payments</li>
                <li>Credit card minimum payments</li>
                <li>Personal loans</li>
                <li>Other obligations</li>
              </ul>
            </li>
            <li><strong>Review Results:</strong> See front-end, back-end DTI, and qualification assessment</li>
            <li><strong>Explore Scenarios:</strong> Test different debt payoff strategies</li>
          </ol>
          
          <h3>Understanding Your Results</h3>
          <p>The calculator shows:</p>
          <ul>
            <li><strong>Front-End DTI:</strong> Housing costs only</li>
            <li><strong>Back-End DTI:</strong> All debts including housing</li>
            <li><strong>Qualification Status:</strong> Likely approval odds by loan type</li>
            <li><strong>Recommended Actions:</strong> Steps to improve your ratio</li>
            <li><strong>Maximum Affordable Payment:</strong> Based on target DTI</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'Do I need to include my spouse\'s debts if we\'re applying for a mortgage together?',
        answer: 'Yes, when applying jointly, you must include both incomes and all debts from both applicants. This calculates your combined DTI ratio. However, if only one spouse is applying, you only include that person\'s debts (except joint debts).'
      },
      {
        question: 'Should I pay off debt before applying for a mortgage?',
        answer: 'It depends on your DTI and cash position. If your DTI is high (>43%), paying off debt can improve approval odds. However, you also need cash for down payment and closing costs. Work with a lender to determine the optimal strategy - sometimes keeping debt but having larger reserves is better.'
      },
      {
        question: 'What if my student loans are in deferment?',
        answer: 'Lenders typically calculate 1% of your total student loan balance as your monthly payment, even if they\'re deferred. Some lenders accept $0 if you have an income-driven repayment plan showing $0 payments. Get documentation from your loan servicer.'
      },
      {
        question: 'Can I exclude debts I plan to pay off before closing?',
        answer: 'Yes, if you can document that a debt will be paid off at or before closing, it can be excluded from your DTI calculation. However, you must show proof of payoff, and the payoff amount is subtracted from your cash reserves.'
      },
      {
        question: 'What happens if my DTI is too high for the loan I want?',
        answer: 'You have several options: 1) Pay down existing debt to lower your DTI, 2) Increase your income by adding a co-borrower, 3) Choose a less expensive home to lower your housing payment, 4) Look into programs with higher DTI allowances like FHA or VA loans, or 5) Wait and improve your financial situation before buying.'
      }
    ]
  }
};
