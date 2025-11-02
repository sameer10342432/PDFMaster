'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, AlertTriangle, DollarSign, Home, CreditCard, FileText, TrendingUp, Shield, Calculator } from 'lucide-react'

interface BorrowerProfile {
  personal: {
    creditScore: number
    age: number
    maritalStatus: string
    dependents: number
    firstTimeHomeBuyer: boolean
    veteranStatus: boolean
  }
  income: {
    primaryIncome: number
    secondaryIncome: number
    bonusIncome: number
    investmentIncome: number
    rentalIncome: number
    otherIncome: number
    employmentType: string
    employmentLength: string
    selfEmployedYears: number
  }
  debts: {
    creditCardPayments: number
    autoLoans: number
    studentLoans: number
    personalLoans: number
    childSupport: number
    otherDebts: number
  }
  assets: {
    checkingSavings: number
    investments: number
    retirement401k: number
    realEstate: number
    otherAssets: number
    giftFunds: number
  }
  property: {
    purchasePrice: number
    downPayment: number
    propertyType: string
    occupancy: string
    location: string
    condoHOA: number
  }
}

interface LoanProgram {
  name: string
  type: string
  minCreditScore: number
  maxDTI: number
  minDownPayment: number
  maxLoanAmount: number
  mortgageInsurance: boolean
  fundingFee: number
  eligibilityRequirements: string[]
  benefits: string[]
}

interface EligibilityResult {
  overallEligibility: 'excellent' | 'good' | 'fair' | 'poor'
  eligiblePrograms: LoanProgram[]
  recommendedProgram: LoanProgram | null
  qualificationScore: number
  dtiRatio: number
  loanToValue: number
  monthlyPayment: number
  totalMonthlyObligations: number
  cashToClose: number
  strengths: string[]
  concerns: string[]
  recommendations: string[]
  nextSteps: string[]
}

export default function LoanEligibilityChecker() {
  const [borrower, setBorrower] = useState<BorrowerProfile>({
    personal: {
      creditScore: 720,
      age: 35,
      maritalStatus: 'single',
      dependents: 0,
      firstTimeHomeBuyer: false,
      veteranStatus: false
    },
    income: {
      primaryIncome: 75000,
      secondaryIncome: 0,
      bonusIncome: 0,
      investmentIncome: 0,
      rentalIncome: 0,
      otherIncome: 0,
      employmentType: 'full-time',
      employmentLength: '2+ years',
      selfEmployedYears: 0
    },
    debts: {
      creditCardPayments: 300,
      autoLoans: 450,
      studentLoans: 250,
      personalLoans: 0,
      childSupport: 0,
      otherDebts: 0
    },
    assets: {
      checkingSavings: 50000,
      investments: 25000,
      retirement401k: 75000,
      realEstate: 0,
      otherAssets: 0,
      giftFunds: 0
    },
    property: {
      purchasePrice: 350000,
      downPayment: 70000,
      propertyType: 'single-family',
      occupancy: 'primary',
      location: 'suburban',
      condoHOA: 0
    }
  })

  const [results, setResults] = useState<EligibilityResult | null>(null)

  const loanPrograms: LoanProgram[] = [
    {
      name: 'Conventional 30-Year Fixed',
      type: 'conventional',
      minCreditScore: 620,
      maxDTI: 45,
      minDownPayment: 3,
      maxLoanAmount: 766550,
      mortgageInsurance: true,
      fundingFee: 0,
      eligibilityRequirements: [
        'Credit score 620+',
        'DTI ratio ≤ 45%',
        'Stable employment history',
        'Adequate reserves'
      ],
      benefits: [
        'Competitive interest rates',
        'No upfront mortgage insurance with 20% down',
        'Flexible property types',
        'No income limits'
      ]
    },
    {
      name: 'FHA 30-Year Fixed',
      type: 'fha',
      minCreditScore: 580,
      maxDTI: 57,
      minDownPayment: 3.5,
      maxLoanAmount: 472030,
      mortgageInsurance: true,
      fundingFee: 1.75,
      eligibilityRequirements: [
        'Credit score 580+ (3.5% down) or 500+ (10% down)',
        'DTI ratio ≤ 57%',
        'Primary residence only',
        'FHA-approved property'
      ],
      benefits: [
        'Lower credit score requirements',
        'Low down payment (3.5%)',
        'Gift funds allowed',
        'Assumable loans'
      ]
    },
    {
      name: 'VA 30-Year Fixed',
      type: 'va',
      minCreditScore: 580,
      maxDTI: 41,
      minDownPayment: 0,
      maxLoanAmount: 766550,
      mortgageInsurance: false,
      fundingFee: 2.3,
      eligibilityRequirements: [
        'Military service eligibility',
        'Certificate of Eligibility',
        'Primary residence only',
        'VA-approved property'
      ],
      benefits: [
        'No down payment required',
        'No mortgage insurance',
        'Competitive rates',
        'No prepayment penalties'
      ]
    },
    {
      name: 'USDA Rural Development',
      type: 'usda',
      minCreditScore: 640,
      maxDTI: 41,
      minDownPayment: 0,
      maxLoanAmount: 0,
      mortgageInsurance: true,
      fundingFee: 1,
      eligibilityRequirements: [
        'Rural/suburban eligible area',
        'Income limits apply',
        'Primary residence only',
        'U.S. citizenship or permanent residency'
      ],
      benefits: [
        'No down payment required',
        'Below-market interest rates',
        'Low mortgage insurance',
        'Flexible credit guidelines'
      ]
    },
    {
      name: 'Jumbo 30-Year Fixed',
      type: 'jumbo',
      minCreditScore: 700,
      maxDTI: 43,
      minDownPayment: 10,
      maxLoanAmount: 999999999,
      mortgageInsurance: false,
      fundingFee: 0,
      eligibilityRequirements: [
        'Excellent credit (700+)',
        'Low DTI ratio (≤ 43%)',
        'Significant assets/reserves',
        'Strong employment history'
      ],
      benefits: [
        'Higher loan amounts',
        'No mortgage insurance',
        'Competitive rates for qualified borrowers',
        'Flexible terms'
      ]
    }
  ]

  const calculateEligibility = () => {
    // Calculate total monthly income
    const totalMonthlyIncome = (
      borrower.income.primaryIncome +
      borrower.income.secondaryIncome +
      borrower.income.bonusIncome * 0.25 + // 25% of bonus income
      borrower.income.investmentIncome +
      borrower.income.rentalIncome * 0.75 + // 75% of rental income
      borrower.income.otherIncome
    ) / 12

    // Calculate total monthly debts
    const totalMonthlyDebts = 
      borrower.debts.creditCardPayments +
      borrower.debts.autoLoans +
      borrower.debts.studentLoans +
      borrower.debts.personalLoans +
      borrower.debts.childSupport +
      borrower.debts.otherDebts

    // Calculate loan amount and LTV
    const loanAmount = borrower.property.purchasePrice - borrower.property.downPayment
    const loanToValue = (loanAmount / borrower.property.purchasePrice) * 100

    // Estimate monthly payment (using 6.5% rate as baseline)
    const monthlyRate = 0.065 / 12
    const numPayments = 30 * 12
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    // Add property taxes, insurance, HOA
    const propertyTaxes = (borrower.property.purchasePrice * 0.012) / 12 // 1.2% annually
    const homeInsurance = (borrower.property.purchasePrice * 0.003) / 12 // 0.3% annually
    const totalHousingPayment = monthlyPayment + propertyTaxes + homeInsurance + borrower.property.condoHOA

    // Calculate DTI ratios
    const backEndDTI = ((totalHousingPayment + totalMonthlyDebts) / totalMonthlyIncome) * 100

    // Determine eligible programs
    const eligiblePrograms = loanPrograms.filter(program => {
      // Check basic eligibility
      if (borrower.personal.creditScore < program.minCreditScore) return false
      if (backEndDTI > program.maxDTI) return false
      if ((borrower.property.downPayment / borrower.property.purchasePrice) * 100 < program.minDownPayment) return false
      
      // Check program-specific requirements
      if (program.type === 'va' && !borrower.personal.veteranStatus) return false
      if (program.type === 'jumbo' && loanAmount <= 766550) return false
      if (program.type !== 'jumbo' && loanAmount > program.maxLoanAmount && program.maxLoanAmount > 0) return false
      if (program.type === 'fha' && loanAmount > program.maxLoanAmount) return false
      
      return true
    })

    // Calculate qualification score
    let qualificationScore = 0
    
    // Credit score (30%)
    if (borrower.personal.creditScore >= 760) qualificationScore += 30
    else if (borrower.personal.creditScore >= 700) qualificationScore += 25
    else if (borrower.personal.creditScore >= 650) qualificationScore += 20
    else if (borrower.personal.creditScore >= 600) qualificationScore += 15
    else qualificationScore += 10

    // DTI ratio (25%)
    if (backEndDTI <= 28) qualificationScore += 25
    else if (backEndDTI <= 36) qualificationScore += 20
    else if (backEndDTI <= 43) qualificationScore += 15
    else if (backEndDTI <= 50) qualificationScore += 10
    else qualificationScore += 5

    // Down payment (20%)
    const downPaymentPercent = (borrower.property.downPayment / borrower.property.purchasePrice) * 100
    if (downPaymentPercent >= 20) qualificationScore += 20
    else if (downPaymentPercent >= 10) qualificationScore += 15
    else if (downPaymentPercent >= 5) qualificationScore += 10
    else qualificationScore += 5

    // Employment stability (15%)
    if (borrower.income.employmentLength === '2+ years') qualificationScore += 15
    else if (borrower.income.employmentLength === '1-2 years') qualificationScore += 12
    else if (borrower.income.employmentLength === '6-12 months') qualificationScore += 8
    else qualificationScore += 5

    // Assets/reserves (10%)
    const totalAssets = borrower.assets.checkingSavings + borrower.assets.investments + borrower.assets.giftFunds
    const monthsReserves = totalAssets / totalHousingPayment
    if (monthsReserves >= 6) qualificationScore += 10
    else if (monthsReserves >= 3) qualificationScore += 8
    else if (monthsReserves >= 2) qualificationScore += 6
    else qualificationScore += 3

    // Determine overall eligibility
    let overallEligibility: 'excellent' | 'good' | 'fair' | 'poor'
    if (qualificationScore >= 85) overallEligibility = 'excellent'
    else if (qualificationScore >= 70) overallEligibility = 'good'
    else if (qualificationScore >= 55) overallEligibility = 'fair'
    else overallEligibility = 'poor'

    // Find recommended program
    const recommendedProgram = eligiblePrograms.length > 0 ? 
      eligiblePrograms.reduce((best, current) => {
        // Prefer VA if eligible
        if (current.type === 'va' && borrower.personal.veteranStatus) return current
        // Prefer conventional if 20% down
        if (current.type === 'conventional' && downPaymentPercent >= 20) return current
        // Prefer FHA for lower credit scores
        if (current.type === 'fha' && borrower.personal.creditScore < 650) return current
        return best
      }) : null

    // Generate strengths
    const strengths: string[] = []
    if (borrower.personal.creditScore >= 740) strengths.push('Excellent credit score')
    if (backEndDTI <= 36) strengths.push('Strong debt-to-income ratio')
    if (downPaymentPercent >= 20) strengths.push('Substantial down payment')
    if (borrower.income.employmentLength === '2+ years') strengths.push('Stable employment history')
    if (monthsReserves >= 3) strengths.push('Adequate cash reserves')
    if (borrower.personal.veteranStatus) strengths.push('VA loan eligibility')

    // Generate concerns
    const concerns: string[] = []
    if (borrower.personal.creditScore < 620) concerns.push('Credit score below conventional loan requirements')
    if (backEndDTI > 43) concerns.push('High debt-to-income ratio')
    if (downPaymentPercent < 5) concerns.push('Very low down payment')
    if (borrower.income.employmentLength === '0-6 months') concerns.push('Limited employment history')
    if (monthsReserves < 2) concerns.push('Insufficient cash reserves')
    if (eligiblePrograms.length === 0) concerns.push('No loan programs currently available')

    // Generate recommendations
    const recommendations: string[] = []
    if (borrower.personal.creditScore < 650) recommendations.push('Work on improving credit score before applying')
    if (backEndDTI > 43) recommendations.push('Pay down existing debts to improve DTI ratio')
    if (downPaymentPercent < 10) recommendations.push('Consider saving for a larger down payment')
    if (monthsReserves < 3) recommendations.push('Build emergency fund and closing cost reserves')
    if (borrower.income.employmentLength === '0-6 months') recommendations.push('Wait for more employment history')

    // Generate next steps
    const nextSteps: string[] = []
    if (eligiblePrograms.length > 0) {
      nextSteps.push('Get pre-approved with a qualified lender')
      nextSteps.push('Shop around with multiple lenders for best rates')
      nextSteps.push('Gather required documentation (pay stubs, tax returns, bank statements)')
      nextSteps.push('Consider working with a real estate agent')
    } else {
      nextSteps.push('Address qualification concerns before applying')
      nextSteps.push('Consider working with a housing counselor')
      nextSteps.push('Explore down payment assistance programs')
    }

    // Calculate cash to close
    const closingCosts = borrower.property.purchasePrice * 0.03 // Estimate 3%
    const cashToClose = borrower.property.downPayment + closingCosts

    const result: EligibilityResult = {
      overallEligibility,
      eligiblePrograms,
      recommendedProgram,
      qualificationScore,
      dtiRatio: backEndDTI,
      loanToValue,
      monthlyPayment: totalHousingPayment,
      totalMonthlyObligations: totalHousingPayment + totalMonthlyDebts,
      cashToClose,
      strengths,
      concerns,
      recommendations,
      nextSteps
    }

    setResults(result)
  }

  const getEligibilityBadge = (eligibility: string) => {
    switch (eligibility) {
      case 'excellent': return <Badge className="bg-green-100 text-green-800">Excellent</Badge>
      case 'good': return <Badge className="bg-blue-100 text-blue-800">Good</Badge>
      case 'fair': return <Badge className="bg-yellow-100 text-yellow-800">Fair</Badge>
      case 'poor': return <Badge className="bg-red-100 text-red-800">Poor</Badge>
      default: return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <CreditCard className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Loan Eligibility Checker</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check your eligibility for various loan programs including conventional, FHA, VA, USDA, and jumbo loans with comprehensive qualification analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Borrower Profile
                </CardTitle>
                <CardDescription>
                  Enter your financial information for loan qualification analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="income">Income</TabsTrigger>
                    <TabsTrigger value="debts">Debts</TabsTrigger>
                    <TabsTrigger value="property">Property</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="space-y-4">
                    <div>
                      <Label htmlFor="creditScore">Credit Score</Label>
                      <Input
                        id="creditScore"
                        type="number"
                        value={borrower.personal.creditScore}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, creditScore: Number(e.target.value) }
                        }))}
                        placeholder="720"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={borrower.personal.age}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, age: Number(e.target.value) }
                        }))}
                        placeholder="35"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="maritalStatus">Marital Status</Label>
                      <Select 
                        value={borrower.personal.maritalStatus} 
                        onValueChange={(value) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, maritalStatus: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="dependents">Number of Dependents</Label>
                      <Input
                        id="dependents"
                        type="number"
                        value={borrower.personal.dependents}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, dependents: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="firstTimeHomeBuyer"
                        checked={borrower.personal.firstTimeHomeBuyer}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, firstTimeHomeBuyer: e.target.checked }
                        }))}
                        className="rounded"
                      />
                      <Label htmlFor="firstTimeHomeBuyer">First-time Home Buyer</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="veteranStatus"
                        checked={borrower.personal.veteranStatus}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          personal: { ...prev.personal, veteranStatus: e.target.checked }
                        }))}
                        className="rounded"
                      />
                      <Label htmlFor="veteranStatus">Military Veteran</Label>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="income" className="space-y-4">
                    <div>
                      <Label htmlFor="primaryIncome">Primary Annual Income</Label>
                      <Input
                        id="primaryIncome"
                        type="number"
                        value={borrower.income.primaryIncome}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, primaryIncome: Number(e.target.value) }
                        }))}
                        placeholder="75000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="secondaryIncome">Secondary Income (Spouse/Partner)</Label>
                      <Input
                        id="secondaryIncome"
                        type="number"
                        value={borrower.income.secondaryIncome}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, secondaryIncome: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="bonusIncome">Annual Bonus Income</Label>
                      <Input
                        id="bonusIncome"
                        type="number"
                        value={borrower.income.bonusIncome}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, bonusIncome: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="investmentIncome">Investment Income</Label>
                      <Input
                        id="investmentIncome"
                        type="number"
                        value={borrower.income.investmentIncome}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, investmentIncome: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="employmentType">Employment Type</Label>
                      <Select 
                        value={borrower.income.employmentType} 
                        onValueChange={(value) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, employmentType: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time Employee</SelectItem>
                          <SelectItem value="part-time">Part-time Employee</SelectItem>
                          <SelectItem value="self-employed">Self-employed</SelectItem>
                          <SelectItem value="contract">Contract Worker</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="employmentLength">Employment Length</Label>
                      <Select 
                        value={borrower.income.employmentLength} 
                        onValueChange={(value) => setBorrower(prev => ({
                          ...prev,
                          income: { ...prev.income, employmentLength: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-6 months">0-6 months</SelectItem>
                          <SelectItem value="6-12 months">6-12 months</SelectItem>
                          <SelectItem value="1-2 years">1-2 years</SelectItem>
                          <SelectItem value="2+ years">2+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="debts" className="space-y-4">
                    <div>
                      <Label htmlFor="creditCardPayments">Monthly Credit Card Payments</Label>
                      <Input
                        id="creditCardPayments"
                        type="number"
                        value={borrower.debts.creditCardPayments}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, creditCardPayments: Number(e.target.value) }
                        }))}
                        placeholder="300"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="autoLoans">Auto Loan Payments</Label>
                      <Input
                        id="autoLoans"
                        type="number"
                        value={borrower.debts.autoLoans}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, autoLoans: Number(e.target.value) }
                        }))}
                        placeholder="450"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="studentLoans">Student Loan Payments</Label>
                      <Input
                        id="studentLoans"
                        type="number"
                        value={borrower.debts.studentLoans}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, studentLoans: Number(e.target.value) }
                        }))}
                        placeholder="250"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="personalLoans">Personal Loan Payments</Label>
                      <Input
                        id="personalLoans"
                        type="number"
                        value={borrower.debts.personalLoans}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, personalLoans: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="childSupport">Child Support/Alimony</Label>
                      <Input
                        id="childSupport"
                        type="number"
                        value={borrower.debts.childSupport}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, childSupport: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="otherDebts">Other Monthly Debts</Label>
                      <Input
                        id="otherDebts"
                        type="number"
                        value={borrower.debts.otherDebts}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          debts: { ...prev.debts, otherDebts: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="property" className="space-y-4">
                    <div>
                      <Label htmlFor="purchasePrice">Purchase Price</Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        value={borrower.property.purchasePrice}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          property: { ...prev.property, purchasePrice: Number(e.target.value) }
                        }))}
                        placeholder="350000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="downPayment">Down Payment</Label>
                      <Input
                        id="downPayment"
                        type="number"
                        value={borrower.property.downPayment}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          property: { ...prev.property, downPayment: Number(e.target.value) }
                        }))}
                        placeholder="70000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select 
                        value={borrower.property.propertyType} 
                        onValueChange={(value) => setBorrower(prev => ({
                          ...prev,
                          property: { ...prev.property, propertyType: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="multi-family">Multi-family (2-4 units)</SelectItem>
                          <SelectItem value="manufactured">Manufactured Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="occupancy">Occupancy</Label>
                      <Select 
                        value={borrower.property.occupancy} 
                        onValueChange={(value) => setBorrower(prev => ({
                          ...prev,
                          property: { ...prev.property, occupancy: value }
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary Residence</SelectItem>
                          <SelectItem value="secondary">Second Home</SelectItem>
                          <SelectItem value="investment">Investment Property</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="condoHOA">Monthly HOA/Condo Fees</Label>
                      <Input
                        id="condoHOA"
                        type="number"
                        value={borrower.property.condoHOA}
                        onChange={(e) => setBorrower(prev => ({
                          ...prev,
                          property: { ...prev.property, condoHOA: Number(e.target.value) }
                        }))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p><strong>Assets Available:</strong></p>
                      <div className="mt-2 space-y-1">
                        <div>Checking/Savings: {formatCurrency(borrower.assets.checkingSavings)}</div>
                        <div>Investments: {formatCurrency(borrower.assets.investments)}</div>
                        <div>401k/Retirement: {formatCurrency(borrower.assets.retirement401k)}</div>
                        <div>Gift Funds: {formatCurrency(borrower.assets.giftFunds)}</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button onClick={calculateEligibility} className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Check Loan Eligibility
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {results && (
              <div className="space-y-6">
                {/* Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Loan Eligibility Results
                      </span>
                      {getEligibilityBadge(results.overallEligibility)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{results.qualificationScore}</div>
                        <div className="text-sm text-blue-700">Qualification Score</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{results.eligiblePrograms.length}</div>
                        <div className="text-sm text-green-700">Eligible Programs</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{formatPercent(results.dtiRatio)}</div>
                        <div className="text-sm text-purple-700">Debt-to-Income</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{formatPercent(results.loanToValue)}</div>
                        <div className="text-sm text-orange-700">Loan-to-Value</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Qualification Score</span>
                        <span className="text-sm text-gray-600">{results.qualificationScore}/100</span>
                      </div>
                      <Progress value={results.qualificationScore} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                        {results.strengths.length > 0 ? (
                          <ul className="space-y-1">
                            {results.strengths.map((strength, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">No notable strengths identified</p>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Concerns</h4>
                        {results.concerns.length > 0 ? (
                          <ul className="space-y-1">
                            {results.concerns.map((concern, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <XCircle className="h-4 w-4 text-red-600 mr-2" />
                                {concern}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">No concerns identified</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Eligible Programs */}
                {results.eligiblePrograms.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Home className="h-5 w-5 mr-2" />
                        Eligible Loan Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.eligiblePrograms.map((program, index) => (
                          <div key={index} className={`p-4 rounded-lg border-2 ${
                            results.recommendedProgram?.name === program.name 
                              ? 'border-green-200 bg-green-50' 
                              : 'border-gray-200 bg-gray-50'
                          }`}>
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-lg">{program.name}</h5>
                              {results.recommendedProgram?.name === program.name && (
                                <Badge className="bg-green-100 text-green-800">Recommended</Badge>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-sm text-gray-600 mb-1"><strong>Requirements:</strong></p>
                                <ul className="text-xs space-y-0.5">
                                  {program.eligibilityRequirements.map((req, reqIndex) => (
                                    <li key={reqIndex} className="flex items-center">
                                      <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-600 mb-1"><strong>Benefits:</strong></p>
                                <ul className="text-xs space-y-0.5">
                                  {program.benefits.map((benefit, benefitIndex) => (
                                    <li key={benefitIndex} className="flex items-center">
                                      <CheckCircle className="h-3 w-3 text-blue-600 mr-1" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                              <div className="text-center p-2 bg-white rounded">
                                <div className="font-semibold">Min Credit</div>
                                <div>{program.minCreditScore}</div>
                              </div>
                              <div className="text-center p-2 bg-white rounded">
                                <div className="font-semibold">Max DTI</div>
                                <div>{program.maxDTI}%</div>
                              </div>
                              <div className="text-center p-2 bg-white rounded">
                                <div className="font-semibold">Min Down</div>
                                <div>{program.minDownPayment}%</div>
                              </div>
                              <div className="text-center p-2 bg-white rounded">
                                <div className="font-semibold">MI Required</div>
                                <div>{program.mortgageInsurance ? 'Yes' : 'No'}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Financial Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Financial Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-blue-700">Estimated Monthly Payment</div>
                        <div className="text-xl font-semibold text-blue-600">
                          {formatCurrency(results.monthlyPayment)}
                        </div>
                        <div className="text-xs text-blue-600">Principal, Interest, Taxes, Insurance</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-700">Total Monthly Obligations</div>
                        <div className="text-xl font-semibold text-green-600">
                          {formatCurrency(results.totalMonthlyObligations)}
                        </div>
                        <div className="text-xs text-green-600">Housing + All Debts</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="text-sm text-purple-700">Cash to Close</div>
                        <div className="text-xl font-semibold text-purple-600">
                          {formatCurrency(results.cashToClose)}
                        </div>
                        <div className="text-xs text-purple-600">Down Payment + Closing Costs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations & Next Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.recommendations.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Recommendations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {results.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5" />
                              {recommendation}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Next Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {results.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Loan Programs & Qualification Guide</CardTitle>
              <CardDescription>
                Complete guide to mortgage loan types, qualification requirements, and application strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Understanding Loan Programs</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Conventional Loans</h4>
                  <p className="text-gray-600 mb-4">
                    Not insured by the government, conventional loans offer competitive rates and flexible terms. They're ideal for borrowers with good credit and stable income.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Credit score: 620+ (best rates at 740+)</li>
                    <li>Down payment: 3-20% (no PMI at 20%)</li>
                    <li>DTI ratio: Up to 45%</li>
                    <li>Loan limits: Up to $766,550 (2024)</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">FHA Loans</h4>
                  <p className="text-gray-600 mb-4">
                    Federal Housing Administration loans are designed for first-time buyers and those with less-than-perfect credit.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Credit score: 580+ (3.5% down) or 500+ (10% down)</li>
                    <li>Down payment: As low as 3.5%</li>
                    <li>DTI ratio: Up to 57%</li>
                    <li>Mortgage insurance required</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">VA Loans</h4>
                  <p className="text-gray-600 mb-4">
                    Available to eligible veterans, active-duty service members, and surviving spouses.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>No down payment required</li>
                    <li>No mortgage insurance</li>
                    <li>Competitive interest rates</li>
                    <li>Certificate of Eligibility required</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">USDA Loans</h4>
                  <p className="text-gray-600 mb-4">
                    Rural development loans for eligible rural and suburban areas.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>No down payment required</li>
                    <li>Income limits apply</li>
                    <li>Property must be in eligible area</li>
                    <li>Below-market interest rates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Qualification Factors</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Credit Score Impact</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span className="text-sm">760+</span>
                      <span className="text-sm font-semibold text-green-600">Best Rates</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span className="text-sm">700-759</span>
                      <span className="text-sm font-semibold text-blue-600">Good Rates</span>
                    </div>
                    <div className="flex justify-between p-2 bg-yellow-50 rounded">
                      <span className="text-sm">650-699</span>
                      <span className="text-sm font-semibold text-yellow-600">Fair Rates</span>
                    </div>
                    <div className="flex justify-between p-2 bg-red-50 rounded">
                      <span className="text-sm">Below 650</span>
                      <span className="text-sm font-semibold text-red-600">Limited Options</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">Debt-to-Income Ratios</h4>
                  <p className="text-gray-600 mb-2">
                    Lenders evaluate two DTI ratios:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li><strong>Front-end DTI:</strong> Housing payment ÷ gross income</li>
                    <li><strong>Back-end DTI:</strong> All debts ÷ gross income</li>
                    <li>Most programs allow up to 28% front-end, 36-45% back-end</li>
                    <li>FHA allows higher ratios with compensating factors</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">Employment & Income</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>2+ years employment history preferred</li>
                    <li>Stable or increasing income trend</li>
                    <li>Self-employed: 2 years tax returns required</li>
                    <li>Bonus/commission income: 2-year average</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2">Assets & Reserves</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                    <li>Down payment funds (seasoned 60+ days)</li>
                    <li>Closing costs (2-5% of purchase price)</li>
                    <li>Reserves: 2-6 months PITI payments</li>
                    <li>Gift funds allowed (with proper documentation)</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-6">Application Process</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Pre-qualification vs. Pre-approval</h4>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-semibold text-blue-800">Pre-qualification</h5>
                      <p className="text-sm text-blue-600">Estimate based on self-reported information</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800">Pre-approval</h5>
                      <p className="text-sm text-green-600">Verified income, assets, and credit check</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Documentation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Income Documentation</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Pay stubs (most recent 30 days)</li>
                      <li>W-2 forms (2 years)</li>
                      <li>Tax returns (2 years)</li>
                      <li>Employment verification letter</li>
                      <li>1099s (if applicable)</li>
                      <li>Profit & loss statement (self-employed)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Asset Documentation</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Bank statements (2-3 months)</li>
                      <li>Investment account statements</li>
                      <li>401k/retirement account statements</li>
                      <li>Gift letter (if applicable)</li>
                      <li>Asset verification letters</li>
                      <li>Earnest money deposit receipt</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Other Documents</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Driver's license</li>
                      <li>Social Security card</li>
                      <li>Divorce decree (if applicable)</li>
                      <li>Bankruptcy discharge (if applicable)</li>
                      <li>Purchase agreement</li>
                      <li>Homeowner's insurance quote</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-800">Tips for Loan Approval</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Before Applying</h5>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Check and improve your credit score</li>
                      <li>Save for down payment and closing costs</li>
                      <li>Pay down existing debts</li>
                      <li>Avoid major purchases or credit inquiries</li>
                      <li>Gather all required documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">During Process</h5>
                    <ul className="list-disc pl-6 space-y-1 text-green-600 text-sm">
                      <li>Respond quickly to lender requests</li>
                      <li>Don't change jobs or income</li>
                      <li>Keep assets in same accounts</li>
                      <li>Avoid new debt or credit applications</li>
                      <li>Stay in communication with your lender</li>
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