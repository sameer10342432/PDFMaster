import { FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT } from '@/content/tools/facebook-ads-real-estate-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { FacebookAdsRealEstateROICalculator } from '@/components/calculators/FacebookAdsRealEstateROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Facebook Ads for Real Estate ROI Calculator - Social Media Lead Gen | Property Tools',
    description: 'Calculate ROI for Facebook and Instagram ad campaigns targeting real estate leads. Analyze cost per lead, conversion rates, and optimize your social media advertising spend.',
  };
}

const FacebookAdsRealEstateROICalculatorPage = () => {
  return (
    <CalculatorLayout content={FACEBOOK_ADS_REAL_ESTATE_ROI_CALCULATOR_CONTENT}>
      <FacebookAdsRealEstateROICalculator />
    </CalculatorLayout>
  );
};

export default FacebookAdsRealEstateROICalculatorPage;
