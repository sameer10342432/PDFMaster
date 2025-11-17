'use client';

import { COMMISSION_SPLIT_CALCULATOR_CONTENT } from '@/content/tools/commission-split-calculator';
import { Calculator } from '@/components/calculators';

export const CommissionSplitCalculator = () => {
  return (
    <Calculator
      title={COMMISSION_SPLIT_CALCULATOR_CONTENT.title}
      description={COMMISSION_SPLIT_CALCULATOR_CONTENT.description}
      inputs={COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.fields}
      results={COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.results}
      calculation={COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
