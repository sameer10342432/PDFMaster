export interface CalculatorInput {
  name: string;
  label: string;
  type: string;
  defaultValue?: any;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rules?: Record<string, any>;
}

export interface CalculatorResult {
  label: string;
  isCurrency: boolean;
}

export interface ICalculator {
  title: string;
  description: string;
  inputs: CalculatorInput[];
  results: CalculatorResult[];
  calculation: (values: any) => any;
}