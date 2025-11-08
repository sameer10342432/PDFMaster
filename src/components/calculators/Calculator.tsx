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
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl pb-8">
          <CardTitle className="text-3xl text-white">Calculator Inputs</CardTitle>
          {description && <p className="text-sm text-blue-100 mt-3">{description}</p>}
        </CardHeader>
        <CardContent className="pt-8 pb-8">
          <CalculatorFields fields={inputs} values={values} handleChange={handleChange} />
          <Button 
            onClick={handleCalculate} 
            className="mt-8 w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Calculate Now
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {displayResults && displayResults.length > 0 && (
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl pb-8">
            <CardTitle className="text-3xl text-white">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 pb-8">
            <CalculatorResults results={displayResults} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};