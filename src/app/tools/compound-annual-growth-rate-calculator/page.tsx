
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAGR_CALCULATOR_CONTENT } from '@/content/tools/compound-annual-growth-rate-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const CompoundAnnualGrowthRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAGR_CALCULATOR_CONTENT}>
      <Calculator
        title={CAGR_CALCULATOR_CONTENT.title}
        description={CAGR_CALCULATOR_CONTENT.description}
        inputs={CAGR_CALCULATOR_CONTENT.calculator.fields}
        calculation={CAGR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CompoundAnnualGrowthRateCalculatorPage;