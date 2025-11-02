import { CalculatorContent } from '@/types';

export const NET_OPERATING_INCOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Net Operating Income (NOI) Calculator',
  description: 'Calculate the net operating income (NOI) of a property. A key metric for evaluating rental property investments.',
  category: 'Investing',
  article: `
    <h2>What is Net Operating Income (NOI)?</h2>
    <p>Net Operating Income (NOI) is a calculation used to analyze the profitability of income-generating real estate investments. NOI is equal to all revenue from the property, minus all reasonably necessary operating expenses. NOI is a before-tax figure; it excludes principal and interest payments on loans, capital expenditures, depreciation, and amortization.</p>

    <h3>Why is NOI Important?</h3>
    <p>NOI is a crucial metric for real estate investors for several reasons:</p>
    <ul>
      <li><strong>Profitability Analysis:</strong> It provides a clear picture of a property\'s ability to generate positive cash flow from its operations.</li>
      <li><strong>Property Valuation:</strong> NOI is used in the income approach to valuation, where the NOI is divided by the capitalization rate to determine the property\'s value.</li>
      <li><strong>Loan Underwriting:</strong> Lenders use NOI to assess a property\'s income-producing potential and to determine the loan amount the property can support.</li>
    </ul>

    <h3>How to Calculate NOI</h3>
    <p>The formula for NOI is:</p>
    <p><strong>NOI = Gross Operating Income - Operating Expenses</strong></p>
    
    <h4>Gross Operating Income (GOI)</h4>
    <p>GOI is the total potential income a property can generate, less vacancy and credit losses. It includes:</p>
    <ul>
      <li><strong>Gross Potential Rent:</strong> The total rent that would be collected if the property were 100% occupied.</li>
      <li><strong>Other Income:</strong> Income from sources like parking fees, laundry facilities, and vending machines.</li>
      <li><strong>Vacancy and Credit Losses:</strong> An allowance for periods when units are vacant or tenants fail to pay rent.</li>
    </ul>

    <h4>Operating Expenses</h4>
    <p>Operating expenses are the day-to-day costs of running the property. They include:</p>
    <ul>
      <li>Property Taxes</li>
      <li>Insurance</li>
      <li>Utilities</li>
      <li>Repairs and Maintenance</li>
      <li>Property Management Fees</li>
      <li>Administrative Expenses</li>
    </ul>
    <p>It is important to note that operating expenses do not include debt service (principal and interest payments), capital expenditures (e.g., a new roof), or income taxes.</p>

    <h3>How to Use the NOI Calculator</h3>
    <p>This calculator will help you determine the NOI of a property. You will need to provide the property\'s gross rental income and a breakdown of its operating expenses. The calculator will then compute the NOI, giving you a key indicator of the property\'s financial performance.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'grossRentalIncome',
        label: 'Gross Rental Income',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'propertyTaxes',
        label: 'Annual Property Taxes',
        type: 'number',
        defaultValue: 4000,
      },
      {
        name: 'insurance',
        label: 'Annual Insurance',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'maintenance',
        label: 'Annual Maintenance & Repairs',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'managementFees',
        label: 'Annual Property Management Fees',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'otherExpenses',
        label: 'Other Annual Operating Expenses',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    calculate: (values) => {
      const { grossRentalIncome, vacancyRate, propertyTaxes, insurance, maintenance, managementFees, otherExpenses } = values;
      const effectiveGrossIncome = grossRentalIncome * (1 - vacancyRate / 100);
      const totalOperatingExpenses = propertyTaxes + insurance + maintenance + managementFees + otherExpenses;
      const noi = effectiveGrossIncome - totalOperatingExpenses;

      return [
        { label: 'Net Operating Income (NOI)', value: noi.toFixed(2), isCurrency: true },
        { label: 'Total Operating Expenses', value: totalOperatingExpenses.toFixed(2), isCurrency: true },
      ];
    },
  },
};