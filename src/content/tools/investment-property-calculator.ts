import { CalculatorContent } from '@/types';

export const INVESTMENT_PROPERTY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Investment Property Calculator',
  description: 'Analyze the potential of an investment property. Calculate cash flow, cap rate, and more.',
  icon: 'Icon',
  slug: 'investment-property-calculator',
  category: 'Financial',
  article: {
    title: 'How to Analyze an Investment Property',
    content: `
    <h2>How to Analyze an Investment Property</h2>
    <p>Investing in rental properties can be a powerful way to build wealth and generate passive income. However, not all properties are good investments. A thorough financial analysis is essential to ensure a property will be profitable. This calculator will help you evaluate a potential rental property investment by calculating key performance metrics.</p>

    <h3>Key Metrics for Rental Property Analysis</h3>
    <ul>
      <li><strong>Cash Flow:</strong> The amount of money you have left over each month after all expenses have been paid. Positive cash flow is the goal of most rental property investors.</li>
      <li><strong>Net Operating Income (NOI):</strong> The property\'s income after deducting operating expenses, but before deducting debt service.</li>
      <li><strong>Capitalization Rate (Cap Rate):</strong> The NOI divided by the property\'s purchase price. This metric is used to compare the profitability of different properties.</li>
      <li><strong>Cash-on-Cash Return:</strong> The annual pre-tax cash flow divided by the total amount of cash invested. This measures the return on your actual cash investment.</li>
      <li><strong>Return on Investment (ROI):</strong> A measure of the overall profitability of the investment, taking into account appreciation, loan paydown, and cash flow.</li>
    </ul>

    <h3>Estimating Income and Expenses</h3>
    <p>To accurately analyze a rental property, you need to estimate its income and expenses:</p>
    <h4>Income:</h4>
    <ul>
      <li><strong>Gross Rental Income:</strong> The total rent you collect from tenants.</li>
      <li><strong>Other Income:</strong> Income from sources like laundry, parking, or late fees.</li>
    </ul>
    <h4>Expenses:</h4>
    <ul>
      <li><strong>Mortgage Payment:</strong> Principal and interest on your loan.</li>
      <li><strong>Property Taxes:</strong> Annual taxes paid to the local government.</li>
      <li><strong>Insurance:</strong> Homeowners insurance for a rental property.</li>
      <li><strong>Vacancy:</strong> A percentage of the gross rent set aside for periods when the property is vacant.</li>
      <li><strong>Repairs and Maintenance:</strong> A percentage of the gross rent set aside for ongoing repairs and maintenance.</li>
      <li><strong>Capital Expenditures (CapEx):</strong> A percentage of the gross rent set aside for major replacements, like a new roof or HVAC system.</li>
      <li><strong>Property Management:</strong> A fee paid to a property management company, typically 8-12% of the gross rent.</li>
    </ul>

    <h3>How to Use the Investment Property Calculator</h3>
    <p>This calculator will provide a comprehensive analysis of a potential rental property investment. You will need to provide detailed information about the property\'s purchase price, financing, income, and expenses. The calculator will then compute the key performance metrics, giving you a clear picture of the property\'s financial potential.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'grossMonthlyRent',
        label: 'Gross Monthly Rent',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'maintenance',
        label: 'Maintenance (% of Rent)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'managementFee',
        label: 'Property Management Fee (% of Rent)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [],
    calculate: (values) => {
      const { purchasePrice, downPayment, interestRate, loanTerm, grossMonthlyRent, propertyTaxes, insurance, vacancyRate, maintenance, managementFee } = values;
      const downPaymentAmount = purchasePrice * (downPayment / 100);
      const loanAmount = purchasePrice - downPaymentAmount;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyMortgagePayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const grossAnnualRent = grossMonthlyRent * 12;
      const vacancyLoss = grossAnnualRent * (vacancyRate / 100);
      const effectiveGrossIncome = grossAnnualRent - vacancyLoss;
      
      const annualTaxes = propertyTaxes;
      const annualInsurance = insurance;
      const annualMaintenance = grossAnnualRent * (maintenance / 100);
      const annualManagement = grossAnnualRent * (managementFee / 100);
      const totalOperatingExpenses = annualTaxes + annualInsurance + annualMaintenance + annualManagement;

      const noi = effectiveGrossIncome - totalOperatingExpenses;
      const capRate = (noi / purchasePrice) * 100;

      const annualDebtService = monthlyMortgagePayment * 12;
      const cashFlow = noi - annualDebtService;
      const cashOnCashReturn = (cashFlow / downPaymentAmount) * 100;

      return [
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Capitalization Rate (Cap Rate)', value: `${capRate.toFixed(2)}%` },
        { label: 'Monthly Cash Flow', value: (cashFlow / 12).toFixed(2), isCurrency: true },
        { label: 'Cash on Cash Return', value: `${cashOnCashReturn.toFixed(2)}%` },
      ];
    },
  },
};