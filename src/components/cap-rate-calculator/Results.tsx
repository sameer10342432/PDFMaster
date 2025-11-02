import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  capRate: number;
}

export const Results = ({ capRate }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p>Cap Rate</p>
          <p>{capRate.toFixed(2)}%</p>
        </div>
      </CardContent>
    </Card>
  );
};