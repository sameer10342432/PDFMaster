export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Buy Now vs. Wait Calculator - Real Estate Timing Analysis',
    description: 'Analyze whether to buy real estate now or wait based on price and interest rate forecasts. Calculate opportunity costs and optimal timing.',
  };
}

import { BUY_NOW_VS_WAIT_CALCULATOR_CONTENT } from '@/content/tools/buy-now-vs-wait-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BuyNowVsWaitCalculator } from '@/components/calculators/BuyNowVsWaitCalculator';

const BuyNowVsWaitCalculatorPage = () => {
  return (
    <CalculatorLayout content={BUY_NOW_VS_WAIT_CALCULATOR_CONTENT}>
      <BuyNowVsWaitCalculator />
    </CalculatorLayout>
  );
};

export default BuyNowVsWaitCalculatorPage;
