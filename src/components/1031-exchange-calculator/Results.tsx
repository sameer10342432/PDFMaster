import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

interface Props {
  realizedGain: number;
  recognizedGain: number;
  deferredGain: number;
  taxSavings: number;
  requiredReinvestment: number;
}

export const Results = ({ realizedGain, recognizedGain, deferredGain, taxSavings, requiredReinvestment }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <p>Realized Gain</p>
          <p>{formatNumber(realizedGain)}</p>
        </div>
        <div className="flex justify-between">
          <p>Recognized Gain (Taxable)</p>
          <p>{formatNumber(recognizedGain)}</p>
        </div>
        <div className="flex justify-between">
          <p>Deferred Gain</p>
          <p>{formatNumber(deferredGain)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Tax Savings</p>
          <p>{formatNumber(taxSavings)}</p>
        </div>
        <div className="flex justify-between">
          <p>Required Reinvestment</p>
          <p>{formatNumber(requiredReinvestment)}</p>
        </div>
      </CardContent>
    </Card>
  );
};