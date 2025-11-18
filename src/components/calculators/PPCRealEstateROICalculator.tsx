'use client';

import { PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT } from '@/content/tools/ppc-real-estate-roi-calculator';
import { Calculator } from '@/components/calculators';

export const PPCRealEstateROICalculator = () => {
  return (
    <Calculator
      title={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT.title}
      description={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT.description}
      inputs={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
