'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT } from '@/content/tools/gifts-for-down-payment-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GiftsForDownPaymentTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT.title}
        slug="gifts-for-down-payment-tax-calculator"
        category="Homeownership Planning"
        description={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT.description}
        inputs={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GiftsForDownPaymentTaxCalculatorPage;
