import { BRRRR_METHOD_CALCULATOR_CONTENT } from '@/content/tools/brrrr-method-calculator';
import { CalculatorLayout } from '@/components/calculators';
import { BrrrrCalculator } from '@/components/calculators/BrrrrCalculator';

const BrrrrCalculatorPage = () => {
  return (
    <CalculatorLayout content={BRRRR_METHOD_CALCULATOR_CONTENT}>
      <BrrrrCalculator />
    </CalculatorLayout>
  );
};

export default BrrrrCalculatorPage;