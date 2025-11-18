import { REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT } from '@/content/tools/realtor-com-leads-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { RealtorComLeadsROICalculator } from '@/components/calculators/RealtorComLeadsROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Realtor.com Leads ROI Calculator - ReadyConnect Concierge Analysis | Property Tools',
    description: 'Calculate ROI for Realtor.com ReadyConnect Concierge exclusive leads. Compare cost per lead, conversion rates, and determine profitability of Realtor.com lead generation.',
  };
}

const RealtorComLeadsROICalculatorPage = () => {
  return (
    <CalculatorLayout content={REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT}>
      <RealtorComLeadsROICalculator />
    </CalculatorLayout>
  );
};

export default RealtorComLeadsROICalculatorPage;
