
import { CMA_REPORT_GENERATOR_CONTENT } from '@/content/tools/cma-report-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CMAReportGenerator } from '@/components/calculators/CMAReportGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CMA Report Generator | Comparative Market Analysis Tool for Real Estate',
    description: 'Generate professional comparative market analysis (CMA) reports for sellers and buyers. Create accurate pricing analysis with market trends and property comparisons.',
  };
}

const CMAReportGeneratorPage = () => {
  return (
    <CalculatorLayout content={CMA_REPORT_GENERATOR_CONTENT}>
      <CMAReportGenerator />
    </CalculatorLayout>
  );
};

export default CMAReportGeneratorPage;
