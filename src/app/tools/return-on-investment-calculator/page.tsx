"use client";
import { useEffect } from "react";
import { useRoiCalculator } from "@/hooks/return-on-investment-calculator/useRoiCalculator";
import { CalculatorForm } from "@/components/return-on-investment-calculator/CalculatorForm";
import { Results } from "@/components/return-on-investment-calculator/Results";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { ROI_CALCULATOR_CONTENT } from "@/content/tools/return-on-investment-calculator";

const RoiCalculatorPage = () => {
  const { form, roi, calculateRoi } = useRoiCalculator();

  const initialInvestment = form.watch("initialInvestment");
  const finalValue = form.watch("finalValue");

  useEffect(() => {
    calculateRoi(initialInvestment, finalValue);
  }, [initialInvestment, finalValue, calculateRoi]);

  return (
    <CalculatorLayout content={ROI_CALCULATOR_CONTENT}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CalculatorForm form={form} onCalculate={calculateRoi} />
        <Results roi={roi} />
      </div>
    </CalculatorLayout>
  );
};

export default RoiCalculatorPage;