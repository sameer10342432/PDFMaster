'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/wisconsin-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WisconsinTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="wisconsin-transfer-tax-calculator"
        category="Seller Tools"
        description={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WisconsinTransferTaxCalculatorPage;
