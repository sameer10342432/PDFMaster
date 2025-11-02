"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useBrrrrMethodCalculator } from "@/hooks/brrrr-method-calculator/useBrrrrMethodCalculator";
import { CalculatorForm } from "@/components/brrrr-method-calculator/CalculatorForm";
import { Results } from "@/components/brrrr-method-calculator/Results";
import { Form } from "@/components/ui/form";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { BRRRR_METHOD_CALCULATOR_CONTENT } from '@/content/tools/brrrr-method-calculator';

const formSchema = z.object({
  purchasePrice: z.number(),
  arv: z.number(),
  renovationCosts: z.number(),
  loanAmount: z.number(),
  interestRate: z.number(),
  loanTerm: z.number(),
  refinanceLoanToValue: z.number(),
  monthlyRent: z.number(),
  vacancyRate: z.number(),
  propertyManagementFee: z.number(),
  maintenanceCosts: z.number(),
  propertyTaxes: z.number(),
  insurance: z.number(),
});

const BrrrrMethodCalculatorPage = () => {
  const { setField, calculate, ...brrrrData } = useBrrrrMethodCalculator();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchasePrice: brrrrData.purchasePrice,
      arv: brrrrData.arv,
      renovationCosts: brrrrData.renovationCosts,
      loanAmount: brrrrData.loanAmount,
      interestRate: brrrrData.interestRate,
      loanTerm: brrrrData.loanTerm,
      refinanceLoanToValue: brrrrData.refinanceLoanToValue,
      monthlyRent: brrrrData.monthlyRent,
      vacancyRate: brrrrData.vacancyRate,
      propertyManagementFee: brrrrData.propertyManagementFee,
      maintenanceCosts: brrrrData.maintenanceCosts,
      propertyTaxes: brrrrData.propertyTaxes,
      insurance: brrrrData.insurance,
    },
  });

  const watchedFields = form.watch();

  useEffect(() => {
    Object.entries(watchedFields).forEach(([key, value]) => {
      setField(key as keyof typeof brrrrData, value as number);
    });
    calculate();
  }, [watchedFields, setField, calculate]);

  return (
    <CalculatorLayout content={BRRRR_METHOD_CALCULATOR_CONTENT}>
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

export default BrrrrMethodCalculatorPage;