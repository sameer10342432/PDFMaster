
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DTI_CALCULATOR_CONTENT } from '@/content/tools/debt-to-income-ratio-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const DebtToIncomeRatioCalculatorPage = () => {
  return (
    <CalculatorLayout content={DTI_CALCULATOR_CONTENT}>
      <Calculator
        title={DTI_CALCULATOR_CONTENT.title}
        description={DTI_CALCULATOR_CONTENT.description}
        inputs={DTI_CALCULATOR_CONTENT.calculator.fields}
        calculation={DTI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DebtToIncomeRatioCalculatorPage;