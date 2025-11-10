import { CalculatorContent } from '@/types';

export const NET_PROCEEDS_FROM_HOME_SALE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Proceeds from Home Sale Calculator',
  description: 'Calculate your net proceeds from selling your home after all costs, commissions, and fees.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'net-proceeds-from-home-sale-calculator',
  article: {
    title: "Understanding Your Net Proceeds from a Home Sale",
    content: `
      <h2>Understanding Your Net Proceeds from a Home Sale</h2>
      <p>
        When selling your home, it's crucial to understand how much money you'll actually walk away with after all costs are deducted. The net proceeds calculator helps you estimate your final payout by accounting for all selling expenses, including real estate commissions, closing costs, mortgage payoff, and other fees.
      </p>
      <h3>Key Components of Home Sale Net Proceeds</h3>
      <ul>
        <li><strong>Sale Price:</strong> The agreed-upon selling price of your home.</li>
        <li><strong>Real Estate Commission:</strong> Typically 5-6% of the sale price, split between buyer's and seller's agents.</li>
        <li><strong>Mortgage Payoff:</strong> The remaining balance on your home loan that must be paid at closing.</li>
        <li><strong>Closing Costs:</strong> Seller's closing costs typically range from 1-3% of the sale price and include title insurance, escrow fees, and transfer taxes.</li>
        <li><strong>Home Improvements:</strong> Recent repairs or improvements made to prepare the home for sale.</li>
        <li><strong>Other Fees:</strong> May include HOA fees, prorated property taxes, or home warranty costs.</li>
      </ul>
      <h3>How to Calculate Net Proceeds</h3>
      <p>
        <strong>Formula:</strong> Net Proceeds = Sale Price - Commission - Mortgage Payoff - Closing Costs - Home Improvements - Other Fees
      </p>
      <h3>Maximizing Your Net Proceeds</h3>
      <p>
        To maximize your net proceeds, consider negotiating commission rates, timing your sale to minimize capital gains taxes, and making strategic home improvements that offer the highest ROI. Understanding these costs upfront helps you set realistic expectations and make informed decisions about your home sale.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "salePrice",
        label: "Home Sale Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "commissionRate",
        label: "Commission Rate (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "mortgageBalance",
        label: "Remaining Mortgage Balance",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "closingCosts",
        label: "Estimated Closing Costs",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "homeImprovements",
        label: "Recent Home Improvements Cost",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "otherFees",
        label: "Other Fees",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "Total Commission", isCurrency: true },
      { label: "Total Costs and Fees", isCurrency: true },
      { label: "Net Proceeds", isCurrency: true },
      { label: "Return on Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const salePrice = Number(data.salePrice) || 0;
      const commissionRate = Number(data.commissionRate) || 0;
      const mortgageBalance = Number(data.mortgageBalance) || 0;
      const closingCosts = Number(data.closingCosts) || 0;
      const homeImprovements = Number(data.homeImprovements) || 0;
      const otherFees = Number(data.otherFees) || 0;

      if (salePrice <= 0) {
        return [
          { label: "Net Proceeds", value: "Please enter a valid sale price.", type: "string" },
        ];
      }

      const commission = salePrice * (commissionRate / 100);
      const totalCosts = commission + closingCosts + homeImprovements + otherFees;
      const netProceeds = salePrice - commission - mortgageBalance - closingCosts - homeImprovements - otherFees;
      const totalInvestment = mortgageBalance + homeImprovements;
      const roi = totalInvestment > 0 ? ((netProceeds + mortgageBalance - homeImprovements) / totalInvestment) * 100 : 0;

      return [
        { label: "Total Commission", value: commission, type: "currency" },
        { label: "Total Costs and Fees", value: totalCosts, type: "currency" },
        { label: "Net Proceeds", value: netProceeds, type: "currency" },
        { label: "Return on Investment", value: roi, type: "percentage" },
      ];
    },
  },
};
