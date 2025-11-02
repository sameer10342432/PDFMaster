
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalculatorContent as CalculatorType } from '@/types';

interface CalculatorFieldsProps {
  fields: CalculatorType['calculator']['fields'];
  values: Record<string, any>;
  handleChange: (name: string, value: any) => void;
}

export const CalculatorFields: React.FC<CalculatorFieldsProps> = ({ fields, values, handleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map((field) => (
        <div key={field.name}>
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === 'select' ? (
            <Select onValueChange={(value) => handleChange(field.name, value)} defaultValue={String(field.defaultValue)}>
              <SelectTrigger>
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option: { value: string; label: string }) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              id={field.name}
              type={field.type}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};