'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LLC_VS_SOLE_PROP_ANALYZER_CONTENT } from '@/content/tools/llc-vs-sole-proprietorship-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const LLCvsSolePropAnalyzer = () => {
  return (
    <CalculatorLayout content={LLC_VS_SOLE_PROP_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.title}
        slug={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.slug}
        category={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.category}
        description={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.description}
        inputs={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.fields}
        results={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.results}
        calculation={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LLCvsSolePropAnalyzer;
