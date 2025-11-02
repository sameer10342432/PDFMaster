"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const formSchema = z.object({
  // Renting
  monthlyRent: z.number().positive(),
  rentIncrease: z.number().min(0),

  // Buying
  purchasePrice: z.number().positive(),
  downPayment: z.number().positive(),
  interestRate: z.number().positive(),
  loanTerm: z.number().positive(),
  propertyTax: z.number().min(0),
  homeInsurance: z.number().min(0),
  maintenanceCosts: z.number().min(0),
  closingCosts: z.number().min(0),
  propertyValueGrowth: z.number().min(0),

  // General
  holdingPeriod: z.number().positive(),
});

export const useRentVsBuyCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyRent: 2000,
      rentIncrease: 2,
      purchasePrice: 400000,
      downPayment: 80000,
      interestRate: 6,
      loanTerm: 30,
      propertyTax: 1.2,
      homeInsurance: 100,
      maintenanceCosts: 1,
      closingCosts: 3,
      propertyValueGrowth: 3,
      holdingPeriod: 5,
    },
  });

  const [totalRentCost, setTotalRentCost] = useState(0);
  const [totalBuyCost, setTotalBuyCost] = useState(0);
  const [buyAdvantage, setBuyAdvantage] = useState(0);

  const calculate = (data: z.infer<typeof formSchema>) => {
    const {
      monthlyRent,
      rentIncrease,
      purchasePrice,
      downPayment,
      interestRate,
      loanTerm,
      propertyTax,
      homeInsurance,
      maintenanceCosts,
      closingCosts,
      propertyValueGrowth,
      holdingPeriod,
    } = data;

    // Rent Calculation
    let totalRent = 0;
    let currentMonthlyRent = monthlyRent;
    for (let i = 0; i < holdingPeriod; i++) {
      totalRent += currentMonthlyRent * 12;
      currentMonthlyRent *= 1 + rentIncrease / 100;
    }
    setTotalRentCost(totalRent);

    // Buy Calculation
    const loanAmount = purchasePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount > 0 ? (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) : 0;
    const totalMortgagePayments = monthlyPayment * Math.min(holdingPeriod * 12, numberOfPayments);

    const totalPropertyTax = (purchasePrice * (propertyTax / 100)) * holdingPeriod;
    const totalHomeInsurance = homeInsurance * 12 * holdingPeriod;
    const totalMaintenance = (purchasePrice * (maintenanceCosts / 100)) * holdingPeriod;
    const initialClosingCosts = purchasePrice * (closingCosts / 100);

    const futurePropertyValue = purchasePrice * Math.pow(1 + propertyValueGrowth / 100, holdingPeriod);
    const equity = futurePropertyValue - (loanAmount - (monthlyPayment * Math.min(holdingPeriod * 12, numberOfPayments) - (loanAmount * monthlyInterestRate * Math.min(holdingPeriod * 12, numberOfPayments))));

    const totalCost = downPayment + initialClosingCosts + totalMortgagePayments + totalPropertyTax + totalHomeInsurance + totalMaintenance - (futurePropertyValue - loanAmount);
    setTotalBuyCost(totalCost);

    setBuyAdvantage(totalRent - totalCost);
  };

  useEffect(() => {
    const subscription = form.watch((value) => {
      calculate(value as z.infer<typeof formSchema>);
    });
    calculate(form.getValues());
    return () => subscription.unsubscribe();
  }, [form]);

  return { form, totalRentCost, totalBuyCost, buyAdvantage };
};