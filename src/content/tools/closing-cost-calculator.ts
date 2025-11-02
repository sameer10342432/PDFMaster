
import { Calculator, CalculatorContent } from '@/components/calculators/Calculator';

const CLOSING_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Closing Cost Calculator',
  description: 'Estimate the closing costs for your real estate purchase.',
  calculator: {
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
  article: `
  <h2>Understanding Closing Costs</h2>
  <p>
    Closing costs are the fees and expenses you pay when you close on a home. These costs are in addition to the down payment and are typically 2-5% of the purchase price. Both buyers and sellers can have closing costs.
  </p>
  <h3>Common Closing Costs for Buyers</h3>
  <ul>
    <li><strong>Loan Origination Fee:</strong> This is a fee charged by the lender for processing your loan application. It's typically 0.5% to 1% of the loan amount.</li>
    <li><strong>Appraisal Fee:</strong> This fee pays for an appraisal of the home, which is an estimate of the property's market value.</li>
    <li><strong>Title Insurance:</strong> This protects you and the lender from any claims against the title of the property.</li>
    <li><strong>Home Inspection Fee:</strong> This fee pays for a professional inspection of the home's condition.</li>
    <li><strong>Recording Fee:</strong> This is a fee charged by the county or city to record the sale of the property.</li>
    <li><strong>Attorney Fee:</strong> In some states, an attorney is required to be present at closing.</li>
  </ul>
  <p>
    Our Closing Cost Calculator provides an estimate of these costs to help you budget for your home purchase. Please note that these are estimates and actual costs may vary.
  </p>
`,
};

export { CLOSING_COST_CALCULATOR_CONTENT };