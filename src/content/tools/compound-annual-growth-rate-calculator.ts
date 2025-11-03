import { CalculatorContent } from '@/types';

export const CAGR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Compound Annual Growth Rate (CAGR) Calculator',
  description: 'Calculate the compound annual growth rate (CAGR) of your investment. Understand the average annual growth of your investment.',
  icon: 'Icon',
  category: 'Financial',
  slug: 'compound-annual-growth-rate-calculator',
  article: {
    title: 'What is Compound Annual Growth Rate (CAGR)?',
    content: `
    <h2>What is Compound Annual Growth Rate (CAGR)?</h2>
    <p>The compound annual growth rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance, assuming the profits were reinvested at the end of each year of the investment’s lifespan. This calculator will help you determine the CAGR of an investment.</p>

    <h3>Why is CAGR Important?</h3>
    <p>CAGR is a useful metric for evaluating the performance of an investment over time. It provides a smoothed-out representation of the investment's growth, which can be more useful than looking at the year-over-year returns, which can be volatile.</p>

    <h3>How to Calculate CAGR</h3>
    <p>The formula for calculating CAGR is:</p>
    <p><strong>CAGR = (Ending Value / Beginning Value)^(1 / Number of Years) - 1</strong></p>

    <h3>How to Use the CAGR Calculator</h3>
    <p>This calculator makes it easy to determine the CAGR of an investment. Simply enter the beginning value, the ending value, and the number of years. The calculator will then show you the CAGR as a percentage.</p>
  `,
  },
  calculator: {
    results: [],
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
        defaultValue: 20000,
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
      const cagr = Math.pow(endingValue / beginningValue, 1 / numberOfYears) - 1;
      const cagrPercentage = cagr * 100;

      return [
        { label: 'Compound Annual Growth Rate (CAGR)', value: cagrPercentage.toFixed(2) + '%' },
      ];
    },
  },
};