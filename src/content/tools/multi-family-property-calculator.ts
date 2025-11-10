import { CalculatorContent } from '@/types';

export const MULTI_FAMILY_PROPERTY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Multi-Family Property Calculator (5+ Units) - Apartment Investment Analysis',
  description: 'Analyze multi-family apartment buildings with 5+ units including NOI, cap rate, cash flow, and ROI calculations',
  icon: 'Icon',
  slug: 'multi-family-property-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'How to Analyze Multi-Family Properties (5+ Units) for Maximum Returns',
    content: `
    <h2>What is a Multi-Family Property Investment?</h2>
    <p>Multi-family properties with 5+ units (apartment buildings) are commercial real estate investments that generate income from multiple rental units. Unlike 1-4 unit residential properties, these are valued based on income potential rather than comparable sales, making financial analysis more complex but potentially more profitable.</p>

    <h3>Why Invest in 5+ Unit Multi-Family Properties?</h3>
    <ul>
      <li><strong>Economies of Scale:</strong> Lower per-unit maintenance, management, and renovation costs compared to single-family properties.</li>
      <li><strong>Commercial Financing:</strong> Access to longer-term commercial loans with favorable terms for strong properties.</li>
      <li><strong>Professional Management:</strong> Property size justifies full-time on-site management and maintenance staff.</li>
      <li><strong>Income-Based Valuation:</strong> Property value tied to NOI, allowing forced appreciation through operational improvements.</li>
      <li><strong>Vacancy Protection:</strong> Multiple units spread risk - one vacancy has minimal impact on overall cash flow.</li>
      <li><strong>Tax Advantages:</strong> Accelerated depreciation, cost segregation, and 1031 exchanges optimize tax efficiency.</li>
    </ul>

    <h3>Key Metrics for Multi-Family Analysis</h3>
    <ul>
      <li><strong>Gross Potential Rent (GPR):</strong> Total annual income if all units were rented year-round at market rates.</li>
      <li><strong>Economic Vacancy Rate:</strong> Realistic vacancy factor (typically 5-10%) accounting for turnover and market conditions.</li>
      <li><strong>Effective Gross Income (EGI):</strong> GPR minus vacancy losses, plus other income (laundry, parking, pet fees).</li>
      <li><strong>Operating Expenses:</strong> All costs to maintain property (property management, maintenance, utilities, insurance, taxes) except debt service.</li>
      <li><strong>Net Operating Income (NOI):</strong> EGI minus operating expenses - the gold standard metric for multi-family valuation.</li>
      <li><strong>Cap Rate:</strong> NOI divided by purchase price - determines property value and compares investment opportunities.</li>
      <li><strong>Debt Service Coverage Ratio (DSCR):</strong> NOI divided by annual debt payments - lenders require minimum 1.25x DSCR.</li>
      <li><strong>Cash-on-Cash Return:</strong> Annual cash flow divided by initial cash invested - measures actual cash returns.</li>
    </ul>

    <h3>Operating Expense Categories</h3>
    <ul>
      <li><strong>Property Management (4-10%):</strong> Professional management fees, leasing commissions.</li>
      <li><strong>Maintenance & Repairs (8-15%):</strong> Regular maintenance, unit turns, emergency repairs.</li>
      <li><strong>Property Taxes (10-25%):</strong> Varies by location - highest expense in many markets.</li>
      <li><strong>Insurance (3-8%):</strong> Property, liability, loss of rents coverage.</li>
      <li><strong>Utilities (5-15%):</strong> Water, sewer, trash, common area electricity (if owner-paid).</li>
      <li><strong>Reserves (5-10%):</strong> Capital reserves for major repairs (roof, HVAC, parking lot).</li>
      <li><strong>Administrative (2-5%):</strong> Legal, accounting, HOA fees, marketing.</li>
    </ul>

    <h3>Value-Add Strategies for Multi-Family</h3>
    <ul>
      <li><strong>Unit Renovations:</strong> Upgrade kitchens, bathrooms, flooring to increase rents $100-300/month per unit.</li>
      <li><strong>Amenity Additions:</strong> Add fitness center, dog park, package lockers to justify higher rents.</li>
      <li><strong>Operational Efficiency:</strong> Reduce expenses through better vendors, technology, and energy efficiency.</li>
      <li><strong>Improved Management:</strong> Professional marketing, tenant screening, and retention programs reduce vacancy.</li>
      <li><strong>Separate Utilities:</strong> Install sub-meters to shift utility costs to tenants (RUBS - Ratio Utility Billing System).</li>
      <li><strong>Additional Income:</strong> Add laundry, vending, storage units, covered parking fees.</li>
    </ul>

    <h3>Financing Multi-Family Properties</h3>
    <ul>
      <li><strong>Commercial Loans:</strong> 20-30% down, 20-25 year amortization, 5-10 year term with balloon payment.</li>
      <li><strong>Agency Loans (Fannie Mae/Freddie Mac):</strong> Best rates for stabilized properties with strong occupancy.</li>
      <li><strong>FHA Multifamily Loans:</strong> Low down payment options for owner-occupied 5+ units (rare but available).</li>
      <li><strong>Bridge Loans:</strong> Short-term financing for value-add projects with renovation plans.</li>
      <li><strong>CMBS Loans:</strong> Commercial mortgage-backed securities - non-recourse loans for larger properties.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the number of units, average rent per unit, vacancy rate, total annual operating expenses, purchase price, down payment, interest rate, and loan term. The calculator will compute your NOI, cap rate, cash flow, DSCR, cash-on-cash return, and overall ROI to evaluate the investment opportunity.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'numberOfUnits',
        label: 'Number of Units',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'avgRentPerUnit',
        label: 'Average Monthly Rent per Unit ($)',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'otherIncome',
        label: 'Other Monthly Income (Laundry, Parking, etc.) ($)',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'operatingExpenseRatio',
        label: 'Operating Expense Ratio (%)',
        type: 'number',
        defaultValue: 45,
      },
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 3000000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 750000,
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
      const { numberOfUnits, avgRentPerUnit, vacancyRate, otherIncome, operatingExpenseRatio, purchasePrice, downPayment, interestRate, loanTerm } = values;
      
      const grossMonthlyRent = numberOfUnits * avgRentPerUnit;
      const grossAnnualRent = grossMonthlyRent * 12;
      const annualOtherIncome = otherIncome * 12;
      const grossPotentialIncome = grossAnnualRent + annualOtherIncome;
      
      const vacancyLoss = grossPotentialIncome * (vacancyRate / 100);
      const effectiveGrossIncome = grossPotentialIncome - vacancyLoss;
      
      const operatingExpenses = effectiveGrossIncome * (operatingExpenseRatio / 100);
      const noi = effectiveGrossIncome - operatingExpenses;
      
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
      const totalCashInvested = downPayment;
      const roi = (annualCashFlow / totalCashInvested) * 100;

      return [
        { label: 'Gross Potential Income (Annual)', value: grossPotentialIncome.toFixed(2), isCurrency: true },
        { label: 'Vacancy Loss (Annual)', value: vacancyLoss.toFixed(2), isCurrency: true },
        { label: 'Effective Gross Income', value: effectiveGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Operating Expenses', value: operatingExpenses.toFixed(2), isCurrency: true },
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Cap Rate', value: `${capRate.toFixed(2)}%` },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: 'Monthly Cash Flow', value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: 'Debt Service Coverage Ratio (DSCR)', value: dscr.toFixed(2) },
        { label: 'Cash-on-Cash Return', value: `${cashOnCash.toFixed(2)}%` },
        { label: 'Return on Investment (ROI)', value: `${roi.toFixed(2)}%` },
      ];
    },
  },
};
