'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SELLER_CLOSING_COST_ESTIMATOR_CONTENT } from '@/content/tools/seller-closing-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SellerClosingCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={SELLER_CLOSING_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={SELLER_CLOSING_COST_ESTIMATOR_CONTENT.title}
        slug="seller-closing-cost-estimator"
        category="Seller Tools"
        description={SELLER_CLOSING_COST_ESTIMATOR_CONTENT.description}
        inputs={SELLER_CLOSING_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={SELLER_CLOSING_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={SELLER_CLOSING_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SellerClosingCostEstimatorPage;
