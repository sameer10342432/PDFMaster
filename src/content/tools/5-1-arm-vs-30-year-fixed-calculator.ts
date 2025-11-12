import { CalculatorContent } from '@/types';

export const ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT: CalculatorContent = {
  title: '5/1 ARM vs. 30-Year Fixed Mortgage Calculator',
  description: 'Compare a 5/1 adjustable-rate mortgage (ARM) with a traditional 30-year fixed-rate mortgage to determine which loan option saves you the most money.',
  icon: 'Icon',
  category: 'Mortgage',
  slug: '5-1-arm-vs-30-year-fixed-calculator',
  article: {
    title: "5/1 ARM vs. 30-Year Fixed Mortgage: Which is Right for You?",
    content: `
    <h2>Comparing 5/1 ARM and 30-Year Fixed Mortgages</h2>
    <p>Choosing between a 5/1 adjustable-rate mortgage (ARM) and a traditional 30-year fixed mortgage is one of the most important decisions you'll make when buying a home. This calculator helps you compare both options side by side, showing you the initial savings with an ARM and the long-term predictability of a fixed-rate loan.</p>

    <h3>What is a 5/1 ARM?</h3>
    <p>A 5/1 ARM is an adjustable-rate mortgage where the interest rate is fixed for the first 5 years, then adjusts annually (once per year) for the remaining 25 years of the loan. The initial rate is typically 0.5% to 1.5% lower than a 30-year fixed mortgage, which can result in significant savings during the fixed period.</p>

    <h3>What is a 30-Year Fixed Mortgage?</h3>
    <p>A 30-year fixed-rate mortgage maintains the same interest rate for the entire 30-year loan term. Your monthly principal and interest payment never changes, providing maximum predictability and protection from rising interest rates. This is the most popular mortgage type in the United States.</p>

    <h3>Key Differences Between 5/1 ARM and 30-Year Fixed</h3>
    <ul>
      <li><strong>Initial Interest Rate:</strong> 5/1 ARMs typically offer rates 0.5% to 1.5% lower than 30-year fixed mortgages during the first 5 years.</li>
      <li><strong>Monthly Payment Stability:</strong> 30-year fixed loans have the same payment for 360 months. 5/1 ARMs have predictable payments for 60 months, then payments adjust annually.</li>
      <li><strong>Interest Rate Risk:</strong> Fixed mortgages have zero rate risk. ARMs expose you to potential rate increases after year 5.</li>
      <li><strong>Total Interest Paid:</strong> If you stay in the home for 30 years, a 30-year fixed typically costs more in total interest. If you sell within 5-7 years, a 5/1 ARM usually saves money.</li>
      <li><strong>Qualification:</strong> The lower initial payment on a 5/1 ARM may help some borrowers qualify for a larger loan.</li>
    </ul>

    <h3>When to Choose a 5/1 ARM</h3>
    <p>A 5/1 ARM makes sense if you:</p>
    <ul>
      <li>Plan to sell or refinance within 5-7 years</li>
      <li>Expect your income to increase significantly in the future</li>
      <li>Can afford potential payment increases after year 5</li>
      <li>Want lower initial payments to invest elsewhere or pay off high-interest debt</li>
      <li>Are buying in a high-cost market and need lower monthly payments to qualify</li>
    </ul>

    <h3>When to Choose a 30-Year Fixed Mortgage</h3>
    <p>A 30-year fixed mortgage is better if you:</p>
    <ul>
      <li>Plan to stay in the home for 10+ years</li>
      <li>Value payment stability and predictability</li>
      <li>Are concerned about future interest rate increases</li>
      <li>Have a fixed or stable income</li>
      <li>Prefer the security of knowing your exact monthly payment forever</li>
    </ul>

    <h3>Understanding ARM Rate Caps</h3>
    <p>All ARMs have rate caps that limit how much your interest rate can increase:</p>
    <ul>
      <li><strong>Initial Adjustment Cap:</strong> Limits the rate increase at the first adjustment (typically 2-5%)</li>
      <li><strong>Periodic Cap:</strong> Limits rate changes at each subsequent adjustment (typically 2% per year)</li>
      <li><strong>Lifetime Cap:</strong> Maximum rate increase over the loan's life (typically 5-6% above the initial rate)</li>
    </ul>

    <h3>Break-Even Analysis</h3>
    <p>The "break-even point" is the number of years it takes for the total costs of both loans to be equal. If you plan to sell or refinance before the break-even point, the 5/1 ARM will save you money. If you stay beyond the break-even point, the 30-year fixed may be cheaper.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your loan amount, the 5/1 ARM initial rate, the 30-year fixed rate, and estimated future rates after the ARM adjusts. The calculator will show you:</p>
    <ul>
      <li>Monthly payment comparison during the initial 5-year period</li>
      <li>Estimated payments after the ARM adjusts (based on your assumptions)</li>
      <li>Total interest paid over 5 years, 10 years, and 30 years</li>
      <li>Total savings or costs with each loan option</li>
      <li>Break-even timeline</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'loanAmount',
        label: 'Loan Amount ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'armRate',
        label: '5/1 ARM Initial Rate (%)',
        type: 'number',
        defaultValue: 6.0,
      },
      {
        name: 'fixedRate',
        label: '30-Year Fixed Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'armRateAfterAdjustment',
        label: 'ARM Rate After Year 5 (Estimate %)',
        type: 'number',
        defaultValue: 7.5,
      },
      {
        name: 'yearsInHome',
        label: 'How Long You Plan to Stay (Years)',
        type: 'number',
        defaultValue: 7,
      },
    ],
    results: [
      { label: '5/1 ARM Initial Monthly Payment', isCurrency: true },
      { label: '30-Year Fixed Monthly Payment', isCurrency: true },
      { label: 'Monthly Savings with ARM (Years 1-5)', isCurrency: true },
      { label: 'ARM Payment After Adjustment (Year 6+)', isCurrency: true },
      { label: 'Total Interest Paid - 5/1 ARM', isCurrency: true },
      { label: 'Total Interest Paid - 30-Year Fixed', isCurrency: true },
      { label: 'Total Savings Over Your Timeline', isCurrency: true },
      { label: 'Recommended Option', isCurrency: false },
    ],
    calculate: (values) => {
      const { loanAmount, armRate, fixedRate, armRateAfterAdjustment, yearsInHome } = values;
      
      // 5/1 ARM calculations (initial 5 years)
      const armMonthlyRate = armRate / 100 / 12;
      const totalPayments = 30 * 12;
      const armInitialPayment = loanAmount * (armMonthlyRate * Math.pow(1 + armMonthlyRate, totalPayments)) / (Math.pow(1 + armMonthlyRate, totalPayments) - 1);
      
      // 30-Year Fixed calculations
      const fixedMonthlyRate = fixedRate / 100 / 12;
      const fixedPayment = loanAmount * (fixedMonthlyRate * Math.pow(1 + fixedMonthlyRate, totalPayments)) / (Math.pow(1 + fixedMonthlyRate, totalPayments) - 1);
      
      // Monthly savings during initial period
      const monthlySavings = fixedPayment - armInitialPayment;
      
      // ARM balance after 5 years
      let armBalance = loanAmount;
      for (let i = 0; i < 60; i++) {
        const interest = armBalance * armMonthlyRate;
        const principal = armInitialPayment - interest;
        armBalance -= principal;
      }
      
      // ARM payment after adjustment (simplified - assumes rate jumps to estimated rate)
      const adjustedArmRate = armRateAfterAdjustment / 100 / 12;
      const remainingMonths = 25 * 12;
      const armAdjustedPayment = armBalance * (adjustedArmRate * Math.pow(1 + adjustedArmRate, remainingMonths)) / (Math.pow(1 + adjustedArmRate, remainingMonths) - 1);
      
      // Calculate total interest paid based on years in home
      let armTotalInterest = 0;
      let fixedTotalInterest = 0;
      
      const monthsInHome = yearsInHome * 12;
      let armBalanceTracking = loanAmount;
      let fixedBalanceTracking = loanAmount;
      
      for (let month = 1; month <= monthsInHome; month++) {
        // ARM interest
        if (month <= 60) {
          const armInterest = armBalanceTracking * armMonthlyRate;
          armTotalInterest += armInterest;
          armBalanceTracking -= (armInitialPayment - armInterest);
        } else {
          const armInterest = armBalanceTracking * adjustedArmRate;
          armTotalInterest += armInterest;
          armBalanceTracking -= (armAdjustedPayment - armInterest);
        }
        
        // Fixed interest
        const fixedInterest = fixedBalanceTracking * fixedMonthlyRate;
        fixedTotalInterest += fixedInterest;
        fixedBalanceTracking -= (fixedPayment - fixedInterest);
      }
      
      const totalSavings = fixedTotalInterest - armTotalInterest;
      const recommendation = totalSavings > 0 ? "5/1 ARM saves you money" : "30-Year Fixed is better";
      
      return [
        { label: '5/1 ARM Initial Monthly Payment', value: armInitialPayment.toFixed(2), isCurrency: true },
        { label: '30-Year Fixed Monthly Payment', value: fixedPayment.toFixed(2), isCurrency: true },
        { label: 'Monthly Savings with ARM (Years 1-5)', value: monthlySavings.toFixed(2), isCurrency: true },
        { label: 'ARM Payment After Adjustment (Year 6+)', value: armAdjustedPayment.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid - 5/1 ARM', value: armTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid - 30-Year Fixed', value: fixedTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Total Savings Over Your Timeline', value: Math.abs(totalSavings).toFixed(2), isCurrency: true },
        { label: 'Recommended Option', value: recommendation, isCurrency: false },
      ];
    },
  },
};
