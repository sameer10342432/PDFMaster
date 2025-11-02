import { CalculatorContent } from '@/types';

export const CAGR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'CAGR Calculator',
  description: 'Calculate the Compound Annual Growth Rate (CAGR) for your investments.',
  category: 'Investing',
  slug: 'cagr-calculator',
  article: {
    title: 'Understanding Compound Annual Growth Rate (CAGR)',
    content: `
    <p>
      The Compound Annual Growth Rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance, assuming the profits were reinvested at the end of each year of the investment’s lifespan.
    </p>
    <h3>How to Calculate CAGR</h3>
    <p>
      The formula for CAGR is:
    </p>
    <p>
      <strong>CAGR = (Ending Value / Beginning Value)^(1 / Number of Years) - 1</strong>
    </p>
    <p>
      Where:
    </p>
    <ul>
      <li><strong>Beginning Value:</strong> The starting value of the investment.</li>
      <li><strong>Ending Value:</strong> The ending value of the investment.</li>
      <li><strong>Number of Years:</strong> The total number of years the investment has grown.</li>
    </ul>
    <h3>Why is CAGR Important?</h3>
    <p>
      CAGR is one of the most accurate ways to calculate the return for an investment that has risen and fallen in value over time. It provides a smoothed annualized gain, which helps in comparing the performance of different investments.
    </p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'beginningValue',
        label: 'Beginning Value',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'endingValue',
        label: 'Ending Value',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'numberOfYears',
        label: 'Number of Years',
        type: 'number',
        defaultValue: 5,
      },
    ],
    calculate: (values) => {
      const { beginningValue, endingValue, numberOfYears } = values;
      const cagr = (Math.pow(endingValue / beginningValue, 1 / numberOfYears) - 1) * 100;
      return [{ label: 'CAGR', value: `${cagr.toFixed(2)}%` }];
    },
  },
};