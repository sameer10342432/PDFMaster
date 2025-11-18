import { GO_SOLAR_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/go-solar-savings-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { GoSolarSavingsCalculator } from '@/components/calculators/GoSolarSavingsCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Go Solar Savings Calculator | Monthly & Lifetime Solar Energy Savings',
    description: 'Calculate monthly and lifetime savings from switching to solar energy. Compare current electricity costs vs solar panel savings with federal tax credits and state incentives.',
  };
}

const GoSolarSavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={GO_SOLAR_SAVINGS_CALCULATOR_CONTENT}>
      <GoSolarSavingsCalculator />
    </CalculatorLayout>
  );
};

export default GoSolarSavingsCalculatorPage;
