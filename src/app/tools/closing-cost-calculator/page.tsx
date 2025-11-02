'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CLOSING_COST_CALCULATOR_CONTENT } from '@/content/tools/closing-cost-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const ClosingCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOSING_COST_CALCULATOR_CONTENT}>
      <Calculator
        title={CLOSING_COST_CALCULATOR_CONTENT.title}
        description={CLOSING_COST_CALCULATOR_CONTENT.description}
        inputs={CLOSING_COST_CALCULATOR_CONTENT.calculator.fields}
        calculation={CLOSING_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostCalculatorPage;