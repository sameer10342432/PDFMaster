import { CalculatorContent } from '@/types';

export const RENTAL_PROPERTY_EXPENSE_TRACKER_CONTENT: CalculatorContent = {
  title: 'Rental Property Expense Tracker',
  description: 'Track and categorize all rental property expenses, calculate tax deductions, analyze spending by category, and generate annual expense summaries.',
  slug: 'rental-property-expense-tracker',
  icon: '📊',
  category: 'Rental & Income',
  metaTitle: 'Rental Property Expense Tracker - Categorize Costs & Tax Deductions',
  metaDescription: 'Free rental expense tracker. Organize landlord costs, maximize tax deductions, analyze spending patterns, and prepare annual tax documentation.',
  article: {
    title: 'Comprehensive Rental Property Expense Tracking',
    content: `
    <h2>Comprehensive Rental Property Expense Tracking</h2>
    <p>Proper expense tracking is essential for rental property success. Accurate records maximize tax deductions, support refinancing applications, identify cost-saving opportunities, and protect you during IRS audits. Smart landlords treat expense tracking as seriously as collecting rent.</p>
    
    <h3>Why Track Rental Expenses?</h3>
    <p>Detailed expense tracking provides multiple benefits:</p>
    <ul>
      <li><strong>Tax Deductions:</strong> Maximize deductions by documenting all eligible expenses</li>
      <li><strong>Audit Protection:</strong> Defend deductions with receipts and categorized records</li>
      <li><strong>Profitability Analysis:</strong> Understand which properties are most profitable</li>
      <li><strong>Budget Planning:</strong> Use historical data to forecast future costs</li>
      <li><strong>Refinancing:</strong> Provide lenders with organized financial statements</li>
      <li><strong>Sale Preparation:</strong> Show buyers clean financials to maximize sale price</li>
      <li><strong>Expense Control:</strong> Identify excessive costs and negotiate better rates</li>
    </ul>

    <h3>How to Use This Tracker</h3>
    <p>Enter your annual expenses by category:</p>
    <ul>
      <li><strong>Advertising:</strong> Marketing costs to find tenants</li>
      <li><strong>Auto & Travel:</strong> Mileage and travel to manage property</li>
      <li><strong>Cleaning & Maintenance:</strong> Regular upkeep and repairs</li>
      <li><strong>Commissions:</strong> Leasing commissions paid to agents</li>
      <li><strong>Insurance:</strong> Property, liability, umbrella policies</li>
      <li><strong>Legal & Professional:</strong> Attorneys, accountants, consultants</li>
      <li><strong>Management Fees:</strong> Property management company fees</li>
      <li><strong>Mortgage Interest:</strong> Interest portion of loan payments</li>
      <li><strong>Repairs:</strong> Fix broken items to original condition</li>
      <li><strong>Supplies:</strong> Tools, materials, cleaning supplies</li>
      <li><strong>Taxes:</strong> Property taxes paid</li>
      <li><strong>Utilities:</strong> Electric, gas, water, sewer if landlord-paid</li>
      <li><strong>Other:</strong> Miscellaneous landlord expenses</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Total Annual Expenses:</strong> Sum of all expense categories</li>
      <li><strong>Monthly Average:</strong> Average expense per month</li>
      <li><strong>Largest Expense Category:</strong> Which category costs the most</li>
      <li><strong>Tax Deductible Total:</strong> Sum of all deductible expenses</li>
      <li><strong>Expense by Category %:</strong> Each category as % of total</li>
    </ul>

    <h3>Deductible Operating Expenses</h3>
    <p>IRS-approved rental expense categories:</p>
    <ul>
      <li><strong>Advertising:</strong> Online listings, yard signs, newspaper ads, website costs</li>
      <li><strong>Auto & Travel:</strong> Mileage to/from property (65.5¢/mile in 2023), parking, tolls</li>
      <li><strong>Cleaning & Maintenance:</strong> Regular maintenance, cleaning services, turnover costs</li>
      <li><strong>Commissions:</strong> Real estate agent leasing commissions, finder fees</li>
      <li><strong>Insurance:</strong> Property insurance, liability insurance, flood insurance</li>
      <li><strong>Legal & Professional:</strong> Attorney fees, accounting, tax preparation, eviction costs</li>
      <li><strong>Management Fees:</strong> Property management company fees (typically 8-12% of rent)</li>
      <li><strong>Mortgage Interest:</strong> Interest on property loans (NOT principal paydown)</li>
      <li><strong>Repairs:</strong> Fix broken items (must restore to original condition, not improve)</li>
      <li><strong>Supplies:</strong> Light bulbs, cleaning supplies, small tools, materials</li>
      <li><strong>Taxes:</strong> Property taxes, state/local taxes (NOT federal income tax)</li>
      <li><strong>Utilities:</strong> Electricity, gas, water, sewer, trash (if landlord pays)</li>
      <li><strong>HOA Fees:</strong> Homeowner association or condo fees</li>
      <li><strong>Pest Control:</strong> Exterminator services, preventive treatments</li>
      <li><strong>Landscaping:</strong> Lawn mowing, snow removal, tree trimming</li>
    </ul>

    <h3>Repairs vs. Improvements</h3>
    <p>Critical distinction for tax treatment:</p>
    <ul>
      <li><strong>Repairs (Fully Deductible):</strong> Fix broken items to original condition</li>
      <li><strong>Examples:</strong> Patch drywall holes, fix leaky faucet, replace broken window, paint same color</li>
      <li><strong>Improvements (Depreciate):</strong> Betterments that add value or extend life</li>
      <li><strong>Examples:</strong> New roof, HVAC replacement, kitchen remodel, room addition</li>
      <li><strong>Safe Harbor:</strong> Expenses under $2,500 can be deducted immediately</li>
      <li><strong>Routine Maintenance Safe Harbor:</strong> Recurring activities deductible (cleaning gutters, HVAC servicing)</li>
    </ul>

    <h3>Capital Improvements (Not Deductible, Must Depreciate)</h3>
    <p>These must be depreciated over time, not expensed immediately:</p>
    <ul>
      <li><strong>Structural:</strong> New roof, foundation repairs, room additions</li>
      <li><strong>HVAC:</strong> Complete system replacement (not repairs)</li>
      <li><strong>Appliances:</strong> Refrigerator, stove, dishwasher, washer/dryer</li>
      <li><strong>Flooring:</strong> New carpeting, hardwood, tile installation</li>
      <li><strong>Landscaping:</strong> Trees, permanent plantings, irrigation systems</li>
      <li><strong>Depreciation Schedule:</strong> 27.5 years for residential rental buildings, 5-15 years for personal property</li>
    </ul>

    <h3>Non-Deductible Expenses</h3>
    <p>These costs are NOT tax deductible:</p>
    <ul>
      <li>Mortgage principal payments (builds equity, not an expense)</li>
      <li>Federal income taxes</li>
      <li>Owner's personal labor (your time has no deduction)</li>
      <li>Homeowner association special assessments for improvements</li>
      <li>Fines and penalties for code violations</li>
      <li>Political contributions</li>
      <li>Landscaping improvements (trees, shrubs - must depreciate)</li>
    </ul>

    <h3>Record-Keeping Best Practices</h3>
    <ul>
      <li><strong>Save All Receipts:</strong> Keep physical or digital copies for 7 years</li>
      <li><strong>Categorize Immediately:</strong> Assign category when expense occurs</li>
      <li><strong>Separate Bank Account:</strong> Dedicated checking account for rental business</li>
      <li><strong>Credit Card:</strong> Use separate card for rental expenses</li>
      <li><strong>Digital Tools:</strong> Use property management software or accounting apps</li>
      <li><strong>Photo Documentation:</strong> Take photos of repairs and improvements</li>
      <li><strong>Vendor Information:</strong> Keep contractor names, dates, descriptions</li>
      <li><strong>Monthly Reconciliation:</strong> Match bank statements to expense records</li>
    </ul>

    <h3>Mileage Tracking</h3>
    <p>Auto expenses require detailed documentation:</p>
    <ul>
      <li><strong>Standard Mileage Rate:</strong> 65.5¢/mile (2023), simplest method</li>
      <li><strong>Actual Expense Method:</strong> Track all car costs, calculate rental property %</li>
      <li><strong>Required Records:</strong> Date, destination, purpose, odometer readings</li>
      <li><strong>Deductible Trips:</strong> Collect rent, make repairs, meet contractors, show property, buy supplies</li>
      <li><strong>Non-Deductible:</strong> Commuting from home to first property of day</li>
      <li><strong>Apps:</strong> MileIQ, Everlance, QuickBooks Self-Employed</li>
    </ul>

    <h3>Home Office Deduction</h3>
    <p>Landlords who qualify can deduct home office:</p>
    <ul>
      <li><strong>Regular and Exclusive Use:</strong> Space used only for rental business</li>
      <li><strong>Principal Place of Business:</strong> Where you perform administrative tasks</li>
      <li><strong>Simplified Method:</strong> $5 per square foot, up to 300 square feet ($1,500 max)</li>
      <li><strong>Actual Expense Method:</strong> Percentage of mortgage interest, utilities, insurance, repairs</li>
      <li><strong>Depreciation:</strong> Can depreciate portion of home used for business</li>
    </ul>

    <h3>Maximizing Deductions</h3>
    <ul>
      <li>Track every expense, no matter how small</li>
      <li>Use credit cards to create automatic records</li>
      <li>Take advantage of de minimis safe harbor ($2,500 threshold)</li>
      <li>Deduct startup costs (up to $5,000 in year one)</li>
      <li>Claim depreciation on property and improvements</li>
      <li>Track home office if you qualify</li>
      <li>Deduct education costs related to rental business</li>
      <li>Write off bad debts from unpaid rent (if documented)</li>
    </ul>

    <h3>Software and Tools</h3>
    <p>Digital solutions for expense tracking:</p>
    <ul>
      <li><strong>Property Management:</strong> Buildium, AppFolio, Rent Manager (track income & expenses)</li>
      <li><strong>Accounting Software:</strong> QuickBooks, Xero, FreshBooks (full accounting)</li>
      <li><strong>Receipt Scanning:</strong> Expensify, Receipt Bank, Shoeboxed (digitize receipts)</li>
      <li><strong>Spreadsheets:</strong> Excel, Google Sheets (manual tracking)</li>
      <li><strong>Mobile Apps:</strong> Landlord Studio, Stessa, Cozy (landlord-specific)</li>
      <li><strong>Integration:</strong> Link bank accounts for automatic expense categorization</li>
    </ul>

    <h3>Quarterly Expense Review</h3>
    <p>What to analyze every 3 months:</p>
    <ul>
      <li><strong>Budget vs. Actual:</strong> Are you over/under budget in any category?</li>
      <li><strong>Trends:</strong> Are expenses increasing or decreasing?</li>
      <li><strong>Cost Control:</strong> Which expenses can be reduced?</li>
      <li><strong>Vendor Performance:</strong> Are contractors delivering value?</li>
      <li><strong>Seasonal Patterns:</strong> Summer vs. winter cost variations</li>
      <li><strong>Tax Estimates:</strong> Calculate quarterly estimated tax payments</li>
    </ul>

    <h3>Year-End Tax Preparation</h3>
    <ul>
      <li><strong>Organize by Category:</strong> Sum totals for each expense type</li>
      <li><strong>Prepare Schedule E:</strong> IRS form for rental income and expenses</li>
      <li><strong>Depreciation Schedule:</strong> Calculate annual depreciation deduction</li>
      <li><strong>Receipts Organized:</strong> File receipts by month or category</li>
      <li><strong>Mileage Log:</strong> Total annual business miles driven</li>
      <li><strong>Profit/Loss Statement:</strong> Summary for each rental property</li>
      <li><strong>Professional Review:</strong> Have accountant review before filing</li>
    </ul>

    <h3>Audit-Proof Documentation</h3>
    <p>IRS audit defense requires:</p>
    <ul>
      <li>Receipts for every expense claimed</li>
      <li>Cancelled checks or credit card statements</li>
      <li>Vendor invoices with detailed descriptions</li>
      <li>Before/after photos of repairs and improvements</li>
      <li>Mileage log with dates, destinations, purposes</li>
      <li>Lease agreements proving rental activity</li>
      <li>Proof of payment for all deductions</li>
      <li>Business records showing regular and continuous activity</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Mixing personal and rental property expenses</li>
      <li>Deducting improvements as repairs</li>
      <li>Forgetting to save receipts for small purchases</li>
      <li>Not tracking mileage throughout the year</li>
      <li>Deducting non-allowable expenses (principal, fines)</li>
      <li>Failing to categorize expenses properly</li>
      <li>Waiting until year-end to organize records</li>
      <li>Not maintaining separate business bank account</li>
    </ul>

    <h3>Multi-Property Tracking</h3>
    <p>For landlords with multiple rentals:</p>
    <ul>
      <li><strong>Separate Records:</strong> Track each property individually</li>
      <li><strong>Shared Expenses:</strong> Allocate based on square footage or rental income</li>
      <li><strong>Property Codes:</strong> Assign unique identifier to each property</li>
      <li><strong>Consolidated Reports:</strong> Roll up to portfolio-level view</li>
      <li><strong>Performance Comparison:</strong> Identify best and worst performers</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'advertising',
        label: 'Advertising',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'autoTravel',
        label: 'Auto & Travel',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'cleaning',
        label: 'Cleaning & Maintenance',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'commissions',
        label: 'Commissions',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'insurance',
        label: 'Insurance',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'legalProfessional',
        label: 'Legal & Professional',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'management',
        label: 'Management Fees',
        type: 'number',
        defaultValue: 2400,
      },
      {
        name: 'mortgageInterest',
        label: 'Mortgage Interest',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'repairs',
        label: 'Repairs',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'supplies',
        label: 'Supplies',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'taxes',
        label: 'Property Taxes',
        type: 'number',
        defaultValue: 3600,
      },
      {
        name: 'utilities',
        label: 'Utilities',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'other',
        label: 'Other Expenses',
        type: 'number',
        defaultValue: 500,
      },
    ],
    results: [
      { label: 'Total Annual Expenses', isCurrency: true },
      { label: 'Monthly Average', isCurrency: true },
      { label: 'Largest Category', isCurrency: false },
      { label: 'Largest Category Amount', isCurrency: true },
      { label: 'Mortgage Interest %', isPercentage: true },
      { label: 'Operating Expenses', isCurrency: true },
      { label: 'Tax Deductible Total', isCurrency: true },
    ],
    calculate: (values) => {
      const { advertising, autoTravel, cleaning, commissions, insurance, legalProfessional, management, mortgageInterest, repairs, supplies, taxes, utilities, other } = values;
      
      const categories = {
        'Mortgage Interest': mortgageInterest,
        'Property Taxes': taxes,
        'Management Fees': management,
        'Repairs': repairs,
        'Insurance': insurance,
        'Commissions': commissions,
        'Cleaning & Maintenance': cleaning,
        'Utilities': utilities,
        'Auto & Travel': autoTravel,
        'Legal & Professional': legalProfessional,
        'Advertising': advertising,
        'Supplies': supplies,
        'Other': other,
      };
      
      const totalExpenses = Object.values(categories).reduce((sum, val) => sum + val, 0);
      const monthlyAverage = totalExpenses / 12;
      
      let largestCategory = '';
      let largestAmount = 0;
      for (const [category, amount] of Object.entries(categories)) {
        if (amount > largestAmount) {
          largestAmount = amount;
          largestCategory = category;
        }
      }
      
      const mortgagePercent = totalExpenses > 0 ? (mortgageInterest / totalExpenses) * 100 : 0;
      const operatingExpenses = totalExpenses - mortgageInterest;
      const taxDeductible = totalExpenses;

      return [
        { label: 'Total Annual Expenses', value: totalExpenses.toFixed(2), isCurrency: true },
        { label: 'Monthly Average', value: monthlyAverage.toFixed(2), isCurrency: true },
        { label: 'Largest Category', value: largestCategory, isCurrency: false },
        { label: 'Largest Category Amount', value: largestAmount.toFixed(2), isCurrency: true },
        { label: 'Mortgage Interest %', value: mortgagePercent.toFixed(2), isPercentage: true },
        { label: 'Operating Expenses', value: operatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Tax Deductible Total', value: taxDeductible.toFixed(2), isCurrency: true },
      ];
    },
  },
};
