'use client';

import { CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT } from '@/content/tools/client-testimonial-request-generator';
import { Calculator } from '@/components/calculators';

export const ClientTestimonialRequestGenerator = () => {
  return (
    <Calculator
      title={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT.title}
      description={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT.description}
      inputs={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT.calculator.fields}
      results={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT.calculator.results}
      calculation={CLIENT_TESTIMONIAL_REQUEST_GENERATOR_CONTENT.calculator.calculate}
    />
  );
};
