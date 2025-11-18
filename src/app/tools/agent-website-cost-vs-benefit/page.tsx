
import { AGENT_WEBSITE_COST_VS_BENEFIT_CONTENT } from '@/content/tools/agent-website-cost-vs-benefit';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentWebsiteCostVsBenefitCalculator } from '@/components/calculators/AgentWebsiteCostVsBenefitCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent Website Cost vs. Benefit Calculator | Real Estate ROI Analysis Tool',
    description: 'Calculate the ROI of having a professional real estate agent website. Compare costs against lead generation value, analyze break-even points, and measure cost per transaction.',
  };
}

const AgentWebsiteCostVsBenefitPage = () => {
  return (
    <CalculatorLayout content={AGENT_WEBSITE_COST_VS_BENEFIT_CONTENT}>
      <AgentWebsiteCostVsBenefitCalculator />
    </CalculatorLayout>
  );
};

export default AgentWebsiteCostVsBenefitPage;
