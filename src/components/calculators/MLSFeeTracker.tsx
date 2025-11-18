'use client';

import { MLS_FEE_TRACKER_CONTENT } from '@/content/tools/mls-fee-tracker';
import { Calculator } from '@/components/calculators';

export const MLSFeeTracker = () => {
  return (
    <Calculator
      title={MLS_FEE_TRACKER_CONTENT.title}
      description={MLS_FEE_TRACKER_CONTENT.description}
      inputs={MLS_FEE_TRACKER_CONTENT.calculator.fields}
      results={MLS_FEE_TRACKER_CONTENT.calculator.results}
      calculation={MLS_FEE_TRACKER_CONTENT.calculator.calculate}
    />
  );
};
