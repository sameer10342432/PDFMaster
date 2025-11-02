"use client";

import { useState } from "react";
import { use1031ExchangeCalculator, FormValues } from "@/hooks/1031-exchange-calculator/use1031ExchangeCalculator";
import { CalculatorForm } from "@/components/1031-exchange-calculator/CalculatorForm";
import { Results } from "@/components/1031-exchange-calculator/Results";

export default function Exchange1031CalculatorPage() {
  const { form, calculate1031Exchange } = use1031ExchangeCalculator();
  const [results, setResults] = useState<{
    realizedGain: number;
    recognizedGain: number;
    deferredGain: number;
    taxSavings: number;
    requiredReinvestment: number;
  } | null>(null);

  const handleSubmit = (data: FormValues) => {
    const newResults = calculate1031Exchange(data);
    setResults(newResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">1031 Exchange Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm form={form} onSubmit={handleSubmit} />
        </div>
        <div>
          {results && (
            <Results
              realizedGain={results.realizedGain}
              recognizedGain={results.recognizedGain}
              deferredGain={results.deferredGain}
              taxSavings={results.taxSavings}
              requiredReinvestment={results.requiredReinvestment}
            />
          )}
        </div>
      </div>
    </div>
  );
}