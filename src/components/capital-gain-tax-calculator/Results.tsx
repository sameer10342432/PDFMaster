import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

interface Props {
  capitalGain: number;
  tax: number;
}

export const Results = ({ capitalGain, tax }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <p>Capital Gain</p>
          <p>{formatNumber(capitalGain)}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Tax</p>
          <p>{formatNumber(tax)}</p>
        </div>
      </CardContent>
    </Card>
  );
};