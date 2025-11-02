import { CalculatorContent } from '@/types';

export const COLLEGE_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'College Savings Calculator',
  description: 'Plan for your child\'s future. Estimate how much you need to save for college.',
  category: 'Financial',
  article: `
    <h2>How Much to Save for College?</h2>
    <p>The cost of a college education continues to rise, making it one of the most significant expenses a family will face. Planning and saving early is crucial to ensure you can afford the costs of higher education. This calculator will help you estimate the future cost of college and determine how much you need to save each month to meet your goals.</p>

    <h3>The Rising Cost of College</h3>
    <p>College tuition and fees have been increasing at a rate faster than inflation for many years. When planning for college, it is important to account for this inflation to get a realistic estimate of future costs.</p>

    <h3>Key Factors in College Savings</h3>
    <ul>
      <li><strong>Child\'s Current Age:</strong> The younger the child, the more time you have to save and for your investments to grow.</li>
      <li><strong>Age at Enrollment:</strong> The age at which the child will start college.</li>
      <li><strong>Current Annual College Cost:</strong> The current annual cost of the college you are considering.</li>
      <li><strong>College Cost Inflation Rate:</strong> The annual rate at which you expect college costs to increase. A common estimate is 5%.</li>
      <li><strong>Current Savings:</strong> The amount you have already saved for college.</li>
      <li><strong>Rate of Return:</strong> The annual rate of return you expect to earn on your investments.</li>
    </ul>

    <h3>College Savings Options</h3>
    <p>There are several tax-advantaged accounts designed for saving for education:</p>
    <ul>
      <li><strong>529 Plans:</strong> These are state-sponsored investment accounts that allow your savings to grow tax-deferred, and withdrawals are tax-free when used for qualified education expenses.</li>
      <li><strong>Coverdell Education Savings Accounts (ESAs):</strong> Similar to 529 plans, these accounts offer tax-free growth and withdrawals for education expenses.</li>
    </ul>

    <h3>How to Use the College Savings Calculator</h3>
    <p>This calculator will help you create a savings plan for college. You will need to provide:</p>
    <ul>
      <li>The child\'s current age and the age they will start college.</li>
      <li>The current annual cost of college and the expected inflation rate.</li>
      <li>Your current college savings and your expected rate of return.</li>
    </ul>
    <p>The calculator will then estimate the future cost of a four-year degree and tell you how much you need to save each month to reach that goal.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'childsAge',
        label: 'Child\'s Current Age',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'collegeAge',
        label: 'Age at College Enrollment',
        type: 'number',
        defaultValue: 18,
      },
      {
        name: 'currentAnnualCost',
        label: 'Current Annual College Cost',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'costInflationRate',
        label: 'College Cost Inflation Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'currentSavings',
        label: 'Current College Savings',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'rateOfReturn',
        label: 'Investment Rate of Return (%)',
        type: 'number',
        defaultValue: 7,
      },
    ],
    calculate: (values) => {
      const { childsAge, collegeAge, currentAnnualCost, costInflationRate, currentSavings, rateOfReturn } = values;
      const yearsUntilCollege = collegeAge - childsAge;
      const monthlyRateOfReturn = rateOfReturn / 100 / 12;
      const monthsUntilCollege = yearsUntilCollege * 12;

      let futureCost = 0;
      for (let i = 0; i < 4; i++) {
        futureCost += currentAnnualCost * Math.pow(1 + costInflationRate / 100, yearsUntilCollege + i);
      }

      const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRateOfReturn, monthsUntilCollege);
      const remainingCost = futureCost - futureValueOfCurrentSavings;
      const monthlyContribution = remainingCost / (((Math.pow(1 + monthlyRateOfReturn, monthsUntilCollege) - 1) / monthlyRateOfReturn));

      return [
        { label: 'Future Cost of 4-Year Degree', value: futureCost.toFixed(2), isCurrency: true },
        { label: 'Monthly Contribution Needed', value: monthlyContribution.toFixed(2), isCurrency: true },
      ];
    },
  },
};