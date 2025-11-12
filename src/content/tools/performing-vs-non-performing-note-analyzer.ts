import { CalculatorContent } from '@/types';

export const PERFORMING_VS_NON_PERFORMING_NOTE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Performing vs. Non-Performing Note Analyzer',
  description: 'Compare returns between performing and non-performing mortgage notes to make informed investment decisions.',
  slug: 'performing-vs-non-performing-note-analyzer',
  icon: '⚖️',
  category: 'Investment Analysis',
  article: {
    title: 'Performing vs. Non-Performing Notes: Investment Comparison',
    content: `
    <h2>Performing vs. Non-Performing Notes: Investment Comparison</h2>
    <p>Note investors must choose between performing notes (steady income, lower risk) and non-performing notes (higher returns, more active management). Understanding the differences is crucial for building the right portfolio strategy.</p>
    
    <h3>Performing Notes Explained</h3>
    <p>A performing note is a mortgage where the borrower is current on payments. Characteristics include:</p>
    <ul>
      <li><strong>Lower Risk:</strong> Borrower has demonstrated ability and willingness to pay</li>
      <li><strong>Passive Income:</strong> Monthly payments arrive like clockwork</li>
      <li><strong>Lower Returns:</strong> Typically 6-12% annual yield</li>
      <li><strong>Higher Purchase Price:</strong> Often 80-95% of unpaid balance</li>
      <li><strong>Minimal Management:</strong> Servicing is straightforward</li>
    </ul>

    <h3>Non-Performing Notes Explained</h3>
    <p>A non-performing note is where the borrower is behind on payments (typically 90+ days). Features include:</p>
    <ul>
      <li><strong>Higher Risk:</strong> Borrower has stopped paying or is severely delinquent</li>
      <li><strong>Active Management:</strong> Requires workout, modification, or foreclosure</li>
      <li><strong>Higher Returns:</strong> Potential 15-30%+ annual returns</li>
      <li><strong>Deep Discounts:</strong> Often 40-70% of unpaid balance</li>
      <li><strong>Multiple Exit Strategies:</strong> Modification, reinstatement, foreclosure, resale</li>
    </ul>

    <h3>How to Use This Analyzer</h3>
    <p>Compare both note types by entering:</p>
    <ul>
      <li><strong>Performing Note Purchase Price:</strong> Cost to acquire performing note</li>
      <li><strong>Performing Note UPB:</strong> Unpaid principal balance</li>
      <li><strong>Performing Monthly Payment:</strong> Current monthly payment amount</li>
      <li><strong>Non-Performing Purchase Price:</strong> Cost to acquire NPL</li>
      <li><strong>Non-Performing UPB:</strong> Original unpaid balance</li>
      <li><strong>Expected Workout Outcome:</strong> Projected resolution value</li>
      <li><strong>Workout Timeline:</strong> Months to resolve the NPL</li>
      <li><strong>Workout Costs:</strong> Legal, servicing, and other expenses</li>
    </ul>

    <h3>Key Comparison Metrics</h3>
    <ul>
      <li><strong>Yield Comparison:</strong> Annual return percentage for each option</li>
      <li><strong>Risk-Adjusted Return:</strong> Returns factoring in probability of success</li>
      <li><strong>Time to Break Even:</strong> Months until investment is recovered</li>
      <li><strong>Total Profit Potential:</strong> Maximum upside for each strategy</li>
      <li><strong>Effort Level:</strong> Time and complexity required</li>
    </ul>

    <h3>Performing Note Investment Strategy</h3>
    <p><strong>Best For:</strong></p>
    <ul>
      <li>Passive income seekers who want mailbox money</li>
      <li>Investors with limited time for asset management</li>
      <li>Conservative investors prioritizing capital preservation</li>
      <li>Portfolio diversification and steady cash flow</li>
      <li>IRA investments requiring passive income</li>
    </ul>

    <p><strong>Typical Returns:</strong></p>
    <ul>
      <li>First Position: 6-10% annual yield</li>
      <li>Second Position: 10-15% annual yield</li>
      <li>Owner-Financed: 8-12% annual yield</li>
    </ul>

    <h3>Non-Performing Note Strategy</h3>
    <p><strong>Best For:</strong></p>
    <ul>
      <li>Active investors willing to manage workouts</li>
      <li>Experienced note buyers understanding foreclosure</li>
      <li>Investors seeking higher returns (15-30%+)</li>
      <li>Those with legal and servicing relationships</li>
      <li>Portfolio opportunists seeking discounted assets</li>
    </ul>

    <p><strong>Typical Outcomes:</strong></p>
    <ul>
      <li><strong>Reinstatement:</strong> Borrower catches up (30% probability, 15-25% return)</li>
      <li><strong>Loan Modification:</strong> Restructure terms (40% probability, 12-20% return)</li>
      <li><strong>Short Sale:</strong> Borrower sells property (15% probability, 10-18% return)</li>
      <li><strong>Foreclosure/REO:</strong> Take property back (15% probability, 5-30% return)</li>
    </ul>

    <h3>Cost Considerations</h3>
    <p><strong>Performing Notes:</strong></p>
    <ul>
      <li>Servicing: $15-30/month</li>
      <li>Title insurance at purchase</li>
      <li>Minimal legal costs</li>
      <li>Total annual costs: 0.5-1% of UPB</li>
    </ul>

    <p><strong>Non-Performing Notes:</strong></p>
    <ul>
      <li>Servicing: $30-50/month (special servicing)</li>
      <li>Legal fees: $3,000-15,000 (foreclosure)</li>
      <li>Property preservation: $1,000-5,000</li>
      <li>BPO/Appraisal: $300-500</li>
      <li>Title updates: $500-1,500</li>
      <li>Total costs: 15-30% of purchase price</li>
    </ul>

    <h3>Risk Comparison</h3>
    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background:#f4f4f4;">
        <th style="border:1px solid #ddd; padding:8px;">Risk Factor</th>
        <th style="border:1px solid #ddd; padding:8px;">Performing</th>
        <th style="border:1px solid #ddd; padding:8px;">Non-Performing</th>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Default Risk</td>
        <td style="border:1px solid #ddd; padding:8px;">Low (2-5%)</td>
        <td style="border:1px solid #ddd; padding:8px;">Already defaulted</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Property Risk</td>
        <td style="border:1px solid #ddd; padding:8px;">Minimal</td>
        <td style="border:1px solid #ddd; padding:8px;">High (condition unknown)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Time Investment</td>
        <td style="border:1px solid #ddd; padding:8px;">1-2 hrs/year</td>
        <td style="border:1px solid #ddd; padding:8px;">20-100 hrs/note</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Legal Complexity</td>
        <td style="border:1px solid #ddd; padding:8px;">Very Low</td>
        <td style="border:1px solid #ddd; padding:8px;">High</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Market Sensitivity</td>
        <td style="border:1px solid #ddd; padding:8px;">Low</td>
        <td style="border:1px solid #ddd; padding:8px;">High</td>
      </tr>
    </table>

    <h3>Portfolio Allocation Strategy</h3>
    <p>Many successful note investors use a blended approach:</p>
    <ul>
      <li><strong>Conservative Portfolio:</strong> 80% performing, 20% non-performing</li>
      <li><strong>Balanced Portfolio:</strong> 60% performing, 40% non-performing</li>
      <li><strong>Aggressive Portfolio:</strong> 30% performing, 70% non-performing</li>
    </ul>

    <h3>Decision Framework</h3>
    <p>Choose Performing Notes if:</p>
    <ul>
      <li>You want truly passive income</li>
      <li>You have limited experience with workouts</li>
      <li>You prefer predictable, steady returns</li>
      <li>You're investing retirement funds</li>
      <li>You have limited time for asset management</li>
    </ul>

    <p>Choose Non-Performing Notes if:</p>
    <ul>
      <li>You can dedicate time to active management</li>
      <li>You have legal/servicing relationships</li>
      <li>You understand foreclosure processes</li>
      <li>You can handle higher risk for higher returns</li>
      <li>You have capital reserves for workout costs</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Start with performing notes to learn the business</li>
      <li>Build team (attorney, servicer, title company) before buying NPLs</li>
      <li>Maintain reserves equal to 25-40% of NPL purchase price</li>
      <li>Diversify across multiple notes (minimum 5-10 notes)</li>
      <li>Focus on first-lien positions for better protection</li>
      <li>Buy in non-judicial states for faster foreclosure</li>
      <li>Underwrite for worst case (foreclosure) but plan for best (modification)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'performingPrice',
        label: 'Performing Note Purchase Price',
        type: 'number',
        defaultValue: 85000,
      },
      {
        name: 'performingUPB',
        label: 'Performing Note UPB',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'performingPayment',
        label: 'Monthly Payment (Performing)',
        type: 'number',
        defaultValue: 733,
      },
      {
        name: 'nonPerformingPrice',
        label: 'Non-Performing Note Purchase Price',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'nonPerformingUPB',
        label: 'Non-Performing Note UPB',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'workoutValue',
        label: 'Expected Workout Outcome Value',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'workoutMonths',
        label: 'Workout Timeline (Months)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'workoutCosts',
        label: 'Total Workout Costs',
        type: 'number',
        defaultValue: 8000,
      },
    ],
    results: [
      { label: 'Performing Note Annual Yield', isPercentage: true },
      { label: 'Performing Note 5-Year Return', isCurrency: true },
      { label: 'Non-Performing Note Total Profit', isCurrency: true },
      { label: 'Non-Performing Annualized Return', isPercentage: true },
      { label: 'Performing Discount to UPB', isPercentage: true },
      { label: 'Non-Performing Discount to UPB', isPercentage: true },
      { label: 'Better Investment', isText: true },
    ],
    calculate: (values) => {
      const { performingPrice, performingUPB, performingPayment, nonPerformingPrice, nonPerformingUPB, workoutValue, workoutMonths, workoutCosts } = values;
      
      const performingAnnualIncome = performingPayment * 12;
      const performingYield = (performingAnnualIncome / performingPrice) * 100;
      const performing5YearReturn = (performingAnnualIncome * 5);
      
      const nonPerformingProfit = workoutValue - nonPerformingPrice - workoutCosts;
      const nonPerformingAnnualizedReturn = ((nonPerformingProfit / nonPerformingPrice) / (workoutMonths / 12)) * 100;
      
      const performingDiscount = ((performingUPB - performingPrice) / performingUPB) * 100;
      const nonPerformingDiscount = ((nonPerformingUPB - nonPerformingPrice) / nonPerformingUPB) * 100;
      
      const betterInvestment = performingYield > nonPerformingAnnualizedReturn ? 
        'Performing Note (Lower Risk, Steady Income)' : 
        'Non-Performing Note (Higher Return Potential)';

      return [
        { label: 'Performing Note Annual Yield', value: performingYield.toFixed(2), isPercentage: true },
        { label: 'Performing Note 5-Year Return', value: performing5YearReturn.toFixed(2), isCurrency: true },
        { label: 'Non-Performing Note Total Profit', value: nonPerformingProfit.toFixed(2), isCurrency: true },
        { label: 'Non-Performing Annualized Return', value: nonPerformingAnnualizedReturn.toFixed(2), isPercentage: true },
        { label: 'Performing Discount to UPB', value: performingDiscount.toFixed(2), isPercentage: true },
        { label: 'Non-Performing Discount to UPB', value: nonPerformingDiscount.toFixed(2), isPercentage: true },
        { label: 'Better Investment', value: betterInvestment, isText: true },
      ];
    },
  },
};
