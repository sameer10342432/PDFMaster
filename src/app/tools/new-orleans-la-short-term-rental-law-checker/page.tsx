import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { newOrleansShortTermRentalContent } from '@/content/tools/new-orleans-la-short-term-rental-law-checker';
import { Metadata } from 'next';

export const metadata: Metadata = newOrleansShortTermRentalContent.meta;

export default function NewOrleansShortTermRentalPage() {
  return <EnhancedCalculator content={newOrleansShortTermRentalContent} />;
}
