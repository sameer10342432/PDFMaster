export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate as % of Net Worth Calculator - Portfolio Diversification',
    description: 'Analyze your real estate holdings as a percentage of total net worth. Assess portfolio diversification and concentration risk.',
  };
}

import { REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT } from '@/content/tools/real-estate-net-worth-percentage-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { RealEstateNetWorthPercentageCalculator } from '@/components/calculators/RealEstateNetWorthPercentageCalculator';

const RealEstateNetWorthPercentageCalculatorPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT}>
      <RealEstateNetWorthPercentageCalculator />
    </CalculatorLayout>
  );
};

export default RealEstateNetWorthPercentageCalculatorPage;
