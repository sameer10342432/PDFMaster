
import { PROPERTY_SHOWING_FEEDBACK_FORM_CONTENT } from '@/content/tools/property-showing-feedback-form';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { PropertyShowingFeedbackForm } from '@/components/calculators/PropertyShowingFeedbackForm';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Showing Feedback Form | Buyer Feedback Collection Tool',
    description: 'Collect structured feedback from buyer showings with professional feedback forms that help sellers understand buyer reactions and adjust strategy accordingly.',
  };
}

const PropertyShowingFeedbackFormPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_SHOWING_FEEDBACK_FORM_CONTENT}>
      <PropertyShowingFeedbackForm />
    </CalculatorLayout>
  );
};

export default PropertyShowingFeedbackFormPage;
