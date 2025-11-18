import { OPEN_HOUSE_ROI_CALCULATOR_CONTENT } from '@/content/tools/open-house-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { OpenHouseROICalculator } from '@/components/calculators/OpenHouseROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Open House ROI Calculator - Lead Generation & Marketing Analysis | Property Tools',
    description: 'Calculate return on investment for open houses as a lead generation strategy. Analyze costs, lead capture rates, conversion rates, and maximize your open house effectiveness.',
  };
}

const OpenHouseROICalculatorPage = () => {
  return (
    <CalculatorLayout content={OPEN_HOUSE_ROI_CALCULATOR_CONTENT}>
      <OpenHouseROICalculator />
    </CalculatorLayout>
  );
};

export default OpenHouseROICalculatorPage;
