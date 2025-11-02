import { CalculatorContent } from "@/types";

export const exchange1031Calculator: CalculatorContent = {
  title: "1031 Exchange Calculator",
  description: "Determine the tax-deferred gain from a 1031 exchange.",
  category: "Real Estate",
  slug: "1031-exchange-calculator",
  article: {
    title: "1031 Exchange Calculator",
    content: `
    ## What is a 1031 Exchange?

    A 1031 exchange, also known as a like-kind exchange, is a transaction under United States tax law that allows an investor to defer paying capital gains taxes on the sale of an investment property by reinvesting the proceeds into a new, similar property. This can be a powerful tool for real estate investors looking to grow their portfolios.

    ### Key Rules for a 1031 Exchange

    - **Like-Kind Property:** The replacement property must be of a similar nature or character as the relinquished property. For real estate, this is a broad definition, allowing for exchanges of different types of investment properties (e.g., an apartment building for a piece of land).
    - **Timeline:** The investor has 45 days from the sale of the relinquished property to identify potential replacement properties and 180 days to close on the new property.
    - **Reinvestment Requirement:** To fully defer capital gains taxes, the investor must reinvest the entire net proceeds from the sale of the old property into the new property. Any cash received (known as "boot") is taxable.

    ### How This Calculator Works

    This calculator helps you estimate the potential tax benefits of a 1031 exchange by calculating:

    - **Realized Gain:** The total profit from the sale of the property.
    - **Recognized Gain:** The portion of the gain that is taxable (typically any cash boot received).
    - **Deferred Gain:** The amount of the gain on which taxes are deferred.
    - **Estimated Tax Savings:** The amount of capital gains tax you would save by performing the exchange.
    - **Required Reinvestment:** The amount you need to reinvest to fully defer taxes.
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Sale Price of Relinquished Property',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'adjustedBasis',
        label: 'Adjusted Basis of Relinquished Property',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price of Replacement Property',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'cashBoot',
        label: 'Cash Boot Received',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'capitalGainsRate',
        label: 'Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 20,
      },
    ],
    calculate: (values) => {
      const { salePrice, adjustedBasis, purchasePrice, cashBoot, capitalGainsRate } = values;
      const realizedGain = salePrice - adjustedBasis;
      const recognizedGain = Math.max(0, cashBoot);
      const deferredGain = realizedGain - recognizedGain;
      const estimatedTaxSavings = deferredGain * (capitalGainsRate / 100);
      const requiredReinvestment = salePrice - cashBoot;

      return [
        { label: 'Realized Gain', value: realizedGain.toFixed(2), isCurrency: true },
        { label: 'Recognized Gain (Taxable)', value: recognizedGain.toFixed(2), isCurrency: true },
        { label: 'Deferred Gain', value: deferredGain.toFixed(2), isCurrency: true },
        { label: 'Estimated Tax Savings', value: estimatedTaxSavings.toFixed(2), isCurrency: true },
        { label: 'Required Reinvestment for Full Deferral', value: requiredReinvestment.toFixed(2), isCurrency: true },
      ];
    },
  },
};