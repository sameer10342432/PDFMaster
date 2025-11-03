
'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT } from '@/content/tools/debt-to-income-ratio-calculator';
import { Calculator } from '@/components/calculators/Calculator';

const DebtToIncomeRatioCalculatorPage = () => {
  return (
    <CalculatorLayout content={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT}>
      <Calculator
        title={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.title}
        description={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.description}
        inputs={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.fields}
        results={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.results}
        calculation={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DebtToIncomeRatioCalculatorPage;