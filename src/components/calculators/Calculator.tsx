'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ICalculator } from '@/types/calculators';
import { useCalculator } from './hooks/useCalculator';
import { CalculatorFields } from './components/CalculatorFields';
import { CalculatorResults } from './components/CalculatorResults';

export const Calculator = ({ title, description, inputs, results, calculation }: ICalculator) => {
  const { values, results: displayResults, handleChange, handleCalculate } = useCalculator(inputs, results, calculation);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    handleCalculate();
  }, [values]);

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl text-blue-900">📊 Calculator Inputs</CardTitle>
          {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
        </CardHeader>
        <CardContent className="pt-6">
          <CalculatorFields fields={inputs} values={values} handleChange={handleChange} />
          <Button 
            onClick={handleCalculate} 
            className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            🔢 Calculate Now
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {displayResults && displayResults.length > 0 && (
        <Card className="border-2 border-green-100 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-2xl text-green-900">💰 Results</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <CalculatorResults results={displayResults} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};