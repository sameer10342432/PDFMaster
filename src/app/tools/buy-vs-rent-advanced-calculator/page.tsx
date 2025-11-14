export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Buy vs. Rent Advanced Calculator - Complete Financial Analysis',
    description: 'Comprehensive analysis of buying vs. renting including investment opportunity costs, tax benefits, and long-term wealth building.',
  };
}

import { BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT } from '@/content/tools/buy-vs-rent-advanced-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BuyVsRentAdvancedCalculator } from '@/components/calculators/BuyVsRentAdvancedCalculator';

const BuyVsRentAdvancedCalculatorPage = () => {
  return (
    <CalculatorLayout content={BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT}>
      <BuyVsRentAdvancedCalculator />
    </CalculatorLayout>
  );
};

export default BuyVsRentAdvancedCalculatorPage;
