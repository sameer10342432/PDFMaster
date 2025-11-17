
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Home vs. Resale Home Cost Analyzer',
    description: 'Compare the total cost of ownership between buying a new construction home versus a resale property. Make informed decisions with our free calculator.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT } from '@/content/tools/new-home-vs-resale-home-cost-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewHomeVsResaleHomeCostAnalyzerPage = () => {
  return (
    <CalculatorLayout content={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT.title}
        slug="new-home-vs-resale-home-cost-analyzer"
        category="Homeownership Planning"
        description={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT.description}
        inputs={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT.calculator.fields}
        results={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT.calculator.results}
        calculation={NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewHomeVsResaleHomeCostAnalyzerPage;
