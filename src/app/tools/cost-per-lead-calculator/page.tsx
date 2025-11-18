import { COST_PER_LEAD_CALCULATOR_CONTENT } from '@/content/tools/cost-per-lead-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CostPerLeadCalculator } from '@/components/calculators/CostPerLeadCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cost Per Lead (CPL) Calculator | Real Estate Marketing ROI',
    description: 'Calculate your marketing cost per lead and optimize your real estate lead generation budget across different channels.',
  };
}

const CostPerLeadCalculatorPage = () => {
  return (
    <CalculatorLayout content={COST_PER_LEAD_CALCULATOR_CONTENT}>
      <CostPerLeadCalculator />
    </CalculatorLayout>
  );
};

export default CostPerLeadCalculatorPage;
