import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  arv: number;
}

export const Results = ({ arv }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent>
        <p>After Repair Value (ARV): ${arv.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
};