'use client';

import { CONTINUING_EDUCATION_TRACKER_CONTENT } from '@/content/tools/continuing-education-tracker';
import { Calculator } from '@/components/calculators';

export const ContinuingEducationTracker = () => {
  return (
    <Calculator
      title={CONTINUING_EDUCATION_TRACKER_CONTENT.title}
      description={CONTINUING_EDUCATION_TRACKER_CONTENT.description}
      inputs={CONTINUING_EDUCATION_TRACKER_CONTENT.calculator.fields}
      results={CONTINUING_EDUCATION_TRACKER_CONTENT.calculator.results}
      calculation={CONTINUING_EDUCATION_TRACKER_CONTENT.calculator.calculate}
    />
  );
};
