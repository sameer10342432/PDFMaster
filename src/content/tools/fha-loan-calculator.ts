import { CalculatorContent } from '@/types';

export const FHA_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'FHA Loan Calculator',
  description: 'Calculate your FHA loan monthly payment with down payment as low as 3.5%',
  slug: 'fha-loan-calculator',
  icon: '🏡',
  category: 'Basic Calculators',
  metaTitle: 'FHA Loan Calculator - Calculate FHA Mortgage Payments with Low Down Payment',
  metaDescription: 'Free FHA loan calculator to estimate your monthly mortgage payment, including MIP, with down payment as low as 3.5%. Perfect for first-time homebuyers.',
  article: {
    title: 'Understanding FHA Loans',
    content: `
    <h2>What is an FHA Loan?</h2>
    <p>An FHA (Federal Housing Administration) loan is a government-backed mortgage designed to make homeownership more accessible for first-time buyers and those with lower credit scores. FHA loans are popular because they require lower down payments and have more flexible credit requirements compared to conventional loans.</p>
    
    <h3>Key Benefits of FHA Loans</h3>
    <ul>
      <li><strong>Low Down Payment:</strong> As little as 3.5% for borrowers with credit scores of 580 or higher</li>
      <li><strong>Lower Credit Requirements:</strong> Accept credit scores as low as 500 with a 10% down payment</li>
      <li><strong>Competitive Interest Rates:</strong> Often lower rates compared to conventional loans</li>
      <li><strong>Gift Funds Allowed:</strong> Down payment can come from family gifts or grants</li>
      <li><strong>Assumable Loans:</strong> FHA loans can be transferred to buyers when selling your home</li>
    </ul>

    <h3>FHA Loan Requirements</h3>
    <p>To qualify for an FHA loan, you must meet these basic requirements:</p>
    <ul>
      <li>Minimum credit score of 500-580 depending on down payment amount</li>
      <li>Debt-to-income ratio typically below 43%</li>
      <li>Primary residence requirement (not for investment properties)</li>
      <li>Employment verification and steady income</li>
      <li>Property must meet FHA appraisal standards</li>
    </ul>

    <h3>Understanding FHA Mortgage Insurance (MIP)</h3>
    <p>FHA loans require two types of mortgage insurance premiums:</p>
    <ul>
      <li><strong>Upfront MIP:</strong> 1.75% of the loan amount, typically rolled into the loan</li>
      <li><strong>Annual MIP:</strong> 0.45% to 1.05% of the loan amount, divided into monthly payments</li>
    </ul>
    <p>For loans with down payments less than 10%, MIP is required for the life of the loan. With 10% or more down, MIP is required for 11 years.</p>

    <h3>How to Use This FHA Loan Calculator</h3>
    <p>Enter the following information to calculate your estimated FHA loan payment:</p>
    <ul>
      <li><strong>Home Price:</strong> The purchase price of the property</li>
      <li><strong>Down Payment Percentage:</strong> Typically 3.5% to 10%</li>
      <li><strong>Interest Rate:</strong> The annual interest rate on your FHA loan</li>
      <li><strong>Loan Term:</strong> Usually 15 or 30 years</li>
      <li><strong>Credit Score:</strong> Affects your MIP rate</li>
      <li><strong>Property Taxes:</strong> Annual property tax amount</li>
      <li><strong>Home Insurance:</strong> Annual homeowners insurance premium</li>
    </ul>

    <h3>FHA Loan Limits 2024</h3>
    <p>FHA loan limits vary by county and property type. For 2024, the standard limit for most areas is $498,257 for single-family homes, while high-cost areas can go up to $1,149,825.</p>

    <h3>Is an FHA Loan Right for You?</h3>
    <p>FHA loans are ideal if you:</p>
    <ul>
      <li>Are a first-time homebuyer with limited savings for down payment</li>
      <li>Have a credit score below 620</li>
      <li>Want lower interest rates and flexible qualification requirements</li>
      <li>Plan to live in the property as your primary residence</li>
    </ul>
    <p>However, consider that FHA loans require mortgage insurance for the life of the loan if you put down less than 10%, which can increase your monthly payment compared to conventional loans once you build 20% equity.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: 650,
      },
      {
        name: 'propertyTax',
        label: 'Annual Property Tax ($)',
        type: 'number',
        defaultValue: 3600,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Principal & Interest', isCurrency: true },
      { label: 'Monthly MIP', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Upfront MIP', isCurrency: true },
      { label: 'Total Loan Amount', isCurrency: true },
      { label: 'Down Payment Amount', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, downPaymentPercent, interestRate, loanTerm, creditScore, propertyTax, homeInsurance } = values;
      
      const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
      const loanAmount = homePrice - downPaymentAmount;
      
      const upfrontMIP = loanAmount * 0.0175;
      const totalLoanAmount = loanAmount + upfrontMIP;
      
      let annualMIPRate = 0.0085;
      if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
        annualMIPRate = loanAmount <= 625000 ? 0.008 : 0.008;
      } else if (downPaymentPercent >= 10) {
        annualMIPRate = loanAmount <= 625000 ? 0.0055 : 0.0055;
      }
      
      const monthlyMIP = (loanAmount * annualMIPRate) / 12;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = totalLoanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const monthlyPropertyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      
      const totalMonthlyPayment = principalAndInterest + monthlyMIP + monthlyPropertyTax + monthlyInsurance;

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Principal & Interest', value: principalAndInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly MIP', value: monthlyMIP.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Upfront MIP', value: upfrontMIP.toFixed(2), isCurrency: true },
        { label: 'Total Loan Amount', value: totalLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Down Payment Amount', value: downPaymentAmount.toFixed(2), isCurrency: true },
      ];
    },
  },
};
