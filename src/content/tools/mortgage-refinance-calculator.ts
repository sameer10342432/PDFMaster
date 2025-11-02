import { CalculatorContent } from '@/types';

export const MORTGAGE_REFINANCE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mortgage Refinance Calculator',
  description: 'See if refinancing your mortgage is the right move. Calculate your potential savings and break-even point.',
  category: 'Mortgage',
  article: `
    <h2>Should You Refinance Your Mortgage?</h2>
    <p>Refinancing your mortgage can be a smart financial move, but it\'s not right for everyone. It involves replacing your current mortgage with a new one, typically with a lower interest rate or a different loan term. This calculator will help you determine if refinancing makes sense for your situation by calculating your potential savings and your breakeven point.</p>

    <h3>Reasons to Refinance</h3>
    <p>There are several common reasons why homeowners choose to refinance their mortgage:</p>
    <ul>
      <li><strong>Lower Interest Rate:</strong> If interest rates have dropped since you got your original mortgage, you may be able to secure a lower rate and reduce your monthly payment.</li>
      <li><strong>Shorter Loan Term:</strong> You can switch from a 30-year mortgage to a 15-year mortgage to pay off your loan faster and save on interest, although your monthly payment will be higher.</li>
      <li><strong>Cash-Out Refinance:</strong> You can borrow more than what you owe on your current mortgage and receive the difference in cash. This can be used for home improvements, debt consolidation, or other large expenses.</li>
      <li><strong>Remove Private Mortgage Insurance (PMI):</strong> If you have built up enough equity in your home (typically 20%), you may be able to refinance to remove PMI from your monthly payment.</li>
    </ul>

    <h3>Costs of Refinancing</h3>
    <p>Refinancing is not free. You will have to pay closing costs, which are typically 2-5% of the new loan amount. These costs can include:</p>
    <ul>
      <li><strong>Application Fee:</strong> A fee to process your application.</li>
      <li><strong>Appraisal Fee:</strong> To determine the current value of your home.</li>
      <li><strong>Title Insurance:</strong> To protect the lender against any issues with the title.</li>
      <li><strong>Attorney Fees:</strong> For legal services.</li>
    </ul>

    <h3>How to Use the Mortgage Refinance Calculator</h3>
    <p>To use this calculator, you will need to provide details about your current mortgage and the terms of the new loan you are considering. The calculator will then show you:</p>
    <ul>
      <li>Your new estimated monthly payment.</li>
      <li>Your monthly and lifetime savings.</li>
      <li>Your breakeven point – the point at which your savings from refinancing have covered the costs.</li>
    </ul>
    <p>This information will help you make an informed decision about whether refinancing is the right choice for you.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'currentLoanAmount',
        label: 'Current Loan Amount',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'currentInterestRate',
        label: 'Current Interest Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'currentTerm',
        label: 'Remaining Term (Years)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'newInterestRate',
        label: 'New Interest Rate (%)',
        type: 'number',
        defaultValue: 4.5,
      },
      {
        name: 'newTerm',
        label: 'New Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'refinanceCosts',
        label: 'Refinance Closing Costs',
        type: 'number',
        defaultValue: 5000,
      },
    ],
    calculate: (values) => {
      const { currentLoanAmount, currentInterestRate, currentTerm, newInterestRate, newTerm, refinanceCosts } = values;

      // Current Mortgage
      const currentMonthlyInterestRate = currentInterestRate / 100 / 12;
      const currentNumberOfPayments = currentTerm * 12;
      const currentMonthlyPayment = currentLoanAmount * (currentMonthlyInterestRate * Math.pow(1 + currentMonthlyInterestRate, currentNumberOfPayments)) / (Math.pow(1 + currentMonthlyInterestRate, currentNumberOfPayments) - 1);

      // New Mortgage
      const newMonthlyInterestRate = newInterestRate / 100 / 12;
      const newNumberOfPayments = newTerm * 12;
      const newMonthlyPayment = currentLoanAmount * (newMonthlyInterestRate * Math.pow(1 + newMonthlyInterestRate, newNumberOfPayments)) / (Math.pow(1 + newMonthlyInterestRate, newNumberOfPayments) - 1);

      const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
      const breakevenPoint = refinanceCosts / monthlySavings;

      return [
        { label: 'New Monthly Payment', value: newMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'Breakeven Point (Months)', value: breakevenPoint.toFixed(1) },
      ];
    },
  },
};