import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SEASONING_REQUIREMENT_CHECKER_CONTENT } from '@/content/tools/seasoning-requirement-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seasoning Requirement (Flipping) Checker | Free Real Estate Tool',
    description: 'Check seasoning requirements for property flips and rapid resales. Avoid financing issues with FHA, VA, and conventional loans. Free tool for real estate investors and flippers.',
  };
}

const SeasoningRequirementCheckerPage = () => {
  return (
    <CalculatorLayout content={SEASONING_REQUIREMENT_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={SEASONING_REQUIREMENT_CHECKER_CONTENT.title}
        slug="seasoning-requirement-checker"
        category="Legal & Compliance"
        description={SEASONING_REQUIREMENT_CHECKER_CONTENT.description}
        inputs={SEASONING_REQUIREMENT_CHECKER_CONTENT.calculator.fields}
        results={SEASONING_REQUIREMENT_CHECKER_CONTENT.calculator.results}
        calculation={SEASONING_REQUIREMENT_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SeasoningRequirementCheckerPage;
