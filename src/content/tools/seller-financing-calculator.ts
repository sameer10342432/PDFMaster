import { CalculatorContent } from '@/types';

export const SELLER_FINANCING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Seller Financing Calculator - Owner Financing Payment & Terms Analysis',
  description: 'Calculate seller financing payments, interest, and cash flow for both buyers and sellers in owner-financed real estate deals',
  icon: 'Icon',
  slug: 'seller-financing-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'Complete Guide to Seller Financing in Real Estate',
    content: `
    <h2>What is Seller Financing?</h2>
    <p>Seller financing (owner financing) is when the property seller acts as the lender, allowing the buyer to make payments directly to them instead of obtaining a traditional bank mortgage. This creative financing strategy benefits both parties - buyers who can't qualify for bank loans and sellers seeking higher returns and faster sales.</p>

    <h3>How Seller Financing Works</h3>
    <ul>
      <li><strong>Down Payment:</strong> Buyer pays 10-30% down (vs 20-25% for conventional loans).</li>
      <li><strong>Promissory Note:</strong> Legal document outlining loan terms, payment schedule, interest rate.</li>
      <li><strong>Deed of Trust/Mortgage:</strong> Secures the property as collateral - seller can foreclose if buyer defaults.</li>
      <li><strong>Monthly Payments:</strong> Buyer makes payments to seller including principal and interest.</li>
      <li><strong>Balloon Payment:</strong> Often includes 5-10 year balloon requiring buyer to refinance or pay in full.</li>
      <li><strong>Title Transfer:</strong> Buyer receives deed at closing but seller holds lien until paid in full.</li>
    </ul>

    <h3>Benefits for Buyers</h3>
    <ul>
      <li><strong>Easier Qualification:</strong> No bank underwriting - credit issues, self-employment, or unique properties don't disqualify you.</li>
      <li><strong>Faster Closing:</strong> Close in days vs 30-45 days for bank financing - no appraisal contingencies.</li>
      <li><strong>Flexible Terms:</strong> Negotiate interest rate, down payment, and payment schedule directly with seller.</li>
      <li><strong>Lower Closing Costs:</strong> No bank fees, origination charges, or PMI - save $5,000-$15,000.</li>
      <li><strong>Purchase "Unmortgageable" Properties:</strong> Buy fixer-uppers, land, or properties banks won't finance.</li>
      <li><strong>Build Credit:</strong> On-time payments build creditworthiness for future refinancing.</li>
    </ul>

    <h3>Benefits for Sellers</h3>
    <ul>
      <li><strong>Higher Sales Price:</strong> Command 5-15% premium over market value due to financing convenience.</li>
      <li><strong>Higher Interest Income:</strong> Earn 6-12% interest vs 1-4% in savings/bonds - superior returns.</li>
      <li><strong>Tax Advantages:</strong> Spread capital gains over multiple years using installment sale method - lower tax brackets.</li>
      <li><strong>Faster Sale:</strong> Attract more buyers (80% of Americans can't qualify for traditional mortgages).</li>
      <li><strong>Steady Cash Flow:</strong> Monthly income stream for retirement or passive income.</li>
      <li><strong>Security:</strong> Property secures the loan - can foreclose and resell if buyer defaults.</li>
    </ul>

    <h3>Common Seller Financing Structures</h3>
    <ul>
      <li><strong>Full Seller Financing:</strong> Seller finances entire purchase price minus down payment (most common).</li>
      <li><strong>Partial Seller Financing (Second):</strong> Seller carries second mortgage while buyer gets primary bank loan.</li>
      <li><strong>Land Contract (Contract for Deed):</strong> Seller retains title until final payment - buyer gets equitable title only.</li>
      <li><strong>Lease-Option Hybrid:</strong> Combines lease-to-own with owner financing terms.</li>
      <li><strong>Wrap-Around Mortgage:</strong> Seller's existing mortgage stays in place, buyer makes payments to seller who pays original lender.</li>
    </ul>

    <h3>Typical Terms & Structures</h3>
    <ul>
      <li><strong>Down Payment:</strong> 10-30% of purchase price - higher down = lower seller risk.</li>
      <li><strong>Interest Rate:</strong> 6-12% - higher than banks but reflects higher risk and convenience premium.</li>
      <li><strong>Loan Term:</strong> 15-30 years amortization - spreads payments over long period.</li>
      <li><strong>Balloon Payment:</strong> 3-10 year balloon (most common 5 years) - buyer must refinance or pay off.</li>
      <li><strong>Payment Schedule:</strong> Monthly payments of principal and interest (some interest-only periods).</li>
    </ul>

    <h3>Risks & Protections for Sellers</h3>
    <ul>
      <li><strong>Default Risk:</strong> Buyer may stop paying - mitigate with larger down payment and credit check.</li>
      <li><strong>Foreclosure Process:</strong> Must legally foreclose (costs $5,000-$15,000, takes 3-12 months).</li>
      <li><strong>Property Maintenance:</strong> Buyer may not maintain property - require property insurance and inspections.</li>
      <li><strong>Due-on-Sale Clause:</strong> If seller has existing mortgage, bank can call loan when selling (use wrap carefully).</li>
      <li><strong>IRS Reporting:</strong> Must report interest income and follow installment sale rules for capital gains.</li>
    </ul>

    <h3>Protections for Sellers</h3>
    <ul>
      <li><strong>Larger Down Payment:</strong> 20-30% reduces default risk and gives seller equity cushion.</li>
      <li><strong>Credit & Background Check:</strong> Verify buyer's ability and willingness to pay.</li>
      <li><strong>Property Insurance Required:</strong> Buyer must maintain insurance naming seller as loss payee.</li>
      <li><strong>Personal Guarantee:</strong> In some cases, require buyer's personal guarantee beyond property collateral.</li>
      <li><strong>Prepayment Penalty:</strong> Some sellers charge 1-3% penalty for early payoff (negotiate).</li>
      <li><strong>Escrow for Taxes/Insurance:</strong> Include escrow in monthly payment to ensure property taxes and insurance are paid.</li>
    </ul>

    <h3>Tax Implications for Sellers</h3>
    <ul>
      <li><strong>Installment Sale Method:</strong> Report capital gains proportionally as payments received - spread tax over years.</li>
      <li><strong>Interest Income:</strong> Fully taxable as ordinary income at your tax rate.</li>
      <li><strong>Depreciation Recapture:</strong> If property was rental, recapture taxes apply to principal payments.</li>
      <li><strong>Minimum Interest Rules:</strong> IRS requires minimum interest rate (AFR - Applicable Federal Rate) to avoid gift tax issues.</li>
    </ul>

    <h3>When Seller Financing Makes Sense</h3>
    <ul>
      <li><strong>Slow Market:</strong> Property has been listed 6+ months with no offers - offering financing attracts buyers.</li>
      <li><strong>Unique Property:</strong> Properties banks won't finance (fixer-uppers, land, unconventional construction).</li>
      <li><strong>Motivated Seller:</strong> Seller needs income stream more than lump sum cash.</li>
      <li><strong>Tax Planning:</strong> High-income seller wants to defer capital gains over multiple years.</li>
      <li><strong>Strong Buyer-Seller Relationship:</strong> Family sales, longtime tenants, or known community members.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the purchase price, down payment, interest rate, loan term, and balloon payment period. The calculator shows monthly payment, total interest paid, balloon payment amount, and seller's total return to help both buyers and sellers evaluate the owner financing arrangement.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 70000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'balloonYears',
        label: 'Balloon Payment Due After (Years)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, balloonYears } = values;
      
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const balloonMonths = balloonYears * 12;
      let remainingBalance = loanAmount;
      let totalInterestPaid = 0;
      let totalPrincipalPaid = 0;
      
      for (let month = 1; month <= balloonMonths; month++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
        totalInterestPaid += interestPayment;
        totalPrincipalPaid += principalPayment;
      }
      
      const balloonPayment = remainingBalance;
      const totalPaidBeforeBalloon = monthlyPayment * balloonMonths;
      const totalSellerReceives = downPayment + totalPaidBeforeBalloon + balloonPayment;
      const sellerTotalInterest = downPayment + totalInterestPaid + (remainingBalance > 0 ? balloonPayment - (loanAmount - totalPrincipalPaid) : 0);
      const sellerROI = ((totalSellerReceives - purchasePrice) / purchasePrice) * 100;
      
      const annualPayments = monthlyPayment * 12;
      const downPaymentPercent = (downPayment / purchasePrice) * 100;

      return [
        { label: 'Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Down Payment Percentage', value: `${downPaymentPercent.toFixed(1)}%` },
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Annual Payments', value: annualPayments.toFixed(2), isCurrency: true },
        { label: `Total Paid in First ${balloonYears} Years`, value: totalPaidBeforeBalloon.toFixed(2), isCurrency: true },
        { label: `Principal Paid in First ${balloonYears} Years`, value: totalPrincipalPaid.toFixed(2), isCurrency: true },
        { label: `Interest Paid in First ${balloonYears} Years`, value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: `Balloon Payment (After ${balloonYears} Years)`, value: balloonPayment.toFixed(2), isCurrency: true },
        { label: 'Total Seller Receives', value: totalSellerReceives.toFixed(2), isCurrency: true },
        { label: 'Seller Profit Above Purchase Price', value: (totalSellerReceives - purchasePrice).toFixed(2), isCurrency: true },
        { label: 'Seller Return on Sale', value: `${sellerROI.toFixed(2)}%` },
      ];
    },
  },
};
