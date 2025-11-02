'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Calculator, DollarSign, TrendingDown, Calendar, FileText, Home, AlertTriangle } from 'lucide-react'

interface PropertyData {
  purchasePrice: number
  landValue: number
  purchaseDate: string
  propertyType: 'residential' | 'commercial'
  improvementCosts: number
  improvementDate: string
  bonusDepreciation: boolean
  costSegregation: boolean
}

interface DepreciationResults {
  depreciableBasis: number
  annualDepreciation: number
  depreciationMethod: string
  depreciationPeriod: number
  bonusDepreciationAmount: number
  firstYearDepreciation: number
  totalDepreciation: number
  remainingBasis: number
  taxSavings: {
    annual: number
    total: number
  }
  schedule: Array<{
    year: number
    depreciation: number
    cumulativeDepreciation: number
    remainingBasis: number
    taxSavings: number
  }>
  recapture: {
    amount: number
    taxRate: number
    taxOwed: number
  }
}

interface TaxSettings {
  marginalTaxRate: number
  stateRate: number
  depreciationRecaptureRate: number
  netInvestmentIncomeRate: number
}

export default function DepreciationCalculator() {
  const [activeTab, setActiveTab] = useState('calculator')
  const [propertyData, setPropertyData] = useState<PropertyData>({
    purchasePrice: 300000,
    landValue: 60000,
    purchaseDate: '2024-01-01',
    propertyType: 'residential',
    improvementCosts: 0,
    improvementDate: '',
    bonusDepreciation: false,
    costSegregation: false
  })

  const [taxSettings, setTaxSettings] = useState<TaxSettings>({
    marginalTaxRate: 24,
    stateRate: 5,
    depreciationRecaptureRate: 25,
    netInvestmentIncomeRate: 3.8
  })

  const [results, setResults] = useState<DepreciationResults | null>(null)

  const calculateDepreciation = () => {
    const depreciableBasis = propertyData.purchasePrice - propertyData.landValue + propertyData.improvementCosts
    const depreciationPeriod = propertyData.propertyType === 'residential' ? 27.5 : 39
    const annualDepreciation = depreciableBasis / depreciationPeriod
    
    // Calculate bonus depreciation (if applicable)
    let bonusDepreciationAmount = 0
    if (propertyData.bonusDepreciation && propertyData.improvementCosts > 0) {
      // Simplified bonus depreciation calculation (actual rules are more complex)
      bonusDepreciationAmount = propertyData.improvementCosts * 0.8 // 80% bonus depreciation
    }

    // First year depreciation (mid-month convention)
    const purchaseMonth = new Date(propertyData.purchaseDate).getMonth() + 1
    const firstYearMultiplier = (12 - purchaseMonth + 0.5) / 12
    const firstYearRegularDepreciation = annualDepreciation * firstYearMultiplier
    const firstYearDepreciation = firstYearRegularDepreciation + bonusDepreciationAmount

    // Calculate depreciation schedule
    const schedule = []
    let cumulativeDepreciation = 0
    let remainingBasis = depreciableBasis

    for (let year = 1; year <= Math.ceil(depreciationPeriod) + 1; year++) {
      let yearlyDepreciation = 0
      
      if (year === 1) {
        yearlyDepreciation = firstYearDepreciation
      } else if (year <= depreciationPeriod) {
        yearlyDepreciation = annualDepreciation
      } else {
        // Final year - remaining depreciation
        yearlyDepreciation = Math.max(0, depreciableBasis - cumulativeDepreciation)
      }

      if (yearlyDepreciation <= 0) break

      cumulativeDepreciation += yearlyDepreciation
      remainingBasis = Math.max(0, depreciableBasis - cumulativeDepreciation)
      
      const combinedTaxRate = (taxSettings.marginalTaxRate + taxSettings.stateRate) / 100
      const taxSavings = yearlyDepreciation * combinedTaxRate

      schedule.push({
        year,
        depreciation: yearlyDepreciation,
        cumulativeDepreciation,
        remainingBasis,
        taxSavings
      })
    }

    const totalDepreciation = cumulativeDepreciation
    const annualTaxSavings = annualDepreciation * ((taxSettings.marginalTaxRate + taxSettings.stateRate) / 100)
    const totalTaxSavings = totalDepreciation * ((taxSettings.marginalTaxRate + taxSettings.stateRate) / 100)

    // Depreciation recapture calculation
    const recaptureAmount = totalDepreciation
    const recaptureTaxRate = taxSettings.depreciationRecaptureRate / 100
    const recaptureTaxOwed = recaptureAmount * recaptureTaxRate

    setResults({
      depreciableBasis,
      annualDepreciation,
      depreciationMethod: propertyData.propertyType === 'residential' ? 'MACRS 27.5 years' : 'MACRS 39 years',
      depreciationPeriod,
      bonusDepreciationAmount,
      firstYearDepreciation,
      totalDepreciation,
      remainingBasis: depreciableBasis - totalDepreciation,
      taxSavings: {
        annual: annualTaxSavings,
        total: totalTaxSavings
      },
      schedule,
      recapture: {
        amount: recaptureAmount,
        taxRate: taxSettings.depreciationRecaptureRate,
        taxOwed: recaptureTaxOwed
      }
    })
    setActiveTab('results')
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getDepreciationProgress = () => {
    if (!results) return 0
    return (results.totalDepreciation / results.depreciableBasis) * 100
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Depreciation Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate rental property depreciation for tax purposes. Analyze MACRS depreciation, bonus depreciation, and potential tax savings for your real estate investment.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Calculator
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            Results
          </TabsTrigger>
          <TabsTrigger value="guide" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Information
                </CardTitle>
                <CardDescription>
                  Enter your rental property purchase details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="purchasePrice">Purchase Price</Label>
                  <Input
                    id="purchasePrice"
                    type="number"
                    value={propertyData.purchasePrice}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      purchasePrice: Number(e.target.value)
                    })}
                    placeholder="300000"
                  />
                </div>
                <div>
                  <Label htmlFor="landValue">Land Value</Label>
                  <Input
                    id="landValue"
                    type="number"
                    value={propertyData.landValue}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      landValue: Number(e.target.value)
                    })}
                    placeholder="60000"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Land is not depreciable - typically 15-25% of purchase price
                  </p>
                </div>
                <div>
                  <Label htmlFor="purchaseDate">Purchase Date</Label>
                  <Input
                    id="purchaseDate"
                    type="date"
                    value={propertyData.purchaseDate}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      purchaseDate: e.target.value
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select
                    value={propertyData.propertyType}
                    onValueChange={(value: 'residential' | 'commercial') => setPropertyData({
                      ...propertyData,
                      propertyType: value
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential (27.5 years)</SelectItem>
                      <SelectItem value="commercial">Commercial (39 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="improvementCosts">Capital Improvements</Label>
                  <Input
                    id="improvementCosts"
                    type="number"
                    value={propertyData.improvementCosts}
                    onChange={(e) => setPropertyData({
                      ...propertyData,
                      improvementCosts: Number(e.target.value)
                    })}
                    placeholder="0"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Major improvements that add value or extend property life
                  </p>
                </div>
                {propertyData.improvementCosts > 0 && (
                  <div>
                    <Label htmlFor="improvementDate">Improvement Date</Label>
                    <Input
                      id="improvementDate"
                      type="date"
                      value={propertyData.improvementDate}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        improvementDate: e.target.value
                      })}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tax Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Tax Settings
                </CardTitle>
                <CardDescription>
                  Configure your tax rates for accurate calculations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="marginalTaxRate">Federal Marginal Tax Rate (%)</Label>
                  <Input
                    id="marginalTaxRate"
                    type="number"
                    value={taxSettings.marginalTaxRate}
                    onChange={(e) => setTaxSettings({
                      ...taxSettings,
                      marginalTaxRate: Number(e.target.value)
                    })}
                    placeholder="24"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Your highest federal income tax bracket
                  </p>
                </div>
                <div>
                  <Label htmlFor="stateRate">State Tax Rate (%)</Label>
                  <Input
                    id="stateRate"
                    type="number"
                    value={taxSettings.stateRate}
                    onChange={(e) => setTaxSettings({
                      ...taxSettings,
                      stateRate: Number(e.target.value)
                    })}
                    placeholder="5"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Your state income tax rate (0 if no state tax)
                  </p>
                </div>
                <div>
                  <Label htmlFor="depreciationRecaptureRate">Depreciation Recapture Rate (%)</Label>
                  <Input
                    id="depreciationRecaptureRate"
                    type="number"
                    value={taxSettings.depreciationRecaptureRate}
                    onChange={(e) => setTaxSettings({
                      ...taxSettings,
                      depreciationRecaptureRate: Number(e.target.value)
                    })}
                    placeholder="25"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Tax rate on depreciation when property is sold (typically 25%)
                  </p>
                </div>
                <div>
                  <Label htmlFor="netInvestmentIncomeRate">Net Investment Income Tax (%)</Label>
                  <Input
                    id="netInvestmentIncomeRate"
                    type="number"
                    value={taxSettings.netInvestmentIncomeRate}
                    onChange={(e) => setTaxSettings({
                      ...taxSettings,
                      netInvestmentIncomeRate: Number(e.target.value)
                    })}
                    placeholder="3.8"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Additional tax for high-income earners (3.8% if applicable)
                  </p>
                </div>
                
                {/* Advanced Options */}
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold text-sm">Advanced Options</h4>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="bonusDepreciation"
                      checked={propertyData.bonusDepreciation}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        bonusDepreciation: e.target.checked
                      })}
                      className="rounded"
                    />
                    <Label htmlFor="bonusDepreciation" className="text-sm">
                      Apply Bonus Depreciation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="costSegregation"
                      checked={propertyData.costSegregation}
                      onChange={(e) => setPropertyData({
                        ...propertyData,
                        costSegregation: e.target.checked
                      })}
                      className="rounded"
                    />
                    <Label htmlFor="costSegregation" className="text-sm">
                      Consider Cost Segregation Study
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Button 
                onClick={calculateDepreciation} 
                className="w-full"
                size="lg"
                disabled={!propertyData.purchasePrice || !propertyData.landValue}
              >
                Calculate Depreciation
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {results ? (
            <>
              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatCurrency(results.depreciableBasis)}
                      </div>
                      <p className="text-sm text-gray-600">Depreciable Basis</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(results.annualDepreciation)}
                      </div>
                      <p className="text-sm text-gray-600">Annual Depreciation</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {formatCurrency(results.taxSavings.annual)}
                      </div>
                      <p className="text-sm text-gray-600">Annual Tax Savings</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {results.depreciationPeriod} years
                      </div>
                      <p className="text-sm text-gray-600">Depreciation Period</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Depreciation Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Depreciation Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Depreciation Method:</span>
                        <span className="font-semibold">{results.depreciationMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>First Year Depreciation:</span>
                        <span className="font-semibold">{formatCurrency(results.firstYearDepreciation)}</span>
                      </div>
                      {results.bonusDepreciationAmount > 0 && (
                        <div className="flex justify-between">
                          <span>Bonus Depreciation:</span>
                          <span className="font-semibold text-green-600">{formatCurrency(results.bonusDepreciationAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Total Depreciation:</span>
                        <span className="font-semibold">{formatCurrency(results.totalDepreciation)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Remaining Basis:</span>
                        <span className="font-semibold">{formatCurrency(results.remainingBasis)}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Tax Savings:</span>
                        <span className="font-semibold text-green-600">{formatCurrency(results.taxSavings.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Depreciation Progress:</span>
                        <span className="font-semibold">{getDepreciationProgress().toFixed(1)}%</span>
                      </div>
                      <Progress value={getDepreciationProgress()} className="w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Depreciation Recapture */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Depreciation Recapture (Upon Sale)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-600">
                          {formatCurrency(results.recapture.amount)}
                        </div>
                        <p className="text-sm text-gray-600">Recapture Amount</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-600">
                          {results.recapture.taxRate}%
                        </div>
                        <p className="text-sm text-gray-600">Recapture Tax Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-red-600">
                          {formatCurrency(results.recapture.taxOwed)}
                        </div>
                        <p className="text-sm text-gray-600">Tax Owed on Sale</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      When you sell the property, you'll owe taxes on the depreciation claimed at the recapture rate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Depreciation Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Depreciation Schedule (First 10 Years)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Year</th>
                          <th className="text-right p-2">Annual Depreciation</th>
                          <th className="text-right p-2">Cumulative Depreciation</th>
                          <th className="text-right p-2">Remaining Basis</th>
                          <th className="text-right p-2">Tax Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.schedule.slice(0, 10).map((year) => (
                          <tr key={year.year} className="border-b">
                            <td className="p-2 font-medium">{year.year}</td>
                            <td className="p-2 text-right">{formatCurrency(year.depreciation)}</td>
                            <td className="p-2 text-right">{formatCurrency(year.cumulativeDepreciation)}</td>
                            <td className="p-2 text-right">{formatCurrency(year.remainingBasis)}</td>
                            <td className="p-2 text-right text-green-600">{formatCurrency(year.taxSavings)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {results.schedule.length > 10 && (
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      Showing first 10 years. Full schedule continues for {results.depreciationPeriod} years.
                    </p>
                  )}
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Please fill out the calculator form and click "Calculate Depreciation" to see your results.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <div className="grid gap-6">
            {/* Depreciation Basics */}
            <Card>
              <CardHeader>
                <CardTitle>Understanding Rental Property Depreciation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">What is Depreciation?</h4>
                    <p className="text-sm text-gray-600">
                      Depreciation is a tax deduction that allows you to recover the cost of income-producing property over time. 
                      The IRS recognizes that buildings and improvements wear out, become obsolete, or lose value due to natural causes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Key Benefits</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Reduces taxable rental income each year</li>
                      <li>Can create "paper losses" that offset other income</li>
                      <li>Improves cash flow by reducing tax liability</li>
                      <li>Mandatory deduction - you must claim it or lose it</li>
                      <li>Can be combined with other real estate tax strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Important Rules</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Only the building/improvements can be depreciated, not land</li>
                      <li>Property must be used for business or income production</li>
                      <li>You must own the property (not lease it)</li>
                      <li>Property must have a determinable useful life</li>
                      <li>Depreciation starts when property is "placed in service"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MACRS System */}
            <Card>
              <CardHeader>
                <CardTitle>MACRS Depreciation System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-3">Residential Rental Property</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Depreciation Period:</strong> 27.5 years</li>
                      <li><strong>Method:</strong> Straight-line</li>
                      <li><strong>Convention:</strong> Mid-month</li>
                      <li><strong>Applies to:</strong> Houses, apartments, condos, townhomes</li>
                      <li><strong>Annual Rate:</strong> 3.636% (1/27.5)</li>
                      <li><strong>First Year:</strong> Partial year based on purchase month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600 mb-3">Commercial Property</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>Depreciation Period:</strong> 39 years</li>
                      <li><strong>Method:</strong> Straight-line</li>
                      <li><strong>Convention:</strong> Mid-month</li>
                      <li><strong>Applies to:</strong> Office buildings, retail, warehouses</li>
                      <li><strong>Annual Rate:</strong> 2.564% (1/39)</li>
                      <li><strong>First Year:</strong> Partial year based on purchase month</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Mid-Month Convention</h4>
                  <p className="text-sm text-blue-600">
                    Regardless of when in the month you purchase the property, the IRS treats it as if you bought it 
                    in the middle of that month. This affects your first and last year depreciation amounts.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Strategies */}
            <Card>
              <CardHeader>
                <CardTitle>Advanced Depreciation Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Cost Segregation Studies</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      A cost segregation study identifies property components that can be depreciated over shorter periods:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li><strong>5-year property:</strong> Carpeting, appliances, decorative lighting</li>
                      <li><strong>7-year property:</strong> Office furniture, fixtures</li>
                      <li><strong>15-year property:</strong> Landscaping, driveways, sidewalks</li>
                      <li><strong>Benefits:</strong> Accelerated depreciation, higher first-year deductions</li>
                      <li><strong>Cost:</strong> $5,000-$15,000+ depending on property value</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Bonus Depreciation</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Allows immediate deduction of a percentage of qualifying property costs:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Available for new and used property (since 2017)</li>
                      <li>Applies to property with recovery periods of 20 years or less</li>
                      <li>Percentage varies by year (100% through 2022, phasing down)</li>
                      <li>Must be combined with cost segregation for maximum benefit</li>
                      <li>Can create large first-year deductions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Section 179 Deduction</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Allows immediate expensing of certain property improvements:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Up to $1,080,000 deduction limit (2022)</li>
                      <li>Applies to qualifying improvement property</li>
                      <li>Roofs, HVAC, fire protection, security systems</li>
                      <li>Cannot exceed taxable income from the business</li>
                      <li>Phases out for high-cost properties</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depreciation Recapture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Depreciation Recapture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-700 mb-2">What is Depreciation Recapture?</h4>
                  <p className="text-sm text-orange-600 mb-3">
                    When you sell a depreciated rental property, you must "recapture" (pay taxes on) the depreciation 
                    you claimed. This is taxed as ordinary income up to a maximum rate of 25%.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Depreciation Claimed:</span>
                      <span className="font-semibold">Taxed at 25% (max)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Capital Gains:</span>
                      <span className="font-semibold">Taxed at capital gains rates</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Strategies to Minimize Recapture</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li><strong>1031 Exchange:</strong> Defer taxes by exchanging for like-kind property</li>
                    <li><strong>Installment Sale:</strong> Spread recapture over multiple years</li>
                    <li><strong>Hold Until Death:</strong> Heirs receive stepped-up basis</li>
                    <li><strong>Convert to Primary Residence:</strong> May qualify for exclusion</li>
                    <li><strong>Opportunity Zones:</strong> Defer and potentially reduce taxes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
              <CardHeader>
                <CardTitle>Common Depreciation Mistakes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Mistakes to Avoid</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Not claiming depreciation (you still owe recapture)</li>
                      <li>Depreciating land value</li>
                      <li>Using wrong depreciation period</li>
                      <li>Forgetting about improvements</li>
                      <li>Not considering cost segregation</li>
                      <li>Mixing personal and rental use</li>
                      <li>Poor record keeping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Best Practices</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Always claim allowable depreciation</li>
                      <li>Get professional appraisal for land value</li>
                      <li>Keep detailed records of all improvements</li>
                      <li>Consider cost segregation for expensive properties</li>
                      <li>Track placed-in-service dates accurately</li>
                      <li>Consult tax professionals for complex situations</li>
                      <li>Plan for depreciation recapture early</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Help */}
            <Card>
              <CardHeader>
                <CardTitle>When to Seek Professional Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Consider Professional Assistance For:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-600">
                    <li>Properties worth $500,000+ (cost segregation studies)</li>
                    <li>Complex property types (mixed-use, historic properties)</li>
                    <li>Multiple properties or large portfolios</li>
                    <li>Significant improvements or renovations</li>
                    <li>Planning property sales or exchanges</li>
                    <li>Passive activity loss limitations</li>
                    <li>State-specific depreciation rules</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}