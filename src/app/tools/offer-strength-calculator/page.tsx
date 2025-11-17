
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Offer Strength Calculator | Home Offer Competitiveness Score',
    description: 'Calculate how competitive your home offer is by weighing price, contingencies, closing timeline, and other terms. Win in multiple offer situations with strategic offers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { offerStrengthCalculator } from '@/content/tools/offer-strength-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OfferStrengthCalculatorPage = () => {
  return (
    <CalculatorLayout content={offerStrengthCalculator}>
      <EnhancedCalculator
        title={offerStrengthCalculator.title}
        slug="offer-strength-calculator"
        category="Real Estate"
        description={offerStrengthCalculator.description}
        inputs={offerStrengthCalculator.calculator.fields}
        results={offerStrengthCalculator.calculator.results}
        calculation={offerStrengthCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OfferStrengthCalculatorPage;
