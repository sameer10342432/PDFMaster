import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { phoenixHeatIslandContent } from '@/content/tools/phoenix-az-heat-island-effect-cost';
import { Metadata } from 'next';

export const metadata: Metadata = phoenixHeatIslandContent.meta;

export default function PhoenixHeatIslandPage() {
  return <EnhancedCalculator content={phoenixHeatIslandContent} />;
}
