'use client';

import React from 'react';
import { CalculatorContent } from '@/types';
import { Calculator } from './Calculator';

interface GenericCalculatorProps {
  content: CalculatorContent;
}

export const GenericCalculator: React.FC<GenericCalculatorProps> = ({ content }) => {
  return (
    <Calculator
      title={content.title}
      description={content.description}
      inputs={content.calculator.fields}
      results={content.calculator.results}
      calculation={content.calculator.calculate}
    />
  );
};
