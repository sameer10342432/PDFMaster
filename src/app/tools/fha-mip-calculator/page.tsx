'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FHA_MIP_CALCULATOR_CONTENT } from '@/content/tools/fha-mip-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FHAMIPCalculatorPage = () => {
  return (
    <CalculatorLayout content={FHA_MIP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FHA_MIP_CALCULATOR_CONTENT.title}
        slug="fha-mip-calculator"
        category="Basic Calculators"
        description={FHA_MIP_CALCULATOR_CONTENT.description}
        inputs={FHA_MIP_CALCULATOR_CONTENT.calculator.fields}
        results={FHA_MIP_CALCULATOR_CONTENT.calculator.results}
        calculation={FHA_MIP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FHAMIPCalculatorPage;

export function generateMetadata() {
  return {
    title: FHA_MIP_CALCULATOR_CONTENT.metaTitle || FHA_MIP_CALCULATOR_CONTENT.title,
    description: FHA_MIP_CALCULATOR_CONTENT.metaDescription || FHA_MIP_CALCULATOR_CONTENT.description,
  };
}
