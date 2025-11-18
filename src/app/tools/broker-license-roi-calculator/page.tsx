
import { BROKER_LICENSE_ROI_CALCULATOR_CONTENT } from '@/content/tools/broker-license-roi-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BrokerLicenseRoiCalculator } from '@/components/calculators/BrokerLicenseRoiCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Broker License ROI Calculator',
    description: 'Calculate the ROI of upgrading to a broker license including higher commission splits, team building potential, and brokerage ownership opportunities',
  };
}

const BrokerLicenseROICalculatorPage = () => {
  return (
    <CalculatorLayout content={BROKER_LICENSE_ROI_CALCULATOR_CONTENT}>
      <BrokerLicenseRoiCalculator />
    </CalculatorLayout>
  );
};

export default BrokerLicenseROICalculatorPage;
