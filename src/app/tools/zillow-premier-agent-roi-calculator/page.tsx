import { ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT } from '@/content/tools/zillow-premier-agent-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ZillowPremierAgentROICalculator } from '@/components/calculators/ZillowPremierAgentROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Zillow Premier Agent ROI Calculator - Lead Generation Cost Analysis | Property Tools',
    description: 'Calculate return on investment for Zillow Premier Agent advertising. Analyze lead costs, conversion rates, and determine if Zillow leads are profitable for your real estate business.',
  };
}

const ZillowPremierAgentROICalculatorPage = () => {
  return (
    <CalculatorLayout content={ZILLOW_PREMIER_AGENT_ROI_CALCULATOR_CONTENT}>
      <ZillowPremierAgentROICalculator />
    </CalculatorLayout>
  );
};

export default ZillowPremierAgentROICalculatorPage;
