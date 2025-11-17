
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lender Stress Test Calculator (US Version)',
    description: 'Calculate if you can afford your mortgage under lender stress test scenarios with higher interest rates. Free calculator for homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LENDER_STRESS_TEST_CALCULATOR_US_CONTENT } from '@/content/tools/lender-stress-test-calculator-us';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LenderStressTestCalculatorUSPage = () => {
  return (
    <CalculatorLayout content={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT}>
      <EnhancedCalculator
        title={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT.title}
        slug="lender-stress-test-calculator-us"
        category="Homeownership Planning"
        description={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT.description}
        inputs={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT.calculator.fields}
        results={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT.calculator.results}
        calculation={LENDER_STRESS_TEST_CALCULATOR_US_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LenderStressTestCalculatorUSPage;
