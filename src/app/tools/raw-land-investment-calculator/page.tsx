'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RAW_LAND_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/raw-land-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RawLandInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="raw-land-investment-calculator"
        category="Investment Analysis"
        description={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={RAW_LAND_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RawLandInvestmentCalculatorPage;
