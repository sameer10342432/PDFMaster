import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { FURNISHED_VS_UNFURNISHED_RENTAL_ROI_CONTENT } from '@/content/tools/furnished-vs-unfurnished-rental-roi';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Furnished vs. Unfurnished Rental ROI Calculator - Free Property Tools',
    description: 'Compare ROI between furnished and unfurnished rental properties. Calculate furniture costs, rental premiums, cash flow, and breakeven period. Free comparison calculator.',
  };
}

const FurnishedVsUnfurnishedRentalROIPage = () => {
  return (
    <CalculatorLayout content={FURNISHED_VS_UNFURNISHED_RENTAL_ROI_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default FurnishedVsUnfurnishedRentalROIPage;
