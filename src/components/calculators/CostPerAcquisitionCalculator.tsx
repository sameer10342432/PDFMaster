'use client';

import { COST_PER_ACQUISITION_CALCULATOR_CONTENT } from '@/content/tools/cost-per-acquisition-calculator';
import { Calculator } from '@/components/calculators';

export const CostPerAcquisitionCalculator = () => {
  return (
    <Calculator
      title={COST_PER_ACQUISITION_CALCULATOR_CONTENT.title}
      description={COST_PER_ACQUISITION_CALCULATOR_CONTENT.description}
      inputs={COST_PER_ACQUISITION_CALCULATOR_CONTENT.calculator.fields}
      results={COST_PER_ACQUISITION_CALCULATOR_CONTENT.calculator.results}
      calculation={COST_PER_ACQUISITION_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
