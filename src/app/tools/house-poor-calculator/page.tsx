export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'House Poor Calculator - Mortgage vs. Lifestyle Balance',
    description: 'Determine if your housing costs are limiting your lifestyle and financial flexibility. Analyze housing cost ratios and discretionary income.',
  };
}

import { HOUSE_POOR_CALCULATOR_CONTENT } from '@/content/tools/house-poor-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { HousePoorCalculator } from '@/components/calculators/HousePoorCalculator';

const HousePoorCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOUSE_POOR_CALCULATOR_CONTENT}>
      <HousePoorCalculator />
    </CalculatorLayout>
  );
};

export default HousePoorCalculatorPage;
