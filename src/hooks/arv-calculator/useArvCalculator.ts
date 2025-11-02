import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  purchasePrice: z.number().min(0, "Purchase price must be positive"),
  renovationValue: z.number().min(0, "Renovation value must be positive"),
});

export type FormValues = z.infer<typeof schema>;

export const useArvCalculator = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      purchasePrice: 200000,
      renovationValue: 50000,
    },
  });

  const calculateArv = (data: FormValues) => {
    const arv = data.purchasePrice + data.renovationValue;
    return { arv };
  };

  return { form, calculateArv };
};