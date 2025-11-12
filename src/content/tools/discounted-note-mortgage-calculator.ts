import { CalculatorContent } from '@/types';

export const DISCOUNTED_NOTE_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Discounted Note (Mortgage) Calculator',
  description: 'Calculate returns when purchasing mortgage notes at a discount, including yield, profit potential, and break-even analysis.',
  slug: 'discounted-note-mortgage-calculator',
  icon: '💵',
  category: 'Investment Analysis',
  article: {
    title: 'Buying Discounted Mortgage Notes: Complete Investment Guide',
    content: `
    <h2>Buying Discounted Mortgage Notes: Complete Investment Guide</h2>
    <p>Purchasing mortgage notes at a discount is a powerful wealth-building strategy that allows investors to generate high returns without the responsibilities of property ownership. When you buy a note below its face value, you profit from the discount while earning interest payments.</p>
    
    <h3>What is a Discounted Note?</h3>
    <p>A discounted mortgage note is purchased for less than the Unpaid Principal Balance (UPB). The discount represents immediate equity and enhanced returns for the note buyer.</p>
    
    <p><strong>Example:</strong> You buy a note with $100,000 UPB for $70,000 (30% discount). You now earn:</p>
    <ul>
      <li>Monthly interest payments based on the original note terms</li>
      <li>$30,000 profit when the note pays off at full value</li>
      <li>Significantly higher yield than the stated interest rate</li>
    </ul>

    <h3>Why Notes Are Sold at Discounts</h3>
    <ul>
      <li><strong>Banks:</strong> Want to remove non-performing or low-yield assets from books</li>
      <li><strong>Private Sellers:</strong> Need immediate liquidity instead of waiting for payments</li>
      <li><strong>Estate Sales:</strong> Heirs prefer cash over managing long-term notes</li>
      <li><strong>Portfolio Managers:</strong> Rebalancing and improving overall yields</li>
      <li><strong>Risk Reduction:</strong> Transferring default risk to investor</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Analyze discounted note investments by entering:</p>
    <ul>
      <li><strong>Unpaid Principal Balance:</strong> Amount borrower still owes</li>
      <li><strong>Purchase Price:</strong> What you'll pay for the note</li>
      <li><strong>Interest Rate:</strong> Note's stated annual interest rate</li>
      <li><strong>Monthly Payment:</strong> Borrower's regular payment amount</li>
      <li><strong>Remaining Term:</strong> Months until note is paid off</li>
      <li><strong>Property Value:</strong> Current value of collateral property</li>
    </ul>

    <h3>Key Metrics Explained</h3>
    <ul>
      <li><strong>Purchase Discount:</strong> Percentage below face value you're paying</li>
      <li><strong>Yield to Maturity:</strong> Actual return if held until payoff</li>
      <li><strong>Current Yield:</strong> Annual payment / purchase price</li>
      <li><strong>Total Profit Potential:</strong> All payments plus payoff minus purchase price</li>
      <li><strong>LTV Ratio:</strong> Note balance / property value (security measure)</li>
      <li><strong>Break-Even Months:</strong> Time to recover initial investment</li>
    </ul>

    <h3>Pricing Methodology</h3>
    <p>Note investors use several approaches to determine fair price:</p>
    
    <h4>1. Yield-Based Pricing</h4>
    <p>Price the note to achieve a target yield (typically 10-15%):</p>
    <ul>
      <li>10% target yield on performing notes (low risk)</li>
      <li>12-15% target yield on re-performing notes (medium risk)</li>
      <li>15-20%+ target yield on non-performing (high risk)</li>
    </ul>

    <h4>2. LTV-Based Pricing</h4>
    <p>Pay a percentage of property value to maintain equity cushion:</p>
    <ul>
      <li>60-70% LTV for first position notes</li>
      <li>40-50% LTV for second position notes</li>
      <li>Lower LTV = more protection against default</li>
    </ul>

    <h4>3. Discount to UPB</h4>
    <p>Offer percentage of unpaid balance:</p>
    <ul>
      <li>Performing notes: 85-95% of UPB</li>
      <li>Re-performing notes: 70-85% of UPB</li>
      <li>Non-performing notes: 40-70% of UPB</li>
    </ul>

    <h3>Due Diligence Checklist</h3>
    <p>Before purchasing any discounted note:</p>
    
    <p><strong>Borrower Review:</strong></p>
    <ul>
      <li>Payment history (12-24 months minimum)</li>
      <li>Credit score and trends</li>
      <li>Income verification and stability</li>
      <li>Contact information accuracy</li>
    </ul>

    <p><strong>Property Analysis:</strong></p>
    <ul>
      <li>Current market value (BPO or appraisal)</li>
      <li>Property condition and marketability</li>
      <li>Location and neighborhood trends</li>
      <li>Occupancy status (owner-occupied vs. rental)</li>
    </ul>

    <p><strong>Legal Review:</strong></p>
    <ul>
      <li>Clear title with no superior liens</li>
      <li>Properly executed and recorded documents</li>
      <li>State foreclosure laws and timelines</li>
      <li>Assignment and servicing transfer procedures</li>
    </ul>

    <h3>Calculating True Yield</h3>
    <p>The discount dramatically impacts your effective yield:</p>
    
    <p><strong>Example Scenario:</strong></p>
    <ul>
      <li>UPB: $100,000 | Stated Rate: 6% | Monthly Payment: $600</li>
      <li>Purchase at 70% discount ($70,000)</li>
      <li>Annual payments: $7,200</li>
      <li>Current yield: $7,200 / $70,000 = 10.3%</li>
      <li>Plus $30,000 profit at payoff = much higher total return</li>
    </ul>

    <h3>Exit Strategies</h3>
    <p>Multiple ways to profit from discounted notes:</p>
    
    <h4>1. Hold to Maturity</h4>
    <ul>
      <li>Collect monthly payments</li>
      <li>Receive full UPB at payoff</li>
      <li>Realize full discount profit</li>
      <li>Timeline: Remaining term of note</li>
    </ul>

    <h4>2. Early Payoff</h4>
    <ul>
      <li>Borrower refinances or sells property</li>
      <li>Receive full UPB immediately</li>
      <li>Accelerated profit realization</li>
      <li>Can reinvest capital sooner</li>
    </ul>

    <h4>3. Resale to Another Investor</h4>
    <ul>
      <li>Sell note for quick profit</li>
      <li>Typical: Buy at 70%, sell at 80-85%</li>
      <li>Fastest exit but lowest total return</li>
      <li>Good for fixing and flipping notes</li>
    </ul>

    <h4>4. Partial Sale</h4>
    <ul>
      <li>Sell portion of payment stream</li>
      <li>Recover initial investment quickly</li>
      <li>Keep remainder for ongoing income</li>
      <li>Balances cash-out with cash flow</li>
    </ul>

    <h3>Risk Management</h3>
    <p>Protect your investment with these strategies:</p>
    <ul>
      <li><strong>Conservative LTV:</strong> Stay below 70% LTV for equity cushion</li>
      <li><strong>Property Insurance:</strong> Ensure adequate hazard insurance</li>
      <li><strong>Payment Monitoring:</strong> Use servicer to track payments</li>
      <li><strong>Diversification:</strong> Spread capital across multiple notes</li>
      <li><strong>Geographic Diversity:</strong> Don't concentrate in one market</li>
      <li><strong>Reserve Fund:</strong> Maintain 10-20% for unexpected costs</li>
    </ul>

    <h3>Tax Advantages</h3>
    <ul>
      <li><strong>Interest Income:</strong> Taxed as ordinary income</li>
      <li><strong>Principal Payments:</strong> Return of capital (not taxed)</li>
      <li><strong>Discount Profit:</strong> May qualify as capital gain</li>
      <li><strong>IRA Friendly:</strong> Can hold in self-directed IRA tax-deferred</li>
      <li><strong>Loss Deductions:</strong> Losses from defaults may be deductible</li>
    </ul>

    <h3>Common Pitfalls to Avoid</h3>
    <ul>
      <li>Skipping property valuation (overpaying for bad collateral)</li>
      <li>Ignoring title issues (superior liens, clouds on title)</li>
      <li>Failing to verify borrower contact information</li>
      <li>Not understanding state foreclosure laws</li>
      <li>Buying without servicing plan in place</li>
      <li>Overleveraging with too few notes</li>
      <li>Ignoring property insurance requirements</li>
    </ul>

    <h3>Best Practices for Success</h3>
    <ul>
      <li>Start with performing first-lien notes (lower risk)</li>
      <li>Target 60-70% LTV for adequate equity cushion</li>
      <li>Build relationships with note brokers and sellers</li>
      <li>Use professional servicer from day one</li>
      <li>Maintain detailed records of all transactions</li>
      <li>Understand your state's foreclosure timeline</li>
      <li>Network with other note investors</li>
      <li>Continue education on note investing strategies</li>
    </ul>

    <h3>Where to Find Discounted Notes</h3>
    <ul>
      <li>Note exchanges and online marketplaces</li>
      <li>Direct from banks and credit unions</li>
      <li>Note brokers and intermediaries</li>
      <li>Real estate attorneys and estate sales</li>
      <li>Hedge funds selling portfolios</li>
      <li>Other note investors (networking)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'unpaidBalance',
        label: 'Unpaid Principal Balance (UPB)',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'purchasePrice',
        label: 'Note Purchase Price',
        type: 'number',
        defaultValue: 70000,
      },
      {
        name: 'interestRate',
        label: 'Note Interest Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'monthlyPayment',
        label: 'Monthly Payment',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'remainingMonths',
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
    ],
    results: [
      { label: 'Purchase Discount', isPercentage: true },
      { label: 'Discount Profit Potential', isCurrency: true },
      { label: 'Current Yield (Annual)', isPercentage: true },
      { label: 'Total Income Over Life', isCurrency: true },
      { label: 'Total Profit (Income + Discount)', isCurrency: true },
      { label: 'ROI if Held to Maturity', isPercentage: true },
      { label: 'Loan-to-Value (LTV)', isPercentage: true },
      { label: 'Months to Break Even', isText: true },
    ],
    calculate: (values) => {
      const { unpaidBalance, purchasePrice, interestRate, monthlyPayment, remainingMonths, propertyValue } = values;
      
      const discountPercent = ((unpaidBalance - purchasePrice) / unpaidBalance) * 100;
      const discountProfit = unpaidBalance - purchasePrice;
      
      const annualIncome = monthlyPayment * 12;
      const currentYield = (annualIncome / purchasePrice) * 100;
      
      const totalPaymentsToReceive = monthlyPayment * remainingMonths;
      const totalProfit = (totalPaymentsToReceive + unpaidBalance) - purchasePrice;
      const totalROI = (totalProfit / purchasePrice) * 100;
      
      const ltv = (unpaidBalance / propertyValue) * 100;
      
      const monthsToBreakEven = Math.ceil(purchasePrice / monthlyPayment);

      return [
        { label: 'Purchase Discount', value: discountPercent.toFixed(2), isPercentage: true },
        { label: 'Discount Profit Potential', value: discountProfit.toFixed(2), isCurrency: true },
        { label: 'Current Yield (Annual)', value: currentYield.toFixed(2), isPercentage: true },
        { label: 'Total Income Over Life', value: totalPaymentsToReceive.toFixed(2), isCurrency: true },
        { label: 'Total Profit (Income + Discount)', value: totalProfit.toFixed(2), isCurrency: true },
        { label: 'ROI if Held to Maturity', value: totalROI.toFixed(2), isPercentage: true },
        { label: 'Loan-to-Value (LTV)', value: ltv.toFixed(2), isPercentage: true },
        { label: 'Months to Break Even', value: `${monthsToBreakEven} months`, isText: true },
      ];
    },
  },
};
