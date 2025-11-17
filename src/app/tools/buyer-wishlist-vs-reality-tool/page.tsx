
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Buyer Wish List vs Reality Tool | Budget vs Expectations Calculator',
    description: 'Compare your dream home wish list with what you can actually afford. Prioritize must-have features vs nice-to-haves and make realistic buying decisions within your budget.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { buyerWishlistVsRealityCalculator } from '@/content/tools/buyer-wishlist-vs-reality-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BuyerWishlistVsRealityPage = () => {
  return (
    <CalculatorLayout content={buyerWishlistVsRealityCalculator}>
      <EnhancedCalculator
        title={buyerWishlistVsRealityCalculator.title}
        slug="buyer-wishlist-vs-reality-tool"
        category="Real Estate"
        description={buyerWishlistVsRealityCalculator.description}
        inputs={buyerWishlistVsRealityCalculator.calculator.fields}
        results={buyerWishlistVsRealityCalculator.calculator.results}
        calculation={buyerWishlistVsRealityCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BuyerWishlistVsRealityPage;
