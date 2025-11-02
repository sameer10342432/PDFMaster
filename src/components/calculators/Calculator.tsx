
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ICalculator } from '@/types/calculators';
import { useCalculator } from './hooks/useCalculator';
import { CalculatorFields } from './components/CalculatorFields';
import { CalculatorResults } from './components/CalculatorResults';

export const Calculator = ({ title, description, inputs, calculation }: ICalculator) => {
  const { values, results, handleChange, handleCalculate } = useCalculator(inputs, calculation);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CalculatorFields fields={inputs} values={values} handleChange={handleChange} />
        <Button onClick={handleCalculate} className="mt-4">Calculate</Button>
        <CalculatorResults results={results} />
      </CardContent>
    </Card>
  );
};