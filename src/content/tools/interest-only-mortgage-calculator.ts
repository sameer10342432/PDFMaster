import { CalculatorContent } from '@/types';

export const INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Interest-Only Mortgage Calculator',
  description: 'Calculate monthly payments for an interest-only mortgage and compare with traditional principal + interest loans. Understand payment shock when the interest-only period ends.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'interest-only-mortgage-calculator',
  article: {
    title: "Interest-Only Mortgage Calculator: Complete Guide to IO Loans",
    content: `
    <h2>What is an Interest-Only Mortgage?</h2>
    <p>An interest-only (IO) mortgage allows you to pay only the interest portion of your loan for a set period (typically 5, 7, or 10 years), without paying down any principal. After the IO period ends, you must pay both principal and interest for the remaining loan term, which significantly increases your monthly payment.</p>

    <h3>How Interest-Only Mortgages Work</h3>
    <p>Interest-only mortgages have two distinct phases:</p>
    <ul>
      <li><strong>Phase 1 - Interest-Only Period (5-10 years):</strong> You pay only interest. Your loan balance never decreases. Monthly payments are significantly lower.</li>
      <li><strong>Phase 2 - Principal + Interest Period (20-25 years):</strong> You pay both principal and interest on the full original loan amount. Monthly payments jump significantly, often 30-50% higher than Phase 1.</li>
    </ul>

    <h3>Interest-Only Mortgage Example</h3>
    <p><strong>Loan Amount:</strong> $500,000 at 7% interest<br>
    <strong>IO Period:</strong> 10 years<br>
    <strong>Total Loan Term:</strong> 30 years</p>
    
    <p><strong>Years 1-10 (Interest-Only):</strong></p>
    <ul>
      <li>Monthly Payment: $2,917 (interest only)</li>
      <li>Loan Balance: Remains $500,000</li>
      <li>Total Paid Over 10 Years: $350,000</li>
    </ul>
    
    <p><strong>Years 11-30 (Principal + Interest):</strong></p>
    <ul>
      <li>Monthly Payment: $3,979 (principal + interest)</li>
      <li>Payment Increase: $1,062/month (36% jump)</li>
      <li>Loan Balance: Decreases from $500,000 to $0 over 20 years</li>
    </ul>

    <h3>Who Uses Interest-Only Mortgages?</h3>
    <ul>
      <li><strong>Real Estate Investors:</strong> Want to maximize cash flow and invest the savings elsewhere</li>
      <li><strong>High-Income Borrowers:</strong> Expect significant income growth or bonuses to handle payment increases</li>
      <li><strong>Short-Term Homeowners:</strong> Plan to sell before the IO period ends</li>
      <li><strong>Luxury Home Buyers:</strong> Need lower payments now to afford a more expensive home</li>
      <li><strong>Commission-Based Workers:</strong> Irregular income but can afford higher payments in the future</li>
    </ul>

    <h3>Pros of Interest-Only Mortgages</h3>
    <ul>
      <li>Significantly lower monthly payments during the IO period (often 20-40% less)</li>
      <li>More cash flow for investments, business expenses, or other financial goals</li>
      <li>Can qualify for a larger loan amount with the same income</li>
      <li>Flexibility to pay down principal voluntarily if you choose</li>
      <li>Tax-deductible interest payments (consult your tax advisor)</li>
    </ul>

    <h3>Cons and Risks of Interest-Only Mortgages</h3>
    <ul>
      <li><strong>Payment Shock:</strong> Monthly payments can increase 30-50% after the IO period</li>
      <li><strong>No Equity Building:</strong> You don't build equity unless home values rise</li>
      <li><strong>Negative Equity Risk:</strong> If home values fall, you could owe more than the home is worth</li>
      <li><strong>Higher Total Interest:</strong> Pay tens of thousands more in interest over the loan's life</li>
      <li><strong>Difficult to Refinance:</strong> No equity makes refinancing harder if home values stagnate</li>
      <li><strong>Strict Qualification:</strong> Lenders require excellent credit (typically 700+) and larger down payments (20-30%)</li>
    </ul>

    <h3>Interest-Only vs. Traditional Mortgage Comparison</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Interest-Only</th>
        <th>Traditional (P&I)</th>
      </tr>
      <tr>
        <td>Initial Payment</td>
        <td>Very Low (interest only)</td>
        <td>Higher (principal + interest)</td>
      </tr>
      <tr>
        <td>Equity Building</td>
        <td>None (unless voluntary)</td>
        <td>Automatic with each payment</td>
      </tr>
      <tr>
        <td>Payment Stability</td>
        <td>Low, then jumps</td>
        <td>Stable for 30 years</td>
      </tr>
      <tr>
        <td>Total Interest Paid</td>
        <td>Much Higher</td>
        <td>Lower</td>
      </tr>
      <tr>
        <td>Qualification</td>
        <td>Difficult (high credit, big down payment)</td>
        <td>Standard requirements</td>
      </tr>
    </table>

    <h3>When to Consider an Interest-Only Mortgage</h3>
    <p>An IO mortgage may be appropriate if you:</p>
    <ul>
      <li>Plan to sell the home before the IO period ends</li>
      <li>Expect substantial income growth in the next 5-10 years</li>
      <li>Are a real estate investor prioritizing cash flow over equity</li>
      <li>Have irregular income but high earning potential (entrepreneurs, commissioned salespeople)</li>
      <li>Want to invest extra cash in higher-return opportunities (stocks, business, etc.)</li>
      <li>Can afford the higher payment after the IO period and understand the risks</li>
    </ul>

    <h3>When to Avoid Interest-Only Mortgages</h3>
    <p>Avoid IO mortgages if you:</p>
    <ul>
      <li>Plan to stay in the home long-term (15+ years)</li>
      <li>Cannot afford a 30-50% payment increase after the IO period</li>
      <li>Want to build equity and own your home outright</li>
      <li>Have a fixed income with limited room for payment increases</li>
      <li>Are uncomfortable with the risk of housing market downturns</li>
    </ul>

    <h3>Understanding the Payment Shock</h3>
    <p>The "payment shock" is the sudden increase in monthly payments when the IO period ends. For a $400,000 loan at 7%:</p>
    <ul>
      <li><strong>IO Payment (Years 1-10):</strong> $2,333/month</li>
      <li><strong>P&I Payment (Years 11-30):</strong> $3,184/month</li>
      <li><strong>Payment Shock:</strong> $851/month increase (36% jump)</li>
    </ul>
    <p>Many borrowers underestimate this shock. Make sure you can afford the future payment before committing to an IO loan.</p>

    <h3>Strategies to Handle Payment Shock</h3>
    <ul>
      <li><strong>Voluntary Principal Payments:</strong> Pay extra toward principal during the IO period to reduce the future payment</li>
      <li><strong>Refinance Before IO Ends:</strong> Refinance into a new IO loan or fixed-rate mortgage (requires sufficient equity)</li>
      <li><strong>Sell the Property:</strong> Plan to sell before the IO period ends if you're a short-term owner or investor</li>
      <li><strong>Income Growth:</strong> Ensure your income will increase enough to cover the higher payment</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your loan amount, interest rate, interest-only period length, and total loan term. The calculator will show you:</p>
    <ul>
      <li>Monthly payment during the interest-only period</li>
      <li>Monthly payment after the IO period ends</li>
      <li>Payment shock amount and percentage increase</li>
      <li>Total interest paid over the life of the loan</li>
      <li>Comparison with a traditional 30-year fixed mortgage</li>
      <li>Total cost difference between IO and traditional loans</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'ioPeriod',
        label: 'Interest-Only Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'totalLoanTerm',
        label: 'Total Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Interest-Only Monthly Payment', isCurrency: true },
      { label: 'Principal + Interest Payment (After IO Period)', isCurrency: true },
      { label: 'Payment Shock Increase', isCurrency: true },
      { label: 'Payment Shock Percentage', isCurrency: false },
      { label: 'Total Interest Paid (IO Loan)', isCurrency: true },
      { label: 'Traditional 30-Year Fixed Payment', isCurrency: true },
      { label: 'Total Interest (Traditional Loan)', isCurrency: true },
      { label: 'Extra Cost of Interest-Only Loan', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, ioPeriod, totalLoanTerm } = values;
      
      const monthlyRate = interestRate / 100 / 12;
      
      // Interest-only payment (during IO period)
      const ioPayment = loanAmount * monthlyRate;
      
      // Principal + Interest payment (after IO period)
      const remainingTerm = totalLoanTerm - ioPeriod;
      const remainingMonths = remainingTerm * 12;
      const piPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) / (Math.pow(1 + monthlyRate, remainingMonths) - 1);
      
      // Payment shock
      const paymentShock = piPayment - ioPayment;
      const paymentShockPercentage = ((paymentShock / ioPayment) * 100).toFixed(1) + '%';
      
      // Total interest for IO loan
      const ioInterestDuringIOPeriod = ioPayment * ioPeriod * 12;
      const piInterestAfterIOPeriod = (piPayment * remainingMonths) - loanAmount;
      const totalIOLoanInterest = ioInterestDuringIOPeriod + piInterestAfterIOPeriod;
      
      // Traditional 30-year fixed for comparison
      const totalMonths = totalLoanTerm * 12;
      const traditionalPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      const traditionalTotalInterest = (traditionalPayment * totalMonths) - loanAmount;
      
      // Extra cost
      const extraCost = totalIOLoanInterest - traditionalTotalInterest;
      
      return [
        { label: 'Interest-Only Monthly Payment', value: ioPayment.toFixed(2), isCurrency: true },
        { label: 'Principal + Interest Payment (After IO Period)', value: piPayment.toFixed(2), isCurrency: true },
        { label: 'Payment Shock Increase', value: paymentShock.toFixed(2), isCurrency: true },
        { label: 'Payment Shock Percentage', value: paymentShockPercentage, isCurrency: false },
        { label: 'Total Interest Paid (IO Loan)', value: totalIOLoanInterest.toFixed(2), isCurrency: true },
        { label: 'Traditional 30-Year Fixed Payment', value: traditionalPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest (Traditional Loan)', value: traditionalTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Extra Cost of Interest-Only Loan', value: extraCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
