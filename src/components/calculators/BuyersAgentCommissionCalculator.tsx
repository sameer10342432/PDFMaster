'use client';

import { BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/buyers-agent-commission-calculator';
import { Calculator } from '@/components/calculators';

export const BuyersAgentCommissionCalculator = () => {
  return (
    <Calculator
      title={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT.title}
      description={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT.description}
      inputs={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.fields}
      results={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.results}
      calculation={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
