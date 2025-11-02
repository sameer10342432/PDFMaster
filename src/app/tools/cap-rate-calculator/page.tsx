'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Home, 
  PieChart, 
  BarChart3,
  Target,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Shield,
  Award,
  Building,
  Percent,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  Zap
} from 'lucide-react'

interface PropertyData {
  purchasePrice: number
  monthlyRent: number
  vacancy: number
  propertyTax: number
  insurance: number
  maintenance: number
  propertyManagement: number
  utilities: number
  otherExpenses: number
  propertyType: string
  location: string
}

interface CapRateAnalysis {
  capRate: number
  noi: number
  grossRentalIncome: number
  effectiveRentalIncome: number
  totalExpenses: number
  expenseRatio: number
  cashOnCash: number
  grm: number
  rating: string
  recommendations: string[]
}

const propertyTypeRanges = {
  'single-family': { min: 4, max: 10, good: 6 },
  'multi-family': { min: 5, max: 12, good: 8 },
  'commercial': { min: 6, max: 12, good: 9 },
  'retail': { min: 5, max: 10, good: 7 },
  'office': { min: 6, max: 11, good: 8 },
  'industrial': { min: 7, max: 12, good: 9 }
}

export default function CapRateCalculator() {
  const [propertyData, setPropertyData] = useState<PropertyData>({
    purchasePrice: 0,
    monthlyRent: 0,
    vacancy: 5,
    propertyTax: 0,
    insurance: 0,
    maintenance: 0,
    propertyManagement: 0,
    utilities: 0,
    otherExpenses: 0,
    propertyType: 'single-family',
    location: ''
  })

  const [analysis, setAnalysis] = useState<CapRateAnalysis | null>(null)
  const [activeTab, setActiveTab] = useState('calculator')

  const calculateCapRate = () => {
    const grossRentalIncome = propertyData.monthlyRent * 12
    const vacancyLoss = grossRentalIncome * (propertyData.vacancy / 100)
    const effectiveRentalIncome = grossRentalIncome - vacancyLoss
    
    const totalExpenses = 
      propertyData.propertyTax +
      propertyData.insurance +
      propertyData.maintenance +
      propertyData.propertyManagement +
      propertyData.utilities +
      propertyData.otherExpenses

    const noi = effectiveRentalIncome - totalExpenses
    const capRate = propertyData.purchasePrice > 0 ? (noi / propertyData.purchasePrice) * 100 : 0
    const expenseRatio = effectiveRentalIncome > 0 ? (totalExpenses / effectiveRentalIncome) * 100 : 0
    const cashOnCash = propertyData.purchasePrice > 0 ? (noi / propertyData.purchasePrice) * 100 : 0
    const grm = propertyData.monthlyRent > 0 ? propertyData.purchasePrice / grossRentalIncome : 0

    const rating = getCapRateRating(capRate, propertyData.propertyType)
    const recommendations = generateRecommendations(capRate, expenseRatio, propertyData.propertyType)

    const analysisResult: CapRateAnalysis = {
      capRate,
      noi,
      grossRentalIncome,
      effectiveRentalIncome,
      totalExpenses,
      expenseRatio,
      cashOnCash,
      grm,
      rating,
      recommendations
    }

    setAnalysis(analysisResult)
  }

  const getCapRateRating = (capRate: number, propertyType: string): string => {
    const ranges = propertyTypeRanges[propertyType as keyof typeof propertyTypeRanges] || propertyTypeRanges['single-family']
    
    if (capRate >= ranges.good) return 'Excellent'
    if (capRate >= ranges.min) return 'Good'
    if (capRate >= ranges.min - 2) return 'Fair'
    return 'Poor'
  }

  const generateRecommendations = (capRate: number, expenseRatio: number, propertyType: string): string[] => {
    const recommendations = []
    const ranges = propertyTypeRanges[propertyType as keyof typeof propertyTypeRanges] || propertyTypeRanges['single-family']

    if (capRate < ranges.min) {
      recommendations.push("Cap rate is below market average - consider negotiating a lower purchase price")
      recommendations.push("Look for ways to increase rental income or reduce operating expenses")
    } else if (capRate >= ranges.good) {
      recommendations.push("Excellent cap rate for this property type - strong investment opportunity")
      recommendations.push("Verify all income and expense assumptions before proceeding")
    } else {
      recommendations.push("Cap rate is within acceptable range for this property type")
      recommendations.push("Compare with similar properties in the area")
    }

    if (expenseRatio > 50) {
      recommendations.push("High expense ratio - review all operating costs for potential savings")
    } else if (expenseRatio < 30) {
      recommendations.push("Low expense ratio - ensure all expenses are accounted for")
    }

    recommendations.push("Consider market trends and future growth potential")
    recommendations.push("Factor in potential capital improvements and their impact on NOI")

    return recommendations
  }

  const updatePropertyData = (field: keyof PropertyData, value: string | number) => {
    setPropertyData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number, decimals: number = 1) => {
    return `${value.toFixed(decimals)}%`
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent': return 'text-green-600 bg-green-50 border-green-200'
      case 'Good': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'Fair': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'Poor': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'Excellent': return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'Good': return <TrendingUp className="h-5 w-5 text-blue-600" />
      case 'Fair': return <Minus className="h-5 w-5 text-yellow-600" />
      case 'Poor': return <TrendingDown className="h-5 w-5 text-red-600" />
      default: return <Info className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-600 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Cap Rate Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate capitalization rates and analyze investment property profitability with comprehensive financial metrics
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Results
            </TabsTrigger>
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Guide
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Property Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Property Information
                  </CardTitle>
                  <CardDescription>
                    Enter basic property details and purchase information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="purchasePrice">Purchase Price</Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        placeholder="500000"
                        value={propertyData.purchasePrice || ''}
                        onChange={(e) => updatePropertyData('purchasePrice', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        placeholder="3500"
                        value={propertyData.monthlyRent || ''}
                        onChange={(e) => updatePropertyData('monthlyRent', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select 
                        value={propertyData.propertyType} 
                        onValueChange={(value) => updatePropertyData('propertyType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family</SelectItem>
                          <SelectItem value="multi-family">Multi-Family</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="office">Office</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="vacancy">Vacancy Rate (%)</Label>
                      <Input
                        id="vacancy"
                        type="number"
                        placeholder="5"
                        value={propertyData.vacancy || ''}
                        onChange={(e) => updatePropertyData('vacancy', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      value={propertyData.location}
                      onChange={(e) => updatePropertyData('location', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Operating Expenses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Annual Operating Expenses
                  </CardTitle>
                  <CardDescription>
                    Enter all annual operating expenses for accurate NOI calculation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyTax">Property Tax</Label>
                      <Input
                        id="propertyTax"
                        type="number"
                        placeholder="8000"
                        value={propertyData.propertyTax || ''}
                        onChange={(e) => updatePropertyData('propertyTax', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="insurance">Insurance</Label>
                      <Input
                        id="insurance"
                        type="number"
                        placeholder="2000"
                        value={propertyData.insurance || ''}
                        onChange={(e) => updatePropertyData('insurance', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maintenance">Maintenance & Repairs</Label>
                      <Input
                        id="maintenance"
                        type="number"
                        placeholder="3000"
                        value={propertyData.maintenance || ''}
                        onChange={(e) => updatePropertyData('maintenance', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyManagement">Property Management</Label>
                      <Input
                        id="propertyManagement"
                        type="number"
                        placeholder="2500"
                        value={propertyData.propertyManagement || ''}
                        onChange={(e) => updatePropertyData('propertyManagement', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="utilities">Utilities (if paid by owner)</Label>
                      <Input
                        id="utilities"
                        type="number"
                        placeholder="1200"
                        value={propertyData.utilities || ''}
                        onChange={(e) => updatePropertyData('utilities', parseFloat(e.target.value) || 0)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="otherExpenses">Other Expenses</Label>
                      <Input
                        id="otherExpenses"
                        type="number"
                        placeholder="1000"
                        value={propertyData.otherExpenses || ''}
                        onChange={(e) => updatePropertyData('otherExpenses', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                onClick={calculateCapRate} 
                className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
                size="lg"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Cap Rate
              </Button>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            {analysis ? (
              <div className="space-y-6">
                {/* Key Metrics Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Cap Rate</p>
                          <p className="text-3xl font-bold text-green-600">
                            {formatPercentage(analysis.capRate)}
                          </p>
                        </div>
                        <Percent className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="mt-2 flex items-center">
                        {getRatingIcon(analysis.rating)}
                        <span className="text-sm ml-2 font-medium">{analysis.rating}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Net Operating Income</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {formatCurrency(analysis.noi)}
                          </p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Annual NOI</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Expense Ratio</p>
                          <p className="text-2xl font-bold text-orange-600">
                            {formatPercentage(analysis.expenseRatio)}
                          </p>
                        </div>
                        <PieChart className="h-8 w-8 text-orange-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Of effective income</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">GRM</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {analysis.grm.toFixed(1)}
                          </p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Gross Rent Multiplier</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Income & Expense Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Gross Rental Income</span>
                          <span className="font-bold text-green-600">{formatCurrency(analysis.grossRentalIncome)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Vacancy Loss</span>
                          <span className="font-bold text-red-600">
                            -{formatCurrency(analysis.grossRentalIncome - analysis.effectiveRentalIncome)}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center border-t pt-2">
                          <span className="text-sm font-medium">Effective Rental Income</span>
                          <span className="font-bold">{formatCurrency(analysis.effectiveRentalIncome)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Total Operating Expenses</span>
                          <span className="font-bold text-red-600">-{formatCurrency(analysis.totalExpenses)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center border-t pt-2">
                          <span className="font-semibold">Net Operating Income</span>
                          <span className="font-bold text-blue-600">{formatCurrency(analysis.noi)}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Expense Ratio</span>
                          <span>{formatPercentage(analysis.expenseRatio)}</span>
                        </div>
                        <Progress value={analysis.expenseRatio} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Investment Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Purchase Price</span>
                          <span className="font-bold">{formatCurrency(propertyData.purchasePrice)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Cap Rate</span>
                          <span className="font-bold text-green-600">{formatPercentage(analysis.capRate)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Cash-on-Cash Return</span>
                          <span className="font-bold text-blue-600">{formatPercentage(analysis.cashOnCash)}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Gross Rent Multiplier</span>
                          <span className="font-bold">{analysis.grm.toFixed(1)}</span>
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border ${getRatingColor(analysis.rating)}`}>
                        <div className="flex items-center gap-2 mb-2">
                          {getRatingIcon(analysis.rating)}
                          <span className="font-semibold">Investment Rating: {analysis.rating}</span>
                        </div>
                        <p className="text-sm">
                          {analysis.rating === 'Excellent' && 'Outstanding investment opportunity with strong returns'}
                          {analysis.rating === 'Good' && 'Solid investment with competitive returns'}
                          {analysis.rating === 'Fair' && 'Acceptable investment, consider market conditions'}
                          {analysis.rating === 'Poor' && 'Below market returns, review assumptions'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Market Comparison */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Market Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(propertyTypeRanges).map(([type, ranges]) => (
                        <div key={type} className="text-center">
                          <h4 className="font-semibold mb-2 capitalize">
                            {type.replace('-', ' ')}
                          </h4>
                          <div className="space-y-1">
                            <div className="text-sm text-gray-600">
                              Typical Range: {ranges.min}% - {ranges.max}%
                            </div>
                            <div className="text-sm font-medium text-green-600">
                              Good: {ranges.good}%+
                            </div>
                            {propertyData.propertyType === type && (
                              <Badge className="mt-2">Your Property Type</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Investment Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysis.recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No Analysis Yet</h3>
                  <p className="text-gray-500 mb-6">
                    Enter your property details and calculate the cap rate to see detailed results here.
                  </p>
                  <Button 
                    onClick={() => setActiveTab('calculator')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Start Calculation
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Guide Tab */}
          <TabsContent value="guide" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Cap Rate Basics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Understanding Cap Rates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What is a Cap Rate?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      The capitalization rate (cap rate) is a key metric used to evaluate real estate investments. 
                      It represents the rate of return on a property based on the income it generates.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        Cap Rate = Net Operating Income ÷ Property Value × 100
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Key Components</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• <strong>NOI:</strong> Net Operating Income (rental income minus operating expenses)</li>
                      <li>• <strong>Property Value:</strong> Purchase price or current market value</li>
                      <li>• <strong>Operating Expenses:</strong> Property taxes, insurance, maintenance, management</li>
                      <li>• <strong>Vacancy Rate:</strong> Expected percentage of time property is vacant</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Cap Rate Ranges by Property Type</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Single Family:</span>
                        <span className="font-medium">4% - 10%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Multi-Family:</span>
                        <span className="font-medium">5% - 12%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Commercial:</span>
                        <span className="font-medium">6% - 12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Investment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Interpreting Cap Rates</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">High Cap Rate (8%+)</Badge>
                        <span className="text-sm">Higher risk, higher return</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-800">Medium Cap Rate (5-8%)</Badge>
                        <span className="text-sm">Balanced risk and return</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-100 text-orange-800">Low Cap Rate (Less Than 5%)</Badge>
                        <span className="text-sm">Lower risk, stable returns</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Factors Affecting Cap Rates</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• <strong>Location:</strong> Prime locations typically have lower cap rates</li>
                      <li>• <strong>Property Condition:</strong> Newer properties often have lower cap rates</li>
                      <li>• <strong>Market Conditions:</strong> Supply and demand dynamics</li>
                      <li>• <strong>Interest Rates:</strong> Higher rates can increase cap rates</li>
                      <li>• <strong>Economic Growth:</strong> Strong economies support lower cap rates</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Using Cap Rates for Comparison</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Compare similar properties in the same market</li>
                      <li>• Consider the risk profile of each investment</li>
                      <li>• Factor in potential for appreciation</li>
                      <li>• Evaluate management requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Advanced Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Related Investment Metrics</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-sm">Cash-on-Cash Return</p>
                        <p className="text-xs text-gray-600">
                          Annual cash flow divided by total cash invested
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-sm">Gross Rent Multiplier (GRM)</p>
                        <p className="text-xs text-gray-600">
                          Property price divided by gross annual rental income
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-sm">Expense Ratio</p>
                        <p className="text-xs text-gray-600">
                          Operating expenses as percentage of effective rental income
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Pro Forma Analysis</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Project future income and expenses</li>
                      <li>• Account for rent increases over time</li>
                      <li>• Factor in capital improvements</li>
                      <li>• Consider market appreciation</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Risk Assessment</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Tenant quality and lease terms</li>
                      <li>• Property condition and age</li>
                      <li>• Market volatility and trends</li>
                      <li>• Liquidity considerations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Expert Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Due Diligence Checklist</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Verify actual rental income and expenses</li>
                      <li>• Review lease agreements and tenant history</li>
                      <li>• Inspect property condition thoroughly</li>
                      <li>• Research comparable sales and rentals</li>
                      <li>• Understand local market trends</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Common Mistakes to Avoid</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Using gross income instead of net operating income</li>
                      <li>• Forgetting to account for vacancy rates</li>
                      <li>• Underestimating operating expenses</li>
                      <li>• Ignoring capital expenditure needs</li>
                      <li>• Not considering financing costs</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Market Research Tips</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Study local economic indicators</li>
                      <li>• Monitor population and job growth</li>
                      <li>• Track new construction and development</li>
                      <li>• Understand zoning and regulations</li>
                      <li>• Network with local real estate professionals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Comprehensive Article Section */}
        <div className="mt-12 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Complete Guide to Cap Rate Analysis in Real Estate
              </CardTitle>
              <p className="text-gray-600">
                Master capitalization rates to evaluate and compare real estate investment opportunities effectively
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">What is Cap Rate?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800">
                      Capitalization rate (cap rate) is the ratio of Net Operating Income (NOI) to property value, 
                      expressed as a percentage. It measures the return on investment for an all-cash purchase.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">Why It's Important</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">
                      Cap rates allow investors to quickly compare properties, assess market values, 
                      and determine if a property meets their investment criteria and risk tolerance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Understanding Cap Rate Formula</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-2">Cap Rate = NOI ÷ Property Value × 100</div>
                      <p className="text-gray-600">Where NOI = Gross Rental Income - Operating Expenses</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">Net Operating Income</div>
                        <div className="text-gray-600">Annual rental income minus all operating expenses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-700">Property Value</div>
                        <div className="text-gray-600">Current market value or purchase price</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-700">Result</div>
                        <div className="text-gray-600">Annual return percentage</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Cap Rate Ranges by Property Type</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-green-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-green-800">Residential</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600 mb-1">4-8%</div>
                        <p className="text-sm text-gray-600">Single-family homes, condos, small multifamily</p>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-blue-800">Multifamily</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-blue-600 mb-1">5-10%</div>
                        <p className="text-sm text-gray-600">Apartment buildings, large complexes</p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-purple-800">Commercial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-purple-600 mb-1">6-12%</div>
                        <p className="text-sm text-gray-600">Office buildings, retail spaces</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-orange-800">Industrial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600 mb-1">7-12%</div>
                        <p className="text-sm text-gray-600">Warehouses, manufacturing facilities</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Factors Affecting Cap Rates</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-red-800">Higher Cap Rates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Higher risk properties</li>
                          <li>• Declining neighborhoods</li>
                          <li>• Older buildings requiring maintenance</li>
                          <li>• Less desirable locations</li>
                          <li>• Economic uncertainty</li>
                          <li>• Higher vacancy rates</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">Lower Cap Rates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Prime locations</li>
                          <li>• New or well-maintained properties</li>
                          <li>• Strong tenant demand</li>
                          <li>• Growing markets</li>
                          <li>• Stable economic conditions</li>
                          <li>• Low interest rate environment</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Cap Rate vs. Other Metrics</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-900">Cap Rate vs. Cash-on-Cash Return</h4>
                      <p className="text-gray-700 text-sm">
                        Cap rate assumes all-cash purchase, while cash-on-cash return considers financing. 
                        Cash-on-cash is typically higher due to leverage effects.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-900">Cap Rate vs. Total Return</h4>
                      <p className="text-gray-700 text-sm">
                        Cap rate only measures income return, while total return includes appreciation. 
                        Consider both for comprehensive investment analysis.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-purple-900">Cap Rate vs. IRR</h4>
                      <p className="text-gray-700 text-sm">
                        Cap rate is a snapshot metric, while IRR considers time value of money and 
                        cash flows over the entire investment period.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Using Cap Rates for Investment Decisions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">Property Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Compare similar properties in same market</li>
                          <li>• Identify undervalued opportunities</li>
                          <li>• Screen potential investments quickly</li>
                          <li>• Benchmark against market averages</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-800">Valuation Tool</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Estimate property value: NOI ÷ Cap Rate</li>
                          <li>• Validate asking prices</li>
                          <li>• Determine maximum offer price</li>
                          <li>• Track market value changes</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Common Cap Rate Mistakes</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Calculation Errors</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Using gross income instead of NOI</li>
                          <li>• Forgetting vacancy allowance</li>
                          <li>• Excluding capital expenditures</li>
                          <li>• Using inflated rental projections</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Analysis Mistakes</h4>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• Comparing different property types</li>
                          <li>• Ignoring market conditions</li>
                          <li>• Focusing only on cap rate</li>
                          <li>• Not considering appreciation potential</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Market Analysis with Cap Rates</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Market Trends</h4>
                      <p className="text-blue-700 text-sm">
                        Rising cap rates may indicate declining property values or increasing risk perception. 
                        Falling cap rates suggest strong demand and rising property values.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Geographic Variations</h4>
                      <p className="text-green-700 text-sm">
                        Cap rates vary significantly by location. Urban core properties typically have 
                        lower cap rates than suburban or rural properties due to demand and stability.
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Economic Cycles</h4>
                      <p className="text-purple-700 text-sm">
                        Cap rates are inversely related to property values and tend to move with interest rates. 
                        Understanding cycles helps time investments effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Advanced Cap Rate Strategies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-orange-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-orange-800">Value-Add Plays</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Buy properties with higher cap rates due to operational issues, then improve NOI through:
                        </p>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Rent increases to market rates</li>
                          <li>• Expense reduction programs</li>
                          <li>• Property improvements</li>
                          <li>• Better property management</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-teal-800">Market Timing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Use cap rate trends to time market entry and exit:
                        </p>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Buy when cap rates are high</li>
                          <li>• Sell when cap rates compress</li>
                          <li>• Monitor interest rate impacts</li>
                          <li>• Track supply and demand cycles</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Cap rate is a fundamental real estate valuation metric</li>
                      <li>• Higher cap rates indicate higher risk or lower property values</li>
                      <li>• Compare cap rates within same property type and market</li>
                      <li>• Use cap rates alongside other investment metrics</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Market conditions significantly impact cap rates</li>
                      <li>• Accurate NOI calculation is crucial for reliability</li>
                      <li>• Consider both income and appreciation potential</li>
                      <li>• Cap rates help identify value-add opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}