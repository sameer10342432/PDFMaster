"use client";

import { useHardMoneyLoanCalculator } from "@/hooks/hard-money-loan-calculator/useHardMoneyLoanCalculator";
import { CalculatorForm } from "@/components/hard-money-loan-calculator/CalculatorForm";
import { Results } from "@/components/hard-money-loan-calculator/Results";

export default function HardMoneyLoanCalculatorPage() {
  const { form, monthlyPayment, totalInterest, totalPointsCost, totalLoanCost, apr, handleFormChange } = useHardMoneyLoanCalculator();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm form={form} />
        </div>
        <div>
          <Results
            monthlyPayment={monthlyPayment}
            totalInterest={totalInterest}
            totalPointsCost={totalPointsCost}
            totalLoanCost={totalLoanCost}
            apr={apr}
          />
        </div>
      </div>
    </div>
  );
}