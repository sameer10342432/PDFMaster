import { CalculatorContent } from '@/types';

export const HARD_MONEY_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hard Money Loan Calculator',
  description: 'Calculate the costs of a hard money loan. For real estate investors using short-term financing.',
  icon: 'Icon',
  slug: 'hard-money-loan-calculator',
  category: 'Investing',
  article: {
    title: 'What is a Hard Money Loan?',
    content: `
    <h2>What is a Hard Money Loan?</h2>
    <h2>Understanding Hard Money Loans</h2>
    <p>A hard money loan is a type of short-term, asset-based loan that is secured by real property. Hard money loans are often used by real estate investors for fix and flip projects or other short-term financing needs. Unlike traditional mortgages, which are underwritten based on the borrower\'s creditworthiness, hard money loans are underwritten based on the value of the property being used as collateral.</p>

    <h3>Key Features of Hard Money Loans</h3>
    <ul>
      <li><strong>Short-Term:</strong> Loan terms are typically 1-3 years.</li>
      <li><strong>Asset-Based:</strong> The loan is secured by the property, not the borrower\'s credit.</li>
      <li><strong>Fast Funding:</strong> Hard money loans can often be funded much faster than traditional loans.</li>
      <li><strong>Higher Interest Rates:</strong> Interest rates are significantly higher than traditional loans, often in the range of 10-15%.</li>
      <li><strong>Origination Points:</strong> Lenders charge upfront fees, known as points, which are a percentage of the loan amount (e.g., 2-4 points).</li>
    </ul>

    <h3>When to Use a Hard Money Loan</h3>
    <p>Hard money loans can be a good option in certain situations:</p>
    <ul>
      <li><strong>Fix and Flip Projects:</strong> When you need to purchase and renovate a property quickly.</li>
      <li><strong>Land Purchases:</strong> When you need short-term financing to acquire land before securing a construction loan.</li>
      <li><strong>Borrowers with Poor Credit:</strong> When you can\'t qualify for a traditional loan due to a low credit score.</li>
      <li><strong>Bridge Financing:</strong> To bridge the gap between the purchase of a new property and the sale of an existing one.</li>
    </ul>

    <h3>Risks of Hard Money Loans</h3>
    <p>The main risk of a hard money loan is the high cost. The high interest rates and upfront fees can eat into your profits. Additionally, if you are unable to repay the loan, the lender can foreclose on the property.</p>

    <h3>How to Use the Hard Money Loan Calculator</h3>
    <p>This calculator will help you understand the costs associated with a hard money loan. You will need to provide the loan amount, interest rate, loan term, and the number of points being charged. The calculator will then show you:</p>
    <ul>
      <li>The total amount of fees.</li>
      <li>Your monthly interest-only payment.</li>
      <li>The total cost of the loan.</li>
    </ul>
    <p>This will help you determine if a hard money loan is a viable financing option for your project.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Months)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'points',
        label: 'Origination Points (%)',
        type: 'number',
        defaultValue: 3,
      },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm, points } = values;
      const pointsFee = loanAmount * (points / 100);
      const totalLoanAmount = loanAmount + pointsFee;
      const monthlyInterestPayment = (loanAmount * (interestRate / 100)) / 12;
      const totalInterestPaid = monthlyInterestPayment * loanTerm;
      const totalLoanCost = totalInterestPaid + pointsFee;

      return [
        { label: 'Origination Fee', value: pointsFee.toFixed(2), isCurrency: true },
        { label: 'Monthly Interest Payment', value: monthlyInterestPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterestPaid.toFixed(2), isCurrency: true },
        { label: 'Total Cost of Loan', value: totalLoanCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};