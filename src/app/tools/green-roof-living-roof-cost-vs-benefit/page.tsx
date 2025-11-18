import type { Metadata } from 'next';
import { GreenRoofCostVsBenefitCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Green Roof Cost vs Benefit Calculator - Living Roof Analysis | Property Tools',
    description: 'Analyze costs and benefits of installing a green roof including energy savings, stormwater management, and environmental impact.',
  };
}

export default function GreenRoofCostVsBenefitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GreenRoofCostVsBenefitCalculator />
    </div>
  );
}
