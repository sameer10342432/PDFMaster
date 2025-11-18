'use client';

import { AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT } from '@/content/tools/agent-swot-analysis-generator';
import { Calculator } from '@/components/calculators';

export const AgentSwotAnalysisGenerator = () => {
  return (
    <Calculator
      title={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT.title}
      description={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT.description}
      inputs={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT.calculator.fields}
      results={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT.calculator.results}
      calculation={AGENT_SWOT_ANALYSIS_GENERATOR_CONTENT.calculator.calculate}
    />
  );
};
