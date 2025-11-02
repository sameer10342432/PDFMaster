"use client";

import { useRentalPropertyCalculator } from "@/hooks/rental-property-calculator/useRentalPropertyCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const formatToCurrency = (value: number) => `$${value.toFixed(2)}`;
const formatPercentage = (value: number) => `${(value * 100).toFixed(2)}%`;
import { motion } from "framer-motion";

export const Results = () => {
  const {
    totalMonthlyIncome,
    totalMonthlyExpenses,
    netOperatingIncome,
    monthlyMortgagePayment,
    cashFlow,
    capRate,
    cashOnCashReturn,
  } = useRentalPropertyCalculator();

  const results = [
    {
      title: "Total Monthly Income",
      value: formatToCurrency(totalMonthlyIncome),
    },
    {
      title: "Total Monthly Expenses",
      value: formatToCurrency(totalMonthlyExpenses),
    },
    {
      title: "Net Operating Income (Annual)",
      value: formatToCurrency(netOperatingIncome),
    },
    {
      title: "Monthly Mortgage Payment",
      value: formatToCurrency(monthlyMortgagePayment),
    },
    {
      title: "Monthly Cash Flow",
      value: formatToCurrency(cashFlow),
    },
    {
      title: "Cap Rate",
      value: formatPercentage(capRate / 100),
    },
    {
      title: "Cash on Cash Return",
      value: formatPercentage(cashOnCashReturn / 100),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 border rounded-lg"
          >
            <p className="text-sm text-gray-500">{result.title}</p>
            <p className="text-lg font-semibold">{result.value}</p>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};