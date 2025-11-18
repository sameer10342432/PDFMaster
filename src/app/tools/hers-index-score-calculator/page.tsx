import type { Metadata } from 'next';
import { HERSIndexScoreCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HERS Index Score Calculator - Home Energy Rating System | Property Tools',
    description: 'Calculate your HERS Index score and estimate energy efficiency improvements needed for better home energy ratings.',
  };
}

export default function HERSIndexScoreCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HERSIndexScoreCalculator />
    </div>
  );
}
