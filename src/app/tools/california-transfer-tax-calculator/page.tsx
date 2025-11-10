'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/california-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CaliforniaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="california-transfer-tax-calculator"
        category="Seller Tools"
        description={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaTransferTaxCalculatorPage;
