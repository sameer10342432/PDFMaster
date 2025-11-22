import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PREPAYMENT_PENALTY_CALCULATOR_CONTENT } from '@/content/tools/prepayment-penalty-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Prepayment Penalty Calculator | Free Mortgage Refinance Tool',
    description: 'Calculate prepayment penalties for paying off your mortgage early or refinancing. Compare penalty costs to potential savings and determine break-even point. Free calculator for homeowners.',
  };
}

const PrepaymentPenaltyCalculatorPage = () => {
  return (
    <CalculatorLayout content={PREPAYMENT_PENALTY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PREPAYMENT_PENALTY_CALCULATOR_CONTENT.title}
        slug="prepayment-penalty-calculator"
        category="Financial Analysis"
        description={PREPAYMENT_PENALTY_CALCULATOR_CONTENT.description}
        inputs={PREPAYMENT_PENALTY_CALCULATOR_CONTENT.calculator.fields}
        results={PREPAYMENT_PENALTY_CALCULATOR_CONTENT.calculator.results}
        calculation={PREPAYMENT_PENALTY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PrepaymentPenaltyCalculatorPage;
