import { AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT } from '@/content/tools/agent-marketing-budget-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentMarketingBudgetCalculator } from '@/components/calculators/AgentMarketingBudgetCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Agent Marketing Budget Calculator | Property Tools',
    description: 'Calculate recommended marketing budget for real estate agents based on income goals and business stage. Get strategic allocation for digital, traditional, and content marketing.',
  };
}

const AgentMarketingBudgetCalculatorPage = () => {
  return (
    <CalculatorLayout content={AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT}>
      <AgentMarketingBudgetCalculator />
    </CalculatorLayout>
  );
};

export default AgentMarketingBudgetCalculatorPage;
