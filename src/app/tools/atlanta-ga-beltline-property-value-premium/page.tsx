import { EnhancedCalculator } from '@/components/calculator/enhanced-calculator';
import { atlantaBeltlineValueContent } from '@/content/tools/atlanta-ga-beltline-property-value-premium';
import { Metadata } from 'next';

export const metadata: Metadata = atlantaBeltlineValueContent.meta;

export default function AtlantaBeltlineValuePage() {
  return <EnhancedCalculator content={atlantaBeltlineValueContent} />;
}
