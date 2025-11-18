import { VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT } from '@/content/tools/virtual-assistant-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Virtual Assistant (VA) for Real Estate ROI Calculator',
    description: 'Calculate the ROI of hiring a virtual assistant including cost savings, time efficiency, and productivity gains for your real estate business',
  };
}

const VirtualAssistantROICalculatorPage = () => {
  return (
    <CalculatorLayout content={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT}>
      <GenericCalculator content={VIRTUAL_ASSISTANT_ROI_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
};

export default VirtualAssistantROICalculatorPage;
