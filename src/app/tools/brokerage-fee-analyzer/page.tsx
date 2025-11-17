import { BROKERAGE_FEE_ANALYZER_CONTENT } from '@/content/tools/brokerage-fee-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BrokerageFeeAnalyzer } from '@/components/calculators/BrokerageFeeAnalyzer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Brokerage Fee Structure Analyzer',
    description: 'Compare desk fee vs commission split brokerage models.',
  };
}

const BrokerageFeeAnalyzerPage = () => {
  return (
    <CalculatorLayout content={BROKERAGE_FEE_ANALYZER_CONTENT}>
      <BrokerageFeeAnalyzer />
    </CalculatorLayout>
  );
};

export default BrokerageFeeAnalyzerPage;
