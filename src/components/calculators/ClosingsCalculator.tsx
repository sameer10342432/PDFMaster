'use client';

import { CLOSINGS_CALCULATOR_CONTENT } from '@/content/tools/closings-to-reach-goal';
import { Calculator } from '@/components/calculators';

export const ClosingsCalculator = () => {
  return (
    <Calculator
      title={CLOSINGS_CALCULATOR_CONTENT.title}
      description={CLOSINGS_CALCULATOR_CONTENT.description}
      inputs={CLOSINGS_CALCULATOR_CONTENT.calculator.fields}
      results={CLOSINGS_CALCULATOR_CONTENT.calculator.results}
      calculation={CLOSINGS_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
