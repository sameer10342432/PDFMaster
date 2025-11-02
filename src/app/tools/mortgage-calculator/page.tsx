'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/mortgage-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const MortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={MORTGAGE_CALCULATOR_CONTENT}>
            <Calculator
        title={MORTGAGE_CALCULATOR_CONTENT.title}
        description={MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        calculation={MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageCalculatorPage;