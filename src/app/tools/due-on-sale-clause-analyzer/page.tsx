import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT } from '@/content/tools/due-on-sale-clause-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Due on Sale Clause Analyzer | Free Creative Financing Tool',
    description: 'Analyze due-on-sale clause implications for property transfers. Understand risks, exemptions, and creative financing strategies like subject-to purchases. Free tool for investors and buyers.',
  };
}

const DueOnSaleClauseAnalyzerPage = () => {
  return (
    <CalculatorLayout content={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT.title}
        slug="due-on-sale-clause-analyzer"
        category="Legal & Compliance"
        description={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT.description}
        inputs={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT.calculator.fields}
        results={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT.calculator.results}
        calculation={DUE_ON_SALE_CLAUSE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DueOnSaleClauseAnalyzerPage;
