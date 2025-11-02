'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NOI_CALCULATOR_CONTENT } from '@/content/tools/noi-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const NOICalculatorPage = () => {
  return (
    <CalculatorLayout content={NOI_CALCULATOR_CONTENT}>
            <Calculator
        title={NOI_CALCULATOR_CONTENT.title}
        description={NOI_CALCULATOR_CONTENT.description}
        inputs={NOI_CALCULATOR_CONTENT.calculator.fields}
        calculation={NOI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NOICalculatorPage;