
import React from 'react';

interface CalculatorResultsProps {
  results: any[] | null;
}

export const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {results.map((result, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600 mb-1">
                {result.label}
              </p>
              <p className="text-3xl font-bold text-green-700">
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
            <div className="text-4xl opacity-50">
              {result.isCurrency ? '💵' : '📊'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};