
import { CLIENT_ONBOARDING_CHECKLIST_BUYER_CONTENT } from '@/content/tools/client-onboarding-checklist-buyer';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClientOnboardingChecklistBuyer } from '@/components/calculators/ClientOnboardingChecklistBuyer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Client Onboarding Checklist (Buyer) | Home Buyer Process Guide',
    description: 'Comprehensive buyer client onboarding checklist ensuring smooth process from first contact to closing with all necessary steps, documents, and communications.',
  };
}

const ClientOnboardingChecklistBuyerPage = () => {
  return (
    <CalculatorLayout content={CLIENT_ONBOARDING_CHECKLIST_BUYER_CONTENT}>
      <ClientOnboardingChecklistBuyer />
    </CalculatorLayout>
  );
};

export default ClientOnboardingChecklistBuyerPage;
