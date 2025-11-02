import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  purchasePrice: z.number().min(0, "Purchase price must be positive"),
  sellingPrice: z.number().min(0, "Selling price must be positive"),
  expenses: z.number().min(0, "Expenses must be positive"),
  holdingPeriod: z.enum(["short-term", "long-term"]),
  filingStatus: z.enum(["single", "married"]),
  taxableIncome: z.number().min(0, "Taxable income must be positive"),
});

export type CapitalGainTaxFormValues = z.infer<typeof schema>;

export const useCapitalGainTaxCalculator = () => {
  const form = useForm<CapitalGainTaxFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      purchasePrice: 250000,
      sellingPrice: 450000,
      expenses: 25000,
      holdingPeriod: "long-term",
      filingStatus: "single",
      taxableIncome: 75000,
    },
  });

  const calculateCapitalGainTax = (data: CapitalGainTaxFormValues) => {
    const capitalGain = data.sellingPrice - data.purchasePrice - data.expenses;
    if (capitalGain <= 0) {
      return { capitalGain: 0, tax: 0 };
    }

    let taxRate = 0;
    if (data.holdingPeriod === "short-term") {
        if (data.filingStatus === "single") {
            if (data.taxableIncome <= 11000) taxRate = 0.10;
            else if (data.taxableIncome <= 44725) taxRate = 0.12;
            else if (data.taxableIncome <= 95375) taxRate = 0.22;
            else if (data.taxableIncome <= 182100) taxRate = 0.24;
            else if (data.taxableIncome <= 231250) taxRate = 0.32;
            else if (data.taxableIncome <= 578125) taxRate = 0.35;
            else taxRate = 0.37;
        } else { // married
            if (data.taxableIncome <= 22000) taxRate = 0.10;
            else if (data.taxableIncome <= 89450) taxRate = 0.12;
            else if (data.taxableIncome <= 190750) taxRate = 0.22;
            else if (data.taxableIncome <= 364200) taxRate = 0.24;
            else if (data.taxableIncome <= 462500) taxRate = 0.32;
            else if (data.taxableIncome <= 693750) taxRate = 0.35;
            else taxRate = 0.37;
        }
    } else { // long-term
        if (data.filingStatus === "single") {
            if (data.taxableIncome <= 44625) taxRate = 0;
            else if (data.taxableIncome <= 492300) taxRate = 0.15;
            else taxRate = 0.20;
        } else { // married
            if (data.taxableIncome <= 89250) taxRate = 0;
            else if (data.taxableIncome <= 553850) taxRate = 0.15;
            else taxRate = 0.20;
        }
    }

    const tax = capitalGain * taxRate;
    return { capitalGain, tax };
  };

  return { form, calculateCapitalGainTax };
};