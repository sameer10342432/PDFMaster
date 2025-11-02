import { BRRRR_METHOD_CALCULATOR_CONTENT } from '@/content/tools/brrrr-method-calculator';
import { Calculator, CalculatorLayout } from '@/components/calculators';

const BrrrrCalculatorPage = () => {
  return (
    <CalculatorLayout content={BRRRR_METHOD_CALCULATOR_CONTENT}>
      <Calculator
        title={BRRRR_METHOD_CALCULATOR_CONTENT.title}
        description={BRRRR_METHOD_CALCULATOR_CONTENT.description}
        inputs={BRRRR_METHOD_CALCULATOR_CONTENT.calculator.fields}
        calculation={BRRRR_METHOD_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BrrrrCalculatorPage;