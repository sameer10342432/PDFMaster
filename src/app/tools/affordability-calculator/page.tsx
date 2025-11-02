'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/footer/Footer';
import { metadata } from './metadata';

interface AffordabilityInputs {
  annualIncome: string;
  monthlyDebts: string;
  downPayment: string;
  interestRate: string;
  loanTerm: string;
  propertyTax: string;
  homeInsurance: string;
  pmiRate: string;
  hoaFees: string;
  utilities: string;
  maintenance: string;
  creditScore: string;
}

interface AffordabilityResults {
  maxHomePrice: number;
  maxMonthlyPayment: number;
  monthlyPrincipalInterest: number;
  monthlyPropertyTax: number;
  monthlyInsurance: number;
  monthlyPMI: number;
  monthlyHOA: number;
  totalMonthlyHousing: number;
  debtToIncomeRatio: number;
  housingToIncomeRatio: number;
  cashNeededAtClosing: number;
  recommendedEmergencyFund: number;
}

export default function AffordabilityCalculatorPage() {
  const [inputs, setInputs] = useState<AffordabilityInputs>({
    annualIncome: '',
    monthlyDebts: '',
    downPayment: '20',
    interestRate: '7.0',
    loanTerm: '30',
    propertyTax: '1.2',
    homeInsurance: '0.5',
    pmiRate: '0.5',
    hoaFees: '',
    utilities: '200',
    maintenance: '1.0',
    creditScore: '740'
  });

  const [results, setResults] = useState<AffordabilityResults | null>(null);

  const handleInputChange = (field: keyof AffordabilityInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateAffordability = () => {
    const annualIncome = parseFloat(inputs.annualIncome) || 0;
    const monthlyIncome = annualIncome / 12;
    const monthlyDebts = parseFloat(inputs.monthlyDebts) || 0;
    const downPaymentPercent = parseFloat(inputs.downPayment) || 20;
    const interestRate = parseFloat(inputs.interestRate) || 7.0;
    const loanTermYears = parseFloat(inputs.loanTerm) || 30;
    const propertyTaxRate = parseFloat(inputs.propertyTax) || 1.2;
    const insuranceRate = parseFloat(inputs.homeInsurance) || 0.5;
    const pmiRate = parseFloat(inputs.pmiRate) || 0.5;
    const hoaFees = parseFloat(inputs.hoaFees) || 0;
    const utilities = parseFloat(inputs.utilities) || 200;
    const maintenanceRate = parseFloat(inputs.maintenance) || 1.0;
    const creditScore = parseFloat(inputs.creditScore) || 740;

    if (annualIncome === 0) {
      setResults(null);
      return;
    }

    // Adjust DTI ratio based on credit score
    let maxDTIRatio = 0.43; // Standard FHA maximum
    if (creditScore >= 740) maxDTIRatio = 0.45;
    else if (creditScore >= 680) maxDTIRatio = 0.43;
    else if (creditScore >= 620) maxDTIRatio = 0.41;
    else maxDTIRatio = 0.38;

    // Calculate maximum monthly payment based on DTI
    const maxTotalMonthlyPayments = monthlyIncome * maxDTIRatio;
    const availableForHousing = maxTotalMonthlyPayments - monthlyDebts;

    // Use 28% rule as additional constraint (housing shouldn't exceed 28% of gross income)
    const maxHousingByIncomeRule = monthlyIncome * 0.28;
    const maxMonthlyPayment = Math.min(availableForHousing, maxHousingByIncomeRule);

    if (maxMonthlyPayment <= 0) {
      setResults({
        maxHomePrice: 0,
        maxMonthlyPayment: 0,
        monthlyPrincipalInterest: 0,
        monthlyPropertyTax: 0,
        monthlyInsurance: 0,
        monthlyPMI: 0,
        monthlyHOA: hoaFees,
        totalMonthlyHousing: 0,
        debtToIncomeRatio: (monthlyDebts / monthlyIncome) * 100,
        housingToIncomeRatio: 0,
        cashNeededAtClosing: 0,
        recommendedEmergencyFund: 0
      });
      return;
    }

    // Calculate maximum home price through iteration
    let homePrice = 100000;
    let increment = 50000;
    let bestPrice = 0;

    for (let i = 0; i < 100; i++) {
      const loanAmount = homePrice * (1 - downPaymentPercent / 100);
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = loanTermYears * 12;
      
      // Calculate monthly principal and interest
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                       (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      // Calculate other monthly costs
      const monthlyTax = (homePrice * propertyTaxRate / 100) / 12;
      const monthlyInsurance = (homePrice * insuranceRate / 100) / 12;
      const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * pmiRate / 100) / 12 : 0;
      const monthlyMaintenance = (homePrice * maintenanceRate / 100) / 12;
      
      const totalHousingCost = monthlyPI + monthlyTax + monthlyInsurance + 
                              monthlyPMI + hoaFees + utilities + monthlyMaintenance;

      if (totalHousingCost <= maxMonthlyPayment) {
        bestPrice = homePrice;
        homePrice += increment;
      } else {
        if (increment > 1000) {
          homePrice -= increment;
          increment = Math.max(1000, increment / 2);
          homePrice += increment;
        } else {
          break;
        }
      }
    }

    // Calculate final results based on best price
    const finalLoanAmount = bestPrice * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;
    
    const finalMonthlyPI = finalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const finalMonthlyTax = (bestPrice * propertyTaxRate / 100) / 12;
    const finalMonthlyInsurance = (bestPrice * insuranceRate / 100) / 12;
    const finalMonthlyPMI = downPaymentPercent < 20 ? (finalLoanAmount * pmiRate / 100) / 12 : 0;
    const finalMonthlyMaintenance = (bestPrice * maintenanceRate / 100) / 12;
    
    const totalMonthlyHousing = finalMonthlyPI + finalMonthlyTax + finalMonthlyInsurance + 
                               finalMonthlyPMI + hoaFees + utilities + finalMonthlyMaintenance;

    const downPaymentAmount = bestPrice * (downPaymentPercent / 100);
    const closingCosts = bestPrice * 0.03; // Estimate 3% closing costs
    const cashNeeded = downPaymentAmount + closingCosts;
    
    const emergencyFund = totalMonthlyHousing * 6; // 6 months of housing expenses

    setResults({
      maxHomePrice: bestPrice,
      maxMonthlyPayment: maxMonthlyPayment,
      monthlyPrincipalInterest: finalMonthlyPI,
      monthlyPropertyTax: finalMonthlyTax,
      monthlyInsurance: finalMonthlyInsurance,
      monthlyPMI: finalMonthlyPMI,
      monthlyHOA: hoaFees,
      totalMonthlyHousing: totalMonthlyHousing,
      debtToIncomeRatio: ((monthlyDebts + totalMonthlyHousing) / monthlyIncome) * 100,
      housingToIncomeRatio: (totalMonthlyHousing / monthlyIncome) * 100,
      cashNeededAtClosing: cashNeeded,
      recommendedEmergencyFund: emergencyFund
    });
  };

  useEffect(() => {
    calculateAffordability();
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Affordability Calculator
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover how much house you can afford based on your income, debts, and financial situation
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Financial Information</h2>
              
              <div className="space-y-6">
                {/* Income Section */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Income & Employment</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Gross Income
                      </label>
                      <input
                        type="number"
                        value={inputs.annualIncome}
                        onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="75000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Credit Score
                      </label>
                      <select
                        value={inputs.creditScore}
                        onChange={(e) => handleInputChange('creditScore', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="800">Excellent (800+)</option>
                        <option value="740">Very Good (740-799)</option>
                        <option value="680">Good (680-739)</option>
                        <option value="620">Fair (620-679)</option>
                        <option value="580">Poor (580-619)</option>
                        <option value="500">Very Poor (&lt;580)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Debts Section */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Monthly Debts</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Monthly Debt Payments
                      <span className="text-sm text-gray-500 block">
                        (Credit cards, car loans, student loans, etc.)
                      </span>
                    </label>
                    <input
                      type="number"
                      value={inputs.monthlyDebts}
                      onChange={(e) => handleInputChange('monthlyDebts', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="500"
                    />
                  </div>
                </div>

                {/* Loan Details Section */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Loan Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Down Payment (%)
                      </label>
                      <input
                        type="number"
                        value={inputs.downPayment}
                        onChange={(e) => handleInputChange('downPayment', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="20"
                        min="0"
                        max="50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.interestRate}
                        onChange={(e) => handleInputChange('interestRate', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="7.0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Term (years)
                      </label>
                      <select
                        value={inputs.loanTerm}
                        onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="15">15 years</option>
                        <option value="20">20 years</option>
                        <option value="25">25 years</option>
                        <option value="30">30 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PMI Rate (%)
                        <span className="text-sm text-gray-500 block">
                          (If down payment &lt; 20%)
                        </span>
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.pmiRate}
                        onChange={(e) => handleInputChange('pmiRate', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Housing Costs Section */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4">Housing Costs</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Tax Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.propertyTax}
                        onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="1.2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Home Insurance Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.homeInsurance}
                        onChange={(e) => handleInputChange('homeInsurance', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="0.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly HOA Fees
                      </label>
                      <input
                        type="number"
                        value={inputs.hoaFees}
                        onChange={(e) => handleInputChange('hoaFees', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Utilities
                      </label>
                      <input
                        type="number"
                        value={inputs.utilities}
                        onChange={(e) => handleInputChange('utilities', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="200"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maintenance Rate (%)
                        <span className="text-sm text-gray-500 block">
                          (Annual maintenance as % of home value)
                        </span>
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.maintenance}
                        onChange={(e) => handleInputChange('maintenance', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="1.0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Affordability Results</h2>
              
              {results ? (
                <div className="space-y-6">
                  {/* Main Result */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">Maximum Home Price</h3>
                    <p className="text-4xl font-bold">{formatCurrency(results.maxHomePrice)}</p>
                  </div>

                  {/* Monthly Payment Breakdown */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Payment Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Principal & Interest:</span>
                        <span className="font-semibold">{formatCurrency(results.monthlyPrincipalInterest)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Tax:</span>
                        <span className="font-semibold">{formatCurrency(results.monthlyPropertyTax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home Insurance:</span>
                        <span className="font-semibold">{formatCurrency(results.monthlyInsurance)}</span>
                      </div>
                      {results.monthlyPMI > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">PMI:</span>
                          <span className="font-semibold">{formatCurrency(results.monthlyPMI)}</span>
                        </div>
                      )}
                      {results.monthlyHOA > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">HOA Fees:</span>
                          <span className="font-semibold">{formatCurrency(results.monthlyHOA)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total Monthly Housing:</span>
                          <span>{formatCurrency(results.totalMonthlyHousing)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Ratios */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Financial Ratios</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Debt-to-Income Ratio:</span>
                        <span className={`font-semibold ${results.debtToIncomeRatio > 43 ? 'text-red-600' : 'text-green-600'}`}>
                          {formatPercent(results.debtToIncomeRatio)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Housing-to-Income Ratio:</span>
                        <span className={`font-semibold ${results.housingToIncomeRatio > 28 ? 'text-red-600' : 'text-green-600'}`}>
                          {formatPercent(results.housingToIncomeRatio)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cash Requirements */}
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-4">Cash Requirements</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cash Needed at Closing:</span>
                        <span className="font-semibold">{formatCurrency(results.cashNeededAtClosing)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Recommended Emergency Fund:</span>
                        <span className="font-semibold">{formatCurrency(results.recommendedEmergencyFund)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h4 className="text-lg font-semibold text-purple-900 mb-2">Recommendations</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      {results.debtToIncomeRatio > 43 && (
                        <li>• Consider reducing monthly debts before buying</li>
                      )}
                      {results.housingToIncomeRatio > 28 && (
                        <li>• Housing costs exceed 28% rule - consider a lower price range</li>
                      )}
                      {parseFloat(inputs.downPayment) < 20 && (
                        <li>• Consider saving for a 20% down payment to avoid PMI</li>
                      )}
                      <li>• Get pre-approved to confirm your actual borrowing capacity</li>
                      <li>• Factor in moving costs and immediate home improvements</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Enter your financial information to see affordability results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Article */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Guide to Home Affordability: How Much House Can You Really Afford?
            </h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Key Takeaways</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Use the 28/36 rule: housing ≤ 28% of income, total debt ≤ 36%</li>
                <li>• Factor in all costs: taxes, insurance, maintenance, utilities</li>
                <li>• Consider your credit score's impact on loan terms</li>
                <li>• Save for down payment, closing costs, and emergency fund</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Home Affordability
            </h3>
            
            <p className="text-gray-700 mb-6">
              Determining how much house you can afford is one of the most important financial 
              decisions you'll make. It's not just about getting approved for a mortgage – it's 
              about finding a comfortable payment that allows you to maintain your lifestyle and 
              build wealth over time.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">The True Cost of Homeownership</h4>
            <p className="text-gray-700 mb-4">
              Many first-time buyers focus solely on the mortgage payment, but homeownership 
              involves numerous additional costs:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Principal and Interest:</strong> Your monthly mortgage payment</li>
              <li>• <strong>Property Taxes:</strong> Typically 1-2% of home value annually</li>
              <li>• <strong>Homeowners Insurance:</strong> Usually 0.3-1% of home value annually</li>
              <li>• <strong>PMI:</strong> Required if down payment is less than 20%</li>
              <li>• <strong>HOA Fees:</strong> Monthly or annual community fees</li>
              <li>• <strong>Utilities:</strong> Electric, gas, water, internet, cable</li>
              <li>• <strong>Maintenance:</strong> Ongoing repairs and upkeep (1-3% annually)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The 28/36 Rule Explained
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Front-End Ratio (28% Rule)</h4>
            <p className="text-gray-700 mb-4">
              Your total monthly housing expenses should not exceed 28% of your gross monthly income. 
              This includes:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <ul className="text-blue-800 space-y-1">
                <li>• Mortgage principal and interest</li>
                <li>• Property taxes</li>
                <li>• Homeowners insurance</li>
                <li>• PMI (if applicable)</li>
                <li>• HOA fees</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Back-End Ratio (36% Rule)</h4>
            <p className="text-gray-700 mb-6">
              Your total monthly debt payments (including housing) should not exceed 36% of your 
              gross monthly income. This includes all recurring debts:
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <ul className="text-red-800 space-y-1">
                <li>• Housing expenses (from above)</li>
                <li>• Credit card minimum payments</li>
                <li>• Car loans</li>
                <li>• Student loans</li>
                <li>• Personal loans</li>
                <li>• Other recurring debt obligations</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Factors That Affect Your Affordability
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Credit Score Impact</h4>
            <p className="text-gray-700 mb-4">
              Your credit score significantly affects both your interest rate and the debt-to-income 
              ratio lenders will accept:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Credit Score Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Interest Rate</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Max DTI Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">800+ (Excellent)</td>
                    <td className="border border-gray-300 px-4 py-2">Best available rates</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 45%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">740-799 (Very Good)</td>
                    <td className="border border-gray-300 px-4 py-2">Competitive rates</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 43%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">680-739 (Good)</td>
                    <td className="border border-gray-300 px-4 py-2">Above average rates</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 41%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">620-679 (Fair)</td>
                    <td className="border border-gray-300 px-4 py-2">Higher rates</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 38%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Below 620 (Poor)</td>
                    <td className="border border-gray-300 px-4 py-2">Highest rates/FHA only</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 35%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Down Payment Considerations</h4>
            <p className="text-gray-700 mb-4">
              Your down payment affects both your monthly payment and overall costs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">20% or More Down</h5>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• No PMI required</li>
                  <li>• Lower monthly payments</li>
                  <li>• Better loan terms</li>
                  <li>• More equity from day one</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-900 mb-2">Less Than 20% Down</h5>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• PMI required (0.3-1.5% annually)</li>
                  <li>• Higher monthly payments</li>
                  <li>• Less initial equity</li>
                  <li>• May qualify for first-time buyer programs</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Different Loan Types and Requirements
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Conventional Loans</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Down payment: 3-20%</li>
              <li>• Credit score: 620+ (preferably 740+)</li>
              <li>• DTI ratio: Up to 43-45%</li>
              <li>• PMI required if down payment &lt; 20%</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">FHA Loans</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Down payment: 3.5%</li>
              <li>• Credit score: 580+ (500+ with 10% down)</li>
              <li>• DTI ratio: Up to 43%</li>
              <li>• Mortgage insurance required for life of loan</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">VA Loans (Veterans)</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Down payment: 0%</li>
              <li>• Credit score: No minimum (lender dependent)</li>
              <li>• DTI ratio: Up to 41%</li>
              <li>• No PMI required</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">USDA Loans (Rural Areas)</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Down payment: 0%</li>
              <li>• Credit score: 640+</li>
              <li>• DTI ratio: Up to 41%</li>
              <li>• Income limits apply</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Beyond the Numbers: Lifestyle Considerations
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Financial Goals</h4>
            <p className="text-gray-700 mb-4">
              Consider how homeownership fits into your broader financial picture:
            </p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Emergency Fund:</strong> Maintain 3-6 months of expenses</li>
              <li>• <strong>Retirement Savings:</strong> Don't sacrifice long-term goals</li>
              <li>• <strong>Other Debts:</strong> Consider paying off high-interest debt first</li>
              <li>• <strong>Career Stability:</strong> Ensure steady income for 30 years</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Factors</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Commute Costs:</strong> Factor in transportation expenses</li>
              <li>• <strong>Family Plans:</strong> Consider future space needs</li>
              <li>• <strong>Maintenance Ability:</strong> Can you handle repairs yourself?</li>
              <li>• <strong>Mobility:</strong> How long do you plan to stay?</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Affordability Mistakes
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Overextending Financially</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Buying at the maximum approved amount</li>
              <li>• Ignoring closing costs and moving expenses</li>
              <li>• Not budgeting for maintenance and repairs</li>
              <li>• Depleting all savings for the down payment</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Underestimating Costs</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Forgetting about property taxes and insurance</li>
              <li>• Not considering utility costs</li>
              <li>• Ignoring HOA fees and special assessments</li>
              <li>• Underestimating maintenance expenses</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Improving Your Affordability
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Increase Your Income</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Ask for a raise or promotion</li>
              <li>• Take on a side hustle or part-time job</li>
              <li>• Include spouse's income if married</li>
              <li>• Consider rental income from multi-family properties</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Reduce Your Debts</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Pay off credit cards and personal loans</li>
              <li>• Consider debt consolidation</li>
              <li>• Avoid taking on new debt before buying</li>
              <li>• Make extra payments on existing loans</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Improve Your Credit Score</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Pay all bills on time</li>
              <li>• Keep credit utilization below 30%</li>
              <li>• Don't close old credit accounts</li>
              <li>• Check credit reports for errors</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Pre-Approval Process
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Why Get Pre-Approved?</h4>
            <ul className="text-gray-700 mb-4 space-y-1">
              <li>• Know your exact budget before house hunting</li>
              <li>• Strengthen your offers in competitive markets</li>
              <li>• Identify and resolve credit issues early</li>
              <li>• Lock in interest rates (with some lenders)</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Documents You'll Need</h4>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Recent pay stubs (2-3 months)</li>
              <li>• Tax returns (2 years)</li>
              <li>• Bank statements (2-3 months)</li>
              <li>• Employment verification letter</li>
              <li>• Investment account statements</li>
              <li>• Documentation of other income sources</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Important Reminder</h4>
              <p className="text-orange-800">
                Just because you qualify for a certain loan amount doesn't mean you should 
                borrow that much. Consider your comfort level, future goals, and the 
                possibility of income changes. It's often wise to buy below your maximum 
                affordability to maintain financial flexibility.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h3>

            <p className="text-gray-700 mb-4">
              Determining how much house you can afford requires careful consideration of your 
              income, debts, down payment, and ongoing homeownership costs. Our affordability 
              calculator provides a comprehensive analysis based on industry standards and 
              lending requirements.
            </p>

            <p className="text-gray-700">
              Remember that affordability isn't just about qualifying for a loan – it's about 
              finding a payment that allows you to maintain your desired lifestyle while 
              building long-term wealth. Take time to consider all factors, get pre-approved 
              with multiple lenders, and choose a home that fits comfortably within your budget.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}