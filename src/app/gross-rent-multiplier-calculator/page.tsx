"use client";

import { Form } from "@/components/ui/form";
import { useGrossRentMultiplierCalculator } from "@/hooks/gross-rent-multiplier-calculator/useGrossRentMultiplierCalculator";
import { CalculatorForm } from "@/components/gross-rent-multiplier-calculator/CalculatorForm";
import { Results } from "@/components/gross-rent-multiplier-calculator/Results";
import { GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT } from "@/content/tools/gross-rent-multiplier-calculator";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";

export default function GrossRentMultiplierCalculator() {
  const { form, grossRentMultiplier } = useGrossRentMultiplierCalculator();

  return (
    <CalculatorLayout content={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT}>
      <Form {...form}>
        <form className="space-y-8">
          <CalculatorForm form={form} />
          <Results grossRentMultiplier={grossRentMultiplier} />
        </form>
      </Form>
    </CalculatorLayout>
  );
}