'use client';

import { Calculator } from "@/components/calculators/Calculator";
import { ARV_CALCULATOR_CONTENT } from "@/content/tools/arv-calculator";

export default function ArvCalculatorPage() {
  return (
    <Calculator
      title={ARV_CALCULATOR_CONTENT.title}
      description={ARV_CALCULATOR_CONTENT.description}
      inputs={ARV_CALCULATOR_CONTENT.calculator.fields}
      results={ARV_CALCULATOR_CONTENT.calculator.results}
      calculation={ARV_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
}