'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT } from '@/content/tools/cost-to-build-house-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CostToBuildHouseEstimatorPage = () => {
  return (
    <CalculatorLayout content={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT.title}
        slug="cost-to-build-house-estimator"
        category="Advanced Analytics"
        description={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT.description}
        inputs={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT.calculator.fields}
        results={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT.calculator.results}
        calculation={COST_TO_BUILD_HOUSE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CostToBuildHouseEstimatorPage;
