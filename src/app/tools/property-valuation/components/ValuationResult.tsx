
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import { Valuation } from '../types';

export default function ValuationResult({ valuation }: { valuation: Valuation }) {
  const valuationMethodsData = [
    { name: 'Comparative', value: valuation.valuationMethods.comparativeSales, color: '#8884d8' },
    { name: 'Cost', value: valuation.valuationMethods.costApproach, color: '#82ca9d' },
    { name: 'Income', value: valuation.valuationMethods.incomeApproach, color: '#ffc658' },
  ]

  return (
    <>
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-blue-800">
            ${valuation.estimatedValue.toLocaleString()}
          </CardTitle>
          <p className="text-lg text-blue-600">Estimated Property Value</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Valuation Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={valuationMethodsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {valuationMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Value']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span>Price per Sq Ft</span>
                <span className="font-semibold">${valuation.marketTrends.pricePerSqFt}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Annual Appreciation</span>
                <span className="font-semibold text-green-600">
                  {valuation.marketTrends.appreciation}%
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Avg Days on Market</span>
                <span className="font-semibold">{valuation.marketTrends.daysOnMarket} days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Valuation Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Comparative Sales Approach (60% weight)</span>
              <span className="font-semibold">${valuation.valuationMethods.comparativeSales.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Cost Approach (25% weight)</span>
              <span className="font-semibold">${valuation.valuationMethods.costApproach.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Income Approach (15% weight)</span>
              <span className="font-semibold">${valuation.valuationMethods.incomeApproach.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}