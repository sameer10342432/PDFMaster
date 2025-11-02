import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Property } from './types'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

interface AnalyticsTabProps {
  properties: Property[]
}

export default function AnalyticsTab({ properties }: AnalyticsTabProps) {
  const propertyTypeData = properties.reduce((acc, property) => {
    const existing = acc.find(item => item.type === property.type)
    if (existing) {
      existing.count += 1
      existing.value += property.value
    } else {
      acc.push({
        type: property.type,
        count: 1,
        value: property.value
      })
    }
    return acc
  }, [] as { type: string; count: number; value: number }[])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Distribution by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({type, count}) => `${type} (${count})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Value']} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Property Values</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={properties}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, '']} />
              <Legend />
              <Bar dataKey="purchasePrice" fill="#8884d8" name="Purchase Price" />
              <Bar dataKey="value" fill="#82ca9d" name="Current Value" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}