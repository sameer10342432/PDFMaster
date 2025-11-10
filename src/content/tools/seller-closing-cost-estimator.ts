import { CalculatorContent } from '@/types';

export const SELLER_CLOSING_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Seller Closing Cost Estimator',
  description: 'Estimate all closing costs you\'ll pay as a seller, including agent commissions, title fees, and transfer taxes.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'seller-closing-cost-estimator',
  article: {
    title: "Understanding Seller Closing Costs",
    content: `
      <h2>What Are Seller Closing Costs?</h2>
      <p>
        Seller closing costs are the fees and expenses you pay when selling your home, typically ranging from 6-10% of the sale price. Understanding these costs helps you set realistic expectations about your net proceeds from the sale.
      </p>
      <h3>Typical Seller Closing Costs Breakdown</h3>
      <h4>1. Real Estate Agent Commission (5-6% of sale price)</h4>
      <p>
        This is typically the largest seller expense, covering both the listing agent and buyer's agent fees. Standard commission is 5-6% total, split between both agents. This is negotiable and can vary by market and property price.
      </p>
      <h4>2. Title and Escrow Fees (1-2% of sale price)</h4>
      <ul>
        <li><strong>Title Insurance:</strong> $1,000-$4,000 to protect buyer from title defects</li>
        <li><strong>Title Search:</strong> $200-$400 to verify clear ownership</li>
        <li><strong>Escrow Fees:</strong> $500-$2,000 for neutral third-party transaction management</li>
        <li><strong>Settlement/Closing Fees:</strong> $300-$500 for processing paperwork</li>
      </ul>
      <h4>3. Transfer Taxes (0.5-2% of sale price, varies by location)</h4>
      <p>
        State, county, and city taxes on property ownership transfer. Rates vary significantly:
      </p>
      <ul>
        <li>California: $1.10 per $1,000 (0.11%)</li>
        <li>New York: 0.4-2.075% depending on location and price</li>
        <li>Florida: $0.70 per $100 (0.70%)</li>
        <li>Texas: No state transfer tax</li>
        <li>Pennsylvania: 1-2% combined state and local</li>
      </ul>
      <h4>4. Prorated Property Taxes</h4>
      <p>
        You'll pay property taxes up to the closing date. If you've pre-paid annual taxes, you'll receive a credit for the buyer's portion. If taxes are due, you'll pay your prorated share at closing.
      </p>
      <h4>5. HOA Fees and Assessments</h4>
      <p>
        Outstanding HOA dues, transfer fees ($100-$500), and any special assessments must be paid or credited to buyer at closing.
      </p>
      <h4>6. Outstanding Liens and Judgments</h4>
      <p>
        Any liens, second mortgages, or judgments against the property must be cleared before sale. This includes contractor liens, tax liens, or court judgments.
      </p>
      <h4>7. Attorney Fees (if applicable)</h4>
      <p>
        Real estate attorneys charge $500-$1,500 for document review and closing representation in some states (required in NY, NJ, MA, and others).
      </p>
      <h4>8. Home Warranty (optional, $300-$600)</h4>
      <p>
        Sellers sometimes offer 1-year home warranty to buyer as sales incentive, covering major systems and appliances.
      </p>
      <h4>9. Repairs and Credits</h4>
      <p>
        Negotiated repairs or credits to buyer based on inspection findings, typically $1,000-$5,000 but can be higher for significant issues.
      </p>
      <h4>10. Miscellaneous Costs</h4>
      <ul>
        <li>Overnight courier fees: $50-$100</li>
        <li>Recording fees: $50-$250</li>
        <li>HOA document fees: $200-$400</li>
        <li>Survey (if required): $300-$600</li>
      </ul>
      <h3>Costs That Vary by State</h3>
      <p>
        Who pays what varies by state custom. In some markets, sellers pay title insurance; in others, buyers do. Check local customs with your agent to estimate accurate costs for your area.
      </p>
      <h3>How to Reduce Closing Costs</h3>
      <ul>
        <li>Negotiate commission rates with your agent (especially for higher-priced homes)</li>
        <li>Shop around for title and escrow services</li>
        <li>Sell during tax-favorable times to minimize prorated taxes</li>
        <li>Address minor repairs before listing to avoid inspection credits</li>
        <li>Ask buyer to cover some costs in negotiations</li>
        <li>Use a flat-fee MLS service if selling FSBO</li>
      </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: "salePrice",
        label: "Home Sale Price",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "agentCommissionRate",
        label: "Agent Commission Rate (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "titleInsurance",
        label: "Title Insurance",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "titleSearch",
        label: "Title Search Fee",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "escrowFees",
        label: "Escrow/Settlement Fees",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "transferTaxRate",
        label: "Transfer Tax Rate (%)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "propertyTax",
        label: "Prorated Property Tax",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "hoaFees",
        label: "HOA Transfer/Outstanding Fees",
        type: "number",
        placeholder: "350",
        defaultValue: "350",
      },
      {
        name: "attorneyFees",
        label: "Attorney Fees (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "homeWarranty",
        label: "Home Warranty",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "repairsCredits",
        label: "Repairs/Credits to Buyer",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "miscFees",
        label: "Miscellaneous Fees",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
    ],
    results: [
      { label: "Total Agent Commission", isCurrency: true },
      { label: "Total Title/Escrow Fees", isCurrency: true },
      { label: "Transfer Tax", isCurrency: true },
      { label: "Other Closing Costs", isCurrency: true },
      { label: "Total Seller Closing Costs", isCurrency: true },
      { label: "Closing Costs as % of Sale Price", isPercentage: true },
      { label: "Estimated Net Proceeds", isCurrency: true },
    ],
    calculate: (data: any) => {
      const salePrice = Number(data.salePrice) || 0;
      const agentCommissionRate = Number(data.agentCommissionRate) || 0;
      const titleInsurance = Number(data.titleInsurance) || 0;
      const titleSearch = Number(data.titleSearch) || 0;
      const escrowFees = Number(data.escrowFees) || 0;
      const transferTaxRate = Number(data.transferTaxRate) || 0;
      const propertyTax = Number(data.propertyTax) || 0;
      const hoaFees = Number(data.hoaFees) || 0;
      const attorneyFees = Number(data.attorneyFees) || 0;
      const homeWarranty = Number(data.homeWarranty) || 0;
      const repairsCredits = Number(data.repairsCredits) || 0;
      const miscFees = Number(data.miscFees) || 0;

      if (salePrice <= 0) {
        return [
          { label: "Total Seller Closing Costs", value: "Please enter a valid sale price.", type: "string" },
        ];
      }

      const commission = salePrice * (agentCommissionRate / 100);
      const titleEscrowFees = titleInsurance + titleSearch + escrowFees;
      const transferTax = salePrice * (transferTaxRate / 100);
      const otherCosts = propertyTax + hoaFees + attorneyFees + homeWarranty + repairsCredits + miscFees;
      const totalClosingCosts = commission + titleEscrowFees + transferTax + otherCosts;
      const closingCostPercentage = (totalClosingCosts / salePrice) * 100;
      const netProceeds = salePrice - totalClosingCosts;

      return [
        { label: "Total Agent Commission", value: commission, type: "currency" },
        { label: "Total Title/Escrow Fees", value: titleEscrowFees, type: "currency" },
        { label: "Transfer Tax", value: transferTax, type: "currency" },
        { label: "Other Closing Costs", value: otherCosts, type: "currency" },
        { label: "Total Seller Closing Costs", value: totalClosingCosts, type: "currency" },
        { label: "Closing Costs as % of Sale Price", value: closingCostPercentage, type: "percentage" },
        { label: "Estimated Net Proceeds", value: netProceeds, type: "currency" },
      ];
    },
  },
};
