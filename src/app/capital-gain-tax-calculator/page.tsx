"use client";

import { useState } from "react";
import { useCapitalGainTaxCalculator, CapitalGainTaxFormValues } from "@/hooks/capital-gain-tax-calculator/useCapitalGainTaxCalculator";
import { CalculatorForm } from "@/components/capital-gain-tax-calculator/CalculatorForm";
import { Results } from "@/components/capital-gain-tax-calculator/Results";

export default function CapitalGainTaxCalculatorPage() {
  const { form, calculateCapitalGainTax } = useCapitalGainTaxCalculator();
  const [results, setResults] = useState<{ capitalGain: number; tax: number } | null>(null);

  const handleSubmit = (data: CapitalGainTaxFormValues) => {
    const newResults = calculateCapitalGainTax(data);
    setResults(newResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Capital Gain Tax Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm form={form} onSubmit={handleSubmit} />
        </div>
        <div>
          {results && <Results capitalGain={results.capitalGain} tax={results.tax} />}
        </div>
      </div>
    </div>
  );
}