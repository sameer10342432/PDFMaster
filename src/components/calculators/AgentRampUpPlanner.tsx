'use client';

import { AGENT_RAMP_UP_PLANNER_CONTENT } from '@/content/tools/agent-ramp-up-planner';
import { Calculator } from '@/components/calculators';

export const AgentRampUpPlanner = () => {
  return (
    <Calculator
      title={AGENT_RAMP_UP_PLANNER_CONTENT.title}
      description={AGENT_RAMP_UP_PLANNER_CONTENT.description}
      inputs={AGENT_RAMP_UP_PLANNER_CONTENT.calculator.fields}
      results={AGENT_RAMP_UP_PLANNER_CONTENT.calculator.results}
      calculation={AGENT_RAMP_UP_PLANNER_CONTENT.calculator.calculate}
    />
  );
};
