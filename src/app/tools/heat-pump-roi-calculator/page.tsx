import type { Metadata } from 'next';
import { HeatPumpROICalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Heat Pump ROI Calculator - Air-Source HVAC Savings | Property Tools',
    description: 'Calculate heat pump costs, energy savings, and ROI vs traditional HVAC including federal tax credits and utility rebates.',
  };
}

export default function HeatPumpROICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeatPumpROICalculator />
    </div>
  );
}
