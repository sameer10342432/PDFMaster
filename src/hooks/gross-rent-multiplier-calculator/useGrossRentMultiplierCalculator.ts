"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  propertyValue: z.number().min(0, "Property value must be a positive number"),
  grossAnnualRent: z.number().min(0, "Gross annual rent must be a positive number"),
});

export type GrossRentMultiplierCalculatorParams = z.infer<typeof schema>;

export function useGrossRentMultiplierCalculator() {
  const form = useForm<GrossRentMultiplierCalculatorParams>({
    resolver: zodResolver(schema),
    defaultValues: {
      propertyValue: 500000,
      grossAnnualRent: 60000,
    },
  });

  const { watch } = form;
  const params = watch();
  const { propertyValue, grossAnnualRent } = params;

  const grossRentMultiplier = grossAnnualRent > 0 ? propertyValue / grossAnnualRent : 0;

  return { form, params, grossRentMultiplier };
}