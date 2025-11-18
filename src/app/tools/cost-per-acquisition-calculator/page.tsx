import { COST_PER_ACQUISITION_CALCULATOR_CONTENT } from '@/content/tools/cost-per-acquisition-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CostPerAcquisitionCalculator } from '@/components/calculators/CostPerAcquisitionCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cost Per Acquisition (CPA) Calculator | Real Estate Client Acquisition Costs',
    description: 'Calculate your cost per acquisition for real estate clients and optimize your marketing spend to maximize profitability.',
  };
}

const CostPerAcquisitionCalculatorPage = () => {
  return (
    <CalculatorLayout content={COST_PER_ACQUISITION_CALCULATOR_CONTENT}>
      <CostPerAcquisitionCalculator />
    </CalculatorLayout>
  );
};

export default CostPerAcquisitionCalculatorPage;
