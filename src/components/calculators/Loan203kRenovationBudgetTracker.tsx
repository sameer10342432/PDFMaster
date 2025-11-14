'use client';

import { LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT } from '@/content/tools/203k-loan-renovation-budget-tracker';
import { Calculator } from '@/components/calculators';

export const Loan203kRenovationBudgetTracker = () => {
  return (
    <Calculator
      title={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT.title}
      description={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT.description}
      inputs={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT.calculator.fields}
      results={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT.calculator.results}
      calculation={LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT.calculator.calculate}
    />
  );
};
