'use client';

import { exchange1031Calculator as EXCHANGE_CALCULATOR_CONTENT } from '@/content/tools/1031-exchange-calculator';
import { Calculator } from '@/components/calculators';

export const ExchangeCalculator = () => {
  return (
    <Calculator
      title={EXCHANGE_CALCULATOR_CONTENT.title}
      description={EXCHANGE_CALCULATOR_CONTENT.description}
      inputs={EXCHANGE_CALCULATOR_CONTENT.calculator.fields}
      results={EXCHANGE_CALCULATOR_CONTENT.calculator.results}
      calculation={EXCHANGE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};