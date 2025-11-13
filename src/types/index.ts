import { CalculatorInput, CalculatorResult } from "./calculators";

export interface CalculatorField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select';
  defaultValue: string | number;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface CalculatorContent {
  title: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  article: {
    title: string;
    content: string;
  };
  calculator: {
    fields: CalculatorInput[];
    results: CalculatorResult[];
    calculate: (values: any) => any;
  };
}