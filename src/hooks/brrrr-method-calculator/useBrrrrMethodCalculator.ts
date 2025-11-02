import { useState } from "react";

const initialState = {
  purchasePrice: 150000,
  arv: 250000,
  renovationCosts: 40000,
  loanAmount: 120000,
  interestRate: 5,
  loanTerm: 30,
  refinanceLoanToValue: 75,
  monthlyRent: 2000,
  vacancyRate: 5,
  propertyManagementFee: 10,
  maintenanceCosts: 100,
  propertyTaxes: 200,
  insurance: 100,
  totalInvestment: 0,
  cashOutRefinance: 0,
  monthlyCashFlow: 0,
  cashOnCashReturn: 0,
  capRate: 0,
};

export const useBrrrrMethodCalculator = () => {
  const [data, setData] = useState(initialState);

  const setField = (field: keyof typeof initialState, value: number) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const {
      purchasePrice,
      arv,
      renovationCosts,
      loanAmount,
      interestRate,
      loanTerm,
      refinanceLoanToValue,
      monthlyRent,
      vacancyRate,
      propertyManagementFee,
      maintenanceCosts,
      propertyTaxes,
      insurance,
    } = data;

    const totalInvestment = purchasePrice + renovationCosts - loanAmount;
    const refinanceLoanAmount = arv * (refinanceLoanToValue / 100);
    const cashOutRefinance = refinanceLoanAmount - loanAmount;

    const monthlyVacancy = monthlyRent * (vacancyRate / 100);
    const monthlyPropertyManagement = monthlyRent * (propertyManagementFee / 100);
    const monthlyExpenses = monthlyVacancy + monthlyPropertyManagement + maintenanceCosts + propertyTaxes + insurance;
    const monthlyCashFlow = monthlyRent - monthlyExpenses;

    const cashOnCashReturn = (monthlyCashFlow * 12) / totalInvestment;
    const noi = (monthlyRent * 12) - (monthlyExpenses * 12);
    const capRate = (noi / arv) * 100;

    setData((prev) => ({
      ...prev,
      totalInvestment,
      cashOutRefinance,
      monthlyCashFlow,
      cashOnCashReturn: isFinite(cashOnCashReturn) ? cashOnCashReturn * 100 : 0,
      capRate: isFinite(capRate) ? capRate : 0,
    }));
  };

  return { ...data, setField, calculate };
};