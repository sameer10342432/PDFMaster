export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Inspection Repair Credit Calculator - Negotiate Fair Repair Credits',
    description: 'Calculate repair credits and negotiate concessions based on home inspection findings. Analyze repair costs, market conditions, and closing impacts.',
  };
}

import { HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT } from '@/content/tools/home-inspection-repair-credit-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { HomeInspectionRepairCreditCalculator } from '@/components/calculators/HomeInspectionRepairCreditCalculator';

const HomeInspectionRepairCreditCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT}>
      <HomeInspectionRepairCreditCalculator />
    </CalculatorLayout>
  );
};

export default HomeInspectionRepairCreditCalculatorPage;
