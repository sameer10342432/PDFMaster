'use client';

import { UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT } from '@/content/tools/unique-value-proposition-generator';
import { Calculator } from '@/components/calculators';

export const UniqueValuePropositionGenerator = () => {
  return (
    <Calculator
      title={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT.title}
      description={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT.description}
      inputs={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT.calculator.fields}
      results={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT.calculator.results}
      calculation={UNIQUE_VALUE_PROPOSITION_GENERATOR_CONTENT.calculator.calculate}
    />
  );
};
