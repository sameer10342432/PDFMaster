import { Calculator } from "@/components/calculators/Calculator";
import { COMMISSION_CALCULATOR_CONTENT as commissionCalculator } from "@/content/tools/commission-calculator";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";

export default function Page() {
  return (
    <CalculatorLayout content={commissionCalculator}>
      <Calculator
        title={commissionCalculator.title}
        description={commissionCalculator.description}
        inputs={commissionCalculator.calculator.fields}
        calculation={commissionCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
}