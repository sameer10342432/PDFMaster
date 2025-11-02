'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Separator } from '@/components/ui/separator'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, Calculator, DollarSign, Info, AlertCircle, Target, PieChart } from 'lucide-react'

interface AppreciationData {
  year: number
  value: number
  appreciation: number
  cumulativeAppreciation: number
  equity: number
}

export default function PropertyAppreciationCalculator() {
  const [initialValue, setInitialValue] = useState<string>('500000')
  const [annualRate, setAnnualRate] = useState<string>('3.5')
  const [years, setYears] = useState<string>('10')
  const [downPayment, setDownPayment] = useState<string>('100000')
  const [monthlyPayment, setMonthlyPayment] = useState<string>('2000')
  const [results, setResults] = useState<AppreciationData[]>([])
  const [totalAppreciation, setTotalAppreciation] = useState<number>(0)
  const [finalValue, setFinalValue] = useState<number>(0)
  const [totalEquity, setTotalEquity] = useState<number>(0)

  const calculateAppreciation = useCallback(() => {
    const initial = parseFloat(initialValue) || 0
    const rate = parseFloat(annualRate) / 100 || 0
    const period = parseInt(years) || 0
    const down = parseFloat(downPayment) || 0
    const monthly = parseFloat(monthlyPayment) || 0

    const data: AppreciationData[] = []
    let currentValue = initial
    let cumulativeAppreciation = 0
    let principalPaid = 0

    for (let year = 0; year <= period; year++) {
      if (year > 0) {
        const yearlyAppreciation = currentValue * rate
        currentValue += yearlyAppreciation
        cumulativeAppreciation += yearlyAppreciation
        principalPaid += monthly * 12 * 0.3 // Assuming 30% goes to principal
      }

      const equity = down + principalPaid + cumulativeAppreciation

      data.push({
        year,
        value: Math.round(currentValue),
        appreciation: year === 0 ? 0 : Math.round(currentValue * rate),
        cumulativeAppreciation: Math.round(cumulativeAppreciation),
        equity: Math.round(equity)
      })
    }

    setResults(data)
    setTotalAppreciation(cumulativeAppreciation)
    setFinalValue(currentValue)
    setTotalEquity(data[data.length - 1]?.equity || 0)
  }, [initialValue, annualRate, years, downPayment, monthlyPayment]);

  useEffect(() => {
    calculateAppreciation()
  }, [calculateAppreciation])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`
  }

  const appreciationRate = totalAppreciation > 0 ? ((finalValue - parseFloat(initialValue)) / parseFloat(initialValue)) * 100 : 0
  const equityGrowthRate = totalEquity > 0 ? ((totalEquity - parseFloat(downPayment)) / parseFloat(downPayment)) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Property Appreciation Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate property value growth over time and track your real estate investment appreciation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Property Details
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your property information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="initialValue" className="text-sm font-medium">Initial Property Value</Label>
                  <Input
                    id="initialValue"
                    type="number"
                    value={initialValue}
                    onChange={(e) => setInitialValue(e.target.value)}
                    className="text-lg"
                    placeholder="500000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualRate" className="text-sm font-medium">Annual Appreciation Rate (%)</Label>
                  <Input
                    id="annualRate"
                    type="number"
                    step="0.1"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(e.target.value)}
                    className="text-lg"
                    placeholder="3.5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="years" className="text-sm font-medium">Time Period (Years)</Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="text-lg"
                    placeholder="10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="downPayment" className="text-sm font-medium">Down Payment</Label>
                  <Input
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="text-lg"
                    placeholder="100000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyPayment" className="text-sm font-medium">Monthly Mortgage Payment</Label>
                  <Input
                    id="monthlyPayment"
                    type="number"
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(e.target.value)}
                    className="text-lg"
                    placeholder="2000"
                  />
                </div>

                <Button 
                  onClick={calculateAppreciation}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3"
                >
                  Calculate Appreciation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Final Value</p>
                      <p className="text-2xl font-bold">{formatCurrency(finalValue)}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Appreciation</p>
                      <p className="text-2xl font-bold">{formatCurrency(totalAppreciation)}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Total Equity</p>
                      <p className="text-2xl font-bold">{formatCurrency(totalEquity)}</p>
                    </div>
                    <Target className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Growth Rate</p>
                      <p className="text-2xl font-bold">{formatPercentage(appreciationRate)}</p>
                    </div>
                    <PieChart className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Analysis */}
            <Tabs defaultValue="chart" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chart">Appreciation Chart</TabsTrigger>
                <TabsTrigger value="table">Year-by-Year</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>

              <TabsContent value="chart" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Value Growth Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={results}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                          <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#2563eb" 
                            strokeWidth={3}
                            name="Property Value"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="equity" 
                            stroke="#16a34a" 
                            strokeWidth={2}
                            name="Total Equity"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Annual Appreciation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={results.slice(1)}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                          <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                          <Bar dataKey="appreciation" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="table" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Year-by-Year Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Year</th>
                            <th className="text-right p-2">Property Value</th>
                            <th className="text-right p-2">Annual Appreciation</th>
                            <th className="text-right p-2">Cumulative Appreciation</th>
                            <th className="text-right p-2">Total Equity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.map((row, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-2 font-medium">{row.year}</td>
                              <td className="p-2 text-right">{formatCurrency(row.value)}</td>
                              <td className="p-2 text-right">{formatCurrency(row.appreciation)}</td>
                              <td className="p-2 text-right">{formatCurrency(row.cumulativeAppreciation)}</td>
                              <td className="p-2 text-right font-medium text-green-600">{formatCurrency(row.equity)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analysis" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5" />
                        Investment Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Initial Investment:</span>
                          <span className="font-medium">{formatCurrency(parseFloat(downPayment))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Property Appreciation:</span>
                          <span className="font-medium text-green-600">{formatCurrency(totalAppreciation)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Equity Growth Rate:</span>
                          <span className="font-medium">{formatPercentage(equityGrowthRate)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Return:</span>
                          <span className="text-green-600">{formatCurrency(totalEquity - parseFloat(downPayment))}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Key Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm">
                            <strong>Average Annual Growth:</strong> Your property is expected to grow by {formatPercentage(parseFloat(annualRate))} annually.
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="text-sm">
                            <strong>Wealth Building:</strong> Over {years} years, your equity will grow to {formatCurrency(totalEquity)}.
                          </p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <p className="text-sm">
                            <strong>ROI:</strong> Your return on investment is {formatPercentage(equityGrowthRate)} over {years} years.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Property Appreciation</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Factors Affecting Appreciation:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Location and neighborhood development</li>
                          <li>• Local economic conditions</li>
                          <li>• Supply and demand dynamics</li>
                          <li>• Property improvements and maintenance</li>
                          <li>• Market trends and interest rates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Maximizing Appreciation:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Choose properties in growing areas</li>
                          <li>• Invest in home improvements</li>
                          <li>• Maintain the property well</li>
                          <li>• Monitor local market conditions</li>
                          <li>• Consider long-term holding strategies</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}