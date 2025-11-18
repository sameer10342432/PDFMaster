import { CLIENT_ONBOARDING_CHECKLIST_SELLER_CONTENT } from '@/content/tools/client-onboarding-checklist-seller';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClientOnboardingChecklistSeller } from '@/components/calculators/ClientOnboardingChecklistSeller';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Client Onboarding Checklist (Seller) | Home Seller Process Guide',
    description: 'Comprehensive seller client onboarding checklist ensuring smooth listing process from first contact to closing with all necessary steps, documents, and marketing strategies.',
  };
}

const ClientOnboardingChecklistSellerPage = () => {
  return (
    <CalculatorLayout content={CLIENT_ONBOARDING_CHECKLIST_SELLER_CONTENT}>
      <ClientOnboardingChecklistSeller />
    </CalculatorLayout>
  );
};

export default ClientOnboardingChecklistSellerPage;
