import { COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/commission-calculator';
import { CalculatorLayout } from '@/components/calculators';
import { CommissionCalculator } from '@/components/calculators/CommissionCalculator';

const CommissionCalculatorPage = () => {
  return (
    <CalculatorLayout content={COMMISSION_CALCULATOR_CONTENT}>
      <CommissionCalculator />
    </CalculatorLayout>
  );
};

export default CommissionCalculatorPage;