import { CalculatorContent } from '@/types';

export const BRIDGE_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Bridge Loan Calculator',
  description: 'Calculate bridge loan payments, costs, and fees for temporary real estate financing. Compare bridge loans to traditional mortgages and HELOC options.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'bridge-loan-calculator',
  article: {
    title: "Bridge Loan Calculator: Complete Guide to Bridge Financing",
    content: `
    <h2>What is a Bridge Loan?</h2>
    <p>A bridge loan is a short-term loan (typically 6-12 months) that "bridges" the gap between buying a new home and selling your current home. It allows you to use the equity in your existing home as a down payment on your new home before your old home sells. Once your old home sells, you pay off the bridge loan.</p>

    <h3>How Bridge Loans Work</h3>
    <p><strong>Example Scenario:</strong></p>
    <ul>
      <li>You own a home worth $400,000 with a $200,000 mortgage (you have $200,000 in equity)</li>
      <li>You find a new home for $500,000 that requires a $100,000 down payment</li>
      <li>You get a bridge loan for $100,000 using your current home as collateral</li>
      <li>You buy the new home with the $100,000 bridge loan as your down payment</li>
      <li>You sell your old home for $400,000</li>
      <li>You pay off the old mortgage ($200,000) and bridge loan ($100,000) from the sale proceeds</li>
    </ul>

    <h3>Bridge Loan Structure and Terms</h3>
    <ul>
      <li><strong>Loan Amount:</strong> Typically 80% of your home's equity (some lenders go up to 90%)</li>
      <li><strong>Interest Rate:</strong> Higher than traditional mortgages (typically 8-12%)</li>
      <li><strong>Loan Term:</strong> 6-12 months (some extend to 24 months)</li>
      <li><strong>Payment Structure:</strong> Interest-only or no payments until the loan is due</li>
      <li><strong>Fees:</strong> Origination fees (1-2%), appraisal fees, closing costs</li>
    </ul>

    <h3>Types of Bridge Loans</h3>
    <ul>
      <li><strong>Closed Bridge Loan:</strong> You already have a contract to sell your existing home. Lower rates and fees.</li>
      <li><strong>Open Bridge Loan:</strong> Your home is listed but not under contract. Higher rates and stricter terms.</li>
      <li><strong>First Lien Bridge Loan:</strong> The bridge loan is the only loan on your current home (no existing mortgage).</li>
      <li><strong>Second Lien Bridge Loan:</strong> The bridge loan is subordinate to your existing mortgage.</li>
    </ul>

    <h3>Bridge Loan Costs and Fees</h3>
    <p>Bridge loans are expensive. Expect to pay:</p>
    <ul>
      <li><strong>Origination Fee:</strong> 1-2% of the loan amount ($2,000-$4,000 on a $200,000 bridge loan)</li>
      <li><strong>Appraisal Fee:</strong> $300-$600 for your existing home</li>
      <li><strong>Title Insurance:</strong> $1,000-$2,000</li>
      <li><strong>Interest Rate:</strong> 8-12% annual percentage rate (APR)</li>
      <li><strong>Administration Fees:</strong> $300-$500</li>
      <li><strong>Closing Costs:</strong> 2-3% of the loan amount</li>
    </ul>
    <p><strong>Total Cost Example:</strong> For a $100,000 bridge loan over 6 months at 10% interest with 2% fees, expect to pay approximately $7,000 in total costs.</p>

    <h3>Pros of Bridge Loans</h3>
    <ul>
      <li>Buy your new home without waiting for your old home to sell</li>
      <li>Make non-contingent offers on new homes (more attractive to sellers)</li>
      <li>Avoid temporary housing or storage costs</li>
      <li>Move directly from old home to new home (no interim living arrangements)</li>
      <li>Take advantage of market opportunities without delay</li>
      <li>No monthly payments if interest is rolled into the loan</li>
    </ul>

    <h3>Cons and Risks of Bridge Loans</h3>
    <ul>
      <li><strong>Very Expensive:</strong> High interest rates (8-12%) and substantial fees</li>
      <li><strong>Two Mortgages:</strong> You'll temporarily be paying for two properties</li>
      <li><strong>Sale Risk:</strong> If your old home doesn't sell, you're stuck with both loans</li>
      <li><strong>Market Risk:</strong> Housing market downturns can make it impossible to sell at your target price</li>
      <li><strong>Strict Qualification:</strong> Need excellent credit (700+), low debt-to-income, and significant equity</li>
      <li><strong>Short Timeline:</strong> Pressure to sell quickly, potentially accepting lower offers</li>
    </ul>

    <h3>Bridge Loan Qualification Requirements</h3>
    <ul>
      <li><strong>Credit Score:</strong> Minimum 680, preferably 720+</li>
      <li><strong>Debt-to-Income Ratio:</strong> Below 43%, including both mortgages</li>
      <li><strong>Home Equity:</strong> At least 20% equity in your current home (some require 30%)</li>
      <li><strong>Proof of Sale:</strong> For closed bridge loans, a signed purchase agreement</li>
      <li><strong>Down Payment:</strong> 10-20% for the new home (in addition to the bridge loan)</li>
      <li><strong>Reserves:</strong> 6-12 months of mortgage payments in savings</li>
    </ul>

    <h3>Bridge Loan vs. Home Equity Line of Credit (HELOC)</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>Bridge Loan</th>
        <th>HELOC</th>
      </tr>
      <tr>
        <td>Interest Rate</td>
        <td>8-12%</td>
        <td>7-9%</td>
      </tr>
      <tr>
        <td>Setup Time</td>
        <td>1-2 weeks</td>
        <td>2-6 weeks</td>
      </tr>
      <tr>
        <td>Fees</td>
        <td>2-3% of loan</td>
        <td>$0-$500</td>
      </tr>
      <tr>
        <td>Term</td>
        <td>6-12 months</td>
        <td>10-30 years</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Immediate need</td>
        <td>Flexible long-term access</td>
      </tr>
    </table>
    <p><strong>Recommendation:</strong> If you have 2+ months before buying the new home, a HELOC is usually cheaper. If you need money within 2-3 weeks, a bridge loan is your best option.</p>

    <h3>Alternatives to Bridge Loans</h3>
    <ul>
      <li><strong>Home Sale Contingency:</strong> Make your offer contingent on selling your current home (less attractive to sellers)</li>
      <li><strong>HELOC:</strong> Home equity line of credit with lower rates but longer setup time</li>
      <li><strong>80-10-10 Loan:</strong> Put 10% down, take an 80% first mortgage and a 10% second mortgage</li>
      <li><strong>Rent Out Your Current Home:</strong> Keep both properties and rent the old one (requires landlord qualification)</li>
      <li><strong>401(k) Loan:</strong> Borrow from your retirement account (limited to $50,000)</li>
      <li><strong>Personal Loan:</strong> Unsecured loan with high rates but no collateral requirement</li>
    </ul>

    <h3>When to Use a Bridge Loan</h3>
    <p>Consider a bridge loan if you:</p>
    <ul>
      <li>Found your dream home and must act quickly</li>
      <li>Have substantial equity in your current home (30%+ preferred)</li>
      <li>Are confident your home will sell within 6 months</li>
      <li>Have excellent credit (720+) and low debt</li>
      <li>Can afford both mortgages temporarily if the home doesn't sell immediately</li>
      <li>Are moving to a competitive market where contingent offers are rejected</li>
    </ul>

    <h3>When to Avoid Bridge Loans</h3>
    <ul>
      <li>Your home is overpriced or in a slow market</li>
      <li>You have minimal equity (less than 20%)</li>
      <li>Your debt-to-income ratio is already high</li>
      <li>You cannot afford two mortgage payments simultaneously</li>
      <li>You have time to sell your home first</li>
    </ul>

    <h3>What Happens If Your Home Doesn't Sell?</h3>
    <p>If your home doesn't sell before the bridge loan term ends, you have several options:</p>
    <ul>
      <li><strong>Extend the Bridge Loan:</strong> Pay fees to extend for another 3-6 months (if the lender allows)</li>
      <li><strong>Refinance:</strong> Roll the bridge loan into a long-term second mortgage or HELOC</li>
      <li><strong>Reduce the Price:</strong> Lower your asking price to sell quickly</li>
      <li><strong>Rent Out the Property:</strong> Become a landlord and use rental income to cover the mortgage</li>
      <li><strong>Default Risk:</strong> If you cannot pay, you risk foreclosure on your old home</li>
    </ul>

    <h3>Real-World Bridge Loan Example</h3>
    <p><strong>Situation:</strong> You're buying a $600,000 home and need $120,000 for the down payment. Your current home is worth $500,000 with a $300,000 mortgage.</p>
    
    <p><strong>Bridge Loan Details:</strong></p>
    <ul>
      <li><strong>Available Equity:</strong> $500,000 - $300,000 = $200,000</li>
      <li><strong>Bridge Loan Amount:</strong> 80% of equity = $160,000 (you only need $120,000)</li>
      <li><strong>Interest Rate:</strong> 10%</li>
      <li><strong>Term:</strong> 6 months</li>
      <li><strong>Origination Fee:</strong> 2% = $2,400</li>
    </ul>
    
    <p><strong>Costs:</strong></p>
    <ul>
      <li><strong>Interest (6 months):</strong> $6,000</li>
      <li><strong>Origination Fee:</strong> $2,400</li>
      <li><strong>Closing Costs:</strong> $1,500</li>
      <li><strong>Total Cost:</strong> $9,900</li>
    </ul>
    
    <p>When your old home sells, you pay off the $300,000 mortgage and $120,000 bridge loan, keeping $80,000 as leftover equity.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your bridge loan amount, interest rate, loan term, and estimated fees. The calculator will show you:</p>
    <ul>
      <li>Monthly interest payment (if interest-only)</li>
      <li>Total interest cost over the loan term</li>
      <li>Origination fees and closing costs</li>
      <li>Total cost of the bridge loan</li>
      <li>Comparison with a HELOC at a lower rate</li>
      <li>Break-even analysis for when a bridge loan makes financial sense</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Bridge Loan Amount ($)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 10.0,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Months)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'originationFee',
        label: 'Origination Fee (%)',
        type: 'number',
        defaultValue: 2.0,
      },
      {
        name: 'closingCosts',
        label: 'Closing Costs ($)',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [
      { label: 'Monthly Interest Payment', isCurrency: true },
      { label: 'Total Interest Over Loan Term', isCurrency: true },
      { label: 'Origination Fee', isCurrency: true },
      { label: 'Total Upfront Costs', isCurrency: true },
      { label: 'Total Cost of Bridge Loan', isCurrency: true },
      { label: 'Comparison: HELOC at 8% Interest', isCurrency: true },
      { label: 'Extra Cost vs. HELOC', isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm, originationFee, closingCosts } = values;
      
      // Monthly interest payment
      const monthlyRate = interestRate / 100 / 12;
      const monthlyInterest = loanAmount * monthlyRate;
      
      // Total interest over loan term
      const totalInterest = monthlyInterest * loanTerm;
      
      // Fees
      const originationFeeAmount = loanAmount * (originationFee / 100);
      const upfrontCosts = originationFeeAmount + closingCosts;
      
      // Total cost
      const totalCost = totalInterest + upfrontCosts;
      
      // HELOC comparison (typically 8% interest, minimal fees)
      const helocRate = 0.08 / 12;
      const helocInterest = loanAmount * helocRate * loanTerm;
      const helocTotal = helocInterest + 500; // Assume $500 in HELOC fees
      
      const extraCost = totalCost - helocTotal;
      
      return [
        { label: 'Monthly Interest Payment', value: monthlyInterest.toFixed(2), isCurrency: true },
        { label: 'Total Interest Over Loan Term', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Origination Fee', value: originationFeeAmount.toFixed(2), isCurrency: true },
        { label: 'Total Upfront Costs', value: upfrontCosts.toFixed(2), isCurrency: true },
        { label: 'Total Cost of Bridge Loan', value: totalCost.toFixed(2), isCurrency: true },
        { label: 'Comparison: HELOC at 8% Interest', value: helocTotal.toFixed(2), isCurrency: true },
        { label: 'Extra Cost vs. HELOC', value: extraCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
