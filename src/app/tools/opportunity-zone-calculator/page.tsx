'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { OPPORTUNITY_ZONE_CALCULATOR_CONTENT } from '@/content/tools/opportunity-zone-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OpportunityZoneCalculatorPage = () => {
  return (
    <CalculatorLayout content={OPPORTUNITY_ZONE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OPPORTUNITY_ZONE_CALCULATOR_CONTENT.title}
        slug="opportunity-zone-calculator"
        category="Investment Analysis"
        description={OPPORTUNITY_ZONE_CALCULATOR_CONTENT.description}
        inputs={OPPORTUNITY_ZONE_CALCULATOR_CONTENT.calculator.fields}
        results={OPPORTUNITY_ZONE_CALCULATOR_CONTENT.calculator.results}
        calculation={OPPORTUNITY_ZONE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OpportunityZoneCalculatorPage;
