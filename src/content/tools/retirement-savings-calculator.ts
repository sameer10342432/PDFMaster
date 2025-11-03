import { CalculatorContent } from '@/types';

export const RETIREMENT_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Retirement Savings Calculator',
  description: 'Plan for your retirement. Estimate how much you need to save to reach your retirement goals.',
  icon: 'Icon',
  category: 'Financial',
  slug: 'retirement-savings-calculator',
  article: {
    title: 'How Much to Save for Retirement?',
    content: `
    <h2>How Much to Save for Retirement?</h2>
    <p>Retirement may seem like a long way off, but it is never too early to start saving. The sooner you start, the more time your money has to grow. This calculator will help you estimate how much your savings could be worth at retirement and see if you are on track to meet your financial goals.</p>

    <h3>The Power of Compound Interest</h3>
    <p>The key to building wealth for retirement is compound interest. This is when the interest you earn on your savings also starts earning interest. Over time, compound interest can have a dramatic impact on the growth of your investments.</p>

    <h3>Key Factors in Retirement Savings</h3>
    <p>Several factors will determine how much you will have saved by the time you retire:</p>
    <ul>
      <li><strong>Current Age:</strong> The younger you are when you start saving, the more time your money has to grow.</li>
      <li><strong>Retirement Age:</strong> The age at which you plan to retire.</li>
      <li><strong>Current Savings:</strong> The amount you have already saved for retirement.</li>
      <li><strong>Monthly Contribution:</strong> The amount you save for retirement each month.</li>
      <li><strong>Rate of Return:</strong> The annual rate of return you expect to earn on your investments. This will depend on the types of investments you choose.</li>
    </ul>

    <h3>How Much Should You Save?</h3>
    <p>A common rule of thumb is to save at least 15% of your pre-tax income for retirement. However, the right amount for you will depend on your individual circumstances, including your desired retirement lifestyle and other sources of income, such as Social Security or a pension.</p>

    <h3>How to Use the Retirement Savings Calculator</h3>
    <p>This calculator will help you project the future value of your retirement savings. You will need to provide:</p>
    <ul>
      <li>Your current age and desired retirement age.</li>
      <li>Your current retirement savings.</li>
      <li>Your monthly contribution amount.</li>
      <li>Your estimated annual rate of return.</li>
    </ul>
    <p>The calculator will then estimate the total amount you will have saved by retirement. You can adjust the numbers to see how different scenarios could impact your savings goals.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'currentAge',
        label: 'Current Age',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'retirementAge',
        label: 'Retirement Age',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'currentSavings',
        label: 'Current Retirement Savings',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'monthlyContribution',
        label: 'Monthly Contribution',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'rateOfReturn',
        label: 'Annual Rate of Return (%)',
        type: 'number',
        defaultValue: 7,
      },
    ],
    results: [
      { label: 'Estimated Retirement Savings', isCurrency: true },
    ],
    calculate: (values) => {
      const { currentAge, retirementAge, currentSavings, monthlyContribution, rateOfReturn } = values;
      const yearsToRetirement = retirementAge - currentAge;
      const monthsToRetirement = yearsToRetirement * 12;
      const monthlyRateOfReturn = rateOfReturn / 100 / 12;

      const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRateOfReturn, monthsToRetirement);
      const futureValueOfContributions = monthlyContribution * ((Math.pow(1 + monthlyRateOfReturn, monthsToRetirement) - 1) / monthlyRateOfReturn);

      const totalSavings = futureValueOfCurrentSavings + futureValueOfContributions;

      return [
        { label: 'Estimated Retirement Savings', value: totalSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};