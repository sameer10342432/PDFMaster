"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Results = ({ roi }: { roi: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Return on Investment (ROI)</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{roi.toFixed(2)}%</p>
      </CardContent>
    </Card>
  );
};