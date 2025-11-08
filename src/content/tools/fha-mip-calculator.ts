import { CalculatorContent } from '@/types';

export const FHA_MIP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'FHA MIP Calculator',
  description: 'Calculate FHA Mortgage Insurance Premium (MIP) - both upfront and annual premiums',
  slug: 'fha-mip-calculator',
  icon: '🛡️',
  category: 'Basic Calculators',
  metaTitle: 'FHA MIP Calculator - Calculate Mortgage Insurance Premium Costs',
  metaDescription: 'Free FHA MIP calculator. Calculate both upfront (1.75%) and annual mortgage insurance premiums. Understand your total MIP costs instantly.',
  article: {
    title: 'Understanding FHA Mortgage Insurance Premium (MIP)',
    content: `
    <h2>What is FHA Mortgage Insurance Premium (MIP)?</h2>
    <p>FHA Mortgage Insurance Premium (MIP) is an insurance policy that protects lenders if you default on your FHA loan. Unlike conventional loans where PMI can be removed, FHA MIP has specific rules about when and how it can be eliminated. All FHA borrowers must pay MIP, which comes in two forms: an upfront premium and an annual premium paid monthly.</p>
    
    <h3>Two Types of FHA MIP</h3>
    
    <h4>1. Upfront MIP (UFMIP):</h4>
    <ul>
      <li><strong>Rate:</strong> 1.75% of the base loan amount</li>
      <li><strong>When Paid:</strong> At closing (typically rolled into loan)</li>
      <li><strong>Example:</strong> $300,000 loan = $5,250 upfront MIP</li>
      <li><strong>Refundable:</strong> Partially refundable if you refinance within 3 years</li>
      <li><strong>Financing:</strong> Can be added to your loan amount</li>
    </ul>

    <h4>2. Annual MIP (Paid Monthly):</h4>
    <ul>
      <li><strong>Rate:</strong> 0.45% to 0.85% of average annual loan balance</li>
      <li><strong>When Paid:</strong> Monthly as part of your mortgage payment</li>
      <li><strong>Duration:</strong> Depends on loan term and down payment</li>
      <li><strong>Example:</strong> $300,000 loan at 0.85% = $212.50/month</li>
    </ul>

    <h3>2024 Annual MIP Rates</h3>
    
    <h4>Loans $726,200 or Less:</h4>
    <table>
      <tr>
        <th>Loan Term</th>
        <th>LTV ≤ 90%</th>
        <th>LTV > 90% to 95%</th>
        <th>LTV > 95%</th>
      </tr>
      <tr>
        <td>≤ 15 years</td>
        <td>0.45%</td>
        <td>0.70%</td>
        <td>0.70%</td>
      </tr>
      <tr>
        <td>> 15 years</td>
        <td>0.50%</td>
        <td>0.70%</td>
        <td>0.85%</td>
      </tr>
    </table>

    <h4>Loans Greater Than $726,200:</h4>
    <table>
      <tr>
        <th>Loan Term</th>
        <th>LTV ≤ 90%</th>
        <th>LTV > 90% to 95%</th>
        <th>LTV > 95%</th>
      </tr>
      <tr>
        <td>≤ 15 years</td>
        <td>0.70%</td>
        <td>0.95%</td>
        <td>0.95%</td>
      </tr>
      <tr>
        <td>> 15 years</td>
        <td>0.75%</td>
        <td>0.95%</td>
        <td>1.00%</td>
      </tr>
    </table>

    <h3>How Long Do You Pay FHA MIP?</h3>
    
    <h4>For Loans with Less Than 10% Down:</h4>
    <ul>
      <li><strong>Duration:</strong> Life of the loan (cannot be removed)</li>
      <li><strong>Only Way to Remove:</strong> Refinance to conventional loan</li>
      <li><strong>Applies to:</strong> Loans with LTV > 90% at origination</li>
    </ul>

    <h4>For Loans with 10% or More Down:</h4>
    <ul>
      <li><strong>Duration:</strong> 11 years</li>
      <li><strong>Automatic Removal:</strong> After 11 years of payments</li>
      <li><strong>No Action Needed:</strong> Lender automatically removes</li>
      <li><strong>Applies to:</strong> Loans with LTV ≤ 90% at origination</li>
    </ul>

    <h4>For 15-Year Loans:</h4>
    <ul>
      <li><strong>With 10%+ Down (LTV ≤ 90%):</strong> No annual MIP required</li>
      <li><strong>With Less Than 10% Down:</strong> Removed after 11 years</li>
      <li><strong>Benefit:</strong> Shorter MIP duration on 15-year mortgages</li>
    </ul>

    <h3>How to Use This FHA MIP Calculator</h3>
    <p>Enter the following information to calculate your FHA MIP costs:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The amount you're borrowing</li>
      <li><strong>Home Price:</strong> Purchase price of the property</li>
      <li><strong>Loan Term:</strong> 15 or 30 years</li>
      <li><strong>Down Payment:</strong> Your down payment amount or percentage</li>
    </ul>
    <p>The calculator will show both upfront and annual MIP costs.</p>

    <h3>FHA MIP vs. Conventional PMI Comparison</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>FHA MIP</th>
        <th>Conventional PMI</th>
      </tr>
      <tr>
        <td>Upfront Cost</td>
        <td>1.75% of loan</td>
        <td>None (or small one-time fee)</td>
      </tr>
      <tr>
        <td>Monthly Cost</td>
        <td>0.45%-1.00%</td>
        <td>0.30%-1.50%</td>
      </tr>
      <tr>
        <td>Removal (< 10% down)</td>
        <td>Life of loan</td>
        <td>At 20% equity</td>
      </tr>
      <tr>
        <td>Removal (≥ 10% down)</td>
        <td>11 years</td>
        <td>At 20% equity</td>
      </tr>
      <tr>
        <td>Can be Cancelled</td>
        <td>Only via refinance</td>
        <td>Yes, at 20% equity</td>
      </tr>
      <tr>
        <td>Required When</td>
        <td>All FHA loans</td>
        <td>Less than 20% down</td>
      </tr>
    </table>

    <h3>Cost Example: $300,000 FHA Loan</h3>
    
    <h4>Scenario: 3.5% Down, 30-Year Loan</h4>
    <ul>
      <li><strong>Home Price:</strong> $310,500</li>
      <li><strong>Down Payment:</strong> $10,500 (3.5%)</li>
      <li><strong>Loan Amount:</strong> $300,000</li>
      <li><strong>Upfront MIP:</strong> $5,250 (1.75%)</li>
      <li><strong>Annual MIP Rate:</strong> 0.85% (LTV 96.5%)</li>
      <li><strong>Monthly MIP:</strong> $212.50</li>
      <li><strong>Year 1 Total MIP:</strong> $7,800 ($5,250 + $2,550)</li>
      <li><strong>10-Year Total MIP:</strong> $30,750</li>
      <li><strong>30-Year Total MIP:</strong> $81,750 (life of loan)</li>
    </ul>

    <h3>How to Reduce or Eliminate FHA MIP</h3>
    
    <h4>Strategy 1: Make a 10% Down Payment</h4>
    <ul>
      <li>Reduces annual MIP rate</li>
      <li>MIP automatically removed after 11 years</li>
      <li>Saves tens of thousands over life of loan</li>
      <li>Best option if you have the funds</li>
    </ul>

    <h4>Strategy 2: Choose a 15-Year Loan</h4>
    <ul>
      <li>Lower MIP rates (0.45%-0.70%)</li>
      <li>No MIP with 10%+ down</li>
      <li>Higher monthly payments but less total interest</li>
      <li>MIP removed after 11 years if under 10% down</li>
    </ul>

    <h4>Strategy 3: Refinance to Conventional</h4>
    <ul>
      <li>When you reach 20% equity, refinance to conventional</li>
      <li>Eliminates FHA MIP completely</li>
      <li>No PMI required with 20% equity</li>
      <li>May get lower interest rate</li>
      <li>Typical timeline: 5-7 years with property appreciation</li>
    </ul>

    <h4>Strategy 4: Wait for Automatic Removal (10%+ Down)</h4>
    <ul>
      <li>If you put 10% down, MIP drops off after 11 years</li>
      <li>No refinance needed</li>
      <li>Automatic process</li>
      <li>Saves money in years 12-30</li>
    </ul>

    <h3>When FHA MIP Makes Sense</h3>
    <p>Despite the cost, FHA loans with MIP can be the right choice when:</p>
    <ul>
      <li><strong>Low Down Payment:</strong> You only have 3.5% down</li>
      <li><strong>Credit Challenges:</strong> Credit score below 680</li>
      <li><strong>First-Time Buyer:</strong> Limited savings and experience</li>
      <li><strong>Plan to Refinance:</strong> Intend to refinance within 5-10 years</li>
      <li><strong>Seller Concessions:</strong> Seller pays closing costs including upfront MIP</li>
    </ul>

    <h3>When to Avoid FHA MIP</h3>
    <p>Consider conventional instead if you:</p>
    <ul>
      <li>Have 5% or more to put down</li>
      <li>Have a credit score above 680</li>
      <li>Plan to stay in the home long-term (20+ years)</li>
      <li>Want the ability to cancel mortgage insurance</li>
      <li>Can qualify for conventional loan terms</li>
    </ul>

    <h3>FHA MIP Refunds</h3>
    <p>You may be eligible for a partial upfront MIP refund if you:</p>
    <ul>
      <li>Refinance your FHA loan to another FHA loan within 3 years</li>
      <li>Sell your home within 3 years</li>
      <li>Pay off your FHA loan within 3 years</li>
    </ul>
    <p>Refund amount decreases over time and is calculated based on when you pay off the loan.</p>

    <h3>Tax Deductibility of MIP</h3>
    <p>FHA MIP may be tax deductible if:</p>
    <ul>
      <li>Your adjusted gross income is below certain limits</li>
      <li>You itemize deductions</li>
      <li>The loan was taken out after 2006</li>
      <li>Congress extends the MIP deduction (check current year rules)</li>
    </ul>
    <p>Consult a tax professional for guidance on your specific situation.</p>

    <h3>Bottom Line on FHA MIP</h3>
    <p>FHA MIP adds significant cost to FHA loans, especially with less than 10% down. However, FHA loans remain valuable for buyers who:</p>
    <ul>
      <li>Need low down payment options (3.5%)</li>
      <li>Have lower credit scores</li>
      <li>Plan to build equity and refinance</li>
      <li>Value flexible qualification requirements</li>
    </ul>
    <p>Use this calculator to understand your exact MIP costs and create a plan to minimize or eliminate them over time.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 310500,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'select',
        defaultValue: 30,
        options: [
          { value: 15, label: '15 Years' },
          { value: 30, label: '30 Years' }
        ]
      },
    ],
    results: [
      { label: 'Upfront MIP', isCurrency: true },
      { label: 'Annual MIP Rate', isCurrency: false },
      { label: 'Monthly MIP Payment', isCurrency: true },
      { label: 'Total MIP Year 1', isCurrency: true },
      { label: 'Total MIP Over Life', isCurrency: true },
      { label: 'MIP Duration', isCurrency: false },
      { label: 'Loan-to-Value (LTV)', isCurrency: false },
      { label: 'Total Loan with Upfront MIP', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, homePrice, loanTerm } = values;
      
      const upfrontMIP = loanAmount * 0.0175;
      const totalLoanWithMIP = loanAmount + upfrontMIP;
      const ltv = (loanAmount / homePrice) * 100;
      const downPaymentPercent = ((homePrice - loanAmount) / homePrice) * 100;
      
      let annualMIPRate = 0;
      if (loanAmount <= 726200) {
        if (loanTerm <= 15) {
          if (ltv <= 90) annualMIPRate = 0.0045;
          else if (ltv <= 95) annualMIPRate = 0.0070;
          else annualMIPRate = 0.0070;
        } else {
          if (ltv <= 90) annualMIPRate = 0.0050;
          else if (ltv <= 95) annualMIPRate = 0.0070;
          else annualMIPRate = 0.0085;
        }
      } else {
        if (loanTerm <= 15) {
          if (ltv <= 90) annualMIPRate = 0.0070;
          else if (ltv <= 95) annualMIPRate = 0.0095;
          else annualMIPRate = 0.0095;
        } else {
          if (ltv <= 90) annualMIPRate = 0.0075;
          else if (ltv <= 95) annualMIPRate = 0.0095;
          else annualMIPRate = 0.0100;
        }
      }
      
      const monthlyMIP = (loanAmount * annualMIPRate) / 12;
      const annualMIP = monthlyMIP * 12;
      const year1TotalMIP = upfrontMIP + annualMIP;
      
      let mipDuration = '';
      let totalMIPOverLife = 0;
      
      if (downPaymentPercent >= 10) {
        mipDuration = '11 years';
        totalMIPOverLife = upfrontMIP + (monthlyMIP * 132);
      } else {
        if (loanTerm === 15) {
          mipDuration = '11 years';
          totalMIPOverLife = upfrontMIP + (monthlyMIP * 132);
        } else {
          mipDuration = 'Life of loan (30 years)';
          totalMIPOverLife = upfrontMIP + (monthlyMIP * 360);
        }
      }
      
      const annualMIPPercent = (annualMIPRate * 100).toFixed(2) + '%';
      const ltvPercent = ltv.toFixed(2) + '%';

      return [
        { label: 'Upfront MIP', value: upfrontMIP.toFixed(2), isCurrency: true },
        { label: 'Annual MIP Rate', value: annualMIPPercent, isCurrency: false },
        { label: 'Monthly MIP Payment', value: monthlyMIP.toFixed(2), isCurrency: true },
        { label: 'Total MIP Year 1', value: year1TotalMIP.toFixed(2), isCurrency: true },
        { label: 'Total MIP Over Life', value: totalMIPOverLife.toFixed(2), isCurrency: true },
        { label: 'MIP Duration', value: mipDuration, isCurrency: false },
        { label: 'Loan-to-Value (LTV)', value: ltvPercent, isCurrency: false },
        { label: 'Total Loan with Upfront MIP', value: totalLoanWithMIP.toFixed(2), isCurrency: true },
      ];
    },
  },
};
