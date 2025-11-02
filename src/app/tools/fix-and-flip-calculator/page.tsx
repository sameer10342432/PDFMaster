"use client";

import { Form } from "@/components/ui/form";
import { useFixAndFlipCalculator } from "@/hooks/fix-and-flip-calculator/useFixAndFlipCalculator";
import { CalculatorForm } from "@/components/fix-and-flip-calculator/CalculatorForm";
import { Results } from "@/components/fix-and-flip-calculator/Results";
import { FIX_AND_FLIP_CALCULATOR_CONTENT } from "@/content/tools/fix-and-flip-calculator";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";

export default function FixAndFlipCalculatorPage() {
  const { form, profit, roi } = useFixAndFlipCalculator();

  return (
    <CalculatorLayout content={FIX_AND_FLIP_CALCULATOR_CONTENT}>
      <Form {...form}>
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CalculatorForm form={form} />
            <div className="lg:mt-8">
              <Results profit={profit} roi={roi} />
            </div>
          </div>
        </form>
      </Form>
    </CalculatorLayout>
  );
}