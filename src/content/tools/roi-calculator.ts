
import { Calculator, CalculatorContent } from '@/components/calculators/Calculator';

const ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Return on Investment (ROI) Calculator',
  description: 'Calculate the ROI of your real estate investment.',
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: '300000',
      },
      {
        name: 'closingCosts',
        label: 'Closing Costs',
        type: 'number',
        defaultValue: '9000',
      },
      {
        name: 'rehabCosts',
        label: 'Rehab Costs',
        type: 'number',
        defaultValue: '20000',
      },
      {
        name: 'salePrice',
        label: 'Sale Price',
        type: 'number',
        defaultValue: '400000',
      },
      {
        name: 'holdingCosts',
        label: 'Holding Costs',
        type: 'number',
        defaultValue: '5000',
      },
    ],
    calculate: (values) => {
      const totalInvestment = values.purchasePrice + values.closingCosts + values.rehabCosts + values.holdingCosts;
      const netProfit = values.salePrice - totalInvestment;
      const roi = (netProfit / totalInvestment) * 100;

      return [
        {
          label: 'Total Investment',
          value: `$${totalInvestment.toFixed(2)}`,
        },
        {
          label: 'Net Profit',
          value: `$${netProfit.toFixed(2)}`,
        },
        {
          label: 'Return on Investment (ROI)',
          value: `${roi.toFixed(2)}%`,
        },
      ];
    },
  },
  article: `
  <h2>Understanding Return on Investment (ROI) in Real Estate</h2>
  <p>
    Return on Investment (ROI) is a fundamental metric for evaluating the profitability of a real estate investment. It measures the gain or loss generated on an investment relative to the amount of money invested. A higher ROI indicates a more profitable investment.
  </p>
  <h3>Key Components of ROI Calculation</h3>
  <ul>
    <li><strong>Purchase Price:</strong> The initial cost of acquiring the property.</li>
    <li><strong>Closing Costs:</strong> Fees associated with the purchase, such as legal fees, title insurance, and appraisal fees.</li>
    <li><strong>Rehab Costs:</strong> The cost of any renovations or repairs needed to improve the property.</li>
    <li><strong>Sale Price:</strong> The price at which the property is sold.</li>
    <li><strong>Holding Costs:</strong> Expenses incurred while owning the property, such as property taxes, insurance, and utilities.</li>
  </ul>
  <h3>How to Interpret ROI</h3>
  <p>
    A positive ROI means the investment has generated a profit, while a negative ROI indicates a loss. When comparing different investment opportunities, the one with the higher ROI is generally the more attractive option. However, it's important to also consider other factors such as risk, holding period, and market conditions.
  </p>
`,
};

export { ROI_CALCULATOR_CONTENT };