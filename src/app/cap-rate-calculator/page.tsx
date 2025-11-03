'use client';

import { Calculator } from "@/components/calculators/Calculator";
import { CAP_RATE_CALCULATOR_CONTENT } from "@/content/tools/cap-rate-calculator";

export default function CapRateCalculatorPage() {
  return (
    <Calculator
      title={CAP_RATE_CALCULATOR_CONTENT.title}
      description={CAP_RATE_CALCULATOR_CONTENT.description}
      inputs={CAP_RATE_CALCULATOR_CONTENT.calculator.fields}
      results={CAP_RATE_CALCULATOR_CONTENT.calculator.results}
      calculation={CAP_RATE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
}