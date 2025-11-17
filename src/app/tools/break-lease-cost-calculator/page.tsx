
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Should I Break My Lease? Cost Calculator | Breaking Lease Penalty Calculator',
    description: 'Calculate the total cost of breaking your lease early including penalties, remaining rent, forfeited deposits, and relocation costs. Make an informed decision about lease termination.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { breakLeaseCalculator } from '@/content/tools/break-lease-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BreakLeaseCalculatorPage = () => {
  return (
    <CalculatorLayout content={breakLeaseCalculator}>
      <EnhancedCalculator
        title={breakLeaseCalculator.title}
        slug="break-lease-cost-calculator"
        category="Real Estate"
        description={breakLeaseCalculator.description}
        inputs={breakLeaseCalculator.calculator.fields}
        results={breakLeaseCalculator.calculator.results}
        calculation={breakLeaseCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BreakLeaseCalculatorPage;
