import { CalculatorContent } from '@/types';

export const SELLER_FINANCING_AMORTIZATION_SCHEDULE_CONTENT: CalculatorContent = {
  title: 'Seller Financing Amortization Schedule',
  description: 'Create complete amortization schedules for seller-financed real estate deals including payment breakdowns and interest calculations.',
  slug: 'seller-financing-amortization-schedule',
  icon: '📅',
  category: 'Investment Analysis',
  article: {
    title: 'Seller Financing Amortization: Complete Guide',
    content: `
    <h2>Seller Financing Amortization: Complete Guide</h2>
    <p>Seller financing (also called owner financing) allows sellers to act as the bank, offering buyers financing directly. Understanding amortization schedules is crucial for both parties to structure profitable, sustainable deals.</p>
    
    <h3>What is Seller Financing?</h3>
    <p>Seller financing is when the property seller provides financing to the buyer instead of the buyer obtaining a traditional mortgage. The buyer makes payments directly to the seller according to agreed-upon terms.</p>
    
    <p><strong>Key Components:</strong></p>
    <ul>
      <li><strong>Purchase Price:</strong> Agreed sale price of the property</li>
      <li><strong>Down Payment:</strong> Initial payment from buyer (typically 10-30%)</li>
      <li><strong>Financed Amount:</strong> Purchase price minus down payment</li>
      <li><strong>Interest Rate:</strong> Rate charged by seller (typically 6-10%)</li>
      <li><strong>Term:</strong> Loan duration (often 5-10 years with balloon)</li>
      <li><strong>Payment Frequency:</strong> Usually monthly</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Calculate your seller financing amortization by entering:</p>
    <ul>
      <li><strong>Property Price:</strong> Total purchase price</li>
      <li><strong>Down Payment:</strong> Initial cash from buyer</li>
      <li><strong>Interest Rate:</strong> Annual interest rate (seller sets this)</li>
      <li><strong>Loan Term:</strong> Amortization period in years</li>
      <li><strong>Balloon Payment Year:</strong> When full balance is due (if applicable)</li>
    </ul>

    <h3>Understanding Amortization</h3>
    <p>Amortization is the process of paying off debt over time through regular payments. Each payment includes:</p>
    <ul>
      <li><strong>Principal:</strong> Amount that reduces the loan balance</li>
      <li><strong>Interest:</strong> Cost of borrowing calculated on remaining balance</li>
    </ul>

    <p>Early payments are mostly interest, later payments are mostly principal. This is the standard loan structure used by banks and seller financing.</p>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Monthly Payment:</strong> Fixed payment amount</li>
      <li><strong>Total Interest Paid:</strong> Total interest over loan life</li>
      <li><strong>Total Amount Paid:</strong> All payments combined</li>
      <li><strong>Balloon Payment Amount:</strong> Lump sum due if balloon term</li>
      <li><strong>First Year Interest:</strong> Interest income in year one</li>
      <li><strong>Remaining Balance:</strong> Outstanding balance over time</li>
    </ul>

    <h3>Advantages for Sellers</h3>
    <ul>
      <li><strong>Higher Sale Price:</strong> Often command 10-20% premium</li>
      <li><strong>Interest Income:</strong> Earn 6-10% annual returns</li>
      <li><strong>Tax Benefits:</strong> Installment sale treatment spreads capital gains</li>
      <li><strong>Faster Sale:</strong> Larger buyer pool (includes those who can't get bank loans)</li>
      <li><strong>Retained Security:</strong> Keep lien on property until paid off</li>
      <li><strong>Monthly Cash Flow:</strong> Steady passive income stream</li>
    </ul>

    <h3>Advantages for Buyers</h3>
    <ul>
      <li><strong>Easier Qualification:</strong> No bank underwriting requirements</li>
      <li><strong>Faster Closing:</strong> No bank delays (close in 1-2 weeks)</li>
      <li><strong>Flexible Terms:</strong> Negotiate custom payment structures</li>
      <li><strong>Lower Closing Costs:</strong> No bank fees or PMI</li>
      <li><strong>Bad Credit Accepted:</strong> Credit issues less important</li>
      <li><strong>Unique Properties:</strong> Finance properties banks won't touch</li>
    </ul>

    <h3>Typical Seller Financing Terms</h3>
    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background:#f4f4f4;">
        <th style="border:1px solid #ddd; padding:8px;">Component</th>
        <th style="border:1px solid #ddd; padding:8px;">Typical Range</th>
        <th style="border:1px solid #ddd; padding:8px;">Notes</th>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Down Payment</td>
        <td style="border:1px solid #ddd; padding:8px;">10-30%</td>
        <td style="border:1px solid #ddd; padding:8px;">Higher down = lower seller risk</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Interest Rate</td>
        <td style="border:1px solid #ddd; padding:8px;">6-10%</td>
        <td style="border:1px solid #ddd; padding:8px;">Usually 2-3% above market rates</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Amortization</td>
        <td style="border:1px solid #ddd; padding:8px;">15-30 years</td>
        <td style="border:1px solid #ddd; padding:8px;">Longer term = lower payments</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Balloon Term</td>
        <td style="border:1px solid #ddd; padding:8px;">3-10 years</td>
        <td style="border:1px solid #ddd; padding:8px;">Balance due before full amortization</td>
      </tr>
    </table>

    <h3>Balloon Payments Explained</h3>
    <p>A balloon payment is a large lump sum due before the loan is fully amortized. This structure benefits both parties:</p>
    
    <p><strong>Seller Benefits:</strong></p>
    <ul>
      <li>Get most of capital back sooner (3-7 years vs. 30 years)</li>
      <li>Earn interest income during balloon term</li>
      <li>Force buyer to refinance with bank (de-risk)</li>
      <li>Option to extend if buyer adds value to property</li>
    </ul>

    <p><strong>Buyer Benefits:</strong></p>
    <ul>
      <li>Lower monthly payments based on longer amortization</li>
      <li>Time to improve credit for bank refinancing</li>
      <li>Build equity through payments and appreciation</li>
      <li>Opportunity to sell before balloon due</li>
    </ul>

    <p><strong>Example:</strong> $200,000 loan at 7% interest</p>
    <ul>
      <li>Amortized over 30 years = $1,330/month payment</li>
      <li>Balloon due in 5 years = $185,193 lump sum due</li>
      <li>Buyer enjoyed low payments, seller gets most capital back in 5 years</li>
    </ul>

    <h3>Tax Implications for Sellers</h3>
    <p><strong>Installment Sale Treatment (IRS Code 453):</strong></p>
    <ul>
      <li>Spread capital gains tax over multiple years</li>
      <li>Pay tax only as payments received</li>
      <li>Interest income taxed as ordinary income</li>
      <li>Depreciation recapture in year of sale</li>
      <li>Imputed interest rules apply (IRS minimum rates)</li>
    </ul>

    <p><strong>Example Tax Benefit:</strong></p>
    <ul>
      <li>Sale price: $300,000 | Cost basis: $150,000 | Gain: $150,000</li>
      <li>Traditional sale: Pay capital gains tax on full $150,000 in year 1</li>
      <li>Seller financing (5-year balloon): Pay tax on 1/5th each year = spread tax liability</li>
    </ul>

    <h3>Risk Management for Sellers</h3>
    <p>Protect yourself when offering seller financing:</p>
    
    <p><strong>Due Diligence:</strong></p>
    <ul>
      <li>Check buyer credit score and history</li>
      <li>Verify employment and income</li>
      <li>Require 20-30% down payment minimum</li>
      <li>Get buyer financial statements</li>
    </ul>

    <p><strong>Legal Protection:</strong></p>
    <ul>
      <li>Use attorney to draft promissory note</li>
      <li>Record mortgage/deed of trust properly</li>
      <li>Include default provisions and foreclosure rights</li>
      <li>Consider due-on-sale clause</li>
      <li>Purchase title insurance</li>
    </ul>

    <p><strong>Ongoing Management:</strong></p>
    <ul>
      <li>Use professional loan servicer ($30-50/month)</li>
      <li>Ensure property insurance maintained</li>
      <li>Monitor property tax payments</li>
      <li>Conduct annual property inspections</li>
    </ul>

    <h3>Common Deal Structures</h3>
    
    <h4>1. Full Seller Financing</h4>
    <p>Seller provides 100% financing (minus down payment):</p>
    <ul>
      <li>Sale Price: $250,000</li>
      <li>Down Payment: $50,000 (20%)</li>
      <li>Seller Financed: $200,000</li>
      <li>Terms: 7% interest, 30-year amortization, 5-year balloon</li>
    </ul>

    <h4>2. Seller Second Mortgage</h4>
    <p>Buyer gets bank loan for 70%, seller finances gap:</p>
    <ul>
      <li>Sale Price: $250,000</li>
      <li>Down Payment: $25,000 (10%)</li>
      <li>Bank First Mortgage: $175,000 (70%)</li>
      <li>Seller Second: $50,000 (20%)</li>
      <li>Seller terms: 8% interest, interest-only, 3-year balloon</li>
    </ul>

    <h4>3. Land Contract / Contract for Deed</h4>
    <p>Buyer takes possession but seller retains title until paid off:</p>
    <ul>
      <li>Used in some states as alternative to mortgage</li>
      <li>Title transfers only when paid in full</li>
      <li>Easier for seller to reclaim property on default</li>
      <li>Check state laws (varies significantly)</li>
    </ul>

    <h3>When to Use Seller Financing</h3>
    <p><strong>Ideal Scenarios:</strong></p>
    <ul>
      <li>Difficult-to-finance properties (land, fixer-uppers, unique)</li>
      <li>Buyers with credit challenges but good income</li>
      <li>Soft markets where properties sit unsold</li>
      <li>Sellers want ongoing income vs. lump sum</li>
      <li>Tax planning to defer capital gains</li>
      <li>Family transactions between relatives</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Require minimum 20% down payment</li>
      <li>Use 5-7 year balloon to force refinance</li>
      <li>Charge 2-3% above market interest rates</li>
      <li>Hire attorney to create enforceable documents</li>
      <li>Use loan servicing company from day one</li>
      <li>Conduct annual property inspections</li>
      <li>Build in prepayment clause (no penalty)</li>
      <li>Consider selling note to investor if needed</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyPrice',
        label: 'Property Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTermYears',
        label: 'Amortization Period (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'balloonYear',
        label: 'Balloon Payment Due (Year)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      { label: 'Loan Amount', isCurrency: true },
      { label: 'Monthly Payment (P&I)', isCurrency: true },
      { label: 'Balloon Payment Amount', isCurrency: true },
      { label: 'Total Interest if Held to Balloon', isCurrency: true },
      { label: 'Total Paid Over Balloon Period', isCurrency: true },
      { label: 'First Year Interest Income', isCurrency: true },
      { label: 'Down Payment Percentage', isPercentage: true },
    ],
    calculate: (values) => {
      const { propertyPrice, downPayment, interestRate, loanTermYears, balloonYear } = values;
      
      const loanAmount = propertyPrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const totalPayments = loanTermYears * 12;
      
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                             (Math.pow(1 + monthlyRate, totalPayments) - 1);
      
      const balloonMonths = balloonYear * 12;
      let remainingBalance = loanAmount;
      let totalInterestPaid = 0;
      let firstYearInterest = 0;
      
      for (let i = 1; i <= balloonMonths; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
        totalInterestPaid += interestPayment;
        
        if (i <= 12) {
          firstYearInterest += interestPayment;
        }
      }
      
      const balloonAmount = remainingBalance;
      const totalPaid = (monthlyPayment * balloonMonths) + balloonAmount;
      const downPaymentPercent = (downPayment / propertyPrice) * 100;

      return [
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment (P&I)', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Balloon Payment Amount', value: balloonAmount.toFixed(2), isCurrency: true },
        { label: 'Total Interest if Held to Balloon', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Total Paid Over Balloon Period', value: totalPaid.toFixed(2), isCurrency: true },
        { label: 'First Year Interest Income', value: firstYearInterest.toFixed(2), isCurrency: true },
        { label: 'Down Payment Percentage', value: downPaymentPercent.toFixed(2), isPercentage: true },
      ];
    },
  },
};
