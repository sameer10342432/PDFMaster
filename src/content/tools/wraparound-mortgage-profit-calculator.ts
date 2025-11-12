import { CalculatorContent } from '@/types';

export const WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wraparound Mortgage Profit Calculator',
  description: 'Calculate profit potential from wraparound mortgages (All-Inclusive Trust Deeds) including interest rate spreads and cash flow analysis.',
  slug: 'wraparound-mortgage-profit-calculator',
  icon: '🔄',
  category: 'Investment Analysis',
  article: {
    title: 'Wraparound Mortgage Strategy: Complete Profit Guide',
    content: `
    <h2>Wraparound Mortgage Strategy: Complete Profit Guide</h2>
    <p>A wraparound mortgage (also called an All-Inclusive Trust Deed or AITD) is a creative financing technique where the seller provides financing while keeping the existing mortgage in place. The buyer makes payments to the seller, who continues paying the original mortgage, pocketing the interest rate spread.</p>
    
    <h3>What is a Wraparound Mortgage?</h3>
    <p>In a wraparound transaction:</p>
    <ul>
      <li>Seller has existing mortgage at lower interest rate (e.g., 4%)</li>
      <li>Seller finances buyer at higher rate (e.g., 7%)</li>
      <li>New loan "wraps around" existing loan</li>
      <li>Seller profits from 3% interest rate spread</li>
      <li>Seller continues making payments on original loan</li>
    </ul>

    <p><strong>Example:</strong></p>
    <ul>
      <li>Property Value: $300,000</li>
      <li>Existing Mortgage: $150,000 at 4% interest</li>
      <li>Wraparound Loan: $270,000 at 7% interest</li>
      <li>Seller receives: $270,000 × 7% = $18,900/year</li>
      <li>Seller pays: $150,000 × 4% = $6,000/year</li>
      <li>Seller profit from spread: $12,900/year</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate wraparound profitability by entering:</p>
    <ul>
      <li><strong>Property Sale Price:</strong> Agreed purchase price</li>
      <li><strong>Down Payment:</strong> Initial payment from buyer</li>
      <li><strong>Existing Mortgage Balance:</strong> Seller's current loan balance</li>
      <li><strong>Existing Interest Rate:</strong> Rate on seller's current mortgage</li>
      <li><strong>Wraparound Interest Rate:</strong> Rate seller charges buyer</li>
      <li><strong>Wraparound Term:</strong> Length of wraparound loan</li>
      <li><strong>Existing Mortgage Payment:</strong> Seller's current monthly payment</li>
    </ul>

    <h3>Key Profit Metrics</h3>
    <ul>
      <li><strong>Interest Rate Spread:</strong> Difference between rates (profit margin)</li>
      <li><strong>Monthly Spread Income:</strong> Monthly profit from interest differential</li>
      <li><strong>Annual Spread Income:</strong> Yearly profit from spread</li>
      <li><strong>Total Spread Profit:</strong> Cumulative profit over loan life</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual spread / seller's equity</li>
      <li><strong>Net Monthly Cash Flow:</strong> Total monthly cash flow to seller</li>
    </ul>

    <h3>Advantages of Wraparound Mortgages</h3>
    
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li><strong>Interest Spread Profit:</strong> Earn on difference between rates</li>
      <li><strong>Higher Sale Price:</strong> Often command 5-15% premium</li>
      <li><strong>Monthly Cash Flow:</strong> Steady income stream</li>
      <li><strong>Keep Low-Rate Mortgage:</strong> Benefit from existing financing</li>
      <li><strong>Tax Deferral:</strong> Installment sale spreads capital gains</li>
      <li><strong>Faster Sale:</strong> Larger buyer pool</li>
      <li><strong>Retain Security:</strong> Can foreclose if buyer defaults</li>
    </ul>

    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Easier qualification than bank financing</li>
      <li>Lower closing costs</li>
      <li>Faster closing process</li>
      <li>Flexible terms and structure</li>
      <li>Bad credit may be acceptable</li>
      <li>Finance unique or non-conforming properties</li>
    </ul>

    <h3>Risks and Challenges</h3>
    
    <p><strong>Due-on-Sale Clause Risk:</strong></p>
    <ul>
      <li>Most mortgages have due-on-sale clauses</li>
      <li>Lender can call loan due if property transfers</li>
      <li>However, lenders rarely enforce if payments stay current</li>
      <li>Risk increases if original lender is sold or merged</li>
      <li>Garn-St. Germain Act provides some protections</li>
    </ul>

    <p><strong>Seller Risks:</strong></p>
    <ul>
      <li>Must continue making payments on underlying mortgage</li>
      <li>Buyer default creates two problems (no income + must keep paying)</li>
      <li>Junior to existing lien (foreclosure more complex)</li>
      <li>Servicing and collection responsibility</li>
      <li>Property maintenance depends on buyer</li>
    </ul>

    <p><strong>Buyer Risks:</strong></p>
    <ul>
      <li>Seller might not pay underlying mortgage (buyer could lose property)</li>
      <li>Difficulty proving equity if seller defaults</li>
      <li>Potential due-on-sale acceleration</li>
      <li>Complex foreclosure if issues arise</li>
    </ul>

    <h3>Legal Structure and Documentation</h3>
    <p>Proper documentation is critical:</p>
    
    <p><strong>Required Documents:</strong></p>
    <ul>
      <li><strong>Promissory Note:</strong> Details of wraparound loan terms</li>
      <li><strong>Deed of Trust / Mortgage:</strong> Secures the wraparound note</li>
      <li><strong>Disclosure Statement:</strong> Informs buyer of underlying loan</li>
      <li><strong>Collection Agreement:</strong> Defines payment handling</li>
      <li><strong>Insurance Requirements:</strong> Protects both parties' interests</li>
      <li><strong>Title Insurance:</strong> Insures the wraparound position</li>
    </ul>

    <p><strong>State Considerations:</strong></p>
    <ul>
      <li>Legality varies by state (some prohibit or restrict)</li>
      <li>California commonly uses "All-Inclusive Trust Deeds" (AITDs)</li>
      <li>Texas has specific regulations and disclosure requirements</li>
      <li>Consult real estate attorney in your jurisdiction</li>
    </ul>

    <h3>Calculating Profitability</h3>
    <p>The spread is where the magic happens:</p>
    
    <p><strong>Scenario 1: Traditional Spread</strong></p>
    <ul>
      <li>Existing loan: $200,000 at 4.5% = $9,000/year interest</li>
      <li>Wraparound: $280,000 at 7.5% = $21,000/year interest</li>
      <li>Spread profit: $12,000/year</li>
      <li>On $80,000 seller equity = 15% return just from spread!</li>
    </ul>

    <p><strong>Scenario 2: High-Spread Example</strong></p>
    <ul>
      <li>Existing: $150,000 at 3.5% (locked in during low rates)</li>
      <li>Wraparound: $250,000 at 8%</li>
      <li>Spread: 4.5 percentage points</li>
      <li>Annual spread income: $15,750</li>
      <li>Exceptional profit on $100,000 equity</li>
    </ul>

    <h3>Structuring Best Practices</h3>
    
    <p><strong>Optimal Deal Parameters:</strong></p>
    <ul>
      <li>Down payment: 15-25% (buyer has skin in game)</li>
      <li>Interest spread: 2-4 percentage points</li>
      <li>Balloon term: 5-7 years (force refinance)</li>
      <li>Existing loan seasoning: 12+ months (shows payment history)</li>
      <li>Existing loan balance: 50-70% of sale price (good spread opportunity)</li>
    </ul>

    <p><strong>Due-on-Sale Mitigation:</strong></p>
    <ul>
      <li>Maintain perfect payment history on underlying loan</li>
      <li>Keep insurance and taxes current</li>
      <li>Consider land trust or LLC structure (consult attorney)</li>
      <li>Don't advertise the wraparound publicly</li>
      <li>Build relationship with loan servicer</li>
    </ul>

    <h3>Exit Strategies</h3>
    <p>Plan for these potential outcomes:</p>
    
    <h4>1. Balloon Payment</h4>
    <ul>
      <li>Structure 5-7 year balloon</li>
      <li>Buyer refinances with bank</li>
      <li>Seller receives remaining balance</li>
      <li>Both parties move on</li>
    </ul>

    <h4>2. Early Payoff</h4>
    <ul>
      <li>Buyer sells property or refinances early</li>
      <li>Seller receives payoff amount</li>
      <li>May include prepayment premium</li>
    </ul>

    <h4>3. Hold to Maturity</h4>
    <ul>
      <li>Collect spread income for full term</li>
      <li>Maximum profit extraction</li>
      <li>Requires long-term comfort with structure</li>
    </ul>

    <h4>4. Sell the Note</h4>
    <ul>
      <li>Sell wraparound to note investor</li>
      <li>Quick liquidity but reduced profit</li>
      <li>Note buyers discount for wraparound complexity</li>
    </ul>

    <h3>Comparison to Alternatives</h3>
    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background:#f4f4f4;">
        <th style="border:1px solid #ddd; padding:8px;">Strategy</th>
        <th style="border:1px solid #ddd; padding:8px;">Profit Source</th>
        <th style="border:1px solid #ddd; padding:8px;">Typical Return</th>
        <th style="border:1px solid #ddd; padding:8px;">Complexity</th>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Wraparound</td>
        <td style="border:1px solid #ddd; padding:8px;">Interest spread + appreciation</td>
        <td style="border:1px solid #ddd; padding:8px;">10-25%</td>
        <td style="border:1px solid #ddd; padding:8px;">Medium-High</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Seller Financing</td>
        <td style="border:1px solid #ddd; padding:8px;">Interest income only</td>
        <td style="border:1px solid #ddd; padding:8px;">6-10%</td>
        <td style="border:1px solid #ddd; padding:8px;">Medium</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Subject-To</td>
        <td style="border:1px solid #ddd; padding:8px;">Equity capture + cash flow</td>
        <td style="border:1px solid #ddd; padding:8px;">15-30%+</td>
        <td style="border:1px solid #ddd; padding:8px;">Medium</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Traditional Sale</td>
        <td style="border:1px solid #ddd; padding:8px;">Equity only</td>
        <td style="border:1px solid #ddd; padding:8px;">Varies</td>
        <td style="border:1px solid #ddd; padding:8px;">Low</td>
      </tr>
    </table>

    <h3>When to Use Wraparound Financing</h3>
    <p><strong>Ideal Scenarios:</strong></p>
    <ul>
      <li>You have low-rate mortgage you want to keep</li>
      <li>Current rates significantly higher than your rate (2%+ spread)</li>
      <li>Property has substantial equity built up</li>
      <li>Buyer can't qualify for bank financing</li>
      <li>Want ongoing income vs. lump sum cash-out</li>
      <li>Market conditions favor creative financing</li>
    </ul>

    <h3>Tax Implications</h3>
    <ul>
      <li><strong>Installment Sale:</strong> Spread capital gains over payment period</li>
      <li><strong>Interest Income:</strong> Spread income taxed as ordinary income</li>
      <li><strong>Principal Payments:</strong> Return of basis (not taxed until gain portion)</li>
      <li><strong>Depreciation Recapture:</strong> Due in year of sale</li>
      <li><strong>IRS Form 6252:</strong> Required for installment sale reporting</li>
    </ul>

    <h3>Best Practices for Success</h3>
    <ul>
      <li>Hire experienced real estate attorney for documentation</li>
      <li>Use professional loan servicing from day one</li>
      <li>Maintain separate escrow for taxes and insurance</li>
      <li>Conduct buyer credit and income verification</li>
      <li>Require 20%+ down payment minimum</li>
      <li>Include balloon clause (5-7 years maximum)</li>
      <li>Keep perfect payment record on underlying mortgage</li>
      <li>Document everything in writing</li>
      <li>Consider title insurance for wraparound position</li>
      <li>Have buyer agree to property insurance with seller as co-insured</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'existingBalance',
        label: 'Existing Mortgage Balance',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'existingRate',
        label: 'Existing Mortgage Rate (%)',
        type: 'number',
        defaultValue: 4.5,
      },
      {
        name: 'wraparoundRate',
        label: 'Wraparound Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTerm',
        label: 'Wraparound Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'existingPayment',
        label: 'Existing Monthly Payment',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [
      { label: 'Wraparound Loan Amount', isCurrency: true },
      { label: 'Wraparound Monthly Payment', isCurrency: true },
      { label: 'Interest Rate Spread', isPercentage: true },
      { label: 'Monthly Spread Income', isCurrency: true },
      { label: 'Annual Spread Income', isCurrency: true },
      { label: 'Net Monthly Cash Flow', isCurrency: true },
      { label: 'Seller Equity Position', isCurrency: true },
      { label: 'Cash-on-Cash Return (Spread Only)', isPercentage: true },
    ],
    calculate: (values) => {
      const { salePrice, downPayment, existingBalance, existingRate, wraparoundRate, loanTerm, existingPayment } = values;
      
      const wraparoundAmount = salePrice - downPayment;
      const monthlyRate = wraparoundRate / 100 / 12;
      const totalPayments = loanTerm * 12;
      
      const wraparoundPayment = wraparoundAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                                (Math.pow(1 + monthlyRate, totalPayments) - 1);
      
      const existingMonthlyInterest = existingBalance * (existingRate / 100 / 12);
      const wraparoundMonthlyInterest = wraparoundAmount * (wraparoundRate / 100 / 12);
      
      const monthlySpread = wraparoundMonthlyInterest - existingMonthlyInterest;
      const annualSpread = monthlySpread * 12;
      
      const netCashFlow = wraparoundPayment - existingPayment;
      const sellerEquity = salePrice - existingBalance;
      const spreadSpread = wraparoundRate - existingRate;
      
      const cashOnCashReturn = (annualSpread / sellerEquity) * 100;

      return [
        { label: 'Wraparound Loan Amount', value: wraparoundAmount.toFixed(2), isCurrency: true },
        { label: 'Wraparound Monthly Payment', value: wraparoundPayment.toFixed(2), isCurrency: true },
        { label: 'Interest Rate Spread', value: spreadSpread.toFixed(2), isPercentage: true },
        { label: 'Monthly Spread Income', value: monthlySpread.toFixed(2), isCurrency: true },
        { label: 'Annual Spread Income', value: annualSpread.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Cash Flow', value: netCashFlow.toFixed(2), isCurrency: true },
        { label: 'Seller Equity Position', value: sellerEquity.toFixed(2), isCurrency: true },
        { label: 'Cash-on-Cash Return (Spread Only)', value: cashOnCashReturn.toFixed(2), isPercentage: true },
      ];
    },
  },
};
