'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DOWN_PAYMENT_CALCULATOR_CONTENT } from '@/content/tools/down-payment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DownPaymentCalculatorPage = () => {
  return (
    <CalculatorLayout content={DOWN_PAYMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DOWN_PAYMENT_CALCULATOR_CONTENT.title}
        slug="down-payment-calculator"
        category="Mortgage"
        description={DOWN_PAYMENT_CALCULATOR_CONTENT.description}
        inputs={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.fields}
        results={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DownPaymentCalculatorPage;