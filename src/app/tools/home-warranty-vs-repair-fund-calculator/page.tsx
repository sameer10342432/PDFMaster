export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Warranty vs. Repair Fund Calculator - Compare Protection Options',
    description: 'Compare the costs of home warranties versus building your own repair fund. Analyze total costs, investment growth, and break-even points.',
  };
}

import { HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT } from '@/content/tools/home-warranty-vs-repair-fund-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { HomeWarrantyVsRepairFundCalculator } from '@/components/calculators/HomeWarrantyVsRepairFundCalculator';

const HomeWarrantyVsRepairFundCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT}>
      <HomeWarrantyVsRepairFundCalculator />
    </CalculatorLayout>
  );
};

export default HomeWarrantyVsRepairFundCalculatorPage;
