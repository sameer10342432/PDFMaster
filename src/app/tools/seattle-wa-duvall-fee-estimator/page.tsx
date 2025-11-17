import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { seattleDuvallFeeContent } from '@/content/tools/seattle-wa-duvall-fee-estimator';
import { Metadata } from 'next';

export const metadata: Metadata = seattleDuvallFeeContent.meta;

export default function SeattleDuvallFeePage() {
  return <EnhancedCalculator content={seattleDuvallFeeContent} />;
}
