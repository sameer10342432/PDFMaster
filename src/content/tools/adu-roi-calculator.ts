import { CalculatorContent } from '@/types';

export const ADU_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'ADU ROI Calculator - Accessory Dwelling Unit Investment Return Analysis',
  description: 'Calculate return on investment for building an ADU including construction costs, rental income, and property value increase',
  icon: 'Icon',
  slug: 'adu-roi-calculator',
  category: 'Investment Analysis',
  article: {
    title: 'How to Calculate ROI on Accessory Dwelling Units (ADUs) - Complete Guide',
    content: `
    <h2>What is an ADU and Why Build One?</h2>
    <p>An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot, including backyard cottages, garage conversions, basement apartments, or above-garage units. ADUs provide rental income, increase property value, house family members, and address housing shortages - making them an increasingly popular investment.</p>

    <h3>Types of ADUs</h3>
    <ul>
      <li><strong>Detached ADU:</strong> Standalone structure in backyard (most expensive: $150,000-$400,000) with highest privacy and rent potential.</li>
      <li><strong>Attached ADU:</strong> Addition to main house sharing at least one wall ($100,000-$250,000) - easier utilities connection.</li>
      <li><strong>Garage Conversion:</strong> Convert existing garage to living space ($80,000-$180,000) - most cost-effective option.</li>
      <li><strong>Above-Garage ADU:</strong> Build unit above existing garage ($120,000-$250,000) - maximizes lot utilization.</li>
      <li><strong>Basement Conversion:</strong> Finish basement as separate unit ($50,000-$120,000) - least expensive but requires separate entrance.</li>
      <li><strong>Junior ADU (JADU):</strong> Converted bedroom within main house (under $50,000) - minimal construction, shares some utilities.</li>
    </ul>

    <h3>ADU Investment Benefits</h3>
    <ul>
      <li><strong>Rental Income:</strong> Generate $1,200-$3,000+/month depending on location and size - pays mortgage or builds wealth.</li>
      <li><strong>Property Value Increase:</strong> ADUs add 20-35% to property value - often more than construction cost.</li>
      <li><strong>Mortgage Helper:</strong> Offset mortgage payments by renting ADU - qualify for larger home purchase.</li>
      <li><strong>Flexibility:</strong> Rent on Airbnb, house family, use as home office, or age-in-place option for parents.</li>
      <li><strong>Tax Benefits:</strong> Depreciation, expense deductions, home office deductions (consult tax professional).</li>
      <li><strong>Recession Hedge:</strong> Additional income stream during economic downturns.</li>
    </ul>

    <h3>ADU Construction Costs</h3>
    <ul>
      <li><strong>Per Square Foot Cost:</strong> $200-$500/sq ft depending on finishes, location, complexity.</li>
      <li><strong>Design & Permits:</strong> $10,000-$30,000 for architect, engineer, permit fees (3-8% of project cost).</li>
      <li><strong>Foundation:</strong> $15,000-$50,000 for new foundation (not needed for conversions).</li>
      <li><strong>Framing & Structure:</strong> $40,000-$120,000 for walls, roof, windows, doors.</li>
      <li><strong>Systems:</strong> $25,000-$60,000 for plumbing, electrical, HVAC installation.</li>
      <li><strong>Interior Finishes:</strong> $30,000-$80,000 for kitchen, bathroom, flooring, paint.</li>
      <li><strong>Exterior & Landscaping:</strong> $10,000-$30,000 for siding, deck, pathways, landscaping.</li>
      <li><strong>Utility Connection Fees:</strong> $5,000-$20,000 for water, sewer, electric service upgrades.</li>
    </ul>

    <h3>Financing Your ADU</h3>
    <ul>
      <li><strong>Home Equity Line of Credit (HELOC):</strong> Borrow against home equity, interest-only payments, flexible draws - most common option.</li>
      <li><strong>Cash-Out Refinance:</strong> Refinance mortgage for higher amount, use cash for ADU - locks in fixed rate.</li>
      <li><strong>Construction Loan:</strong> Short-term loan during construction, converts to permanent financing after completion.</li>
      <li><strong>Personal Loan:</strong> Unsecured loan for smaller ADUs ($50,000-$100,000) - faster approval but higher rates.</li>
      <li><strong>FHA 203(k) Renovation Loan:</strong> Finance purchase and ADU construction in one loan for new buyers.</li>
      <li><strong>Fannie Mae HomeStyle Renovation:</strong> Conventional loan option for ADU construction with purchase.</li>
    </ul>

    <h3>ADU Rental Income Potential</h3>
    <ul>
      <li><strong>Long-Term Rental:</strong> $1,200-$3,000+/month based on location, size, amenities - stable income, less management.</li>
      <li><strong>Short-Term Rental (Airbnb):</strong> Can earn 1.5-2x long-term rent but more management intensive - check local regulations.</li>
      <li><strong>Corporate Housing:</strong> Furnished units for business travelers - premium rates ($3,000-$6,000/month).</li>
      <li><strong>Student Housing:</strong> Near universities, rent by room or entire unit - high demand, turnover.</li>
      <li><strong>Senior Housing:</strong> Rent to retirees seeking downsized living - lower turnover, responsible tenants.</li>
    </ul>

    <h3>Maximizing ADU ROI</h3>
    <ul>
      <li><strong>Right-Size the Unit:</strong> 500-850 sq ft sweet spot - balance cost vs rent potential.</li>
      <li><strong>Choose Efficient Layout:</strong> Open floor plan, efficient kitchen, quality finishes attract premium rent.</li>
      <li><strong>Plan for Utilities:</strong> Separate meters allow tenant to pay utilities, increasing your net income.</li>
      <li><strong>Prefab/Modular ADUs:</strong> Can reduce costs 15-30% vs traditional construction with faster build times.</li>
      <li><strong>DIY Where Possible:</strong> Handle permits, design, landscaping yourself to save 10-20%.</li>
      <li><strong>Consider Airbnb Potential:</strong> Design for short-term rental flexibility - separate entrance, parking, privacy.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your ADU construction cost, expected monthly rental income, property value increase, financing terms, and holding period. The calculator computes your annual cash flow, total returns including appreciation, cash-on-cash return, and overall ROI to help you evaluate whether building an ADU makes financial sense.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'constructionCost',
        label: 'Total ADU Construction Cost ($)',
        type: 'number',
        defaultValue: 180000,
      },
      {
        name: 'monthlyRent',
        label: 'Expected Monthly Rental Income ($)',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Expenses (Utilities, Maintenance, etc.) ($)',
        type: 'number',
        defaultValue: 250,
      },
      {
        name: 'propertyValueIncrease',
        label: 'Property Value Increase from ADU ($)',
        type: 'number',
        defaultValue: 220000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment / Cash Invested ($)',
        type: 'number',
        defaultValue: 180000,
      },
      {
        name: 'loanAmount',
        label: 'Loan Amount (if financing) ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%) (if financing)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years) (if financing)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'holdingPeriod',
        label: 'Expected Holding Period (Years)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [],
    calculate: (values) => {
      const { constructionCost, monthlyRent, monthlyExpenses, propertyValueIncrease, downPayment, loanAmount, interestRate, loanTerm, holdingPeriod } = values;
      
      const monthlyNetIncome = monthlyRent - monthlyExpenses;
      const annualNetIncome = monthlyNetIncome * 12;
      
      let annualDebtService = 0;
      let totalLoanPayments = 0;
      
      if (loanAmount > 0) {
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        annualDebtService = monthlyPayment * 12;
        totalLoanPayments = annualDebtService * Math.min(holdingPeriod, loanTerm);
      }
      
      const annualCashFlow = annualNetIncome - annualDebtService;
      const totalCashFlow = annualCashFlow * holdingPeriod;
      
      const totalReturn = totalCashFlow + propertyValueIncrease;
      const netProfit = totalReturn - downPayment;
      const roi = (netProfit / downPayment) * 100;
      const annualizedROI = roi / holdingPeriod;
      const cashOnCash = loanAmount > 0 ? (annualCashFlow / downPayment) * 100 : (annualNetIncome / downPayment) * 100;
      
      const paybackPeriod = downPayment / (annualCashFlow > 0 ? annualCashFlow : annualNetIncome);

      return [
        { label: 'Monthly Net Rental Income', value: monthlyNetIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Net Rental Income', value: annualNetIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Annual Cash Flow', value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: `Total Cash Flow (${holdingPeriod} Years)`, value: totalCashFlow.toFixed(2), isCurrency: true },
        { label: 'Property Value Increase', value: propertyValueIncrease.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'Total ROI', value: `${roi.toFixed(2)}%` },
        { label: 'Annualized ROI', value: `${annualizedROI.toFixed(2)}%` },
        { label: 'Cash-on-Cash Return', value: `${cashOnCash.toFixed(2)}%` },
        { label: 'Payback Period', value: `${paybackPeriod.toFixed(1)} years` },
      ];
    },
  },
};
