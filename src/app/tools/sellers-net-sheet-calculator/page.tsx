'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SELLERS_NET_SHEET_CALCULATOR_CONTENT } from '@/content/tools/sellers-net-sheet-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SellersNetSheetCalculatorPage = () => {
  return (
    <CalculatorLayout content={SELLERS_NET_SHEET_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SELLERS_NET_SHEET_CALCULATOR_CONTENT.title}
        slug="sellers-net-sheet-calculator"
        category="Seller Tools"
        description={SELLERS_NET_SHEET_CALCULATOR_CONTENT.description}
        inputs={SELLERS_NET_SHEET_CALCULATOR_CONTENT.calculator.fields}
        results={SELLERS_NET_SHEET_CALCULATOR_CONTENT.calculator.results}
        calculation={SELLERS_NET_SHEET_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SellersNetSheetCalculatorPage;
