import { NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT } from '@/content/tools/neighborhood-safety-checklist';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { NeighborhoodSafetyChecklist } from '@/components/calculators/NeighborhoodSafetyChecklist';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Neighborhood Safety Checklist',
    description: 'Comprehensive neighborhood safety checklist to evaluate crime rates, lighting, security, and safety factors before buying or renting.',
  };
}

const NeighborhoodSafetyChecklistPage = () => {
  return (
    <CalculatorLayout content={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT}>
      <NeighborhoodSafetyChecklist />
    </CalculatorLayout>
  );
};

export default NeighborhoodSafetyChecklistPage;
