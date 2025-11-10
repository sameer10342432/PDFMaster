'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/indiana-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IndianaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="indiana-transfer-tax-calculator"
        category="Seller Tools"
        description={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IndianaTransferTaxCalculatorPage;
