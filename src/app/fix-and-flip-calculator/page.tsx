"use client";

import { Calculator } from "@/components/calculators/Calculator";
import { FIX_AND_FLIP_CALCULATOR_CONTENT } from "@/content/tools/fix-and-flip-calculator";

export default function FixAndFlipCalculatorPage() {
  return (
    <Calculator
      title={FIX_AND_FLIP_CALCULATOR_CONTENT.title}
      description={FIX_AND_FLIP_CALCULATOR_CONTENT.description}
      inputs={FIX_AND_FLIP_CALCULATOR_CONTENT.calculator.fields}
      results={FIX_AND_FLIP_CALCULATOR_CONTENT.calculator.results}
      calculation={FIX_AND_FLIP_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
}