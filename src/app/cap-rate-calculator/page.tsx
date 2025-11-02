"use client";

import { useState } from "react";
import { useCapRateCalculator, FormValues } from "@/hooks/cap-rate-calculator/useCapRateCalculator";
import { CalculatorForm } from "@/components/cap-rate-calculator/CalculatorForm";
import { Results } from "@/components/cap-rate-calculator/Results";

export default function CapRateCalculatorPage() {
  const { form, calculateCapRate } = useCapRateCalculator();
  const [results, setResults] = useState<{ capRate: number } | null>(null);

  const handleSubmit = (data: FormValues) => {
    const newResults = calculateCapRate(data);
    setResults(newResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cap Rate Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm form={form} onSubmit={handleSubmit} />
        </div>
        <div>
          {results && <Results capRate={results.capRate} />}
        </div>
      </div>
    </div>
  );
}