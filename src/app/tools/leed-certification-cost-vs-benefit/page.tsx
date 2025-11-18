import type { Metadata } from 'next';
import { LEEDCertificationCostVsBenefitCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'LEED Certification Cost vs Benefit Calculator - Green Building ROI | Property Tools',
    description: 'Analyze LEED certification costs, process timeline, and benefits including property value increase and operational savings.',
  };
}

export default function LEEDCertificationCostVsBenefitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <LEEDCertificationCostVsBenefitCalculator />
    </div>
  );
}
