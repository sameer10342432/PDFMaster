'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOAN_AMORTIZATION_CALCULATOR_CONTENT } from '@/content/tools/loan-amortization-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LoanAmortizationCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOAN_AMORTIZATION_CALCULATOR_CONTENT}>
            <EnhancedCalculator
        title={LOAN_AMORTIZATION_CALCULATOR_CONTENT.title}
        slug="loan-amortization-calculator"
        category="Real Estate"
        description={LOAN_AMORTIZATION_CALCULATOR_CONTENT.description}
        inputs={LOAN_AMORTIZATION_CALCULATOR_CONTENT.calculator.fields}
        results={LOAN_AMORTIZATION_CALCULATOR_CONTENT.calculator.results}
        calculation={LOAN_AMORTIZATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanAmortizationCalculatorPage;