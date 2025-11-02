"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

interface Props {
  profit: number;
  roi: number;
}

export function Results({ profit, roi }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Estimated Profit</p>
          <p className="text-2xl font-bold">${formatNumber(profit)}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Return on Investment (ROI)</p>
          <p className="text-2xl font-bold">{roi.toFixed(2)}%</p>
        </div>
      </CardContent>
    </Card>
  );
}