import { CalculatorContent } from '@/types';

export const RENT_VS_BUY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rent vs. Buy Calculator',
  description: 'Compare the costs of renting vs. buying a home. Make an informed decision for your housing future.',
  category: 'Buying',
  article: `
    <h2>Renting vs. Buying: Which is Right for You?</h2>
    <p>The decision to rent or buy a home is a major financial milestone. Both options have their pros and cons, and the right choice for you depends on your personal financial situation, lifestyle, and long-term goals. This calculator will help you compare the costs of renting and buying to see which makes more financial sense for you over time.</p>

    <h3>The Costs of Renting</h3>
    <p>Renting is often seen as the simpler, more flexible option. The primary costs associated with renting include:</p>
    <ul>
      <li><strong>Monthly Rent:</strong> A fixed monthly payment to your landlord.</li>
      <li><strong>Security Deposit:</strong> An upfront, refundable deposit to cover any potential damages.</li>
      <li><strong>Renter\'s Insurance:</strong> Insurance to protect your personal belongings.</li>
    </ul>

    <h3>The Costs of Buying</h3>
    <p>Buying a home involves more upfront costs and ongoing expenses, but it also offers the opportunity to build equity. The costs of buying include:</p>
    <ul>
      <li><strong>Down Payment:</strong> A significant upfront payment, typically 20% of the home\'s price to avoid PMI.</li>
      <li><strong>Closing Costs:</strong> Fees for services like appraisals, inspections, and legal work, usually 2-5% of the home\'s price.</li>
      <li><strong>Monthly Mortgage Payment:</strong> Includes principal, interest, property taxes, and homeowners insurance (PITI).</li>
      <li><strong>Maintenance and Repairs:</strong> Ongoing costs for upkeep and unexpected repairs.</li>
      <li><strong>Property Taxes:</strong> Annual taxes paid to the local government.</li>
      <li><strong>Homeowners Insurance:</strong> Insurance to protect your home and property.</li>
    </ul>

    <h3>Key Factors to Consider</h3>
    <p>When comparing renting and buying, consider the following factors:</p>
    <ul>
      <li><strong>How long you plan to stay:</strong> Buying a home is a long-term commitment. If you plan to move in a few years, renting may be a better option.</li>
      <li><strong>Your financial situation:</strong> Do you have enough saved for a down payment and closing costs? Is your income stable enough to handle a mortgage and other homeownership costs?</li>
      <li><strong>Your lifestyle:</strong> Do you want the freedom to renovate and customize your home, or do you prefer the flexibility of being able to move easily?</li>
      <li><strong>The housing market:</strong> Home prices and rent prices in your area will play a big role in your decision.</li>
    </ul>

    <h3>How to Use the Rent vs. Buy Calculator</h3>
    <p>This calculator will help you compare the total costs of renting and buying over a period of time. You will need to provide information about your expected rent, the home you are considering buying, and your financial situation. The calculator will then show you a side-by-side comparison of the costs and help you determine the breakeven point where buying becomes more financially advantageous than renting.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'monthlyRent',
        label: 'Current Monthly Rent',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'homePrice',
        label: 'Home Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment',
        type: 'number',
        defaultValue: 60000,
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
        name: 'propertyTaxRate',
        label: 'Property Tax Rate (%)',
        type: 'number',
        defaultValue: 1.2,
      },
      {
        name: 'homeownersInsurance',
        label: 'Annual Homeowners Insurance',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'maintenanceCosts',
        label: 'Annual Maintenance Costs (% of Home Price)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'timeFrame',
        label: 'Time Frame (Years)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    calculate: (values) => {
      const { monthlyRent, homePrice, downPayment, interestRate, loanTerm, propertyTaxRate, homeownersInsurance, maintenanceCosts, timeFrame } = values;
      
      // Renting Costs
      const totalRentPaid = monthlyRent * 12 * timeFrame;

      // Buying Costs
      const loanAmount = homePrice - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyMortgagePayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      const annualPropertyTax = homePrice * (propertyTaxRate / 100);
      const annualMaintenance = homePrice * (maintenanceCosts / 100);
      const totalMonthlyBuyingCost = monthlyMortgagePayment + (annualPropertyTax / 12) + (homeownersInsurance / 12) + (annualMaintenance / 12);
      const totalBuyingCost = totalMonthlyBuyingCost * 12 * timeFrame;

      return [
        { label: `Total Cost of Renting over ${timeFrame} years`, value: totalRentPaid.toFixed(2), isCurrency: true },
        { label: `Total Cost of Buying over ${timeFrame} years`, value: totalBuyingCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};