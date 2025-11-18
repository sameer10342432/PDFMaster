
import { REFERRAL_PARTNER_TRACKER_CONTENT } from '@/content/tools/referral-partner-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ReferralPartnerTracker } from '@/components/calculators/ReferralPartnerTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Referral Partner (Loan Officer) Tracker',
    description: 'Track and manage relationships with loan officers, mortgage brokers, and other referral partners including lead exchanges and closed deals',
  };
}

const ReferralPartnerTrackerPage = () => {
  return (
    <CalculatorLayout content={REFERRAL_PARTNER_TRACKER_CONTENT}>
      <ReferralPartnerTracker />
    </CalculatorLayout>
  );
};

export default ReferralPartnerTrackerPage;
