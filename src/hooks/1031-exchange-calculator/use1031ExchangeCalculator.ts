import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  salePrice: z.number().min(0, "Sale price must be positive"),
  purchasePrice: z.number().min(0, "Purchase price must be positive"),
  improvements: z.number().min(0, "Improvements must be positive"),
  sellingExpenses: z.number().min(0, "Selling expenses must be positive"),
  replacementValue: z.number().min(0, "Replacement value must be positive"),
  cashBoot: z.number().min(0, "Cash boot must be positive"),
  taxRate: z.number().min(0).max(100, "Tax rate must be between 0 and 100"),
});

export type FormValues = z.infer<typeof schema>;

export const use1031ExchangeCalculator = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      salePrice: 1000000,
      purchasePrice: 500000,
      improvements: 100000,
      sellingExpenses: 70000,
      replacementValue: 1200000,
      cashBoot: 0,
      taxRate: 20,
    },
  });

  const calculate1031Exchange = (data: FormValues) => {
    const adjustedBasis = data.purchasePrice + data.improvements;
    const realizedGain = data.salePrice - adjustedBasis - data.sellingExpenses;
    const recognizedGain = Math.min(realizedGain, data.cashBoot);
    const deferredGain = realizedGain - recognizedGain;
    const taxSavings = deferredGain * (data.taxRate / 100);
    const requiredReinvestment = data.salePrice - data.sellingExpenses;

    return { realizedGain, recognizedGain, deferredGain, taxSavings, requiredReinvestment };
  };

  return { form, calculate1031Exchange };
};