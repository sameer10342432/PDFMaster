
import { useState } from 'react';
import { CalculatorInput } from '@/types/calculators';

export const useCalculator = (inputs: CalculatorInput[], calculate: (values: any) => any) => {
  const [values, setValues] = useState<Record<string, any>>(
    inputs.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue }), {})
  );
  const [results, setResults] = useState<any[] | null>(null);

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculate(values);
    setResults(calculatedResults);
  };

  return { values, results, handleChange, handleCalculate };
};