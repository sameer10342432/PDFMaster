
import { STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/staging-certification-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { StagingCertificationRoiCalculator } from '@/components/calculators/StagingCertificationRoiCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Staging Certification ROI Calculator',
    description: 'Calculate the return on investment for obtaining a home staging certification including increased listings, higher commissions, and additional revenue streams',
  };
}

const StagingCertificationROICalculatorPage = () => {
  return (
    <CalculatorLayout content={STAGING_CERTIFICATION_ROI_CALCULATOR_CONTENT}>
      <StagingCertificationRoiCalculator />
    </CalculatorLayout>
  );
};

export default StagingCertificationROICalculatorPage;
