import { Calculator } from '@/types/calculators';
import { TrendingUp } from 'lucide-react';

export const mortgageRateCreditScoreEstimator: Calculator = {
  title: 'Mortgage Rate by Credit Score Estimator',
  description: 'Estimate mortgage interest rates based on your credit score and see how credit impacts your monthly payment.',
  icon: TrendingUp,
  category: 'Basic Calculators',
  slug: 'mortgage-rate-credit-score-estimator',
  metaTitle: 'Mortgage Rate by Credit Score Calculator | Credit Score Impact on Rates',
  metaDescription: 'Calculate how your credit score affects mortgage interest rates with our rate estimator. See monthly payment differences and total interest costs across credit score ranges.',
  
  article: {
    introduction: `
      <p>Your credit score is one of the most important factors determining your mortgage interest rate. A higher score can save you tens of thousands of dollars over the life of your loan. Our Mortgage Rate by Credit Score Estimator shows you how your credit score impacts your interest rate and monthly payments.</p>
      
      <p>Understanding this relationship helps you make informed decisions about improving your credit before applying for a mortgage.</p>
    `,
    
    sections: [
      {
        title: 'How Credit Scores Affect Mortgage Rates',
        content: `
          <p>Lenders use your credit score to assess risk. Higher scores indicate lower risk, earning you better interest rates. The difference between good and excellent credit can significantly impact your costs:</p>
          
          <h3>Typical Rate Differences by Credit Score (2024)</h3>
          <p><strong>$300,000 Loan, 30-Year Fixed Mortgage:</strong></p>
          
          <table>
            <tr>
              <th>Credit Score</th>
              <th>Interest Rate</th>
              <th>Monthly Payment</th>
              <th>Total Interest</th>
            </tr>
            <tr>
              <td>760-850</td>
              <td>6.5%</td>
              <td>$1,896</td>
              <td>$382,633</td>
            </tr>
            <tr>
              <td>700-759</td>
              <td>6.75%</td>
              <td>$1,946</td>
              <td>$400,487</td>
            </tr>
            <tr>
              <td>680-699</td>
              <td>7.0%</td>
              <td>$1,996</td>
              <td>$418,772</td>
            </tr>
            <tr>
              <td>660-679</td>
              <td>7.25%</td>
              <td>$2,047</td>
              <td>$437,478</td>
            </tr>
            <tr>
              <td>640-659</td>
              <td>7.625%</td>
              <td>$2,125</td>
              <td>$464,959</td>
            </tr>
            <tr>
              <td>620-639</td>
              <td>8.125%</td>
              <td>$2,227</td>
              <td>$501,741</td>
            </tr>
          </table>
          
          <p><strong>Key Insight:</strong> Improving your score from 640 to 760 saves approximately $229/month or $82,308 over 30 years on a $300,000 loan!</p>
        `
      },
      {
        title: 'Credit Score Tiers and What They Mean',
        content: `
          <h3>Excellent Credit (760-850)</h3>
          <ul>
            <li><strong>Best Available Rates:</strong> Qualify for lowest interest rates</li>
            <li><strong>Maximum Approval Odds:</strong> Approved for any loan amount within DTI</li>
            <li><strong>Best Terms:</strong> Lowest fees, highest LTV options</li>
            <li><strong>Rate Advantage:</strong> 0.5-1.0% lower than average</li>
            <li><strong>Loan Options:</strong> All conventional, jumbo, FHA, VA, USDA</li>
          </ul>
          
          <h3>Very Good Credit (700-759)</h3>
          <ul>
            <li><strong>Competitive Rates:</strong> Near-best rates available</li>
            <li><strong>Strong Approval:</strong> Excellent approval chances</li>
            <li><strong>Good Terms:</strong> Favorable conditions</li>
            <li><strong>Rate Impact:</strong> 0.25-0.375% above best tier</li>
            <li><strong>Loan Options:</strong> Full access to all programs</li>
          </ul>
          
          <h3>Good Credit (680-699)</h3>
          <ul>
            <li><strong>Average Rates:</strong> Market-average interest rates</li>
            <li><strong>Good Approval:</strong> Strong chances with solid income</li>
            <li><strong>Standard Terms:</strong> Typical loan conditions</li>
            <li><strong>Rate Impact:</strong> 0.375-0.5% above best tier</li>
            <li><strong>Loan Options:</strong> Most conventional and government programs</li>
          </ul>
          
          <h3>Fair Credit (660-679)</h3>
          <ul>
            <li><strong>Higher Rates:</strong> Above-average interest rates</li>
            <li><strong>Moderate Approval:</strong> May need compensating factors</li>
            <li><strong>Stricter Terms:</strong> Larger down payment may help</li>
            <li><strong>Rate Impact:</strong> 0.5-0.75% above best tier</li>
            <li><strong>Loan Options:</strong> FHA, VA preferred; conventional limited</li>
          </ul>
          
          <h3>Poor Credit (620-659)</h3>
          <ul>
            <li><strong>High Rates:</strong> Significantly higher rates</li>
            <li><strong>Limited Approval:</strong> Requires strong compensating factors</li>
            <li><strong>Restrictive Terms:</strong> Higher down payment often required</li>
            <li><strong>Rate Impact:</strong> 1.0-1.5% above best tier</li>
            <li><strong>Loan Options:</strong> FHA, VA main options; conventional rare</li>
          </ul>
          
          <h3>Very Poor Credit (Below 620)</h3>
          <ul>
            <li><strong>Highest Rates:</strong> Maximum interest rates if approved</li>
            <li><strong>Difficult Approval:</strong> Very limited options</li>
            <li><strong>Manual Underwriting:</strong> Extensive documentation required</li>
            <li><strong>Rate Impact:</strong> 1.5-2.0%+ above best tier</li>
            <li><strong>Loan Options:</strong> FHA (580+), VA, or subprime lenders</li>
          </ul>
        `
      },
      {
        title: 'Rate Adjustments Beyond Credit Score',
        content: `
          <p>While credit score is crucial, lenders also adjust rates based on these factors:</p>
          
          <h3>Loan-to-Value (LTV) Ratio</h3>
          <ul>
            <li><strong>LTV 60% or less:</strong> Rate reduction of 0.25-0.5%</li>
            <li><strong>LTV 60-80%:</strong> Standard rates</li>
            <li><strong>LTV 80-90%:</strong> Rate increase of 0.125-0.25%</li>
            <li><strong>LTV 90-97%:</strong> Rate increase of 0.25-0.75%</li>
          </ul>
          
          <h3>Loan Amount</h3>
          <ul>
            <li><strong>Jumbo Loans:</strong> +0.25-0.75% for loans above conforming limits</li>
            <li><strong>High Balance:</strong> +0.125-0.25% in high-cost areas</li>
            <li><strong>Small Loans:</strong> +0.25-0.5% for loans under $150,000</li>
          </ul>
          
          <h3>Property Type</h3>
          <ul>
            <li><strong>Primary Residence:</strong> Best rates (baseline)</li>
            <li><strong>Second Home:</strong> +0.125-0.375%</li>
            <li><strong>Investment Property:</strong> +0.5-1.0%</li>
            <li><strong>Condo/Co-op:</strong> +0.125-0.25%</li>
            <li><strong>Multi-Family (2-4 units):</strong> +0.25-0.5%</li>
          </ul>
          
          <h3>Loan Type</h3>
          <ul>
            <li><strong>Purchase:</strong> Standard rates</li>
            <li><strong>Rate-and-Term Refinance:</strong> Standard rates</li>
            <li><strong>Cash-Out Refinance:</strong> +0.25-0.625%</li>
          </ul>
          
          <h3>Debt-to-Income Ratio</h3>
          <ul>
            <li><strong>DTI < 36%:</strong> Best available rates</li>
            <li><strong>DTI 36-43%:</strong> Standard rates</li>
            <li><strong>DTI 43-50%:</strong> +0.25-0.5% (if approved)</li>
          </ul>
          
          <h3>Loan Term</h3>
          <ul>
            <li><strong>15-Year Fixed:</strong> 0.5-0.75% lower than 30-year</li>
            <li><strong>30-Year Fixed:</strong> Standard (baseline)</li>
            <li><strong>ARM (5/1, 7/1):</strong> 0.5-1.0% lower initial rate</li>
          </ul>
        `
      },
      {
        title: 'Credit Score Ranges by Credit Bureau',
        content: `
          <p>Lenders typically use FICO scores, but there are multiple versions:</p>
          
          <h3>FICO Score 8 (Most Common)</h3>
          <ul>
            <li>Range: 300-850</li>
            <li>Used for: Credit cards, auto loans, personal loans</li>
          </ul>
          
          <h3>FICO Score 2, 4, 5 (Mortgage Scores)</h3>
          <ul>
            <li>Range: 300-850</li>
            <li>Used for: Mortgage lending specifically</li>
            <li>Lenders pull all three, use middle score</li>
            <li>Typically 10-30 points lower than FICO 8</li>
          </ul>
          
          <h3>Three Credit Bureaus</h3>
          <p>Lenders pull reports from all three bureaus:</p>
          <ul>
            <li><strong>Experian:</strong> FICO 2</li>
            <li><strong>TransUnion:</strong> FICO 4</li>
            <li><strong>Equifax:</strong> FICO 5</li>
          </ul>
          
          <h3>How Lenders Use Multiple Scores</h3>
          <ul>
            <li><strong>Single Borrower:</strong> Middle of three scores used</li>
            <li><strong>Co-Borrowers:</strong> Lower of two middle scores used</li>
            <li><strong>Example:</strong> Scores of 680, 695, 710 → 695 is used</li>
          </ul>
          
          <p><strong>Important:</strong> The score you see on free credit monitoring sites (often FICO 8 or VantageScore) may differ from the mortgage scores lenders use!</p>
        `
      },
      {
        title: 'How to Improve Your Rate Through Credit',
        content: `
          <h3>Quick Wins (30-60 Days)</h3>
          <ul>
            <li><strong>Pay Down Credit Cards:</strong> Reduce utilization below 30% on all cards
              <ul>
                <li>Under 10% utilization is ideal</li>
                <li>Can boost score 20-50 points quickly</li>
              </ul>
            </li>
            <li><strong>Dispute Errors:</strong> Challenge inaccurate negative items
              <ul>
                <li>Check all three credit reports</li>
                <li>File disputes with bureaus</li>
                <li>Resolution takes 30-45 days</li>
              </ul>
            </li>
            <li><strong>Become Authorized User:</strong> Get added to someone's old, positive account
              <ul>
                <li>Instant credit history boost</li>
                <li>Most effective for thin credit files</li>
              </ul>
            </li>
          </ul>
          
          <h3>Medium-Term Improvements (3-6 Months)</h3>
          <ul>
            <li><strong>Perfect Payment History:</strong> Pay everything on time
              <ul>
                <li>Set up autopay for all bills</li>
                <li>Payment history is 35% of score</li>
              </ul>
            </li>
            <li><strong>Pay Off Collections:</strong> Settle or pay old debts
              <ul>
                <li>Negotiate "pay for delete" if possible</li>
                <li>Focus on recent collections first</li>
              </ul>
            </li>
            <li><strong>Don't Close Old Cards:</strong> Keep credit history length
              <ul>
                <li>Length of history is 15% of score</li>
                <li>Keep oldest accounts active</li>
              </ul>
            </li>
          </ul>
          
          <h3>Long-Term Strategies (6-12 Months)</h3>
          <ul>
            <li><strong>Establish Payment Patterns:</strong> 12+ months of perfect payments</li>
            <li><strong>Build Credit Mix:</strong> Have installment and revolving credit</li>
            <li><strong>Age Your Accounts:</strong> Let average age increase</li>
            <li><strong>Avoid New Credit:</strong> No new inquiries for 6 months before mortgage</li>
          </ul>
          
          <h3>Credit Score Impact Estimator</h3>
          <table>
            <tr>
              <th>Action</th>
              <th>Potential Score Change</th>
              <th>Timeframe</th>
            </tr>
            <tr>
              <td>Pay cards to <10% utilization</td>
              <td>+20 to +50 points</td>
              <td>30-45 days</td>
            </tr>
            <tr>
              <td>Remove credit report error</td>
              <td>+10 to +100 points</td>
              <td>30-60 days</td>
            </tr>
            <tr>
              <td>Pay off collections</td>
              <td>+10 to +30 points</td>
              <td>30-90 days</td>
            </tr>
            <tr>
              <td>6 months perfect payments</td>
              <td>+15 to +40 points</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td>Become authorized user</td>
              <td>+10 to +50 points</td>
              <td>Immediate to 60 days</td>
            </tr>
          </table>
        `
      },
      {
        title: 'How to Use This Rate Estimator',
        content: `
          <p>To estimate your mortgage rate based on credit score:</p>
          
          <ol>
            <li><strong>Enter Your Credit Score:</strong> Use your FICO score (mortgage version if known)</li>
            <li><strong>Select Loan Amount:</strong> How much you plan to borrow</li>
            <li><strong>Choose Down Payment:</strong> Percentage you'll put down</li>
            <li><strong>Select Loan Type:</strong> Conventional, FHA, VA, or USDA</li>
            <li><strong>Property Type:</strong> Primary residence, second home, or investment</li>
            <li><strong>Loan Term:</strong> 15-year or 30-year fixed</li>
            <li><strong>Review Results:</strong> See estimated rate, monthly payment, and total interest</li>
            <li><strong>Compare Scenarios:</strong> Test different credit scores to see savings potential</li>
          </ol>
          
          <h3>Understanding Your Results</h3>
          <p>The calculator shows:</p>
          <ul>
            <li><strong>Estimated Interest Rate:</strong> Based on your credit score tier</li>
            <li><strong>Monthly Payment:</strong> Principal and interest</li>
            <li><strong>Total Interest Paid:</strong> Over life of loan</li>
            <li><strong>Rate Comparison:</strong> How your rate compares to best available</li>
            <li><strong>Potential Savings:</strong> If you improve your credit score</li>
            <li><strong>Break-Even Analysis:</strong> When credit improvement pays off</li>
          </ul>
          
          <p><strong>Disclaimer:</strong> Rates shown are estimates based on typical pricing. Actual rates vary by lender, market conditions, and individual qualifications.</p>
        `
      }
    ],
    
    faqs: [
      {
        question: 'How many points does my credit score need to increase to get a better rate?',
        answer: 'Rate tiers typically have breakpoints at 620, 640, 660, 680, 700, 720, 740, and 760. You generally need to cross one of these thresholds to see a rate improvement. For example, improving from 675 to 685 moves you from the 660-679 tier to 680-699, potentially saving 0.125-0.25% on your rate.'
      },
      {
        question: 'Can I get a mortgage with a 580 credit score?',
        answer: 'Yes, FHA loans accept scores as low as 580 with 3.5% down (or 500-579 with 10% down). However, you\'ll pay significantly higher interest rates and many lenders have overlays requiring 600-620 minimum. VA loans are also flexible for veterans. Conventional loans typically require 620 minimum.'
      },
      {
        question: 'Which credit score do mortgage lenders use?',
        answer: 'Lenders pull FICO scores 2, 4, and 5 (classic mortgage scores) from Experian, TransUnion, and Equifax. They use the middle of the three scores. For co-borrowers, they use the lower of the two middle scores. These scores are often 10-30 points lower than the FICO 8 or VantageScore you see on free credit monitoring sites.'
      },
      {
        question: 'How quickly can I improve my credit score for a better rate?',
        answer: 'Quick improvements (30-60 days) come from paying down credit cards below 30% utilization and disputing errors. Most people can boost scores 20-50 points in 60-90 days with focused effort. More significant improvements require 6-12 months of perfect payment history and debt reduction.'
      },
      {
        question: 'Is it worth waiting to buy a home while I improve my credit?',
        answer: 'It depends on your current score and market conditions. If you\'re close to a rate threshold (e.g., 675 and can reach 680), waiting 60-90 days could save thousands. However, if home prices are rising rapidly or your score needs major improvement (100+ points), the opportunity cost may outweigh the rate benefit. Calculate the break-even point using this calculator.'
      }
    ]
  }
};
