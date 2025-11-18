import type { Metadata } from 'next';
import { NetZeroHomeCostCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Net Zero Home Cost Calculator - Zero Energy Building | Property Tools',
    description: 'Estimate total costs to build or retrofit a net zero energy home including solar, insulation, and energy-efficient systems.',
  };
}

export default function NetZeroHomeCostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <NetZeroHomeCostCalculator />
    </div>
  );
}
