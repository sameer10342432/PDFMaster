'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_RENOVATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/home-renovation-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeRenovationRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_RENOVATION_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_RENOVATION_ROI_CALCULATOR_CONTENT.title}
        slug="home-renovation-roi-calculator"
        category="Investment"
        description={HOME_RENOVATION_ROI_CALCULATOR_CONTENT.description}
        inputs={HOME_RENOVATION_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_RENOVATION_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_RENOVATION_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeRenovationRoiCalculatorPage;