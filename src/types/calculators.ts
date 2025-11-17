export interface CalculatorInput {
  name: string;
  label: string;
  type: string;
  defaultValue?: any;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rules?: Record<string, any>;
  min?: string;
  max?: string;
  step?: string;
}

export interface CalculatorResult {
  label: string;
  value?: string | number;
  isCurrency: boolean;
}

export interface ICalculator {
  title: string;
  description: string;
  inputs: CalculatorInput[];
  results: CalculatorResult[];
  calculation: (values: any) => any;
}