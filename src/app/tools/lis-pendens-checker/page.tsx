import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LIS_PENDENS_CHECKER_CONTENT } from '@/content/tools/lis-pendens-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lis Pendens (Pending Lawsuit) Checker | Free Legal Property Tool',
    description: 'Assess the risk and impact of a lis pendens notice on property. Understand pending lawsuits, title clouds, and value impact. Free tool for buyers, sellers, and property owners.',
  };
}

const LisPendensCheckerPage = () => {
  return (
    <CalculatorLayout content={LIS_PENDENS_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={LIS_PENDENS_CHECKER_CONTENT.title}
        slug="lis-pendens-checker"
        category="Legal & Compliance"
        description={LIS_PENDENS_CHECKER_CONTENT.description}
        inputs={LIS_PENDENS_CHECKER_CONTENT.calculator.fields}
        results={LIS_PENDENS_CHECKER_CONTENT.calculator.results}
        calculation={LIS_PENDENS_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LisPendensCheckerPage;
