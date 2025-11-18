'use client';

import { AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT } from '@/content/tools/agent-team-split-vs-salary-calculator';
import { Calculator } from '@/components/calculators';

export const AgentTeamSplitVsSalaryCalculator = () => {
  return (
    <Calculator
      title={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT.title}
      description={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT.description}
      inputs={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT.calculator.fields}
      results={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT.calculator.results}
      calculation={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
