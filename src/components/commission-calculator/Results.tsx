"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultsProps {
  commission: number;
}

export function Results({ commission }: ResultsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Commission</p>
            <p>${commission.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}