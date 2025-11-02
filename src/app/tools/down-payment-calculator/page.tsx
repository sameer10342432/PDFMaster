'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { DollarSign, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { Home, PiggyBank, Calculator, AlertCircle, Info, BookOpen } from 'lucide-react'

interface DownPaymentAnalysis {
  homePrice: number
  downPaymentAmount: number
  downPaymentPercent: number
  loanAmount: number
  monthlyPayment: number
  totalClosingCosts: number
  totalCashNeeded: number
  pmiAmount: number
  loanToValue: number
  debtToIncome: number
}

export default function DownPaymentCalculator() {
  const [homePrice, setHomePrice] = useState<string>('400000')
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>('20')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [loanTerm, setLoanTerm] = useState<string>('30')
  const [monthlyIncome, setMonthlyIncome] = useState<string>('8000')
  const [monthlyDebts, setMonthlyDebts] = useState<string>('1200')
  const [propertyTaxRate, setPropertyTaxRate] = useState<string>('1.2')
  const [homeInsurance, setHomeInsurance] = useState<string>('1200')
  const [hoaFees, setHoaFees] = useState<string>('200')
  const [closingCostPercent, setClosingCostPercent] = useState<string>('3')
  const [pmiRate, setPmiRate] = useState<string>('0.5')
  const [results, setResults] = useState<DownPaymentAnalysis | null>(null)

  const calculateDownPayment = useCallback(() => {
    const price = parseFloat(homePrice) || 0
    const downPercent = parseFloat(downPaymentPercent) || 0
    const rate = parseFloat(interestRate) / 100 / 12 || 0
    const term = parseFloat(loanTerm) * 12 || 0
    const income = parseFloat(monthlyIncome) || 0
    const debts = parseFloat(monthlyDebts) || 0
    const taxRate = parseFloat(propertyTaxRate) / 100 || 0
    const insurance = parseFloat(homeInsurance) / 12 || 0
    const hoa = parseFloat(hoaFees) || 0
    const closingPercent = parseFloat(closingCostPercent) / 100 || 0
    const pmi = parseFloat(pmiRate) / 100 || 0

    const downPaymentAmount = price * (downPercent / 100)
    const loanAmount = price - downPaymentAmount
    const loanToValue = loanAmount / price * 100

    // Monthly payment calculation (P&I)
    let monthlyPayment = 0
    if (rate > 0 && term > 0) {
      monthlyPayment = loanAmount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1)
    }

    // PMI calculation (if down payment < 20%)
    const pmiAmount = downPercent < 20 ? (loanAmount * pmi / 12) : 0

    // Property taxes
    const monthlyPropertyTax = price * taxRate / 12

    // Total monthly payment (PITI + HOA + PMI)
    const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + insurance + hoa + pmiAmount

    // Closing costs
    const totalClosingCosts = price * closingPercent

    // Total cash needed
    const totalCashNeeded = downPaymentAmount + totalClosingCosts

    // Debt-to-income ratio
    const debtToIncome = ((totalMonthlyPayment + debts) / income) * 100

    const analysis: DownPaymentAnalysis = {
      homePrice: price,
      downPaymentAmount,
      downPaymentPercent: downPercent,
      loanAmount,
      monthlyPayment: totalMonthlyPayment,
      totalClosingCosts,
      totalCashNeeded,
      pmiAmount,
      loanToValue,
      debtToIncome
    }

    setResults(analysis)
  }, [homePrice, downPaymentPercent, interestRate, loanTerm, monthlyIncome, monthlyDebts, propertyTaxRate, homeInsurance, hoaFees, closingCostPercent, pmiRate])

  useEffect(() => {
    calculateDownPayment()
  }, [homePrice, downPaymentPercent, interestRate, loanTerm, monthlyIncome, monthlyDebts, propertyTaxRate, homeInsurance, hoaFees, closingCostPercent, pmiRate])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  // Data for charts
  const cashBreakdown = results ? [
    { name: 'Down Payment', value: results.downPaymentAmount, color: '#3b82f6' },
    { name: 'Closing Costs', value: results.totalClosingCosts, color: '#f59e0b' }
  ] : []

  const monthlyBreakdown = useMemo(() => results ? [
    { name: 'Principal & Interest', value: results.monthlyPayment - (parseFloat(homePrice) * parseFloat(propertyTaxRate) / 100 / 12) - (parseFloat(homeInsurance) / 12) - parseFloat(hoaFees) - results.pmiAmount, color: '#3b82f6' },
    { name: 'Property Tax', value: parseFloat(homePrice) * parseFloat(propertyTaxRate) / 100 / 12, color: '#f59e0b' },
    { name: 'Insurance', value: parseFloat(homeInsurance) / 12, color: '#ef4444' },
    { name: 'HOA Fees', value: parseFloat(hoaFees), color: '#8b5cf6' },
    { name: 'PMI', value: results.pmiAmount, color: '#06b6d4' }
  ].filter(item => item.value > 0) : [], [results, homePrice, propertyTaxRate, homeInsurance, hoaFees])

  const downPaymentScenarios = useMemo(() => results ? [
    {
      percent: 5,
      downPayment: results.homePrice * 0.05,
      loanAmount: results.homePrice * 0.95,
      pmi: results.homePrice * 0.95 * parseFloat(pmiRate) / 100 / 12,
      totalCash: results.homePrice * 0.05 + results.totalClosingCosts
    },
    {
      percent: 10,
      downPayment: results.homePrice * 0.10,
      loanAmount: results.homePrice * 0.90,
      pmi: results.homePrice * 0.90 * parseFloat(pmiRate) / 100 / 12,
      totalCash: results.homePrice * 0.10 + results.totalClosingCosts
    },
    {
      percent: 15,
      downPayment: results.homePrice * 0.15,
      loanAmount: results.homePrice * 0.85,
      pmi: results.homePrice * 0.85 * parseFloat(pmiRate) / 100 / 12,
      totalCash: results.homePrice * 0.15 + results.totalClosingCosts
    },
    {
      percent: 20,
      downPayment: results.homePrice * 0.20,
      loanAmount: results.homePrice * 0.80,
      pmi: 0,
      totalCash: results.homePrice * 0.20 + results.totalClosingCosts
    },
    {
      percent: 25,
      downPayment: results.homePrice * 0.25,
      loanAmount: results.homePrice * 0.75,
      pmi: 0,
      totalCash: results.homePrice * 0.25 + results.totalClosingCosts
    }
  ] : [], [results, pmiRate])

  const savingsTimeline = useMemo(() => results ? Array.from({ length: 60 }, (_, i) => {
    const month = i + 1
    const monthlySavings = results.totalCashNeeded / 60 // Assuming 5-year savings plan
    return {
      month,
      saved: monthlySavings * month,
      target: results.totalCashNeeded,
      percentage: (monthlySavings * month / results.totalCashNeeded) * 100
    }
  }) : [], [results])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-blue-600 rounded-full">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Down Payment Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate down payment requirements and analyze different scenarios for home purchases
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Purchase Details
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your home purchase information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Property Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="homePrice" className="text-sm font-medium">Home Price</Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(e.target.value)}
                      className="text-lg"
                      placeholder="400000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPaymentPercent" className="text-sm font-medium">Down Payment (%)</Label>
                    <Select value={downPaymentPercent} onValueChange={setDownPaymentPercent}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select percentage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3%</SelectItem>
                        <SelectItem value="5">5%</SelectItem>
                        <SelectItem value="10">10%</SelectItem>
                        <SelectItem value="15">15%</SelectItem>
                        <SelectItem value="20">20%</SelectItem>
                        <SelectItem value="25">25%</SelectItem>
                        <SelectItem value="30">30%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="text-lg"
                      placeholder="6.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="text-sm font-medium">Loan Term (Years)</Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
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
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Financial Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome" className="text-sm font-medium">Monthly Gross Income</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className="text-lg"
                      placeholder="8000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyDebts" className="text-sm font-medium">Monthly Debt Payments</Label>
                    <Input
                      id="monthlyDebts"
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(e.target.value)}
                      className="text-lg"
                      placeholder="1200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyTaxRate" className="text-sm font-medium">Property Tax Rate (%)</Label>
                    <Input
                      id="propertyTaxRate"
                      type="number"
                      step="0.1"
                      value={propertyTaxRate}
                      onChange={(e) => setPropertyTaxRate(e.target.value)}
                      className="text-lg"
                      placeholder="1.2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="homeInsurance" className="text-sm font-medium">Annual Home Insurance</Label>
                    <Input
                      id="homeInsurance"
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(e.target.value)}
                      className="text-lg"
                      placeholder="1200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hoaFees" className="text-sm font-medium">Monthly HOA Fees</Label>
                    <Input
                      id="hoaFees"
                      type="number"
                      value={hoaFees}
                      onChange={(e) => setHoaFees(e.target.value)}
                      className="text-lg"
                      placeholder="200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closingCostPercent" className="text-sm font-medium">Closing Costs (%)</Label>
                    <Select value={closingCostPercent} onValueChange={setClosingCostPercent}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select percentage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2%</SelectItem>
                        <SelectItem value="2.5">2.5%</SelectItem>
                        <SelectItem value="3">3%</SelectItem>
                        <SelectItem value="3.5">3.5%</SelectItem>
                        <SelectItem value="4">4%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pmiRate" className="text-sm font-medium">PMI Rate (%)</Label>
                    <Input
                      id="pmiRate"
                      type="number"
                      step="0.1"
                      value={pmiRate}
                      onChange={(e) => setPmiRate(e.target.value)}
                      className="text-lg"
                      placeholder="0.5"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateDownPayment}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg py-3"
                >
                  Calculate Down Payment
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
                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm">Down Payment</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.downPaymentAmount)}</p>
                        </div>
                        <PiggyBank className="h-8 w-8 text-blue-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100 text-sm">Total Cash Needed</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.totalCashNeeded)}</p>
                        </div>
                        <DollarSign className="h-8 w-8 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm">Monthly Payment</p>
                          <p className="text-2xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
                        </div>
                        <Home className="h-8 w-8 text-purple-200" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${results.debtToIncome <= 28 ? 'bg-gradient-to-br from-green-500 to-green-600' : results.debtToIncome <= 36 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' : 'bg-gradient-to-br from-red-500 to-red-600'} text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`${results.debtToIncome <= 28 ? 'text-green-100' : results.debtToIncome <= 36 ? 'text-yellow-100' : 'text-red-100'} text-sm`}>Debt-to-Income</p>
                          <p className="text-2xl font-bold">{formatPercentage(results.debtToIncome)}</p>
                        </div>
                        <Target className={`h-8 w-8 ${results.debtToIncome <= 28 ? 'text-green-200' : results.debtToIncome <= 36 ? 'text-yellow-200' : 'text-red-200'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts and Analysis */}
                <Tabs defaultValue="breakdown" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="breakdown">Cash Breakdown</TabsTrigger>
                    <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
                    <TabsTrigger value="savings">Savings Plan</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                    <TabsTrigger value="article">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Article
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="breakdown" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Cash Required at Closing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={cashBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {cashBreakdown.map((entry, index) => (
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
                          <CardTitle>Monthly Payment Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={monthlyBreakdown}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {monthlyBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Loan Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Home Price:</span>
                              <span className="font-medium">{formatCurrency(results.homePrice)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Down Payment ({formatPercentage(results.downPaymentPercent)}):</span>
                              <span className="font-medium">{formatCurrency(results.downPaymentAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Loan Amount:</span>
                              <span className="font-medium">{formatCurrency(results.loanAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Loan-to-Value:</span>
                              <span className="font-medium">{formatPercentage(results.loanToValue)}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Closing Costs:</span>
                              <span className="font-medium">{formatCurrency(results.totalClosingCosts)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>PMI (Monthly):</span>
                              <span className="font-medium">{formatCurrency(results.pmiAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Monthly Payment:</span>
                              <span className="font-medium">{formatCurrency(results.monthlyPayment)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Cash Needed:</span>
                              <span className="text-blue-600">{formatCurrency(results.totalCashNeeded)}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="scenarios" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Down Payment Scenarios</CardTitle>
                        <CardDescription>
                          Compare different down payment percentages
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={downPaymentScenarios}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="percent" label={{ value: 'Down Payment %', position: 'insideBottom', offset: -5 }} />
                              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                              <Tooltip formatter={(value: number) => [formatCurrency(value), '']} />
                              <Legend />
                              <Bar dataKey="downPayment" fill="#3b82f6" name="Down Payment" />
                              <Bar dataKey="totalCash" fill="#f59e0b" name="Total Cash Needed" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {downPaymentScenarios.map((scenario, index) => (
                        <Card key={index} className={scenario.percent === parseFloat(downPaymentPercent) ? 'border-blue-500 border-2' : ''}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{scenario.percent}% Down</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="text-sm">
                              <div className="flex justify-between">
                                <span>Down Payment:</span>
                                <span>{formatCurrency(scenario.downPayment)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Loan Amount:</span>
                                <span>{formatCurrency(scenario.loanAmount)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Monthly PMI:</span>
                                <span>{formatCurrency(scenario.pmi)}</span>
                              </div>
                              <div className="flex justify-between font-medium">
                                <span>Total Cash:</span>
                                <span>{formatCurrency(scenario.totalCash)}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="savings" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <PiggyBank className="h-5 w-5" />
                          5-Year Savings Plan
                        </CardTitle>
                        <CardDescription>
                          Track your progress toward your down payment goal
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
                                dataKey="saved" 
                                stroke="#22c55e" 
                                strokeWidth={3}
                                name="Amount Saved"
                              />
                              <Line 
                                type="monotone" 
                                dataKey="target" 
                                stroke="#ef4444" 
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                name="Target Amount"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Monthly Savings Needed</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-blue-600">
                              {formatCurrency(results.totalCashNeeded / 60)}
                            </p>
                            <p className="text-sm text-gray-600">for 5 years</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">3-Year Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-green-600">
                              {formatCurrency(results.totalCashNeeded / 36)}
                            </p>
                            <p className="text-sm text-gray-600">per month</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">2-Year Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-orange-600">
                              {formatCurrency(results.totalCashNeeded / 24)}
                            </p>
                            <p className="text-sm text-gray-600">per month</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="analysis" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Info className="h-5 w-5" />
                            Affordability Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className={`p-3 ${results.debtToIncome <= 28 ? 'bg-green-50' : results.debtToIncome <= 36 ? 'bg-yellow-50' : 'bg-red-50'} rounded-lg`}>
                              <p className={`text-sm ${results.debtToIncome <= 28 ? 'text-green-700' : results.debtToIncome <= 36 ? 'text-yellow-700' : 'text-red-700'}`}>
                                <strong>Debt-to-Income:</strong> {formatPercentage(results.debtToIncome)} 
                                {results.debtToIncome <= 28 ? ' (Excellent)' : results.debtToIncome <= 36 ? ' (Good)' : ' (High Risk)'}
                              </p>
                            </div>
                            <div className={`p-3 ${results.loanToValue <= 80 ? 'bg-green-50' : 'bg-yellow-50'} rounded-lg`}>
                              <p className={`text-sm ${results.loanToValue <= 80 ? 'text-green-700' : 'text-yellow-700'}`}>
                                <strong>Loan-to-Value:</strong> {formatPercentage(results.loanToValue)}
                                {results.loanToValue <= 80 ? ' (No PMI required)' : ' (PMI required)'}
                              </p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>Monthly Payment:</strong> {formatCurrency(results.monthlyPayment)} 
                                ({formatPercentage((results.monthlyPayment / parseFloat(monthlyIncome)) * 100)} of income)
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
                            {results.debtToIncome > 36 && (
                              <div className="p-3 bg-red-50 rounded-lg">
                                <p className="text-sm text-red-700">
                                  <strong>High DTI:</strong> Consider reducing debt or increasing income before purchasing.
                                </p>
                              </div>
                            )}
                            {results.downPaymentPercent < 20 && (
                              <div className="p-3 bg-yellow-50 rounded-lg">
                                <p className="text-sm text-yellow-700">
                                  <strong>PMI Required:</strong> Consider saving for 20% down to avoid PMI payments.
                                </p>
                              </div>
                            )}
                            {results.downPaymentPercent >= 20 && (
                              <div className="p-3 bg-green-50 rounded-lg">
                                <p className="text-sm text-green-700">
                                  <strong>Great Down Payment:</strong> No PMI required, lower monthly payments.
                                </p>
                              </div>
                            )}
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>Emergency Fund:</strong> Keep 3-6 months of expenses saved after closing.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Home Buying Tips</CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Before You Buy:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Get pre-approved for a mortgage</li>
                              <li>• Save for down payment and closing costs</li>
                              <li>• Maintain good credit score (740+)</li>
                              <li>• Keep debt-to-income below 36%</li>
                              <li>• Research neighborhoods and schools</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Down Payment Options:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Conventional: 3-5% minimum</li>
                              <li>• FHA: 3.5% minimum</li>
                              <li>• VA: 0% for qualified veterans</li>
                              <li>• USDA: 0% for rural properties</li>
                              <li>• First-time buyer programs available</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          The Complete Guide to Down Payments
                        </CardTitle>
                        <CardDescription>
                          Everything you need to know about down payments for home purchases
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Understanding Down Payments</h3>
                          <p className="text-muted-foreground">
                            A down payment is the upfront cash payment you make when purchasing a home. It represents your initial equity in the property and reduces the amount you need to borrow. Understanding down payment requirements and strategies is crucial for successful homeownership.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Down Payment Requirements by Loan Type</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">Conventional Loans</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• Minimum 3% down for first-time buyers</li>
                                  <li>• 5% down for repeat buyers</li>
                                  <li>• 20% down to avoid PMI</li>
                                  <li>• Higher down payments = better rates</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">FHA Loans</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• Minimum 3.5% down payment</li>
                                  <li>• Lower credit score requirements</li>
                                  <li>• Mortgage insurance required</li>
                                  <li>• Gift funds allowed</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">VA Loans</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• 0% down payment option</li>
                                  <li>• No mortgage insurance</li>
                                  <li>• For eligible veterans/service members</li>
                                  <li>• Funding fee may apply</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">USDA Loans</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• 0% down payment option</li>
                                  <li>• Rural/suburban properties only</li>
                                  <li>• Income limits apply</li>
                                  <li>• Guarantee fee required</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Benefits of Larger Down Payments</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium">Financial Benefits</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Lower monthly payments</li>
                                <li>• Reduced interest costs over loan term</li>
                                <li>• Avoid private mortgage insurance (PMI)</li>
                                <li>• Better loan terms and rates</li>
                                <li>• Immediate equity in the home</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-medium">Competitive Advantages</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Stronger offers in competitive markets</li>
                                <li>• Faster loan approval process</li>
                                <li>• More negotiating power with sellers</li>
                                <li>• Reduced risk of loan denial</li>
                                <li>• Protection against market downturns</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Down Payment Sources</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">Personal Savings</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• High-yield savings accounts</li>
                                  <li>• Certificates of deposit</li>
                                  <li>• Money market accounts</li>
                                  <li>• Investment accounts</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">Gift Funds</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• Family members</li>
                                  <li>• Gift letter required</li>
                                  <li>• Documentation needed</li>
                                  <li>• Loan type restrictions</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">Other Sources</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• 401(k) loans</li>
                                  <li>• IRA withdrawals</li>
                                  <li>• Down payment assistance programs</li>
                                  <li>• Employer assistance programs</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Saving Strategies</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium">Short-Term Strategies (1-2 years)</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Automate savings transfers</li>
                                <li>• Reduce discretionary spending</li>
                                <li>• Take on side income</li>
                                <li>• Use windfalls (bonuses, tax refunds)</li>
                                <li>• Consider high-yield savings accounts</li>
                              </ul>
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-medium">Long-Term Strategies (3+ years)</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Invest in conservative portfolios</li>
                                <li>• Dollar-cost averaging</li>
                                <li>• Consider CDs with staggered maturity</li>
                                <li>• Maximize employer 401(k) match</li>
                                <li>• Review and adjust regularly</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Additional Costs to Consider</h3>
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-3">
                              Remember that the down payment is just one part of your upfront costs:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Closing Costs (2-5% of home price)</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• Loan origination fees</li>
                                  <li>• Appraisal and inspection fees</li>
                                  <li>• Title insurance and attorney fees</li>
                                  <li>• Recording and transfer taxes</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Moving and Setup Costs</h4>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  <li>• Moving expenses</li>
                                  <li>• Utility deposits and setup</li>
                                  <li>• Immediate repairs or improvements</li>
                                  <li>• Emergency fund maintenance</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Common Mistakes to Avoid</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Depleting All Savings</h4>
                                <p className="text-sm text-muted-foreground">
                                  Don't use every penny for the down payment. Maintain an emergency fund for unexpected expenses.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Ignoring PMI Costs</h4>
                                <p className="text-sm text-muted-foreground">
                                  Factor in private mortgage insurance costs when putting down less than 20%.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Last-Minute Large Purchases</h4>
                                <p className="text-sm text-muted-foreground">
                                  Avoid major purchases or new credit accounts before closing that could affect your loan approval.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium">Not Shopping Around</h4>
                                <p className="text-sm text-muted-foreground">
                                  Compare loan programs and lenders to find the best terms for your down payment situation.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Best Practices</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 rounded-full border-2 border-green-500 flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-medium">Start Early</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Begin saving as soon as you decide to buy a home, even if it's years away.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-medium">Get Pre-Approved</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Understand your buying power and down payment requirements before house hunting.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">✓</span>
                                </div>



                                <div>
                                  <h4 className="font-medium">Document Everything</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Keep detailed records of your savings and any gift funds for the loan application.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-medium">Consider Total Cost</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Factor in all homeownership costs, not just the down payment and monthly payment.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-medium">Stay Flexible</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Be prepared to adjust your timeline or home price based on your savings progress.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-medium">Seek Professional Advice</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Consult with mortgage professionals and financial advisors for personalized guidance.
                                  </p>
                                </div>
                              </div>
                            </div>
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
    </div>
  )
}