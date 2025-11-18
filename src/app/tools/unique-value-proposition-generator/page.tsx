
import { UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT } from '@/content/tools/unique-value-proposition-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { UniqueValuePropositionGenerator } from '@/components/calculators/UniqueValuePropositionGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'My Unique Value Proposition (UVP) Generator',
    description: 'Create a compelling unique value proposition that differentiates you from other agents and attracts your ideal clients',
  };
}

const UniqueValuePropositionGeneratorPage = () => {
  return (
    <CalculatorLayout content={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT}>
      <UniqueValuePropositionGenerator />
    </CalculatorLayout>
  );
};

export default UniqueValuePropositionGeneratorPage;
