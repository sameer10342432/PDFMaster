
'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { TrendingUp, CheckCircle, Info } from 'lucide-react'

const marketTrendsData = [
  { month: 'Jan', avgPrice: 280000 },
  { month: 'Feb', avgPrice: 285000 },
  { month: 'Mar', avgPrice: 290000 },
  { month: 'Apr', avgPrice: 300000 },
  { month: 'May', avgPrice: 310000 },
  { month: 'Jun', avgPrice: 305000 },
]

export default function MarketAnalysis() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Market Trends</CardTitle>
          <CardDescription>Recent price trends in the area</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Average Price']} />
              <Legend />
              <Line type="monotone" dataKey="avgPrice" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Rising Market</h4>
                <p className="text-sm text-gray-600">Property values have increased 4.2% over the past year</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Active Market</h4>
                <p className="text-sm text-gray-600">Properties sell within 28 days on average</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-orange-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Competitive Pricing</h4>
                <p className="text-sm text-gray-600">Price per square foot is above regional average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Valuation Factors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Positive Factors</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Good property condition</li>
                <li>• Desirable neighborhood</li>
                <li>• Recent comparable sales</li>
                <li>• Rising market trend</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Considerations</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Property age impact</li>
                <li>• Market volatility</li>
                <li>• Seasonal variations</li>
                <li>• Economic conditions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}