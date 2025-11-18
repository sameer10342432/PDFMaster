import type { Metadata } from 'next';
import { GeothermalHeatingCoolingROICalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Geothermal HVAC ROI Calculator - Heat Pump Savings Analysis | Property Tools',
    description: 'Calculate geothermal heat pump installation costs, energy savings, and ROI with payback period and federal tax credits.',
  };
}

export default function GeothermalROICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GeothermalHeatingCoolingROICalculator />
    </div>
  );
}
