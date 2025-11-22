import { CalculatorContent } from '@/types';

export const PREPAYMENT_PENALTY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Prepayment Penalty Calculator',
  description: 'Calculate prepayment penalties when paying off your mortgage early or refinancing',
  icon: 'Icon',
  category: 'Financial Analysis',
  slug: 'prepayment-penalty-calculator',
  article: {
    title: "Understanding Mortgage Prepayment Penalties",
    content: `
    <h2>What is a Prepayment Penalty?</h2>
    <p>A prepayment penalty is a fee charged by the lender if you pay off your mortgage early—either through refinancing, selling the property, or making large extra payments. It compensates the lender for lost interest income.</p>
    
    <h3>Types of Prepayment Penalties</h3>
    <ul>
      <li><strong>Hard Prepayment Penalty:</strong> Penalty applies regardless of reason (sale, refinance, or extra payments)</li>
      <li><strong>Soft Prepayment Penalty:</strong> Penalty only applies to refinancing, not sale of property</li>
      <li><strong>Fixed Dollar Amount:</strong> Set fee (e.g., $5,000)</li>
      <li><strong>Percentage of Loan:</strong> Usually 1-5% of outstanding balance</li>
      <li><strong>Months of Interest:</strong> 3-6 months of interest payments</li>
      <li><strong>Declining Penalty:</strong> Decreases over time (e.g., 5% year 1, 3% year 2, 1% year 3)</li>
      <li><strong>Yield Maintenance:</strong> Complex formula based on rate difference and remaining term</li>
    </ul>
    
    <h3>Common Prepayment Penalty Structures</h3>
    <p><strong>80/20 Rule (Most Common):</strong></p>
    <ul>
      <li>Can prepay up to 20% of original balance per year without penalty</li>
      <li>Penalty applies to amounts above 20%</li>
      <li>Common in commercial loans</li>
    </ul>
    
    <p><strong>Sliding Scale:</strong></p>
    <ul>
      <li>Year 1: 5% of balance</li>
      <li>Year 2: 4% of balance</li>
      <li>Year 3: 3% of balance</li>
      <li>Year 4+: No penalty</li>
    </ul>
    
    <p><strong>Six Months Interest:</strong></p>
    <ul>
      <li>Penalty equals 6 months of interest</li>
      <li>Calculated on outstanding balance</li>
      <li>Common in subprime loans</li>
    </ul>
    
    <h3>Loans That Commonly Have Prepayment Penalties</h3>
    <ul>
      <li><strong>Subprime Mortgages:</strong> Higher risk borrowers</li>
      <li><strong>Commercial Loans:</strong> Investment properties, multifamily</li>
      <li><strong>Portfolio Loans:</strong> Held by lender, not sold to investors</li>
      <li><strong>No-Cost Refinances:</strong> Lender recoups costs through penalty</li>
      <li><strong>Low-Rate Specials:</strong> Below-market rates with penalties</li>
      <li><strong>Private/Hard Money Loans:</strong> Short-term bridge financing</li>
    </ul>
    
    <h3>Loans That Cannot Have Prepayment Penalties</h3>
    <ul>
      <li><strong>FHA Loans:</strong> Prohibited by federal law</li>
      <li><strong>VA Loans:</strong> Not allowed for veterans</li>
      <li><strong>USDA Loans:</strong> Rural development loans</li>
      <li><strong>Most Conventional Loans (Post-2014):</strong> Dodd-Frank restrictions</li>
      <li><strong>Higher-Priced Mortgages:</strong> Rate above APOR threshold</li>
    </ul>
    
    <h3>Legal Limits on Prepayment Penalties</h3>
    <p>Under Dodd-Frank Act (2014):</p>
    <ul>
      <li>Maximum 3-year penalty period</li>
      <li>Declining penalty required: 2% (year 1), 1% (year 2), 0% (year 3+)</li>
      <li>Not allowed on adjustable-rate mortgages</li>
      <li>Not allowed on higher-priced mortgages</li>
      <li>Must be clearly disclosed at closing</li>
    </ul>
    
    <h3>How to Check If You Have a Prepayment Penalty</h3>
    <ol>
      <li><strong>Review Loan Documents:</strong> Check promissory note and mortgage deed</li>
      <li><strong>Look for These Terms:</strong> "Prepayment," "Early Payoff," "Redemption Fee"</li>
      <li><strong>Call Your Lender:</strong> Request prepayment penalty information</li>
      <li><strong>Check Annual Statement:</strong> May disclose penalty terms</li>
      <li><strong>Review Closing Disclosure:</strong> Section H - Other Costs</li>
    </ol>
    
    <h3>Calculating the Penalty</h3>
    <p><strong>Percentage Method:</strong></p>
    <ul>
      <li>$300,000 balance × 2% = $6,000 penalty</li>
    </ul>
    
    <p><strong>Months of Interest Method:</strong></p>
    <ul>
      <li>$300,000 balance × 4.5% rate ÷ 12 = $1,125 monthly interest</li>
      <li>$1,125 × 6 months = $6,750 penalty</li>
    </ul>
    
    <p><strong>Yield Maintenance Method:</strong></p>
    <ul>
      <li>Complex: (Current Rate - Treasury Rate) × Remaining Balance × Years Remaining</li>
      <li>Designed to make lender whole on interest difference</li>
      <li>Common in commercial loans</li>
    </ul>
    
    <h3>When Prepayment Penalties Apply</h3>
    <ul>
      <li><strong>Refinancing:</strong> Most common trigger</li>
      <li><strong>Selling Property:</strong> Unless "soft" penalty</li>
      <li><strong>Large Extra Payments:</strong> Above allowed threshold</li>
      <li><strong>Loan Payoff:</strong> Winning lottery, inheritance, bonus</li>
      <li><strong>Debt Consolidation:</strong> Paying off with cash-out refi</li>
    </ul>
    
    <h3>When Penalties Don't Apply</h3>
    <ul>
      <li><strong>Small Extra Payments:</strong> Within allowed percentage (usually 20%/year)</li>
      <li><strong>Penalty Period Expired:</strong> After 1-5 years typically</li>
      <li><strong>Soft Penalty & Sale:</strong> Selling property (not refi)</li>
      <li><strong>Foreclosure:</strong> Lender can't charge penalty in foreclosure</li>
      <li><strong>Loan Assumption:</strong> Transfer to qualified buyer</li>
    </ul>
    
    <h3>Should You Pay the Penalty?</h3>
    <p>Compare penalty to savings:</p>
    <ul>
      <li><strong>Refinance Savings:</strong> Calculate lifetime interest savings</li>
      <li><strong>Break-Even Point:</strong> Months to recover penalty cost</li>
      <li><strong>Alternative:</strong> Wait until penalty expires</li>
      <li><strong>Negotiation:</strong> Some lenders will waive or reduce</li>
    </ul>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Penalty: $6,000</li>
      <li>Monthly savings from refinance: $200</li>
      <li>Break-even: 30 months (6,000 ÷ 200)</li>
      <li>If staying 30+ months, worth paying penalty</li>
    </ul>
    
    <h3>Negotiating Prepayment Penalties</h3>
    <ul>
      <li><strong>Before Origination:</strong> Negotiate no-penalty loan (may cost higher rate)</li>
      <li><strong>At Payoff:</strong> Ask lender to waive (they often will for good customers)</li>
      <li><strong>Refinance to Same Lender:</strong> Often waive penalty to keep business</li>
      <li><strong>Financial Hardship:</strong> Request waiver due to job loss, medical, etc.</li>
      <li><strong>Competitive Offer:</strong> Use competing lender's offer as leverage</li>
    </ul>
    
    <h3>State-Specific Rules</h3>
    <ul>
      <li><strong>California:</strong> Penalties limited to first 5 years</li>
      <li><strong>Texas:</strong> Home equity loans have restrictions</li>
      <li><strong>New York:</strong> Additional disclosure requirements</li>
      <li><strong>Some States:</strong> Prohibit or limit prepayment penalties on residential loans</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentBalance",
        label: "Current Loan Balance",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
      {
        name: "penaltyType",
        label: "Penalty Type",
        type: "select",
        options: [
          "Percentage of Balance",
          "Months of Interest",
          "Fixed Dollar Amount",
          "No Penalty",
          "Not Sure - Calculate Both"
        ],
        defaultValue: "Percentage of Balance",
      },
      {
        name: "penaltyPercent",
        label: "Penalty Percentage (if applicable)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "penaltyMonths",
        label: "Penalty Months of Interest (if applicable)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "fixedPenalty",
        label: "Fixed Penalty Amount (if applicable)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "newMonthlyPayment",
        label: "New Monthly Payment After Refinance",
        type: "number",
        placeholder: "1400",
        defaultValue: "1400",
      },
      {
        name: "currentMonthlyPayment",
        label: "Current Monthly Payment",
        type: "number",
        placeholder: "1600",
        defaultValue: "1600",
      },
    ],
    results: [
      { label: "Prepayment Penalty", isCurrency: true },
      { label: "Monthly Savings", isCurrency: true },
      { label: "Break-Even Point", isCurrency: false },
      { label: "Lifetime Savings (30 years)", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentBalance = Number(data.currentBalance) || 0;
      const interestRate = Number(data.interestRate) || 0;
      const penaltyType = data.penaltyType || "Percentage of Balance";
      const penaltyPercent = Number(data.penaltyPercent) || 0;
      const penaltyMonths = Number(data.penaltyMonths) || 0;
      const fixedPenalty = Number(data.fixedPenalty) || 0;
      const newMonthlyPayment = Number(data.newMonthlyPayment) || 0;
      const currentMonthlyPayment = Number(data.currentMonthlyPayment) || 0;
      
      let penalty = 0;
      
      // Calculate penalty based on type
      if (penaltyType === "Percentage of Balance") {
        penalty = currentBalance * (penaltyPercent / 100);
      } else if (penaltyType === "Months of Interest") {
        const monthlyInterest = currentBalance * (interestRate / 100 / 12);
        penalty = monthlyInterest * penaltyMonths;
      } else if (penaltyType === "Fixed Dollar Amount") {
        penalty = fixedPenalty;
      } else if (penaltyType === "No Penalty") {
        penalty = 0;
      } else if (penaltyType === "Not Sure - Calculate Both") {
        const percentPenalty = currentBalance * (penaltyPercent / 100);
        const monthlyInterest = currentBalance * (interestRate / 100 / 12);
        const monthsPenalty = monthlyInterest * penaltyMonths;
        penalty = Math.max(percentPenalty, monthsPenalty);
      }
      
      // Calculate savings
      const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
      
      // Calculate break-even point
      let breakEvenMonths = 0;
      let breakEvenText = "";
      
      if (monthlySavings > 0) {
        breakEvenMonths = penalty / monthlySavings;
        breakEvenText = `${Math.ceil(breakEvenMonths)} months (${(breakEvenMonths / 12).toFixed(1)} years)`;
      } else if (monthlySavings === 0) {
        breakEvenText = "No monthly savings - not worth refinancing";
      } else {
        breakEvenText = "Payments would increase - not recommended";
      }
      
      // Calculate lifetime savings (30 years)
      const lifetimeSavings = (monthlySavings * 360) - penalty;
      
      // Recommendation
      let recommendation = "";
      
      if (penaltyType === "No Penalty") {
        if (monthlySavings > 0) {
          recommendation = "✅ NO PENALTY: Great situation! Refinance immediately if it makes financial sense. You'll save $" + monthlySavings.toFixed(2) + "/month with no prepayment penalty to worry about.";
        } else {
          recommendation = "ℹ️ NO PENALTY: While there's no prepayment penalty, your new payment isn't lower. Only refinance if you're accessing equity or improving other loan terms.";
        }
      } else if (penalty === 0) {
        recommendation = "✅ NO PENALTY: Proceed with refinance if numbers make sense. No prepayment penalty applies in your situation.";
      } else if (monthlySavings <= 0) {
        recommendation = "❌ NOT RECOMMENDED: Your payments won't decrease, and you'd pay a $" + penalty.toFixed(2) + " penalty. Don't refinance unless you're accessing equity or avoiding foreclosure.";
      } else if (breakEvenMonths <= 12) {
        recommendation = "✅ STRONGLY RECOMMENDED: Break-even in just " + Math.ceil(breakEvenMonths) + " months. Penalty of $" + penalty.toFixed(2) + " is worth it for $" + monthlySavings.toFixed(2) + "/month savings. Lifetime savings: $" + lifetimeSavings.toFixed(2) + ".";
      } else if (breakEvenMonths <= 24) {
        recommendation = "✅ RECOMMENDED: Break-even in " + Math.ceil(breakEvenMonths) + " months. If you'll stay in home 2+ years, worth paying $" + penalty.toFixed(2) + " penalty for monthly savings of $" + monthlySavings.toFixed(2) + ".";
      } else if (breakEvenMonths <= 36) {
        recommendation = "⚠️ MARGINAL: Break-even takes " + Math.ceil(breakEvenMonths) + " months (3 years). Consider: (1) Waiting if penalty expires soon, (2) Negotiating waiver with lender, (3) Only proceed if long-term hold.";
      } else {
        recommendation = "❌ NOT RECOMMENDED: Break-even takes " + Math.ceil(breakEvenMonths) + " months (" + (breakEvenMonths / 12).toFixed(1) + " years). Penalty is too high relative to savings. Options: (1) Wait for penalty to expire, (2) Negotiate waiver, (3) Make extra payments instead.";
      }

      return [
        { label: "Prepayment Penalty", value: penalty.toFixed(2), isCurrency: true },
        { label: "Monthly Savings", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Break-Even Point", value: breakEvenText, isCurrency: false },
        { label: "Lifetime Savings (30 years)", value: lifetimeSavings.toFixed(2), isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
