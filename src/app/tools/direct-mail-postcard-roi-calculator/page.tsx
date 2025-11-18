import { DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT } from '@/content/tools/direct-mail-postcard-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { DirectMailPostcardROICalculator } from '@/components/calculators/DirectMailPostcardROICalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Direct Mail Postcard ROI Calculator - Farm Marketing Analysis | Property Tools',
    description: 'Calculate ROI for direct mail postcard campaigns targeting farm areas. Analyze mailing costs, response rates, conversion rates, and optimize your geographic farming strategy.',
  };
}

const DirectMailPostcardROICalculatorPage = () => {
  return (
    <CalculatorLayout content={DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT}>
      <DirectMailPostcardROICalculator />
    </CalculatorLayout>
  );
};

export default DirectMailPostcardROICalculatorPage;
