
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DCF_CALCULATOR_CONTENT } from '@/content/tools/discounted-cash-flow-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const DiscountedCashFlowCalculatorPage = () => {
  return (
    <CalculatorLayout content={DCF_CALCULATOR_CONTENT}>
      <Calculator
        title={DCF_CALCULATOR_CONTENT.title}
        description={DCF_CALCULATOR_CONTENT.description}
        inputs={DCF_CALCULATOR_CONTENT.calculator.fields}
        calculation={DCF_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DiscountedCashFlowCalculatorPage;