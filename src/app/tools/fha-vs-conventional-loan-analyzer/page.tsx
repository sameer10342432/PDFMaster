'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FHA_VS_CONVENTIONAL_ANALYZER_CONTENT } from '@/content/tools/fha-vs-conventional-loan-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FHAvsConventionalAnalyzerPage = () => {
  return (
    <CalculatorLayout content={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.title}
        slug="fha-vs-conventional-loan-analyzer"
        category="Basic Calculators"
        description={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.description}
        inputs={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.calculator.fields}
        results={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.calculator.results}
        calculation={FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FHAvsConventionalAnalyzerPage;

export function generateMetadata() {
  return {
    title: FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.metaTitle || FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.title,
    description: FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.metaDescription || FHA_VS_CONVENTIONAL_ANALYZER_CONTENT.description,
  };
}
