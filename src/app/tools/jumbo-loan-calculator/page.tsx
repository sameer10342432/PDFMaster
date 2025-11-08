'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { JUMBO_LOAN_CALCULATOR_CONTENT } from '@/content/tools/jumbo-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const JumboLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={JUMBO_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={JUMBO_LOAN_CALCULATOR_CONTENT.title}
        slug="jumbo-loan-calculator"
        category="Basic Calculators"
        description={JUMBO_LOAN_CALCULATOR_CONTENT.description}
        inputs={JUMBO_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={JUMBO_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={JUMBO_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default JumboLoanCalculatorPage;

export function generateMetadata() {
  return {
    title: JUMBO_LOAN_CALCULATOR_CONTENT.metaTitle || JUMBO_LOAN_CALCULATOR_CONTENT.title,
    description: JUMBO_LOAN_CALCULATOR_CONTENT.metaDescription || JUMBO_LOAN_CALCULATOR_CONTENT.description,
  };
}
