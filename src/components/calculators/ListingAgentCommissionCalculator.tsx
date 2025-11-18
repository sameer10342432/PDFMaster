'use client';

import { LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/listing-agent-commission-calculator';
import { Calculator } from '@/components/calculators';

export const ListingAgentCommissionCalculator = () => {
  return (
    <Calculator
      title={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT.title}
      description={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT.description}
      inputs={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.fields}
      results={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.results}
      calculation={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
