'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VA_LOAN_CALCULATOR_CONTENT } from '@/content/tools/va-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VALoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={VA_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VA_LOAN_CALCULATOR_CONTENT.title}
        slug="va-loan-calculator"
        category="Basic Calculators"
        description={VA_LOAN_CALCULATOR_CONTENT.description}
        inputs={VA_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={VA_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={VA_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VALoanCalculatorPage;
