"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultsProps {
  roi: number;
}

export const Results = ({ roi }: ResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          Return on Investment (ROI): {roi.toFixed(2)}%
        </p>
      </CardContent>
    </Card>
  );
};