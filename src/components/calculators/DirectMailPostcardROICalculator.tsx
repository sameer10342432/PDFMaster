'use client';

import { DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT } from '@/content/tools/direct-mail-postcard-roi-calculator';
import { Calculator } from '@/components/calculators';

export const DirectMailPostcardROICalculator = () => {
  return (
    <Calculator
      title={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT.title}
      description={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT.description}
      inputs={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
