export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Retirement Savings with Real Estate Calculator - Complete Retirement Planning',
    description: 'Plan retirement savings strategy incorporating real estate equity, rental income, and traditional retirement accounts for comprehensive planning.',
  };
}

import { RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/retirement-savings-with-real-estate-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { RetirementSavingsWithRealEstateCalculator } from '@/components/calculators/RetirementSavingsWithRealEstateCalculator';

const RetirementSavingsWithRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT}>
      <RetirementSavingsWithRealEstateCalculator />
    </CalculatorLayout>
  );
};

export default RetirementSavingsWithRealEstateCalculatorPage;
