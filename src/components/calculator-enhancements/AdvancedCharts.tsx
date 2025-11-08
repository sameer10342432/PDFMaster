'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
}

interface AdvancedChartsProps {
  data: ChartData[];
  type: 'line' | 'bar' | 'pie' | 'area';
  title: string;
  dataKeys?: string[];
  colors?: string[];
}

const DEFAULT_COLORS = [
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
];

export const AdvancedCharts: React.FC<AdvancedChartsProps> = ({
  data,
  type,
  title,
  dataKeys = ['value'],
  colors = DEFAULT_COLORS,
}) => {
  if (!data || data.length === 0) return null;
  
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={(entry) => `${entry.name}: ${entry.value}`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.map((key, index) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  stroke={colors[index % colors.length]}
                  fillOpacity={0.6}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <Card className="border-indigo-200">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};

/**
 * Generate amortization chart data from payment schedule
 */
export const generateAmortizationChartData = (
  loanAmount: number,
  monthlyPayment: number,
  interestRate: number,
  termMonths: number
): ChartData[] => {
  const data: ChartData[] = [];
  let remainingBalance = loanAmount;
  const monthlyRate = interestRate / 100 / 12;
  
  for (let month = 0; month <= termMonths; month += 12) {
    if (month === 0) {
      data.push({
        name: `Year 0`,
        principal: 0,
        interest: 0,
        balance: loanAmount,
      });
    } else {
      const interest = remainingBalance * monthlyRate;
      const principal = monthlyPayment - interest;
      remainingBalance = Math.max(0, remainingBalance - principal * 12);
      
      data.push({
        name: `Year ${month / 12}`,
        principal: principal * 12,
        interest: interest * 12,
        balance: remainingBalance,
      });
    }
  }
  
  return data;
};

/**
 * Generate ROI comparison chart data
 */
export const generateROIComparisonData = (
  scenarios: { name: string; roi: number; cashFlow: number }[]
): ChartData[] => {
  return scenarios.map(scenario => ({
    name: scenario.name,
    ROI: scenario.roi,
    'Cash Flow': scenario.cashFlow,
  }));
};

/**
 * Generate property appreciation projection data
 */
export const generateAppreciationProjection = (
  currentValue: number,
  appreciationRate: number,
  years: number
): ChartData[] => {
  const data: ChartData[] = [];
  
  for (let year = 0; year <= years; year++) {
    const value = currentValue * Math.pow(1 + appreciationRate / 100, year);
    data.push({
      name: `Year ${year}`,
      value: Math.round(value),
    });
  }
  
  return data;
};
