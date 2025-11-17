'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT } from '@/content/tools/condo-vs-single-family-home-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CondoVsSingleFamilyHomeAnalyzerPage = () => {
  return (
    <CalculatorLayout content={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT.title}
        slug="condo-vs-single-family-home-analyzer"
        category="Homeownership Planning"
        description={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT.description}
        inputs={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT.calculator.fields}
        results={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT.calculator.results}
        calculation={CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CondoVsSingleFamilyHomeAnalyzerPage;
