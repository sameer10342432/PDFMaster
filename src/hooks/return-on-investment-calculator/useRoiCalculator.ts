"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  initialInvestment: z.number().min(0, "Initial investment must be greater than 0"),
  finalValue: z.number().min(0, "Final value must be greater than 0"),
});

export const useRoiCalculator = () => {
  const [roi, setRoi] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialInvestment: 50000,
      finalValue: 75000,
    },
  });

  const calculateRoi = (initialInvestment: number, finalValue: number) => {
    if (initialInvestment === 0) {
      setRoi(0);
      return;
    }
    const calculatedRoi = ((finalValue - initialInvestment) / initialInvestment) * 100;
    setRoi(calculatedRoi);
  };

  return {
    form,
    roi,
    calculateRoi,
  };
};