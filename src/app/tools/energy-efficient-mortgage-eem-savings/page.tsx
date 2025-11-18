import type { Metadata } from 'next';
import { EnergyEfficientMortgageEEMSavingsCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Energy Efficient Mortgage Calculator - EEM Savings | Property Tools',
    description: 'Calculate potential savings and financing options with Energy Efficient Mortgages for green home improvements.',
  };
}

export default function EnergyEfficientMortgageSavingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <EnergyEfficientMortgageEEMSavingsCalculator />
    </div>
  );
}
