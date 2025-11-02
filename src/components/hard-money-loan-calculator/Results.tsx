"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultsProps {
  monthlyPayment: number;
  totalInterest: number;
  totalPointsCost: number;
  totalLoanCost: number;
  apr: number;
}

export const Results = ({ monthlyPayment, totalInterest, totalPointsCost, totalLoanCost, apr }: ResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium">Monthly Payment</p>
          <p className="text-2xl font-bold">${monthlyPayment.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Total Interest</p>
          <p className="text-2xl font-bold">${totalInterest.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Total Points Cost</p>
          <p className="text-2xl font-bold">${totalPointsCost.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Total Loan Cost</p>
          <p className="text-2xl font-bold">${totalLoanCost.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">APR</p>
          <p className="text-2xl font-bold">{apr.toFixed(2)}%</p>
        </div>
      </CardContent>
    </Card>
  );
};