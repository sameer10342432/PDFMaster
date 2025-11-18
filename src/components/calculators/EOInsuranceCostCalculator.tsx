'use client';

import { EO_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/eo-insurance-cost-calculator';
import { Calculator } from '@/components/calculators';

export const EOInsuranceCostCalculator = () => {
  return (
    <Calculator
      title={EO_INSURANCE_COST_CALCULATOR_CONTENT.title}
      description={EO_INSURANCE_COST_CALCULATOR_CONTENT.description}
      inputs={EO_INSURANCE_COST_CALCULATOR_CONTENT.calculator.fields}
      results={EO_INSURANCE_COST_CALCULATOR_CONTENT.calculator.results}
      calculation={EO_INSURANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
