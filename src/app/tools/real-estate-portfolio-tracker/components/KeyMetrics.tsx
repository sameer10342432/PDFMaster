import { Card, Metric, Text, Flex, Badge, Icon } from "@tremor/react";
import { 
  BanknotesIcon, 
  ScaleIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon, 
  ReceiptRefundIcon, 
  ChartBarIcon 
} from "@heroicons/react/24/outline";

const metrics = [
  {
    title: "Total Portfolio Value",
    metric: "$1,234,567",
    change: "+1.2%",
    icon: ScaleIcon,
    color: "blue",
  },
  {
    title: "Total Equity",
    metric: "$456,789",
    change: "+2.5%",
    icon: CurrencyDollarIcon,
    color: "green",
  },
  {
    title: "Monthly Cash Flow",
    metric: "$5,678",
    change: "-0.5%",
    icon: BanknotesIcon,
    color: "amber",
  },
  {
    title: "Portfolio Yield",
    metric: "6.8%",
    change: "+0.2%",
    icon: ArrowTrendingUpIcon,
    color: "fuchsia",
  },
  {
    title: "Loan-to-Value (LTV)",
    metric: "65%",
    change: "-1.0%",
    icon: ReceiptRefundIcon,
    color: "rose",
  },
  {
    title: "Diversification Index",
    metric: "7.2/10",
    change: "+0.1",
    icon: ChartBarIcon,
    color: "indigo",
  },
];

export default function KeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {metrics.map((item) => (
        <Card key={item.title} decoration="top" decorationColor={item.color}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
            <Badge 
              color={item.change.startsWith('+') ? 'emerald' : 'rose'}
              icon={item.change.startsWith('+') ? ArrowTrendingUpIcon : ArrowTrendingUpIcon}
            >
              {item.change}
            </Badge>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Icon icon={item.icon} variant="light" size="sm" color={item.color} />
            <Text className="truncate">Compared to last month</Text>
          </Flex>
        </Card>
      ))}
    </div>
  );
}