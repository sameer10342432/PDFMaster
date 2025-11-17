'use client';

import { AGENT_INCOME_CALCULATOR_CONTENT } from '@/content/tools/agent-income-calculator';
import { Calculator } from '@/components/calculators';

export const AgentIncomeCalculator = () => {
  return (
    <Calculator
      title={AGENT_INCOME_CALCULATOR_CONTENT.title}
      description={AGENT_INCOME_CALCULATOR_CONTENT.description}
      inputs={AGENT_INCOME_CALCULATOR_CONTENT.calculator.fields}
      results={AGENT_INCOME_CALCULATOR_CONTENT.calculator.results}
      calculation={AGENT_INCOME_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
