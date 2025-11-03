import { CalculatorContent } from '@/types';

export const ADJUSTABLE_RATE_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Adjustable-Rate Mortgage (ARM) Calculator',
  description: 'Calculate the monthly payments for an adjustable-rate mortgage. See how your payments can change over time.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'adjustable-rate-mortgage-calculator',
  article: {
    title: "What is an Adjustable-Rate Mortgage (ARM)?",
    content: `
    <h2>Understanding Adjustable-Rate Mortgages (ARMs)</h2>
    <p>An adjustable-rate mortgage (ARM) is a type of home loan with an interest rate that can change over time. ARMs typically start with a lower interest rate than fixed-rate mortgages, but the rate can increase or decrease in the future based on market conditions. This calculator will help you understand how your monthly payment can change with an ARM.</p>

    <h3>How ARMs Work</h3>
    <p>ARMs have several key components:</p>
    <ul>
      <li><strong>Initial Interest Rate:</strong> The low, fixed interest rate for the initial period of the loan.</li>
      <li><strong>Initial Period:</strong> The length of time the initial interest rate is in effect, typically 3, 5, 7, or 10 years.</li>
      <li><strong>Adjustment Period:</strong> How often the interest rate can change after the initial period is over, usually annually.</li>
      <li><strong>Index:</strong> The benchmark interest rate that the ARM is tied to, such as the U.S. Prime Rate or the Secured Overnight Financing Rate (SOFR).</li>
      <li><strong>Margin:</strong> A percentage added to the index to determine the new interest rate. The margin is fixed for the life of the loan.</li>
      <li><strong>Interest Rate Caps:</strong> Limits on how much the interest rate can increase or decrease at each adjustment and over the life of the loan.</li>
    </ul>

    <h3>Types of ARMs</h3>
    <p>ARMs are often described with two numbers, such as a 5/1 ARM or a 7/1 ARM.</p>
    <ul>
      <li><strong>5/1 ARM:</strong> The interest rate is fixed for the first 5 years, and then it can adjust once per year for the remaining life of the loan.</li>
      <li><strong>7/1 ARM:</strong> The interest rate is fixed for the first 7 years, and then it can adjust once per year.</li>
    </ul>

    <h3>Pros and Cons of ARMs</h3>
    <h4>Pros:</h4>
    <ul>
      <li>Lower initial interest rate and monthly payment.</li>
      <li>Can be a good option if you plan to sell your home before the initial period ends.</li>
      <li>If interest rates fall, your monthly payment could decrease.</li>
    </ul>
    <h4>Cons:</h4>
    <ul>
      <li>Your monthly payment can increase significantly if interest rates rise.</li>
      <li>The uncertainty of future payments can make budgeting more difficult.</li>
      <li>Less suitable for long-term homeowners who prefer predictable payments.</li>
    </ul>

    <h3>How to Use the ARM Calculator</h3>
    <p>This calculator will help you estimate your monthly payments for an ARM. You will need to provide the loan amount, the initial interest rate, the loan term, and information about the ARM\'s structure, including the initial period and adjustment caps. The calculator will then show you a potential payment schedule, so you can see how your payments might change over time.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'initialRate',
        label: 'Initial Interest Rate (%)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'initialPeriod',
        label: 'Initial Fixed Period (Years)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'firstAdjustmentCap',
        label: 'First Adjustment Cap (%)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'periodicCap',
        label: 'Periodic Adjustment Cap (%)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'lifetimeCap',
        label: 'Lifetime Cap (%)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      { label: 'Initial Monthly Payment', isCurrency: true },
      { label: `Payment after first adjustment (estimated)`, isCurrency: true },
    ],
    calculate: (values) => {
      const { loanAmount, initialRate, loanTerm, initialPeriod, firstAdjustmentCap, periodicCap, lifetimeCap } = values;
      const initialMonthlyRate = initialRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      const initialPayment = loanAmount * (initialMonthlyRate * Math.pow(1 + initialMonthlyRate, numberOfPayments)) / (Math.pow(1 + initialMonthlyRate, numberOfPayments) - 1);

      // This is a simplified calculation. A full ARM calculation would require a future interest rate projection.
      // For this example, we will show the payment at the first adjustment, assuming the rate increases by the first adjustment cap.
      const firstAdjustedRate = Math.min(initialRate + firstAdjustmentCap, initialRate + lifetimeCap);
      const firstAdjustedMonthlyRate = firstAdjustedRate / 100 / 12;
      const remainingPayments = numberOfPayments - (initialPeriod * 12);
      const remainingBalance = loanAmount * (Math.pow(1 + initialMonthlyRate, numberOfPayments) - Math.pow(1 + initialMonthlyRate, initialPeriod * 12)) / (Math.pow(1 + initialMonthlyRate, numberOfPayments) - 1);
      const firstAdjustedPayment = remainingBalance * (firstAdjustedMonthlyRate * Math.pow(1 + firstAdjustedMonthlyRate, remainingPayments)) / (Math.pow(1 + firstAdjustedMonthlyRate, remainingPayments) - 1);

      return [
        { label: 'Initial Monthly Payment', value: initialPayment.toFixed(2), isCurrency: true },
        { label: `Payment after first adjustment (estimated)`, value: firstAdjustedPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};