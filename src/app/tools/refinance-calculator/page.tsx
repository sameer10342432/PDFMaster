'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MORTGAGE_REFINANCE_CALCULATOR_CONTENT } from '@/content/tools/mortgage-refinance-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RefinanceCalculatorPage = () => {
  return (
    <CalculatorLayout content={MORTGAGE_REFINANCE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.title}
        slug="refinance-calculator"
        category="Mortgage"
        description={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.fields}
        results={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.results}
        calculation={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RefinanceCalculatorPage;