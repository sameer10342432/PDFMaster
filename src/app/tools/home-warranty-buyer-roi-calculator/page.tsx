'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
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
