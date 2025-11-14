'use client';

import { BUY_NOW_VS_WAIT_CALCULATOR_CONTENT } from '@/content/tools/buy-now-vs-wait-calculator';
import { Calculator } from '@/components/calculators';

export const BuyNowVsWaitCalculator = () => {
  return (
    <Calculator
      title={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT.title}
      description={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT.description}
      inputs={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT.calculator.fields}
      results={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT.calculator.results}
      calculation={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
