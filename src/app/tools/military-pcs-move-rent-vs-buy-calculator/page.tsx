import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { MILITARY_PCS_MOVE_RENT_VS_BUY_CALCULATOR_CONTENT } from '@/content/tools/military-pcs-move-rent-vs-buy-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Military (PCS) Move Rent vs. Buy Calculator - Free Property Tools',
    description: 'Help military families decide whether to rent or buy during PCS moves. Compare BAH coverage, tour length, equity building, and future rental income. Free military housing calculator.',
  };
}

const MilitaryPCSMoveRentVsBuyCalculatorPage = () => {
  return (
    <CalculatorLayout content={MILITARY_PCS_MOVE_RENT_VS_BUY_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default MilitaryPCSMoveRentVsBuyCalculatorPage;
