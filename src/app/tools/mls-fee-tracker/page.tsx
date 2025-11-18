import { MLS_FEE_TRACKER_CONTENT } from '@/content/tools/mls-fee-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { MLSFeeTracker } from '@/components/calculators/MLSFeeTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MLS Fee Tracker - Calculate Total MLS Costs for Real Estate Agents | Property Tools',
    description: 'Track and calculate total MLS fees including membership, listing fees, and additional services. Understand your complete Multiple Listing Service costs per year and per listing.',
  };
}

const MLSFeeTrackerPage = () => {
  return (
    <CalculatorLayout content={MLS_FEE_TRACKER_CONTENT}>
      <MLSFeeTracker />
    </CalculatorLayout>
  );
};

export default MLSFeeTrackerPage;
