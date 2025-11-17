import { AGENT_RAMP_UP_PLANNER_CONTENT } from '@/content/tools/agent-ramp-up-planner';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentRampUpPlanner } from '@/components/calculators/AgentRampUpPlanner';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent Ramp Up Planner',
    description: 'Plan your first year as a real estate agent.',
  };
}

const AgentRampUpPlannerPage = () => {
  return (
    <CalculatorLayout content={AGENT_RAMP_UP_PLANNER_CONTENT}>
      <AgentRampUpPlanner />
    </CalculatorLayout>
  );
};

export default AgentRampUpPlannerPage;
