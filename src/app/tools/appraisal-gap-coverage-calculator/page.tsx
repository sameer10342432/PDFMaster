
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Appraisal Gap Coverage Calculator | Low Appraisal Strategy Tool',
    description: 'Calculate how much appraisal gap coverage to offer when buying a home. Protect yourself from low appraisals while making competitive offers in hot markets.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { appraisalGapCoverageCalculator } from '@/content/tools/appraisal-gap-coverage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AppraisalGapCoverageCalculatorPage = () => {
  return (
    <CalculatorLayout content={appraisalGapCoverageCalculator}>
      <EnhancedCalculator
        title={appraisalGapCoverageCalculator.title}
        slug="appraisal-gap-coverage-calculator"
        category="Real Estate"
        description={appraisalGapCoverageCalculator.description}
        inputs={appraisalGapCoverageCalculator.calculator.fields}
        results={appraisalGapCoverageCalculator.calculator.results}
        calculation={appraisalGapCoverageCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AppraisalGapCoverageCalculatorPage;
