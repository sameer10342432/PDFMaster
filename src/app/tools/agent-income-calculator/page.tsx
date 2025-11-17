import { AGENT_INCOME_CALCULATOR_CONTENT } from '@/content/tools/agent-income-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentIncomeCalculator } from '@/components/calculators/AgentIncomeCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Agent Income Calculator',
    description: 'Calculate potential real estate agent income.',
  };
}

const AgentIncomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={AGENT_INCOME_CALCULATOR_CONTENT}>
      <AgentIncomeCalculator />
    </CalculatorLayout>
  );
};

export default AgentIncomeCalculatorPage;
