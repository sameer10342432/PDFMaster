'use client';

import { REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT } from '@/content/tools/realtor-com-leads-roi-calculator';
import { Calculator } from '@/components/calculators';

export const RealtorComLeadsROICalculator = () => {
  return (
    <Calculator
      title={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT.title}
      description={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT.description}
      inputs={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
