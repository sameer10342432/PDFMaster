import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { lasVegasWaterSmartContent } from '@/content/tools/las-vegas-nv-water-smart-landscape-rebate';
import { Metadata } from 'next';

export const metadata: Metadata = lasVegasWaterSmartContent.meta;

export default function LasVegasWaterSmartPage() {
  return <EnhancedCalculator content={lasVegasWaterSmartContent} />;
}
