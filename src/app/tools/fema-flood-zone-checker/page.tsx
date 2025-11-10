'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FEMA_FLOOD_ZONE_CHECKER_CONTENT } from '@/content/tools/fema-flood-zone-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const FEMAFloodZoneChecker = () => {
  return (
    <CalculatorLayout content={FEMA_FLOOD_ZONE_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={FEMA_FLOOD_ZONE_CHECKER_CONTENT.title}
        slug={FEMA_FLOOD_ZONE_CHECKER_CONTENT.slug}
        category={FEMA_FLOOD_ZONE_CHECKER_CONTENT.category}
        description={FEMA_FLOOD_ZONE_CHECKER_CONTENT.description}
        inputs={FEMA_FLOOD_ZONE_CHECKER_CONTENT.calculator.fields}
        results={FEMA_FLOOD_ZONE_CHECKER_CONTENT.calculator.results}
        calculation={FEMA_FLOOD_ZONE_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FEMAFloodZoneChecker;
