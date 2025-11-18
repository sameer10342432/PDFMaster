import { UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT } from '@/content/tools/unique-value-proposition-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'My Unique Value Proposition (UVP) Generator',
    description: 'Create a compelling unique value proposition that differentiates you from other agents and attracts your ideal clients',
  };
}

const UniqueValuePropositionGeneratorPage = () => {
  return (
    <CalculatorLayout content={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT}>
      <GenericCalculator content={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT} />
    </CalculatorLayout>
  );
};

export default UniqueValuePropositionGeneratorPage;
