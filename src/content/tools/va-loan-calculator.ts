import { CalculatorContent } from '@/types';

export const VA_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'VA Loan Calculator',
  description: 'Calculate VA loan payments with no down payment required for veterans and military members',
  slug: 'va-loan-calculator',
  icon: '🎖️',
  category: 'Basic Calculators',
  metaTitle: 'VA Loan Calculator - Calculate Zero Down Payment VA Mortgage for Veterans',
  metaDescription: 'Free VA loan calculator for veterans and active military. Calculate monthly payments with no down payment, no PMI, and competitive rates. Get accurate estimates instantly.',
  article: {
    title: 'Understanding VA Loans for Veterans',
    content: `
    <h2>What is a VA Loan?</h2>
    <p>A VA (Veterans Affairs) loan is a mortgage benefit available to veterans, active-duty service members, and eligible surviving spouses. These loans are guaranteed by the U.S. Department of Veterans Affairs and offer exceptional benefits that make homeownership more affordable for those who have served our country.</p>
    
    <h3>Key Benefits of VA Loans</h3>
    <ul>
      <li><strong>No Down Payment:</strong> Purchase a home with $0 down up to certain loan limits</li>
      <li><strong>No Private Mortgage Insurance (PMI):</strong> Save hundreds per month compared to conventional loans</li>
      <li><strong>Competitive Interest Rates:</strong> Often lower than conventional and FHA loans</li>
      <li><strong>Flexible Credit Requirements:</strong> More lenient credit score requirements</li>
      <li><strong>Limited Closing Costs:</strong> Sellers can pay all closing costs if negotiated</li>
      <li><strong>No Prepayment Penalties:</strong> Pay off your loan early without fees</li>
      <li><strong>Assumable Loans:</strong> Can be transferred to qualified buyers</li>
    </ul>

    <h3>VA Loan Eligibility Requirements</h3>
    <p>To be eligible for a VA loan, you must meet one of these service requirements:</p>
    <ul>
      <li>Active-duty service members with 90 consecutive days of service</li>
      <li>Veterans who served 90 consecutive days during wartime</li>
      <li>Veterans who served 181 days during peacetime</li>
      <li>More than 6 years of service in the National Guard or Reserves</li>
      <li>Surviving spouses of service members who died in service or from a service-connected disability</li>
    </ul>

    <h3>VA Funding Fee</h3>
    <p>While VA loans don't require mortgage insurance, they do require a one-time VA funding fee:</p>
    <ul>
      <li><strong>First-time use:</strong> 2.15% with no down payment (2024 rates)</li>
      <li><strong>Subsequent use:</strong> 3.3% with no down payment</li>
      <li><strong>With 5% down:</strong> 1.5% first-time, 1.5% subsequent</li>
      <li><strong>With 10% down:</strong> 1.25% first-time, 1.25% subsequent</li>
      <li><strong>Exempt:</strong> Veterans receiving disability compensation and surviving spouses</li>
    </ul>
    <p>The funding fee can be rolled into the loan amount, so you don't need to pay it upfront.</p>

    <h3>How to Use This VA Loan Calculator</h3>
    <p>Enter the following information to estimate your VA loan payment:</p>
    <ul>
      <li><strong>Home Price:</strong> The purchase price of the property</li>
      <li><strong>Down Payment:</strong> Optional (0% is allowed)</li>
      <li><strong>Interest Rate:</strong> Current VA loan rate</li>
      <li><strong>Loan Term:</strong> Typically 15 or 30 years</li>
      <li><strong>Funding Fee Type:</strong> First-time or subsequent use</li>
      <li><strong>Disability Exemption:</strong> Check if exempt from funding fee</li>
      <li><strong>Property Taxes:</strong> Annual property tax estimate</li>
      <li><strong>Home Insurance:</strong> Annual homeowners insurance</li>
    </ul>

    <h3>VA Loan Limits 2024</h3>
    <p>As of 2024, there is no maximum loan amount for veterans with full VA loan entitlement. However, veterans with reduced entitlement have limits that vary by county. Most counties have a conforming loan limit of $766,550, while high-cost areas can be higher.</p>

    <h3>VA Loan vs. Conventional Loan</h3>
    <p>VA loans typically offer better terms than conventional loans:</p>
    <ul>
      <li><strong>Down Payment:</strong> VA requires 0%, conventional requires 3-20%</li>
      <li><strong>PMI:</strong> VA has no PMI, conventional requires PMI with less than 20% down</li>
      <li><strong>Interest Rates:</strong> VA rates are often 0.25-0.5% lower</li>
      <li><strong>Credit Requirements:</strong> VA is more flexible with credit history</li>
    </ul>

    <h3>Is a VA Loan Right for You?</h3>
    <p>If you're eligible, a VA loan is almost always the best option because:</p>
    <ul>
      <li>No down payment required saves thousands upfront</li>
      <li>No PMI saves $100-200+ monthly compared to conventional loans</li>
      <li>Lower interest rates save tens of thousands over the life of the loan</li>
      <li>More flexible qualification requirements make approval easier</li>
    </ul>
    <p>Get your Certificate of Eligibility (COE) from the VA to start your VA loan process today.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPayment',
        label: 'Down Payment ($)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.25,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'firstTimeUse',
        label: 'First-Time VA Loan User',
        type: 'select',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes - First Time' },
          { value: 'no', label: 'No - Subsequent Use' }
        ]
      },
      {
        name: 'disabilityExempt',
        label: 'Exempt from Funding Fee',
        type: 'select',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'No - Pay Funding Fee' },
          { value: 'yes', label: 'Yes - Disability or Surviving Spouse' }
        ]
      },
      {
        name: 'propertyTax',
        label: 'Annual Property Tax ($)',
        type: 'number',
        defaultValue: 4200,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1400,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Principal & Interest', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'VA Funding Fee', isCurrency: true },
      { label: 'Total Loan Amount', isCurrency: true },
      { label: 'Loan Amount Before Fee', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, downPayment, interestRate, loanTerm, firstTimeUse, disabilityExempt, propertyTax, homeInsurance } = values;
      
      const loanAmountBeforeFee = homePrice - downPayment;
      const downPaymentPercent = (downPayment / homePrice) * 100;
      
      let fundingFeeRate = 0;
      if (disabilityExempt === 'no') {
        if (downPaymentPercent === 0) {
          fundingFeeRate = firstTimeUse === 'yes' ? 0.0215 : 0.033;
        } else if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
          fundingFeeRate = 0.015;
        } else if (downPaymentPercent >= 10) {
          fundingFeeRate = 0.0125;
        } else {
          fundingFeeRate = firstTimeUse === 'yes' ? 0.0215 : 0.033;
        }
      }
      
      const fundingFee = loanAmountBeforeFee * fundingFeeRate;
      const totalLoanAmount = loanAmountBeforeFee + fundingFee;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = totalLoanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const monthlyPropertyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      
      const totalMonthlyPayment = principalAndInterest + monthlyPropertyTax + monthlyInsurance;

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Principal & Interest', value: principalAndInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'VA Funding Fee', value: fundingFee.toFixed(2), isCurrency: true },
        { label: 'Total Loan Amount', value: totalLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Loan Amount Before Fee', value: loanAmountBeforeFee.toFixed(2), isCurrency: true },
      ];
    },
  },
};
