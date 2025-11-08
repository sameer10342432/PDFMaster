
import React from 'react';

interface CalculatorResultsProps {
  results: any[] | null;
}

export const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((result, index) => (
        <div 
          key={index}
          className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            {result.label}
          </p>
          <p className="text-3xl font-bold text-green-700 break-words">
            {result.isCurrency 
              ? new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(parseFloat(result.value) || 0)
              : result.value
            }
          </p>
        </div>
      ))}
    </div>
  );
};