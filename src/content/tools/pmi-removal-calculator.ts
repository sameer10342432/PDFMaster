import { CalculatorContent } from '@/types';

export const PMI_REMOVAL_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'PMI Removal Calculator',
  description: 'Calculate when you can remove PMI and how much you will save',
  slug: 'pmi-removal-calculator',
  icon: '🗑️',
  category: 'Basic Calculators',
  metaTitle: 'PMI Removal Calculator - Find Out When You Can Cancel Private Mortgage Insurance',
  metaDescription: 'Free PMI removal calculator. Find out exactly when you can cancel PMI, how much you\'ll save, and the steps to request removal at 20% equity.',
  article: {
    title: 'How and When to Remove PMI',
    content: `
    <h2>Understanding PMI Removal</h2>
    <p>Private Mortgage Insurance (PMI) removal is one of the most overlooked ways to save money on your mortgage. Once you reach sufficient equity in your home, you have the legal right to request PMI cancellation, potentially saving hundreds of dollars per month. Understanding the rules and timing can save you thousands over the life of your loan.</p>
    
    <h3>Three Ways to Remove PMI</h3>
    
    <h4>1. Automatic Termination (78% LTV)</h4>
    <ul>
      <li><strong>When:</strong> When your loan balance reaches 78% of the original home value</li>
      <li><strong>Based On:</strong> Original amortization schedule (scheduled payments only)</li>
      <li><strong>Requirements:</strong> Must be current on payments</li>
      <li><strong>Process:</strong> Completely automatic - lender must cancel</li>
      <li><strong>Your Action:</strong> None required</li>
      <li><strong>Timeline:</strong> Typically 5-7 years with normal payments</li>
    </ul>

    <h4>2. Requested Cancellation (80% LTV)</h4>
    <ul>
      <li><strong>When:</strong> When your loan balance reaches 80% of the original home value</li>
      <li><strong>Based On:</strong> Actual loan balance (can include extra payments)</li>
      <li><strong>Your Action:</strong> Submit written request to lender</li>
      <li><strong>Requirements:</strong>
        <ul>
          <li>Current on payments for past 12 months</li>
          <li>No late payments > 30 days in past 12 months</li>
          <li>No late payments > 60 days in past 24 months</li>
          <li>No subordinate liens on property</li>
          <li>Property value hasn't declined</li>
        </ul>
      </li>
    </ul>

    <h4>3. Early Removal (Based on Current Value)</h4>
    <ul>
      <li><strong>When:</strong> When current home value creates 20%+ equity</li>
      <li><strong>Based On:</strong> New appraisal showing increased value</li>
      <li><strong>Requirements:</strong>
        <ul>
          <li>New appraisal ordered (you pay $300-500)</li>
          <li>Typically need to own home 2+ years</li>
          <li>80% LTV or better based on current value</li>
          <li>Lender's approval (not guaranteed)</li>
          <li>Significant value increase documented</li>
        </ul>
      </li>
      <li><strong>Best For:</strong> Hot markets with rapid appreciation</li>
    </ul>

    <h3>PMI Removal Timeline Calculator</h3>
    <p>The time it takes to remove PMI depends on:</p>
    <ul>
      <li><strong>Original Down Payment:</strong> More down = faster removal</li>
      <li><strong>Extra Payments:</strong> Accelerates equity building</li>
      <li><strong>Property Appreciation:</strong> Increases equity without payments</li>
      <li><strong>Interest Rate:</strong> Affects principal paydown speed</li>
      <li><strong>Loan Term:</strong> 15-year loans build equity faster than 30-year</li>
    </ul>

    <h3>How to Use This PMI Removal Calculator</h3>
    <p>Enter the following to calculate when you can remove PMI:</p>
    <ul>
      <li><strong>Original Home Price:</strong> Purchase price at closing</li>
      <li><strong>Current Loan Balance:</strong> Your remaining mortgage balance</li>
      <li><strong>Current Home Value:</strong> Estimated current market value</li>
      <li><strong>Monthly PMI Payment:</strong> Current PMI cost</li>
      <li><strong>Interest Rate:</strong> Your mortgage rate</li>
      <li><strong>Extra Monthly Payment:</strong> Any additional principal payments</li>
    </ul>

    <h3>Step-by-Step PMI Removal Process</h3>
    
    <h4>Step 1: Determine Your Equity</h4>
    <ol>
      <li>Get current loan balance from latest statement</li>
      <li>Determine home's current value (recent comps, online estimates)</li>
      <li>Calculate: (Current Value - Loan Balance) / Current Value = Equity %</li>
      <li>Need 20%+ equity (80% LTV or lower)</li>
    </ol>

    <h4>Step 2: Review Requirements</h4>
    <ul>
      <li>Check payment history - must be current</li>
      <li>Verify no subordinate liens (second mortgages, HELOCs)</li>
      <li>Confirm you meet lender's seasoning requirements (typically 2 years)</li>
      <li>Review your loan documents for specific PMI terms</li>
    </ul>

    <h4>Step 3: Contact Your Lender</h4>
    <ul>
      <li>Call your mortgage servicer's customer service</li>
      <li>Ask specifically about PMI cancellation requirements</li>
      <li>Request written cancellation instructions</li>
      <li>Ask if they'll accept automated valuation or require full appraisal</li>
    </ul>

    <h4>Step 4: Submit Written Request</h4>
    <p>Send a formal letter including:</p>
    <ul>
      <li>Your name and loan number</li>
      <li>Clear request to cancel PMI</li>
      <li>Statement that you meet all requirements</li>
      <li>Current loan balance and home value</li>
      <li>Offer to provide appraisal if needed</li>
      <li>Keep a copy for your records</li>
    </ul>

    <h4>Step 5: Order Appraisal (If Required)</h4>
    <ul>
      <li>Use lender's approved appraiser or provide list</li>
      <li>You pay appraisal fee ($300-600)</li>
      <li>Appraiser evaluates your home</li>
      <li>Report sent to lender</li>
      <li>Lender reviews for PMI removal approval</li>
    </ul>

    <h4>Step 6: Follow Up</h4>
    <ul>
      <li>Lender has 30 days to respond to request</li>
      <li>If approved, PMI should stop next billing cycle</li>
      <li>Verify PMI is removed from next statement</li>
      <li>If denied, ask for specific reason and timeline to reapply</li>
    </ul>

    <h3>Strategies to Remove PMI Faster</h3>
    
    <h4>Strategy 1: Make Extra Principal Payments</h4>
    <ul>
      <li>Add extra amount to monthly payment</li>
      <li>Make one extra payment per year (13 total)</li>
      <li>Apply bonuses or tax refunds to principal</li>
      <li>Can reduce PMI period by 2-3 years</li>
      <li>Mark payments "principal only" to ensure proper application</li>
    </ul>

    <h4>Strategy 2: Increase Property Value</h4>
    <ul>
      <li>Strategic home improvements (kitchen, bath remodel)</li>
      <li>Wait for market appreciation in hot markets</li>
      <li>Improve curb appeal for higher appraisal</li>
      <li>Document all improvements for appraiser</li>
    </ul>

    <h4>Strategy 3: Recast Your Mortgage</h4>
    <ul>
      <li>Make large lump-sum principal payment</li>
      <li>Lender re-amortizes loan with new lower balance</li>
      <li>Reduces monthly payment</li>
      <li>Can trigger PMI removal if you hit 80% LTV</li>
      <li>Small fee (typically $150-500)</li>
    </ul>

    <h4>Strategy 4: Refinance to Remove PMI</h4>
    <ul>
      <li>If you have 20%+ equity, refinance to new loan</li>
      <li>New loan has no PMI from day one</li>
      <li>May get lower interest rate</li>
      <li>Consider closing costs vs. PMI savings</li>
      <li>Best when rates are lower than current rate</li>
    </ul>

    <h3>PMI Removal Savings Examples</h3>
    
    <h4>Example 1: Standard Removal</h4>
    <ul>
      <li><strong>Home Price:</strong> $350,000</li>
      <li><strong>Down Payment:</strong> 10% ($35,000)</li>
      <li><strong>Loan Amount:</strong> $315,000</li>
      <li><strong>Monthly PMI:</strong> $175</li>
      <li><strong>Time to 80% LTV:</strong> 5.5 years</li>
      <li><strong>Total PMI Paid:</strong> $11,550</li>
      <li><strong>Savings After Removal:</strong> $175/month ongoing</li>
    </ul>

    <h4>Example 2: Accelerated with Extra Payments</h4>
    <ul>
      <li><strong>Same Scenario Above</strong></li>
      <li><strong>Extra Payment:</strong> $300/month</li>
      <li><strong>New Time to 80% LTV:</strong> 3.2 years</li>
      <li><strong>Total PMI Paid:</strong> $6,720</li>
      <li><strong>PMI Savings:</strong> $4,830</li>
      <li><strong>Additional Benefit:</strong> Reduced total interest paid</li>
    </ul>

    <h4>Example 3: Market Appreciation</h4>
    <ul>
      <li><strong>Original Home Price:</strong> $300,000</li>
      <li><strong>Down Payment:</strong> 5% ($15,000)</li>
      <li><strong>Loan Amount:</strong> $285,000</li>
      <li><strong>After 2 Years:</strong> Home worth $360,000</li>
      <li><strong>Loan Balance:</strong> $275,000</li>
      <li><strong>New LTV:</strong> 76.4% (23.6% equity)</li>
      <li><strong>Result:</strong> Eligible for early PMI removal</li>
      <li><strong>Savings:</strong> ~$200/month for remaining loan term</li>
    </ul>

    <h3>Common PMI Removal Mistakes</h3>
    
    <h4>Mistake #1: Waiting for Lender to Notify You</h4>
    <ul>
      <li><strong>Problem:</strong> Lenders only required to cancel at 78% LTV automatically</li>
      <li><strong>Solution:</strong> Request removal at 80% LTV (can save 1-2 years PMI)</li>
      <li><strong>Impact:</strong> Thousands in unnecessary PMI payments</li>
    </ul>

    <h4>Mistake #2: Not Tracking Your Equity</h4>
    <ul>
      <li><strong>Problem:</strong> Miss opportunities for early removal via appreciation</li>
      <li><strong>Solution:</strong> Monitor home values quarterly in your area</li>
      <li><strong>Impact:</strong> Could remove PMI years early in hot markets</li>
    </ul>

    <h4>Mistake #3: Making Verbal Requests Only</h4>
    <ul>
      <li><strong>Problem:</strong> No paper trail, easy for lender to "lose" request</li>
      <li><strong>Solution:</strong> Always submit written requests via certified mail</li>
      <li><strong>Impact:</strong> Delays in processing, continued unnecessary PMI</li>
    </ul>

    <h4>Mistake #4: Not Following Up</h4>
    <ul>
      <li><strong>Problem:</strong> Requests can get lost in bureaucracy</li>
      <li><strong>Solution:</strong> Follow up every 2 weeks until confirmed removed</li>
      <li><strong>Impact:</strong> Extra months of PMI payments</li>
    </ul>

    <h4>Mistake #5: Paying for Unnecessary Appraisals</h4>
    <ul>
      <li><strong>Problem:</strong> Getting appraisal before hitting 80% LTV on schedule</li>
      <li><strong>Solution:</strong> Only get appraisal if value increased significantly</li>
      <li><strong>Impact:</strong> $300-600 wasted if insufficient equity</li>
    </ul>

    <h3>Special PMI Removal Situations</h3>
    
    <h4>Refinanced Loans:</h4>
    <ul>
      <li>PMI removal based on new loan's terms</li>
      <li>Original home value vs. new appraisal value</li>
      <li>May have different seasoning requirements</li>
      <li>Sometimes easier to get PMI-free refinance</li>
    </ul>

    <h4>Inherited Homes:</h4>
    <ul>
      <li>If you assume a loan with PMI, same rules apply</li>
      <li>Can request removal when you hit 20% equity</li>
      <li>Appraisal based on current value, not inherited value</li>
    </ul>

    <h4>Lender-Paid PMI (LPMI):</h4>
    <ul>
      <li>Cannot be removed (built into interest rate)</li>
      <li>Only way to eliminate: refinance entire loan</li>
      <li>Calculate if refinance savings justify closing costs</li>
    </ul>

    <h3>Legal Rights for PMI Removal</h3>
    <p>The Homeowners Protection Act (HPA) of 1998 gives you specific rights:</p>
    <ul>
      <li>Right to request cancellation at 80% LTV</li>
      <li>Right to automatic termination at 78% LTV</li>
      <li>Final termination at midpoint of amortization if not already cancelled</li>
      <li>Annual PMI disclosure statements from lender</li>
      <li>Right to know cancellation/termination dates at closing</li>
    </ul>

    <h3>PMI Removal Checklist</h3>
    <p>Use this checklist when ready to remove PMI:</p>
    <ul>
      <li>☐ Confirm loan balance is 80% or less of original value</li>
      <li>☐ Verify current on all payments</li>
      <li>☐ Check for any subordinate liens</li>
      <li>☐ Review loan documents for specific requirements</li>
      <li>☐ Obtain current home value estimate</li>
      <li>☐ Call lender to understand their process</li>
      <li>☐ Prepare written cancellation request</li>
      <li>☐ Order appraisal if required</li>
      <li>☐ Submit all documentation</li>
      <li>☐ Follow up every 2 weeks</li>
      <li>☐ Verify removal on next statement</li>
      <li>☐ Celebrate monthly savings!</li>
    </ul>

    <h3>When PMI Removal Might Be Denied</h3>
    <p>Lenders can deny PMI removal if:</p>
    <ul>
      <li>You don't meet minimum equity requirements</li>
      <li>Recent late payments on mortgage</li>
      <li>Subordinate liens exist on property</li>
      <li>Property value has declined</li>
      <li>Home doesn't meet lender's condition standards</li>
      <li>You haven't met seasoning requirements (typically 2 years)</li>
    </ul>
    <p>If denied, ask for specific reasons and timeline to reapply.</p>

    <h3>After PMI Removal: What to Do</h3>
    <ul>
      <li><strong>Verify removal:</strong> Check next mortgage statement confirms PMI removed</li>
      <li><strong>Redirect savings:</strong> Apply former PMI payment to principal or savings</li>
      <li><strong>Update budget:</strong> Account for reduced monthly housing cost</li>
      <li><strong>Consider refinance:</strong> If rates dropped, might save even more</li>
      <li><strong>Build emergency fund:</strong> Use savings to strengthen financial position</li>
    </ul>

    <h3>Bottom Line on PMI Removal</h3>
    <p>Removing PMI is one of the easiest ways to reduce your monthly mortgage payment without refinancing. The keys to success are:</p>
    <ul>
      <li>Track your equity regularly</li>
      <li>Don't wait for the lender to notify you</li>
      <li>Submit formal written requests</li>
      <li>Consider extra payments to accelerate removal</li>
      <li>Monitor home values for early removal opportunities</li>
      <li>Follow up persistently until confirmed removed</li>
    </ul>
    <p>Use this calculator to determine when you can remove PMI and start saving hundreds per month.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'originalHomePrice',
        label: 'Original Home Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'currentLoanBalance',
        label: 'Current Loan Balance ($)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'currentHomeValue',
        label: 'Current Home Value ($)',
        type: 'number',
        defaultValue: 380000,
      },
      {
        name: 'monthlyPMI',
        label: 'Monthly PMI Payment ($)',
        type: 'number',
        defaultValue: 175,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.5,
      },
      {
        name: 'extraMonthlyPayment',
        label: 'Extra Monthly Principal Payment ($)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Current LTV (Original Value)', isCurrency: false },
      { label: 'Current LTV (Current Value)', isCurrency: false },
      { label: 'Current Equity', isCurrency: true },
      { label: 'Current Equity Percentage', isCurrency: false },
      { label: 'Months Until 80% LTV', isCurrency: false },
      { label: 'Date You Can Request Removal', isCurrency: false },
      { label: 'PMI Savings Per Year', isCurrency: true },
      { label: 'Total PMI Already Paid (Est.)', isCurrency: true },
      { label: 'PMI to Be Paid Until Removal', isCurrency: true },
      { label: 'Can Remove PMI Now?', isCurrency: false },
    ],
    calculate: (values) => {
      const { originalHomePrice, currentLoanBalance, currentHomeValue, monthlyPMI, interestRate, extraMonthlyPayment } = values;
      
      const ltvOriginal = (currentLoanBalance / originalHomePrice) * 100;
      const ltvCurrent = (currentLoanBalance / currentHomeValue) * 100;
      const currentEquity = currentHomeValue - currentLoanBalance;
      const equityPercent = (currentEquity / currentHomeValue) * 100;
      
      const canRemoveNow = ltvOriginal <= 80 ? 'YES - Request Now!' : 'Not Yet - Keep Paying Down';
      
      const monthlyRate = interestRate / 100 / 12;
      const targetBalance = originalHomePrice * 0.80;
      
      let monthsUntil80 = 0;
      let balance = currentLoanBalance;
      
      if (balance <= targetBalance) {
        monthsUntil80 = 0;
      } else {
        const principal = currentLoanBalance;
        const monthlyPayment = principal * 
          (monthlyRate * Math.pow(1 + monthlyRate, 360)) / 
          (Math.pow(1 + monthlyRate, 360) - 1);
        
        while (balance > targetBalance && monthsUntil80 < 360) {
          const interestPayment = balance * monthlyRate;
          const principalPayment = monthlyPayment - interestPayment + extraMonthlyPayment;
          balance -= principalPayment;
          monthsUntil80++;
        }
      }
      
      const today = new Date();
      const removalDate = new Date(today.setMonth(today.getMonth() + monthsUntil80));
      const removalDateStr = monthsUntil80 === 0 ? 'Now!' : removalDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      
      const pmiToBeaid = monthlyPMI * monthsUntil80;
      const yearsWithPMI = Math.max(1, monthsUntil80 / 12);
      const estimatedPMIPaid = monthlyPMI * 12 * yearsWithPMI;
      
      const annualSavings = monthlyPMI * 12;
      
      const ltvOriginalStr = ltvOriginal.toFixed(2) + '%';
      const ltvCurrentStr = ltvCurrent.toFixed(2) + '%';
      const equityPercentStr = equityPercent.toFixed(2) + '%';
      const monthsStr = monthsUntil80 === 0 ? '0 (Eligible Now!)' : monthsUntil80 + ' months';

      return [
        { label: 'Current LTV (Original Value)', value: ltvOriginalStr, isCurrency: false },
        { label: 'Current LTV (Current Value)', value: ltvCurrentStr, isCurrency: false },
        { label: 'Current Equity', value: currentEquity.toFixed(2), isCurrency: true },
        { label: 'Current Equity Percentage', value: equityPercentStr, isCurrency: false },
        { label: 'Months Until 80% LTV', value: monthsStr, isCurrency: false },
        { label: 'Date You Can Request Removal', value: removalDateStr, isCurrency: false },
        { label: 'PMI Savings Per Year', value: annualSavings.toFixed(2), isCurrency: true },
        { label: 'Total PMI Already Paid (Est.)', value: estimatedPMIPaid.toFixed(2), isCurrency: true },
        { label: 'PMI to Be Paid Until Removal', value: pmiToBeaid.toFixed(2), isCurrency: true },
        { label: 'Can Remove PMI Now?', value: canRemoveNow, isCurrency: false },
      ];
    },
  },
};
