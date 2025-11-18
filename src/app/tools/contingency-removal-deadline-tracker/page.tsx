import { CONTINGENCY_REMOVAL_DEADLINE_TRACKER_CONTENT } from '@/content/tools/contingency-removal-deadline-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ContingencyRemovalDeadlineTracker } from '@/components/calculators/ContingencyRemovalDeadlineTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contingency Removal Deadline Tracker | Real Estate Contract Compliance Tool',
    description: 'Monitor and track all contingency deadlines including inspection, appraisal, financing, and title contingencies. Ensure timely removals and avoid contract cancellations.',
  };
}

const ContingencyRemovalDeadlineTrackerPage = () => {
  return (
    <CalculatorLayout content={CONTINGENCY_REMOVAL_DEADLINE_TRACKER_CONTENT}>
      <ContingencyRemovalDeadlineTracker />
    </CalculatorLayout>
  );
};

export default ContingencyRemovalDeadlineTrackerPage;
