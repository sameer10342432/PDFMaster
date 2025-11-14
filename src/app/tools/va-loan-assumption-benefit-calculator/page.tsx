import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { VA_LOAN_ASSUMPTION_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/va-loan-assumption-benefit-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'VA Loan Assumption Benefit Calculator - Free Property Tools',
    description: 'Calculate savings from assuming an existing VA loan vs. getting a new mortgage. Compare interest rates, payments, and lifetime savings. Free VA loan assumption calculator.',
  };
}

const VALoanAssumptionBenefitCalculatorPage = () => {
  return (
    <CalculatorLayout content={VA_LOAN_ASSUMPTION_BENEFIT_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default VALoanAssumptionBenefitCalculatorPage;
