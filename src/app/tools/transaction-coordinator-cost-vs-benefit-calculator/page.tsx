import { TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/transaction-coordinator-cost-vs-benefit-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { TransactionCoordinatorCostVsBenefitCalculator } from '@/components/calculators/TransactionCoordinatorCostVsBenefitCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Transaction Coordinator (TC) Cost vs. Benefit Calculator | TC ROI',
    description: 'Calculate the ROI of hiring a transaction coordinator by analyzing time savings, increased capacity, and stress reduction versus the cost of TC services.',
  };
}

const TransactionCoordinatorCostVsBenefitCalculatorPage = () => {
  return (
    <CalculatorLayout content={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT}>
      <TransactionCoordinatorCostVsBenefitCalculator />
    </CalculatorLayout>
  );
};

export default TransactionCoordinatorCostVsBenefitCalculatorPage;
