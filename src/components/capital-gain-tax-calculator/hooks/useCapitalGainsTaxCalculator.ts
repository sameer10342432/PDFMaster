
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  purchasePrice: z.number().min(0, 'Purchase price must be positive'),
  sellingPrice: z.number().min(0, 'Selling price must be positive'),
  holdingPeriod: z.enum(['short-term', 'long-term']),
  annualIncome: z.number().min(0, 'Annual income must be positive'),
});

type FormValues = z.infer<typeof formSchema>;

interface TaxAnalysis {
  capitalGain: number;
  taxRate: number;
  estimatedTax: number;
}

const getLongTermGainsRate = (income: number): number => {
  if (income <= 40000) return 0;
  if (income <= 441450) return 15;
  return 20;
};

const getShortTermGainsRate = (income: number): number => {
  if (income <= 9875) return 10;
  if (income <= 40125) return 12;
  if (income <= 85525) return 22;
  if (income <= 163300) return 24;
  if (income <= 207350) return 32;
  if (income <= 518400) return 35;
  return 37;
};

export const useCapitalGainsTaxCalculator = () => {
  const [analysis, setAnalysis] = useState<TaxAnalysis | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchasePrice: 250000,
      sellingPrice: 400000,
      holdingPeriod: 'long-term',
      annualIncome: 75000,
    },
  });

  const onSubmit = (data: FormValues) => {
    const { purchasePrice, sellingPrice, holdingPeriod, annualIncome } = data;

    const capitalGain = sellingPrice - purchasePrice;
    let taxRate = 0;

    if (capitalGain > 0) {
      if (holdingPeriod === 'long-term') {
        taxRate = getLongTermGainsRate(annualIncome);
      } else {
        taxRate = getShortTermGainsRate(annualIncome);
      }
    }

    const estimatedTax = (capitalGain * taxRate) / 100;

    setAnalysis({
      capitalGain,
      taxRate,
      estimatedTax,
    });
  };

  return { form, onSubmit, analysis };
};