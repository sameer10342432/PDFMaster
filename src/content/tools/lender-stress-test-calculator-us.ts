import { CalculatorContent } from '@/types';

export const LENDER_STRESS_TEST_CALCULATOR_US_CONTENT: CalculatorContent = {
  title: 'Lender Stress Test Calculator (US Version)',
  description: 'Calculate if you can afford your mortgage under lender stress test scenarios with higher interest rates',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'lender-stress-test-calculator-us',
  article: {
    title: "Understanding Lender Stress Tests in the US",
    content: `
    <h2>What is a Lender Stress Test?</h2>
    <p>A lender stress test evaluates whether you can still afford your mortgage if interest rates rise or your financial situation changes. While not federally mandated in the US like Canada, many lenders use internal stress tests to assess borrower risk.</p>
    
    <h3>Why Lenders Use Stress Tests</h3>
    <ul>
      <li><strong>Risk Management:</strong> Protect against defaults during rate increases</li>
      <li><strong>ARM Protection:</strong> Ensure borrowers can handle rate adjustments</li>
      <li><strong>Economic Uncertainty:</strong> Account for potential job loss or income reduction</li>
      <li><strong>Regulatory Compliance:</strong> Meet internal risk management standards</li>
      <li><strong>Portfolio Quality:</strong> Maintain low default rates</li>
    </ul>
    
    <h3>Common Stress Test Scenarios</h3>
    <p><strong>1. Interest Rate Stress Test</strong></p>
    <ul>
      <li>Qualify at current rate + 2% (typical buffer)</li>
      <li>Example: 6.5% actual rate → qualify at 8.5%</li>
      <li>Most common for ARMs and refinances</li>
    </ul>
    
    <p><strong>2. Payment Shock Analysis</strong></p>
    <ul>
      <li>Compare proposed payment to current housing cost</li>
      <li>Flag increases over 50% as high risk</li>
      <li>Consider rental payment vs new mortgage</li>
    </ul>
    
    <p><strong>3. DTI Stress Test</strong></p>
    <ul>
      <li>Calculate DTI at stressed interest rate</li>
      <li>Must stay under 43% (qualified mortgage) or 45% (some lenders)</li>
      <li>Ensures room for unexpected expenses</li>
    </ul>
    
    <h3>DTI Thresholds and What They Mean</h3>
    <ul>
      <li><strong>Under 36%:</strong> Excellent - Strong approval likelihood</li>
      <li><strong>36-43%:</strong> Good - Meets QM standards, likely approved</li>
      <li><strong>43-45%:</strong> Moderate - May require compensating factors</li>
      <li><strong>45-50%:</strong> High - Portfolio/non-QM loan likely required</li>
      <li><strong>Over 50%:</strong> Very High - Approval unlikely without significant assets</li>
    </ul>
    
    <h3>Who Should Run a Stress Test?</h3>
    <ul>
      <li><strong>ARM Borrowers:</strong> Prepare for rate adjustments after initial period</li>
      <li><strong>High DTI Borrowers:</strong> Near 43% threshold need buffer assessment</li>
      <li><strong>First-Time Buyers:</strong> Understand true affordability beyond approval amount</li>
      <li><strong>Self-Employed:</strong> Income volatility requires extra cushion</li>
      <li><strong>Refinancers:</strong> Ensure new payment remains affordable if rates rise</li>
    </ul>
    
    <h3>Strategies to Pass Stress Tests</h3>
    <p><strong>1. Increase Down Payment</strong></p>
    <ul>
      <li>Smaller loan = lower payment = better DTI</li>
      <li>Every $10K down reduces payment ~$50/month</li>
    </ul>
    
    <p><strong>2. Reduce Debt</strong></p>
    <ul>
      <li>Pay off credit cards and car loans before applying</li>
      <li>Even small debt reductions improve DTI significantly</li>
    </ul>
    
    <p><strong>3. Choose Fixed-Rate Mortgage</strong></p>
    <ul>
      <li>No rate adjustment risk</li>
      <li>Payment certainty for life of loan</li>
    </ul>
    
    <p><strong>4. Buy Below Maximum Approval</strong></p>
    <ul>
      <li>Just because you're approved for $500K doesn't mean you should borrow it</li>
      <li>Leave 10-20% cushion below max approval</li>
    </ul>
    
    <h3>Red Flags That Indicate Trouble</h3>
    <ul>
      <li>Stressed DTI exceeds 50%</li>
      <li>Payment increases by more than 50% from current housing cost</li>
      <li>No emergency fund remaining after down payment</li>
      <li>Variable income with minimal savings buffer</li>
      <li>Recent job change or career transition</li>
    </ul>
    
    <h3>When to Delay Your Purchase</h3>
    <p>If stress test shows:</p>
    <ul>
      <li>Inability to afford payment at +2% rate</li>
      <li>DTI exceeding 50% under stress scenario</li>
      <li>Zero financial cushion for emergencies</li>
      <li>High anxiety about making payments</li>
    </ul>
    <p><strong>Action:</strong> Wait 6-12 months to save more, reduce debt, or increase income.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Mortgage Loan Amount",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "currentInterestRate",
        label: "Current Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "stressTestBuffer",
        label: "Stress Test Rate Buffer (%)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "loanTermYears",
        label: "Loan Term (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "grossMonthlyIncome",
        label: "Gross Monthly Income",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments (excl. mortgage)",
        type: "number",
        placeholder: "800",
        defaultValue: "800",
      },
      {
        name: "propertyTaxMonthly",
        label: "Monthly Property Tax",
        type: "number",
        placeholder: "400",
        defaultValue: "400",
      },
      {
        name: "insuranceMonthly",
        label: "Monthly Insurance",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
    ],
    results: [
      { label: "Current Monthly Payment (P&I)", isCurrency: true },
      { label: "Stressed Monthly Payment (P&I)", isCurrency: true },
      { label: "Payment Increase", isCurrency: true },
      { label: "Current Total Housing Payment (PITI)", isCurrency: true },
      { label: "Stressed Total Housing Payment (PITI)", isCurrency: true },
      { label: "Current DTI Ratio", isCurrency: false },
      { label: "Stressed DTI Ratio", isCurrency: false },
      { label: "Stress Test Result", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanAmount = Number(data.loanAmount) || 0;
      const currentInterestRate = Number(data.currentInterestRate) / 100 || 0;
      const stressTestBuffer = Number(data.stressTestBuffer) / 100 || 0;
      const loanTermYears = Number(data.loanTermYears) || 30;
      const grossMonthlyIncome = Number(data.grossMonthlyIncome) || 1;
      const monthlyDebts = Number(data.monthlyDebts) || 0;
      const propertyTaxMonthly = Number(data.propertyTaxMonthly) || 0;
      const insuranceMonthly = Number(data.insuranceMonthly) || 0;
      
      const stressedInterestRate = currentInterestRate + stressTestBuffer;
      const loanTermMonths = loanTermYears * 12;
      
      // Current payment calculation
      const currentMonthlyRate = currentInterestRate / 12;
      const currentPayment = loanAmount * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, loanTermMonths)) / (Math.pow(1 + currentMonthlyRate, loanTermMonths) - 1);
      
      // Stressed payment calculation
      const stressedMonthlyRate = stressedInterestRate / 12;
      const stressedPayment = loanAmount * (stressedMonthlyRate * Math.pow(1 + stressedMonthlyRate, loanTermMonths)) / (Math.pow(1 + stressedMonthlyRate, loanTermMonths) - 1);
      
      const paymentIncrease = stressedPayment - currentPayment;
      
      const currentTotalHousingPayment = currentPayment + propertyTaxMonthly + insuranceMonthly;
      const stressedTotalHousingPayment = stressedPayment + propertyTaxMonthly + insuranceMonthly;
      
      const currentDTI = ((currentTotalHousingPayment + monthlyDebts) / grossMonthlyIncome) * 100;
      const stressedDTI = ((stressedTotalHousingPayment + monthlyDebts) / grossMonthlyIncome) * 100;
      
      let result = "";
      if (stressedDTI <= 36) {
        result = "✅ Pass - Excellent affordability cushion";
      } else if (stressedDTI <= 43) {
        result = "✅ Pass - Within QM standards";
      } else if (stressedDTI <= 45) {
        result = "⚠️ Marginal - May need compensating factors";
      } else if (stressedDTI <= 50) {
        result = "❌ High Risk - Portfolio loan likely required";
      } else {
        result = "❌ Fail - Stressed payment likely unaffordable";
      }
      
      let recommendation = "";
      if (stressedDTI <= 36) {
        recommendation = "Strong financial position. You have good room for rate increases.";
      } else if (stressedDTI <= 43) {
        recommendation = "Good position. Consider building emergency fund for rate risk.";
      } else if (stressedDTI <= 45) {
        recommendation = "Tight budget. Consider lower home price or paying down debt first.";
      } else {
        recommendation = "High risk. Strongly consider waiting to save more or reduce debt before buying.";
      }

      return [
        { label: "Current Monthly Payment (P&I)", value: `${currentPayment.toFixed(2)}`, isCurrency: true },
        { label: "Stressed Monthly Payment (P&I)", value: `${stressedPayment.toFixed(2)}`, isCurrency: true },
        { label: "Payment Increase", value: `${paymentIncrease.toFixed(2)}`, isCurrency: true },
        { label: "Current Total Housing Payment (PITI)", value: `${currentTotalHousingPayment.toFixed(2)}`, isCurrency: true },
        { label: "Stressed Total Housing Payment (PITI)", value: `${stressedTotalHousingPayment.toFixed(2)}`, isCurrency: true },
        { label: "Current DTI Ratio", value: `${currentDTI.toFixed(2)}%`, isCurrency: false },
        { label: "Stressed DTI Ratio", value: `${stressedDTI.toFixed(2)}%`, isCurrency: false },
        { label: "Stress Test Result", value: result, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
