
import { exchange1031Calculator as EXCHANGE_CALCULATOR_CONTENT } from '@/content/tools/1031-exchange-calculator';
import { CalculatorLayout } from '@/components/calculators';
import { ExchangeCalculator } from '@/components/calculators/ExchangeCalculator';

const ExchangeCalculatorPage = () => {
  return (
    <CalculatorLayout content={EXCHANGE_CALCULATOR_CONTENT}>
      <ExchangeCalculator />
    </CalculatorLayout>
  );
};

export default ExchangeCalculatorPage;