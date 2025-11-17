import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { denverAduFeasibilityContent } from '@/content/tools/denver-co-adu-feasibility-checker';
import { Metadata } from 'next';

export const metadata: Metadata = denverAduFeasibilityContent.meta;

export default function DenverAduFeasibilityPage() {
  return <EnhancedCalculator content={denverAduFeasibilityContent} />;
}
