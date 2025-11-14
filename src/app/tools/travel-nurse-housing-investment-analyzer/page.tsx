import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { TRAVEL_NURSE_HOUSING_INVESTMENT_ANALYZER_CONTENT } from '@/content/tools/travel-nurse-housing-investment-analyzer';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Travel Nurse Housing Investment Analyzer - Free Property Tools',
    description: 'Analyze rental investments targeting travel nurses and medical professionals. Calculate premium rates, occupancy, cash flow, and ROI for medical housing. Free calculator.',
  };
}

const TravelNurseHousingInvestmentAnalyzerPage = () => {
  return (
    <CalculatorLayout content={TRAVEL_NURSE_HOUSING_INVESTMENT_ANALYZER_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default TravelNurseHousingInvestmentAnalyzerPage;
