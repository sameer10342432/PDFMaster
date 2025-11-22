import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MECHANICS_LIEN_RISK_ANALYZER_CONTENT } from '@/content/tools/mechanics-lien-risk-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mechanic\'s Lien Risk Analyzer | Free Construction Lien Tool',
    description: 'Assess mechanic\'s lien risk on your property. Calculate exposure from unpaid contractors and suppliers. Protect yourself with lien waivers and timely action. Free tool for property owners.',
  };
}

const MechanicsLienRiskAnalyzerPage = () => {
  return (
    <CalculatorLayout content={MECHANICS_LIEN_RISK_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={MECHANICS_LIEN_RISK_ANALYZER_CONTENT.title}
        slug="mechanics-lien-risk-analyzer"
        category="Legal & Compliance"
        description={MECHANICS_LIEN_RISK_ANALYZER_CONTENT.description}
        inputs={MECHANICS_LIEN_RISK_ANALYZER_CONTENT.calculator.fields}
        results={MECHANICS_LIEN_RISK_ANALYZER_CONTENT.calculator.results}
        calculation={MECHANICS_LIEN_RISK_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MechanicsLienRiskAnalyzerPage;
