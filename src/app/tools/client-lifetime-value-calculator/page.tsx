import { CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT } from '@/content/tools/client-lifetime-value-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClientLifetimeValueCalculator } from '@/components/calculators/ClientLifetimeValueCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Client Lifetime Value (CLV) Calculator | Real Estate Client Worth',
    description: 'Calculate the total lifetime value of your real estate clients including repeat business, referrals, and long-term relationship potential.',
  };
}

const ClientLifetimeValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT}>
      <ClientLifetimeValueCalculator />
    </CalculatorLayout>
  );
};

export default ClientLifetimeValueCalculatorPage;
