'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { USDA_LOAN_CALCULATOR_CONTENT } from '@/content/tools/usda-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const USDALoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={USDA_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={USDA_LOAN_CALCULATOR_CONTENT.title}
        slug="usda-loan-calculator"
        category="Basic Calculators"
        description={USDA_LOAN_CALCULATOR_CONTENT.description}
        inputs={USDA_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={USDA_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={USDA_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default USDALoanCalculatorPage;

export function generateMetadata() {
  return {
    title: USDA_LOAN_CALCULATOR_CONTENT.metaTitle || USDA_LOAN_CALCULATOR_CONTENT.title,
    description: USDA_LOAN_CALCULATOR_CONTENT.metaDescription || USDA_LOAN_CALCULATOR_CONTENT.description,
  };
}
