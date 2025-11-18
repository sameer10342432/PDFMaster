import { SOLAR_PANEL_ROI_CALCULATOR_REAL_ESTATE_CONTENT } from '@/content/tools/solar-panel-roi-calculator-real-estate';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SolarPanelRoiCalculatorRealEstate } from '@/components/calculators/SolarPanelRoiCalculatorRealEstate';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Solar Panel ROI Calculator (Real Estate) | Home Solar Investment Returns',
    description: 'Calculate ROI on solar panel installation for residential properties. Analyze savings, payback period, increased home value, and long-term returns for solar energy investments.',
  };
}

const SolarPanelRoiCalculatorRealEstatePage = () => {
  return (
    <CalculatorLayout content={SOLAR_PANEL_ROI_CALCULATOR_REAL_ESTATE_CONTENT}>
      <SolarPanelRoiCalculatorRealEstate />
    </CalculatorLayout>
  );
};

export default SolarPanelRoiCalculatorRealEstatePage;
