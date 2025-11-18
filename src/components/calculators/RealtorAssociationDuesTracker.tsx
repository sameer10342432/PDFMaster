'use client';

import { REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT } from '@/content/tools/realtor-association-dues-tracker';
import { Calculator } from '@/components/calculators';

export const RealtorAssociationDuesTracker = () => {
  return (
    <Calculator
      title={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT.title}
      description={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT.description}
      inputs={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT.calculator.fields}
      results={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT.calculator.results}
      calculation={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT.calculator.calculate}
    />
  );
};
