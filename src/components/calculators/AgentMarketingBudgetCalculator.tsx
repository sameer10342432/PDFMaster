'use client';

import { AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT } from '@/content/tools/agent-marketing-budget-calculator';
import { Calculator } from '@/components/calculators';

export const AgentMarketingBudgetCalculator = () => {
  return (
    <Calculator
      title={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT.title}
      description={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT.description}
      inputs={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT.calculator.fields}
      results={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT.calculator.results}
      calculation={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
