import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { dallasPropertyTaxAnalyzerContent } from '@/content/tools/dallas-tx-property-tax-rate-analyzer';
import { Metadata } from 'next';

export const metadata: Metadata = dallasPropertyTaxAnalyzerContent.meta;

export default function DallasPropertyTaxAnalyzerPage() {
  return <EnhancedCalculator content={dallasPropertyTaxAnalyzerContent} />;
}
