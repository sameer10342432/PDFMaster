
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAP_RATE_CALCULATOR_CONTENT } from '@/content/tools/cap-rate-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const CapitalizationRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAP_RATE_CALCULATOR_CONTENT}>
      <Calculator
        title={CAP_RATE_CALCULATOR_CONTENT.title}
        description={CAP_RATE_CALCULATOR_CONTENT.description}
        inputs={CAP_RATE_CALCULATOR_CONTENT.calculator.fields}
        calculation={CAP_RATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CapitalizationRateCalculatorPage;