import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { houstonMudFeeContent } from '@/content/tools/houston-tx-mud-fee-calculator';
import { Metadata } from 'next';

export const metadata: Metadata = houstonMudFeeContent.meta;

export default function HoustonMudFeePage() {
  return <EnhancedCalculator content={houstonMudFeeContent} />;
}
