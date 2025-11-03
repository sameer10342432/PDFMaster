
import { CalculatorContent } from '@/types';

export const LOAN_TO_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Loan-to-Value (LTV) Calculator',
  description: 'Calculate your loan-to-value ratio. Understand a key metric lenders use to evaluate your loan applications.',
  slug: 'loan-to-value-calculator',
  icon: 'Icon',
  category: 'Financial',
  article: {
    title: 'What is Your Loan-to-Value (LTV) Ratio?',
    content: `
    <h2>What is Your Loan-to-Value (LTV) Ratio?</h2>
    <p>The loan-to-value (LTV) ratio is a financial term used by lenders to express the ratio of a loan to the value of an asset purchased. It is a key metric used to assess the risk of a loan. This calculator will help you determine your LTV ratio.</p>

    <h3>Why is Your LTV Ratio Important?</h3>
    <p>Lenders use the LTV ratio to determine the risk of a loan. A higher LTV ratio indicates a higher risk for the lender, as the borrower has less equity in the property. As a result, loans with a high LTV ratio often have higher interest rates and may require private mortgage insurance (PMI).</p>
    <p>Generally, lenders prefer an LTV ratio of 80% or less. If your LTV is higher than 80%, you will likely be required to pay PMI.</p>

    <h3>How to Calculate Your LTV Ratio</h3>
    <p>To calculate your LTV ratio, you need to know two things:</p>
    <ul>
      <li><strong>The Loan Amount:</strong> This is the amount of money you are borrowing.</li>
      <li><strong>The Appraised Value of the Property:</strong> This is the value of the property as determined by an appraiser.</li>
    </ul>
    <p>The formula for calculating your LTV ratio is:</p>
    <p><strong>LTV = (Loan Amount / Appraised Value) * 100</strong></p>

    <h3>How to Use the LTV Calculator</h3>
    <p>This calculator makes it easy to determine your LTV ratio. Simply enter the loan amount and the appraised value of the property. The calculator will then show you your LTV ratio and help you understand the implications for your loan.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'appraisedValue',
        label: 'Appraised Value',
        type: 'number',
        defaultValue: 250000,
      },
    ],
    results: [
        { label: 'Loan-to-Value (LTV) Ratio', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, appraisedValue } = values;
      const ltvRatio = (loanAmount / appraisedValue) * 100;

      return [
        { label: 'Loan-to-Value (LTV) Ratio', value: ltvRatio.toFixed(2) + '%' },
      ];
    },
  },
};