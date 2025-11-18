import { CLEAR_TO_CLOSE_CHECKLIST_CONTENT } from '@/content/tools/clear-to-close-checklist';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClearToCloseChecklist } from '@/components/calculators/ClearToCloseChecklist';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Clear to Close Checklist | Final Closing Requirements & Document Tracker',
    description: 'Complete pre-closing checklist ensuring all requirements are met before closing day. Track final walkthrough, documents, funding, and title clearance for smooth closings.',
  };
}

const ClearToCloseChecklistPage = () => {
  return (
    <CalculatorLayout content={CLEAR_TO_CLOSE_CHECKLIST_CONTENT}>
      <ClearToCloseChecklist />
    </CalculatorLayout>
  );
};

export default ClearToCloseChecklistPage;
