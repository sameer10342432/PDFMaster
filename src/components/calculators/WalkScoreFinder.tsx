'use client';

import { WALK_SCORE_FINDER_CONTENT } from '@/content/tools/walk-transit-bike-score-finder';
import { Calculator } from '@/components/calculators';

export const WalkScoreFinder = () => {
  return (
    <Calculator
      title={WALK_SCORE_FINDER_CONTENT.title}
      description={WALK_SCORE_FINDER_CONTENT.description}
      inputs={WALK_SCORE_FINDER_CONTENT.calculator.fields}
      results={WALK_SCORE_FINDER_CONTENT.calculator.results}
      calculation={WALK_SCORE_FINDER_CONTENT.calculator.calculate}
    />
  );
};
