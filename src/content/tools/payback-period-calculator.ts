
import { CalculatorContent } from '@/types';

export const PAYBACK_PERIOD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Payback Period Calculator',
  description: 'Calculate the payback period for your investment. Understand how long it will take to recoup your initial investment.',
  category: 'Financial',
  article: {
    content: `
    <h2>What is the Payback Period?</h2>
    <p>The payback period is the length of time it takes for an investment to generate enough cash flow to recover the initial cost of the investment. It is a simple way to evaluate the risk of an investment. This calculator will help you determine the payback period for an investment.</p>

    <h3>Why is the Payback Period Important?</h3>
    <p>The payback period is a useful tool for comparing the risk of different investments. A shorter payback period is generally preferred, as it indicates that you will recover your initial investment more quickly. This reduces the risk of losing money on the investment.</p>

    <h3>How to Calculate the Payback Period</h3>
    <p>The formula for calculating the payback period depends on whether the cash flows are even or uneven.</p>
    <p><strong>For even cash flows:</strong></p>
    <p><strong>Payback Period = Initial Investment / Annual Cash Flow</strong></p>
    <p><strong>For uneven cash flows:</strong></p>
    <p>The payback period is calculated by subtracting the annual cash flows from the initial investment until the investment is fully recovered.</p>

    <h3>How to Use the Payback Period Calculator</h3>
    <p>This calculator makes it easy to determine the payback period for an investment. Simply enter the initial investment and the annual cash flow. The calculator will then show you the payback period in years.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'annualCashFlow',
        label: 'Annual Cash Flow',
        type: 'number',
        defaultValue: 20000,
      },
    ],
    calculate: (values) => {
      const { initialInvestment, annualCashFlow } = values;
      const paybackPeriod = initialInvestment / annualCashFlow;

      return [
        { label: 'Payback Period (Years)', value: paybackPeriod.toFixed(2) },
      ];
    },
  },
};