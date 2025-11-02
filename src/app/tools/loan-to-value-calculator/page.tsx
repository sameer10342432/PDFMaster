'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LTV_CALCULATOR_CONTENT } from '@/content/tools/loan-to-value-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const LoanToValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={LTV_CALCULATOR_CONTENT}>
            <Calculator
        title={LTV_CALCULATOR_CONTENT.title}
        description={LTV_CALCULATOR_CONTENT.description}
        inputs={LTV_CALCULATOR_CONTENT.calculator.fields}
        calculation={LTV_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanToValueCalculatorPage;