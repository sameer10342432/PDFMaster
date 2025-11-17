'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_FEE_VS_AMENITIES_VALUE_CONTENT } from '@/content/tools/hoa-fee-vs-amenities-value';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOAFeeVsAmenitiesValuePage = () => {
  return (
    <CalculatorLayout content={HOA_FEE_VS_AMENITIES_VALUE_CONTENT}>
      <EnhancedCalculator
        title={HOA_FEE_VS_AMENITIES_VALUE_CONTENT.title}
        slug="hoa-fee-vs-amenities-value"
        category="Homeownership Planning"
        description={HOA_FEE_VS_AMENITIES_VALUE_CONTENT.description}
        inputs={HOA_FEE_VS_AMENITIES_VALUE_CONTENT.calculator.fields}
        results={HOA_FEE_VS_AMENITIES_VALUE_CONTENT.calculator.results}
        calculation={HOA_FEE_VS_AMENITIES_VALUE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOAFeeVsAmenitiesValuePage;
