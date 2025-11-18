'use client';

import { TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/transaction-coordinator-cost-vs-benefit-calculator';
import { Calculator } from '@/components/calculators';

export const TransactionCoordinatorCostVsBenefitCalculator = () => {
  return (
    <Calculator
      title={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT.title}
      description={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT.description}
      inputs={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT.calculator.fields}
      results={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT.calculator.results}
      calculation={TRANSACTION_COORDINATOR_COST_VS_BENEFIT_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
