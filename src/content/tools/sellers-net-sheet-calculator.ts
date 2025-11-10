import { CalculatorContent } from '@/types';

export const SELLERS_NET_SHEET_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Seller's Net Sheet Calculator",
  description: "Generate a comprehensive breakdown of all costs associated with selling your property and your estimated net proceeds.",
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'sellers-net-sheet-calculator',
  article: {
    title: "Understanding Your Seller's Net Sheet",
    content: `
      <h2>What is a Seller's Net Sheet?</h2>
      <p>
        A Seller's Net Sheet is a detailed financial statement that outlines all the costs associated with selling a property and calculates the net proceeds the seller will receive. This essential document helps sellers understand exactly how much money they'll walk away with after the sale closes.
      </p>
      <h3>Components of a Seller's Net Sheet</h3>
      <ul>
        <li><strong>Gross Sale Price:</strong> The total amount the buyer agrees to pay for your property.</li>
        <li><strong>Agent Commission:</strong> Typically 5-6% of the sale price, covering both listing and buyer's agent fees.</li>
        <li><strong>Title Insurance:</strong> Protects the buyer and lender from title defects, usually paid by the seller.</li>
        <li><strong>Escrow Fees:</strong> Costs for the neutral third party managing the transaction.</li>
        <li><strong>Transfer Tax:</strong> State and local taxes on the property transfer.</li>
        <li><strong>Property Taxes:</strong> Prorated taxes up to the closing date.</li>
        <li><strong>HOA Fees:</strong> Any outstanding homeowners association dues.</li>
        <li><strong>Loan Payoff:</strong> Remaining mortgage balance plus any prepayment penalties.</li>
        <li><strong>Home Warranty:</strong> Optional warranty coverage for the buyer.</li>
        <li><strong>Repairs/Credits:</strong> Negotiated repair costs or credits to the buyer.</li>
      </ul>
      <h3>Why Use a Net Sheet Calculator?</h3>
      <p>
        Understanding your net proceeds before listing helps you price your home appropriately, negotiate effectively, and plan your next move. It prevents surprises at closing and ensures you have realistic expectations about your financial outcome.
      </p>
      <h3>How to Read Your Net Sheet</h3>
      <p>
        The net sheet starts with your gross sale price and systematically deducts each cost category. The final number represents your actual take-home amount. Review this carefully with your agent to ensure all applicable costs are included.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "salePrice",
        label: "Sale Price",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "agentCommission",
        label: "Agent Commission (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "titleInsurance",
        label: "Title Insurance",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "escrowFees",
        label: "Escrow Fees",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "transferTax",
        label: "Transfer Tax (%)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "propertyTax",
        label: "Prorated Property Tax",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "hoaFees",
        label: "Outstanding HOA Fees",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "mortgagePayoff",
        label: "Mortgage Payoff",
        type: "number",
        placeholder: "280000",
        defaultValue: "280000",
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
        placeholder: "3000",
        defaultValue: "3000",
      },
    ],
    results: [
      { label: "Gross Sale Price", isCurrency: true },
      { label: "Total Agent Commission", isCurrency: true },
      { label: "Total Transfer Tax", isCurrency: true },
      { label: "Total Closing Costs", isCurrency: true },
      { label: "Total Deductions", isCurrency: true },
      { label: "Net Proceeds to Seller", isCurrency: true },
    ],
    calculate: (data: any) => {
      const salePrice = Number(data.salePrice) || 0;
      const agentCommissionRate = Number(data.agentCommission) || 0;
      const titleInsurance = Number(data.titleInsurance) || 0;
      const escrowFees = Number(data.escrowFees) || 0;
      const transferTaxRate = Number(data.transferTax) || 0;
      const propertyTax = Number(data.propertyTax) || 0;
      const hoaFees = Number(data.hoaFees) || 0;
      const mortgagePayoff = Number(data.mortgagePayoff) || 0;
      const homeWarranty = Number(data.homeWarranty) || 0;
      const repairsCredits = Number(data.repairsCredits) || 0;

      if (salePrice <= 0) {
        return [
          { label: "Net Proceeds to Seller", value: "Please enter a valid sale price.", type: "string" },
        ];
      }

      const commission = salePrice * (agentCommissionRate / 100);
      const transferTax = salePrice * (transferTaxRate / 100);
      const closingCosts = titleInsurance + escrowFees + propertyTax + hoaFees + homeWarranty + repairsCredits;
      const totalDeductions = commission + transferTax + closingCosts + mortgagePayoff;
      const netProceeds = salePrice - totalDeductions;

      return [
        { label: "Gross Sale Price", value: salePrice, type: "currency" },
        { label: "Total Agent Commission", value: commission, type: "currency" },
        { label: "Total Transfer Tax", value: transferTax, type: "currency" },
        { label: "Total Closing Costs", value: closingCosts, type: "currency" },
        { label: "Total Deductions", value: totalDeductions, type: "currency" },
        { label: "Net Proceeds to Seller", value: netProceeds, type: "currency" },
      ];
    },
  },
};
