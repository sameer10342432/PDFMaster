'use client';

import { COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/commission-calculator';
import { Calculator } from '@/components/calculators';

export const CommissionCalculator = () => {
  return (
    <Calculator
      title={COMMISSION_CALCULATOR_CONTENT.title}
      description={COMMISSION_CALCULATOR_CONTENT.description}
      inputs={COMMISSION_CALCULATOR_CONTENT.calculator.fields}
      results={COMMISSION_CALCULATOR_CONTENT.calculator.results}
      calculation={COMMISSION_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};