
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ClosingCostBreakdown } from '../hooks/useClosingCostsCalculator';

interface ResultsProps {
  results: ClosingCostBreakdown | null;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

export const Results: React.FC<ResultsProps> = ({ results }) => {
  if (!results) return null;

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Closing Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Total Closing Costs</h3>
          <Badge variant="secondary" className="text-lg">{formatCurrency(results.totalClosingCosts)}</Badge>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Percentage of Purchase Price: {results.percentageOfPurchasePrice.toFixed(2)}%
        </p>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <h4 className="font-bold mb-2">Buyer Costs</h4>
            <ul>
              {Object.entries(results.buyerCosts).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</span>
                  <span>{formatCurrency(value as number)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Seller Costs</h4>
            <ul>
              {Object.entries(results.sellerCosts).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</span>
                  <span>{formatCurrency(value as number)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};