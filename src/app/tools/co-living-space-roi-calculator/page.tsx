import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CO_LIVING_SPACE_ROI_CALCULATOR_CONTENT } from '@/content/tools/co-living-space-roi-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Co-Living Space ROI Calculator - Free Property Tools',
    description: 'Calculate ROI for co-living properties with private bedrooms and shared common areas. Analyze rental income, amenity costs, and cash flow. Free calculator for co-living investors.',
  };
}

const CoLivingSpaceROICalculatorPage = () => {
  return (
    <CalculatorLayout content={CO_LIVING_SPACE_ROI_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default CoLivingSpaceROICalculatorPage;
