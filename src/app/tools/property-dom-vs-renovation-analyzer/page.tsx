export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Days on Market vs. Renovation Analyzer - Optimize Sale Strategy',
    description: 'Analyze whether renovations will reduce days on market and maximize sale price. Compare selling as-is versus renovating first.',
  };
}

import { PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT } from '@/content/tools/property-dom-vs-renovation-analyzer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { PropertyDomVsRenovationAnalyzer } from '@/components/calculators/PropertyDomVsRenovationAnalyzer';

const PropertyDomVsRenovationAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT}>
      <PropertyDomVsRenovationAnalyzer />
    </CalculatorLayout>
  );
};

export default PropertyDomVsRenovationAnalyzerPage;
