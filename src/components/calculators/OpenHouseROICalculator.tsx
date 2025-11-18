'use client';

import { OPEN_HOUSE_ROI_CALCULATOR_CONTENT } from '@/content/tools/open-house-roi-calculator';
import { Calculator } from '@/components/calculators';

export const OpenHouseROICalculator = () => {
  return (
    <Calculator
      title={OPEN_HOUSE_ROI_CALCULATOR_CONTENT.title}
      description={OPEN_HOUSE_ROI_CALCULATOR_CONTENT.description}
      inputs={OPEN_HOUSE_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={OPEN_HOUSE_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={OPEN_HOUSE_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
