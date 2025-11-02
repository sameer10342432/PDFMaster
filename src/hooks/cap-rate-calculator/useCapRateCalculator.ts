import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  netOperatingIncome: z.number().min(0, "Net operating income must be positive"),
  propertyValue: z.number().min(0, "Property value must be positive"),
});

export type FormValues = z.infer<typeof schema>;

export const useCapRateCalculator = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      netOperatingIncome: 50000,
      propertyValue: 1000000,
    },
  });

  const calculateCapRate = (data: FormValues) => {
    const capRate = (data.netOperatingIncome / data.propertyValue) * 100;
    return { capRate };
  };

  return { form, calculateCapRate };
};