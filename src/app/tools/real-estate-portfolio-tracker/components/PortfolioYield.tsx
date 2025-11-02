import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  { date: "Jan 22", "Portfolio Yield": 6.2, "Market Benchmark": 5.5 },
  { date: "Feb 22", "Portfolio Yield": 6.3, "Market Benchmark": 5.6 },
  { date: "Mar 22", "Portfolio Yield": 6.4, "Market Benchmark": 5.7 },
  { date: "Apr 22", "Portfolio Yield": 6.5, "Market Benchmark": 5.8 },
  { date: "May 22", "Portfolio Yield": 6.6, "Market Benchmark": 5.9 },
  { date: "Jun 22", "Portfolio Yield": 6.7, "Market Benchmark": 6.0 },
  { date: "Jul 22", "Portfolio Yield": 6.8, "Market Benchmark": 6.1 },
  { date: "Aug 22", "Portfolio Yield": 6.9, "Market Benchmark": 6.2 },
  { date: "Sep 22", "Portfolio Yield": 7.0, "Market Benchmark": 6.3 },
  { date: "Oct 22", "Portfolio Yield": 7.1, "Market Benchmark": 6.4 },
  { date: "Nov 22", "Portfolio Yield": 7.2, "Market Benchmark": 6.5 },
  { date: "Dec 22", "Portfolio Yield": 7.3, "Market Benchmark": 6.6 },
];

const valueFormatter = (number: number) => `${number}%`;

export default function PortfolioYield() {
  return (
    <Card className="mt-12">
      <Title>Portfolio Yield vs. Market Benchmark</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Portfolio Yield", "Market Benchmark"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}