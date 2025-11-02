"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  loanAmount: z.number().positive(),
  interestRate: z.number().positive(),
  loanTerm: z.number().positive(),
  points: z.number().min(0),
  closingCosts: z.number().min(0),
});

export const useHardMoneyLoanCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPointsCost, setTotalPointsCost] = useState(0);
  const [totalLoanCost, setTotalLoanCost] = useState(0);
  const [apr, setApr] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanAmount: 200000,
      interestRate: 12,
      loanTerm: 12,
      points: 2,
      closingCosts: 3000,
    },
  });

  const calculateHardMoneyLoan = (data: z.infer<typeof formSchema>) => {
    const monthlyInterestRate = data.interestRate / 100 / 12;
    const payment = data.loanAmount * monthlyInterestRate;
    setMonthlyPayment(payment);

    const totalInterestPaid = payment * data.loanTerm;
    setTotalInterest(totalInterestPaid);

    const pointsCost = data.loanAmount * (data.points / 100);
    setTotalPointsCost(pointsCost);

    const totalCost = totalInterestPaid + pointsCost + data.closingCosts;
    setTotalLoanCost(totalCost);

    const totalLoanAmount = data.loanAmount + pointsCost + data.closingCosts;
    const effectiveApr = ((totalCost / totalLoanAmount) / data.loanTerm) * 12 * 100;
    setApr(effectiveApr);
  };

  const handleFormChange = () => {
    calculateHardMoneyLoan(form.getValues());
  };

  return { form, monthlyPayment, totalInterest, totalPointsCost, totalLoanCost, apr, handleFormChange };
};