'use client';

import { VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT } from '@/content/tools/virtual-assistant-roi-calculator';
import { Calculator } from '@/components/calculators';

export const VirtualAssistantROICalculator = () => {
  return (
    <Calculator
      title={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT.title}
      description={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT.description}
      inputs={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
