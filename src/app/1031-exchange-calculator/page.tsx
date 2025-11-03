'use client';

import { Calculator } from "@/components/calculators/Calculator";
import { exchange1031Calculator } from "@/content/tools/1031-exchange-calculator";

export default function Exchange1031CalculatorPage() {
  return (
    <Calculator
      title={exchange1031Calculator.title}
      description={exchange1031Calculator.description}
      inputs={exchange1031Calculator.calculator.fields}
      results={exchange1031Calculator.calculator.results}
      calculation={exchange1031Calculator.calculator.calculate}
    />
  );
}