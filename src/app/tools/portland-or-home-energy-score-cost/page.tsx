import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { portlandHomeEnergyScoreContent } from '@/content/tools/portland-or-home-energy-score-cost';
import { Metadata } from 'next';

export const metadata: Metadata = portlandHomeEnergyScoreContent.meta;

export default function PortlandHomeEnergyScorePage() {
  return <EnhancedCalculator content={portlandHomeEnergyScoreContent} />;
}
