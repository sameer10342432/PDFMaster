import { CalculatorContent } from '@/types';

export const RATE_LOCK_COST_VS_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rate Lock Cost vs. Benefit Calculator',
  description: 'Compare the cost of locking your mortgage rate versus the potential savings or risks',
  icon: '🔒',
  category: 'Buyer Tools',
  slug: 'rate-lock-cost-vs-benefit-calculator',
  metaTitle: 'Rate Lock Cost vs. Benefit Calculator | Should You Lock Your Mortgage Rate?',
  metaDescription: 'Calculate whether paying for a mortgage rate lock is worth it. Compare rate lock fees against potential rate increases to make an informed decision.',
  article: {
    title: "Understanding Rate Locks: Cost vs. Benefit Analysis",
    content: `
    <h2>What is a Mortgage Rate Lock?</h2>
    <p>A mortgage rate lock is a guarantee from your lender that your interest rate won't change between the time you receive a loan estimate and closing, as long as you close within a specified period (typically 30, 45, or 60 days).</p>
    
    <h3>How Rate Locks Work</h3>
    <p>When you lock your rate, you're protected from rate increases, but you also can't benefit from rate decreases during the lock period. Some lenders offer free rate locks for 30 days, while extended lock periods may cost 0.125% to 0.50% of the loan amount per additional 15 days.</p>
    
    <h3>Cost of Rate Locks</h3>
    <ul>
      <li><strong>Standard Lock (30 days):</strong> Usually free with most lenders</li>
      <li><strong>Extended Lock (45-60 days):</strong> 0.125% - 0.25% of loan amount</li>
      <li><strong>Long-term Lock (90+ days):</strong> 0.375% - 0.50% of loan amount</li>
    </ul>
    
    <h3>When to Lock Your Rate</h3>
    <p>Consider locking when:</p>
    <ul>
      <li>Rates are trending upward</li>
      <li>You're satisfied with the current rate</li>
      <li>You're close to closing (within 30-60 days)</li>
      <li>Market volatility is high</li>
    </ul>
    
    <h3>Benefits of Rate Locks</h3>
    <ul>
      <li><strong>Payment Certainty:</strong> Know exactly what your monthly payment will be</li>
      <li><strong>Budget Protection:</strong> Avoid payment increases due to rising rates</li>
      <li><strong>Peace of Mind:</strong> Eliminate rate anxiety during the buying process</li>
    </ul>
    
    <h3>Risks to Consider</h3>
    <ul>
      <li>If rates drop, you might miss out on better rates</li>
      <li>Lock fees add to closing costs</li>
      <li>Delays in closing may require extending the lock at additional cost</li>
    </ul>
    
    <h3>Float Down Options</h3>
    <p>Some lenders offer a "float down" option that allows you to lock in a lower rate if rates drop significantly during your lock period. This typically costs 0.25% - 0.50% of the loan amount and requires rates to drop by a minimum amount (usually 0.25% - 0.50%).</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Loan Amount ($)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "currentRate",
        label: "Current Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
        step: "0.125",
      },
      {
        name: "lockPeriod",
        label: "Lock Period (days)",
        type: "select",
        options: [
          { value: "30", label: "30 Days (Usually Free)" },
          { value: "45", label: "45 Days" },
          { value: "60", label: "60 Days" },
          { value: "90", label: "90 Days" },
        ],
        defaultValue: "45",
      },
      {
        name: "lockFeePercent",
        label: "Lock Fee (%)",
        type: "number",
        placeholder: "0.25",
        defaultValue: "0.25",
        step: "0.125",
      },
      {
        name: "expectedRateIncrease",
        label: "Expected Rate Increase (%)",
        type: "number",
        placeholder: "0.375",
        defaultValue: "0.375",
        step: "0.125",
      },
      {
        name: "loanTerm",
        label: "Loan Term (years)",
        type: "select",
        options: [
          { value: "15", label: "15 Years" },
          { value: "30", label: "30 Years" },
        ],
        defaultValue: "30",
      },
    ],
    results: [
      { label: "Lock Fee Cost", isCurrency: true },
      { label: "Monthly Payment at Current Rate", isCurrency: true },
      { label: "Monthly Payment if Rate Increases", isCurrency: true },
      { label: "Monthly Savings with Lock", isCurrency: true },
      { label: "Annual Savings with Lock", isCurrency: true },
      { label: "30-Year Total Savings", isCurrency: true },
      { label: "Break-Even Period", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanAmount = Number(data.loanAmount) || 0;
      const currentRate = Number(data.currentRate) || 0;
      const lockFeePercent = Number(data.lockFeePercent) || 0;
      const expectedRateIncrease = Number(data.expectedRateIncrease) || 0;
      const loanTerm = Number(data.loanTerm) || 30;
      
      const lockFeeCost = loanAmount * (lockFeePercent / 100);
      const newRate = currentRate + expectedRateIncrease;
      
      const monthlyRateCurrent = currentRate / 100 / 12;
      const monthlyRateNew = newRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPaymentCurrent = loanAmount * 
        (monthlyRateCurrent * Math.pow(1 + monthlyRateCurrent, numberOfPayments)) / 
        (Math.pow(1 + monthlyRateCurrent, numberOfPayments) - 1);
        
      const monthlyPaymentNew = loanAmount * 
        (monthlyRateNew * Math.pow(1 + monthlyRateNew, numberOfPayments)) / 
        (Math.pow(1 + monthlyRateNew, numberOfPayments) - 1);
      
      const monthlySavings = monthlyPaymentNew - monthlyPaymentCurrent;
      const annualSavings = monthlySavings * 12;
      const lifetimeSavings = monthlySavings * numberOfPayments;
      
      const breakEvenMonths = lockFeeCost > 0 ? lockFeeCost / monthlySavings : 0;
      const breakEvenDisplay = breakEvenMonths < 1 ? "Less than 1 month" : 
        breakEvenMonths < 12 ? `${Math.round(breakEvenMonths)} months` : 
        `${(breakEvenMonths / 12).toFixed(1)} years`;
      
      let recommendation = "";
      if (lifetimeSavings > lockFeeCost * 5) {
        recommendation = "✅ HIGHLY RECOMMENDED - Lock provides excellent value";
      } else if (lifetimeSavings > lockFeeCost * 2) {
        recommendation = "✅ RECOMMENDED - Lock is worth the cost";
      } else if (lifetimeSavings > lockFeeCost) {
        recommendation = "⚠️ MARGINAL - Lock barely justifies the cost";
      } else {
        recommendation = "❌ NOT RECOMMENDED - Lock cost exceeds potential savings";
      }

      return [
        { label: "Lock Fee Cost", value: lockFeeCost.toFixed(2), isCurrency: true },
        { label: "Monthly Payment at Current Rate", value: monthlyPaymentCurrent.toFixed(2), isCurrency: true },
        { label: "Monthly Payment if Rate Increases", value: monthlyPaymentNew.toFixed(2), isCurrency: true },
        { label: "Monthly Savings with Lock", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Annual Savings with Lock", value: annualSavings.toFixed(2), isCurrency: true },
        { label: "30-Year Total Savings", value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: "Break-Even Period", value: breakEvenDisplay, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
