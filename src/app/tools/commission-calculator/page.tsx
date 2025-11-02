import { COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/commission-calculator';
import { Calculator, CalculatorLayout } from '@/components/calculators';

const CommissionCalculatorPage = () => {
  return (
    <CalculatorLayout content={COMMISSION_CALCULATOR_CONTENT}>
      <Calculator
        title={COMMISSION_CALCULATOR_CONTENT.title}
        description={COMMISSION_CALCULATOR_CONTENT.description}
        inputs={COMMISSION_CALCULATOR_CONTENT.calculator.fields}
        calculation={COMMISSION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CommissionCalculatorPage;