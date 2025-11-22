import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { USURY_LAW_CHECKER_CONTENT } from '@/content/tools/usury-law-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Usury Law (Loan Shark) Checker by State | Free Legal Tool',
    description: 'Check if an interest rate violates usury laws. Find maximum legal interest rates by state and protect yourself from predatory lending. Free tool for borrowers.',
  };
}

const UsuryLawCheckerPage = () => {
  return (
    <CalculatorLayout content={USURY_LAW_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={USURY_LAW_CHECKER_CONTENT.title}
        slug="usury-law-checker"
        category="Legal & Compliance"
        description={USURY_LAW_CHECKER_CONTENT.description}
        inputs={USURY_LAW_CHECKER_CONTENT.calculator.fields}
        results={USURY_LAW_CHECKER_CONTENT.calculator.results}
        calculation={USURY_LAW_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UsuryLawCheckerPage;
