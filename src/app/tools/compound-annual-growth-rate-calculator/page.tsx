
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAGR_CALCULATOR_CONTENT } from '@/content/tools/compound-annual-growth-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CompoundAnnualGrowthRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAGR_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAGR_CALCULATOR_CONTENT.title}
        slug="compound-annual-growth-rate-calculator"
        category="Real Estate"
        description={CAGR_CALCULATOR_CONTENT.description}
        inputs={CAGR_CALCULATOR_CONTENT.calculator.fields}
        results={CAGR_CALCULATOR_CONTENT.calculator.results}
        calculation={CAGR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CompoundAnnualGrowthRateCalculatorPage;