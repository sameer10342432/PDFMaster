import { Calculator } from '@/types/calculators';
import { FileCheck } from 'lucide-react';

export const mortgagePreApprovalCalculator: Calculator = {
  title: 'Mortgage Pre-Approval Calculator',
  description: 'Estimate your pre-approval amount based on income, debts, credit score, and down payment.',
  icon: FileCheck,
  category: 'Basic Calculators',
  slug: 'mortgage-pre-approval-calculator',
  metaTitle: 'Mortgage Pre-Approval Calculator | Estimate Home Loan Pre-Qualification Amount',
  metaDescription: 'Calculate how much you can get pre-approved for with our mortgage pre-approval calculator. Estimate loan amounts based on income, debts, credit score, and DTI requirements.',
  
  article: {
    introduction: `
      <p>Getting pre-approved for a mortgage is one of the most important first steps in homebuying. Our Mortgage Pre-Approval Calculator helps you estimate how much you can borrow based on your income, existing debts, credit score, and down payment capacity.</p>
      
      <p>Understanding your pre-approval amount allows you to house hunt within your budget and demonstrates to sellers that you're a serious, qualified buyer.</p>
    `,
    
    sections: [
      {
        title: 'What is Mortgage Pre-Approval?',
        content: `
          <p>Mortgage pre-approval is a conditional commitment from a lender stating how much they're willing to lend you based on verified financial information. It differs from pre-qualification:</p>
          
          <table>
            <tr>
              <th>Aspect</th>
              <th>Pre-Qualification</th>
              <th>Pre-Approval</th>
            </tr>
            <tr>
              <td>Documentation</td>
              <td>Self-reported info</td>
              <td>Verified documents</td>
            </tr>
            <tr>
              <td>Credit Check</td>
              <td>Soft inquiry or none</td>
              <td>Hard credit pull</td>
            </tr>
            <tr>
              <td>Binding</td>
              <td>Non-binding estimate</td>
              <td>Conditional commitment</td>
            </tr>
            <tr>
              <td>Seller Confidence</td>
              <td>Low</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Time Required</td>
              <td>Minutes to hours</td>
              <td>1-3 days</td>
            </tr>
          </table>
          
          <h3>Benefits of Pre-Approval</h3>
          <ul>
            <li><strong>Know Your Budget:</strong> Shop for homes within your price range</li>
            <li><strong>Stronger Offers:</strong> Sellers take your offers more seriously</li>
            <li><strong>Faster Closing:</strong> Much of underwriting is already complete</li>
            <li><strong>Rate Lock Option:</strong> Some lenders offer rate locks during pre-approval</li>
            <li><strong>Negotiating Power:</strong> Compete better in multiple-offer situations</li>
            <li><strong>Identify Issues Early:</strong> Discover and fix credit problems before house hunting</li>
          </ul>
        `
      },
      {
        title: 'Factors That Determine Pre-Approval Amount',
        content: `
          <h3>1. Gross Monthly Income</h3>
          <p>Lenders verify all stable, recurring income sources:</p>
          <ul>
            <li><strong>W-2 Employment:</strong> Base salary, guaranteed overtime, bonuses (2-year average)</li>
            <li><strong>Self-Employment:</strong> Net income from tax returns (2-year average)</li>
            <li><strong>Rental Income:</strong> 75% of documented rental income</li>
            <li><strong>Retirement/Social Security:</strong> Documented monthly benefits</li>
            <li><strong>Alimony/Child Support:</strong> Court-ordered payments (if continuing 3+ years)</li>
            <li><strong>Investment Income:</strong> Dividends, interest (2-year history)</li>
          </ul>
          
          <h3>2. Debt-to-Income (DTI) Ratio</h3>
          <p>Maximum DTI limits by loan type:</p>
          <ul>
            <li><strong>Conventional:</strong> 36-45% (higher with strong compensating factors)</li>
            <li><strong>FHA:</strong> 43-50% (higher with excellent credit)</li>
            <li><strong>VA:</strong> 41-50%+ (uses residual income test)</li>
            <li><strong>USDA:</strong> 29% front-end, 41% back-end</li>
          </ul>
          
          <h3>3. Credit Score</h3>
          <p>Minimum scores and their impact:</p>
          <ul>
            <li><strong>760+:</strong> Best rates, maximum loan amounts</li>
            <li><strong>700-759:</strong> Excellent rates, full approval odds</li>
            <li><strong>660-699:</strong> Good rates, solid approval chances</li>
            <li><strong>620-659:</strong> Higher rates, may need compensating factors</li>
            <li><strong>580-619:</strong> FHA eligible, limited conventional options</li>
            <li><strong>500-579:</strong> FHA with 10% down, manual underwriting</li>
          </ul>
          
          <h3>4. Down Payment</h3>
          <p>Available cash for down payment and closing costs:</p>
          <ul>
            <li>Affects maximum home price you can afford</li>
            <li>Determines LTV ratio and PMI requirements</li>
            <li>20% down eliminates PMI on conventional loans</li>
            <li>Must also cover closing costs (2-5% of purchase price)</li>
            <li>Lenders require 2-6 months reserves for some loans</li>
          </ul>
          
          <h3>5. Loan Type</h3>
          <p>Different programs have different requirements:</p>
          <ul>
            <li><strong>Conventional:</strong> Flexible, best for strong credit and income</li>
            <li><strong>FHA:</strong> Lower credit/down payment requirements</li>
            <li><strong>VA:</strong> Best for eligible veterans, no down payment</li>
            <li><strong>USDA:</strong> No down payment for eligible rural properties</li>
          </ul>
        `
      },
      {
        title: 'Calculating Your Pre-Approval Amount',
        content: `
          <h3>28/36 Rule (Traditional Method)</h3>
          <p>Conservative approach used by many lenders:</p>
          <ul>
            <li><strong>Front-End (28%):</strong> Housing costs ≤ 28% of gross income</li>
            <li><strong>Back-End (36%):</strong> All debts ≤ 36% of gross income</li>
          </ul>
          
          <p><strong>Example Calculation:</strong></p>
          <p>Annual Income: $80,000 | Monthly Gross: $6,667</p>
          <ul>
            <li>Max housing payment: $6,667 × 28% = $1,867</li>
            <li>Max total debt: $6,667 × 36% = $2,400</li>
            <li>Current debts: $600/month</li>
            <li>Available for housing: $2,400 - $600 = $1,800</li>
            <li><strong>Max housing payment: $1,800</strong> (lower of two limits)</li>
          </ul>
          
          <h3>Converting Payment to Purchase Price</h3>
          <p>Using the maximum payment, calculate affordable home price:</p>
          <ol>
            <li><strong>Subtract Taxes & Insurance:</strong> $1,800 - $350 (est.) = $1,450 for P&I</li>
            <li><strong>Calculate Loan Amount:</strong> Use mortgage calculator at current rates</li>
            <li><strong>Add Down Payment:</strong> Loan amount + down payment = max price</li>
          </ol>
          
          <p><strong>Example:</strong></p>
          <ul>
            <li>Available P&I: $1,450/month</li>
            <li>Interest rate: 7%</li>
            <li>Loan amount: ~$217,000 (30-year)</li>
            <li>Down payment: $43,000 (20%)</li>
            <li><strong>Maximum home price: $260,000</strong></li>
          </ul>
        `
      },
      {
        title: 'Documents Required for Pre-Approval',
        content: `
          <h3>Income Verification</h3>
          <p><strong>W-2 Employees:</strong></p>
          <ul>
            <li>Last 2 years W-2 forms</li>
            <li>Last 2 years tax returns (if self-employed income)</li>
            <li>Last 30 days pay stubs</li>
            <li>Employer contact information</li>
            <li>YTD earnings statement</li>
          </ul>
          
          <p><strong>Self-Employed:</strong></p>
          <ul>
            <li>Last 2 years personal tax returns (all schedules)</li>
            <li>Last 2 years business tax returns</li>
            <li>Year-to-date profit & loss statement</li>
            <li>Business license or registration</li>
            <li>CPA letter (sometimes required)</li>
          </ul>
          
          <h3>Asset Documentation</h3>
          <ul>
            <li>Last 2 months bank statements (all pages)</li>
            <li>Last 2 months investment account statements</li>
            <li>Retirement account statements (if using for down payment)</li>
            <li>Gift letter (if receiving gift funds)</li>
            <li>Explanation of large deposits (>50% of monthly income)</li>
          </ul>
          
          <h3>Credit & Debt Information</h3>
          <ul>
            <li>Authorization for credit check</li>
            <li>List of all debts and monthly payments</li>
            <li>Student loan documentation</li>
            <li>Divorce decree (if paying/receiving alimony)</li>
            <li>Bankruptcy discharge papers (if applicable)</li>
          </ul>
          
          <h3>Identity & Residence</h3>
          <ul>
            <li>Government-issued photo ID (driver's license, passport)</li>
            <li>Social Security card or verification</li>
            <li>Proof of residence (utility bills, lease)</li>
            <li>Work visa or permanent resident card (if applicable)</li>
          </ul>
        `
      },
      {
        title: 'Pre-Approval vs. Final Approval',
        content: `
          <h3>What Pre-Approval Covers</h3>
          <ul>
            <li>Income verification and employment check</li>
            <li>Credit review and score confirmation</li>
            <li>Debt assessment and DTI calculation</li>
            <li>Asset verification for down payment</li>
            <li>Maximum loan amount determination</li>
          </ul>
          
          <h3>What Happens After Pre-Approval</h3>
          <ol>
            <li><strong>House Hunting:</strong> Search within pre-approved amount</li>
            <li><strong>Make Offer:</strong> Submit offer with pre-approval letter</li>
            <li><strong>Under Contract:</strong> Property-specific underwriting begins</li>
            <li><strong>Home Appraisal:</strong> Property value verification</li>
            <li><strong>Final Underwriting:</strong> Re-verify income, assets, credit</li>
            <li><strong>Clear to Close:</strong> Final approval granted</li>
            <li><strong>Closing:</strong> Sign documents, receive keys</li>
          </ol>
          
          <h3>Pre-Approval Can Change If:</h3>
          <ul>
            <li>You take on new debt (car loan, credit cards)</li>
            <li>Your employment status changes</li>
            <li>Your credit score drops significantly</li>
            <li>You make large unexplained deposits</li>
            <li>Interest rates change substantially</li>
            <li>The property doesn't meet lender standards</li>
            <li>Appraisal comes in below contract price</li>
          </ul>
          
          <p><strong>Important:</strong> Don't make major financial changes between pre-approval and closing!</p>
        `
      },
      {
        title: 'Maximizing Your Pre-Approval Amount',
        content: `
          <h3>Before Applying</h3>
          <ul>
            <li><strong>Improve Credit Score:</strong>
              <ul>
                <li>Pay down credit card balances below 30% utilization</li>
                <li>Pay all bills on time for 6-12 months</li>
                <li>Dispute credit report errors</li>
                <li>Don't close old credit cards</li>
              </ul>
            </li>
            <li><strong>Reduce DTI:</strong>
              <ul>
                <li>Pay off small debts completely</li>
                <li>Reduce credit card balances</li>
                <li>Avoid new debt for 6 months before applying</li>
              </ul>
            </li>
            <li><strong>Increase Down Payment:</strong>
              <ul>
                <li>Save aggressively for larger down payment</li>
                <li>Consider gift funds from family</li>
                <li>Look into down payment assistance programs</li>
              </ul>
            </li>
            <li><strong>Document All Income:</strong>
              <ul>
                <li>Include overtime if regular (2-year history)</li>
                <li>Add bonus income with documentation</li>
                <li>Include rental income from properties</li>
                <li>Consider adding co-borrower</li>
              </ul>
            </li>
          </ul>
          
          <h3>Choose the Right Loan Program</h3>
          <ul>
            <li><strong>VA Loan:</strong> If eligible, best option with no down payment</li>
            <li><strong>FHA Loan:</strong> Lower credit/income requirements</li>
            <li><strong>Conventional:</strong> Best rates if you have 20% down and good credit</li>
            <li><strong>USDA Loan:</strong> 100% financing in eligible rural areas</li>
          </ul>
        `
      },
      {
        title: 'How to Use This Pre-Approval Calculator',
        content: `
          <p>To estimate your pre-approval amount:</p>
          
          <ol>
            <li><strong>Enter Annual Income:</strong> Gross income before taxes</li>
            <li><strong>List Monthly Debts:</strong> All recurring monthly obligations</li>
            <li><strong>Credit Score:</strong> Your current credit score range</li>
            <li><strong>Down Payment:</strong> Amount you can put down</li>
            <li><strong>Select Loan Type:</strong> Conventional, FHA, VA, or USDA</li>
            <li><strong>Interest Rate:</strong> Current market rate (default provided)</li>
            <li><strong>Property Taxes/Insurance:</strong> Estimated monthly costs</li>
            <li><strong>Review Results:</strong> See maximum loan amount and purchase price</li>
          </ol>
          
          <h3>Understanding Your Results</h3>
          <p>The calculator provides:</p>
          <ul>
            <li><strong>Maximum Loan Amount:</strong> How much you can borrow</li>
            <li><strong>Maximum Purchase Price:</strong> Including down payment</li>
            <li><strong>Monthly Payment:</strong> Principal, interest, taxes, insurance</li>
            <li><strong>DTI Ratios:</strong> Front-end and back-end percentages</li>
            <li><strong>PMI Cost:</strong> If applicable based on down payment</li>
            <li><strong>Cash Needed:</strong> Down payment plus closing costs</li>
            <li><strong>Qualification Status:</strong> Likelihood of approval</li>
          </ul>
          
          <p><strong>Note:</strong> This calculator provides estimates. Actual pre-approval amounts may vary based on lender overlays, property type, and other factors.</p>
        `
      }
    ],
    
    faqs: [
      {
        question: 'How long does a pre-approval last?',
        answer: 'Most pre-approvals are valid for 60-90 days. After that period, lenders typically need to re-verify your income, assets, and credit. If you haven\'t found a home within that timeframe, request a pre-approval extension or renewal.'
      },
      {
        question: 'Does pre-approval guarantee I\'ll get the loan?',
        answer: 'No, pre-approval is conditional. Final approval depends on the property appraisal, title search, and re-verification of your financial situation at closing. However, if nothing changes in your finances and the property meets lender standards, approval is highly likely.'
      },
      {
        question: 'Will getting pre-approved hurt my credit score?',
        answer: 'Pre-approval requires a hard credit inquiry, which may temporarily lower your score by 5-10 points. However, multiple mortgage inquiries within 45 days count as one inquiry, so shop with multiple lenders during that window without additional credit impact.'
      },
      {
        question: 'Should I get pre-approved before house hunting?',
        answer: 'Yes, absolutely. Pre-approval helps you understand your budget, makes your offers more competitive, and speeds up the closing process. In competitive markets, sellers may not even consider offers without pre-approval letters.'
      },
      {
        question: 'Can I get pre-approved with bad credit?',
        answer: 'Yes, though your options are more limited. FHA loans accept scores as low as 580 (or 500 with 10% down). VA loans are also flexible for veterans. However, lower credit scores mean higher interest rates and stricter requirements. Consider improving your credit before applying for better terms.'
      }
    ]
  }
};
