
import { CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT } from '@/content/tools/client-testimonial-request-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClientTestimonialRequestGenerator } from '@/components/calculators/ClientTestimonialRequestGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Client Testimonial Request Generator',
    description: 'Generate professional testimonial request messages customized for email, text, or social media to collect powerful client reviews',
  };
}

const ClientTestimonialRequestGeneratorPage = () => {
  return (
    <CalculatorLayout content={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT}>
      <ClientTestimonialRequestGenerator />
    </CalculatorLayout>
  );
};

export default ClientTestimonialRequestGeneratorPage;
