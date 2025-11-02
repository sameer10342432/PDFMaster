import { useBrrrrMethodCalculator } from "@/hooks/brrrr-method-calculator/useBrrrrMethodCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { motion } from "framer-motion";

export const Results = () => {
  const { totalInvestment, cashOutRefinance, monthlyCashFlow, cashOnCashReturn, capRate } = useBrrrrMethodCalculator();

  const results = [
    { label: "Total Investment", value: formatCurrency(totalInvestment) },
    { label: "Cash Out on Refinance", value: formatCurrency(cashOutRefinance) },
    { label: "Monthly Cash Flow", value: formatCurrency(monthlyCashFlow) },
    { label: "Cash on Cash Return", value: formatPercentage(cashOnCashReturn) },
    { label: "Cap Rate", value: formatPercentage(capRate) },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex justify-between items-center"
            >
              <span className="font-medium">{result.label}</span>
              <span className="font-bold text-lg">{result.value}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};