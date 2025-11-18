
import { AGENT_BUSINESS_PLAN_GENERATOR_CONTENT } from '@/content/tools/agent-business-plan-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentBusinessPlanGenerator } from '@/components/calculators/AgentBusinessPlanGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent Business Plan Generator',
    description: 'Generate a comprehensive real estate business plan including income goals, marketing strategies, lead generation plans, and financial projections',
  };
}

const AgentBusinessPlanGeneratorPage = () => {
  return (
    <CalculatorLayout content={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT}>
      <AgentBusinessPlanGenerator />
    </CalculatorLayout>
  );
};

export default AgentBusinessPlanGeneratorPage;
