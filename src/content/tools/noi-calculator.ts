
import { Calculator, CalculatorContent } from '@/components/calculators/Calculator';

const NOI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Operating Income (NOI) Calculator',
  description: 'Calculate the Net Operating Income (NOI) of your property.',
  calculator: {
    fields: [
      {
        name: 'grossPotentialIncome',
        label: 'Gross Potential Income',
        type: 'number',
        defaultValue: '120000',
      },
      {
        name: 'vacancy',
        label: 'Vacancy (Percentage)',
        type: 'number',
        defaultValue: '5',
      },
      {
        name: 'operatingExpenses',
        label: 'Operating Expenses',
        type: 'number',
        defaultValue: '45000',
      },
    ],
    calculate: (values) => {
      const grossOperatingIncome = values.grossPotentialIncome * (1 - values.vacancy / 100);
      const noi = grossOperatingIncome - values.operatingExpenses;

      return [
        {
          label: 'Gross Operating Income',
          value: `$${grossOperatingIncome.toFixed(2)}`,
        },
        {
          label: 'Net Operating Income (NOI)',
          value: `$${noi.toFixed(2)}`,
        },
      ];
    },
  },
  article: `
  <h2>Understanding Net Operating Income (NOI)</h2>
  <p>
    Net Operating Income (NOI) is a calculation used to analyze the profitability of income-generating real estate investments. NOI equals all revenue from the property, minus all reasonably necessary operating expenses.
  </p>
  <h3>How to Calculate NOI</h3>
  <p>
    The formula for NOI is:
  </p>
  <p>
    <strong>NOI = (Gross Operating Income + Other Income) - Operating Expenses</strong>
  </p>
  <p>
    Where:
  </p>
  <ul>
    <li><strong>Gross Operating Income (GOI):</strong> This is the Gross Potential Income minus vacancy losses.</li>
    <li><strong>Other Income:</strong> This can include income from laundry facilities, parking, etc. For simplicity, our calculator combines this into the Gross Potential Income.</li>
    <li><strong>Operating Expenses:</strong> These are the day-to-day costs of running the property. They include property taxes, insurance, maintenance, repairs, property management fees, utilities, and other recurring expenses. Operating expenses do not include mortgage payments (principal and interest), capital expenditures, or income taxes.</li>
  </ul>
  <h3>Why is NOI Important?</h3>
  <p>
    NOI is a key figure in real estate analysis for several reasons:
  </p>
  <ul>
    <li>It provides a measure of a property's ability to generate positive cash flow from its operations.</li>
    <li>It is used to calculate the capitalization rate (cap rate), which is used to compare the value of similar properties.</li>
    <li>Lenders use NOI to determine how much debt a property can support.</li>
  </ul>
`,
};

export { NOI_CALCULATOR_CONTENT };