
import { exchange1031Calculator as EXCHANGE_CALCULATOR_CONTENT } from '@/content/tools/1031-exchange-calculator';
import { Calculator, CalculatorLayout } from '@/components/calculators';

const ExchangeCalculatorPage = () => {
  return (
    <CalculatorLayout content={EXCHANGE_CALCULATOR_CONTENT}>
      <Calculator
        title={EXCHANGE_CALCULATOR_CONTENT.title}
        description={EXCHANGE_CALCULATOR_CONTENT.description}
        inputs={EXCHANGE_CALCULATOR_CONTENT.calculator.fields}
        calculation={EXCHANGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ExchangeCalculatorPage;