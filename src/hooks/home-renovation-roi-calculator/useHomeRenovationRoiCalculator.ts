"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  renovationCost: z.number().positive(),
  increaseInPropertyValue: z.number().positive(),
});

export const useHomeRenovationRoiCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      renovationCost: 50000,
      increaseInPropertyValue: 75000,
    },
  });

  const { watch } = form;
  const { renovationCost, increaseInPropertyValue } = watch();

  const calculateRoi = () => {
    if (renovationCost > 0) {
      return (increaseInPropertyValue / renovationCost) * 100;
    }
    return 0;
  };

  const roi = calculateRoi();

  return {
    form,
    roi,
  };
};