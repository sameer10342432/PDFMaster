import { QUIET_NEIGHBORHOOD_FINDER_CONTENT } from '@/content/tools/quiet-neighborhood-finder';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { QuietNeighborhoodFinder } from '@/components/calculators/QuietNeighborhoodFinder';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Quiet Neighborhood Finder',
    description: 'Assess noise pollution levels in any neighborhood.',
  };
}

const QuietNeighborhoodFinderPage = () => {
  return (
    <CalculatorLayout content={QUIET_NEIGHBORHOOD_FINDER_CONTENT}>
      <QuietNeighborhoodFinder />
    </CalculatorLayout>
  );
};

export default QuietNeighborhoodFinderPage;
