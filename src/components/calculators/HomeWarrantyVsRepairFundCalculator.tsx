'use client';

import { HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT } from '@/content/tools/home-warranty-vs-repair-fund-calculator';
import { Calculator } from '@/components/calculators';

export const HomeWarrantyVsRepairFundCalculator = () => {
  return (
    <Calculator
      title={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT.title}
      description={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT.description}
      inputs={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT.calculator.fields}
      results={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT.calculator.results}
      calculation={HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
