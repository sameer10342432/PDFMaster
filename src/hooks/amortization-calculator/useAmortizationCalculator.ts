"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  loanAmount: z.number().min(0, "Loan amount must be greater than 0"),
  interestRate: z.number().min(0, "Interest rate must be greater than 0"),
  loanTerm: z.number().min(0, "Loan term must be greater than 0"),
});

export const useAmortizationCalculator = () => {
  const [amortizationSchedule, setAmortizationSchedule] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanAmount: 300000,
      interestRate: 6,
      loanTerm: 30,
    },
  });

  const calculateAmortization = (
    loanAmount: number,
    interestRate: number,
    loanTerm: number
  ) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    let balance = loanAmount;
    const schedule = [];

    for (let i = 1; i <= numberOfPayments; i++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month: i,
        monthlyPayment: monthlyPayment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        balance: balance.toFixed(2),
      });
    }

    setAmortizationSchedule(schedule);
  };

  return {
    form,
    amortizationSchedule,
    calculateAmortization,
  };
};