
import { DRONE_PHOTOGRAPHY_ROI_CALCULATOR_CONTENT } from '@/content/tools/drone-photography-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { DronePhotographyROICalculator } from '@/components/calculators/DronePhotographyROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Drone Photography ROI Calculator | Real Estate Aerial Photography Returns',
    description: 'Calculate the ROI of drone photography for real estate listings. Analyze cost vs increased sale prices, faster sales, and competitive advantages with aerial photos.',
  };
}

const DronePhotographyROICalculatorPage = () => {
  return (
    <CalculatorLayout content={DRONE_PHOTOGRAPHY_ROI_CALCULATOR_CONTENT}>
      <DronePhotographyROICalculator />
    </CalculatorLayout>
  );
};

export default DronePhotographyROICalculatorPage;
