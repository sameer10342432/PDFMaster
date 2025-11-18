import { CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT } from '@/content/tools/client-testimonial-request-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Client Testimonial Request Generator',
    description: 'Generate professional testimonial request messages customized for email, text, or social media to collect powerful client reviews',
  };
}

const ClientTestimonialRequestGeneratorPage = () => {
  return (
    <CalculatorLayout content={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT}>
      <GenericCalculator content={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT} />
    </CalculatorLayout>
  );
};

export default ClientTestimonialRequestGeneratorPage;
