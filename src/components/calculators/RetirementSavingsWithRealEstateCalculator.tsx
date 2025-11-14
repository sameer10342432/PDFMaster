'use client';

import { RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/retirement-savings-with-real-estate-calculator';
import { Calculator } from '@/components/calculators';

export const RetirementSavingsWithRealEstateCalculator = () => {
  return (
    <Calculator
      title={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT.title}
      description={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT.description}
      inputs={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
      results={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
      calculation={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
