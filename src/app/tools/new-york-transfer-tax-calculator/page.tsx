'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-york-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewYorkTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="new-york-transfer-tax-calculator"
        category="Seller Tools"
        description={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewYorkTransferTaxCalculatorPage;
