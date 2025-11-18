import { BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/buyers-agent-commission-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BuyersAgentCommissionCalculator } from '@/components/calculators/BuyersAgentCommissionCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Buyer's Agent Commission Calculator | Real Estate Earnings Calculator",
    description: "Calculate buyer's agent commission earnings including split structures, transaction fees, and net take-home pay from buyer representation deals.",
  };
}

const BuyersAgentCommissionCalculatorPage = () => {
  return (
    <CalculatorLayout content={BUYERS_AGENT_COMMISSION_CALCULATOR_CONTENT}>
      <BuyersAgentCommissionCalculator />
    </CalculatorLayout>
  );
};

export default BuyersAgentCommissionCalculatorPage;
