'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { OHIO_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/ohio-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OhioTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="ohio-transfer-tax-calculator"
        category="Seller Tools"
        description={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OhioTransferTaxCalculatorPage;
