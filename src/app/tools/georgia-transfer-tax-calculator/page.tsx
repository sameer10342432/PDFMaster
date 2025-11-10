'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/georgia-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GeorgiaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="georgia-transfer-tax-calculator"
        category="Seller Tools"
        description={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GeorgiaTransferTaxCalculatorPage;
