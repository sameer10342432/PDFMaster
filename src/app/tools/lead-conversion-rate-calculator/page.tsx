import { LEAD_CONVERSION_RATE_CALCULATOR_CONTENT } from '@/content/tools/lead-conversion-rate-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { LeadConversionRateCalculator } from '@/components/calculators/LeadConversionRateCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lead Conversion Rate Calculator | Real Estate Sales Funnel Optimization',
    description: 'Calculate and analyze your real estate lead conversion rates across different stages of the sales funnel to optimize your conversion strategy.',
  };
}

const LeadConversionRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT}>
      <LeadConversionRateCalculator />
    </CalculatorLayout>
  );
};

export default LeadConversionRateCalculatorPage;
