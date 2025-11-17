'use client';

import { QUIET_NEIGHBORHOOD_FINDER_CONTENT } from '@/content/tools/quiet-neighborhood-finder';
import { Calculator } from '@/components/calculators';

export const QuietNeighborhoodFinder = () => {
  return (
    <Calculator
      title={QUIET_NEIGHBORHOOD_FINDER_CONTENT.title}
      description={QUIET_NEIGHBORHOOD_FINDER_CONTENT.description}
      inputs={QUIET_NEIGHBORHOOD_FINDER_CONTENT.calculator.fields}
      results={QUIET_NEIGHBORHOOD_FINDER_CONTENT.calculator.results}
      calculation={QUIET_NEIGHBORHOOD_FINDER_CONTENT.calculator.calculate}
    />
  );
};
