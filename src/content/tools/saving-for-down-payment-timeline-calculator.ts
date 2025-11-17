import { CalculatorContent } from '@/types';

export const SAVING_FOR_DOWN_PAYMENT_TIMELINE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Saving for a Down Payment Timeline Calculator',
  description: 'Calculate how long it will take to save for a down payment and track your progress toward homeownership',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'saving-for-down-payment-timeline-calculator',
  article: {
    title: "Down Payment Savings Timeline & Strategy",
    content: `
    <h2>How Long Until You Can Buy a Home?</h2>
    <p>Saving for a down payment is often the biggest barrier to homeownership. This calculator helps you create a realistic timeline and identifies strategies to accelerate your savings.</p>
    
    <h3>Down Payment Requirements by Loan Type</h3>
    <ul>
      <li><strong>Conventional Loan:</strong> 3-20% down (PMI required if <20%)</li>
      <li><strong>FHA Loan:</strong> 3.5% down (mortgage insurance required)</li>
      <li><strong>VA Loan:</strong> 0% down (for qualified veterans)</li>
      <li><strong>USDA Loan:</strong> 0% down (rural areas only)</li>
      <li><strong>Jumbo Loan:</strong> 10-20% down (high-value properties)</li>
    </ul>
    
    <h3>Calculating Your Timeline</h3>
    <p>The formula accounts for:</p>
    <ul>
      <li><strong>Current Savings:</strong> What you have today</li>
      <li><strong>Monthly Contribution:</strong> How much you can save each month</li>
      <li><strong>Investment Returns:</strong> Interest earned on savings (1-6% annually)</li>
      <li><strong>Home Price Inflation:</strong> Target price increasing over time (3-5% annually)</li>
      <li><strong>Moving Target:</strong> As you save, the required down payment may increase</li>
    </ul>
    
    <h3>Strategies to Save Faster</h3>
    <p><strong>1. Increase Income:</strong></p>
    <ul>
      <li>Side hustle or freelance work</li>
      <li>Ask for raise or seek promotion</li>
      <li>Work overtime if available</li>
    </ul>
    
    <p><strong>2. Reduce Expenses:</strong></p>
    <ul>
      <li>Track spending and eliminate waste</li>
      <li>Downgrade car or live without one</li>
      <li>Cook at home instead of dining out</li>
      <li>Cancel unused subscriptions</li>
      <li>Get a roommate to split rent</li>
    </ul>
    
    <p><strong>3. Optimize Savings:</strong></p>
    <ul>
      <li>High-yield savings account (4-5% APY)</li>
      <li>Money market funds for short-term goals</li>
      <li>Conservative investments if timeline is 3+ years</li>
      <li>Automate transfers on payday</li>
    </ul>
    
    <h3>Down Payment Assistance Programs</h3>
    <p>Many first-time buyers qualify for help:</p>
    <ul>
      <li><strong>State/Local Grants:</strong> $5,000-$15,000 in free money</li>
      <li><strong>Employer Programs:</strong> Some companies offer down payment assistance</li>
      <li><strong>IRA Withdrawal:</strong> $10,000 penalty-free for first-time buyers</li>
      <li><strong>Gift Funds:</strong> Family can gift down payment (see gift tax rules)</li>
      <li><strong>Matched Savings:</strong> Some programs match your savings dollar-for-dollar</li>
    </ul>
    
    <h3>What About Closing Costs?</h3>
    <p>Don't forget closing costs (2-5% of purchase price):</p>
    <ul>
      <li>Appraisal: $500-800</li>
      <li>Home inspection: $400-600</li>
      <li>Title insurance: $1,000-2,000</li>
      <li>Origination fees: 0.5-1% of loan</li>
      <li>Prepaid taxes and insurance</li>
    </ul>
    <p>Budget an extra 2-3% beyond your down payment for these costs.</p>
    
    <h3>Should You Wait to Save 20%?</h3>
    <p><strong>Pros of 20% Down:</strong> No PMI, lower payments, better rates</p>
    <p><strong>Cons of Waiting:</strong> Rising prices, missed appreciation, continued rent payments</p>
    <p><strong>Alternative:</strong> Put down 3-10% and build equity while prices rise.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "targetHomePrice",
        label: "Target Home Purchase Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "downPaymentPct",
        label: "Down Payment Percentage (%)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "currentSavings",
        label: "Current Down Payment Savings",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
      {
        name: "monthlyContribution",
        label: "Monthly Savings Contribution",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "savingsReturnRate",
        label: "Annual Return on Savings (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "homePriceInflation",
        label: "Annual Home Price Inflation (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
    ],
    results: [
      { label: "Target Down Payment Amount (Today)", isCurrency: true },
      { label: "Months to Reach Goal", isCurrency: false },
      { label: "Years to Reach Goal", isCurrency: false },
      { label: "Projected Home Price at Purchase", isCurrency: true },
      { label: "Projected Down Payment Needed", isCurrency: true },
      { label: "Total You'll Save (Principal + Interest)", isCurrency: true },
      { label: "Funding Gap", isCurrency: true },
      { label: "Timeline Assessment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const targetHomePrice = Number(data.targetHomePrice) || 0;
      const downPaymentPct = Number(data.downPaymentPct) / 100 || 0;
      const currentSavings = Number(data.currentSavings) || 0;
      const monthlyContribution = Number(data.monthlyContribution) || 0;
      const savingsReturnRate = Number(data.savingsReturnRate) / 100 || 0;
      const homePriceInflation = Number(data.homePriceInflation) / 100 || 0;
      
      const targetDownPayment = targetHomePrice * downPaymentPct;
      const monthlyReturn = savingsReturnRate / 12;
      const monthlyInflation = homePriceInflation / 12;
      
      // Calculate months needed
      let monthsToGoal = 0;
      let savingsBalance = currentSavings;
      let adjustedHomePrice = targetHomePrice;
      
      if (monthlyContribution <= 0) {
        monthsToGoal = 999;
      } else {
        while (savingsBalance < adjustedHomePrice * downPaymentPct && monthsToGoal < 600) {
          savingsBalance = savingsBalance * (1 + monthlyReturn) + monthlyContribution;
          adjustedHomePrice = adjustedHomePrice * (1 + monthlyInflation);
          monthsToGoal++;
        }
      }
      
      const yearsToGoal = monthsToGoal / 12;
      const projectedHomePrice = targetHomePrice * Math.pow(1 + homePriceInflation, yearsToGoal);
      const projectedDownPaymentNeeded = projectedHomePrice * downPaymentPct;
      const totalSaved = savingsBalance;
      const fundingGap = Math.max(0, projectedDownPaymentNeeded - totalSaved);
      
      let assessment = "";
      if (monthsToGoal >= 600 || fundingGap > projectedDownPaymentNeeded * 0.5) {
        assessment = "⚠️ Goal unreachable at current savings rate - Increase monthly contribution";
      } else if (yearsToGoal <= 2) {
        assessment = "✅ Excellent - You'll reach your goal soon!";
      } else if (yearsToGoal <= 4) {
        assessment = "✅ Good - Stay consistent with your savings plan";
      } else if (yearsToGoal <= 7) {
        assessment = "⚠️ Long Timeline - Consider increasing contributions or down payment assistance";
      } else {
        assessment = "❌ Very Long Timeline - Explore lower down payment options or assistance programs";
      }

      return [
        { label: "Target Down Payment Amount (Today)", value: `${targetDownPayment.toFixed(2)}`, isCurrency: true },
        { label: "Months to Reach Goal", value: monthsToGoal >= 600 ? "600+" : monthsToGoal.toString(), isCurrency: false },
        { label: "Years to Reach Goal", value: yearsToGoal >= 50 ? "50+" : yearsToGoal.toFixed(1), isCurrency: false },
        { label: "Projected Home Price at Purchase", value: `${projectedHomePrice.toFixed(2)}`, isCurrency: true },
        { label: "Projected Down Payment Needed", value: `${projectedDownPaymentNeeded.toFixed(2)}`, isCurrency: true },
        { label: "Total You'll Save (Principal + Interest)", value: `${totalSaved.toFixed(2)}`, isCurrency: true },
        { label: "Funding Gap", value: `${fundingGap.toFixed(2)}`, isCurrency: true },
        { label: "Timeline Assessment", value: assessment, isCurrency: false },
      ];
    },
  },
};
