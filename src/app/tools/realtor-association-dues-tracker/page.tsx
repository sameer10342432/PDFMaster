import { REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT } from '@/content/tools/realtor-association-dues-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { RealtorAssociationDuesTracker } from '@/components/calculators/RealtorAssociationDuesTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Realtor Association Dues Tracker - NAR, State & Local Fees Calculator | Property Tools',
    description: 'Calculate total realtor association dues including NAR, state, and local board memberships. Track all your real estate association fees and membership costs in one place.',
  };
}

const RealtorAssociationDuesTrackerPage = () => {
  return (
    <CalculatorLayout content={REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT}>
      <RealtorAssociationDuesTracker />
    </CalculatorLayout>
  );
};

export default RealtorAssociationDuesTrackerPage;
