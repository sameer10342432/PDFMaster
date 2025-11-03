'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOAN_TO_VALUE_CALCULATOR_CONTENT } from '@/content/tools/loan-to-value-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const LoanToValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOAN_TO_VALUE_CALCULATOR_CONTENT}>
            <Calculator
        title={LOAN_TO_VALUE_CALCULATOR_CONTENT.title}
        description={LOAN_TO_VALUE_CALCULATOR_CONTENT.description}
        inputs={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanToValueCalculatorPage;