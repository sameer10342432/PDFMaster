
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Escalation Clause Calculator | Auto-Bid Strategy for Home Offers',
    description: 'Calculate the perfect escalation clause for your home offer. Automatically beat competing bids while protecting your maximum price. Win competitive offers strategically.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { escalationClauseCalculator } from '@/content/tools/escalation-clause-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EscalationClauseCalculatorPage = () => {
  return (
    <CalculatorLayout content={escalationClauseCalculator}>
      <EnhancedCalculator
        title={escalationClauseCalculator.title}
        slug="escalation-clause-calculator"
        category="Real Estate"
        description={escalationClauseCalculator.description}
        inputs={escalationClauseCalculator.calculator.fields}
        results={escalationClauseCalculator.calculator.results}
        calculation={escalationClauseCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EscalationClauseCalculatorPage;
