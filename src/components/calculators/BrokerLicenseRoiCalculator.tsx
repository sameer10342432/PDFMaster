'use client';

import { BROKER_LICENSE_ROI_CALCULATOR_CONTENT } from '@/content/tools/broker-license-roi-calculator';
import { Calculator } from '@/components/calculators';

export const BrokerLicenseRoiCalculator = () => {
  return (
    <Calculator
      title={BROKER_LICENSE_ROI_CALCULATOR_CONTENT.title}
      description={BROKER_LICENSE_ROI_CALCULATOR_CONTENT.description}
      inputs={BROKER_LICENSE_ROI_CALCULATOR_CONTENT.calculator.fields}
      results={BROKER_LICENSE_ROI_CALCULATOR_CONTENT.calculator.results}
      calculation={BROKER_LICENSE_ROI_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
