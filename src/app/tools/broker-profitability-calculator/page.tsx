
import { BROKER_PROFITABILITY_CALCULATOR_CONTENT } from '@/content/tools/broker-profitability-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BrokerProfitabilityCalculator } from '@/components/calculators/BrokerProfitabilityCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Broker Profitability (Per-Agent) Calculator',
    description: 'Calculate per-agent profitability for brokerages including desk fees, splits, overhead costs, and net profit per agent',
  };
}

const BrokerProfitabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={BROKER_PROFITABILITY_CALCULATOR_CONTENT}>
      <BrokerProfitabilityCalculator />
    </CalculatorLayout>
  );
};

export default BrokerProfitabilityCalculatorPage;
