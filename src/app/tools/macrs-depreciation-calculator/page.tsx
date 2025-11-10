'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MACRS_DEPRECIATION_CALCULATOR_CONTENT } from '@/content/tools/macrs-depreciation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MacrsDepreciationCalculatorPage = () => {
  return (
    <CalculatorLayout content={MACRS_DEPRECIATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MACRS_DEPRECIATION_CALCULATOR_CONTENT.title}
        slug="macrs-depreciation-calculator"
        category="Financial Planning"
        description={MACRS_DEPRECIATION_CALCULATOR_CONTENT.description}
        inputs={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.fields}
        results={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.results}
        calculation={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MacrsDepreciationCalculatorPage;
