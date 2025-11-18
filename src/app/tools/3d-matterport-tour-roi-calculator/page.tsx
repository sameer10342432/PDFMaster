
import { MATTERPORT_TOUR_ROI_CALCULATOR_CONTENT } from '@/content/tools/3d-matterport-tour-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { MatterportTourROICalculator } from '@/components/calculators/MatterportTourROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '3D Matterport Tour ROI Calculator | Virtual Tour Investment Analysis',
    description: 'Calculate the ROI of 3D virtual tours for real estate. Analyze cost vs increased engagement, sale prices, and time savings from Matterport and virtual staging.',
  };
}

const MatterportTourROICalculatorPage = () => {
  return (
    <CalculatorLayout content={MATTERPORT_TOUR_ROI_CALCULATOR_CONTENT}>
      <MatterportTourROICalculator />
    </CalculatorLayout>
  );
};

export default MatterportTourROICalculatorPage;
