'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ROI_CALCULATOR_CONTENT } from '@/content/tools/roi-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const ROICalculatorPage = () => {
  return (
    <CalculatorLayout content={ROI_CALCULATOR_CONTENT}>
            <Calculator
        title={ROI_CALCULATOR_CONTENT.title}
        description={ROI_CALCULATOR_CONTENT.description}
        inputs={ROI_CALCULATOR_CONTENT.calculator.fields}
        calculation={ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ROICalculatorPage;