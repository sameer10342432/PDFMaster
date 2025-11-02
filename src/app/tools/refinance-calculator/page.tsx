'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { DollarSign, TrendingDown, Calculator, TrendingUp, AlertCircle, Info, RefreshCw } from 'lucide-react'

interface RefinanceAnalysis {
  currentLoanBalance: number
  newLoanAmount: number
  currentMonthlyPayment: number
  newMonthlyPayment: number
  monthlySavings: number
  totalClosingCosts: number
  breakEvenMonths: number
  totalInterestSavings: number
  cashOutAmount: number
  newLoanToValue: number
  payoffTime: number
  netBenefit: number
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${payload.name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function RefinanceCalculator() {
  const [currentLoanBalance, setCurrentLoanBalance] = useState<string>('300000')
  const [currentInterestRate, setCurrentInterestRate] = useState<string>('7.5')
  const [currentRemainingYears, setCurrentRemainingYears] = useState<string>('25')
  const [newInterestRate, setNewInterestRate] = useState<string>('6.0')
  const [newLoanTerm, setNewLoanTerm] = useState<string>('30')
  const [homeValue, setHomeValue] = useState<string>('450000')
  const [closingCosts, setClosingCosts] = useState<string>('5000')
  const [cashOut, setCashOut] = useState<string>('0')
  const [refinanceType, setRefinanceType] = useState<string>('rate-term')
  const [pointsPercent, setPointsPercent] = useState<string>('0')
  const [results, setResults] = useState<RefinanceAnalysis | null>(null)

  const calculateRefinance = useCallback(() => {
    const balance = parseFloat(currentLoanBalance) || 0
    const currentRate = parseFloat(currentInterestRate) / 100 / 12 || 0
    const remainingMonths = parseFloat(currentRemainingYears) * 12 || 0
    const newRate = parseFloat(newInterestRate) / 100 / 12 || 0
    const newTermMonths = parseFloat(newLoanTerm) * 12 || 0
    const value = parseFloat(homeValue) || 0
    const costs = parseFloat(closingCosts) || 0
    const cashOutAmount = parseFloat(cashOut) || 0
    const points = parseFloat(pointsPercent) / 100 || 0

    // Current monthly payment calculation
    let currentMonthlyPayment = 0
    if (currentRate > 0 && remainingMonths > 0) {
      currentMonthlyPayment = balance * (currentRate * Math.pow(1 + currentRate, remainingMonths)) / (Math.pow(1 + currentRate, remainingMonths) - 1)
    }

    // New loan amount (balance + cash out + closing costs if rolled in)
    const newLoanAmount = balance + cashOutAmount + (refinanceType === 'no-cost' ? costs : 0)
    
    // Points cost
    const pointsCost = newLoanAmount * points

    // Total closing costs
    const totalClosingCosts = costs + pointsCost

    // New monthly payment calculation
    let newMonthlyPayment = 0
    if (newRate > 0 && newTermMonths > 0) {
      newMonthlyPayment = newLoanAmount * (newRate * Math.pow(1 + newRate, newTermMonths)) / (Math.pow(1 + newRate, newTermMonths) - 1)
    }

    // Monthly savings
    const monthlySavings = currentMonthlyPayment - newMonthlyPayment

    // Break-even calculation
    const breakEvenMonths = monthlySavings > 0 ? totalClosingCosts / monthlySavings : 0

    // Total interest calculations
    const currentTotalInterest = (currentMonthlyPayment * remainingMonths) - balance
    const newTotalInterest = (newMonthlyPayment * newTermMonths) - newLoanAmount
    const totalInterestSavings = currentTotalInterest - newTotalInterest

    // Loan-to-value ratio
    const newLoanToValue = (newLoanAmount / value) * 100

    // Net benefit over 5 years
    const fiveYearSavings = monthlySavings * 60
    const netBenefit = fiveYearSavings - totalClosingCosts

    const analysis: RefinanceAnalysis = {
      currentLoanBalance: balance,
      newLoanAmount,
      currentMonthlyPayment,
      newMonthlyPayment,
      monthlySavings,
      totalClosingCosts,
      breakEvenMonths,
      totalInterestSavings,
      cashOutAmount,
      newLoanToValue,
      payoffTime: newTermMonths / 12,
      netBenefit
    }

    setResults(analysis)
  }, [currentLoanBalance, currentInterestRate, currentRemainingYears, newInterestRate, newLoanTerm, homeValue, closingCosts, cashOut, refinanceType, pointsPercent])

  useEffect(() => {
    calculateRefinance()
  }, [calculateRefinance])

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

  // Data for charts
  const paymentComparison = results ? [
    { name: 'Current Loan', payment: results.currentMonthlyPayment, color: '#ef4444' },
    { name: 'New Loan', payment: results.newMonthlyPayment, color: '#22c55e' }
  ] : []

  const costBreakdown = results ? [
    { name: 'Closing Costs', value: parseFloat(closingCosts), color: '#3b82f6' },
    { name: 'Points', value: results.newLoanAmount * parseFloat(pointsPercent) / 100, color: '#f59e0b' }
  ].filter(item => item.value > 0) : []

  const savingsTimeline = results ? Array.from({ length: 120 }, (_, i) => {
    const month = i + 1
    const cumulativeSavings = results.monthlySavings * month
    const netSavings = cumulativeSavings - results.totalClosingCosts
    return {
      month,
      cumulativeSavings,
      netSavings,
      breakEven: month >= results.breakEvenMonths
    }
  }) : []

  const interestComparison = results ? [
    { name: 'Current Loan', interest: (results.currentMonthlyPayment * parseFloat(currentRemainingYears) * 12) - results.currentLoanBalance, color: '#ef4444' },
    { name: 'New Loan', interest: (results.newMonthlyPayment * parseFloat(newLoanTerm) * 12) - results.newLoanAmount, color: '#22c55e' }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-green-600 rounded-full">
              <RefreshCw className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Refinance Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze mortgage refinancing options and calculate potential savings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Refinance Details
                </CardTitle>
                <CardDescription className="text-green-100">
                  Enter your current and new loan information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Current Loan</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentLoanBalance" className="text-sm font-medium">Current Loan Balance</Label>
                    <Input
                      id="currentLoanBalance"
                      type="number"
                      value={currentLoanBalance}
                      onChange={(e) => setCurrentLoanBalance(e.target.value)}
                      className="text-lg"
                      placeholder="300000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentInterestRate" className="text-sm font-medium">Current Interest Rate (%)</Label>
                    <Input
                      id="currentInterestRate"
                      type="number"
                      step="0.1"
                      value={currentInterestRate}
                      onChange={(e) => setCurrentInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="7.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentRemainingYears" className="text-sm font-medium">Remaining Years</Label>
                    <Input
                      id="currentRemainingYears"
                      type="number"
                      value={currentRemainingYears}
                      onChange={(e) => setCurrentRemainingYears(e.target.value)}
                      className="text-lg"
                      placeholder="25"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">New Loan</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newInterestRate" className="text-sm font-medium">New Interest Rate (%)</Label>
                    <Input
                      id="newInterestRate"
                      type="number"
                      step="0.1"
                      value={newInterestRate}
                      onChange={(e) => setNewInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="6.0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newLoanTerm" className="text-sm font-medium">New Loan Term (Years)</Label>
                    <Select value={newLoanTerm} onValueChange={setNewLoanTerm}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="refinanceType" className="text-sm font-medium">Refinance Type</Label>
                    <Select value={refinanceType} onValueChange={setRefinanceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rate-term">Rate & Term</SelectItem>
                        <SelectItem value="cash-out">Cash-Out</SelectItem>
                        <SelectItem value="no-cost">No-Cost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {refinanceType === 'cash-out' && (
                    <div className="space-y-2">
                      <Label htmlFor="cashOut" className="text-sm font-medium">Cash Out Amount</Label>
                      <Input
                        id="cashOut"
                        type="number"
                        value={cashOut}
                        onChange={(e) => setCashOut(e.target.value)}
                        className="text-lg"
                        placeholder="0"
                      />
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Property & Costs</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="homeValue" className="text-sm font-medium">Current Home Value</Label>
                    <Input
                      id="homeValue"
                      type="number"
                      value={homeValue}
                      onChange={(e) => setHomeValue(e.target.value)}
                      className="text-lg"
                      placeholder="450000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closingCosts" className="text-sm font-medium">Closing Costs</Label>
                    <Input
                      id="closingCosts"
                      type="number"
                      value={closingCosts}
                      onChange={(e) => setClosingCosts(e.target.value)}
                      className="text-lg"
                      placeholder="5000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pointsPercent" className="text-sm font-medium">Points (%)</Label>
                    <Select value={pointsPercent} onValueChange={setPointsPercent}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select points" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 points</SelectItem>
                        <SelectItem value="0.5">0.5 points</SelectItem>
                        <SelectItem value="1">1 point</SelectItem>
                        <SelectItem value="1.5">1.5 points</SelectItem>
                        <SelectItem value="2">2 points</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={calculateRefinance}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-3"
                >
                  Calculate Refinance
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {results && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className={`${results.monthlySavings > 0 ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.monthlySavings > 0 ? 'text-green-100' : 'text-red-100'} text-sm`}>Monthly Savings</p>
                          <p className="text-2xl font-bold">{formatCurrency(Math.abs(results.monthlySavings))}</p>
                        </div>
                        <TrendingDown className={`h-8 w-8 ${results.monthlySavings > 0 ? 'text-green-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Break-Even</p>
                          <p className="text-2xl font-bold">{results.breakEvenMonths.toFixed(0)} mo</p>
                        </div>
                        <Calculator className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Closing Costs</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.totalClosingCosts)}</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${results.netBenefit > 0 ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.netBenefit > 0 ? 'text-green-100' : 'text-red-100'} text-sm`}>5-Year Benefit</p>
                          <p className="text-2xl font-bold">{formatCurrency(Math.abs(results.netBenefit))}</p>
                        </div>
                        <TrendingUp className={`h-8 w-8 ${results.netBenefit > 0 ? 'text-green-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Analysis */}
                <Tabs defaultValue="comparison" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="comparison">Payment Comparison</TabsTrigger>
                    <TabsTrigger value="savings">Savings Timeline</TabsTrigger>
                    <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  </TabsList>

                  <TabsContent value="comparison" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Payment Comparison</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={paymentComparison}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} />
                                <Tooltip formatter={(value: number) => [formatCurrency(value), 'Payment']} />
                                <Bar dataKey="payment" fill="#3b82f6" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Total Interest Comparison</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={interestComparison}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                                <Tooltip formatter={(value: number) => [formatCurrency(value), 'Interest']} />
                                <Bar dataKey="interest" fill="#f59e0b" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Loan Comparison Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Current Loan</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Balance:</span>
                                <span className="font-medium">{formatCurrency(results.currentLoanBalance)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Interest Rate:</span>
                                <span className="font-medium">{formatPercentage(parseFloat(currentInterestRate))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Monthly Payment:</span>
                                <span className="font-medium">{formatCurrency(results.currentMonthlyPayment)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Remaining Term:</span>
                                <span className="font-medium">{currentRemainingYears} years</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">New Loan</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Loan Amount:</span>
                                <span className="font-medium">{formatCurrency(results.newLoanAmount)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Interest Rate:</span>
                                <span className="font-medium">{formatPercentage(parseFloat(newInterestRate))}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Monthly Payment:</span>
                                <span className="font-medium">{formatCurrency(results.newMonthlyPayment)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Loan Term:</span>
                                <span className="font-medium">{newLoanTerm} years</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="savings" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cumulative Savings Over Time</CardTitle>
                        <CardDescription>
                          Track when you&apos;ll break even and start saving money
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={savingsTimeline.filter((_, i) => i % 6 === 0)}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Legend />
                              <Line 
                                type="monotone" 
                                dataKey="cumulativeSavings" 
                                stroke="#3b82f6" 
                                strokeWidth={2}
                                name="Cumulative Savings"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="netSavings" 
                                stroke="#22c55e" 
                                strokeWidth={3}
                                name="Net Savings (After Costs)"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Break-Even Point</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-blue-600">
                              {results.breakEvenMonths.toFixed(0)}
                            </p>
                            <p className="text-sm text-gray-600">months</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">5-Year Savings</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className={`text-3xl font-bold ${results.netBenefit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrency(Math.abs(results.netBenefit))}
                            </p>
                            <p className="text-sm text-gray-600">net benefit</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Interest Savings</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className={`text-3xl font-bold ${results.totalInterestSavings > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrency(Math.abs(results.totalInterestSavings))}
                            </p>
                            <p className="text-sm text-gray-600">over loan life</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="costs" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Refinance Costs Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={costBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={renderCustomizedLabel}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {costBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Cost Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Closing Costs:</span>
                              <span className="font-medium">{formatCurrency(parseFloat(closingCosts))}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Points Cost:</span>
                              <span className="font-medium">{formatCurrency(results.newLoanAmount * parseFloat(pointsPercent) / 100)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Costs:</span>
                              <span className="text-red-600">{formatCurrency(results.totalClosingCosts)}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <span>Monthly Savings:</span>
                              <span className={`font-medium ${results.monthlySavings > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatCurrency(Math.abs(results.monthlySavings))}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Break-Even Time:</span>
                              <span className="font-medium">{results.breakEvenMonths.toFixed(1)} months</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Refinance Options Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Option</th>
                                <th className="text-right p-2">Closing Costs</th>
                                <th className="text-right p-2">Monthly Payment</th>
                                <th className="text-right p-2">Break-Even</th>
                                <th className="text-right p-2">5-Year Benefit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2">No-Cost Refinance</td>
                                <td className="text-right p-2">$0</td>
                                <td className="text-right p-2">{formatCurrency(results.newMonthlyPayment + 50)}</td>
                                <td className="text-right p-2">0 months</td>
                                <td className="text-right p-2">{formatCurrency((results.monthlySavings - 50) * 60)}</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Standard Refinance</td>
                                <td className="text-right p-2">{formatCurrency(results.totalClosingCosts)}</td>
                                <td className="text-right p-2">{formatCurrency(results.newMonthlyPayment)}</td>
                                <td className="text-right p-2">{results.breakEvenMonths.toFixed(0)} months</td>
                                <td className="text-right p-2">{formatCurrency(results.netBenefit)}</td>
                              </tr>
                              <tr>
                                <td className="p-2">With 1 Point</td>
                                <td className="text-right p-2">{formatCurrency(results.totalClosingCosts + results.newLoanAmount * 0.01)}</td>
                                <td className="text-right p-2">{formatCurrency(results.newMonthlyPayment - 25)}</td>
                                <td className="text-right p-2">{((results.totalClosingCosts + results.newLoanAmount * 0.01) / (results.monthlySavings + 25)).toFixed(0)} months</td>
                                <td className="text-right p-2">{formatCurrency((results.monthlySavings + 25) * 60 - (results.totalClosingCosts + results.newLoanAmount * 0.01))}</td>
                              </tr>
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
                            Refinance Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className={`p-3 ${results.monthlySavings > 0 ? 'bg-green-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.monthlySavings > 0 ? 'text-green-700' : 'text-red-700'}`}>
                                <strong>Monthly Savings:</strong> {formatCurrency(Math.abs(results.monthlySavings))} 
                                {results.monthlySavings > 0 ? ' (Beneficial)' : ' (Not beneficial)'}
                              </p>
                            </div>
                            <div className={`p-3 ${results.breakEvenMonths <= 24 ? 'bg-green-50' : results.breakEvenMonths <= 60 ? 'bg-yellow-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.breakEvenMonths <= 24 ? 'text-green-700' : results.breakEvenMonths <= 60 ? 'text-yellow-700' : 'text-red-700'}`}>
                                <strong>Break-Even:</strong> {results.breakEvenMonths.toFixed(0)} months
                                {results.breakEvenMonths <= 24 ? ' (Excellent)' : results.breakEvenMonths <= 60 ? ' (Good)' : ' (Long payback)'}
                              </p>
                            </div>
                            <div className={`p-3 ${results.newLoanToValue <= 80 ? 'bg-green-50' : 'bg-yellow-50'} rounded-lg`}>
                              <p className={`text-sm ${results.newLoanToValue <= 80 ? 'text-green-700' : 'text-yellow-700'}`}>
                                <strong>New LTV:</strong> {formatPercentage(results.newLoanToValue)}
                                {results.newLoanToValue <= 80 ? ' (No PMI)' : ' (PMI may apply)'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Recommendations
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            {results.monthlySavings <= 0 && (
                              <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>Not Recommended:</strong> No monthly savings with current rates.
                                </p>
                              </div>
                            )}
                            {results.breakEvenMonths > 60 && (
                              <div className="p-3 bg-yellow-50 rounded-lg">
                                <p className="text-sm text-yellow-700">
                                  <strong>Long Payback:</strong> Consider if you&apos;ll stay in home for {Math.ceil(results.breakEvenMonths / 12)} years.
                                </p>
                              </div>
                            )}
                            {results.monthlySavings > 0 && results.breakEvenMonths <= 24 && (
                              <div className="p-3 bg-green-50 rounded-lg">
                                <p className="text-sm text-green-700">
                                  <strong>Excellent Opportunity:</strong> Good savings with quick payback period.
                                </p>
                              </div>
                            )}
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>Shop Around:</strong> Compare rates from multiple lenders for best terms.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>When to Refinance</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Good Reasons to Refinance:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Interest rates dropped 0.5% or more</li>
                              <li>• Improve credit score significantly</li>
                              <li>• Remove PMI with increased home value</li>
                              <li>• Switch from ARM to fixed rate</li>
                              <li>• Access home equity for improvements</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Consider These Factors:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• How long you plan to stay in home</li>
                              <li>• Current loan balance and equity</li>
                              <li>• Closing costs vs. monthly savings</li>
                              <li>• Your current financial situation</li>
                              <li>• Market conditions and rate trends</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Comprehensive Article Section */}
      <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Mortgage Refinancing
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Mortgage refinancing can be a powerful financial tool to reduce monthly payments, 
              access home equity, or change loan terms. This comprehensive guide will help you 
              understand when and how to refinance your mortgage effectively.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Mortgage Refinancing?</h3>
              <p className="text-blue-800">
                Refinancing involves replacing your existing mortgage with a new loan, typically 
                with better terms, lower interest rates, or different loan structure. It's 
                essentially paying off your current mortgage and starting fresh with new terms.
              </p>
            </div>

            <h2>Types of Refinancing</h2>
            
            <h3>Rate-and-Term Refinance</h3>
            <p>
              The most common type of refinancing focuses on changing the interest rate or loan term:
            </p>
            <ul>
              <li><strong>Lower Interest Rate:</strong> Reduce monthly payments and total interest paid</li>
              <li><strong>Shorter Term:</strong> Pay off mortgage faster with higher monthly payments</li>
              <li><strong>Longer Term:</strong> Lower monthly payments but more total interest</li>
              <li><strong>Fixed to ARM:</strong> Switch from fixed-rate to adjustable-rate mortgage</li>
              <li><strong>ARM to Fixed:</strong> Convert adjustable-rate to fixed-rate for stability</li>
            </ul>

            <h3>Cash-Out Refinance</h3>
            <p>
              Access your home&apos;s equity by borrowing more than you owe:
            </p>
            <ul>
              <li><strong>Home Improvements:</strong> Fund renovations that increase property value</li>
              <li><strong>Debt Consolidation:</strong> Pay off high-interest credit cards or loans</li>
              <li><strong>Investment Opportunities:</strong> Use equity for real estate or other investments</li>
              <li><strong>Education Expenses:</strong> Fund college tuition or other major expenses</li>
            </ul>

            <h3>Cash-In Refinance</h3>
            <p>
              Bring cash to closing to reduce loan balance:
            </p>
            <ul>
              <li><strong>Lower LTV Ratio:</strong> Improve loan-to-value for better rates</li>
              <li><strong>Remove PMI:</strong> Eliminate private mortgage insurance</li>
              <li><strong>Better Terms:</strong> Qualify for improved loan conditions</li>
            </ul>

            <h2>When to Consider Refinancing</h2>
            
            <h3>Interest Rate Environment</h3>
            <p>
              Optimal timing for refinancing based on rates:
            </p>
            <ul>
              <li><strong>Rate Drop Rule:</strong> Generally beneficial when rates drop 0.5-1% or more</li>
              <li><strong>Break-Even Analysis:</strong> Calculate months to recover closing costs</li>
              <li><strong>Long-Term Plans:</strong> Consider how long you&apos;ll stay in the home</li>
              <li><strong>Rate Trends:</strong> Understand whether rates are rising or falling</li>
            </ul>

            <h3>Personal Financial Changes</h3>
            <p>
              Life circumstances that may warrant refinancing:
            </p>
            <ul>
              <li><strong>Improved Credit Score:</strong> Qualify for better rates with higher credit</li>
              <li><strong>Increased Income:</strong> Afford shorter terms or larger payments</li>
              <li><strong>Debt Consolidation Needs:</strong> Combine high-interest debts</li>
              <li><strong>Cash Flow Requirements:</strong> Need lower monthly payments</li>
            </ul>

            <h2>Refinancing Process</h2>
            
            <h3>Preparation Steps</h3>
            <p>
              Get ready for a smooth refinancing experience:
            </p>
            <ul>
              <li><strong>Check Credit Score:</strong> Obtain free credit reports and address issues</li>
              <li><strong>Gather Documents:</strong> Income statements, tax returns, asset documentation</li>
              <li><strong>Determine Home Value:</strong> Get recent appraisal or comparative market analysis</li>
              <li><strong>Calculate Equity:</strong> Understand your current loan-to-value ratio</li>
            </ul>

            <h3>Shopping for Lenders</h3>
            <p>
              Compare multiple lenders for the best deal:
            </p>
            <ul>
              <li><strong>Interest Rates:</strong> Compare APRs from multiple lenders</li>
              <li><strong>Closing Costs:</strong> Evaluate all fees and expenses</li>
              <li><strong>Loan Terms:</strong> Consider different term lengths and structures</li>
              <li><strong>Lender Reputation:</strong> Research customer service and reliability</li>
            </ul>

            <h2>Costs and Fees</h2>
            
            <h3>Typical Closing Costs</h3>
            <p>
              Expect to pay 2-5% of loan amount in closing costs:
            </p>
            <ul>
              <li><strong>Origination Fees:</strong> 0.5-1% of loan amount</li>
              <li><strong>Appraisal Fee:</strong> $300-$700 for property valuation</li>
              <li><strong>Title Insurance:</strong> Protect against title defects</li>
              <li><strong>Recording Fees:</strong> Government fees for recording documents</li>
              <li><strong>Credit Report:</strong> Lender&apos;s cost to check credit</li>
              <li><strong>Underwriting Fee:</strong> Processing and approval costs</li>
            </ul>

            <h3>Cost-Reduction Strategies</h3>
            <p>
              Ways to minimize refinancing expenses:
            </p>
            <ul>
              <li><strong>No-Cost Refinance:</strong> Lender pays costs in exchange for higher rate</li>
              <li><strong>Roll Costs into Loan:</strong> Finance closing costs (increases loan balance)</li>
              <li><strong>Negotiate Fees:</strong> Some fees may be negotiable or waivable</li>
              <li><strong>Shop Around:</strong> Compare total costs from multiple lenders</li>
            </ul>

            <h2>Break-Even Analysis</h2>
            
            <h3>Calculating Break-Even Point</h3>
            <p>
              Determine when refinancing pays for itself:
            </p>
            <ul>
              <li><strong>Monthly Savings:</strong> Difference between old and new payments</li>
              <li><strong>Total Closing Costs:</strong> All expenses to complete refinance</li>
              <li><strong>Break-Even Formula:</strong> Closing Costs ÷ Monthly Savings = Months</li>
              <li><strong>Time Horizon:</strong> How long you plan to keep the mortgage</li>
            </ul>

            <h3>Beyond Break-Even</h3>
            <p>
              Consider long-term benefits and costs:
            </p>
            <ul>
              <li><strong>Total Interest Savings:</strong> Lifetime interest reduction</li>
              <li><strong>Opportunity Cost:</strong> Alternative uses for closing cost money</li>
              <li><strong>Tax Implications:</strong> Changes in mortgage interest deduction</li>
              <li><strong>Prepayment Benefits:</strong> Ability to pay off loan early</li>
            </ul>

            <h2>Special Considerations</h2>
            
            <h3>Government Programs</h3>
            <p>
              Special refinancing programs available:
            </p>
            <ul>
              <li><strong>HARP (Historical):</strong> Home Affordable Refinance Program</li>
              <li><strong>VA IRRRL:</strong> Interest Rate Reduction Refinance Loan for veterans</li>
              <li><strong>FHA Streamline:</strong> Simplified refinancing for FHA borrowers</li>
              <li><strong>USDA Streamline:</strong> Rural development loan refinancing</li>
            </ul>

            <h3>Underwater Mortgages</h3>
            <p>
              Options when you owe more than home&apos;s value:
            </p>
            <ul>
              <li><strong>HARP Successor Programs:</strong> Government-backed refinancing</li>
              <li><strong>Cash-In Refinance:</strong> Bring money to closing to reach required LTV</li>
              <li><strong>Wait for Appreciation:</strong> Allow home value to increase</li>
              <li><strong>Principal Reduction:</strong> Make extra payments to reduce balance</li>
            </ul>

            <h2>Tax Implications</h2>
            
            <h3>Mortgage Interest Deduction</h3>
            <p>
              Understand tax impacts of refinancing:
            </p>
            <ul>
              <li><strong>Deduction Limits:</strong> Current limits on mortgage interest deduction</li>
              <li><strong>Cash-Out Restrictions:</strong> Limits on deductibility of cash-out proceeds</li>
              <li><strong>Points Deduction:</strong> How to deduct refinancing points</li>
              <li><strong>Timing Considerations:</strong> When deductions can be claimed</li>
            </ul>

            <h3>Record Keeping</h3>
            <p>
              Maintain proper documentation:
            </p>
            <ul>
              <li><strong>Closing Documents:</strong> Keep all refinancing paperwork</li>
              <li><strong>Payment Records:</strong> Track mortgage payments and interest</li>
              <li><strong>Improvement Documentation:</strong> Records of home improvements funded</li>
              <li><strong>Tax Filings:</strong> Historical returns showing mortgage interest</li>
            </ul>

            <h2>Common Refinancing Mistakes</h2>
            
            <h3>Pitfalls to Avoid</h3>
            <ul>
              <li><strong>Focusing Only on Rate:</strong> Ignoring closing costs and total expense</li>
              <li><strong>Extending Loan Term:</strong> Paying more interest over time for lower payments</li>
              <li><strong>Cash-Out Overuse:</strong> Treating home like ATM for unnecessary expenses</li>
              <li><strong>Inadequate Shopping:</strong> Not comparing multiple lenders</li>
              <li><strong>Timing Mistakes:</strong> Refinancing too close to selling home</li>
              <li><strong>Ignoring Prepayment:</strong> Not considering early payoff strategies</li>
            </ul>

            <h2>Market Timing Strategies</h2>
            
            <h3>Rate Environment Analysis</h3>
            <p>
              Understanding when to act on refinancing:
            </p>
            <ul>
              <li><strong>Rate Cycles:</strong> Historical patterns in interest rate movements</li>
              <li><strong>Economic Indicators:</strong> Factors that influence mortgage rates</li>
              <li><strong>Fed Policy:</strong> Impact of Federal Reserve decisions</li>
              <li><strong>Lock Strategies:</strong> When to lock in rates during application</li>
            </ul>

            <h3>Seasonal Considerations</h3>
            <p>
              Timing refinancing for optimal results:
            </p>
            <ul>
              <li><strong>Lender Capacity:</strong> Busy seasons may slow processing</li>
              <li><strong>Appraisal Timing:</strong> Seasonal variations in home values</li>
              <li><strong>Year-End Planning:</strong> Tax implications of timing</li>
              <li><strong>Personal Schedule:</strong> Align with your availability</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Key Takeaways</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Calculate break-even point before refinancing</li>
                <li>• Shop multiple lenders for best rates and terms</li>
                <li>• Consider total costs, not just interest rate</li>
                <li>• Understand different refinancing options available</li>
                <li>• Plan for long-term financial impact</li>
                <li>• Keep detailed records for tax purposes</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mt-8">
              Refinancing can be a valuable financial strategy when done correctly. Use this 
              calculator to analyze your specific situation, compare options, and make informed 
              decisions about your mortgage. Remember that the best refinancing decision depends 
              on your individual circumstances, financial goals, and market conditions.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}