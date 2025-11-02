import { CalculatorContent } from '@/types';

export const HOME_AFFORDABILITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Affordability Calculator',
  description: 'Determine how much house you can afford. Based on your income, debt, and down payment.',
  category: 'Buying',
  article: `
    <h2>How Much House Can You Afford?</h2>
    <p>Buying a home is one of the biggest financial decisions you will ever make. Before you start looking at properties, it\'s essential to determine how much house you can realistically afford. This calculator will help you get a better understanding of your budget based on your income, monthly debts, and down payment.</p>

    <h3>Key Factors That Determine Home Affordability</h3>
    <p>Several factors come into play when determining how much you can afford to spend on a home:</p>
    <ul>
      <li><strong>Gross Annual Income:</strong> This is your total income before taxes. Lenders use this to get a baseline of your financial capacity.</li>
      <li><strong>Monthly Debts:</strong> This includes all your recurring monthly payments, such as car loans, student loans, and credit card payments. Your debt-to-income (DTI) ratio is a critical metric for lenders.</li>
      <li><strong>Down Payment:</strong> The amount of money you can put down upfront. A larger down payment can reduce your loan amount and monthly mortgage payments.</li>
      <li><strong>Interest Rate:</strong> The interest rate on your mortgage will have a significant impact on your monthly payment and the total amount you pay over the life of the loan.</li>
      <li><strong>Loan Term:</strong> The length of your loan, typically 15 or 30 years. A shorter loan term means higher monthly payments but less interest paid over time.</li>
      <li><strong>Property Taxes and Homeowners Insurance:</strong> These are ongoing costs of homeownership that are typically included in your monthly mortgage payment.</li>
    </ul>

    <h3>The 28/36 Rule</h3>
    <p>A common rule of thumb used by lenders is the 28/36 rule:</p>
    <ul>
      <li><strong>28%:</strong> Your monthly housing costs (including principal, interest, taxes, and insurance) should not exceed 28% of your gross monthly income.</li>
      <li><strong>36%:</strong> Your total monthly debt payments (including your housing costs and other debts) should not exceed 36% of your gross monthly income.</li>
    </ul>
    <p>While this is a general guideline, some lenders may allow for higher ratios, especially for borrowers with high credit scores and stable income.</p>

    <h3>How to Use the Home Affordability Calculator</h3>
    <p>To use this calculator, you will need to provide the following information:</p>
    <ul>
      <li><strong>Gross Annual Income:</strong> Your total annual income before taxes.</li>
      <li><strong>Monthly Debts:</strong> Your total monthly debt payments.</li>
      <li><strong>Down Payment:</strong> The amount you plan to put down.</li>
      <li><strong>Annual Interest Rate:</strong> An estimate of the interest rate you expect to get.</li>
      <li><strong>Loan Term:</strong> The desired length of your loan.</li>
      <li><strong>Annual Property Taxes:</strong> An estimate of the annual property taxes for the homes you are considering.</li>
      <li><strong>Annual Homeowners Insurance:</strong> An estimate of the annual homeowners insurance premium.</li>
    </ul>
    <p>The calculator will then provide you with an estimate of the maximum home price you can afford, as well as your estimated monthly mortgage payment.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'annualIncome',
        label: 'Gross Annual Income',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'monthlyDebts',
        label: 'Total Monthly Debts',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 40000,
      },
      {
        name: 'interestRate',
        label: 'Annual Interest Rate (%)',
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
        name: 'propertyTaxRate',
        label: 'Annual Property Tax Rate (%)',
        type: 'number',
        defaultValue: 1.2,
      },
      {
        name: 'homeownersInsurance',
        label: 'Annual Homeowners Insurance',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    calculate: (values) => {
      const { annualIncome, monthlyDebts, downPayment, interestRate, loanTerm, propertyTaxRate, homeownersInsurance } = values;
      const monthlyIncome = annualIncome / 12;
      const monthlyPropertyTax = (propertyTaxRate / 100 / 12);
      const monthlyInsurance = homeownersInsurance / 12;

      // Using the 28/36 rule
      const maxHousingPayment1 = monthlyIncome * 0.28;
      const maxTotalDebtPayment = monthlyIncome * 0.36;
      const maxHousingPayment2 = maxTotalDebtPayment - monthlyDebts;
      const maxMonthlyPayment = Math.min(maxHousingPayment1, maxHousingPayment2) - monthlyInsurance;

      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const maxLoanAmount = (maxMonthlyPayment * (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments));

      const affordableHomePrice = maxLoanAmount + downPayment;

      return [
        { label: 'Affordable Home Price', value: affordableHomePrice.toFixed(2), isCurrency: true },
        { label: 'Estimated Monthly Payment', value: maxMonthlyPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};