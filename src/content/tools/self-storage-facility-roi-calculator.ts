import { CalculatorContent } from '@/types';

export const SELF_STORAGE_FACILITY_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Self-Storage Facility ROI Calculator - Storage Unit Investment Analysis',
  description: 'Calculate ROI for self-storage facilities including occupancy rates, rental income per unit, and operating expenses',
  icon: 'Icon',
  slug: 'self-storage-facility-roi-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'How to Analyze Self-Storage Facility Investments for Maximum Returns',
    content: `
    <h2>Why Invest in Self-Storage Facilities?</h2>
    <p>Self-storage facilities are one of the most resilient commercial real estate asset classes, with consistent demand across economic cycles. With low operating costs, scalable pricing, and strong cash flow, storage facilities offer attractive returns for investors willing to learn this specialized niche.</p>

    <h3>Self-Storage Investment Advantages</h3>
    <ul>
      <li><strong>Recession Resistant:</strong> People need storage during downsizing, divorce, death, and dislocation - demand stays strong in downturns.</li>
      <li><strong>Low Operating Costs:</strong> No HVAC, minimal staff (1-2 people for 500+ units), simple maintenance - 30-40% expense ratios.</li>
      <li><strong>Month-to-Month Leases:</strong> Adjust pricing monthly to maximize revenue - no long-term lease commitments.</li>
      <li><strong>Multiple Revenue Streams:</strong> Unit rentals, truck rentals, packing supplies, insurance, late fees.</li>
      <li><strong>Scalability:</strong> Can be owner-operated or professionally managed - adapts to different investment sizes.</li>
      <li><strong>Forced Appreciation:</strong> Increase NOI through better management, pricing optimization, and adding revenue streams.</li>
    </ul>

    <h3>Self-Storage Unit Types & Pricing</h3>
    <ul>
      <li><strong>Climate-Controlled Units:</strong> 30-50% price premium over non-climate - protects furniture, electronics, documents.</li>
      <li><strong>Drive-Up Units:</strong> Ground floor access - popular for frequent access, vehicles, equipment.</li>
      <li><strong>Interior Units:</strong> Accessed through hallways - more secure but less convenient.</li>
      <li><strong>Vehicle Storage:</strong> Uncovered (cheapest), covered ($50-200/month), or enclosed ($150-400/month).</li>
      <li><strong>Premium Units:</strong> Wine storage, boat/RV storage command 2-3x standard rates.</li>
      <li><strong>Size Range Pricing:</strong> 5x5 ($40-80), 5x10 ($60-120), 10x10 ($100-180), 10x20 ($150-300).</li>
    </ul>

    <h3>Key Performance Metrics</h3>
    <ul>
      <li><strong>Economic Occupancy:</strong> Industry average 85-92% - newer facilities take 3-5 years to stabilize.</li>
      <li><strong>Revenue Per Available Square Foot:</strong> $12-18 per sq ft annually in strong markets.</li>
      <li><strong>Operating Expense Ratio:</strong> Best-in-class 30-40% of revenue (vs 50-60% for apartments).</li>
      <li><strong>Customer Acquisition Cost:</strong> $40-100 per new customer through online advertising.</li>
      <li><strong>Average Length of Stay:</strong> 12-18 months nationally - varies by market and unit type.</li>
      <li><strong>Street Rate vs Realized Rate:</strong> Advertised rate is 20-40% higher than actual rate after promotions.</li>
    </ul>

    <h3>Operating Expenses Breakdown</h3>
    <ul>
      <li><strong>Property Management (3-6%):</strong> On-site manager salary, regional manager, or third-party management fee.</li>
      <li><strong>Property Taxes (8-15%):</strong> Varies by location - commercial rates apply.</li>
      <li><strong>Insurance (2-4%):</strong> Property coverage, liability, tenant protection program.</li>
      <li><strong>Marketing (3-8%):</strong> Online advertising (Google, Facebook), website, call tracking, promotions.</li>
      <li><strong>Utilities (3-6%):</strong> Electricity for lighting, security, office - minimal compared to other commercial types.</li>
      <li><strong>Maintenance & Repairs (3-7%):</strong> Gate repairs, lock replacement, pest control, parking lot maintenance.</li>
      <li><strong>Administrative (2-4%):</strong> Software, phone, office supplies, legal, accounting.</li>
    </ul>

    <h3>Value-Add Strategies</h3>
    <ul>
      <li><strong>Revenue Optimization:</strong> Implement dynamic pricing software to match market rates and maximize income.</li>
      <li><strong>Add Amenities:</strong> Moving truck rentals generate $500-2,000/month additional profit.</li>
      <li><strong>Sell Ancillary Products:</strong> Locks, boxes, packing supplies at 50-70% gross margins.</li>
      <li><strong>Tenant Insurance:</strong> Earn commissions selling tenant insurance - $2-5 per tenant monthly.</li>
      <li><strong>Technology Upgrades:</strong> Automated gates, online rentals, security cameras reduce labor costs.</li>
      <li><strong>Add Climate Control:</strong> Convert non-climate units to justify 30-50% rent increases.</li>
      <li><strong>Improve Occupancy:</strong> Better marketing, customer service, online presence push occupancy to 90%+.</li>
    </ul>

    <h3>Development vs Acquisition</h3>
    <ul>
      <li><strong>New Development:</strong> $40-70 per sq ft all-in cost, 15-20% returns possible, 3-5 years to stabilize.</li>
      <li><strong>Acquisition of Stabilized:</strong> 6-8% cap rates, immediate cash flow, lower risk profile.</li>
      <li><strong>Value-Add Acquisition:</strong> Buy underperforming facilities at 8-12% cap, improve to 15%+ ROI.</li>
      <li><strong>Conversions:</strong> Convert old warehouses, retail, industrial to storage - lower cost than new construction.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter total number of units, average unit size, rental rate per sq ft, occupancy rate, other income, operating expense ratio, purchase price, and financing terms. The calculator computes gross income, NOI, cap rate, cash flow, and ROI to evaluate your self-storage investment opportunity.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalUnits',
        label: 'Total Number of Units',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'avgUnitSize',
        label: 'Average Unit Size (sq ft)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'rentPerSqFt',
        label: 'Monthly Rent per Sq Ft ($)',
        type: 'number',
        defaultValue: 1.2,
      },
      {
        name: 'occupancyRate',
        label: 'Occupancy Rate (%)',
        type: 'number',
        defaultValue: 88,
      },
      {
        name: 'otherMonthlyIncome',
        label: 'Other Monthly Income (Truck Rentals, Supplies, etc.) ($)',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'operatingExpenseRatio',
        label: 'Operating Expense Ratio (%)',
        type: 'number',
        defaultValue: 38,
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 3500000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 875000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [],
    calculate: (values) => {
      const { totalUnits, avgUnitSize, rentPerSqFt, occupancyRate, otherMonthlyIncome, operatingExpenseRatio, purchasePrice, downPayment, interestRate, loanTerm } = values;
      
      const totalSqFt = totalUnits * avgUnitSize;
      const monthlyRentPerUnit = avgUnitSize * rentPerSqFt;
      const occupiedUnits = Math.round(totalUnits * (occupancyRate / 100));
      const monthlyRentalIncome = occupiedUnits * monthlyRentPerUnit;
      const totalMonthlyIncome = monthlyRentalIncome + otherMonthlyIncome;
      const annualGrossIncome = totalMonthlyIncome * 12;
      
      const operatingExpenses = annualGrossIncome * (operatingExpenseRatio / 100);
      const noi = annualGrossIncome - operatingExpenses;
      
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
      const revenuePerSqFt = annualGrossIncome / totalSqFt;

      return [
        { label: 'Total Rentable Square Feet', value: totalSqFt.toLocaleString() },
        { label: 'Occupied Units', value: occupiedUnits.toString() },
        { label: 'Monthly Rental Income', value: monthlyRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Income', value: totalMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Revenue per Sq Ft (Annual)', value: `$${revenuePerSqFt.toFixed(2)}` },
        { label: 'Operating Expenses', value: operatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Cap Rate', value: `${capRate.toFixed(2)}%` },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Monthly Cash Flow', value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: 'Debt Service Coverage Ratio (DSCR)', value: dscr.toFixed(2) },
        { label: 'Cash-on-Cash Return', value: `${cashOnCash.toFixed(2)}%` },
      ];
    },
  },
};
