'use client';

import { ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT } from '@/content/tools/zillow-premier-agent-roi-calculator';
import { Calculator } from '@/components/calculators';

export const ZillowPremierAgentROICalculator = () => {
  return (
    <Calculator
      title={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT.title}
      description={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT.description}
      inputs={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
