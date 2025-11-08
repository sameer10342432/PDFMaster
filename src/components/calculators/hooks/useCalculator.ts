
'use client';
import { useState } from 'react';
import { CalculatorInput, CalculatorResult } from '@/types/calculators';

export const useCalculator = (inputs: CalculatorInput[], results: CalculatorResult[], calculate: (values: any) => any) => {
  const [values, setValues] = useState<Record<string, any>>(
    inputs.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue }), {})
  );
  const [displayResults, setDisplayResults] = useState<any[] | null>(null);

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculate(values);
    const formattedResults = results.map(result => ({
      ...result,
      value: calculatedResults[result.label.toLowerCase()],
    }));
    setDisplayResults(formattedResults);
  };

  return { values, results: displayResults, handleChange, handleCalculate, setValues };
};