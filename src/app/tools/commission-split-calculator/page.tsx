import { COMMISSION_SPLIT_CALCULATOR_CONTENT } from '@/content/tools/commission-split-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CommissionSplitCalculator } from '@/components/calculators/CommissionSplitCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Commission Split Calculator',
    description: 'Calculate commission splits between agent and broker.',
  };
}

const CommissionSplitCalculatorPage = () => {
  return (
    <CalculatorLayout content={COMMISSION_SPLIT_CALCULATOR_CONTENT}>
      <CommissionSplitCalculator />
    </CalculatorLayout>
  );
};

export default CommissionSplitCalculatorPage;
