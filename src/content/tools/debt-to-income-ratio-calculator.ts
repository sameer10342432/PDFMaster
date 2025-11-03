import { CalculatorContent } from '@/types';

export const DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Debt-to-Income (DTI) Ratio Calculator',
  description: 'Calculate your debt-to-income ratio. Understand a key metric lenders use to evaluate your loan applications.',
  slug: 'debt-to-income-ratio-calculator',
  icon: 'Icon',
  category: 'Financial',
  article: {
    title: 'What is Your Debt-to-Income (DTI) Ratio?',
    content: `
    <h2>What is Your Debt-to-Income (DTI) Ratio?</h2>
    <p>Your debt-to-income (DTI) ratio is a key financial metric that lenders use to assess your ability to manage monthly payments and repay debts. It compares your total monthly debt payments to your gross monthly income. This calculator will help you determine your DTI ratio.</p>

    <h3>Why is Your DTI Ratio Important?</h3>
    <p>Lenders use your DTI ratio to determine how much of a risk you are as a borrower. A low DTI ratio indicates that you have a good balance between debt and income, while a high DTI ratio may signal that you have too much debt for your income level.</p>
    <p>Generally, lenders prefer a DTI ratio of 43% or less. If your DTI is too high, you may have difficulty qualifying for a mortgage or other loans.</p>

    <h3>How to Calculate Your DTI Ratio</h3>
    <p>To calculate your DTI ratio, you need to know two things:</p>
    <ul>
      <li><strong>Your Gross Monthly Income:</strong> This is your total monthly income before taxes and other deductions are taken out.</li>
      <li><strong>Your Total Monthly Debt Payments:</strong> This includes all of your monthly debt obligations, such as rent or mortgage payments, car loans, student loans, and credit card payments.</li>
    </ul>
    <p>The formula for calculating your DTI ratio is:</p>
    <p><strong>DTI = (Total Monthly Debt Payments / Gross Monthly Income) * 100</strong></p>

    <h3>How to Use the DTI Calculator</h3>
    <p>This calculator makes it easy to determine your DTI ratio. Simply enter your gross monthly income and a list of your monthly debt payments. The calculator will then show you your DTI ratio and give you an idea of where you stand in the eyes of lenders.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'grossMonthlyIncome',
        label: 'Gross Monthly Income',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'monthlyDebts',
        label: 'Total Monthly Debt Payments',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    calculate: (values) => {
      const { grossMonthlyIncome, monthlyDebts } = values;
      const dtiRatio = (monthlyDebts / grossMonthlyIncome) * 100;

      return [
        { label: 'Debt-to-Income (DTI) Ratio', value: dtiRatio.toFixed(2) + '%' },
      ];
    },
  },
};