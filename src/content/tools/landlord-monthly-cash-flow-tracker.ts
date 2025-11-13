import { CalculatorContent } from '@/types';

export const LANDLORD_MONTHLY_CASH_FLOW_TRACKER_CONTENT: CalculatorContent = {
  title: "Landlord's Monthly Cash Flow Tracker",
  description: 'Track monthly rental income and expenses, calculate net cash flow, monitor property performance, and analyze landlord profitability.',
  slug: 'landlord-monthly-cash-flow-tracker',
  icon: '💰',
  category: 'Rental & Income',
  metaTitle: 'Landlord Cash Flow Tracker - Monthly Rental Income & Expense Calculator',
  metaDescription: 'Free landlord cash flow tracker. Calculate monthly net income, track rental expenses, monitor NOI, cash-on-cash return, and property profitability.',
  article: {
    title: "Managing Your Rental Property's Monthly Cash Flow",
    content: `
    <h2>Managing Your Rental Property's Monthly Cash Flow</h2>
    <p>Successful landlords diligently track monthly cash flow to ensure profitability, identify expense trends, and make informed decisions about their rental properties. Regular monitoring helps you spot issues early, plan for capital improvements, and maximize your investment returns.</p>
    
    <h3>Why Track Monthly Cash Flow?</h3>
    <p>Consistent cash flow tracking provides critical benefits:</p>
    <ul>
      <li><strong>Profit Visibility:</strong> Instantly see if properties are making or losing money</li>
      <li><strong>Expense Control:</strong> Identify cost overruns and areas to optimize spending</li>
      <li><strong>Tax Preparation:</strong> Organized records simplify annual tax filing</li>
      <li><strong>Portfolio Analysis:</strong> Compare performance across multiple properties</li>
      <li><strong>Refinancing Decisions:</strong> Demonstrate income for lender applications</li>
      <li><strong>Sale Preparation:</strong> Clean financial records increase property value</li>
    </ul>

    <h3>How to Use This Tracker</h3>
    <p>Enter your monthly income and expenses:</p>
    <ul>
      <li><strong>Rental Income:</strong> Total rent collected from all units</li>
      <li><strong>Mortgage Payment:</strong> Principal and interest (PITI if including taxes/insurance)</li>
      <li><strong>Property Taxes:</strong> Monthly allocation of annual property taxes</li>
      <li><strong>Insurance:</strong> Landlord/rental property insurance premium</li>
      <li><strong>Utilities:</strong> Water, sewer, gas, electric (if landlord-paid)</li>
      <li><strong>Maintenance & Repairs:</strong> Actual or budgeted monthly amount</li>
      <li><strong>Property Management:</strong> Management fees (typically 8-10% of rent)</li>
      <li><strong>HOA Fees:</strong> Homeowner association dues if applicable</li>
      <li><strong>Other Expenses:</strong> Landscaping, pest control, etc.</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Gross Monthly Income:</strong> Total rental revenue before expenses</li>
      <li><strong>Total Operating Expenses:</strong> All costs except mortgage payment</li>
      <li><strong>Net Operating Income (NOI):</strong> Income minus operating expenses</li>
      <li><strong>Net Cash Flow:</strong> Income minus all expenses including mortgage</li>
      <li><strong>Operating Expense Ratio:</strong> Operating costs as % of income</li>
      <li><strong>Annual Cash Flow:</strong> Projected yearly net cash flow</li>
    </ul>

    <h3>Income Categories to Track</h3>
    <ul>
      <li><strong>Base Rent:</strong> Regular monthly rent from all tenants</li>
      <li><strong>Late Fees:</strong> Penalties for late rent payments</li>
      <li><strong>Pet Fees/Rent:</strong> Additional income for allowing pets</li>
      <li><strong>Parking Fees:</strong> Assigned parking or garage charges</li>
      <li><strong>Storage Fees:</strong> Extra storage unit rentals</li>
      <li><strong>Laundry Income:</strong> Coin-op washer/dryer revenue</li>
      <li><strong>Application Fees:</strong> Non-refundable screening fees</li>
      <li><strong>NSF Fees:</strong> Returned check charges</li>
    </ul>

    <h3>Operating Expense Categories</h3>
    <p>Common operating expenses landlords should track:</p>
    <ul>
      <li><strong>Property Taxes:</strong> Annual tax bill divided by 12 months</li>
      <li><strong>Insurance:</strong> Landlord policy, liability, umbrella coverage</li>
      <li><strong>Utilities:</strong> Any utilities paid by landlord (water, gas, electric)</li>
      <li><strong>Repairs & Maintenance:</strong> Actual costs or budgeted reserve (1-2% of property value annually)</li>
      <li><strong>Property Management:</strong> Professional management fees (8-12% of rent)</li>
      <li><strong>Landscaping:</strong> Lawn care, snow removal, exterior maintenance</li>
      <li><strong>HOA Fees:</strong> Mandatory homeowner association dues</li>
      <li><strong>Pest Control:</strong> Regular extermination services</li>
      <li><strong>Legal & Professional:</strong> Attorney fees, accounting, eviction costs</li>
      <li><strong>Advertising:</strong> Marketing costs to find tenants</li>
      <li><strong>Supplies:</strong> Cleaning supplies, small tools, materials</li>
    </ul>

    <h3>Financing Costs</h3>
    <p>Mortgage-related expenses (separate from operating costs):</p>
    <ul>
      <li><strong>Principal & Interest:</strong> Monthly mortgage payment</li>
      <li><strong>Private Mortgage Insurance:</strong> PMI if less than 20% down payment</li>
      <li><strong>Note:</strong> Principal paydown builds equity and is not an expense for tax purposes</li>
    </ul>

    <h3>Best Practices for Cash Flow Tracking</h3>
    <ul>
      <li><strong>Monthly Reconciliation:</strong> Review and record all income/expenses by month-end</li>
      <li><strong>Separate Bank Account:</strong> Use dedicated account for rental business</li>
      <li><strong>Digital Record-Keeping:</strong> Use property management software or spreadsheets</li>
      <li><strong>Save Receipts:</strong> Keep all receipts and invoices for tax deductions</li>
      <li><strong>Budget for Maintenance:</strong> Set aside 1-2% of property value annually</li>
      <li><strong>Plan for Vacancy:</strong> Budget assumes 8-10% vacancy rate</li>
      <li><strong>Capital Expenditures:</strong> Track separately from operating expenses</li>
    </ul>

    <h3>Understanding Net Operating Income (NOI)</h3>
    <p>NOI is a critical metric for property valuation:</p>
    <ul>
      <li>NOI = Gross Income - Operating Expenses</li>
      <li>Does NOT include mortgage payments or capital expenditures</li>
      <li>Used to calculate Cap Rate: Cap Rate = NOI ÷ Property Value</li>
      <li>Lenders use NOI to assess debt service coverage</li>
      <li>Important for property sale valuation (Price = NOI ÷ Cap Rate)</li>
    </ul>

    <h3>Cash Flow vs. Profit</h3>
    <p>Understanding the difference:</p>
    <ul>
      <li><strong>Cash Flow:</strong> Actual money in/out each month (includes principal paydown)</li>
      <li><strong>Profit (for taxes):</strong> Income minus expenses excluding principal, plus depreciation</li>
      <li><strong>Tax Benefits:</strong> Depreciation and other deductions can create tax losses despite positive cash flow</li>
      <li><strong>Equity Build:</strong> Mortgage principal paydown increases net worth but reduces cash flow</li>
    </ul>

    <h3>Warning Signs of Poor Cash Flow</h3>
    <ul>
      <li>Consistent negative cash flow month after month</li>
      <li>Maintenance costs exceeding 10% of rental income</li>
      <li>Vacancy rates above 10-15%</li>
      <li>Difficulty covering expenses during vacancies</li>
      <li>Dipping into personal funds to cover property costs</li>
      <li>Operating expense ratio above 50%</li>
    </ul>

    <h3>Improving Cash Flow Strategies</h3>
    <ul>
      <li><strong>Increase Income:</strong> Raise rent to market rates, add amenities for premium pricing</li>
      <li><strong>Reduce Vacancy:</strong> Screen tenants carefully, retain good tenants with fair treatment</li>
      <li><strong>Control Expenses:</strong> DIY repairs, negotiate insurance rates, energy efficiency upgrades</li>
      <li><strong>Refinance:</strong> Lower interest rate reduces monthly mortgage payment</li>
      <li><strong>Value-Add Improvements:</strong> Strategic upgrades that command higher rents</li>
      <li><strong>Self-Management:</strong> Eliminate property management fees (8-12% savings)</li>
    </ul>

    <h3>Seasonal Cash Flow Variations</h3>
    <p>Expect fluctuations throughout the year:</p>
    <ul>
      <li><strong>Winter:</strong> Higher utility bills (if landlord-paid), snow removal costs</li>
      <li><strong>Summer:</strong> Lower utilities, but higher A/C costs and lawn care</li>
      <li><strong>Turnover Months:</strong> Renovation costs spike during tenant transitions</li>
      <li><strong>Property Tax Bills:</strong> Often due quarterly or semi-annually</li>
      <li><strong>Insurance Premiums:</strong> Annual or semi-annual lump sum payments</li>
    </ul>

    <h3>Capital Expenditures vs. Operating Expenses</h3>
    <p>Important distinction for tax and accounting:</p>
    <ul>
      <li><strong>Operating Expenses:</strong> Repairs and maintenance, fully deductible in year incurred</li>
      <li><strong>Capital Expenditures (CapEx):</strong> Improvements extending useful life (roof, HVAC, appliances)</li>
      <li><strong>Tax Treatment:</strong> CapEx depreciated over 5-27.5 years, not fully deductible immediately</li>
      <li><strong>CapEx Reserve:</strong> Smart landlords budget $200-$300/month for future large expenses</li>
    </ul>

    <h3>Using Data for Decision-Making</h3>
    <ul>
      <li><strong>Refinance Analysis:</strong> Compare current payment vs. new payment scenarios</li>
      <li><strong>Sale Timing:</strong> Decide when cash flow justifies holding vs. selling</li>
      <li><strong>Rent Adjustments:</strong> Data-driven rent increases based on actual costs</li>
      <li><strong>Portfolio Expansion:</strong> Positive cash flow enables acquisition of additional properties</li>
      <li><strong>Tax Planning:</strong> Accurate records maximize deductions and minimize audit risk</li>
    </ul>

    <h3>Software and Tools</h3>
    <p>Digital solutions for tracking cash flow:</p>
    <ul>
      <li><strong>Property Management Software:</strong> Buildium, AppFolio, Rent Manager</li>
      <li><strong>Accounting Software:</strong> QuickBooks, Xero, Wave</li>
      <li><strong>Spreadsheets:</strong> Excel or Google Sheets templates</li>
      <li><strong>Mobile Apps:</strong> Landlord Studio, Avail, TurboTenant</li>
      <li><strong>Bank Integration:</strong> Automatic expense categorization from bank feeds</li>
    </ul>

    <h3>Tax Deductible Expenses</h3>
    <p>Expenses you can deduct from rental income:</p>
    <ul>
      <li>Mortgage interest (not principal)</li>
      <li>Property taxes</li>
      <li>Insurance premiums</li>
      <li>Repairs and maintenance</li>
      <li>Property management fees</li>
      <li>Utilities (if landlord-paid)</li>
      <li>Legal and professional fees</li>
      <li>Travel to/from property for management</li>
      <li>Home office expenses (if qualify)</li>
      <li>Depreciation (27.5 years for residential rental)</li>
    </ul>

    <h3>Quarterly and Annual Reviews</h3>
    <ul>
      <li><strong>Quarterly:</strong> Review 3-month trends, adjust budgets, plan for upcoming expenses</li>
      <li><strong>Annual:</strong> Calculate total income, prepare for tax filing, analyze ROI, set goals</li>
      <li><strong>Comparative Analysis:</strong> Compare year-over-year performance</li>
      <li><strong>Budget vs. Actual:</strong> Review projections against actual results</li>
    </ul>

    <h3>Building a Cash Reserve</h3>
    <p>Emergency fund recommendations:</p>
    <ul>
      <li><strong>Minimum:</strong> 3-6 months of total expenses per property</li>
      <li><strong>Ideal:</strong> 6-12 months of expenses for multiple properties</li>
      <li><strong>Purpose:</strong> Cover vacancies, major repairs, economic downturns</li>
      <li><strong>Funding:</strong> Allocate portion of positive cash flow to reserves</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'rentalIncome',
        label: 'Monthly Rental Income',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'mortgagePayment',
        label: 'Mortgage Payment (P&I)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'propertyTax',
        label: 'Property Tax (Monthly)',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'insurance',
        label: 'Insurance (Monthly)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'utilities',
        label: 'Utilities (if landlord-paid)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'maintenance',
        label: 'Maintenance & Repairs',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'propertyManagement',
        label: 'Property Management Fee',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'hoaFees',
        label: 'HOA Fees',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'other',
        label: 'Other Expenses',
        type: 'number',
        defaultValue: 50,
      },
    ],
    results: [
      { label: 'Gross Monthly Income', isCurrency: true },
      { label: 'Total Operating Expenses', isCurrency: true },
      { label: 'Net Operating Income (NOI)', isCurrency: true },
      { label: 'Monthly Debt Service', isCurrency: true },
      { label: 'Net Monthly Cash Flow', isCurrency: true },
      { label: 'Operating Expense Ratio', isPercentage: true },
      { label: 'Projected Annual Cash Flow', isCurrency: true },
      { label: 'Cash Flow Status', isCurrency: false },
    ],
    calculate: (values) => {
      const { rentalIncome, mortgagePayment, propertyTax, insurance, utilities, maintenance, propertyManagement, hoaFees, other } = values;
      
      const grossIncome = rentalIncome;
      const operatingExpenses = propertyTax + insurance + utilities + maintenance + propertyManagement + hoaFees + other;
      const noi = grossIncome - operatingExpenses;
      const debtService = mortgagePayment;
      const netCashFlow = noi - debtService;
      const operatingRatio = grossIncome > 0 ? (operatingExpenses / grossIncome) * 100 : 0;
      const annualCashFlow = netCashFlow * 12;
      const cashFlowStatus = netCashFlow > 0 ? '✅ Positive' : netCashFlow === 0 ? '⚠️ Break-Even' : '❌ Negative';

      return [
        { label: 'Gross Monthly Income', value: grossIncome.toFixed(2), isCurrency: true },
        { label: 'Total Operating Expenses', value: operatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Monthly Debt Service', value: debtService.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Cash Flow', value: netCashFlow.toFixed(2), isCurrency: true },
        { label: 'Operating Expense Ratio', value: operatingRatio.toFixed(2), isPercentage: true },
        { label: 'Projected Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Cash Flow Status', value: cashFlowStatus, isCurrency: false },
      ];
    },
  },
};
