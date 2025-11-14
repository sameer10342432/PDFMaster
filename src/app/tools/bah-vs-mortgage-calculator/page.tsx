import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BAH_VS_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/bah-vs-mortgage-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BAH vs. Mortgage Calculator - Free Property Tools',
    description: 'Compare military BAH against mortgage payments. Determine home affordability, BAH coverage, and out-of-pocket expenses. Free calculator for service members.',
  };
}

const BAHVsMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={BAH_VS_MORTGAGE_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default BAHVsMortgageCalculatorPage;
