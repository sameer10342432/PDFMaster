import { ENERGY_STAR_APPLIANCE_ROI_CALCULATOR_CONTENT } from '@/content/tools/energy-star-appliance-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EnergyStarApplianceRoiCalculator } from '@/components/calculators/EnergyStarApplianceRoiCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Energy Star Appliance ROI Calculator | Energy Efficient Appliance Savings',
    description: 'Calculate ROI and payback period for Energy Star certified appliances. Compare energy savings, utility cost reductions, and environmental benefits vs standard appliances.',
  };
}

const EnergyStarApplianceRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={ENERGY_STAR_APPLIANCE_ROI_CALCULATOR_CONTENT}>
      <EnergyStarApplianceRoiCalculator />
    </CalculatorLayout>
  );
};

export default EnergyStarApplianceRoiCalculatorPage;
