'use client';

import { HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT } from '@/content/tools/home-inspection-repair-credit-calculator';
import { Calculator } from '@/components/calculators';

export const HomeInspectionRepairCreditCalculator = () => {
  return (
    <Calculator
      title={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT.title}
      description={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT.description}
      inputs={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT.calculator.fields}
      results={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT.calculator.results}
      calculation={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
