
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Townhouse vs. Condo Analyzer',
    description: 'Compare ownership costs, maintenance responsibilities, and investment potential between townhouses and condos. Free calculator for homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT } from '@/content/tools/townhouse-vs-condo-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TownhouseVsCondoAnalyzerPage = () => {
  return (
    <CalculatorLayout content={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT.title}
        slug="townhouse-vs-condo-analyzer"
        category="Homeownership Planning"
        description={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT.description}
        inputs={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT.calculator.fields}
        results={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT.calculator.results}
        calculation={TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TownhouseVsCondoAnalyzerPage;
