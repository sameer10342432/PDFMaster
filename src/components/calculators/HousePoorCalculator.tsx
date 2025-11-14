'use client';

import { HOUSE_POOR_CALCULATOR_CONTENT } from '@/content/tools/house-poor-calculator';
import { Calculator } from '@/components/calculators';

export const HousePoorCalculator = () => {
  return (
    <Calculator
      title={HOUSE_POOR_CALCULATOR_CONTENT.title}
      description={HOUSE_POOR_CALCULATOR_CONTENT.description}
      inputs={HOUSE_POOR_CALCULATOR_CONTENT.calculator.fields}
      results={HOUSE_POOR_CALCULATOR_CONTENT.calculator.results}
      calculation={HOUSE_POOR_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
