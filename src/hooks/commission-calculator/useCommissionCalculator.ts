"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  salePrice: z.number().min(0, "Sale price must be a positive number"),
  commissionRate: z.number().min(0, "Commission rate must be a positive number"),
});

export type CommissionCalculatorParams = z.infer<typeof schema>;

export function useCommissionCalculator() {
  const form = useForm<CommissionCalculatorParams>({
    resolver: zodResolver(schema),
    defaultValues: {
      salePrice: 500000,
      commissionRate: 6,
    },
  });

  const { watch } = form;
  const params = watch();
  const { salePrice, commissionRate } = params;

  const commission = salePrice * (commissionRate / 100);

  return { form, params, commission };
}