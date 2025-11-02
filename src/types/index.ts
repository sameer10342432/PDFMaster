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
  category: string;
  slug: string;
  article: {
    title: string;
    content: string;
  };
  calculator: {
    fields: CalculatorField[];
    calculate: (values: any) => any;
  };
}