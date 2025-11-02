import { CalculatorContent } from '@/types';

export const COST_OF_LIVING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost of Living Calculator',
  description: 'Compare the cost of living between two cities. See how your salary and expenses may change.',
  category: 'General',
  article: `
    <h2>Comparing the Cost of Living</h2>
    <p>Whether you are moving for a new job, retirement, or a change of scenery, it is crucial to understand how your cost of living will change. The cost of living can vary significantly from one city to another, and a higher salary in a new city does not always mean you will have more disposable income. This calculator will help you compare the cost of living between two cities.</p>

    <h3>What is the Cost of Living?</h3>
    <p>The cost of living is the amount of money needed to cover basic expenses such as housing, food, taxes, and healthcare in a particular place. It is often used to compare how expensive it is to live in one city versus another.</p>

    <h3>Key Factors in the Cost of Living</h3>
    <p>Several factors contribute to the cost of living in a city:</p>
    <ul>
      <li><strong>Housing:</strong> This is usually the biggest expense, and it includes rent or mortgage payments, property taxes, and utilities.</li>
      <li><strong>Food:</strong> The cost of groceries and dining out.</li>
      <li><strong>Transportation:</strong> The cost of gas, public transportation, car insurance, and maintenance.</li>
      <li><strong>Healthcare:</strong> The cost of health insurance premiums, doctor visits, and prescription drugs.</li>
      <li><strong>Taxes:</strong> State and local income taxes, sales taxes, and property taxes.</li>
      <li><strong>Other Expenses:</strong> The cost of entertainment, clothing, and personal care.</li>
    </ul>

    <h3>How to Use the Cost of Living Calculator</h3>
    <p>This calculator uses a simplified model and does not use a real-time cost of living index. Instead, it allows you to input your current salary and the major monthly expenses in your current city and the new city you are considering. You will need to provide estimates for:</p>
    <ul>
      <li>Your current annual salary.</li>
      <li>Monthly housing costs (rent/mortgage).</li>
      <li>Monthly transportation costs.</li>
      <li>Monthly food costs.</li>
      <li>Other monthly expenses.</li>
    </ul>
    <p>The calculator will then compare your total monthly expenses in both cities and estimate the equivalent salary you would need in the new city to maintain your current lifestyle. This will give you a better idea of how a move could impact your finances.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'currentSalary',
        label: 'Current Annual Salary',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'currentHousing',
        label: 'Current Monthly Housing Cost',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'newHousing',
        label: 'New City Monthly Housing Cost',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'currentFood',
        label: 'Current Monthly Food Cost',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'newFood',
        label: 'New City Monthly Food Cost',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'currentTransportation',
        label: 'Current Monthly Transportation Cost',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'newTransportation',
        label: 'New City Monthly Transportation Cost',
        type: 'number',
        defaultValue: 400,
      },
    ],
    calculate: (values) => {
      const { currentSalary, currentHousing, newHousing, currentFood, newFood, currentTransportation, newTransportation } = values;
      const currentTotalMonthlyCosts = currentHousing + currentFood + currentTransportation;
      const newTotalMonthlyCosts = newHousing + newFood + newTransportation;
      const costDifference = newTotalMonthlyCosts - currentTotalMonthlyCosts;
      const equivalentSalary = currentSalary + (costDifference * 12);

      return [
        { label: 'Equivalent Salary in New City', value: equivalentSalary.toFixed(2), isCurrency: true },
        { label: 'Difference in Monthly Costs', value: costDifference.toFixed(2), isCurrency: true },
      ];
    },
  },
};