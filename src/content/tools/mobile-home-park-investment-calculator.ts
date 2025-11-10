import { CalculatorContent } from '@/types';

export const MOBILE_HOME_PARK_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mobile Home Park Investment Calculator - MHP ROI & Cash Flow Analysis',
  description: 'Analyze mobile home park investments including lot rent, occupancy rates, infrastructure costs, and NOI calculations',
  icon: 'Icon',
  slug: 'mobile-home-park-investment-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'How to Analyze Mobile Home Park Investments for Superior Returns',
    content: `
    <h2>Why Mobile Home Parks Are Lucrative Investments</h2>
    <p>Mobile Home Parks (MHPs) offer some of the highest returns in real estate with 10-20%+ cash-on-cash returns, strong recession resistance, and affordable housing demand. With low operating costs, minimal tenant turnover (moving a mobile home costs $5,000-$10,000), and land lease income, MHPs are a hidden gem for savvy investors.</p>

    <h3>Mobile Home Park Investment Advantages</h3>
    <ul>
      <li><strong>High Barriers to Exit:</strong> Tenants rarely move (3-5% annual turnover vs 50% for apartments) due to relocation costs.</li>
      <li><strong>Low Operating Costs:</strong> No structures to maintain - tenants own homes. Operating expenses typically 30-40% vs 50%+ for apartments.</li>
      <li><strong>Affordable Housing Demand:</strong> 22 million Americans live in manufactured housing - strong demographic tailwind.</li>
      <li><strong>Recession Resistant:</strong> People downsize to mobile homes during recessions - counter-cyclical demand.</li>
      <li><strong>Lot Rent Model:</strong> Landlord provides land, utilities, roads - tenant owns and maintains home structure.</li>
      <li><strong>Forced Appreciation:</strong> Increase NOI through better management, fill vacant lots, raise rents - value increases dollar for dollar.</li>
    </ul>

    <h3>Mobile Home Park Types</h3>
    <ul>
      <li><strong>Land-Lease Parks:</strong> Tenants own homes, pay lot rent - most common and investor-preferred model.</li>
      <li><strong>POH (Park Owned Homes):</strong> Park owns and rents homes - higher returns but more management intensive.</li>
      <li><strong>All-Age Communities:</strong> No age restrictions - broadest tenant pool, working-class families.</li>
      <li><strong>55+ Senior Communities:</strong> Age-restricted, lower turnover, cleaner parks, but limited buyer pool.</li>
      <li><strong>RV Parks:</strong> Short-term or seasonal rentals - different business model with transient tenants.</li>
    </ul>

    <h3>Key Performance Metrics</h3>
    <ul>
      <li><strong>Lot Rent:</strong> $200-600/month depending on location, amenities, and utilities included.</li>
      <li><strong>Occupancy Rate:</strong> Target 85-95% - vacant lots can be filled by bringing in used homes.</li>
      <li><strong>Lot Utilization:</strong> Some parks have unused land that can be developed into additional lots.</li>
      <li><strong>Operating Expense Ratio:</strong> Best-in-class parks run at 30-40% of gross income.</li>
      <li><strong>Cap Rates:</strong> Range from 7-12% depending on park quality, location, and occupancy.</li>
      <li><strong>Annual Rent Increases:</strong> $10-25 per lot annually (CPI + 1-2%) compounds wealth over time.</li>
    </ul>

    <h3>Operating Expenses Breakdown</h3>
    <ul>
      <li><strong>Property Management (8-12%):</strong> On-site manager or regional manager, rent collection, maintenance coordination.</li>
      <li><strong>Property Taxes (10-20%):</strong> Often lower than apartments since improvements (homes) are owned by tenants.</li>
      <li><strong>Water & Sewer (10-20%):</strong> Usually passed through to tenants but park may pay master meter.</li>
      <li><strong>Repairs & Maintenance (5-10%):</strong> Roads, common areas, landscaping - no home interiors.</li>
      <li><strong>Insurance (2-4%):</strong> Liability and property coverage for land and infrastructure only.</li>
      <li><strong>Utilities (3-8%):</strong> Street lighting, office utilities, common area electricity.</li>
      <li><strong>Administrative (2-4%):</strong> Accounting, legal, permits, licenses.</li>
    </ul>

    <h3>Value-Add Opportunities</h3>
    <ul>
      <li><strong>Fill Vacant Lots:</strong> Bring in used homes ($10,000-$25,000) and rent or sell on contract - $200-400/month income per lot.</li>
      <li><strong>Raise Below-Market Rents:</strong> Many mom-and-pop parks charge $50-150 below market - gradual increases boost NOI.</li>
      <li><strong>Add Amenities:</strong> Playground, laundry facilities, clubhouse justify $25-50 monthly rent increases.</li>
      <li><strong>Separate Utilities:</strong> Install sub-meters to bill tenants directly for water/sewer - reduces operating expenses.</li>
      <li><strong>Improve Management:</strong> Implement professional systems, reduce delinquency, enforce rules for cleaner park.</li>
      <li><strong>Add Storage:</strong> Rent storage sheds or boat/RV parking spaces for additional income.</li>
      <li><strong>Infill Development:</strong> If zoning allows, add lots on underutilized land (costs $15,000-$30,000 per lot).</li>
    </ul>

    <h3>Due Diligence Considerations</h3>
    <ul>
      <li><strong>Infrastructure:</strong> Inspect roads, water lines, sewer system, electrical - major repairs can cost $100,000+.</li>
      <li><strong>Zoning Compliance:</strong> Verify park is legally conforming - non-conforming parks can't expand or rebuild.</li>
      <li><strong>Environmental:</strong> Test for underground storage tanks, contamination from old septic systems.</li>
      <li><strong>Tenant Agreements:</strong> Review lot rental agreements, park rules, rent roll, delinquency rates.</li>
      <li><strong>Title Issues:</strong> Ensure homes are tenant-owned with clear titles - park shouldn't own abandoned homes.</li>
      <li><strong>Market Rent Analysis:</strong> Survey competing parks to verify current rents vs market rates.</li>
    </ul>

    <h3>Financing Mobile Home Parks</h3>
    <ul>
      <li><strong>Commercial Loans:</strong> 25-30% down, 20-25 year amortization, rates similar to apartments.</li>
      <li><strong>Seller Financing:</strong> Common in MHP sales - negotiate 10-15% down with owner carry.</li>
      <li><strong>Agency Debt (Fannie Mae):</strong> Lowest rates for stabilized parks with strong occupancy and financials.</li>
      <li><strong>Community Banks:</strong> Local banks familiar with parks often provide best terms.</li>
      <li><strong>Private Money:</strong> For value-add parks with high vacancy, bridge loans at 10-14% until stabilized.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter total number of lots, lot rent, occupancy rate, park-owned homes income, operating expense ratio, purchase price, and financing terms. The calculator computes gross income, NOI, cap rate, cash flow, DSCR, and cash-on-cash return to evaluate your mobile home park investment.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalLots',
        label: 'Total Number of Lots',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'lotRent',
        label: 'Monthly Lot Rent ($)',
        type: 'number',
        defaultValue: 350,
      },
      {
        name: 'occupancyRate',
        label: 'Occupancy Rate (%)',
        type: 'number',
        defaultValue: 90,
      },
      {
        name: 'parkOwnedHomes',
        label: 'Number of Park-Owned Homes',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'homeRent',
        label: 'Monthly Rent per POH (Park-Owned Home) ($)',
        type: 'number',
        defaultValue: 600,
      },
      {
        name: 'otherMonthlyIncome',
        label: 'Other Monthly Income (Laundry, Storage, etc.) ($)',
        type: 'number',
        defaultValue: 800,
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
        defaultValue: 6.75,
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
      const { totalLots, lotRent, occupancyRate, parkOwnedHomes, homeRent, otherMonthlyIncome, operatingExpenseRatio, purchasePrice, downPayment, interestRate, loanTerm } = values;
      
      const occupiedLots = Math.round(totalLots * (occupancyRate / 100));
      const monthlyLotIncome = occupiedLots * lotRent;
      const monthlyPOHIncome = parkOwnedHomes * homeRent;
      const totalMonthlyIncome = monthlyLotIncome + monthlyPOHIncome + otherMonthlyIncome;
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
      const incomePerLot = annualGrossIncome / totalLots;

      return [
        { label: 'Occupied Lots', value: occupiedLots.toString() },
        { label: 'Monthly Lot Rent Income', value: monthlyLotIncome.toFixed(2), isCurrency: true },
        { label: 'Monthly POH Income', value: monthlyPOHIncome.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Income', value: totalMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Income per Lot (Annual)', value: incomePerLot.toFixed(2), isCurrency: true },
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
