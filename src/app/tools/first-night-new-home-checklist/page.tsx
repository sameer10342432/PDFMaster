import { FIRST_NIGHT_CHECKLIST_CONTENT } from '@/content/tools/first-night-new-home-checklist';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { FirstNightChecklist } from '@/components/calculators/FirstNightChecklist';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'First Night in New Home Checklist',
    description: 'Complete checklist for your first night in a new home. Essential items, safety checks, and comfort items for a smooth first night.',
  };
}

const FirstNightChecklistPage = () => {
  return (
    <CalculatorLayout content={FIRST_NIGHT_CHECKLIST_CONTENT}>
      <FirstNightChecklist />
    </CalculatorLayout>
  );
};

export default FirstNightChecklistPage;
