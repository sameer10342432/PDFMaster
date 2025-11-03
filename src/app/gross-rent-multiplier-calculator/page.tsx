"use client";

import { Calculator } from "@/components/calculators/Calculator";
import { GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT } from "@/content/tools/gross-rent-multiplier-calculator";

export default function GrossRentMultiplierCalculatorPage() {
  return (
    <Calculator
      title={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.title}
      description={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.description}
      inputs={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.fields}
      results={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.results}
      calculation={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
}