export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Renovation Punch List Generator - Track Renovation Tasks & Costs',
    description: 'Create and track renovation tasks with cost estimates, timeline management, and comprehensive budget tracking for home improvement projects.',
  };
}

import { RENOVATION_PUNCH_LIST_GENERATOR_CONTENT } from '@/content/tools/renovation-punch-list-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { RenovationPunchListGenerator } from '@/components/calculators/RenovationPunchListGenerator';

const RenovationPunchListGeneratorPage = () => {
  return (
    <CalculatorLayout content={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT}>
      <RenovationPunchListGenerator />
    </CalculatorLayout>
  );
};

export default RenovationPunchListGeneratorPage;
