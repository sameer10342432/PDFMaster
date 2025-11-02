import { Card, Title, ProgressBar, Flex, Text, Color } from "@tremor/react";

interface LTVData {
  name: string;
  value: number;
  limit: number;
  color: Color;
}

const data: LTVData[] = [
  {
    name: "Portfolio LTV",
    value: 65,
    limit: 75,
    color: "teal",
  },
  {
    name: "Single-Family LTV",
    value: 60,
    limit: 80,
    color: "cyan",
  },
  {
    name: "Multi-Family LTV",
    value: 70,
    limit: 75,
    color: "blue",
  },
  {
    name: "Commercial LTV",
    value: 55,
    limit: 70,
    color: "indigo",
  },
];

export default function PortfolioLTV() {
  return (
    <Card className="mt-12">
      <Title>Loan-to-Value (LTV) Ratios</Title>
      <div className="space-y-6 mt-6">
        {data.map((item) => (
          <div key={item.name}>
            <Flex>
              <Text className="w-40">{item.name}</Text>
              <Flex className="space-x-4" justifyContent="end">
                <Text>{`${item.value}%`}</Text>
                <Text>{`Limit: ${item.limit}%`}</Text>
              </Flex>
            </Flex>
            <ProgressBar value={item.value} color={item.color} className="mt-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}