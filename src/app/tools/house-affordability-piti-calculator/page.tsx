
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How Much House Can I Afford Calculator | PITI + Utilities + Real Costs',
    description: 'Calculate how much house you can really afford including PITI (Principal, Interest, Taxes, Insurance), HOA fees, utilities, maintenance, and all hidden homeownership costs.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { houseAffordabilityPITICalculator } from '@/content/tools/house-affordability-piti-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HouseAffordabilityPITIPage = () => {
  return (
    <CalculatorLayout content={houseAffordabilityPITICalculator}>
      <EnhancedCalculator
        title={houseAffordabilityPITICalculator.title}
        slug="house-affordability-piti-calculator"
        category="Real Estate"
        description={houseAffordabilityPITICalculator.description}
        inputs={houseAffordabilityPITICalculator.calculator.fields}
        results={houseAffordabilityPITICalculator.calculator.results}
        calculation={houseAffordabilityPITICalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HouseAffordabilityPITIPage;
