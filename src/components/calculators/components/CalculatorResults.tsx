
import React from 'react';

interface CalculatorResultsProps {
  results: any[] | null;
}

export const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results }) => {
  if (!results) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Results</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.label}: {result.isCurrency && '$'}{result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};