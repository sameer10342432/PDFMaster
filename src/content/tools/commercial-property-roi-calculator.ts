import { CalculatorContent } from '@/types';

export const COMMERCIAL_PROPERTY_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commercial Property ROI Calculator - Office, Retail & Industrial Real Estate',
  description: 'Calculate return on investment for commercial properties including office buildings, retail centers, and industrial warehouses',
  icon: 'Icon',
  slug: 'commercial-property-roi-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'How to Calculate ROI on Commercial Real Estate Investments',
    content: `
    <h2>What is Commercial Property ROI?</h2>
    <p>Commercial Property ROI (Return on Investment) measures the profitability of commercial real estate investments including office buildings, retail centers, industrial warehouses, and mixed-use developments. Unlike residential properties, commercial ROI accounts for longer lease terms, tenant improvements, and income-based valuations.</p>

    <h3>Types of Commercial Properties</h3>
    <ul>
      <li><strong>Office Buildings:</strong> Class A, B, C office space with typical 5-10 year leases and tenant improvement allowances.</li>
      <li><strong>Retail Centers:</strong> Strip malls, shopping centers, anchored by grocery stores or major retailers with percentage rent clauses.</li>
      <li><strong>Industrial/Warehouse:</strong> Distribution centers, manufacturing, flex space with triple-net leases and long terms.</li>
      <li><strong>Mixed-Use:</strong> Combination of retail, office, residential in urban developments.</li>
      <li><strong>Medical Office:</strong> Healthcare facilities with specialized build-outs and stable, long-term tenants.</li>
    </ul>

    <h3>Key Commercial ROI Metrics</h3>
    <ul>
      <li><strong>Cap Rate:</strong> NOI divided by purchase price - typically 4-10% depending on property type and location.</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual cash flow divided by cash invested - target 8-15% for commercial.</li>
      <li><strong>Internal Rate of Return (IRR):</strong> Time-weighted returns accounting for holding period and exit value.</li>
      <li><strong>Gross Rent Multiplier (GRM):</strong> Purchase price divided by gross annual rents - quick valuation tool.</li>
      <li><strong>Debt Service Coverage Ratio (DSCR):</strong> NOI divided by debt payments - lenders require minimum 1.25x-1.35x.</li>
      <li><strong>Total Return:</strong> Cash flow plus appreciation over holding period - comprehensive profitability measure.</li>
    </ul>

    <h3>Commercial Lease Structures</h3>
    <ul>
      <li><strong>Triple Net (NNN):</strong> Tenant pays rent plus property taxes, insurance, and maintenance - lowest landlord responsibility.</li>
      <li><strong>Double Net (NN):</strong> Tenant pays rent plus property taxes and insurance - landlord handles maintenance.</li>
      <li><strong>Modified Gross:</strong> Base rent includes some operating expenses, tenant pays utilities and some costs.</li>
      <li><strong>Full Service/Gross:</strong> Landlord pays all operating expenses - tenant pays one rental payment.</li>
      <li><strong>Percentage Rent:</strong> Base rent plus percentage of tenant's gross sales (common in retail 5-10% of sales).</li>
    </ul>

    <h3>Commercial Property Operating Expenses</h3>
    <ul>
      <li><strong>Property Management (3-6%):</strong> Professional management, leasing commissions (3-6% of lease value).</li>
      <li><strong>Property Taxes (15-30%):</strong> Varies by location - can be passed through to tenants in NNN leases.</li>
      <li><strong>Insurance (2-5%):</strong> Commercial liability, property, business interruption coverage.</li>
      <li><strong>Maintenance & Repairs (8-12%):</strong> HVAC, roof, parking lot, common areas, landscaping.</li>
      <li><strong>Utilities (5-10%):</strong> Common area utilities - often passed through to tenants.</li>
      <li><strong>Capital Reserves (5-8%):</strong> Roof replacements, HVAC systems, parking lot resurfacing.</li>
      <li><strong>Tenant Improvements (TI):</strong> Build-out allowances for new tenants ($20-80 per sq ft depending on use).</li>
    </ul>

    <h3>Commercial Investment Strategies</h3>
    <ul>
      <li><strong>Value-Add:</strong> Acquire under-performing properties, improve management, renovate, lease up to increase NOI and value.</li>
      <li><strong>Core/Core+:</strong> Stabilized properties with strong tenants and steady cash flow - lower risk, 6-8% returns.</li>
      <li><strong>Opportunistic:</strong> Development, major renovations, distressed assets - higher risk, 15-20%+ target returns.</li>
      <li><strong>Single-Tenant Net Lease:</strong> Buy properties with creditworthy single tenants on long-term NNN leases - passive income.</li>
      <li><strong>Sale-Leaseback:</strong> Buy property from business, lease back to them - secure income stream.</li>
    </ul>

    <h3>Commercial Financing</h3>
    <ul>
      <li><strong>Commercial Mortgage:</strong> 25-30% down, 20-25 year amortization, 5-10 year term with balloon.</li>
      <li><strong>SBA 504 Loan:</strong> Low down payment (10-15%) for owner-occupied commercial properties.</li>
      <li><strong>CMBS Loans:</strong> Non-recourse financing for larger commercial properties ($2M+).</li>
      <li><strong>Bridge Financing:</strong> 1-3 year terms for value-add projects before permanent financing.</li>
      <li><strong>Mezzanine Debt:</strong> Junior debt filling gap between senior loan and equity - 12-18% rates.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the purchase price, annual gross rents, operating expense ratio, down payment, interest rate, loan term, and projected holding period. The calculator computes NOI, cap rate, annual cash flow, DSCR, cash-on-cash return, and projected total ROI based on appreciation to help evaluate the commercial investment opportunity.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 2500000,
      },
      {
        name: 'annualGrossRent',
        label: 'Annual Gross Rent ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'operatingExpenseRatio',
        label: 'Operating Expense Ratio (%)',
        type: 'number',
        defaultValue: 35,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 625000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.75,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'annualAppreciation',
        label: 'Expected Annual Appreciation (%)',
        type: 'number',
        defaultValue: 3,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, annualGrossRent, operatingExpenseRatio, downPayment, interestRate, loanTerm, holdingPeriod, annualAppreciation } = values;
      
      const operatingExpenses = annualGrossRent * (operatingExpenseRatio / 100);
      const noi = annualGrossRent - operatingExpenses;
      
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const annualDebtService = monthlyPayment * 12;
      
      const annualCashFlow = noi - annualDebtService;
      const monthlyCashFlow = annualCashFlow / 12;
      
      const capRate = (noi / purchasePrice) * 100;
      const dscr = noi / annualDebtService;
      const cashOnCash = (annualCashFlow / downPayment) * 100;
      
      const futureValue = purchasePrice * Math.pow(1 + annualAppreciation / 100, holdingPeriod);
      const totalAppreciation = futureValue - purchasePrice;
      const totalCashFlow = annualCashFlow * holdingPeriod;
      const totalReturn = totalCashFlow + totalAppreciation;
      const totalROI = (totalReturn / downPayment) * 100;
      const annualizedROI = totalROI / holdingPeriod;

      return [
        { label: 'Annual Gross Rent', value: annualGrossRent.toFixed(2), isCurrency: true },
        { label: 'Operating Expenses', value: operatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Cap Rate', value: `${capRate.toFixed(2)}%` },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Monthly Cash Flow', value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: 'Debt Service Coverage Ratio (DSCR)', value: dscr.toFixed(2) },
        { label: 'Cash-on-Cash Return', value: `${cashOnCash.toFixed(2)}%` },
        { label: `Property Value After ${holdingPeriod} Years`, value: futureValue.toFixed(2), isCurrency: true },
        { label: 'Total Appreciation Gain', value: totalAppreciation.toFixed(2), isCurrency: true },
        { label: `Total Cash Flow (${holdingPeriod} Years)`, value: totalCashFlow.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Total ROI', value: `${totalROI.toFixed(2)}%` },
        { label: 'Annualized ROI', value: `${annualizedROI.toFixed(2)}%` },
      ];
    },
  },
};
