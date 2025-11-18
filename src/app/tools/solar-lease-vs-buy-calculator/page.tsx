import { SOLAR_LEASE_VS_BUY_CALCULATOR_CONTENT } from '@/content/tools/solar-lease-vs-buy-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SolarLeaseVsBuyCalculator } from '@/components/calculators/SolarLeaseVsBuyCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Solar Lease vs Buy Calculator | Solar Financing Options Comparison',
    description: 'Compare leasing vs buying solar panels for your home. Analyze upfront costs, monthly payments, long-term savings, and ownership benefits to make the best decision.',
  };
}

const SolarLeaseVsBuyCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOLAR_LEASE_VS_BUY_CALCULATOR_CONTENT}>
      <SolarLeaseVsBuyCalculator />
    </CalculatorLayout>
  );
};

export default SolarLeaseVsBuyCalculatorPage;
