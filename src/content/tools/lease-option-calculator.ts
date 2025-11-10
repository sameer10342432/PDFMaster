import { CalculatorContent } from '@/types';

export const LEASE_OPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Lease-Option Calculator - Rent-to-Own Analysis for Buyers & Sellers',
  description: 'Calculate lease-option (rent-to-own) deals including option fees, rent credits, purchase price, and cash flow',
  icon: 'Icon',
  slug: 'lease-option-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'Complete Guide to Lease-Option (Rent-to-Own) Real Estate Investing',
    content: `
    <h2>What is a Lease-Option (Rent-to-Own)?</h2>
    <p>A Lease-Option combines a rental lease with an option to purchase the property at a predetermined price within a specific timeframe. The tenant-buyer pays an upfront option fee, higher monthly rent (with a portion credited toward purchase), and has the right (but not obligation) to buy the property. This benefits buyers who need time to qualify for a mortgage and sellers/investors seeking premium rents and multiple profit centers.</p>

    <h3>How Lease-Options Work</h3>
    <ul>
      <li><strong>Option Fee:</strong> Upfront payment (3-7% of purchase price) gives buyer exclusive right to purchase - non-refundable if they don't buy.</li>
      <li><strong>Lease Agreement:</strong> Standard rental lease (typically 1-3 years) with terms, monthly rent, responsibilities.</li>
      <li><strong>Option Agreement:</strong> Contract granting right to purchase at specified price before expiration date.</li>
      <li><strong>Purchase Price:</strong> Predetermined at start (current value, future value, or negotiated price).</li>
      <li><strong>Rent Credits:</strong> Portion of monthly rent (typically 20-30%) credited toward down payment if buyer exercises option.</li>
      <li><strong>Maintenance:</strong> Tenant usually handles minor maintenance, landlord handles major repairs and capital improvements.</li>
    </ul>

    <h3>Benefits for Tenant-Buyers</h3>
    <ul>
      <li><strong>Lock in Purchase Price:</strong> Protect against rising market - price fixed regardless of appreciation.</li>
      <li><strong>Time to Improve Credit:</strong> 1-3 years to fix credit, pay down debt, save for down payment.</li>
      <li><strong>Build Equity While Renting:</strong> Rent credits accumulate toward down payment - forced savings program.</li>
      <li><strong>Test the Home:</strong> Live in property before committing to purchase - ensure it meets needs.</li>
      <li><strong>Easier Qualification:</strong> No immediate mortgage required - time to increase income, reduce debt-to-income ratio.</li>
      <li><strong>First Refusal:</strong> Exclusive right to buy - seller can't sell to anyone else during option period.</li>
    </ul>

    <h3>Benefits for Sellers/Investors</h3>
    <ul>
      <li><strong>Option Fee Income:</strong> $10,000-$30,000 upfront (non-refundable if buyer doesn't purchase) - immediate profit.</li>
      <li><strong>Premium Rent:</strong> Charge 10-30% above market rent - tenant-buyers pay more to secure credits.</li>
      <li><strong>Better Tenant Quality:</strong> Tenant-buyers treat property like their own - better maintenance, lower turnover.</li>
      <li><strong>Multiple Exit Strategies:</strong> Sell to tenant, keep as rental if they don't buy, sell to new buyer.</li>
      <li><strong>Future Appreciation:</strong> If property appreciates beyond locked price, seller still gets predetermined amount.</li>
      <li><strong>Tax Benefits:</strong> Option fee not taxable until option exercised or expires (consult tax professional).</li>
    </ul>

    <h3>Lease-Option Deal Structure</h3>
    <ul>
      <li><strong>Option Fee:</strong> Typically 3-7% of purchase price ($9,000-$21,000 on $300,000 home).</li>
      <li><strong>Purchase Price:</strong> Set at current value + appreciation (2-5% annually), or current value if market soft.</li>
      <li><strong>Monthly Rent:</strong> 10-30% above market rent ($1,800 vs $1,500 market rent).</li>
      <li><strong>Rent Credits:</strong> 20-30% of monthly rent credited toward purchase ($360-$540 per month on $1,800 rent).</li>
      <li><strong>Option Period:</strong> 1-3 years typical - longer for buyers with worse credit.</li>
      <li><strong>Maintenance Responsibilities:</strong> Tenant handles repairs under $200-500, landlord handles major items.</li>
    </ul>

    <h3>Seller/Investor Profit Centers</h3>
    <ul>
      <li><strong>Upfront Option Fee:</strong> $10,000-$30,000 immediate profit (non-refundable).</li>
      <li><strong>Monthly Cash Flow:</strong> Premium rent minus mortgage/expenses = positive cash flow.</li>
      <li><strong>Backend Profit:</strong> Sale profit when tenant exercises option and purchases property.</li>
      <li><strong>Appreciation:</strong> If property appreciates beyond locked price, capture additional equity.</li>
      <li><strong>Retained Option Fee:</strong> If tenant doesn't buy (30-50% don't), keep option fee and re-lease with new option.</li>
    </ul>

    <h3>Risks for Tenant-Buyers</h3>
    <ul>
      <li><strong>Lose Option Fee:</strong> If you don't exercise option, forfeit entire option fee ($10,000-$30,000).</li>
      <li><strong>Lose Rent Credits:</strong> Accumulated rent credits only apply if you purchase - lost if you don't buy.</li>
      <li><strong>Locked into High Price:</strong> If market drops, you're stuck with above-market purchase price.</li>
      <li><strong>Seller Could Default:</strong> If seller doesn't pay mortgage, property could be foreclosed on.</li>
      <li><strong>Maintenance Costs:</strong> May be responsible for more repairs than typical rental.</li>
      <li><strong>Still Need to Qualify:</strong> Must obtain financing when option period ends - not guaranteed.</li>
    </ul>

    <h3>Risks for Sellers/Investors</h3>
    <ul>
      <li><strong>Property Tied Up:</strong> Can't sell to anyone else during option period - opportunity cost if market surges.</li>
      <li><strong>Tenant Doesn't Buy:</strong> 30-50% of lease-option deals don't close - must find new tenant/buyer.</li>
      <li><strong>Tenant Damage:</strong> If tenant doesn't buy, may leave property damaged thinking they were buying.</li>
      <li><strong>Appreciation Loss:</strong> Miss out on appreciation above locked price if market appreciates rapidly.</li>
      <li><strong>Rent Credit Liability:</strong> Must track and honor rent credits - accounting complexity.</li>
    </ul>

    <h3>Lease-Option vs Traditional Rental</h3>
    <ul>
      <li><strong>Rental Income:</strong> Lease-option earns 10-30% more monthly ($300-500 extra on $1,500 base rent).</li>
      <li><strong>Tenant Quality:</strong> Lease-option tenants have ownership mentality - better care, lower turnover.</li>
      <li><strong>Upfront Income:</strong> Option fee provides $10,000-$30,000 immediate cash vs first month + deposit ($3,000-$4,500).</li>
      <li><strong>Exit Strategy:</strong> Potential to sell for profit vs indefinite landlording.</li>
      <li><strong>Tax Treatment:</strong> Different tax implications - consult CPA for your situation.</li>
    </ul>

    <h3>Sandwich Lease-Option Strategy</h3>
    <ul>
      <li><strong>Concept:</strong> Lease property from seller with option to buy, then sublease to tenant-buyer with option to sell.</li>
      <li><strong>Your Position:</strong> Middle person controlling property without owning it.</li>
      <li><strong>Profit Sources:</strong> Option fee spread, monthly rent spread, backend profit on sale.</li>
      <li><strong>Example:</strong> Lease from seller at $1,200/month with $250,000 purchase option. Sublease to tenant-buyer at $1,800/month with $285,000 purchase option. Collect $5,000 option fee from tenant-buyer, earn $600/month rent spread, make $35,000 profit on backend when they buy.</li>
      <li><strong>Risk:</strong> If tenant-buyer doesn't purchase, you're still obligated to pay seller or exercise your option.</li>
    </ul>

    <h3>Legal & Documentation</h3>
    <ul>
      <li><strong>Lease Agreement:</strong> Standard residential lease outlining rent, term, responsibilities.</li>
      <li><strong>Option Agreement:</strong> Separate contract granting exclusive right to purchase - includes price, expiration, terms.</li>
      <li><strong>Rent Credit Schedule:</strong> Document tracking monthly credits toward purchase price.</li>
      <li><strong>Disclosure Requirements:</strong> Full disclosure of terms, especially if you're wholesaling/sandwiching.</li>
      <li><strong>State Regulations:</strong> Some states treat lease-options as sales for legal purposes - consult attorney.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the property value, option fee, monthly rent, rent credit percentage, option period, seller's mortgage payment (if applicable), and other expenses. The calculator shows total tenant payments, accumulated rent credits, seller profits, cash flow, and overall ROI to help both parties evaluate the lease-option arrangement.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Current Property Value / Future Purchase Price ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'optionFee',
        label: 'Upfront Option Fee ($)',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'monthlyRent',
        label: 'Monthly Rent ($)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'rentCreditPercent',
        label: 'Rent Credit Percentage (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'optionPeriod',
        label: 'Option Period (Months)',
        type: 'number',
        defaultValue: 24,
      },
      {
        name: 'mortgagePayment',
        label: 'Monthly Mortgage Payment (if applicable) ($)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Expenses (Taxes, Insurance, Maintenance) ($)',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'marketRent',
        label: 'Market Rent (for comparison) ($)',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [],
    calculate: (values) => {
      const { propertyValue, optionFee, monthlyRent, rentCreditPercent, optionPeriod, mortgagePayment, monthlyExpenses, marketRent } = values;
      
      const monthlyRentCredit = monthlyRent * (rentCreditPercent / 100);
      const totalRentPaid = monthlyRent * optionPeriod;
      const totalRentCredits = monthlyRentCredit * optionPeriod;
      const totalTenantPayment = optionFee + totalRentPaid;
      
      const effectiveDownPayment = optionFee + totalRentCredits;
      const loanAmountNeeded = propertyValue - effectiveDownPayment;
      const downPaymentPercent = (effectiveDownPayment / propertyValue) * 100;
      
      const monthlyProfit = monthlyRent - mortgagePayment - monthlyExpenses;
      const totalCashFlow = monthlyProfit * optionPeriod;
      const totalSellerIncome = optionFee + totalCashFlow;
      
      const rentPremium = monthlyRent - marketRent;
      const totalRentPremium = rentPremium * optionPeriod;
      
      const cashOnCash = mortgagePayment > 0 ? ((totalCashFlow / optionFee) * 100) / (optionPeriod / 12) : 0;

      return [
        { label: 'Upfront Option Fee', value: optionFee.toFixed(2), isCurrency: true },
        { label: 'Monthly Rent', value: monthlyRent.toFixed(2), isCurrency: true },
        { label: 'Monthly Rent Credit', value: monthlyRentCredit.toFixed(2), isCurrency: true },
        { label: `Total Rent Paid (${optionPeriod} months)`, value: totalRentPaid.toFixed(2), isCurrency: true },
        { label: `Total Rent Credits Accumulated`, value: totalRentCredits.toFixed(2), isCurrency: true },
        { label: 'Total Tenant Investment', value: totalTenantPayment.toFixed(2), isCurrency: true },
        { label: 'Effective Down Payment (Fee + Credits)', value: effectiveDownPayment.toFixed(2), isCurrency: true },
        { label: 'Down Payment Percentage', value: `${downPaymentPercent.toFixed(2)}%` },
        { label: 'Loan Amount Needed at Purchase', value: loanAmountNeeded.toFixed(2), isCurrency: true },
        { label: 'Rent Premium Over Market', value: rentPremium.toFixed(2), isCurrency: true },
        { label: `Total Rent Premium Earned`, value: totalRentPremium.toFixed(2), isCurrency: true },
        { label: 'Monthly Seller Cash Flow', value: monthlyProfit.toFixed(2), isCurrency: true },
        { label: `Total Seller Cash Flow`, value: totalCashFlow.toFixed(2), isCurrency: true },
        { label: 'Total Seller Income (Fee + Cash Flow)', value: totalSellerIncome.toFixed(2), isCurrency: true },
      ];
    },
  },
};
