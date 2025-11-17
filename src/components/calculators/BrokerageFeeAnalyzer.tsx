'use client';

import { BROKERAGE_FEE_ANALYZER_CONTENT } from '@/content/tools/brokerage-fee-analyzer';
import { Calculator } from '@/components/calculators';

export const BrokerageFeeAnalyzer = () => {
  return (
    <Calculator
      title={BROKERAGE_FEE_ANALYZER_CONTENT.title}
      description={BROKERAGE_FEE_ANALYZER_CONTENT.description}
      inputs={BROKERAGE_FEE_ANALYZER_CONTENT.calculator.fields}
      results={BROKERAGE_FEE_ANALYZER_CONTENT.calculator.results}
      calculation={BROKERAGE_FEE_ANALYZER_CONTENT.calculator.calculate}
    />
  );
};
