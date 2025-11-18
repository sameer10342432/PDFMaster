'use client';

import { REFERRAL_PARTNER_TRACKER_CONTENT } from '@/content/tools/referral-partner-tracker';
import { Calculator } from '@/components/calculators';

export const ReferralPartnerTracker = () => {
  return (
    <Calculator
      title={REFERRAL_PARTNER_TRACKER_CONTENT.title}
      description={REFERRAL_PARTNER_TRACKER_CONTENT.description}
      inputs={REFERRAL_PARTNER_TRACKER_CONTENT.calculator.fields}
      results={REFERRAL_PARTNER_TRACKER_CONTENT.calculator.results}
      calculation={REFERRAL_PARTNER_TRACKER_CONTENT.calculator.calculate}
    />
  );
};
