
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Starter Home vs. Forever Home Calculator',
    description: 'Compare the 10-year financial impact of buying a starter home versus waiting to buy your dream home. Free calculator for homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT } from '@/content/tools/starter-home-vs-forever-home-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StarterHomeVsForeverHomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT.title}
        slug="starter-home-vs-forever-home-calculator"
        category="Homeownership Planning"
        description={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT.description}
        inputs={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT.calculator.fields}
        results={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT.calculator.results}
        calculation={STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StarterHomeVsForeverHomeCalculatorPage;
