
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Saving for a Down Payment Timeline Calculator',
    description: 'Calculate how long it will take to save for a down payment and track your progress toward homeownership. Free calculator for first-time buyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT } from '@/content/tools/saving-for-down-payment-timeline-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SavingForDownPaymentTimelineCalculatorPage = () => {
  return (
    <CalculatorLayout content={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT.title}
        slug="saving-for-down-payment-timeline-calculator"
        category="Homeownership Planning"
        description={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT.description}
        inputs={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT.calculator.fields}
        results={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT.calculator.results}
        calculation={SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SavingForDownPaymentTimelineCalculatorPage;
