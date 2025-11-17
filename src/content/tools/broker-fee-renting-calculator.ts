import { CalculatorContent } from '@/types';

export const BROKER_FEE_RENTING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Broker Fee Calculator (Renting)',
  description: 'Calculate rental broker fees and compare costs across different fee structures to understand total move-in expenses',
  icon: 'Icon',
  category: 'Renter Tools',
  slug: 'broker-fee-renting-calculator',
  article: {
    title: "Understanding Rental Broker Fees - Complete Guide",
    content: `
    <h2>What Are Rental Broker Fees?</h2>
    <p>In some competitive rental markets (particularly NYC, Boston, and parts of California), landlords or tenants must pay a broker fee to the real estate agent who helped find the apartment. Understanding these fees helps you budget appropriately and negotiate effectively.</p>
    
    <h3>Broker Fee Structures</h3>
    <ul>
      <li><strong>Percentage of Annual Rent:</strong> Most common, typically 10-15% of first year's rent</li>
      <li><strong>One Month's Rent:</strong> Flat fee equal to one month of rent</li>
      <li><strong>Flat Fee:</strong> Set dollar amount regardless of rent</li>
      <li><strong>No Fee:</strong> Landlord pays the broker (highly desirable)</li>
    </ul>
    
    <h3>Broker Fees by Market</h3>
    <ul>
      <li><strong>New York City:</strong> 12-15% of annual rent (tenant typically pays)</li>
      <li><strong>Boston:</strong> One month's rent (tenant typically pays)</li>
      <li><strong>San Francisco:</strong> Less common, usually landlord pays</li>
      <li><strong>Los Angeles:</strong> Varies, often included in rent or paid by landlord</li>
      <li><strong>Chicago:</strong> Usually no broker fee for tenants</li>
      <li><strong>Most Other Markets:</strong> Landlord typically pays</li>
    </ul>
    
    <h3>Who Pays the Broker Fee?</h3>
    <p>This varies by market and negotiation:</p>
    <ul>
      <li><strong>Tenant Pays:</strong> Common in NYC, Boston (tight markets)</li>
      <li><strong>Landlord Pays:</strong> Common in most other markets</li>
      <li><strong>Split:</strong> Sometimes negotiated 50/50</li>
      <li><strong>Varies by Property:</strong> Luxury buildings often include it in marketing costs</li>
    </ul>
    
    <h3>When Broker Fees Are Negotiable</h3>
    <ul>
      <li>Off-season rental market (winter in most cities)</li>
      <li>Property has been vacant for a while</li>
      <li>You're signing a longer lease (2+ years)</li>
      <li>Multiple qualified applicants creates competition</li>
      <li>Direct relationship with landlord (can eliminate broker)</li>
      <li>You found the property yourself (broker did minimal work)</li>
    </ul>
    
    <h3>How to Avoid or Reduce Broker Fees</h3>
    <ul>
      <li><strong>No-Fee Listings:</strong> Search specifically for "no fee" apartments</li>
      <li><strong>Direct from Landlord:</strong> Contact property owners directly</li>
      <li><strong>Building Websites:</strong> Apply through apartment building websites</li>
      <li><strong>Negotiate:</strong> Ask landlord to pay or split the fee</li>
      <li><strong>Timing:</strong> Rent during slow season for better deals</li>
      <li><strong>Longer Lease:</strong> Offer to sign 18-24 month lease</li>
      <li><strong>FSBO:</strong> Look for "For Rent by Owner" listings</li>
    </ul>
    
    <h3>Understanding the Total Move-In Cost</h3>
    <p>With a broker fee, your total move-in costs typically include:</p>
    <ul>
      <li>First month's rent</li>
      <li>Last month's rent (common in high-fee markets)</li>
      <li>Security deposit (1-2 months' rent)</li>
      <li>Broker fee (10-15% of annual rent or one month's rent)</li>
      <li><strong>Total:</strong> Can be 3-5 months' rent upfront!</li>
    </ul>
    
    <h3>Broker Fee Payment Options</h3>
    <ul>
      <li><strong>Lump Sum:</strong> Pay entire fee at lease signing (most common)</li>
      <li><strong>Payment Plan:</strong> Some brokers offer installment options</li>
      <li><strong>Credit Card:</strong> May be accepted (but watch for processing fees)</li>
      <li><strong>Personal Check:</strong> Often required for large amounts</li>
    </ul>
    
    <h3>Red Flags with Broker Fees</h3>
    <ul>
      <li>Broker asking for fee before showing apartments</li>
      <li>Fee significantly higher than market rate (>15% annual rent)</li>
      <li>Unclear fee structure or hidden charges</li>
      <li>Broker not licensed in your state</li>
      <li>Pressure to pay before seeing lease agreement</li>
      <li>Cash-only payment requests</li>
    </ul>
    
    <h3>Tax Implications</h3>
    <p>Broker fees are generally NOT tax deductible for renters (unlike for homebuyers). However:</p>
    <ul>
      <li>If moving for work, may be deductible as moving expense (consult tax professional)</li>
      <li>Keep all receipts for potential deductions</li>
      <li>Business rentals may have different rules</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "feeType",
        label: "Broker Fee Type",
        type: "select",
        options: [{ value: "Percentage of Annual Rent", label: "Percentage of Annual Rent" }, { value: "One Month Rent", label: "One Month Rent" }, { value: "Flat Fee", label: "Flat Fee" }, { value: "No Fee", label: "No Fee" }],
        defaultValue: "Percentage of Annual Rent",
      },
      {
        name: "feePercentage",
        label: "Fee Percentage (if applicable)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "flatFeeAmount",
        label: "Flat Fee Amount (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "securityDeposit",
        label: "Security Deposit (months)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "lastMonthRequired",
        label: "Last Month Required?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "Yes",
      },
    ],
    results: [
      { label: "Broker Fee Amount", isCurrency: true },
      { label: "First Month Rent", isCurrency: true },
      { label: "Security Deposit", isCurrency: true },
      { label: "Last Month Rent", isCurrency: true },
      { label: "Total Move-In Cost", isCurrency: true },
      { label: "Broker Fee as % of Annual Rent", isCurrency: false },
      { label: "Months of Rent Upfront", isCurrency: false },
    ],
    calculate: (data: any) => {
      const monthlyRent = Number(data.monthlyRent) || 0;
      const feeType = data.feeType || "Percentage of Annual Rent";
      const feePercentage = Number(data.feePercentage) || 12;
      const flatFeeAmount = Number(data.flatFeeAmount) || 0;
      const securityDepositMonths = Number(data.securityDeposit) || 1;
      const lastMonthRequired = data.lastMonthRequired === "Yes";
      
      const annualRent = monthlyRent * 12;
      
      // Calculate broker fee
      let brokerFee = 0;
      if (feeType === "Percentage of Annual Rent") {
        brokerFee = annualRent * (feePercentage / 100);
      } else if (feeType === "One Month Rent") {
        brokerFee = monthlyRent;
      } else if (feeType === "Flat Fee") {
        brokerFee = flatFeeAmount;
      } else {
        brokerFee = 0;
      }
      
      // Calculate other costs
      const firstMonth = monthlyRent;
      const securityDeposit = monthlyRent * securityDepositMonths;
      const lastMonth = lastMonthRequired ? monthlyRent : 0;
      
      // Total move-in cost
      const totalMoveIn = brokerFee + firstMonth + securityDeposit + lastMonth;
      
      // Calculate broker fee as percentage of annual rent
      const brokerFeePercent = annualRent > 0 ? (brokerFee / annualRent) * 100 : 0;
      
      // Calculate months of rent equivalent
      const monthsEquivalent = monthlyRent > 0 ? totalMoveIn / monthlyRent : 0;

      return [
        { label: "Broker Fee Amount", value: `${brokerFee.toFixed(2)}`, isCurrency: true },
        { label: "First Month Rent", value: `${firstMonth.toFixed(2)}`, isCurrency: true },
        { label: "Security Deposit", value: `${securityDeposit.toFixed(2)}`, isCurrency: true },
        { label: "Last Month Rent", value: `${lastMonth.toFixed(2)}`, isCurrency: true },
        { label: "Total Move-In Cost", value: `${totalMoveIn.toFixed(2)}`, isCurrency: true },
        { label: "Broker Fee as % of Annual Rent", value: `${brokerFeePercent.toFixed(1)}%`, isCurrency: false },
        { label: "Months of Rent Upfront", value: `${monthsEquivalent.toFixed(1)} months`, isCurrency: false },
      ];
    },
  },
};
