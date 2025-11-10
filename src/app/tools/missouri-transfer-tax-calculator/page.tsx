'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/missouri-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MissouriTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="missouri-transfer-tax-calculator"
        category="Seller Tools"
        description={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MissouriTransferTaxCalculatorPage;
