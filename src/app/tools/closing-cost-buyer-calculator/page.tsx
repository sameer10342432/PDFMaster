
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Buyer Closing Cost Calculator | Complete Homebuyer Closing Costs Breakdown',
    description: 'Calculate all closing costs for home buyers including loan fees, title insurance, escrow, taxes, and hidden fees. Know exactly how much cash you need to close on your home purchase.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { closingCostBuyerCalculator } from '@/content/tools/closing-cost-buyer-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostBuyerCalculatorPage = () => {
  return (
    <CalculatorLayout content={closingCostBuyerCalculator}>
      <EnhancedCalculator
        title={closingCostBuyerCalculator.title}
        slug="closing-cost-buyer-calculator"
        category="Real Estate"
        description={closingCostBuyerCalculator.description}
        inputs={closingCostBuyerCalculator.calculator.fields}
        results={closingCostBuyerCalculator.calculator.results}
        calculation={closingCostBuyerCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostBuyerCalculatorPage;
