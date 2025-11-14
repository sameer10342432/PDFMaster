'use client';

import { RENOVATION_PUNCH_LIST_GENERATOR_CONTENT } from '@/content/tools/renovation-punch-list-generator';
import { Calculator } from '@/components/calculators';

export const RenovationPunchListGenerator = () => {
  return (
    <Calculator
      title={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT.title}
      description={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT.description}
      inputs={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT.calculator.fields}
      results={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT.calculator.results}
      calculation={RENOVATION_PUNCH_LIST_GENERATOR_CONTENT.calculator.calculate}
    />
  );
};
