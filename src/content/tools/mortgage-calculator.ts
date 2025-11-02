import { CalculatorContent } from '@/types';

export const MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Calculator',
  description: 'Calculate your monthly mortgage payment.',
  category: 'Financial',
  article: {
    content: `
    <h2>Understanding Mortgages</h2>
    <p>A mortgage is a loan used to purchase a home or other type of real estate. The borrower agrees to pay the lender back over a set period of time, typically with interest. The property itself is used as collateral to secure the loan.</p>
    <h3>How to Use the Mortgage Calculator</h3>
    <p>This calculator will help you estimate your monthly mortgage payment. You will need to provide the following information:</p>
    <ul>
      <li><strong>Home Price:</strong> The purchase price of the home.</li>
      <li><strong>Down Payment:</strong> The amount of money you are putting down towards the purchase.</li>
      <li><strong>Interest Rate:</strong> The annual interest rate for the loan.</li>
      <li><strong>Loan Term:</strong> The length of the loan in years.</li>
    </ul>
    <p>The calculator will then show you your estimated monthly payment, including principal and interest.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    calculate: (values) => {
      const { homePrice, downPayment, interestRate, loanTerm } = values;
      const loanAmount = homePrice - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};