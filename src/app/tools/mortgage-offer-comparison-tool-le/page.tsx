
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mortgage Offer Comparison Tool (LE)',
    description: 'Compare multiple mortgage Loan Estimates side-by-side to find the best deal based on rate, fees, and total costs. Free comparison tool for homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT } from '@/content/tools/mortgage-offer-comparison-tool-le';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MortgageOfferComparisonToolLEPage = () => {
  return (
    <CalculatorLayout content={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT}>
      <EnhancedCalculator
        title={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT.title}
        slug="mortgage-offer-comparison-tool-le"
        category="Homeownership Planning"
        description={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT.description}
        inputs={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT.calculator.fields}
        results={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT.calculator.results}
        calculation={MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageOfferComparisonToolLEPage;
