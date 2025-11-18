'use client';

import { CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT } from '@/content/tools/client-lifetime-value-calculator';
import { Calculator } from '@/components/calculators';

export const ClientLifetimeValueCalculator = () => {
  return (
    <Calculator
      title={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT.title}
      description={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT.description}
      inputs={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT.calculator.fields}
      results={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT.calculator.results}
      calculation={CLIENT_LIFETIME_VALUE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
