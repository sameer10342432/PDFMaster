"use client";

import { create } from "zustand";

export interface RentalPropertyState {
  // Income
  monthlyRent: number;
  otherMonthlyIncome: number;

  // Expenses
  propertyTaxes: number;
  insurance: number;
  propertyManagementFees: number;
  maintenanceCosts: number;
  otherMonthlyExpenses: number;

  // Purchase Details
  purchasePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;

  // Assumptions
  vacancyRate: number;
  appreciationRate: number;

  // Calculations
  totalMonthlyIncome: number;
  totalMonthlyExpenses: number;
  netOperatingIncome: number;
  monthlyMortgagePayment: number;
  cashFlow: number;
  capRate: number;
  cashOnCashReturn: number;

  setField: (field: keyof RentalPropertyState, value: number) => void;
  calculate: () => void;
}

export const useRentalPropertyCalculator = create<RentalPropertyState>((set, get) => ({
  // Income
  monthlyRent: 2000,
  otherMonthlyIncome: 0,

  // Expenses
  propertyTaxes: 200,
  insurance: 100,
  propertyManagementFees: 200,
  maintenanceCosts: 150,
  otherMonthlyExpenses: 50,

  // Purchase Details
  purchasePrice: 300000,
  downPayment: 60000,
  interestRate: 6,
  loanTerm: 30,

  // Assumptions
  vacancyRate: 5,
  appreciationRate: 3,

  // Calculations
  totalMonthlyIncome: 0,
  totalMonthlyExpenses: 0,
  netOperatingIncome: 0,
  monthlyMortgagePayment: 0,
  cashFlow: 0,
  capRate: 0,
  cashOnCashReturn: 0,

  setField: (field, value) => set({ [field]: value }),

  calculate: () => {
    const {
      monthlyRent,
      otherMonthlyIncome,
      propertyTaxes,
      insurance,
      propertyManagementFees,
      maintenanceCosts,
      otherMonthlyExpenses,
      purchasePrice,
      downPayment,
      interestRate,
      loanTerm,
      vacancyRate,
    } = get();

    const totalMonthlyIncome = monthlyRent + otherMonthlyIncome;
    const vacancyLoss = totalMonthlyIncome * (vacancyRate / 100);
    const effectiveGrossIncome = totalMonthlyIncome - vacancyLoss;

    const totalMonthlyExpenses =
      propertyTaxes +
      insurance +
      propertyManagementFees +
      maintenanceCosts +
      otherMonthlyExpenses;

    const netOperatingIncome = (effectiveGrossIncome - totalMonthlyExpenses) * 12;

    const loanAmount = purchasePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyMortgagePayment =
      loanAmount > 0
        ? (loanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
        : 0;

    const cashFlow = effectiveGrossIncome - totalMonthlyExpenses - monthlyMortgagePayment;
    const capRate = (netOperatingIncome / purchasePrice) * 100;
    const totalInvestment = downPayment;
    const cashOnCashReturn = ((cashFlow * 12) / totalInvestment) * 100;

    set({
      totalMonthlyIncome,
      totalMonthlyExpenses,
      netOperatingIncome,
      monthlyMortgagePayment,
      cashFlow,
      capRate,
      cashOnCashReturn,
    });
  },
}));