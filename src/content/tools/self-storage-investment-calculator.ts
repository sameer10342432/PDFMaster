import { CalculatorContent } from '@/types';

export const SELF_STORAGE_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Self Storage Investment Calculator',
  description:
    'An analyze potential returns on a self-storage facility investment. Taking into account factors like occupancy rates, rental income, and operating expenses, it helps investors make informed decisions in the self-storage market.',
  article: `
      <p>A self-storage investment calculator is an essential tool for investors looking to venture into the lucrative world of self-storage facilities. This calculator helps in analyzing the potential profitability and returns of a self-storage investment by taking into account various factors such as purchase price, financing details, rental income, operating expenses, and occupancy rates. By inputting these variables, investors can get a clear picture of the cash flow, capitalization rate (cap rate), and overall return on investment (ROI).</p>
    <h2>Investing in Self-Storage Facilities</h2>
    <p>Self-storage facilities have become an increasingly popular asset class for real estate investors. They are often considered to be recession-resistant and can provide a steady stream of passive income. This calculator will help you analyze the potential financial performance of a self-storage investment.</p>

    <h3>Why Invest in Self-Storage?</h3>
    <ul>
      <li><strong>Steady Demand:</strong> People always need storage, whether they are moving, downsizing, or just have too much stuff. This creates a consistent demand for storage units.</li>
      <li><strong>Recession-Resistant:</strong> During economic downturns, the demand for self-storage can actually increase as people downsize their homes or businesses.</li>
      <li><strong>Low Operating Costs:</strong> Compared to other types of commercial real estate, self-storage facilities have relatively low operating and maintenance costs.</li>
      <li><strong>Scalability:</strong> You can start with a small facility and expand it over time as demand grows.</li>
    </ul>

    <h3>Key Metrics for Self-Storage Investing</h3>
    <p>When analyzing a self-storage investment, you should focus on the following metrics:</p>
    <ul>
      <li><strong>Gross Potential Income (GPI):</strong> The total rental income you would receive if the facility were 100% occupied.</li>
      <li><strong>Vacancy Rate:</strong> The percentage of units that are not rented out.</li>
      <li><strong>Effective Gross Income (EGI):</strong> GPI minus vacancy losses.</li>
      <li><strong>Operating Expenses:</strong> The costs of running the facility, such as property taxes, insurance, utilities, marketing, and management fees.</li>
      <li><strong>Net Operating Income (NOI):</strong> EGI minus operating expenses. This is a key indicator of the property\'s profitability.</li>
      <li><strong>Cap Rate:</strong> The NOI divided by the property\'s purchase price. This is used to compare the profitability of different investments.</li>
    </ul>

    <h3>How to Use the Self-Storage Investment Calculator</h3>
    <p>This calculator will help you project the potential income and expenses for a self-storage facility. You will need to provide information about:</p>
    <ul>
      <li>The number and size of the storage units.</li>
      <li>The rental rates for each unit size.</li>
      <li>The estimated vacancy rate.</li>
      <li>The projected operating expenses.</li>
    </ul>
    <p>The calculator will then estimate the property\'s Gross Potential Income, Effective Gross Income, and Net Operating Income, giving you a clear picture of its potential financial performance.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'numberOfUnits',
        label: 'Total Number of Units',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'averageRentPerUnit',
        label: 'Average Monthly Rent per Unit',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'operatingExpenses',
        label: 'Annual Operating Expenses',
        type: 'number',
        defaultValue: 30000,
      },
    ],
    calculate: (values: any) => {
      const { numberOfUnits, averageRentPerUnit, vacancyRate, operatingExpenses } = values;
      const grossPotentialIncome = numberOfUnits * averageRentPerUnit * 12;
      const vacancyLoss = grossPotentialIncome * (vacancyRate / 100);
      const effectiveGrossIncome = grossPotentialIncome - vacancyLoss;
      const noi = effectiveGrossIncome - operatingExpenses;

      return [
        { label: 'Gross Potential Income', value: grossPotentialIncome.toFixed(2), isCurrency: true },
        { label: 'Effective Gross Income', value: effectiveGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
      ];
    },
  },
};