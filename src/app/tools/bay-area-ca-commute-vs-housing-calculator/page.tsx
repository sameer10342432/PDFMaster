import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { bayAreaCommuteHousingContent } from '@/content/tools/bay-area-ca-commute-vs-housing-calculator';
import { Metadata } from 'next';

export const metadata: Metadata = bayAreaCommuteHousingContent.meta;

export default function BayAreaCommuteHousingPage() {
  return <EnhancedCalculator content={bayAreaCommuteHousingContent} />;
}
