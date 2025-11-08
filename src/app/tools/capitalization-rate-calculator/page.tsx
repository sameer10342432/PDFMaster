
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAP_RATE_CALCULATOR_CONTENT } from '@/content/tools/cap-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CapitalizationRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAP_RATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAP_RATE_CALCULATOR_CONTENT.title}
        slug="capitalization-rate-calculator"
        category="Real Estate"
        description={CAP_RATE_CALCULATOR_CONTENT.description}
        inputs={CAP_RATE_CALCULATOR_CONTENT.calculator.fields}
        results={CAP_RATE_CALCULATOR_CONTENT.calculator.results}
        calculation={CAP_RATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CapitalizationRateCalculatorPage;