import { CalculatorContent } from '@/types';

export const PERSONAL_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Personal Loan Calculator',
  description: 'Estimate the monthly payments for a personal loan. See how the loan term and interest rate affect your payment.',
  icon: 'calculator',
  slug: 'personal-loan-calculator',
  category: 'Financial',
  article: {
    title: 'How Do Personal Loans Work?',
    content: `
    <h2>How Do Personal Loans Work?</h2>
    <p>A personal loan is a type of unsecured loan that you can use for a variety of purposes, such as debt consolidation, home improvements, medical bills, or other large expenses. Because they are unsecured, personal loans do not require collateral, but they often have higher interest rates than secured loans like mortgages or auto loans.</p>

    <h3>Key Features of Personal Loans</h3>
    <ul>
      <li><strong>Fixed Interest Rate:</strong> Most personal loans have a fixed interest rate, which means your monthly payment will not change over the life of the loan.</li>
      <li><strong>Fixed Repayment Term:</strong> Personal loans have a set repayment period, typically ranging from 1 to 7 years.</li>
      <li><strong>Unsecured:</strong> You do not have to put up any collateral, such as your home or car, to get a personal loan.</li>
    </ul>

    <h3>When to Consider a Personal Loan</h3>
    <p>A personal loan can be a good option in several situations:</p>
    <ul>
      <li><strong>Debt Consolidation:</strong> If you have multiple high-interest debts, such as credit card balances, you can use a personal loan to consolidate them into a single loan with a lower interest rate.</li>
      <li><strong>Home Improvements:</strong> For smaller home renovation projects where you do not want to take out a home equity loan.</li>
      <li><strong>Major Purchases:</strong> For large, one-time expenses where you do not want to use a credit card.</li>
    </ul>

    <h3>How to Use the Personal Loan Calculator</h3>
    <p>This calculator will help you estimate the monthly payment and total interest for a personal loan. You will need to provide:</p>
    <ul>
      <li>The loan amount you want to borrow.</li>
      <li>The annual interest rate (APR).</li>
      <li>The loan term in years.</li>
    </ul>
    <p>The calculator will then show you your estimated monthly payment, the total principal you will pay, and the total interest you will pay over the life of the loan. This will help you understand the true cost of the loan and whether it fits into your budget.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'interestRate',
        label: 'Annual Interest Rate (%)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      {
        label: 'Monthly Payment',
        isCurrency: true,
      },
      {
        label: 'Total Principal',
        isCurrency: true,
      },
      {
        label: 'Total Interest',
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm } = values;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - loanAmount;

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Total Payment', value: totalPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};