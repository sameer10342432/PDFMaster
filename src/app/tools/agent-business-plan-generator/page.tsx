import { AGENT_BUSINESS_PLAN_GENERATOR_CONTENT } from '@/content/tools/agent-business-plan-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent Business Plan Generator',
    description: 'Generate a comprehensive real estate business plan including income goals, marketing strategies, lead generation plans, and financial projections',
  };
}

const AgentBusinessPlanGeneratorPage = () => {
  return (
    <CalculatorLayout content={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT}>
      <GenericCalculator content={AGENT_BUSINESS_PLAN_GENERATOR_CONTENT} />
    </CalculatorLayout>
  );
};

export default AgentBusinessPlanGeneratorPage;
