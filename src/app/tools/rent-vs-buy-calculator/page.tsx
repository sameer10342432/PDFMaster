'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calculator, Home, TrendingUp, CheckCircle, BookOpen } from 'lucide-react'

export default function RentVsBuyCalculator() {
  // Property Details
  const [propertyPrice, setPropertyPrice] = useState<number>(800000)
  const [monthlyRent, setMonthlyRent] = useState<number>(3200)
  const [downPayment, setDownPayment] = useState<number>(160000)
  const [loanTerm, setLoanTerm] = useState<number>(30)
  const [interestRate, setInterestRate] = useState<number>(6.5)
  
  // Buying Costs
  const [stampDuty, setStampDuty] = useState<number>(32000)
  const [legalFees, setLegalFees] = useState<number>(2000)
  const [inspectionFees, setInspectionFees] = useState<number>(800)
  const [otherBuyingCosts, setOtherBuyingCosts] = useState<number>(5000)
  
  // Ongoing Costs
  const [councilRates, setCouncilRates] = useState<number>(2500)
  const [insurance, setInsurance] = useState<number>(1200)
  const [maintenance, setMaintenance] = useState<number>(4000)
  const [strataFees, setStrataFees] = useState<number>(2000)
  
  // Rental Costs
  const [bondAmount, setBondAmount] = useState<number>(12800)
  const [rentalIncrease, setRentalIncrease] = useState<number>(3)
  
  // Investment Assumptions
  const [propertyGrowth, setPropertyGrowth] = useState<number>(5)
  const [investmentReturn, setInvestmentReturn] = useState<number>(7)
  const [timeHorizon, setTimeHorizon] = useState<number>(10)
  const [marginalTaxRate, setMarginalTaxRate] = useState<number>(32.5)

  const [results, setResults] = useState({
    monthlyMortgage: 0,
    totalBuyingCosts: 0,
    totalMonthlyCosts: 0,
    breakEvenPoint: 0,
    totalCostBuying: 0,
    totalCostRenting: 0,
    netWorthDifference: 0,
    recommendation: '',
    buyingAdvantages: [] as string[],
    rentingAdvantages: [] as string[]
  })



  const calculateComparison = useCallback(() => {
    // Mortgage calculations
    const loanAmount = propertyPrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12
    const monthlyMortgage = monthlyRate > 0 
      ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
      : loanAmount / numPayments

    // Total buying costs
    const totalBuyingCosts = downPayment + stampDuty + legalFees + inspectionFees + otherBuyingCosts

    // Monthly ownership costs
    const monthlyOwnershipCosts = (councilRates + insurance + maintenance + strataFees) / 12
    const totalMonthlyCosts = monthlyMortgage + monthlyOwnershipCosts

    // Calculate costs over time horizon
    const months = timeHorizon * 12
    
    // Buying scenario
    const totalMortgagePayments = monthlyMortgage * months
    const totalOwnershipCosts = monthlyOwnershipCosts * months
    const totalCostBuying = totalBuyingCosts + totalMortgagePayments + totalOwnershipCosts
    
    // Property value after time horizon
    const futurePropertyValue = propertyPrice * Math.pow(1 + propertyGrowth / 100, timeHorizon)
    
    // Remaining loan balance
    const remainingBalance = loanAmount * Math.pow(1 + monthlyRate, months) - 
      monthlyMortgage * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate
    
    // Net equity from buying
    const netEquityBuying = futurePropertyValue - Math.max(0, remainingBalance)
    
    // Renting scenario
    let totalRentPaid = 0
    let currentRent = monthlyRent
    
    for (let year = 1; year <= timeHorizon; year++) {
      totalRentPaid += currentRent * 12
      currentRent *= (1 + rentalIncrease / 100)
    }
    
    const totalCostRenting = bondAmount + totalRentPaid
    
    // Investment of down payment and monthly savings
    const monthlySavings = totalMonthlyCosts - monthlyRent
    const investmentValue = calculateInvestmentValue(totalBuyingCosts, monthlySavings, investmentReturn, timeHorizon)
    
    // Net worth comparison
    const netWorthBuying = netEquityBuying - totalCostBuying + totalBuyingCosts
    const netWorthRenting = investmentValue - totalCostRenting + bondAmount
    const netWorthDifference = netWorthBuying - netWorthRenting

    // Break-even calculation (simplified)
    const breakEvenPoint = totalBuyingCosts / Math.max(1, totalMonthlyCosts - monthlyRent)

    // Determine recommendation
    let recommendation = ''
    let buyingAdvantages: string[] = []
    let rentingAdvantages: string[] = []

    if (netWorthDifference > 50000) {
      recommendation = 'Buying is strongly recommended'
      buyingAdvantages = [
        'Significant wealth building potential',
        'Property ownership benefits',
        'Potential tax advantages',
        'Stability and control over living situation'
      ]
    } else if (netWorthDifference > 0) {
      recommendation = 'Buying is slightly better'
      buyingAdvantages = [
        'Modest wealth building advantage',
        'Property ownership benefits',
        'Long-term stability'
      ]
    } else if (netWorthDifference > -50000) {
      recommendation = 'Renting is slightly better'
      rentingAdvantages = [
        'Lower upfront costs',
        'Greater flexibility',
        'Investment diversification opportunity'
      ]
    } else {
      recommendation = 'Renting is strongly recommended'
      rentingAdvantages = [
        'Significantly lower total costs',
        'Maximum flexibility',
        'Better investment opportunities',
        'Lower financial risk'
      ]
    }

    // Common advantages
    if (netWorthDifference <= 0) {
      rentingAdvantages.push(
        'No maintenance responsibilities',
        'Ability to move easily',
        'No property market risk'
      )
    }

    setResults({
      monthlyMortgage,
      totalBuyingCosts,
      totalMonthlyCosts,
      breakEvenPoint,
      totalCostBuying,
      totalCostRenting,
      netWorthDifference,
      recommendation,
      buyingAdvantages,
      rentingAdvantages
    })
  }, [propertyPrice, monthlyRent, downPayment, loanTerm, interestRate, stampDuty, legalFees, inspectionFees, otherBuyingCosts, councilRates, insurance, maintenance, strataFees, bondAmount, rentalIncrease, propertyGrowth, investmentReturn, timeHorizon])

  useEffect(() => {
    calculateComparison()
  }, [calculateComparison])

  const calculateInvestmentValue = useCallback((initialAmount: number, monthlyContribution: number, annualReturn: number, years: number) => {
    const monthlyReturn = annualReturn / 100 / 12
    const months = years * 12
    
    // Future value of initial lump sum
    const futureValueLumpSum = initialAmount * Math.pow(1 + monthlyReturn, months)
    
    // Future value of monthly contributions
    const futureValueAnnuity = monthlyContribution > 0 
      ? monthlyContribution * (Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn
      : 0
    
    return futureValueLumpSum + futureValueAnnuity
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatYears = (months: number) => {
    const years = Math.floor(months / 12)
    const remainingMonths = Math.floor(months % 12)
    if (years === 0) return `${remainingMonths} months`
    if (remainingMonths === 0) return `${years} years`
    return `${years} years, ${remainingMonths} months`
  }

  const getRecommendationColor = (recommendation: string) => {
    if (recommendation.includes('strongly')) {
      return recommendation.includes('Buying') 
        ? 'bg-green-100 text-green-800 border-green-200'
        : 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return 'bg-yellow-100 text-yellow-800 border-yellow-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rent vs Buy Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed housing decisions by comparing the total costs and benefits of renting versus buying property
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Home className="mr-3 h-6 w-6" />
                  Rent vs Buy Analysis
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your property and financial details for comprehensive comparison
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="property" className="w-full">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="property">Property</TabsTrigger>
                    <TabsTrigger value="buying">Buying</TabsTrigger>
                    <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                    <TabsTrigger value="rental">Rental</TabsTrigger>
                    <TabsTrigger value="assumptions">Assumptions</TabsTrigger>
                    <TabsTrigger value="article"><BookOpen className="h-4 w-4 mr-2" />Article</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="property" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyPrice">Property Price</Label>
                        <Input
                          id="propertyPrice"
                          type="number"
                          value={propertyPrice}
                          onChange={(e) => setPropertyPrice(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyRent">Monthly Rent</Label>
                        <Input
                          id="monthlyRent"
                          type="number"
                          value={monthlyRent}
                          onChange={(e) => setMonthlyRent(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="downPayment">Down Payment</Label>
                        <Input
                          id="downPayment"
                          type="number"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interestRate">Interest Rate (%)</Label>
                        <Input
                          id="interestRate"
                          type="number"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanTerm">Loan Term (years)</Label>
                        <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
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
                  </TabsContent>
                  
                  <TabsContent value="buying" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="stampDuty">Stamp Duty</Label>
                        <Input
                          id="stampDuty"
                          type="number"
                          value={stampDuty}
                          onChange={(e) => setStampDuty(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="legalFees">Legal Fees</Label>
                        <Input
                          id="legalFees"
                          type="number"
                          value={legalFees}
                          onChange={(e) => setLegalFees(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inspectionFees">Inspection Fees</Label>
                        <Input
                          id="inspectionFees"
                          type="number"
                          value={inspectionFees}
                          onChange={(e) => setInspectionFees(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="otherBuyingCosts">Other Buying Costs</Label>
                        <Input
                          id="otherBuyingCosts"
                          type="number"
                          value={otherBuyingCosts}
                          onChange={(e) => setOtherBuyingCosts(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ongoing" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="councilRates">Annual Council Rates</Label>
                        <Input
                          id="councilRates"
                          type="number"
                          value={councilRates}
                          onChange={(e) => setCouncilRates(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="insurance">Annual Insurance</Label>
                        <Input
                          id="insurance"
                          type="number"
                          value={insurance}
                          onChange={(e) => setInsurance(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maintenance">Annual Maintenance</Label>
                        <Input
                          id="maintenance"
                          type="number"
                          value={maintenance}
                          onChange={(e) => setMaintenance(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="strataFees">Annual Strata Fees</Label>
                        <Input
                          id="strataFees"
                          type="number"
                          value={strataFees}
                          onChange={(e) => setStrataFees(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="rental" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bondAmount">Bond Amount</Label>
                        <Input
                          id="bondAmount"
                          type="number"
                          value={bondAmount}
                          onChange={(e) => setBondAmount(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="rentalIncrease">Annual Rent Increase (%)</Label>
                        <Input
                          id="rentalIncrease"
                          type="number"
                          step="0.1"
                          value={rentalIncrease}
                          onChange={(e) => setRentalIncrease(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="assumptions" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyGrowth">Property Growth Rate (%)</Label>
                        <Input
                          id="propertyGrowth"
                          type="number"
                          step="0.1"
                          value={propertyGrowth}
                          onChange={(e) => setPropertyGrowth(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="investmentReturn">Investment Return (%)</Label>
                        <Input
                          id="investmentReturn"
                          type="number"
                          step="0.1"
                          value={investmentReturn}
                          onChange={(e) => setInvestmentReturn(Number(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeHorizon">Time Horizon (years)</Label>
                        <Select value={timeHorizon.toString()} onValueChange={(value) => setTimeHorizon(Number(value))}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 years</SelectItem>
                            <SelectItem value="10">10 years</SelectItem>
                            <SelectItem value="15">15 years</SelectItem>
                            <SelectItem value="20">20 years</SelectItem>
                            <SelectItem value="25">25 years</SelectItem>
                            <SelectItem value="30">30 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="marginalTaxRate">Marginal Tax Rate (%)</Label>
                        <Select value={marginalTaxRate.toString()} onValueChange={(value) => setMarginalTaxRate(Number(value))}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="19">19% ($18,201 - $45,000)</SelectItem>
                            <SelectItem value="32.5">32.5% ($45,001 - $120,000)</SelectItem>
                            <SelectItem value="37">37% ($120,001 - $180,000)</SelectItem>
                            <SelectItem value="45">45% ($180,001+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Comparison Results
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Recommendation</Label>
                    <Badge className={`mt-1 ${getRecommendationColor(results.recommendation)}`}>
                      {results.recommendation}
                    </Badge>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Net Worth Difference</Label>
                    <p className={`text-2xl font-bold ${results.netWorthDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(Math.abs(results.netWorthDifference))}
                    </p>
                    <p className="text-sm text-gray-500">
                      {results.netWorthDifference >= 0 ? 'Buying advantage' : 'Renting advantage'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Monthly Mortgage</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.monthlyMortgage)}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Total Monthly Cost</Label>
                      <p className="text-lg font-semibold">{formatCurrency(results.totalMonthlyCosts)}</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Break-even Point</Label>
                    <p className="text-lg font-semibold">{formatYears(results.breakEvenPoint)}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Total Buying Costs</Label>
                    <p className="text-lg font-semibold">{formatCurrency(results.totalBuyingCosts)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advantages */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                  Key Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                {results.buyingAdvantages.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-700 mb-2">Buying Advantages:</h4>
                    <ul className="space-y-1">
                      {results.buyingAdvantages.map((advantage, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {results.rentingAdvantages.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Renting Advantages:</h4>
                    <ul className="space-y-1">
                      {results.rentingAdvantages.map((advantage, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comprehensive Guide */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-900">
                Complete Rent vs Buy Guide
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Everything you need to know about making the right housing decision
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none p-8">
              <h2>Understanding the Rent vs Buy Decision</h2>
              <p>
                The decision to rent or buy a home is one of the most significant financial choices you&apos;ll make. It affects not only your monthly budget but also your long-term wealth building, lifestyle flexibility, and financial security. This comprehensive guide will help you understand all the factors involved in making this crucial decision.
              </p>

              <h2>Financial Factors to Consider</h2>
              
              <h3>Upfront Costs of Buying</h3>
              <p>
                Purchasing a home requires substantial upfront investment beyond just the down payment:
              </p>
              <ul>
                <li><strong>Down Payment:</strong> Typically 10-20% of the property value</li>
                <li><strong>Stamp Duty:</strong> Government tax varying by state and property value</li>
                <li><strong>Legal and Conveyancing Fees:</strong> Usually $1,500-$3,000</li>
                <li><strong>Building and Pest Inspections:</strong> $400-$1,200</li>
                <li><strong>Loan Application Fees:</strong> $300-$800</li>
                <li><strong>Lenders Mortgage Insurance (LMI):</strong> If down payment is less than 20%</li>
                <li><strong>Moving Costs:</strong> Professional movers, utility connections</li>
              </ul>

              <h3>Ongoing Costs of Ownership</h3>
              <p>
                Homeownership involves continuous expenses that renters don&apos;t face:
              </p>
              <ul>
                <li><strong>Mortgage Payments:</strong> Principal and interest</li>
                <li><strong>Council Rates:</strong> Annual property taxes</li>
                <li><strong>Home Insurance:</strong> Building and contents coverage</li>
                <li><strong>Maintenance and Repairs:</strong> Ongoing upkeep costs</li>
                <li><strong>Strata Fees:</strong> For apartments and townhouses</li>
                <li><strong>Utilities:</strong> Often higher for owned properties</li>
              </ul>

              <h3>Rental Costs and Considerations</h3>
              <p>
                While renting has lower upfront costs, there are still expenses to consider:
              </p>
              <ul>
                <li><strong>Bond:</strong> Usually 4 weeks&apos; rent held as security</li>
                <li><strong>Advance Rent:</strong> First month&apos;s rent in advance</li>
                <li><strong>Moving Costs:</strong> Generally lower than buying</li>
                <li><strong>Rental Insurance:</strong> Contents insurance</li>
                <li><strong>Rent Increases:</strong> Annual increases based on market conditions</li>
              </ul>

              <h2>The True Cost Comparison</h2>
              
              <h3>Total Cost of Ownership</h3>
              <p>
                To accurately compare renting vs buying, you need to calculate the total cost of ownership, which includes:
              </p>
              <ul>
                <li>All upfront costs</li>
                <li>Monthly mortgage payments</li>
                <li>Ongoing maintenance and fees</li>
                <li>The opportunity cost of your down payment and buying costs (i.e., what you&apos;d earn if you invested that money instead)</li>
                <li>Transaction costs when selling</li>
              </ul>

              <h3>Opportunity Cost Analysis</h3>
              <p>
                The money used for a down payment could be invested elsewhere. Consider:
              </p>
              <ul>
                <li>Potential returns from stock market investments</li>
                <li>Diversification benefits of not having all wealth in property</li>
                <li>Liquidity advantages of financial investments</li>
                <li>Risk comparison between property and other investments</li>
              </ul>

              <h2>Non-Financial Factors</h2>
              
              <h3>Lifestyle Considerations</h3>
              <p>
                Beyond finances, consider how each option affects your lifestyle:
              </p>
              <ul>
                <li><strong>Stability:</strong> Ownership provides long-term housing security</li>
                <li><strong>Flexibility:</strong> Renting allows easier relocation</li>
                <li><strong>Control:</strong> Owners can modify and improve their property</li>
                <li><strong>Responsibility:</strong> Owners handle all maintenance and repairs</li>
                <li><strong>Community:</strong> Ownership often leads to stronger neighborhood ties</li>
              </ul>

              <h3>Career and Life Stage Factors</h3>
              <p>
                Your current life situation significantly impacts the rent vs buy decision:
              </p>
              <ul>
                <li><strong>Job Stability:</strong> Secure employment favors buying</li>
                <li><strong>Career Growth:</strong> Potential relocations favor renting</li>
                <li><strong>Family Planning:</strong> Growing families may need larger spaces</li>
                <li><strong>Age and Timeline:</strong> Younger people often benefit from renting initially</li>
              </ul>

              <h2>Market Conditions Impact</h2>
              
              <h3>Property Market Cycles</h3>
              <p>
                Real estate markets are cyclical, affecting the rent vs buy equation:
              </p>
              <ul>
                <li><strong>Rising Markets:</strong> May favor buying for capital gains</li>
                <li><strong>Declining Markets:</strong> May favor waiting or renting</li>
                <li><strong>Interest Rate Environment:</strong> Low rates favor buying</li>
                <li><strong>Supply and Demand:</strong> Affects both purchase and rental prices</li>
              </ul>

              <h3>Regional Variations</h3>
              <p>
                Different areas have varying rent-to-price ratios:
              </p>
              <ul>
                <li><strong>High-Growth Areas:</strong> May justify higher purchase prices</li>
                <li><strong>Stable Markets:</strong> Often favor renting in expensive areas</li>
                <li><strong>Declining Areas:</strong> Require careful analysis of future prospects</li>
                <li><strong>Rental Yields:</strong> Low yields may indicate overvalued purchase prices</li>
              </ul>

              <h2>Tax Implications</h2>
              
              <h3>Homeowner Tax Benefits</h3>
              <p>
                Australian homeowners receive several tax advantages:
              </p>
              <ul>
                <li><strong>Principal Residence Exemption:</strong> No capital gains tax on main residence</li>
                <li><strong>First Home Owner Grant:</strong> Government assistance for eligible buyers</li>
                <li><strong>Stamp Duty Concessions:</strong> Reduced rates for first-time buyers</li>
              </ul>

              <h3>Investment Property Considerations</h3>
              <p>
                If considering property as an investment:
              </p>
              <ul>
                <li><strong>Negative Gearing:</strong> Tax deductions for investment losses</li>
                <li><strong>Depreciation Benefits:</strong> Building and fixture depreciation</li>
                <li><strong>Capital Gains Tax:</strong> 50% discount for assets held over 12 months</li>
              </ul>

              <h2>Break-Even Analysis</h2>
              
              <h3>Calculating Break-Even Point</h3>
              <p>
                The break-even point is when the total cost of buying equals the total cost of renting:
              </p>
              <ul>
                <li>Include all upfront costs in the calculation</li>
                <li>Factor in opportunity cost of down payment</li>
                <li>Consider property appreciation and rent increases</li>
                <li>Account for transaction costs when selling</li>
              </ul>

              <h3>Sensitivity Analysis</h3>
              <p>
                Test different scenarios to understand how changes affect the outcome:
              </p>
              <ul>
                <li>Varying property appreciation rates</li>
                <li>Different interest rate environments</li>
                <li>Alternative investment return assumptions</li>
                <li>Various time horizons</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              
              <h3>Financial Mistakes</h3>
              <ul>
                <li><strong>Ignoring Opportunity Cost:</strong> Not considering alternative investments</li>
                <li><strong>Underestimating Costs:</strong> Forgetting maintenance, repairs, and fees</li>
                <li><strong>Overestimating Appreciation:</strong> Assuming unrealistic property growth</li>
                <li><strong>Timing the Market:</strong> Trying to predict perfect buying moments</li>
              </ul>

              <h3>Lifestyle Mistakes</h3>
              <ul>
                <li><strong>Buying Too Early:</strong> Before establishing career stability</li>
                <li><strong>Overcommitting Financially:</strong> Becoming house poor</li>
                <li><strong>Ignoring Location:</strong> Prioritizing ownership over location quality</li>
                <li><strong>Emotional Decisions:</strong> Letting emotions override financial logic</li>
              </ul>

              <h2>Making the Decision</h2>
              
              <h3>Decision Framework</h3>
              <p>
                Use this framework to guide your decision:
              </p>
              <ol>
                <li><strong>Assess Financial Readiness:</strong> Emergency fund, stable income, debt levels</li>
                <li><strong>Calculate Total Costs:</strong> Use comprehensive cost analysis</li>
                <li><strong>Consider Time Horizon:</strong> How long will you stay in the area?</li>
                <li><strong>Evaluate Market Conditions:</strong> Current prices, interest rates, trends</li>
                <li><strong>Factor in Personal Preferences:</strong> Lifestyle priorities and goals</li>
              </ol>

              <h3>When Buying Makes Sense</h3>
              <ul>
                <li>Stable income and employment</li>
                <li>Planning to stay in area for 5+ years</li>
                <li>Adequate emergency fund after purchase</li>
                <li>Favorable market conditions</li>
                <li>Strong desire for stability and control</li>
              </ul>

              <h3>When Renting Makes Sense</h3>
              <ul>
                <li>Career or life uncertainty</li>
                <li>High property prices relative to rents</li>
                <li>Preference for flexibility and mobility</li>
                <li>Better investment opportunities elsewhere</li>
                <li>Insufficient funds for comfortable ownership</li>
              </ul>

              <h2>Future Considerations</h2>
              
              <h3>Changing Circumstances</h3>
              <p>
                Remember that your situation will evolve:
              </p>
              <ul>
                <li>Income growth may change affordability</li>
                <li>Family changes may require different housing</li>
                <li>Market conditions will shift over time</li>
                <li>Personal priorities may evolve</li>
              </ul>

              <h3>Exit Strategies</h3>
              <p>
                Consider how you&apos;ll handle future changes:
              </p>
              <ul>
                <li><strong>Selling:</strong> Transaction costs and market timing</li>
                <li><strong>Renting Out:</strong> Becoming a landlord</li>
                <li><strong>Refinancing:</strong> Accessing equity for other investments</li>
                <li><strong>Lease Breaking:</strong> Costs and implications for renters</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The rent vs buy decision is highly personal and depends on your unique financial situation, lifestyle preferences, and long-term goals. While homeownership has traditionally been viewed as the path to wealth building, renting can be the better choice in many circumstances.
              </p>
              <p>
                Use this calculator and guide as starting points, but also consider consulting with financial advisors, mortgage brokers, and real estate professionals who can provide personalized advice based on your specific situation and local market conditions.
              </p>
              <p>
                Remember that there&apos;s no universally &quot;right&quot; choice – only the choice that&apos;s right for you at this point in your life. Whether you rent or buy, the most important thing is making an informed decision that aligns with your financial capabilities and personal goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}