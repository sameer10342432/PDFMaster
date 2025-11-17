import { CLOSINGS_CALCULATOR_CONTENT } from '@/content/tools/closings-to-reach-goal';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClosingsCalculator } from '@/components/calculators/ClosingsCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How Many Closings to Reach Goal',
    description: 'Calculate how many closings you need to reach your income goals.',
  };
}

const ClosingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOSINGS_CALCULATOR_CONTENT}>
      <ClosingsCalculator />
    </CalculatorLayout>
  );
};

export default ClosingsCalculatorPage;
