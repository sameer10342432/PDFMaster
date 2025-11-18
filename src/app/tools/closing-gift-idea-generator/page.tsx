import { CLOSING_GIFT_IDEA_GENERATOR_CONTENT } from '@/content/tools/closing-gift-idea-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ClosingGiftIdeaGenerator } from '@/components/calculators/ClosingGiftIdeaGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Closing Gift Idea Generator | Personalized Housewarming Gift Suggestions',
    description: 'Generate personalized closing gift ideas based on client preferences, budget, and home type. Create memorable gifts that strengthen client relationships and encourage referrals.',
  };
}

const ClosingGiftIdeaGeneratorPage = () => {
  return (
    <CalculatorLayout content={CLOSING_GIFT_IDEA_GENERATOR_CONTENT}>
      <ClosingGiftIdeaGenerator />
    </CalculatorLayout>
  );
};

export default ClosingGiftIdeaGeneratorPage;
