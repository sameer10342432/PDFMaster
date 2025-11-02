import { Card, Title, DonutChart, Legend } from "@tremor/react";

const propertyTypes = [
  { name: "Single-Family", value: 45, color: "cyan" },
  { name: "Multi-Family", value: 30, color: "blue" },
  { name: "Commercial", value: 15, color: "indigo" },
  { name: "Industrial", value: 10, color: "violet" },
];

const geographicSpread = [
  { name: "New York", value: 25, color: "amber" },
  { name: "Los Angeles", value: 20, color: "yellow" },
  { name: "Chicago", value: 35, color: "lime" },
  { name: "Houston", value: 20, color: "emerald" },
];

const valueFormatter = (number: number) => `${number}%`;

export default function PortfolioComposition() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      <Card>
        <Title>Property Type Diversification</Title>
        <DonutChart
          className="mt-6"
          data={propertyTypes}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={["cyan", "blue", "indigo", "violet"]}
        />
        <Legend
          className="mt-4"
          categories={propertyTypes.map(p => p.name)}
          colors={["cyan", "blue", "indigo", "violet"]}
        />
      </Card>
      <Card>
        <Title>Geographic Spread</Title>
        <DonutChart
          className="mt-6"
          data={geographicSpread}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={["amber", "yellow", "lime", "emerald"]}
        />
        <Legend
          className="mt-4"
          categories={geographicSpread.map(p => p.name)}
          colors={["amber", "yellow", "lime", "emerald"]}
        />
      </Card>
    </div>
  );
}