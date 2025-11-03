import { CalculatorContent } from '@/types';

export const CREDIT_CARD_PAYOFF_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Credit Card Payoff Calculator',
  description: 'Find the best strategy to pay off your credit card debt. See how long it will take to become debt-free.',
  icon: 'Icon',
  slug: 'credit-card-payoff-calculator',
  category: 'Financial',
  article: {
    title: 'How to Pay Off Credit Card Debt?',
    content: `
    <h2>How to Pay Off Credit Card Debt?</h2>
    <p>High-interest credit card debt can be a major obstacle to achieving your financial goals. The longer you carry a balance, the more you pay in interest, and the harder it becomes to get ahead. This calculator will help you create a plan to pay off your credit card debt and see how much you can save by paying more than the minimum payment.</p>

    <h3>The High Cost of Credit Card Debt</h3>
    <p>Credit cards often have very high interest rates, which can make it difficult to pay off your balance. If you only make the minimum payment each month, it can take years, or even decades, to pay off your debt, and you will end up paying a significant amount in interest.</p>

    <h3>Strategies for Paying Off Credit Card Debt</h3>
    <p>There are two popular strategies for paying off multiple credit cards:</p>
    <ul>
      <li><strong>Debt Snowball:</strong> You focus on paying off your smallest balances first, while making the minimum payments on your other cards. This can give you quick wins and keep you motivated.</li>
      <li><strong>Debt Avalanche:</strong> You focus on paying off your highest-interest cards first, while making the minimum payments on your other cards. This strategy will save you the most money in interest over time.</li>
    </ul>

    <h3>How to Use the Credit Card Payoff Calculator</h3>
    <p>This calculator will show you how long it will take to pay off your credit card balance based on your current payment. You can also see how increasing your monthly payment can help you get out of debt faster and save money on interest. You will need to provide:</p>
    <ul>
      <li>Your current credit card balance.</li>
      <li>The annual percentage rate (APR) of your credit card.</li>
      <li>Your current monthly payment.</li>
    </ul>
    <p>The calculator will then show you your payoff timeline and the total interest you will pay. You can experiment with different payment amounts to see how it impacts your results.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'balance',
        label: 'Credit Card Balance',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'apr',
        label: 'Annual Percentage Rate (APR) (%)',
        type: 'number',
        defaultValue: 18,
      },
      {
        name: 'monthlyPayment',
        label: 'Monthly Payment',
        type: 'number',
        defaultValue: 100,
      },
    ],
    calculate: (values) => {
      const { balance, apr, monthlyPayment } = values;
      const monthlyInterestRate = apr / 100 / 12;
      let months = 0;
      let totalInterest = 0;
      let currentBalance = balance;

      if (monthlyPayment <= balance * monthlyInterestRate) {
        return [
          { label: 'Payoff Time', value: 'Forever at this payment' },
          { label: 'Total Interest Paid', value: 'Infinity' },
        ];
      }

      while (currentBalance > 0) {
        const interest = currentBalance * monthlyInterestRate;
        totalInterest += interest;
        const principal = monthlyPayment - interest;
        currentBalance -= principal;
        months++;
      }

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      return [
        { label: 'Payoff Time', value: `${years} years and ${remainingMonths} months` },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};