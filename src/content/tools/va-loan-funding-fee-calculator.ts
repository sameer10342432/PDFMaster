import { CalculatorContent } from '@/types';

export const VA_LOAN_FUNDING_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VA Loan Funding Fee Calculator',
  description: 'Calculate the VA funding fee for your home purchase or refinance',
  slug: 'va-loan-funding-fee-calculator',
  icon: '💵',
  category: 'Basic Calculators',
  metaTitle: 'VA Funding Fee Calculator - Calculate VA Loan Fees for Veterans & Military',
  metaDescription: 'Free VA funding fee calculator. Determine exact fees based on loan type, down payment, and service history. Check exemption eligibility instantly.',
  article: {
    title: 'Understanding VA Loan Funding Fees',
    content: `
    <h2>What is the VA Funding Fee?</h2>
    <p>The VA funding fee is a one-time payment required for VA-backed home loans. This fee helps fund the VA loan program and keeps it available for future veterans and service members. While VA loans don't require monthly mortgage insurance like conventional or FHA loans, the funding fee is the program's way of sustaining itself without using taxpayer dollars.</p>
    
    <h3>2024 VA Funding Fee Rates</h3>
    
    <h4>Purchase and Construction Loans:</h4>
    <table>
      <tr>
        <th>Loan Type</th>
        <th>Down Payment</th>
        <th>First-Time Use</th>
        <th>Subsequent Use</th>
      </tr>
      <tr>
        <td>Regular Military</td>
        <td>Less than 5%</td>
        <td>2.15%</td>
        <td>3.3%</td>
      </tr>
      <tr>
        <td>Regular Military</td>
        <td>5% to 9.99%</td>
        <td>1.5%</td>
        <td>1.5%</td>
      </tr>
      <tr>
        <td>Regular Military</td>
        <td>10% or more</td>
        <td>1.25%</td>
        <td>1.25%</td>
      </tr>
      <tr>
        <td>Reserves/Guard</td>
        <td>Less than 5%</td>
        <td>2.40%</td>
        <td>3.3%</td>
      </tr>
      <tr>
        <td>Reserves/Guard</td>
        <td>5% to 9.99%</td>
        <td>1.75%</td>
        <td>1.75%</td>
      </tr>
      <tr>
        <td>Reserves/Guard</td>
        <td>10% or more</td>
        <td>1.50%</td>
        <td>1.50%</td>
      </tr>
    </table>

    <h4>Refinance Loans (Rate & Term):</h4>
    <ul>
      <li><strong>Regular Military:</strong> 2.15% (all uses)</li>
      <li><strong>Reserves/National Guard:</strong> 2.40% (all uses)</li>
    </ul>

    <h4>Cash-Out Refinance:</h4>
    <ul>
      <li><strong>All Borrowers:</strong> 3.3% (first-time and subsequent use)</li>
    </ul>

    <h4>Assumable Loans:</h4>
    <ul>
      <li><strong>Veteran Assuming Loan:</strong> 2.15%</li>
      <li><strong>Non-Veteran Assuming Loan:</strong> 2.15%</li>
    </ul>

    <h3>Who is Exempt from the VA Funding Fee?</h3>
    <p>The following service members and veterans are exempt from paying the funding fee:</p>
    <ul>
      <li><strong>Veterans receiving VA disability compensation:</strong> Any percentage of disability rating</li>
      <li><strong>Veterans entitled to disability compensation:</strong> But receiving retirement or active duty pay instead</li>
      <li><strong>Surviving spouses:</strong> Of veterans who died in service or from service-connected disabilities</li>
      <li><strong>Purple Heart recipients:</strong> Veterans awarded the Purple Heart</li>
    </ul>
    <p><strong>Important:</strong> To claim exemption, you must provide documentation to your lender before closing.</p>

    <h3>How the VA Funding Fee Works</h3>
    
    <h4>Payment Options:</h4>
    <ol>
      <li><strong>Roll into Loan:</strong> Most common - add fee to loan amount (no upfront cost)</li>
      <li><strong>Pay at Closing:</strong> Pay entire fee as part of closing costs</li>
      <li><strong>Combination:</strong> Pay part at closing, roll remainder into loan</li>
    </ol>

    <h4>Impact on Your Loan:</h4>
    <p>When you roll the funding fee into your loan:</p>
    <ul>
      <li>Increases your total loan amount</li>
      <li>Slightly increases your monthly payment</li>
      <li>Spreads the cost over the life of the loan</li>
      <li>No money needed at closing for the fee</li>
      <li>Pay interest on the fee amount over time</li>
    </ul>

    <h3>Factors That Determine Your Funding Fee</h3>
    <ol>
      <li><strong>Type of Service:</strong>
        <ul>
          <li>Regular active duty military: Lower rates</li>
          <li>Reserves or National Guard: Slightly higher rates</li>
        </ul>
      </li>
      <li><strong>First-Time vs. Subsequent Use:</strong>
        <ul>
          <li>First-time VA loan users: Lower rates (except cash-out)</li>
          <li>Subsequent users: Higher rates</li>
        </ul>
      </li>
      <li><strong>Down Payment Amount:</strong>
        <ul>
          <li>No down payment: Highest rates</li>
          <li>5-9.99% down: Mid-tier rates</li>
          <li>10%+ down: Lowest rates</li>
        </ul>
      </li>
      <li><strong>Loan Type:</strong>
        <ul>
          <li>Purchase: Lower rates</li>
          <li>Rate-and-term refinance: Mid-tier rates</li>
          <li>Cash-out refinance: Highest rates (3.3% for all)</li>
        </ul>
      </li>
      <li><strong>Exemption Status:</strong>
        <ul>
          <li>Disability or Purple Heart: $0 fee</li>
          <li>Surviving spouse: $0 fee</li>
        </ul>
      </li>
    </ol>

    <h3>How to Use This VA Funding Fee Calculator</h3>
    <p>Enter the following information to calculate your exact VA funding fee:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The total amount you're borrowing</li>
      <li><strong>Loan Type:</strong> Purchase, refinance, or cash-out refinance</li>
      <li><strong>Service Type:</strong> Regular military or Reserves/National Guard</li>
      <li><strong>VA Loan Use:</strong> First-time or subsequent use</li>
      <li><strong>Down Payment:</strong> Amount or percentage (if purchasing)</li>
      <li><strong>Exemption Status:</strong> Whether you qualify for exemption</li>
    </ul>

    <h3>Funding Fee Example Scenarios</h3>
    
    <h4>Example 1: First-Time Purchase, No Down Payment</h4>
    <ul>
      <li>Loan Amount: $300,000</li>
      <li>Service: Regular Active Duty</li>
      <li>Funding Fee: 2.15% = $6,450</li>
      <li>Total Loan with Fee: $306,450</li>
    </ul>

    <h4>Example 2: Subsequent Purchase, 10% Down</h4>
    <ul>
      <li>Home Price: $400,000</li>
      <li>Down Payment: $40,000 (10%)</li>
      <li>Loan Amount: $360,000</li>
      <li>Service: Regular Active Duty</li>
      <li>Funding Fee: 1.25% = $4,500</li>
      <li>Total Loan with Fee: $364,500</li>
    </ul>

    <h4>Example 3: Disabled Veteran (Exempt)</h4>
    <ul>
      <li>Loan Amount: $350,000</li>
      <li>Disability Rating: 10% or higher</li>
      <li>Funding Fee: $0 (Exempt)</li>
      <li>Savings: ~$7,525</li>
    </ul>

    <h3>VA Funding Fee vs. PMI Comparison</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>VA Funding Fee</th>
        <th>Conventional PMI</th>
      </tr>
      <tr>
        <td>Type</td>
        <td>One-time fee</td>
        <td>Monthly premium</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>1.25%-3.3% once</td>
        <td>0.5%-2% annually</td>
      </tr>
      <tr>
        <td>Duration</td>
        <td>One time only</td>
        <td>Until 20% equity</td>
      </tr>
      <tr>
        <td>Cancellation</td>
        <td>N/A</td>
        <td>Can cancel at 20% equity</td>
      </tr>
      <tr>
        <td>$300k Loan Cost</td>
        <td>$6,450 once</td>
        <td>$150-300/month ongoing</td>
      </tr>
    </table>
    <p>Over 5 years, VA funding fee is typically much cheaper than PMI.</p>

    <h3>How to Get Exemption Documentation</h3>
    <p>If you're exempt from the funding fee, you'll need:</p>
    <ol>
      <li><strong>VA Disability Letter:</strong> Shows your disability rating</li>
      <li><strong>Purple Heart Citation:</strong> Award documentation</li>
      <li><strong>Surviving Spouse Documentation:</strong> VA dependency and indemnity compensation letter</li>
    </ol>
    <p>Provide these documents to your lender before closing to ensure the fee is waived.</p>

    <h3>Tips to Reduce Your VA Funding Fee</h3>
    <ul>
      <li>Make a down payment of at least 5% to reduce the fee rate</li>
      <li>Put down 10% or more for the lowest fee rate</li>
      <li>Check if you qualify for a disability exemption</li>
      <li>Apply for VA disability if you have service-connected conditions</li>
      <li>Consider if refinancing makes sense given the 3.3% cash-out fee</li>
    </ul>

    <h3>Is the VA Funding Fee Worth It?</h3>
    <p>Despite the funding fee, VA loans still offer tremendous value:</p>
    <ul>
      <li>No down payment required (0% down option)</li>
      <li>No monthly PMI payments (saves $100-300/month)</li>
      <li>Lower interest rates than conventional loans</li>
      <li>More flexible credit requirements</li>
      <li>Can be financed into the loan (no upfront cost)</li>
    </ul>
    <p>Even with the funding fee, VA loans save most veterans tens of thousands of dollars over the life of the loan compared to conventional financing.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'loanType',
        label: 'Loan Type',
        type: 'select',
        defaultValue: 'purchase',
        options: [
          { value: 'purchase', label: 'Purchase or Construction' },
          { value: 'refinance', label: 'Rate-and-Term Refinance' },
          { value: 'cashout', label: 'Cash-Out Refinance' }
        ]
      },
      {
        name: 'serviceType',
        label: 'Service Type',
        type: 'select',
        defaultValue: 'regular',
        options: [
          { value: 'regular', label: 'Regular Active Duty' },
          { value: 'reserves', label: 'Reserves/National Guard' }
        ]
      },
      {
        name: 'vaLoanUse',
        label: 'VA Loan Use',
        type: 'select',
        defaultValue: 'first',
        options: [
          { value: 'first', label: 'First-Time Use' },
          { value: 'subsequent', label: 'Subsequent Use' }
        ]
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%) - For Purchase Only',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'exemptFromFee',
        label: 'Exempt from Funding Fee',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'No - Pay Funding Fee' },
          { value: 'yes', label: 'Yes - Disabled Veteran or Exempt' }
        ]
      },
    ],
    results: [
      { label: 'VA Funding Fee', isCurrency: true },
      { label: 'Funding Fee Rate', isCurrency: false },
      { label: 'Total Loan with Fee', isCurrency: true },
      { label: 'Monthly Payment Increase (30yr @ 6.5%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, loanType, serviceType, vaLoanUse, downPaymentPercent, exemptFromFee } = values;
      
      if (exemptFromFee === 'yes') {
        return [
          { label: 'VA Funding Fee', value: '0.00', isCurrency: true },
          { label: 'Funding Fee Rate', value: '0% (Exempt)', isCurrency: false },
          { label: 'Total Loan with Fee', value: loanAmount.toFixed(2), isCurrency: true },
          { label: 'Monthly Payment Increase (30yr @ 6.5%)', value: '0.00', isCurrency: true },
        ];
      }
      
      let fundingFeeRate = 0;
      
      if (loanType === 'cashout') {
        fundingFeeRate = 0.033;
      } else if (loanType === 'refinance') {
        fundingFeeRate = serviceType === 'regular' ? 0.0215 : 0.024;
      } else {
        if (downPaymentPercent < 5) {
          fundingFeeRate = vaLoanUse === 'first' 
            ? (serviceType === 'regular' ? 0.0215 : 0.024)
            : 0.033;
        } else if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
          fundingFeeRate = serviceType === 'regular' ? 0.015 : 0.0175;
        } else {
          fundingFeeRate = serviceType === 'regular' ? 0.0125 : 0.015;
        }
      }
      
      const fundingFee = loanAmount * fundingFeeRate;
      const totalLoanWithFee = loanAmount + fundingFee;
      
      const monthlyRate = 0.065 / 12;
      const numberOfPayments = 30 * 12;
      const monthlyPaymentIncrease = fundingFee * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const feeRatePercent = (fundingFeeRate * 100).toFixed(2) + '%';

      return [
        { label: 'VA Funding Fee', value: fundingFee.toFixed(2), isCurrency: true },
        { label: 'Funding Fee Rate', value: feeRatePercent, isCurrency: false },
        { label: 'Total Loan with Fee', value: totalLoanWithFee.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment Increase (30yr @ 6.5%)', value: monthlyPaymentIncrease.toFixed(2), isCurrency: true },
      ];
    },
  },
};
