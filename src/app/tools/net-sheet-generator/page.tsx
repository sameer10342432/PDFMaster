
import { NET_SHEET_GENERATOR_CONTENT } from '@/content/tools/net-sheet-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { NetSheetGenerator } from '@/components/calculators/NetSheetGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Net Sheet Generator | Seller Proceeds Calculator for Real Estate',
    description: 'Generate accurate net proceeds calculations for sellers showing exact costs, commissions, and estimated proceeds from their home sale with detailed line-item breakdown.',
  };
}

const NetSheetGeneratorPage = () => {
  return (
    <CalculatorLayout content={NET_SHEET_GENERATOR_CONTENT}>
      <NetSheetGenerator />
    </CalculatorLayout>
  );
};

export default NetSheetGeneratorPage;
