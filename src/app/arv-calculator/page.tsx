"use client";

import { useState } from "react";
import { CalculatorForm } from "@/components/arv-calculator/CalculatorForm";
import { Results } from "@/components/arv-calculator/Results";
import { useArvCalculator, FormValues } from "@/hooks/arv-calculator/useArvCalculator";
import { ARV_CALCULATOR_CONTENT } from "@/content/tools/arv-calculator";

export default function Page() {
  const [results, setResults] = useState<{ arv: number } | null>(null);
  const { calculateArv } = useArvCalculator();

  const handleSubmit = (data: FormValues) => {
    const result = calculateArv(data);
    setResults(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{ARV_CALCULATOR_CONTENT.title}</h1>
      <p className="mb-8">{ARV_CALCULATOR_CONTENT.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm onSubmit={handleSubmit} />
        </div>
        {results && (
          <div>
            <Results arv={results.arv} />
          </div>
        )}
      </div>
      <div
        className="prose mt-8"
        dangerouslySetInnerHTML={{ __html: ARV_CALCULATOR_CONTENT.article.content }}
      ></div>
    </div>
  );
}