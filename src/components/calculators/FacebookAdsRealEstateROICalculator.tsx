'use client';

import { FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT } from '@/content/tools/facebook-ads-real-estate-roi-calculator';
import { Calculator } from '@/components/calculators';

export const FacebookAdsRealEstateROICalculator = () => {
  return (
    <Calculator
      title={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT.title}
      description={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT.description}
      inputs={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
