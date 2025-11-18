'use client';

import React from 'react';
import { CalculatorContent } from '@/types';
import { EnhancedCalculator } from './EnhancedCalculator';

interface GenericCalculatorProps {
  content: CalculatorContent;
}

export const GenericCalculator: React.FC<GenericCalculatorProps> = ({ content }) => {
  return (
    <EnhancedCalculator
      title={content.title}
      description={content.description}
      inputs={content.calculator.fields}
      results={content.calculator.results}
      calculation={content.calculator.calculate}
      slug={content.slug}
      category={content.category}
    />
  );
};
