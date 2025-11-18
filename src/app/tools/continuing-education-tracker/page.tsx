
import { CONTINUING_EDUCATION_TRACKER_CONTENT } from '@/content/tools/continuing-education-tracker';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ContinuingEducationTracker } from '@/components/calculators/ContinuingEducationTracker';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Continuing Education (CE) Tracker',
    description: 'Track your required continuing education credits, course costs, renewal dates, and certification requirements to maintain your real estate license',
  };
}

const ContinuingEducationTrackerPage = () => {
  return (
    <CalculatorLayout content={CONTINUING_EDUCATION_TRACKER_CONTENT}>
      <ContinuingEducationTracker />
    </CalculatorLayout>
  );
};

export default ContinuingEducationTrackerPage;
