import { CalculatorContent } from '@/types';

export const PMI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'PMI Calculator',
  description: 'Calculate Private Mortgage Insurance (PMI) costs and monthly payments',
  slug: 'pmi-calculator',
  icon: '🏦',
  category: 'Basic Calculators',
  metaTitle: 'PMI Calculator - Calculate Private Mortgage Insurance Costs & Monthly Payments',
  metaDescription: 'Free PMI calculator for conventional loans. Estimate monthly PMI costs, total PMI paid, and when you can cancel PMI at 20% equity.',
  article: {
    title: 'Understanding Private Mortgage Insurance (PMI)',
    content: `
    <h2>What is Private Mortgage Insurance (PMI)?</h2>
    <p>Private Mortgage Insurance (PMI) is insurance that conventional mortgage lenders require when you make a down payment of less than 20%. PMI protects the lender (not you) if you default on your loan. While it adds to your monthly cost, PMI makes it possible to buy a home with a smaller down payment, helping you get into homeownership sooner.</p>
    
    <h3>When is PMI Required?</h3>
    <ul>
      <li><strong>Conventional Loans:</strong> Required when LTV > 80% (down payment < 20%)</li>
      <li><strong>Purchase:</strong> At closing if down payment is less than 20%</li>
      <li><strong>Refinance:</strong> If new loan amount exceeds 80% of home value</li>
      <li><strong>Not Required:</strong> FHA loans (use MIP instead), VA loans, USDA loans</li>
    </ul>

    <h3>How Much Does PMI Cost?</h3>
    <p>PMI typically costs between 0.30% and 1.50% of the original loan amount annually, paid monthly. The exact rate depends on:</p>
    <ul>
      <li><strong>Loan-to-Value (LTV) Ratio:</strong> Higher LTV = higher PMI cost</li>
      <li><strong>Credit Score:</strong> Lower score = higher PMI cost</li>
      <li><strong>Loan Amount:</strong> Larger loans may have different rates</li>
      <li><strong>Loan Type:</strong> Fixed-rate vs. adjustable-rate mortgages</li>
      <li><strong>Down Payment:</strong> More down payment = lower PMI</li>
    </ul>

    <h3>PMI Rate Examples by Credit Score and LTV</h3>
    <table>
      <tr>
        <th>Credit Score</th>
        <th>95% LTV (5% down)</th>
        <th>90% LTV (10% down)</th>
        <th>85% LTV (15% down)</th>
      </tr>
      <tr>
        <td>760+</td>
        <td>0.55%</td>
        <td>0.35%</td>
        <td>0.30%</td>
      </tr>
      <tr>
        <td>700-759</td>
        <td>0.75%</td>
        <td>0.50%</td>
        <td>0.40%</td>
      </tr>
      <tr>
        <td>680-699</td>
        <td>0.95%</td>
        <td>0.65%</td>
        <td>0.50%</td>
      </tr>
      <tr>
        <td>660-679</td>
        <td>1.15%</td>
        <td>0.80%</td>
        <td>0.65%</td>
      </tr>
      <tr>
        <td>640-659</td>
        <td>1.35%</td>
        <td>1.00%</td>
        <td>0.85%</td>
      </tr>
      <tr>
        <td>620-639</td>
        <td>1.50%</td>
        <td>1.20%</td>
        <td>1.00%</td>
      </tr>
    </table>
    <p><em>Note: Rates are approximate and vary by lender</em></p>

    <h3>Types of PMI</h3>
    
    <h4>1. Borrower-Paid Monthly PMI (Most Common):</h4>
    <ul>
      <li>Added to your monthly mortgage payment</li>
      <li>Can be cancelled when you reach 20% equity</li>
      <li>Easiest to budget and understand</li>
      <li>Tax deductible in some cases</li>
    </ul>

    <h4>2. Lender-Paid PMI (LPMI):</h4>
    <ul>
      <li>Lender pays PMI in exchange for higher interest rate</li>
      <li>Typically adds 0.25-0.50% to your rate</li>
      <li>Cannot be removed (built into loan rate)</li>
      <li>May make sense if you plan to stay long-term</li>
    </ul>

    <h4>3. Single-Premium PMI:</h4>
    <ul>
      <li>Pay entire PMI premium upfront at closing</li>
      <li>No monthly PMI payments</li>
      <li>Non-refundable if you refinance or sell</li>
      <li>Good if you have cash but want lower monthly payments</li>
    </ul>

    <h4>4. Split-Premium PMI:</h4>
    <ul>
      <li>Combination of upfront and monthly payments</li>
      <li>Pay portion at closing, reduced monthly cost</li>
      <li>Balances upfront cost with monthly budget</li>
    </ul>

    <h3>How to Use This PMI Calculator</h3>
    <p>Enter the following information to calculate your PMI costs:</p>
    <ul>
      <li><strong>Home Price:</strong> Purchase price of the property</li>
      <li><strong>Down Payment:</strong> Your down payment percentage</li>
      <li><strong>Loan Amount:</strong> Automatically calculated</li>
      <li><strong>PMI Rate:</strong> Annual rate (0.30% to 1.50%)</li>
      <li><strong>Credit Score:</strong> Affects your PMI rate</li>
      <li><strong>Interest Rate:</strong> Your mortgage interest rate</li>
    </ul>

    <h3>When Can You Cancel PMI?</h3>
    
    <h4>Automatic Termination:</h4>
    <ul>
      <li><strong>At 78% LTV:</strong> Lender must automatically cancel PMI</li>
      <li><strong>Based on:</strong> Original amortization schedule</li>
      <li><strong>Requirement:</strong> Current on payments</li>
      <li><strong>No Action Needed:</strong> Automatic process</li>
    </ul>

    <h4>Borrower-Requested Cancellation:</h4>
    <ul>
      <li><strong>At 80% LTV:</strong> You can request PMI cancellation</li>
      <li><strong>Requirements:</strong>
        <ul>
          <li>Current on payments with good payment history</li>
          <li>No subordinate liens on the property</li>
          <li>May need new appraisal (at your expense)</li>
          <li>Property value hasn't declined</li>
        </ul>
      </li>
      <li><strong>Process:</strong> Contact lender in writing to request removal</li>
    </ul>

    <h4>Early Removal (Before 80% LTV):</h4>
    <p>Some lenders allow early PMI removal if:</p>
    <ul>
      <li>Home value has increased significantly</li>
      <li>You've made substantial improvements</li>
      <li>You've owned the home for at least 2 years</li>
      <li>New appraisal shows 20%+ equity</li>
      <li>Lender's discretion - not guaranteed</li>
    </ul>

    <h3>PMI Example Calculation</h3>
    
    <h4>Scenario: $400,000 Home with 10% Down</h4>
    <ul>
      <li><strong>Purchase Price:</strong> $400,000</li>
      <li><strong>Down Payment:</strong> $40,000 (10%)</li>
      <li><strong>Loan Amount:</strong> $360,000</li>
      <li><strong>LTV:</strong> 90%</li>
      <li><strong>Credit Score:</strong> 720</li>
      <li><strong>PMI Rate:</strong> 0.50% annually</li>
      <li><strong>Annual PMI:</strong> $1,800</li>
      <li><strong>Monthly PMI:</strong> $150</li>
      <li><strong>Total PMI Paid:</strong> ~$9,000 (until 80% LTV reached in 5 years)</li>
    </ul>

    <h3>Strategies to Avoid or Minimize PMI</h3>
    
    <h4>Strategy 1: Make a 20% Down Payment</h4>
    <ul>
      <li>Completely avoids PMI</li>
      <li>Requires larger upfront savings</li>
      <li>May delay homeownership</li>
      <li>Best long-term value</li>
    </ul>

    <h4>Strategy 2: Piggyback Loan (80-10-10)</h4>
    <ul>
      <li>80% first mortgage + 10% second mortgage + 10% down</li>
      <li>Avoids PMI on first mortgage</li>
      <li>Second mortgage has higher rate but can be paid off quickly</li>
      <li>More complex, two loans to manage</li>
    </ul>

    <h4>Strategy 3: Lender-Paid PMI</h4>
    <ul>
      <li>Accept slightly higher interest rate</li>
      <li>No monthly PMI payment</li>
      <li>Good if you plan to stay long-term</li>
      <li>Cannot be removed later</li>
    </ul>

    <h4>Strategy 4: Build Equity Quickly</h4>
    <ul>
      <li>Make extra principal payments</li>
      <li>Hope for property appreciation</li>
      <li>Request reappraisal when you hit 20% equity</li>
      <li>Cancel PMI as soon as possible</li>
    </ul>

    <h4>Strategy 5: VA or USDA Loans</h4>
    <ul>
      <li>VA loans: No PMI, 0% down (for eligible veterans)</li>
      <li>USDA loans: No PMI, 0% down (rural properties)</li>
      <li>Check eligibility first</li>
    </ul>

    <h3>PMI vs. FHA MIP Comparison</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Conventional PMI</th>
        <th>FHA MIP</th>
      </tr>
      <tr>
        <td>When Required</td>
        <td>< 20% down</td>
        <td>All FHA loans</td>
      </tr>
      <tr>
        <td>Monthly Cost</td>
        <td>0.30%-1.50%</td>
        <td>0.45%-1.00%</td>
      </tr>
      <tr>
        <td>Upfront Cost</td>
        <td>None typically</td>
        <td>1.75% of loan</td>
      </tr>
      <tr>
        <td>Can Remove</td>
        <td>Yes, at 20% equity</td>
        <td>Only via refinance (if < 10% down)</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Good credit, 5-19% down</td>
        <td>Lower credit, 3.5% down</td>
      </tr>
    </table>

    <h3>Is PMI Tax Deductible?</h3>
    <p>PMI deductibility depends on current tax laws:</p>
    <ul>
      <li>Congress must extend PMI deduction each year</li>
      <li>Income limits apply (typically phases out above $100,000-$110,000 AGI)</li>
      <li>Must itemize deductions to claim</li>
      <li>Check current year tax laws</li>
      <li>Consult tax professional for your situation</li>
    </ul>

    <h3>PMI Cost-Benefit Analysis</h3>
    
    <h4>When PMI Makes Sense:</h4>
    <ul>
      <li>Housing costs are rising faster than you can save</li>
      <li>You have stable income and good credit</li>
      <li>You can afford monthly PMI payment</li>
      <li>You plan to build equity and cancel PMI within 5-7 years</li>
      <li>Opportunity cost of waiting exceeds PMI cost</li>
    </ul>

    <h4>When to Wait and Save 20%:</h4>
    <ul>
      <li>You can save 20% within 12-18 months</li>
      <li>Housing market is stable or declining</li>
      <li>Your budget is very tight</li>
      <li>You want the lowest possible monthly payment</li>
    </ul>

    <h3>Common PMI Mistakes to Avoid</h3>
    <ul>
      <li><strong>Not requesting cancellation at 80% LTV:</strong> Lenders won't always remind you</li>
      <li><strong>Forgetting about PMI when budgeting:</strong> Factor it into affordability calculations</li>
      <li><strong>Confusing PMI with homeowners insurance:</strong> They're separate costs</li>
      <li><strong>Not shopping around:</strong> PMI rates vary between lenders</li>
      <li><strong>Accepting LPMI without comparing:</strong> May cost more long-term</li>
      <li><strong>Not tracking home value:</strong> You might hit 20% equity sooner than expected</li>
    </ul>

    <h3>Bottom Line on PMI</h3>
    <p>While PMI adds cost to your mortgage, it shouldn't automatically disqualify conventional loans. For many buyers, paying PMI for a few years is better than waiting to save 20% down, especially in rising markets. The key is:</p>
    <ul>
      <li>Understand your exact PMI cost before committing</li>
      <li>Have a plan to build equity and cancel PMI</li>
      <li>Shop for the best PMI rates from multiple lenders</li>
      <li>Consider all options: conventional with PMI, FHA, VA, or piggyback loans</li>
      <li>Monitor your equity and request cancellation as soon as eligible</li>
    </ul>
    <p>Use this calculator to understand your PMI costs and make an informed decision.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'pmiRate',
        label: 'Annual PMI Rate (%)',
        type: 'number',
        defaultValue: 0.50,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Monthly PMI Payment', isCurrency: true },
      { label: 'Annual PMI Cost', isCurrency: true },
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Loan-to-Value (LTV)', isCurrency: false },
      { label: 'Years Until 80% LTV', isCurrency: false },
      { label: 'Total PMI Paid', isCurrency: true },
      { label: 'Monthly Payment with PMI', isCurrency: true },
      { label: 'Monthly Payment without PMI', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, downPaymentPercent, pmiRate, interestRate, loanTerm } = values;
      
      const downPayment = (homePrice * downPaymentPercent) / 100;
      const loanAmount = homePrice - downPayment;
      const ltv = (loanAmount / homePrice) * 100;
      
      const monthlyPMI = (loanAmount * (pmiRate / 100)) / 12;
      const annualPMI = loanAmount * (pmiRate / 100);
      
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const monthlyPaymentWithPMI = principalAndInterest + monthlyPMI;
      
      let monthsTo80LTV = 0;
      let balance = loanAmount;
      const targetBalance = homePrice * 0.80;
      
      while (balance > targetBalance && monthsTo80LTV < numberOfPayments) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = principalAndInterest - interestPayment;
        balance -= principalPayment;
        monthsTo80LTV++;
      }
      
      const yearsTo80LTV = (monthsTo80LTV / 12).toFixed(1);
      const totalPMIPaid = monthlyPMI * monthsTo80LTV;
      
      const ltvPercent = ltv.toFixed(2) + '%';

      return [
        { label: 'Monthly PMI Payment', value: monthlyPMI.toFixed(2), isCurrency: true },
        { label: 'Annual PMI Cost', value: annualPMI.toFixed(2), isCurrency: true },
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Loan-to-Value (LTV)', value: ltvPercent, isCurrency: false },
        { label: 'Years Until 80% LTV', value: yearsTo80LTV + ' years', isCurrency: false },
        { label: 'Total PMI Paid', value: totalPMIPaid.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment with PMI', value: monthlyPaymentWithPMI.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment without PMI', value: principalAndInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};
