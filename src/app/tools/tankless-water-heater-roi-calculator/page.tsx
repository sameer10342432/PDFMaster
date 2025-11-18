import type { Metadata } from 'next';
import { TanklessWaterHeaterROICalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tankless Water Heater ROI Calculator - On-Demand vs Tank | Property Tools',
    description: 'Compare tankless water heater costs vs traditional tank systems including energy savings, lifespan, and ROI.',
  };
}

export default function TanklessWaterHeaterROIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TanklessWaterHeaterROICalculator />
    </div>
  );
}
