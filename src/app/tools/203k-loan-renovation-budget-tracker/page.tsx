export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '203k Loan Renovation Budget Tracker - FHA 203k Budget Management',
    description: 'Track and manage your FHA 203k loan renovation budget with detailed cost breakdowns, contingency reserves, and loan limit compliance.',
  };
}

import { LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT } from '@/content/tools/203k-loan-renovation-budget-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { Loan203kRenovationBudgetTracker } from '@/components/calculators/Loan203kRenovationBudgetTracker';

const Loan203kRenovationBudgetTrackerPage = () => {
  return (
    <CalculatorLayout content={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT}>
      <Loan203kRenovationBudgetTracker />
    </CalculatorLayout>
  );
};

export default Loan203kRenovationBudgetTrackerPage;
