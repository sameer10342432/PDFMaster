import type { Metadata } from 'next';
import { CoolRoofReflectiveROICalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cool Roof ROI Calculator - Reflective Roofing Savings | Property Tools',
    description: 'Calculate energy savings and ROI for reflective cool roofing systems. Analyze costs, cooling reduction, and payback period.',
  };
}

export default function CoolRoofROICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CoolRoofReflectiveROICalculator />
    </div>
  );
}
