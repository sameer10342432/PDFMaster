import { CRM_ROI_CALCULATOR_CONTENT } from '@/content/tools/crm-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CRMROICalculator } from '@/components/calculators/CRMROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CRM ROI Calculator | Real Estate Customer Relationship Manager Return on Investment',
    description: 'Calculate the return on investment for your real estate CRM system and analyze cost savings, productivity gains, and revenue improvements.',
  };
}

const CRMROICalculatorPage = () => {
  return (
    <CalculatorLayout content={CRM_ROI_CALCULATOR_CONTENT}>
      <CRMROICalculator />
    </CalculatorLayout>
  );
};

export default CRMROICalculatorPage;
