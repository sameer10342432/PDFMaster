'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FHA_203K_LOAN_CALCULATOR_CONTENT } from '@/content/tools/fha-203k-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FHA203kLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={FHA_203K_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FHA_203K_LOAN_CALCULATOR_CONTENT.title}
        slug="fha-203k-loan-calculator"
        category="Basic Calculators"
        description={FHA_203K_LOAN_CALCULATOR_CONTENT.description}
        inputs={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FHA203kLoanCalculatorPage;

export function generateMetadata() {
  return {
    title: FHA_203K_LOAN_CALCULATOR_CONTENT.metaTitle || FHA_203K_LOAN_CALCULATOR_CONTENT.title,
    description: FHA_203K_LOAN_CALCULATOR_CONTENT.metaDescription || FHA_203K_LOAN_CALCULATOR_CONTENT.description,
  };
}
