import { CalculatorContent } from '@/types';

export const REAL_ESTATE_NOTE_INVESTING_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Note Investing ROI Calculator',
  description: 'Calculate returns on mortgage note investments including yield, cash flow, and total ROI for performing and non-performing notes.',
  slug: 'real-estate-note-investing-roi-calculator',
  icon: '📝',
  category: 'Investment Analysis',
  article: {
    title: 'Real Estate Note Investing: A Complete Guide',
    content: `
    <h2>Real Estate Note Investing: A Complete Guide</h2>
    <p>Note investing allows you to become the bank by purchasing the debt secured by real estate rather than the property itself. This passive investment strategy can generate consistent monthly income with less management than traditional rental properties.</p>
    
    <h3>What is a Real Estate Note?</h3>
    <p>A real estate note (or mortgage note) is a promissory note secured by real estate. When you buy a note, you're purchasing the debt and the right to receive principal and interest payments from the borrower.</p>
    
    <h3>Types of Notes</h3>
    <ul>
      <li><strong>Performing Notes:</strong> Borrower is current on payments (lower risk, lower returns 6-12%)</li>
      <li><strong>Non-Performing Notes:</strong> Borrower is behind on payments (higher risk, higher returns 15-30%+)</li>
      <li><strong>Re-Performing Notes:</strong> Previously non-performing, now making payments again</li>
      <li><strong>First Position:</strong> Senior lien, first in line for repayment</li>
      <li><strong>Second Position:</strong> Junior lien, subordinate to first mortgage</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter these details to analyze your note investment:</p>
    <ul>
      <li><strong>Note Purchase Price:</strong> Amount you're paying to buy the note</li>
      <li><strong>Unpaid Principal Balance (UPB):</strong> Amount borrower still owes</li>
      <li><strong>Interest Rate:</strong> Note's annual interest rate</li>
      <li><strong>Monthly Payment:</strong> Borrower's required monthly payment</li>
      <li><strong>Remaining Term:</strong> Months left until note is paid off</li>
      <li><strong>Property Value:</strong> Current property market value</li>
      <li><strong>Expected Holding Period:</strong> How long you plan to hold the note</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Yield on Purchase Price:</strong> Return based on what you paid vs. monthly payment</li>
      <li><strong>Annual Cash Flow:</strong> Expected annual income from note payments</li>
      <li><strong>Total Return:</strong> Cumulative profit over holding period</li>
      <li><strong>ROI Percentage:</strong> Total return divided by initial investment</li>
      <li><strong>Loan-to-Value (LTV):</strong> Note balance as percentage of property value</li>
      <li><strong>Discount to UPB:</strong> How much below face value you're paying</li>
    </ul>

    <h3>Advantages of Note Investing</h3>
    <ul>
      <li>Passive monthly income without property management</li>
      <li>No tenant headaches, repairs, or maintenance costs</li>
      <li>Can purchase notes at significant discounts (40-70% of UPB)</li>
      <li>Secured by real estate collateral</li>
      <li>Flexibility in workouts with borrowers</li>
      <li>Ability to diversify across multiple notes</li>
    </ul>

    <h3>Risks of Note Investing</h3>
    <ul>
      <li>Borrower default and foreclosure costs</li>
      <li>Property condition and marketability issues</li>
      <li>Legal and servicing complexities</li>
      <li>Due diligence requirements (title, liens, valuations)</li>
      <li>Illiquidity - notes can be hard to sell quickly</li>
      <li>Servicing costs and compliance requirements</li>
    </ul>

    <h3>Due Diligence Checklist</h3>
    <ul>
      <li><strong>Borrower Analysis:</strong> Payment history, credit, income verification</li>
      <li><strong>Property Evaluation:</strong> BPO/appraisal, condition, neighborhood</li>
      <li><strong>Title Review:</strong> Clear title, no superior liens, insurance</li>
      <li><strong>Note Terms:</strong> Interest rate, payment amount, maturity date</li>
      <li><strong>Legal Status:</strong> Foreclosure timelines, judicial vs. non-judicial state</li>
      <li><strong>Exit Strategies:</strong> Reinstatement, loan modification, foreclosure, resale</li>
    </ul>

    <h3>Exit Strategies for Note Investors</h3>
    <ol>
      <li><strong>Hold to Maturity:</strong> Collect payments until note is paid off</li>
      <li><strong>Loan Modification:</strong> Restructure terms to get borrower current</li>
      <li><strong>Short Payoff:</strong> Accept lump sum less than UPB from borrower</li>
      <li><strong>Foreclosure and REO Sale:</strong> Take property and sell as real estate</li>
      <li><strong>Resell Note:</strong> Sell to another investor at a profit</li>
      <li><strong>Deed in Lieu:</strong> Accept property deed instead of foreclosure</li>
    </ol>

    <h3>Calculating Note Value</h3>
    <p>Note investors use several methods to value notes:</p>
    <ul>
      <li><strong>Yield-Based Pricing:</strong> Price to achieve target return (10-15% typical)</li>
      <li><strong>LTV-Based Pricing:</strong> Pay percentage of property value (60-70% LTV)</li>
      <li><strong>UPB Discount:</strong> Pay discount to unpaid balance (40-80% of UPB)</li>
      <li><strong>Cash Flow Discounting:</strong> NPV of future payment stream</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Start with performing first-lien notes for lower risk</li>
      <li>Buy in non-judicial foreclosure states for easier workouts</li>
      <li>Maintain 6-12 months reserves for servicing and legal costs</li>
      <li>Build relationships with note brokers and servicers</li>
      <li>Understand state foreclosure laws and timelines</li>
      <li>Have clear exit strategy for each note before purchasing</li>
      <li>Diversify across multiple notes to spread risk</li>
    </ul>

    <h3>Tax Considerations</h3>
    <ul>
      <li>Interest income is taxed as ordinary income</li>
      <li>Gains from note sales may qualify for capital gains treatment</li>
      <li>Losses from foreclosure may be deductible</li>
      <li>Consider holding notes in self-directed IRA for tax-deferred growth</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Note Purchase Price',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'unpaidBalance',
        label: 'Unpaid Principal Balance (UPB)',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'interestRate',
        label: 'Note Interest Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'monthlyPayment',
        label: 'Monthly Payment',
        type: 'number',
        defaultValue: 665,
      },
      {
        name: 'remainingTerm',
        label: 'Remaining Term (Months)',
        type: 'number',
        defaultValue: 240,
      },
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'holdingPeriod',
        label: 'Expected Holding Period (Months)',
        type: 'number',
        defaultValue: 60,
      },
    ],
    results: [
      { label: 'Yield on Purchase Price', isPercentage: true },
      { label: 'Annual Cash Flow', isCurrency: true },
      { label: 'Total Income Over Holding Period', isCurrency: true },
      { label: 'Total ROI', isPercentage: true },
      { label: 'Loan-to-Value (LTV)', isPercentage: true },
      { label: 'Discount to UPB', isPercentage: true },
      { label: 'Monthly Cash-on-Cash Return', isPercentage: true },
    ],
    calculate: (values) => {
      const { purchasePrice, unpaidBalance, interestRate, monthlyPayment, remainingTerm, propertyValue, holdingPeriod } = values;
      
      const annualIncome = monthlyPayment * 12;
      const yieldOnPurchase = (annualIncome / purchasePrice) * 100;
      
      const totalIncomeOverHolding = monthlyPayment * Math.min(holdingPeriod, remainingTerm);
      const totalROI = ((totalIncomeOverHolding - purchasePrice) / purchasePrice) * 100;
      
      const ltv = (unpaidBalance / propertyValue) * 100;
      const discountToUPB = ((unpaidBalance - purchasePrice) / unpaidBalance) * 100;
      const monthlyCashOnCash = ((monthlyPayment / purchasePrice) * 100);

      return [
        { label: 'Yield on Purchase Price', value: yieldOnPurchase.toFixed(2), isPercentage: true },
        { label: 'Annual Cash Flow', value: annualIncome.toFixed(2), isCurrency: true },
        { label: 'Total Income Over Holding Period', value: totalIncomeOverHolding.toFixed(2), isCurrency: true },
        { label: 'Total ROI', value: totalROI.toFixed(2), isPercentage: true },
        { label: 'Loan-to-Value (LTV)', value: ltv.toFixed(2), isPercentage: true },
        { label: 'Discount to UPB', value: discountToUPB.toFixed(2), isPercentage: true },
        { label: 'Monthly Cash-on-Cash Return', value: monthlyCashOnCash.toFixed(3), isPercentage: true },
      ];
    },
  },
};
