
import { CalculatorContent } from '@/types';

const CLOSING_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Closing Cost Calculator',
  description: 'Estimate the closing costs for a real estate transaction.',
  icon: 'Icon',
  slug: 'closing-cost-calculator',
  category: 'Real Estate',
  calculator: {
    results: [],
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: '300000',
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: '240000',
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: '3.5',
      },
    ],
    calculate: (values) => {
      const loanOriginationFee = values.loanAmount * 0.01; // 1% of loan amount
      const appraisalFee = 500;
      const titleInsurance = values.purchasePrice * 0.005; // 0.5% of purchase price
      const inspectionFee = 400;
      const recordingFee = 150;
      const attorneyFee = 1000;

      const totalClosingCosts = loanOriginationFee + appraisalFee + titleInsurance + inspectionFee + recordingFee + attorneyFee;

      return [
        {
          label: 'Estimated Loan Origination Fee',
          value: `$${loanOriginationFee.toFixed(2)}`,
        },
        {
          label: 'Estimated Appraisal Fee',
          value: `$${appraisalFee.toFixed(2)}`,
        },
        {
          label: 'Estimated Title Insurance',
          value: `$${titleInsurance.toFixed(2)}`,
        },
        {
          label: 'Estimated Inspection Fee',
          value: `$${inspectionFee.toFixed(2)}`,
        },
        {
          label: 'Estimated Recording Fee',
          value: `$${recordingFee.toFixed(2)}`,
        },
        {
          label: 'Estimated Attorney Fee',
          value: `$${attorneyFee.toFixed(2)}`,
        },
        {
          label: 'Total Estimated Closing Costs',
          value: `$${totalClosingCosts.toFixed(2)}`,
          isHighlighted: true,
        },
      ];
    },
  },
  article: {
    title: 'Understanding Closing Costs',
    content: `
      <p>Closing costs are the fees and expenses you pay when you close on a house, beyond the down payment. These costs can vary widely depending on your location, the property, and the type of loan you get.</p>
      <h3>Common Closing Costs</h3>
      <ul>
        <li><strong>Loan Origination Fees:</strong> Charged by the lender for processing the loan.</li>
        <li><strong>Appraisal Fees:</strong> The cost of having the property appraised to determine its value.</li>
        <li><strong>Title Insurance:</strong> Protects you and the lender from any disputes over the property's title.</li>
        <li><strong>Property Taxes:</strong> You may need to prepay some property taxes at closing.</li>
        <li><strong>Homeowners Insurance:</strong> You'll likely need to pay for your first year's homeowners insurance premium upfront.</li>
      </ul>
    `
  },
};

export { CLOSING_COST_CALCULATOR_CONTENT };