"use client";

import { useFixAndFlipCalculator } from "@/hooks/fix-and-flip-calculator/useFixAndFlipCalculator";
import { FIX_AND_FLIP_CALCULATOR_CONTENT } from "@/content/tools/fix-and-flip-calculator";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { Calculator } from "@/components/calculators/Calculator";

export default function FixAndFlipCalculatorPage() {
  const { calculate } = useFixAndFlipCalculator();

  return (
    <CalculatorLayout content={FIX_AND_FLIP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FIX_AND_FLIP_CALCULATOR_CONTENT.title}
        slug="fix-and-flip-calculator"
        category="Real Estate"
        description={FIX_AND_FLIP_CALCULATOR_CONTENT.description}
        inputs={FIX_AND_FLIP_CALCULATOR_CONTENT.calculator.fields}
        results={FIX_AND_FLIP_CALCULATOR_CONTENT.calculator.results}
        calculation={calculate}
      />
    </CalculatorLayout>
  );
}