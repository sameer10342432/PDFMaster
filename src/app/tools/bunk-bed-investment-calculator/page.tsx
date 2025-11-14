import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BUNK_BED_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/bunk-bed-investment-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '"Bunk Bed" Investment Calculator (High-Density Rentals) - Free Property Tools',
    description: 'Analyze high-density rental investments with bunk bed configurations. Calculate ROI, cash flow, and profitability for shared housing properties. Free calculator for real estate investors.',
  };
}

const BunkBedInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={BUNK_BED_INVESTMENT_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default BunkBedInvestmentCalculatorPage;
