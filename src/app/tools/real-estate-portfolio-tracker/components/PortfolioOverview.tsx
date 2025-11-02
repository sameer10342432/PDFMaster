import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, DollarSign, TrendingUp, TrendingDown } from 'lucide-react'
import { Property } from './types'

interface PortfolioOverviewProps {
  properties: Property[]
  totalValue: number
  totalEquity: number
  netMonthlyIncome: number
  appreciationRate: number
  totalAppreciation: number
  totalMonthlyRent: number;
  totalMonthlyExpenses: number;
}

export default function PortfolioOverview({ 
  properties, 
  totalValue, 
  totalEquity, 
  netMonthlyIncome, 
  appreciationRate, 
  totalAppreciation,
  totalMonthlyRent,
  totalMonthlyExpenses
}: PortfolioOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
          <Home className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {properties.length} properties
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Equity</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalEquity.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {totalValue > 0 ? ((totalEquity / totalValue) * 100).toFixed(1) : 0}% of total value
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Cash Flow</CardTitle>
          {netMonthlyIncome >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${netMonthlyIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${netMonthlyIncome.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            ${totalMonthlyRent.toLocaleString()} rent - ${totalMonthlyExpenses.toLocaleString()} expenses
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Appreciation</CardTitle>
          {appreciationRate >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${appreciationRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {appreciationRate.toFixed(1)}%
          </div>
          <p className="text-xs text-muted-foreground">
            ${totalAppreciation.toLocaleString()} gain
          </p>
        </CardContent>
      </Card>
    </div>
  )
}