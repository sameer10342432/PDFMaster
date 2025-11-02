import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface CashFlowTabProps {
  cashFlowData: {
    name: string;
    rent: number;
    expenses: number;
    netIncome: number;
  }[]
  totalMonthlyRent: number
  totalMonthlyExpenses: number
  netMonthlyIncome: number
  totalInvestment: number
}

export default function CashFlowTab({ 
  cashFlowData, 
  totalMonthlyRent, 
  totalMonthlyExpenses, 
  netMonthlyIncome, 
  totalInvestment 
}: CashFlowTabProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Cash Flow Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
              <Legend />
              <Bar dataKey="rent" fill="#82ca9d" name="Monthly Rent" />
              <Bar dataKey="expenses" fill="#ff7c7c" name="Monthly Expenses" />
              <Bar dataKey="netIncome" fill="#8884d8" name="Net Income" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Monthly Rent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ${totalMonthlyRent.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              ${totalMonthlyExpenses.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Net Monthly Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${netMonthlyIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${netMonthlyIncome.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Annual Projections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Annual Income</h4>
              <p className="text-2xl font-bold text-green-600">
                ${(totalMonthlyRent * 12).toLocaleString()}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Annual Expenses</h4>
              <p className="text-2xl font-bold text-red-600">
                ${(totalMonthlyExpenses * 12).toLocaleString()}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Annual Net Income</h4>
              <p className={`text-2xl font-bold ${netMonthlyIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${(netMonthlyIncome * 12).toLocaleString()}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Portfolio Yield</h4>
              <p className="text-2xl font-bold text-blue-600">
                {totalInvestment > 0 ? ((netMonthlyIncome * 12 / totalInvestment) * 100).toFixed(2) : 0}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}