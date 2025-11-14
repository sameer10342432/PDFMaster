import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { UPSIZING_AFFORDABILITY_CALCULATOR_CONTENT } from '@/content/tools/upsizing-affordability-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Upsizing Affordability Calculator - Free Property Tools',
    description: 'Determine if you can afford to upsize to a larger home. Calculate equity transfer, new mortgage payments, DTI ratio, and budget impact. Free upsizing calculator.',
  };
}

const UpsizingAffordabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={UPSIZING_AFFORDABILITY_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default UpsizingAffordabilityCalculatorPage;
