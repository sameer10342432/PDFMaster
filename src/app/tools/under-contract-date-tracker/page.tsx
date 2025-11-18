import { UNDER_CONTRACT_DATE_TRACKER_CONTENT } from '@/content/tools/under-contract-date-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { UnderContractDateTracker } from '@/components/calculators/UnderContractDateTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Under Contract Date Tracker | Real Estate Transaction Timeline Manager',
    description: 'Track all critical dates and deadlines from contract acceptance to closing day. Never miss an important milestone with automated timeline tracking and deadline reminders.',
  };
}

const UnderContractDateTrackerPage = () => {
  return (
    <CalculatorLayout content={UNDER_CONTRACT_DATE_TRACKER_CONTENT}>
      <UnderContractDateTracker />
    </CalculatorLayout>
  );
};

export default UnderContractDateTrackerPage;
