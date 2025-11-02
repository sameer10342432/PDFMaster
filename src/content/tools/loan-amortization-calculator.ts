import { CalculatorContent } from '@/types';

export const LOAN_AMORTIZATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Loan Amortization Calculator',
  description: 'See how your loan is paid off over time.',
  category: 'Financial',
  article: {
    content: `
    <h2>Understanding Loan Amortization</h2>
    <p>Loan amortization is the process of paying off a debt over time through regular payments. An amortization schedule is a table that details each periodic payment on a loan, showing how much of each payment goes toward interest and how much goes toward paying down the principal balance.</p>

    <h3>How Loan Amortization Works</h3>
    <p>When you first start making payments on a loan, a larger portion of your payment goes toward interest. As you continue to make payments, the amount of interest you pay each month decreases, and the amount that goes toward the principal increases. This is because the interest is calculated on the remaining loan balance, which gets smaller with each payment.</p>

    <h3>Components of an Amortization Schedule</h3>
    <p>A typical amortization schedule will include the following information for each payment period:</p>
    <ul>
      <li><strong>Payment Number:</strong> The number of the payment in the sequence.</li>
      <li><strong>Payment Amount:</strong> The total amount of the monthly payment.</li>
      <li><strong>Principal Paid:</strong> The portion of the payment that goes toward reducing the loan balance.</li>
      <li><strong>Interest Paid:</strong> The portion of the payment that covers the interest on the loan.</li>
      <li><strong>Remaining Balance:</strong> The outstanding loan balance after the payment is made.</li>
    </ul>

    <h3>Why is an Amortization Schedule Important?</h3>
    <p>An amortization schedule is a valuable tool for borrowers for several reasons:</p>
    <ul>
      <li><strong>Transparency:</strong> It provides a clear picture of how your loan payments are being applied and how your loan balance is decreasing over time.</li>
      <li><strong>Financial Planning:</strong> It can help you understand the total cost of your loan, including the total amount of interest you will pay over the life of the loan.</li>
      <li><strong>Extra Payments:</strong> By looking at the schedule, you can see how making extra payments can help you pay off your loan faster and save money on interest.</li>
    </ul>

    <h3>How to Use the Loan Amortization Calculator</h3>
    <p>To use this calculator, you will need to enter the following information:</p>
    <ul>
      <li><strong>Loan Amount:</strong> The total amount of the loan.</li>
      <li><strong>Annual Interest Rate:</strong> The annual interest rate for the loan.</li>
      <li><strong>Loan Term:</strong> The length of the loan in years.</li>
    </ul>
    <p>The calculator will then generate a complete amortization schedule for your loan, showing you the breakdown of each payment for the entire loan term.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount',
        type: 'number',
        defaultValue: 250000,
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
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm } = values;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      let remainingBalance = loanAmount;
      const schedule = [];

      for (let i = 1; i <= numberOfPayments; i++) {
        const interestPaid = remainingBalance * monthlyInterestRate;
        const principalPaid = monthlyPayment - interestPaid;
        remainingBalance -= principalPaid;

        schedule.push({
          paymentNumber: i,
          paymentAmount: monthlyPayment.toFixed(2),
          principalPaid: principalPaid.toFixed(2),
          interestPaid: interestPaid.toFixed(2),
          remainingBalance: remainingBalance.toFixed(2),
        });
      }

      return schedule;
    },
  },
};