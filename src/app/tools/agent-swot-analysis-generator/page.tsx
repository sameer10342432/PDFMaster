
import { AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT } from '@/content/tools/agent-swot-analysis-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentSwotAnalysisGenerator } from '@/components/calculators/AgentSwotAnalysisGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent SWOT Analysis Generator',
    description: 'Generate a comprehensive SWOT analysis identifying your Strengths, Weaknesses, Opportunities, and Threats as a real estate agent',
  };
}

const AgentSWOTAnalysisGeneratorPage = () => {
  return (
    <CalculatorLayout content={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT}>
      <AgentSwotAnalysisGenerator />
    </CalculatorLayout>
  );
};

export default AgentSWOTAnalysisGeneratorPage;
