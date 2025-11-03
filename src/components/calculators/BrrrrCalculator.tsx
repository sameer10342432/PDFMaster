'use client';

import { BRRRR_METHOD_CALCULATOR_CONTENT } from '@/content/tools/brrrr-method-calculator';
import { Calculator } from '@/components/calculators';

export const BrrrrCalculator = () => {
  return (
    <Calculator
      title={BRRRR_METHOD_CALCULATOR_CONTENT.title}
      description={BRRRR_METHOD_CALCULATOR_CONTENT.description}
      inputs={BRRRR_METHOD_CALCULATOR_CONTENT.calculator.fields}
      results={BRRRR_METHOD_CALCULATOR_CONTENT.calculator.results}
      calculation={BRRRR_METHOD_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};