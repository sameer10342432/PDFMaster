"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  purchasePrice: z.number().min(0, "Purchase price must be a positive number"),
  renovationCosts: z.number().min(0, "Renovation costs must be a positive number"),
  arv: z.number().min(0, "ARV must be a positive number"),
  holdingPeriod: z.number().min(0, "Holding period must be a positive number"),
  financingCosts: z.number().min(0, "Financing costs must be a positive number"),
  sellingCosts: z.number().min(0, "Selling costs must be a positive number"),
});

export type FixAndFlipCalculatorParams = z.infer<typeof schema>;

export function useFixAndFlipCalculator() {
  const form = useForm<FixAndFlipCalculatorParams>({
    resolver: zodResolver(schema),
    defaultValues: {
      purchasePrice: 200000,
      renovationCosts: 50000,
      arv: 350000,
      holdingPeriod: 6,
      financingCosts: 10000,
      sellingCosts: 21000,
    },
  });

  const { watch } = form;
  const params = watch();
  const { purchasePrice, renovationCosts, arv, financingCosts, sellingCosts } = params;

  const totalCost = purchasePrice + renovationCosts + financingCosts + sellingCosts;
  const profit = arv - totalCost;
  const roi = (profit / totalCost) * 100;

  return { form, params, profit, roi };
}