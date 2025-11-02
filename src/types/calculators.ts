export interface CalculatorInput {
  name: string;
  label: string;
  type: string;
  defaultValue?: any;
  rules?: Record<string, any>;
}

import { CalculatorContent } from './index';

export interface ICalculator {
  title: string;
  description: string;
  inputs: CalculatorContent['calculator']['fields'];
  calculation: (data: any) => any[];
}