'use client';

import { BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT } from '@/content/tools/buy-vs-rent-advanced-calculator';
import { Calculator } from '@/components/calculators';

export const BuyVsRentAdvancedCalculator = () => {
  return (
    <Calculator
      title={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT.title}
      description={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT.description}
      inputs={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT.calculator.fields}
      results={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT.calculator.results}
      calculation={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
