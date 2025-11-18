'use client';

import { CRM_ROI_CALCULATOR_CONTENT } from '@/content/tools/crm-roi-calculator';
import { Calculator } from '@/components/calculators';

export const CRMROICalculator = () => {
  return (
    <Calculator
      title={CRM_ROI_CALCULATOR_CONTENT.title}
      description={CRM_ROI_CALCULATOR_CONTENT.description}
      inputs={CRM_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={CRM_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={CRM_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
