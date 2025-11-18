'use client';

import { STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/staging-certification-roi-calculator';
import { Calculator } from '@/components/calculators';

export const StagingCertificationRoiCalculator = () => {
  return (
    <Calculator
      title={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT.title}
      description={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT.description}
      inputs={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
