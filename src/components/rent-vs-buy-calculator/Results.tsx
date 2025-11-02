"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultsProps {
  totalRentCost: number;
  totalBuyCost: number;
  buyAdvantage: number;
}

export const Results = ({ totalRentCost, totalBuyCost, buyAdvantage }: ResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium">Total Cost of Renting</p>
          <p className="text-2xl font-bold">${totalRentCost.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Total Cost of Buying</p>
          <p className="text-2xl font-bold">${totalBuyCost.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Advantage of Buying</p>
          <p className="text-2xl font-bold">${buyAdvantage.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};