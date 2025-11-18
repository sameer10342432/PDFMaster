import { AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT } from '@/content/tools/agent-team-split-vs-salary-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentTeamSplitVsSalaryCalculator } from '@/components/calculators/AgentTeamSplitVsSalaryCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent Team Split vs. Salary Calculator | Real Estate Team Compensation',
    description: 'Compare commission split versus salary compensation models for building and managing your real estate team to determine the most profitable structure.',
  };
}

const AgentTeamSplitVsSalaryCalculatorPage = () => {
  return (
    <CalculatorLayout content={AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT}>
      <AgentTeamSplitVsSalaryCalculator />
    </CalculatorLayout>
  );
};

export default AgentTeamSplitVsSalaryCalculatorPage;
