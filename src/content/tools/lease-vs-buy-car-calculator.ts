import { CalculatorContent } from '@/types';

export const LEASE_VS_BUY_CAR_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Lease vs. Buy Car Calculator',
  description: 'Compare the costs of leasing vs. buying a car. Make an informed decision for your next vehicle.',
  category: 'Financial',
  icon: 'Icon',
  slug: 'lease-vs-buy-car-calculator',
  article: {
    title: 'Should You Lease or Buy a Car?',
    content: `
    <h2>Should You Lease or Buy a Car?</h2>
    <p>Deciding whether to lease or buy a car is a major financial decision. Both options have their advantages and disadvantages, and the best choice depends on your driving habits, financial situation, and personal preferences. This calculator will help you compare the long-term costs of leasing and buying a car.</p>

    <h3>The Basics of Leasing</h3>
    <p>When you lease a car, you are essentially renting it for a fixed period of time, usually 2-4 years. You make monthly payments, and at the end of the lease term, you return the car to the dealership. Key aspects of leasing include:</p>
    <ul>
      <li><strong>Lower Monthly Payments:</strong> Lease payments are typically lower than loan payments for the same car.</li>
      <li><strong>Mileage Limits:</strong> Leases come with annual mileage limits, and you will have to pay a fee if you exceed them.</li>
      <li><strong>Wear and Tear:</strong> You are responsible for keeping the car in good condition, and you may have to pay for any excess wear and tear when you return it.</li>
      <li><strong>No Equity:</strong> At the end of the lease, you have no ownership stake in the car.</li>
    </ul>

    <h3>The Basics of Buying</h3>
    <p>When you buy a car, you are financing the purchase with a loan. You make monthly payments, and at the end of the loan term, you own the car outright. Key aspects of buying include:</p>
    <ul>
      <li><strong>Higher Monthly Payments:</strong> Loan payments are generally higher than lease payments.</li>
      <li><strong>Ownership:</strong> You are building equity in the car with each payment, and you can sell or trade it in at any time.</li>
      <li><strong>No Mileage Limits:</strong> You can drive as much as you want without penalty.</li>
      <li><strong>Maintenance:</strong> You are responsible for all maintenance and repairs, which can become more expensive as the car gets older.</li>
    </ul>

    <h3>How to Use the Lease vs. Buy Calculator</h3>
    <p>This calculator will help you compare the total costs of leasing and buying a car over a specified period. You will need to provide information about:</p>
    <ul>
      <li>The car\'s price.</li>
      <li>The terms of the lease (monthly payment, down payment, lease term).</li>
      <li>The terms of the loan (interest rate, loan term, down payment).</li>
      <li>The estimated value of the car at the end of the period (for the buying option).</li>
    </ul>
    <p>The calculator will then show you a side-by-side comparison of the total costs, helping you make a more informed decision.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'carPrice',
        label: 'Car Price',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'leaseTerm',
        label: 'Lease Term (Months)',
        type: 'number',
        defaultValue: 36,
      },
      {
        name: 'leaseDownPayment',
        label: 'Lease Down Payment',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'leaseMonthlyPayment',
        label: 'Lease Monthly Payment',
        type: 'number',
        defaultValue: 350,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Months)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'loanInterestRate',
        label: 'Loan Interest Rate (%)',
        type: 'number',
        defaultValue: 4.5,
      },
      {
        name: 'loanDownPayment',
        label: 'Loan Down Payment',
        type: 'number',
        defaultValue: 4000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { carPrice, leaseTerm, leaseDownPayment, leaseMonthlyPayment, loanTerm, loanInterestRate, loanDownPayment } = values;
      
      // Leasing Costs
      const totalLeaseCost = leaseDownPayment + (leaseMonthlyPayment * leaseTerm);

      // Buying Costs
      const loanAmount = carPrice - loanDownPayment;
      const monthlyInterestRate = loanInterestRate / 100 / 12;
      const loanMonthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) / (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
      const totalLoanCost = loanDownPayment + (loanMonthlyPayment * loanTerm);

      return [
        { label: `Total Cost of Leasing over ${leaseTerm} months`, value: totalLeaseCost.toFixed(2), isCurrency: true },
        { label: `Total Cost of Buying over ${loanTerm} months`, value: totalLoanCost.toFixed(2), isCurrency: true },
        { label: 'Monthly Loan Payment', value: loanMonthlyPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};