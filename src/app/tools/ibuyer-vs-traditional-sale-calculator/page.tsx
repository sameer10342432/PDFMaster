'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT } from '@/content/tools/ibuyer-vs-traditional-sale-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IBuyerVsTraditionalSaleCalculatorPage = () => {
  return (
    <CalculatorLayout content={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.title}
        slug="ibuyer-vs-traditional-sale-calculator"
        category="Seller Tools"
        description={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.description}
        inputs={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.fields}
        results={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.results}
        calculation={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IBuyerVsTraditionalSaleCalculatorPage;
