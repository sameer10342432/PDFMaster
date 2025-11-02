"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  grossRentMultiplier: number;
}

export function Results({ grossRentMultiplier }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">Gross Rent Multiplier</p>
          <p className="text-2xl font-bold">{grossRentMultiplier.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}