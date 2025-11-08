import { Calculator } from '@/types/calculators';
import { LineChart } from 'lucide-react';

export const creditScoreImprovementSimulator: Calculator = {
  title: 'Credit Score Improvement Simulator (for Mortgage)',
  description: 'Simulate credit score improvements and see how different actions impact your mortgage qualification and rates.',
  icon: LineChart,
  category: 'Financial Planning',
  slug: 'credit-score-improvement-simulator',
  metaTitle: 'Credit Score Improvement Simulator | Mortgage Credit Score Calculator',
  metaDescription: 'Simulate credit score improvements for better mortgage rates. Model the impact of paying off debt, removing errors, and improving payment history on your home loan qualification.',
  
  article: {
    introduction: `
      <p>Your credit score is one of the most powerful tools for saving money on your mortgage. Our Credit Score Improvement Simulator helps you model different credit improvement strategies and see their impact on mortgage rates, monthly payments, and total interest costs over time.</p>
      
      <p>Understanding which actions have the biggest impact on your score helps you prioritize improvements for maximum mortgage savings.</p>
    `,
    
    sections: [
      {
        title: 'How Credit Scoring Works for Mortgages',
        content: `
          <p>FICO scores used for mortgages are calculated using five factors with different weights:</p>
          
          <h3>FICO Score Components</h3>
          <table>
            <tr>
              <th>Factor</th>
              <th>Weight</th>
              <th>What It Measures</th>
            </tr>
            <tr>
              <td>Payment History</td>
              <td>35%</td>
              <td>On-time vs. late payments, public records</td>
            </tr>
            <tr>
              <td>Credit Utilization</td>
              <td>30%</td>
              <td>Debt vs. available credit</td>
            </tr>
            <tr>
              <td>Length of History</td>
              <td>15%</td>
              <td>Age of accounts, account mix</td>
            </tr>
            <tr>
              <td>New Credit</td>
              <td>10%</td>
              <td>Recent inquiries and new accounts</td>
            </tr>
            <tr>
              <td>Credit Mix</td>
              <td>10%</td>
              <td>Types of credit (cards, loans, mortgage)</td>
            </tr>
          </table>
          
          <p><strong>Key Insight:</strong> The top two factors (payment history and utilization) make up 65% of your score, so focus improvements there first.</p>
        `
      },
      {
        title: 'Credit Actions and Score Impact Timeline',
        content: `
          <h3>Immediate Impact Actions (Reports in 30-45 Days)</h3>
          
          <h4>Pay Down Credit Cards</h4>
          <p><strong>Score Impact:</strong> +20 to +100 points (depending on current utilization)</p>
          <p><strong>Best Strategy:</strong></p>
          <ul>
            <li>Target: Get all cards below 30% utilization</li>
            <li>Ideal: Below 10% utilization on each card</li>
            <li>Perfect: Below 1% but not $0 (keep small balance)</li>
          </ul>
          <p><strong>Example Impact:</strong></p>
          <ul>
            <li>Current: 85% utilization, Score: 640</li>
            <li>After paying to 25%: Score jumps to 680-700</li>
            <li>Potential rate savings: 0.5-0.75% (saves $150-225/month on $300k loan)</li>
          </ul>
          
          <h4>Dispute Credit Report Errors</h4>
          <p><strong>Score Impact:</strong> +10 to +150 points (if errors exist)</p>
          <p><strong>Common Errors:</strong></p>
          <ul>
            <li>Accounts that don\'t belong to you</li>
            <li>Incorrect late payment markings</li>
            <li>Duplicate accounts</li>
            <li>Incorrect balances or credit limits</li>
            <li>Outdated negative items (>7 years old)</li>
          </ul>
          <p><strong>Timeline:</strong> Disputes resolve in 30-45 days</p>
          
          <h4>Become Authorized User</h4>
          <p><strong>Score Impact:</strong> +10 to +60 points (especially for thin files)</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            <li>Choose account with long history (5+ years)</li>
            <li>Ensure low utilization (<10%)</li>
            <li>Confirm perfect payment history</li>
            <li>Verify issuer reports to all 3 bureaus</li>
          </ul>
          
          <h3>Short-Term Actions (3-6 Months)</h3>
          
          <h4>Perfect Payment History</h4>
          <p><strong>Score Impact:</strong> +15 to +50 points over 6 months</p>
          <p><strong>Strategy:</strong></p>
          <ul>
            <li>Set up autopay for all accounts</li>
            <li>Pay minimum 7 days before due date</li>
            <li>Keep calendar reminders as backup</li>
            <li>Even $25 late payment can drop score 50-100 points</li>
          </ul>
          
          <h4>Pay Off Collections</h4>
          <p><strong>Score Impact:</strong> +10 to +40 points</p>
          <p><strong>Negotiation Tips:</strong></p>
          <ul>
            <li>Request "pay for delete" agreement in writing</li>
            <li>Settle for 40-60% if needed</li>
            <li>Get settlement terms in writing before paying</li>
            <li>Focus on recent collections first (bigger impact)</li>
          </ul>
          
          <h3>Long-Term Strategy (6-12+ Months)</h3>
          
          <h4>Build Payment History</h4>
          <p><strong>Score Impact:</strong> +30 to +80 points over 12 months</p>
          <p><strong>Timeline:</strong></p>
          <ul>
            <li>3 months perfect payments: +10-20 points</li>
            <li>6 months perfect payments: +20-40 points</li>
            <li>12 months perfect payments: +30-80 points</li>
          </ul>
          
          <h4>Age Your Accounts</h4>
          <p><strong>Score Impact:</strong> +5 to +20 points per year</p>
          <p><strong>Protect Average Age:</strong></p>
          <ul>
            <li>Don\'t close old cards (even unused)</li>
            <li>Keep oldest account active with small purchases</li>
            <li>Avoid opening new accounts before mortgage</li>
          </ul>
        `
      },
      {
        title: 'Mortgage Rate Impact Calculator',
        content: `
          <h3>Score Improvement Scenarios: Rate & Savings Impact</h3>
          <p><strong>$350,000 Loan, 30-Year Fixed:</strong></p>
          
          <table>
            <tr>
              <th>Credit Change</th>
              <th>Rate Change</th>
              <th>Monthly Savings</th>
              <th>30-Year Savings</th>
            </tr>
            <tr>
              <td>620 → 660</td>
              <td>8.0% → 7.25%</td>
              <td>$190</td>
              <td>$68,400</td>
            </tr>
            <tr>
              <td>640 → 680</td>
              <td>7.625% → 7.0%</td>
              <td>$145</td>
              <td>$52,200</td>
            </tr>
            <tr>
              <td>660 → 700</td>
              <td>7.25% → 6.75%</td>
              <td>$118</td>
              <td>$42,480</td>
            </tr>
            <tr>
              <td>680 → 720</td>
              <td>7.0% → 6.625%</td>
              <td>$89</td>
              <td>$32,040</td>
            </tr>
            <tr>
              <td>700 → 760</td>
              <td>6.75% → 6.5%</td>
              <td>$58</td>
              <td>$20,880</td>
            </tr>
          </table>
          
          <p><strong>Key Takeaway:</strong> The biggest savings come from improving scores in the 620-680 range. Even modest improvements yield substantial savings.</p>
          
          <h3>Break-Even Analysis</h3>
          <p>Is it worth waiting to buy while improving credit?</p>
          
          <p><strong>Scenario: Currently 640 credit, can reach 680 in 4 months</strong></p>
          <ul>
            <li>Rate improvement: 0.625% (7.625% → 7.0%)</li>
            <li>Monthly savings: $145</li>
            <li>4 months delay in home purchase</li>
            <li>Assume 0.5% annual home price appreciation</li>
          </ul>
          
          <p><strong>Math:</strong></p>
          <ul>
            <li>Home price increases: $350,000 × 0.5% × (4/12) = ~$583 more expensive</li>
            <li>Rate savings year 1: $145 × 12 = $1,740</li>
            <li><strong>Net benefit: $1,157 in first year, $52,200 over loan life</strong></li>
          </ul>
          
          <p><strong>Verdict:</strong> Waiting 4 months to improve score is worth it!</p>
        `
      },
      {
        title: 'Strategic Improvement Roadmap',
        content: `
          <h3>30-Day Quick Win Strategy</h3>
          <p><strong>Goal: +30 to +60 points</strong></p>
          <ol>
            <li><strong>Week 1:</strong>
              <ul>
                <li>Pull all 3 credit reports (annualcreditreport.com)</li>
                <li>Identify and dispute any errors</li>
                <li>Calculate current utilization on each card</li>
              </ul>
            </li>
            <li><strong>Week 2:</strong>
              <ul>
                <li>Pay down cards to target utilization:
                  <ul>
                    <li>Priority 1: Cards above 50% → get to 30%</li>
                    <li>Priority 2: Cards above 30% → get to 10%</li>
                    <li>Priority 3: All cards → get below 10%</li>
                  </ul>
                </li>
                <li>Ask family member to add you as authorized user</li>
              </ul>
            </li>
            <li><strong>Week 3:</strong>
              <ul>
                <li>Set up autopay on all accounts</li>
                <li>Make extra payment before statement date</li>
                <li>Request credit limit increases (don\'t spend it!)</li>
              </ul>
            </li>
            <li><strong>Week 4:</strong>
              <ul>
                <li>Monitor dispute results</li>
                <li>Maintain low balances until scores update</li>
                <li>Check updated scores (may need to wait until Day 45)</li>
              </ul>
            </li>
          </ol>
          
          <h3>90-Day Moderate Improvement Plan</h3>
          <p><strong>Goal: +50 to +100 points</strong></p>
          <ol>
            <li><strong>Month 1: Foundation</strong>
              <ul>
                <li>Complete 30-day quick win strategy above</li>
                <li>Identify collections and negotiate pay-for-delete</li>
                <li>Avoid any new credit applications</li>
              </ul>
            </li>
            <li><strong>Month 2: Build History</strong>
              <ul>
                <li>Maintain perfect payment record</li>
                <li>Keep utilization below 10% on all cards</li>
                <li>Pay off or settle remaining collections</li>
                <li>Request goodwill deletion of recent late payments</li>
              </ul>
            </li>
            <li><strong>Month 3: Optimize</strong>
              <ul>
                <li>Continue perfect payment history</li>
                <li>Keep cards active with small recurring charges</li>
                <li>Monitor scores - should see 50-100 point increase</li>
                <li>Pull FICO mortgage scores to confirm improvement</li>
              </ul>
            </li>
          </ol>
          
          <h3>6-Month Major Improvement Plan</h3>
          <p><strong>Goal: +100 to +150+ points</strong></p>
          <ol>
            <li><strong>Months 1-2: Clean Slate</strong>
              <ul>
                <li>Execute 30-day quick win strategy</li>
                <li>Pay off or settle all collections</li>
                <li>Dispute all credit report errors</li>
                <li>Get added as authorized user</li>
              </ul>
            </li>
            <li><strong>Months 3-4: Build & Maintain</strong>
              <ul>
                <li>Perfect payment history (most critical)</li>
                <li>Keep utilization at 1-10%</li>
                <li>Pay down installment loans if possible</li>
                <li>Request goodwill adjustments for old late payments</li>
              </ul>
            </li>
            <li><strong>Months 5-6: Optimize & Qualify</strong>
              <ul>
                <li>Continue perfect payment record</li>
                <li>Let credit age naturally</li>
                <li>Monitor scores monthly</li>
                <li>Get mortgage pre-qualification</li>
              </ul>
            </li>
          </ol>
        `
      },
      {
        title: 'Common Mistakes to Avoid',
        content: `
          <h3>DON\'T: Close Old Credit Cards</h3>
          <p><strong>Impact:</strong> Can drop score 10-50 points</p>
          <p><strong>Why:</strong> Reduces credit history length and available credit</p>
          <p><strong>Instead:</strong> Keep cards open, use occasionally for small purchases</p>
          
          <h3>DON\'T: Pay Off Cards and Immediately Apply</h3>
          <p><strong>Impact:</strong> Score may not have updated yet</p>
          <p><strong>Why:</strong> Credit reports update on different cycles (monthly)</p>
          <p><strong>Instead:</strong> Wait 30-45 days after payoff for score to reflect change</p>
          
          <h3>DON\'T: Apply for New Credit Before Mortgage</h3>
          <p><strong>Impact:</strong> 5-15 point drop per inquiry, lowers average age</p>
          <p><strong>Why:</strong> New credit = higher risk in lender's eyes</p>
          <p><strong>Instead:</strong> Avoid new credit 6+ months before applying</p>
          
          <h3>DON\'T: Let Cards Report $0 Balance</h3>
          <p><strong>Impact:</strong> May not contribute to score positively</p>
          <p><strong>Why:</strong> Shows no active credit usage</p>
          <p><strong>Instead:</strong> Keep 1-9% utilization ($1-100 balance per card)</p>
          
          <h3>DON\'T: Pay Collections Without Negotiating</h3>
          <p><strong>Impact:</strong> Paid collections still hurt score almost as much</p>
          <p><strong>Why:</strong> Negative mark remains on report</p>
          <p><strong>Instead:</strong> Negotiate pay-for-delete before paying</p>
          
          <h3>DON\'T: Make Big Purchases Before Closing</h3>
          <p><strong>Impact:</strong> Can kill mortgage approval</p>
          <p><strong>Why:</strong> Increases DTI, new inquiries, changes financial picture</p>
          <p><strong>Instead:</strong> Wait until after closing to buy furniture, cars, etc.</p>
        `
      },
      {
        title: 'How to Use This Improvement Simulator',
        content: `
          <p>To simulate credit score improvements and mortgage impact:</p>
          
          <ol>
            <li><strong>Enter Current Credit Profile:</strong>
              <ul>
                <li>Current credit score</li>
                <li>Number of credit cards and balances</li>
                <li>Total available credit</li>
                <li>Current utilization percentage</li>
                <li>Recent late payments or collections</li>
              </ul>
            </li>
            <li><strong>Select Improvement Actions:</strong>
              <ul>
                <li>Pay down credit cards to target %</li>
                <li>Dispute credit report errors</li>
                <li>Become authorized user</li>
                <li>Months of perfect payment history</li>
                <li>Pay off collections</li>
              </ul>
            </li>
            <li><strong>Set Mortgage Parameters:</strong>
              <ul>
                <li>Desired loan amount</li>
                <li>Down payment percentage</li>
                <li>Loan term (15 or 30 years)</li>
              </ul>
            </li>
            <li><strong>Review Projections:</strong>
              <ul>
                <li>Estimated new credit score</li>
                <li>Timeline for improvements</li>
                <li>New interest rate estimate</li>
                <li>Monthly payment savings</li>
                <li>Lifetime interest savings</li>
              </ul>
            </li>
            <li><strong>Compare Strategies:</strong>
              <ul>
                <li>Test different action combinations</li>
                <li>See which actions have biggest impact</li>
                <li>Determine optimal improvement timeline</li>
              </ul>
            </li>
          </ol>
          
          <h3>Simulator Features</h3>
          <ul>
            <li><strong>Before/After Comparison:</strong> Current vs. projected scores</li>
            <li><strong>Action Impact Ranking:</strong> Which actions help most</li>
            <li><strong>Timeline Visualization:</strong> Month-by-month score progression</li>
            <li><strong>Rate Calculator Integration:</strong> Automatic rate estimates</li>
            <li><strong>Savings Calculator:</strong> Total savings from improvements</li>
            <li><strong>Break-Even Analysis:</strong> Worth waiting vs. buying now?</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'How long does it take to improve my credit score by 100 points?',
        answer: 'It depends on your starting point and issues. If your score is low due to high utilization and you pay down cards, you could see 50-100 points in 30-60 days. If you need to build payment history and age accounts, expect 6-12 months for a 100-point improvement. Major improvements from severe credit damage (bankruptcy, foreclosure) can take 2-4 years.'
      },
      {
        question: 'Will paying off all my credit cards help or hurt my score?',
        answer: 'Paying cards down to 1-10% utilization helps significantly. However, paying to $0 and closing accounts can hurt by reducing available credit and credit history. Best strategy: Keep cards open with low balances (1-9% utilization) to maximize your score.'
      },
      {
        question: 'Can I improve my credit score while applying for a mortgage?',
        answer: 'Yes, but timing matters. Don\'t apply for new credit once you start the mortgage process. You CAN pay down credit cards - just alert your loan officer, as they\'ll need to re-verify debts before closing. Major credit changes during underwriting can delay or jeopardize approval.'
      },
      {
        question: 'How much will my score drop from a hard inquiry?',
        answer: 'Typically 5-10 points per inquiry, with the impact fading over 12 months. However, rate shopping for mortgages is smart: multiple mortgage inquiries within 45 days count as just one inquiry. Shop rates freely within that window without additional score damage.'
      },
      {
        question: 'Is it better to improve my credit before applying or just apply with a lower score?',
        answer: 'Run the numbers with this calculator. If you\'re close to a rate tier (e.g., 675 and can reach 680 in 60 days), waiting often saves more than rising home prices cost. But if improvement will take 6+ months and prices are rising 5%+ annually, buying now with a higher rate and refinancing later might make more sense.'
      }
    ]
  }
};
