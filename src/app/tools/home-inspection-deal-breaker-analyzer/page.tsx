
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Inspection Deal Breaker Analyzer | Should I Walk Away or Negotiate?',
    description: 'Analyze home inspection findings to determine if issues are deal-breakers or negotiable. Calculate repair costs and decide whether to walk away, negotiate, or proceed with purchase.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { homeInspectionDealBreakerAnalyzer } from '@/content/tools/home-inspection-deal-breaker-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeInspectionDealBreakerPage = () => {
  return (
    <CalculatorLayout content={homeInspectionDealBreakerAnalyzer}>
      <EnhancedCalculator
        title={homeInspectionDealBreakerAnalyzer.title}
        slug="home-inspection-deal-breaker-analyzer"
        category="Real Estate"
        description={homeInspectionDealBreakerAnalyzer.description}
        inputs={homeInspectionDealBreakerAnalyzer.calculator.fields}
        results={homeInspectionDealBreakerAnalyzer.calculator.results}
        calculation={homeInspectionDealBreakerAnalyzer.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeInspectionDealBreakerPage;
