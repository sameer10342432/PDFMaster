
import { FLOOR_PLAN_CREATION_COST_CONTENT } from '@/content/tools/floor-plan-creation-cost';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { FloorPlanCreationCostCalculator } from '@/components/calculators/FloorPlanCreationCostCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Floor Plan Creation Cost Calculator | Real Estate Floor Plan Pricing',
    description: 'Calculate the cost of professional floor plans for real estate listings. Compare 2D, 3D, and interactive floor plan options with detailed pricing and ROI analysis.',
  };
}

const FloorPlanCreationCostPage = () => {
  return (
    <CalculatorLayout content={FLOOR_PLAN_CREATION_COST_CONTENT}>
      <FloorPlanCreationCostCalculator />
    </CalculatorLayout>
  );
};

export default FloorPlanCreationCostPage;
