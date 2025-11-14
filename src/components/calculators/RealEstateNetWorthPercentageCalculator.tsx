'use client';

import { REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT } from '@/content/tools/real-estate-net-worth-percentage-calculator';
import { Calculator } from '@/components/calculators';

export const RealEstateNetWorthPercentageCalculator = () => {
  return (
    <Calculator
      title={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT.title}
      description={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT.description}
      inputs={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT.calculator.fields}
      results={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT.calculator.results}
      calculation={REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
