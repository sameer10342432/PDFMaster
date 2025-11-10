'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROPERTY_TAX_APPEAL_ANALYZER_CONTENT } from '@/content/tools/property-tax-appeal-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyTaxAppealAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.title}
        slug="property-tax-appeal-analyzer"
        category="Financial Planning"
        description={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.description}
        inputs={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.fields}
        results={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.results}
        calculation={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyTaxAppealAnalyzerPage;
