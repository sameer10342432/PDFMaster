'use client';

import { SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT } from '@/content/tools/sphere-of-influence-potential-calculator';
import { Calculator } from '@/components/calculators';

export const SphereOfInfluencePotentialCalculator = () => {
  return (
    <Calculator
      title={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT.title}
      description={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT.description}
      inputs={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT.calculator.fields}
      results={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT.calculator.results}
      calculation={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
