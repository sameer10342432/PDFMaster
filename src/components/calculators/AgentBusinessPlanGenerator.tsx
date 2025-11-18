'use client';

import { AGENT_BUSINESS_PLAN_GENERATOR_CONTENT } from '@/content/tools/agent-business-plan-generator';
import { Calculator } from '@/components/calculators';

export const AgentBusinessPlanGenerator = () => {
  return (
    <Calculator
      title={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT.title}
      description={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT.description}
      inputs={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT.calculator.fields}
      results={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT.calculator.results}
      calculation={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT.calculator.calculate}
    />
  );
};
