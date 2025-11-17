
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Warranty (Buyer) ROI Calculator',
    description: 'Calculate the return on investment for a home warranty plan and determine if it\'s worth the cost. Free online tool for homebuyers and homeowners.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-warranty-buyer-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeWarrantyBuyerROICalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT.title}
        slug="home-warranty-buyer-roi-calculator"
        category="Homeownership Planning"
        description={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeWarrantyBuyerROICalculatorPage;
