import type { Metadata } from 'next';
import { CashForClunkersApplianceRebateFinderCalculator } from '@/components/calculators';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Appliance Rebate Finder - Cash for Clunkers Energy Savings | Property Tools',
    description: 'Find available rebates for energy-efficient appliances including federal, state, and utility incentive programs.',
  };
}

export default function CashForClunkersApplianceRebatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CashForClunkersApplianceRebateFinderCalculator />
    </div>
  );
}
