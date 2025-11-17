
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seller Closing Cost Calculator | How Much Will I Net From Home Sale?',
    description: 'Calculate seller closing costs including realtor commissions, title fees, taxes, and payoffs. Find out your net proceeds from selling your home after all expenses.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { closingCostSellerCalculator } from '@/content/tools/closing-cost-seller-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostSellerCalculatorPage = () => {
  return (
    <CalculatorLayout content={closingCostSellerCalculator}>
      <EnhancedCalculator
        title={closingCostSellerCalculator.title}
        slug="closing-cost-seller-calculator"
        category="Real Estate"
        description={closingCostSellerCalculator.description}
        inputs={closingCostSellerCalculator.calculator.fields}
        results={closingCostSellerCalculator.calculator.results}
        calculation={closingCostSellerCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostSellerCalculatorPage;
