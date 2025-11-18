import { PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT } from '@/content/tools/ppc-real-estate-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { PPCRealEstateROICalculator } from '@/components/calculators/PPCRealEstateROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PPC for Real Estate ROI Calculator - Google Ads Investment Analysis | Property Tools',
    description: 'Calculate return on investment for Google Ads and pay-per-click campaigns in real estate. Analyze cost per click, conversion rates, and optimize your PPC advertising budget.',
  };
}

const PPCRealEstateROICalculatorPage = () => {
  return (
    <CalculatorLayout content={PPC_REAL_ESTATE_ROI_CALCULATOR_CONTENT}>
      <PPCRealEstateROICalculator />
    </CalculatorLayout>
  );
};

export default PPCRealEstateROICalculatorPage;
