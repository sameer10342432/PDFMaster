'use client';

import Footer from '@/components/footer/Footer';

import { useState } from 'react';
import Link from 'next/link';

const tools = [
  // Basic Calculators
  {
    name: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments, interest, and amortization schedules',
    category: 'Basic Calculators',
    icon: '🏠',
    path: '/tools/mortgage-calculator'
  },
  {
    name: 'Affordability Calculator',
    description: 'Determine how much house you can afford based on your income',
    category: 'Basic Calculators',
    icon: '💰',
    path: '/tools/affordability-calculator'
  },
  {
    name: 'Down Payment Calculator',
    description: 'Calculate required down payment and savings timeline',
    category: 'Basic Calculators',
    icon: '💳',
    path: '/tools/down-payment-calculator'
  },
  {
    name: 'Loan Eligibility Checker',
    description: 'Check your eligibility for different types of property loans',
    category: 'Basic Calculators',
    icon: '✅',
    path: '/tools/loan-eligibility-checker'
  },
  {
    name: 'Refinance Calculator',
    description: 'Analyze refinancing options and potential savings',
    category: 'Basic Calculators',
    icon: '🔄',
    path: '/tools/refinance-calculator'
  },
  {
    name: 'Amortization Schedule Calculator',
    description: 'Generate detailed loan amortization schedules',
    category: 'Basic Calculators',
    icon: '📊',
    path: '/tools/amortization-schedule-calculator'
  },
  {
    name: 'Property Tax Estimator',
    description: 'Estimate annual property taxes for any location',
    category: 'Basic Calculators',
    icon: '🏛️',
    path: '/tools/property-tax-estimator'
  },
  {
    name: 'HELOC Calculator',
    description: 'Estimate your Home Equity Line of Credit.',
    category: 'Basic Calculators',
    icon: '🏦',
    path: '/tools/heloc-calculator'
  },
  {
    name: 'BRRRR Calculator',
    description: 'Analyze Buy, Rehab, Rent, Refinance, and Repeat (BRRRR) deals',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/brrrr-calculator'
  },
  {
    name: 'Fix and Flip Calculator',
    description: 'Analyze the profitability of fix and flip projects',
    category: 'Investment Analysis',
    icon: '🔨',
    path: '/tools/fix-and-flip-calculator'
  },
  {
    name: 'Rental Property Calculator',
    description: 'Analyze the financial performance of a rental property.',
    category: 'Investment Analysis',
    icon: '🏘️',
    path: '/tools/rental-property-calculator'
  },
  {
    name: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate for investments',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/cagr-calculator'
  },
  {
    name: 'Property Flipping ROI Calculator',
    description: 'Calculate the ROI and net profit of your property flipping projects.',
    category: 'Investment Analysis',
    icon: '🔨',
    path: '/tools/property-flipping-roi-calculator'
  },
  {
    name: 'Capital Gain Tax Calculator',
    description: 'Calculate the capital gain tax on your property investment.',
    category: 'Investment Analysis',
    icon: '💸',
    path: '/tools/capital-gain-tax-calculator'
  },
  {
    name: 'Property ROI Calculator',
    description: 'Calculate the ROI for your property investment.',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/property-roi-calculator'
  },

  // Investment Analysis
  {
    name: 'ROI Calculator',
    description: 'Calculate return on investment for property purchases',
    category: 'Investment Analysis',
    icon: '📈',
    path: '/tools/roi-calculator'
  },
  {
    name: 'Cash Flow Analyzer',
    description: 'Analyze monthly cash flow from rental properties',
    category: 'Investment Analysis',
    icon: '💸',
    path: '/tools/cash-flow-analyzer'
  },
  {
    name: 'ARV Calculator',
    description: 'Estimate the After Repair Value (ARV) of a property.',
    category: 'Investment Analysis',
    icon: '🛠️',
    path: '/tools/arv-calculator'
  },
  {
    name: 'Cap Rate Calculator',
    description: 'Calculate capitalization rates for investment properties',
    category: 'Investment Analysis',
    icon: '🎯',
    path: '/tools/cap-rate-calculator'
  },
  {
    name: 'Cash-on-Cash Return Calculator',
    description: 'Calculate cash-on-cash returns for leveraged investments',
    category: 'Investment Analysis',
    icon: '💵',
    path: '/tools/cash-on-cash-return-calculator'
  },
  {
    name: 'Return on Investment (ROI) Calculator',
    description: 'Calculate the profitability of a potential investment.',
    category: 'Investment Analysis',
    icon: '💰',
    path: '/tools/return-on-investment-calculator'
  },
  {
    name: 'Payback Period Calculator',
    description: 'Determine how long it will take to recover your initial investment.',
    category: 'Investment Analysis',
    icon: '⏳',
    path: '/tools/payback-period-calculator'
  },
  {
    name: 'Investment Growth Simulator',
    description: 'Simulate long-term investment growth scenarios',
    category: 'Investment Analysis',
    icon: '🚀',
    path: '/tools/investment-growth-simulator'
  },
  {
    name: 'Break-Even Analysis Calculator',
    description: 'Calculate break-even points for property investments',
    category: 'Investment Analysis',
    icon: '⚖️',
    path: '/tools/break-even-analysis-calculator'
  },
  {
    name: 'Debt Service Coverage Calculator',
    description: 'Calculate debt service coverage ratios for commercial properties',
    category: 'Investment Analysis',
    icon: '🏢',
    path: '/tools/debt-service-coverage-calculator'
  },
  {
    name: '1031 Exchange Calculator',
    description: 'Analyze tax benefits of 1031 like-kind exchanges',
    category: 'Investment Analysis',
    icon: '🔄',
    path: '/tools/1031-exchange-calculator'
  },

  // Property Valuation
  {
    name: 'Property Valuation',
    description: 'Get accurate property valuations using multiple methods',
    category: 'Property Valuation',
    icon: '🏘️',
    path: '/tools/property-valuation'
  },
  {
    name: 'Property Comparison Tool',
    description: 'Compare multiple properties side by side',
    category: 'Property Valuation',
    icon: '🔍',
    path: '/tools/property-comparison-tool'
  },
  {
    name: 'Property Appreciation Calculator',
    description: 'Calculate historical and projected property appreciation',
    category: 'Property Valuation',
    icon: '📊',
    path: '/tools/property-appreciation-calculator'
  },
  {
    name: 'Depreciation Calculator',
    description: 'Calculate tax depreciation for investment properties',
    category: 'Property Valuation',
    icon: '📉',
    path: '/tools/depreciation-calculator'
  },
  {
    name: 'Capital Gain Tax Calculator',
    description: 'Estimate capital gain tax on real estate sales',
    category: 'Tax & Legal',
    icon: '🧾',
    path: '/tools/capital-gain-tax-calculator'
  },
  {
    name: 'Property Equity Calculator',
    description: 'Track and analyze your property equity over time',
    category: 'Property Valuation',
    icon: '💎',
    path: '/tools/property-equity-calculator'
  },
  {
    name: 'Property Comparison',
    description: 'Advanced property comparison with detailed metrics',
    category: 'Property Valuation',
    icon: '⚖️',
    path: '/tools/property-comparison'
  },
  {
    name: 'Cash Flow Analyzer',
    description: 'Analyze the cash flow of a rental property to determine its profitability.',
    category: 'Financial Analysis',
    icon: '💵',
    path: '/tools/cash-flow-analyzer'
  },

  // Rental & Income
  {
    name: 'Rental Price Estimator',
    description: 'Estimate optimal rental prices for your property',
    category: 'Rental & Income',
    icon: '🏠',
    path: '/tools/rental-price-estimator'
  },
  {
    name: 'Rental Yield Calculator',
    description: 'Calculate gross and net rental yields',
    category: 'Rental & Income',
    icon: '💰',
    path: '/tools/rental-yield-calculator'
  },
  {
    name: 'Short-Term Rental Estimator',
    description: 'Estimate Airbnb and vacation rental income',
    category: 'Rental & Income',
    icon: '🏖️',
    path: '/tools/short-term-rental-estimator'
  },
  {
    name: 'Rental Income Tax Calculator',
    description: 'Calculate taxes on rental income and deductions',
    category: 'Rental & Income',
    icon: '📋',
    path: '/tools/rental-income-tax-calculator'
  },
  {
    name: 'Property Management Calculator',
    description: 'Calculate property management costs and fees',
    category: 'Rental & Income',
    icon: '🔧',
    path: '/tools/property-management-calculator'
  },
  {
    name: 'Tenant Screening Checklist',
    description: 'Comprehensive tenant screening and evaluation tool',
    category: 'Rental & Income',
    icon: '👥',
    path: '/tools/tenant-screening-checklist'
  },
  {
    name: 'Lease Agreement Generator',
    description: 'Generate a comprehensive lease agreement for your rental property.',
    category: 'Rental & Income',
    icon: '📝',
    path: '/tools/lease-agreement-generator'
  },
  {
    name: 'Maintenance Tracker',
    description: 'Track property maintenance costs and schedules',
    category: 'Rental & Income',
    icon: '🔨',
    path: '/tools/maintenance-tracker'
  },
  {
    name: 'Lease Agreement Generator',
    description: 'Create professional, customized residential lease agreements',
    category: 'Rental & Income',
    icon: '📝',
    path: '/tools/lease-agreement-generator'
  },

  // Market Analysis
  {
    name: 'Market Trend Analyzer',
    description: 'Analyze local real estate market trends and data',
    category: 'Market Analysis',
    icon: '📈',
    path: '/tools/market-trend-analyzer'
  },
  {
    name: 'School District Finder',
    description: 'Find and compare school districts for property locations',
    category: 'Market Analysis',
    icon: '🎓',
    path: '/tools/school-district-finder'
  },
  {
    name: 'Neighborhood Safety Score',
    description: 'Analyze neighborhood safety and crime statistics',
    category: 'Market Analysis',
    icon: '🛡️',
    path: '/tools/neighborhood-safety-score'
  },
  {
    name: 'Walkability & Commute Score',
    description: 'Evaluate walkability and commute options',
    category: 'Market Analysis',
    icon: '🚶',
    path: '/tools/walkability-commute-score'
  },
  {
    name: 'Real Estate Market Analysis Tool',
    description: 'Comprehensive market analysis and reporting',
    category: 'Market Analysis',
    icon: '🏙️',
    path: '/tools/real-estate-market-analysis-tool'
  },
  {
    name: 'Zoning Compliance Checker',
    description: 'Check zoning laws and compliance requirements',
    category: 'Market Analysis',
    icon: '📋',
    path: '/tools/zoning-compliance-checker'
  },

  // Financial Planning
  {
    name: 'Rent vs Buy Calculator',
    description: 'Compare the costs of renting versus buying',
    category: 'Financial Planning',
    icon: '🏠',
    path: '/tools/rent-vs-buy-calculator'
  },
  {
    name: 'Closing Costs Calculator',
    description: 'Calculate all closing costs for property purchases',
    category: 'Financial Planning',
    icon: '📄',
    path: '/tools/closing-costs-calculator'
  },
  {
    name: 'Stamp Duty Calculator',
    description: 'Calculate stamp duty and transfer taxes',
    category: 'Financial Planning',
    icon: '📜',
    path: '/tools/stamp-duty-calculator'
  },
  {
    name: 'Moving Cost Estimator',
    description: 'Estimate costs for relocating to a new property',
    category: 'Financial Planning',
    icon: '📦',
    path: '/tools/moving-cost-estimator'
  },
  {
    name: 'HOA Fee Calculator',
    description: 'Calculate and analyze HOA fees and assessments',
    category: 'Financial Planning',
    icon: '🏘️',
    path: '/tools/hoa-fee-calculator'
  },
  {
    name: 'Property Insurance Calculator',
    description: 'Calculate property insurance costs and coverage',
    category: 'Financial Planning',
    icon: '🛡️',
    path: '/tools/property-insurance-calculator'
  },
  {
    name: 'Commission Calculator',
    description: 'Calculate real estate agent commissions and fees',
    category: 'Financial Planning',
    icon: '💼',
    path: '/tools/commission-calculator'
  },
  {
    name: 'Energy Savings Calculator',
    description: 'Calculate energy efficiency savings and costs',
    category: 'Financial Planning',
    icon: '⚡',
    path: '/tools/energy-savings-calculator'
  },

  // Risk Assessment
  {
    name: 'House Flip Analyzer',
    description: 'Analyze profitability and risks of house flipping',
    category: 'Risk Assessment',
    icon: '🔄',
    path: '/tools/house-flip-analyzer'
  },
  {
    name: 'Property Flipping ROI Calculator',
    description: 'Calculate ROI for property flipping projects',
    category: 'Risk Assessment',
    icon: '🏗️',
    path: '/tools/property-flipping-roi-calculator'
  },
  {
    name: 'Construction Cost Estimator',
    description: 'Estimate construction and renovation costs',
    category: 'Risk Assessment',
    icon: '🏗️',
    path: '/tools/construction-cost-estimator'
  },
  {
    name: 'Renovation Cost Estimator',
    description: 'Estimate costs for property renovations and improvements',
    category: 'Risk Assessment',
    icon: '🔨',
    path: '/tools/renovation-cost-estimator'
  },

  // Advanced Analytics
  {
    name: 'Property Investment Metrics Dashboard',
    description: 'Comprehensive dashboard for investment property metrics',
    category: 'Advanced Analytics',
    icon: '📊',
    path: '/tools/property-investment-metrics-dashboard'
  },
  {
    name: 'Real Estate Portfolio Tracker',
    description: 'Track and manage your entire real estate portfolio',
    category: 'Advanced Analytics',
    icon: '📈',
    path: '/tools/real-estate-portfolio-tracker'
  },
  {
    name: 'Investment Property Comparison Tool',
    description: 'Advanced comparison tool for multiple investment properties',
    category: 'Advanced Analytics',
    icon: '⚖️',
    path: '/tools/investment-property-comparison-tool'
  },
  {
    name: 'Property Investment Portfolio Optimizer',
    description: 'Optimize your property investment portfolio for maximum returns',
    category: 'Advanced Analytics',
    icon: '🎯',
    path: '/tools/property-investment-portfolio-optimizer'
  },

  // Additional Tools
  {
    name: 'Interior Design Estimator',
    description: 'Estimate interior design and furnishing costs',
    category: 'Additional Tools',
    icon: '🎨',
    path: '/tools/interior-design-estimator'
  },
  {
    name: 'Home Inspection Checklist',
    description: 'Comprehensive home inspection checklist and guide',
    category: 'Additional Tools',
    icon: '🔍',
    path: '/tools/home-inspection-checklist'
  }
];

const categories = [
  'All Tools',
  'Basic Calculators',
  'Investment Analysis', 
  'Property Valuation',
  'Rental & Income',
  'Market Analysis',
  'Financial Planning',
  'Risk Assessment',
  'Advanced Analytics',
  'Additional Tools'
];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: string) => {
    if (category === 'All Tools') return tools.length;
    return tools.filter(tool => tool.category === category).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Estate Tools & Calculators
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Professional property analysis tools for investors, buyers, and real estate professionals
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold">{tools.length}</div>
            <div className="text-lg opacity-90">Professional Tools Available</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category} ({getCategoryCount(category)})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.path}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No tools found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All Tools');
                  setSearchTerm('');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Analyze Your Property Investment?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start with our most popular calculators and make informed real estate decisions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/mortgage-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              ROI Calculator
            </Link>
            <Link
              href="/tools/cash-flow-analyzer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Cash Flow Analyzer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}