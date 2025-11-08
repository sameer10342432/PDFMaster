import { Calculator } from '@/types/calculators';
import { Calculator as CalcIcon } from 'lucide-react';

export const dtiCalculatorFhaLoans: Calculator = {
  title: 'DTI Calculator for FHA Loans',
  description: 'Calculate your debt-to-income ratio specifically for FHA loan qualification with streamlined and standard underwriting paths.',
  icon: CalcIcon,
  category: 'Basic Calculators',
  slug: 'dti-calculator-fha-loans',
  metaTitle: 'FHA DTI Calculator | Debt-to-Income Ratio Calculator for FHA Loans',
  metaDescription: 'Calculate your DTI ratio for FHA loan approval. Understand FHA-specific requirements, compensating factors, and qualification with our specialized FHA DTI calculator.',
  
  article: {
    introduction: `
      <p>FHA loans have unique debt-to-income requirements that differ from conventional mortgages. Our FHA DTI Calculator helps you understand whether you qualify for FHA financing based on your income and debts, including both standard and streamlined underwriting options.</p>
      
      <p>FHA loans are more flexible than conventional loans, making homeownership accessible to more people, especially first-time buyers with limited savings or lower credit scores.</p>
    `,
    
    sections: [
      {
        title: 'FHA DTI Requirements Explained',
        content: `
          <p>FHA loans use two DTI ratios with specific maximum thresholds:</p>
          
          <h3>Front-End DTI (Housing Ratio)</h3>
          <p><strong>Maximum: 31%</strong> (can go higher with compensating factors)</p>
          <p>Includes only housing-related expenses (PITIA):</p>
          <ul>
            <li><strong>P:</strong> Principal</li>
            <li><strong>I:</strong> Interest</li>
            <li><strong>T:</strong> Property Taxes</li>
            <li><strong>I:</strong> Homeowners Insurance</li>
            <li><strong>A:</strong> Association/HOA Fees</li>
            <li><strong>MIP:</strong> FHA Mortgage Insurance Premium (annual divided by 12)</li>
          </ul>
          
          <p><strong>Formula:</strong> (PITIA ÷ Gross Monthly Income) × 100</p>
          
          <h3>Back-End DTI (Total DTI)</h3>
          <p><strong>Maximum: 43%</strong> (can go up to 50%+ with compensating factors)</p>
          <p>Includes housing expenses plus all other monthly debt payments:</p>
          <ul>
            <li>All housing costs (PITIA)</li>
            <li>Car loans and leases</li>
            <li>Student loans</li>
            <li>Credit card minimum payments</li>
            <li>Personal loans</li>
            <li>Child support/alimony</li>
            <li>Other installment debts</li>
          </ul>
          
          <p><strong>Formula:</strong> (Total Monthly Debts ÷ Gross Monthly Income) × 100</p>
        `
      },
      {
        title: 'FHA DTI Approval Paths',
        content: `
          <h3>Automated Approval (TOTAL Scorecard)</h3>
          <p>Most FHA loans are approved through HUD\'s automated underwriting system called TOTAL (Technology Open to Approved Lenders).</p>
          
          <p><strong>DTI Limits with Automated Approval:</strong></p>
          <table>
            <tr>
              <th>Credit Score</th>
              <th>Max DTI</th>
              <th>Requirements</th>
            </tr>
            <tr>
              <td>640+</td>
              <td>Up to 50%</td>
              <td>Automated approval with strong credit</td>
            </tr>
            <tr>
              <td>620-639</td>
              <td>Up to 46.9%</td>
              <td>May need compensating factors</td>
            </tr>
            <tr>
              <td>580-619</td>
              <td>Up to 43%</td>
              <td>Standard FHA limits</td>
            </tr>
            <tr>
              <td>Below 580</td>
              <td>Manual underwrite</td>
              <td>Stricter requirements, 10% down</td>
            </tr>
          </table>
          
          <h3>Manual Underwriting</h3>
          <p>When automated systems don\'t approve, manual underwriting applies:</p>
          <ul>
            <li><strong>Front-End DTI:</strong> 31% maximum (with exceptions)</li>
            <li><strong>Back-End DTI:</strong> 43% maximum (with compensating factors up to 50%+)</li>
            <li><strong>Compensating Factors Required:</strong> To exceed standard limits</li>
          </ul>
          
          <h3>Exceeding Standard DTI Limits</h3>
          <p>FHA allows higher DTI ratios (up to 56.9% in some cases) with strong compensating factors:</p>
          <ul>
            <li>Excellent credit history</li>
            <li>Substantial down payment (10%+)</li>
            <li>Significant cash reserves (6+ months)</li>
            <li>Minimal increase in housing payment</li>
            <li>Residual income above threshold</li>
            <li>Documented ability to save</li>
          </ul>
        `
      },
      {
        title: 'FHA-Specific Debt Calculations',
        content: `
          <h3>Student Loan Payments</h3>
          <p>FHA has specific rules for student loans:</p>
          
          <p><strong>If Payment is $0 or Deferred:</strong></p>
          <ul>
            <li>Use 0.5% of outstanding balance as monthly payment</li>
            <li>Example: $40,000 balance × 0.5% = $200/month</li>
            <li>OR use actual documented payment if available</li>
          </ul>
          
          <p><strong>Income-Driven Repayment Plans:</strong></p>
          <ul>
            <li>If payment is $0: Document the $0 payment with servicer letter</li>
            <li>FHA accepts $0 payment if properly documented</li>
            <li>Provide most recent billing statement or servicer letter</li>
          </ul>
          
          <h3>FHA Mortgage Insurance</h3>
          <p>FHA MIP must be included in DTI calculation:</p>
          
          <p><strong>Upfront MIP (UFMIP):</strong></p>
          <ul>
            <li>1.75% of base loan amount</li>
            <li>Typically rolled into loan (not included in DTI)</li>
          </ul>
          
          <p><strong>Annual MIP:</strong></p>
          <ul>
            <li>0.55% for loans ≤ $726,200 with LTV > 95%</li>
            <li>0.50% for loans ≤ $726,200 with LTV ≤ 95%</li>
            <li>0.75% for loans > $726,200</li>
            <li>Divided by 12 and added to monthly payment</li>
          </ul>
          
          <p><strong>Example MIP Calculation:</strong></p>
          <ul>
            <li>Loan Amount: $285,000</li>
            <li>LTV: 96.5%</li>
            <li>Annual MIP: $285,000 × 0.55% = $1,568</li>
            <li>Monthly MIP: $1,568 ÷ 12 = $131/month</li>
          </ul>
          
          <h3>Non-Borrowing Spouse Debts</h3>
          <ul>
            <li><strong>Community Property States:</strong> Spouse\'s debts may be included</li>
            <li><strong>Common Law States:</strong> Only joint debts and debts of borrowing spouse</li>
            <li><strong>Exception:</strong> Child support/alimony paid by non-borrower may still count</li>
          </ul>
        `
      },
      {
        title: 'Compensating Factors for FHA',
        content: `
          <p>FHA allows higher DTI ratios with compensating factors. Here are the most powerful factors:</p>
          
          <h3>Strong Compensating Factors</h3>
          
          <h4>1. Cash Reserves</h4>
          <ul>
            <li><strong>1-2 months reserves:</strong> Weak factor</li>
            <li><strong>3-6 months reserves:</strong> Strong factor</li>
            <li><strong>6+ months reserves:</strong> Very strong factor</li>
            <li><strong>Calculation:</strong> Reserves = (PITIA × number of months)</li>
          </ul>
          
          <h4>2. Minimal Increase in Housing Payment</h4>
          <ul>
            <li>New payment < 100% of current rent/mortgage</li>
            <li>Shows you already handle similar housing costs</li>
            <li>Document current payments with 12 months canceled checks</li>
          </ul>
          
          <h4>3. Residual Income</h4>
          <ul>
            <li>Income remaining after all debts and living expenses</li>
            <li>Higher residual = ability to absorb unexpected costs</li>
            <li>Some lenders use VA residual income guidelines</li>
          </ul>
          
          <h4>4. Excellent Credit History</h4>
          <ul>
            <li>Credit score 720+</li>
            <li>No late payments in past 12 months</li>
            <li>Long credit history (7+ years)</li>
            <li>Low credit utilization (<30%)</li>
          </ul>
          
          <h4>5. Substantial Down Payment</h4>
          <ul>
            <li>10% down = Moderate factor</li>
            <li>15% down = Strong factor</li>
            <li>20%+ down = Very strong factor</li>
          </ul>
          
          <h4>6. Documented Ability to Save</h4>
          <ul>
            <li>Steady increase in savings over 6-12 months</li>
            <li>Regular deposits beyond direct deposit</li>
            <li>Shows financial discipline</li>
          </ul>
          
          <h3>How Many Compensating Factors Needed?</h3>
          <table>
            <tr>
              <th>DTI Range</th>
              <th>Compensating Factors</th>
            </tr>
            <tr>
              <td>43-46%</td>
              <td>1-2 factors</td>
            </tr>
            <tr>
              <td>47-50%</td>
              <td>2-3 strong factors</td>
            </tr>
            <tr>
              <td>50-55%</td>
              <td>3+ very strong factors</td>
            </tr>
            <tr>
              <td>55%+</td>
              <td>Rarely approved, needs exceptional factors</td>
            </tr>
          </table>
        `
      },
      {
        title: 'FHA vs. Conventional DTI Comparison',
        content: `
          <table>
            <tr>
              <th>Aspect</th>
              <th>FHA</th>
              <th>Conventional</th>
            </tr>
            <tr>
              <td>Standard Max DTI</td>
              <td>31% / 43%</td>
              <td>28% / 36%</td>
            </tr>
            <tr>
              <td>Max with Compensating</td>
              <td>Up to 50-57%</td>
              <td>Up to 45-50%</td>
            </tr>
            <tr>
              <td>Student Loan Treatment</td>
              <td>0.5% of balance or actual</td>
              <td>1% of balance or actual</td>
            </tr>
            <tr>
              <td>Minimum Credit Score</td>
              <td>580 (500 with 10% down)</td>
              <td>620 typically</td>
            </tr>
            <tr>
              <td>Down Payment</td>
              <td>3.5% minimum</td>
              <td>3-20%</td>
            </tr>
            <tr>
              <td>Mortgage Insurance</td>
              <td>Always required (MIP)</td>
              <td>Required if <20% down (PMI)</td>
            </tr>
          </table>
          
          <h3>When FHA is Better for DTI</h3>
          <ul>
            <li>DTI between 43-50% (FHA more flexible)</li>
            <li>Student loans with low/deferred payments (0.5% vs 1%)</li>
            <li>Lower credit score (580-660 range)</li>
            <li>Strong compensating factors to leverage</li>
            <li>Limited down payment (3.5%)</li>
          </ul>
          
          <h3>When Conventional Might Be Better</h3>
          <ul>
            <li>DTI below 36% with 20%+ down (no PMI)</li>
            <li>Excellent credit 760+ (best rates)</li>
            <li>Larger loan amounts in high-cost areas</li>
            <li>Want to avoid lifetime MIP (10% down + recent changes)</li>
          </ul>
        `
      },
      {
        title: 'How to Use This FHA DTI Calculator',
        content: `
          <p>To calculate your FHA debt-to-income ratio and qualification:</p>
          
          <ol>
            <li><strong>Enter Gross Monthly Income:</strong>
              <ul>
                <li>Base salary or hourly wages</li>
                <li>Overtime (with 2-year history)</li>
                <li>Bonuses (2-year average)</li>
                <li>Self-employment (net from tax returns)</li>
                <li>Other qualifying income</li>
              </ul>
            </li>
            <li><strong>Enter Proposed Housing Payment:</strong>
              <ul>
                <li>Principal and interest</li>
                <li>Property taxes (annual ÷ 12)</li>
                <li>Homeowners insurance (annual ÷ 12)</li>
                <li>HOA fees (if applicable)</li>
                <li>FHA MIP (calculated automatically)</li>
              </ul>
            </li>
            <li><strong>List All Monthly Debt Payments:</strong>
              <ul>
                <li>Auto loans/leases</li>
                <li>Student loans (use FHA calculation)</li>
                <li>Credit cards (minimum payments)</li>
                <li>Personal loans</li>
                <li>Other installment debts</li>
              </ul>
            </li>
            <li><strong>Enter Additional Information:</strong>
              <ul>
                <li>Credit score</li>
                <li>Down payment percentage</li>
                <li>Cash reserves (months)</li>
                <li>Current housing payment</li>
              </ul>
            </li>
            <li><strong>Review Results:</strong>
              <ul>
                <li>Front-end DTI percentage</li>
                <li>Back-end DTI percentage</li>
                <li>Approval likelihood</li>
                <li>Compensating factors needed</li>
                <li>Recommendations for improvement</li>
              </ul>
            </li>
          </ol>
          
          <h3>Understanding Your Results</h3>
          
          <p><strong>Green (Excellent): DTI ≤ 43%</strong></p>
          <ul>
            <li>Strong approval odds with FHA</li>
            <li>Meets standard guidelines</li>
            <li>No compensating factors needed</li>
          </ul>
          
          <p><strong>Yellow (Good): DTI 43-46%</strong></p>
          <ul>
            <li>Good approval odds with compensating factors</li>
            <li>Need 1-2 compensating factors</li>
            <li>Higher credit score or reserves helpful</li>
          </ul>
          
          <p><strong>Orange (Fair): DTI 47-50%</strong></p>
          <ul>
            <li>Possible with strong compensating factors</li>
            <li>Need 2-3 strong factors</li>
            <li>Consider reducing debt or increasing income</li>
          </ul>
          
          <p><strong>Red (Poor): DTI > 50%</strong></p>
          <ul>
            <li>Difficult to qualify</li>
            <li>Need exceptional compensating factors</li>
            <li>Strongly consider debt reduction before applying</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'What\'s the maximum DTI for an FHA loan?',
        answer: 'The standard maximum is 43% back-end DTI, but FHA allows up to 50% or even 56.9% with strong compensating factors like excellent credit, significant reserves, or minimal increase in housing payment. Automated underwriting (TOTAL) is more flexible than manual underwriting.'
      },
      {
        question: 'How does FHA calculate student loan payments?',
        answer: 'For deferred or $0 payment student loans, FHA uses 0.5% of the outstanding balance as the monthly payment. Alternatively, you can provide documentation of the actual payment amount (including $0 for income-driven plans). Conventional loans use 1%, so FHA is more favorable for student loan borrowers.'
      },
      {
        question: 'Can I get an FHA loan with 50% DTI?',
        answer: 'Yes, it\'s possible with compensating factors. You\'ll likely need a combination of: excellent credit (680+), substantial cash reserves (6+ months), minimal increase in housing payment, or significant down payment (10%+). Automated approval through TOTAL makes this more achievable.'
      },
      {
        question: 'Do I need to include my spouse\'s income and debts?',
        answer: 'If your spouse is on the loan (co-borrower), yes - include all income and debts. If they\'re not on the loan, it depends on your state. In community property states, their debts may still count. In common law states, only joint debts and your personal debts count.'
      },
      {
        question: 'What if my FHA DTI is too high?',
        answer: 'Options include: 1) Pay off smaller debts to reduce monthly obligations, 2) Add a co-borrower to increase income, 3) Increase down payment to reduce loan amount, 4) Build up cash reserves to add compensating factors, 5) Wait and improve your financial situation, or 6) Consider a less expensive home to lower your housing payment.'
      }
    ]
  }
};
