import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ACCELERATION_CLAUSE_ANALYZER_CONTENT } from '@/content/tools/acceleration-clause-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Acceleration Clause Analyzer | Free Mortgage Default Tool',
    description: 'Understand mortgage acceleration clauses and default scenarios. Calculate arrears, explore options, and get guidance for loan reinstatement or alternatives. Free tool for homeowners.',
  };
}

const AccelerationClauseAnalyzerPage = () => {
  return (
    <CalculatorLayout content={ACCELERATION_CLAUSE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={ACCELERATION_CLAUSE_ANALYZER_CONTENT.title}
        slug="acceleration-clause-analyzer"
        category="Legal & Compliance"
        description={ACCELERATION_CLAUSE_ANALYZER_CONTENT.description}
        inputs={ACCELERATION_CLAUSE_ANALYZER_CONTENT.calculator.fields}
        results={ACCELERATION_CLAUSE_ANALYZER_CONTENT.calculator.results}
        calculation={ACCELERATION_CLAUSE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AccelerationClauseAnalyzerPage;
