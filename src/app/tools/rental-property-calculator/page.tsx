"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRentalPropertyCalculator } from "@/hooks/rental-property-calculator/useRentalPropertyCalculator";
import { CalculatorForm } from "@/components/rental-property-calculator/CalculatorForm";
import { Results } from "@/components/rental-property-calculator/Results";
import { Form } from "@/components/ui/form";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { rentalPropertyCalculator } from "@/content/tools/rental-property-calculator";

const formSchema = z.object({
  monthlyRent: z.number(),
  otherMonthlyIncome: z.number(),
  propertyTaxes: z.number(),
  insurance: z.number(),
  propertyManagementFees: z.number(),
  maintenanceCosts: z.number(),
  otherMonthlyExpenses: z.number(),
  purchasePrice: z.number(),
  downPayment: z.number(),
  interestRate: z.number(),
  loanTerm: z.number(),
  vacancyRate: z.number(),
  appreciationRate: z.number(),
});

const RentalPropertyCalculatorPage = () => {
  const {
    setField,
    calculate,
    ...rentalData
  } = useRentalPropertyCalculator();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyRent: rentalData.monthlyRent,
      otherMonthlyIncome: rentalData.otherMonthlyIncome,
      propertyTaxes: rentalData.propertyTaxes,
      insurance: rentalData.insurance,
      propertyManagementFees: rentalData.propertyManagementFees,
      maintenanceCosts: rentalData.maintenanceCosts,
      otherMonthlyExpenses: rentalData.otherMonthlyExpenses,
      purchasePrice: rentalData.purchasePrice,
      downPayment: rentalData.downPayment,
      interestRate: rentalData.interestRate,
      loanTerm: rentalData.loanTerm,
      vacancyRate: rentalData.vacancyRate,
      appreciationRate: rentalData.appreciationRate,
    },
  });

  const watchedFields = form.watch();

  useEffect(() => {
    Object.entries(watchedFields).forEach(([key, value]) => {
      setField(key as keyof typeof rentalData, value as number);
    });
    calculate();
  }, [watchedFields, setField, calculate]);

  return (
    <CalculatorLayout content={rentalPropertyCalculator}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Form {...form}>
          <form className="space-y-8">
            <CalculatorForm form={form} />
          </form>
        </Form>
        <div className="lg:mt-8">
          <Results />
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default RentalPropertyCalculatorPage;