import { CalculatorContent } from '@/types';

export const DCF_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Discounted Cash Flow (DCF) Calculator',
  description: 'Calculate the discounted cash flow (DCF) of your investment. Understand the present value of your future cash flows.',
  icon: 'Icon',
  category: 'Financial',
  slug: 'discounted-cash-flow-calculator',
  article: {
    title: 'What is Discounted Cash Flow (DCF)?',
    content: `
    <h2>What is Discounted Cash Flow (DCF)?</h2>
    <p>Discounted cash flow (DCF) is a valuation method used to estimate the value of an investment based on its expected future cash flows. DCF analysis attempts to figure out the value of an investment today, based on projections of how much money it will generate in the future. This calculator will help you perform a DCF analysis.</p>

    <h3>Why is DCF Important?</h3>
    <p>DCF analysis is a powerful tool for investors because it provides a way to value an investment based on its intrinsic value, rather than its market price. This can help you identify undervalued investment opportunities.</p>

    <h3>How to Perform a DCF Analysis</h3>
    <p>To perform a DCF analysis, you need to forecast the investment's future cash flows and then discount them to their present value using a discount rate. The discount rate should reflect the risk of the investment.</p>
    <p>The formula for DCF is:</p>
    <p><strong>DCF = CF1 / (1+r)^1 + CF2 / (1+r)^2 + ... + CFn / (1+r)^n</strong></p>
    <p>Where:</p>
    <ul>
      <li><strong>CF</strong> = Cash Flow</li>
      <li><strong>r</strong> = Discount Rate</li>
      <li><strong>n</strong> = Number of Years</li>
    </ul>

    <h3>How to Use the DCF Calculator</h3>
    <p>This calculator makes it easy to perform a DCF analysis. Simply enter the expected annual cash flows, the discount rate, and the number of years you want to forecast. The calculator will then show you the present value of the investment.</p>
  `,
  },
  calculator: {
    results: [],
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'cashFlows',
        label: 'Annual Cash Flows (comma-separated)',
        type: 'text',
        defaultValue: '20000, 22000, 24000, 26000, 28000',
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: 8,
      },
    ],
    calculate: (values) => {
      const { initialInvestment, cashFlows, discountRate } = values;
      const cashFlowArray = (cashFlows as string).split(',').map(Number);
      const discountRateDecimal = discountRate / 100;
      let dcf = 0;
      for (let i = 0; i < cashFlowArray.length; i++) {
        dcf += cashFlowArray[i] / Math.pow(1 + discountRateDecimal, i + 1);
      }
      const npv = dcf - initialInvestment;

      return [
        { label: 'Discounted Cash Flow (DCF)', value: dcf.toFixed(2), isCurrency: true },
        { label: 'Net Present Value (NPV)', value: npv.toFixed(2), isCurrency: true },
      ];
    },
  },
};