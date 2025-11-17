import { WALK_SCORE_FINDER_CONTENT } from '@/content/tools/walk-transit-bike-score-finder';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { WalkScoreFinder } from '@/components/calculators/WalkScoreFinder';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Walk Score, Transit Score & Bike Score Finder',
    description: 'Find Walk Score, Transit Score, and Bike Score for any address.',
  };
}

const WalkScoreFinderPage = () => {
  return (
    <CalculatorLayout content={WALK_SCORE_FINDER_CONTENT}>
      <WalkScoreFinder />
    </CalculatorLayout>
  );
};

export default WalkScoreFinderPage;
