"use client";
import { amortizationCalculator } from '@/content/tools/amortization-calculator';
import { Calculator } from '@/components/calculators/Calculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const AmortizationCalculatorPage = () => {
  return (
    <CalculatorLayout content={amortizationCalculator}>
      <Calculator
        title={amortizationCalculator.title}
        description={amortizationCalculator.description}
        inputs={amortizationCalculator.calculator.fields}
        results={amortizationCalculator.calculator.results}
        calculation={amortizationCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmortizationCalculatorPage;