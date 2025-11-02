import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface PerformanceTabProps {
  performanceData: {
    name: string;
    roi: number;
    appreciation: number;
    cashFlow: number;
    equity: number;
  }[]
}

export default function PerformanceTab({ performanceData }: PerformanceTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>ROI by Property</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, 'ROI']} />
              <Bar dataKey="roi" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appreciation by Property</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, 'Appreciation']} />
              <Bar dataKey="appreciation" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Equity by Property</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Equity']} />
              <Bar dataKey="equity" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceData.map((property, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{property.name}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">ROI:</span>
                    <span className={`ml-2 font-semibold ${property.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {property.roi.toFixed(2)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Appreciation:</span>
                    <span className={`ml-2 font-semibold ${property.appreciation >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {property.appreciation.toFixed(2)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Cash Flow:</span>
                    <span className={`ml-2 font-semibold ${property.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${property.cashFlow.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Equity:</span>
                    <span className="ml-2 font-semibold">${property.equity.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}