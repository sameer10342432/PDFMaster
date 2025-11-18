'use client';

import { BROKER_PROFITABILITY_CALCULATOR_CONTENT } from '@/content/tools/broker-profitability-calculator';
import { Calculator } from '@/components/calculators';

export const BrokerProfitabilityCalculator = () => {
  return (
    <Calculator
      title={BROKER_PROFITABILITY_CALCULATOR_CONTENT.title}
      description={BROKER_PROFITABILITY_CALCULATOR_CONTENT.description}
      inputs={BROKER_PROFITABILITY_CALCULATOR_CONTENT.calculator.fields}
      results={BROKER_PROFITABILITY_CALCULATOR_CONTENT.calculator.results}
      calculation={BROKER_PROFITABILITY_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
