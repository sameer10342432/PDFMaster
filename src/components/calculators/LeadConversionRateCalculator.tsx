'use client';

import { LEAD_CONVERSION_RATE_CALCULATOR_CONTENT } from '@/content/tools/lead-conversion-rate-calculator';
import { Calculator } from '@/components/calculators';

export const LeadConversionRateCalculator = () => {
  return (
    <Calculator
      title={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT.title}
      description={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT.description}
      inputs={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT.calculator.fields}
      results={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT.calculator.results}
      calculation={LEAD_CONVERSION_RATE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
