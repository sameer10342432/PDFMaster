import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CORPORATE_HOUSING_RENTAL_CALCULATOR_CONTENT } from '@/content/tools/corporate-housing-rental-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Corporate Housing Rental Calculator - Free Property Tools',
    description: 'Analyze profitability of corporate housing rentals for business travelers and relocating professionals. Calculate monthly rates, occupancy, cash flow, and ROI. Free calculator.',
  };
}

const CorporateHousingRentalCalculatorPage = () => {
  return (
    <CalculatorLayout content={CORPORATE_HOUSING_RENTAL_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default CorporateHousingRentalCalculatorPage;
