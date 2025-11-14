import { CalculatorContent } from '@/types';

export const AiMortgageUnderwritingRiskAnalyzerContent: CalculatorContent = {
  title: 'AI Mortgage Underwriting Risk Analyzer',
  description: 'Analyze your mortgage application risk factors, predict approval likelihood, and identify issues before applying',
  icon: '🔍',
  category: 'Additional Tools',
  slug: 'ai-mortgage-underwriting-risk-analyzer',
  
  metaTitle: 'AI Mortgage Underwriting Risk Analyzer | Property Tools',
  metaDescription: 'Analyze mortgage approval risk factors, predict your loan approval chances, and identify potential issues before applying with AI-powered underwriting analysis.',
  
  article: {
    title: 'Predict Mortgage Approval and Identify Risks with AI Analysis',
    content: `
      <h2>What is the AI Mortgage Underwriting Risk Analyzer?</h2>
      <p>The AI Mortgage Underwriting Risk Analyzer evaluates your financial profile against mortgage underwriting standards to predict your approval likelihood and identify potential red flags before you apply. By analyzing income, credit, debt, assets, and property details, this tool provides insights into how lenders will view your application and what you can do to improve your approval chances.</p>

      <h3>Why Pre-Analyze Your Application?</h3>
      <p>Applying for mortgages without understanding underwriting risks can lead to:</p>
      <ul>
        <li>Hard credit inquiries that lower your credit score</li>
        <li>Wasted time on applications likely to be denied</li>
        <li>Missing opportunities to fix issues before applying</li>
        <li>Accepting worse terms than you qualify for</li>
        <li>Delays in closing that cost you the property</li>
        <li>Paying for appraisals and inspections that don't result in loans</li>
      </ul>

      <h3>What the Analyzer Evaluates</h3>
      
      <h4>1. Credit Risk Factors</h4>
      <ul>
        <li><strong>Credit Score:</strong> Impact on approval and interest rates</li>
        <li><strong>Credit History:</strong> Length and consistency of credit use</li>
        <li><strong>Recent Inquiries:</strong> Too many recent applications</li>
        <li><strong>Payment History:</strong> Late payments, collections, bankruptcies</li>
        <li><strong>Credit Utilization:</strong> Percentage of available credit used</li>
        <li><strong>Public Records:</strong> Bankruptcies, liens, judgments</li>
      </ul>

      <h4>2. Income & Employment</h4>
      <ul>
        <li><strong>Income Stability:</strong> Employment history and consistency</li>
        <li><strong>Income Type:</strong> W-2, self-employed, commission, etc.</li>
        <li><strong>Income Documentation:</strong> Ability to verify income</li>
        <li><strong>Income Trends:</strong> Increasing, stable, or declining</li>
        <li><strong>Job Gaps:</strong> Unexplained employment interruptions</li>
        <li><strong>Industry Risk:</strong> Stability of your profession</li>
      </ul>

      <h4>3. Debt-to-Income Ratio (DTI)</h4>
      <ul>
        <li><strong>Front-End DTI:</strong> Housing payment ÷ gross income</li>
        <li><strong>Back-End DTI:</strong> All debt payments ÷ gross income</li>
        <li><strong>DTI Thresholds:</strong> Conventional (43-50%), FHA (31/43%), VA (41%)</li>
        <li><strong>Compensating Factors:</strong> High assets, reserves, or credit score</li>
      </ul>

      <h4>4. Assets & Reserves</h4>
      <ul>
        <li><strong>Down Payment:</strong> Source and seasoning of funds</li>
        <li><strong>Reserves:</strong> Months of payments in savings</li>
        <li><strong>Gift Funds:</strong> Properly documented family gifts</li>
        <li><strong>Retirement Accounts:</strong> 401k, IRA (60-70% counted)</li>
        <li><strong>Large Deposits:</strong> Unusual transactions needing explanation</li>
      </ul>

      <h4>5. Property Considerations</h4>
      <ul>
        <li><strong>Property Type:</strong> Single-family vs. multi-unit vs. condo</li>
        <li><strong>Occupancy:</strong> Primary residence, second home, investment</li>
        <li><strong>Loan-to-Value (LTV):</strong> Down payment percentage</li>
        <li><strong>Appraisal Risk:</strong> Likelihood of low appraisal</li>
        <li><strong>Property Condition:</strong> Issues that may affect financing</li>
      </ul>

      <h3>Understanding Risk Levels</h3>
      
      <h4>LOW RISK (Strong Approval Likelihood)</h4>
      <ul>
        <li>Credit score 740+</li>
        <li>DTI under 36%</li>
        <li>20%+ down payment</li>
        <li>2+ years stable employment</li>
        <li>6+ months reserves</li>
        <li>No credit issues in 2+ years</li>
      </ul>

      <h4>MODERATE RISK (Likely Approved with Conditions)</h4>
      <ul>
        <li>Credit score 640-739</li>
        <li>DTI 36-43%</li>
        <li>5-19% down payment</li>
        <li>1-2 years employment history</li>
        <li>2-5 months reserves</li>
        <li>Minor credit issues or explanations needed</li>
      </ul>

      <h4>HIGH RISK (Approval Uncertain or Unlikely)</h4>
      <ul>
        <li>Credit score under 640</li>
        <li>DTI over 43%</li>
        <li>Less than 5% down payment</li>
        <li>Less than 1 year employment</li>
        <li>Minimal reserves</li>
        <li>Recent bankruptcies, foreclosures, or major derogatory items</li>
      </ul>

      <h3>Common Red Flags Identified</h3>
      
      <h4>Credit Red Flags</h4>
      <p>🚩 <strong>Recent late payments:</strong> 30/60/90 day lates in past 12-24 months</p>
      <p>🚩 <strong>High credit utilization:</strong> Using more than 30% of available credit</p>
      <p>🚩 <strong>Too many inquiries:</strong> 6+ hard inquiries in 6 months</p>
      <p>🚩 <strong>Thin credit file:</strong> Fewer than 3 tradelines or short history</p>
      <p>🚩 <strong>Collections:</strong> Unpaid medical bills, utilities, or other debts</p>

      <h4>Income Red Flags</h4>
      <p>🚩 <strong>Job gaps:</strong> Unemployment periods without explanation</p>
      <p>🚩 <strong>Declining income:</strong> Lower income than previous years</p>
      <p>🚩 <strong>Self-employment:</strong> Less than 2 years tax returns</p>
      <p>🚩 <strong>Commission/bonus heavy:</strong> Irregular income patterns</p>
      <p>🚩 <strong>New employment:</strong> Started job within past 30 days</p>

      <h4>Asset Red Flags</h4>
      <p>🚩 <strong>Large recent deposits:</strong> Unexplained deposits need sourcing</p>
      <p>🚩 <strong>Borrowed down payment:</strong> Down payment must be your money</p>
      <p>🚩 <strong>Insufficient reserves:</strong> No savings after down payment/closing</p>
      <p>🚩 <strong>Cash-heavy:</strong> Large amounts of cash difficult to document</p>

      <h3>Approval Likelihood by Loan Type</h3>
      
      <h4>Conventional Loans</h4>
      <p>Most strict requirements:
      <ul>
        <li>Minimum 620 credit score (3% down) or 580 (with compensating factors)</li>
        <li>Maximum 50% DTI (typically 43% without strong compensating factors)</li>
        <li>2 years employment in same field</li>
        <li>Clean credit for 2+ years after bankruptcy/foreclosure</li>
      </ul>

      <h4>FHA Loans</h4>
      <p>More flexible for first-time buyers:
      <ul>
        <li>Minimum 580 credit score (3.5% down) or 500-579 (10% down)</li>
        <li>Maximum 31% front-end, 43% back-end DTI (some flexibility)</li>
        <li>2 years after Chapter 13, 3 years after foreclosure</li>
        <li>More lenient on credit history and income documentation</li>
      </ul>

      <h4>VA Loans</h4>
      <p>Best terms for veterans:
      <ul>
        <li>No minimum credit score (lender overlays typically 620+)</li>
        <li>Maximum 41% DTI (with residual income requirement)</li>
        <li>0% down payment available</li>
        <li>2 years after Chapter 7, 1 year after Chapter 13</li>
      </ul>

      <h4>USDA Loans</h4>
      <p>For rural properties:
      <ul>
        <li>Minimum 640 credit score typically</li>
        <li>Maximum 29% front-end, 41% back-end DTI</li>
        <li>Income limits apply based on area</li>
        <li>Property must be in eligible rural area</li>
      </ul>

      <h3>Improving Your Approval Odds</h3>
      
      <h4>Quick Fixes (30-60 Days)</h4>
      <ul>
        <li>Pay down credit card balances below 30% utilization</li>
        <li>Dispute credit report errors or outdated information</li>
        <li>Pay off small collections (under $500 often ignored)</li>
        <li>Get added as authorized user on established accounts</li>
        <li>Avoid new credit applications or large purchases</li>
        <li>Get letters of explanation ready for credit issues</li>
      </ul>

      <h4>Medium-Term Improvements (3-6 Months)</h4>
      <ul>
        <li>Build employment history in current position</li>
        <li>Establish payment history on new accounts</li>
        <li>Save additional reserves (aim for 6+ months)</li>
        <li>Increase down payment percentage</li>
        <li>Pay down installment loans to reduce DTI</li>
        <li>Close unused credit cards (carefully - affects utilization)</li>
      </ul>

      <h4>Long-Term Strategies (6-12+ Months)</h4>
      <ul>
        <li>Rebuild credit after major negative events</li>
        <li>Establish 2+ years self-employment tax returns</li>
        <li>Wait out bankruptcy/foreclosure seasoning periods</li>
        <li>Build savings for larger down payment (20%+)</li>
        <li>Increase income through raises or job changes</li>
      </ul>

      <h3>Compensating Factors</h3>
      <p>These can offset moderate risk factors:</p>
      <ul>
        <li><strong>Large Down Payment:</strong> 20%+ reduces lender risk significantly</li>
        <li><strong>Excellent Credit:</strong> 760+ score can overcome higher DTI</li>
        <li><strong>Significant Reserves:</strong> 12+ months payments in savings</li>
        <li><strong>Low DTI:</strong> Under 30% allows more credit flexibility</li>
        <li><strong>Income Growth:</strong> Documented raises or promotions</li>
        <li><strong>Professional Stability:</strong> Licensed profession (doctor, lawyer)</li>
        <li><strong>Minimal Debt Increase:</strong> New payment similar to current rent</li>
      </ul>

      <h3>Documentation Preparation</h3>
      <p>Be ready with these documents:</p>
      
      <h4>Income Verification</h4>
      <ul>
        <li>2 recent pay stubs showing year-to-date earnings</li>
        <li>2 years W-2s or tax returns (self-employed)</li>
        <li>2 years 1099s for contract or commission income</li>
        <li>Proof of other income (rental, retirement, alimony)</li>
        <li>Employer contact information for verification</li>
      </ul>

      <h4>Asset Verification</h4>
      <ul>
        <li>2 months bank statements (all pages)</li>
        <li>Investment account statements</li>
        <li>Retirement account statements</li>
        <li>Gift letter and donor's bank statement (if applicable)</li>
        <li>Explanation for large deposits over $500-1,000</li>
      </ul>

      <h4>Credit Explanation</h4>
      <ul>
        <li>Letters of explanation for late payments</li>
        <li>Dispute resolution documentation</li>
        <li>Bankruptcy discharge papers</li>
        <li>Proof of payment for collections</li>
        <li>Explanation of credit inquiries</li>
      </ul>

      <h3>Timing Your Application</h3>
      <p>Apply when you're strongest:
      <ul>
        <li>After receiving raise or bonus (wait for documentation)</li>
        <li>When credit score peaks (after paying down balances)</li>
        <li>After completing employment seasoning period</li>
        <li>When you have maximum reserves saved</li>
        <li>After waiting out mandatory seasoning after credit events</li>
        <li>Before major job changes or career transitions</li>
      </ul>

      <h3>Multiple Application Strategy</h3>
      <p>When shopping for best rates:
      <ul>
        <li>Submit all applications within 14-45 day window</li>
        <li>Credit bureaus count multiple mortgage inquiries as single inquiry</li>
        <li>Compare offers from banks, credit unions, and brokers</li>
        <li>Focus on total cost, not just interest rate</li>
        <li>Get loan estimates in writing (required within 3 days)</li>
      </ul>

      <h3>Working with Loan Officers</h3>
      <p>Maximize your approval chances:
      <ul>
        <li>Be honest about all credit issues upfront</li>
        <li>Respond to document requests immediately</li>
        <li>Don't make financial changes during underwriting</li>
        <li>Ask about compensating factors you can provide</li>
        <li>Get pre-approval, not just pre-qualification</li>
        <li>Understand all conditions of approval</li>
      </ul>

      <h3>Important Limitations</h3>
      <p>This analysis tool:
      <ul>
        <li>Predicts likelihood but cannot guarantee approval</li>
        <li>Uses general guidelines; lender overlays vary</li>
        <li>Cannot access your actual credit report</li>
        <li>Doesn't replace professional mortgage advice</li>
        <li>May not account for all lender-specific requirements</li>
      </ul>

      <p><strong>Understand your approval odds before applying. Identify and fix issues early to get the best possible mortgage terms.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: 720,
      },
      {
        name: 'monthlyIncome',
        label: 'Gross Monthly Income',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'monthlyDebts',
        label: 'Total Monthly Debt Payments',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'downPayment',
        label: 'Down Payment Amount',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'homePrice',
        label: 'Home Purchase Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'reserves',
        label: 'Cash Reserves (after down payment)',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'employmentYears',
        label: 'Years at Current Job',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'loanType',
        label: 'Intended Loan Type',
        type: 'select',
        defaultValue: 'conventional',
        options: [
          { value: 'conventional', label: 'Conventional' },
          { value: 'fha', label: 'FHA' },
          { value: 'va', label: 'VA' },
          { value: 'usda', label: 'USDA' },
        ],
      },
    ],
    results: [
      { 
        label: 'Approval Risk Level', 
        isCurrency: false 
      },
      { 
        label: 'Key Metrics Analysis', 
        isCurrency: false 
      },
      { 
        label: 'Red Flags Identified', 
        isCurrency: false 
      },
      { 
        label: 'Recommendations', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { creditScore, monthlyIncome, monthlyDebts, downPayment, homePrice, reserves, employmentYears, loanType } = values;
      
      const estimatedPayment = (homePrice - downPayment) * 0.006; // Rough estimate
      const frontDTI = (estimatedPayment / monthlyIncome) * 100;
      const backDTI = ((estimatedPayment + monthlyDebts) / monthlyIncome) * 100;
      const ltv = ((homePrice - downPayment) / homePrice) * 100;
      const monthsReserves = reserves / estimatedPayment;

      let riskLevel = 'LOW';
      let riskColor = '🟢';
      const redFlags = [];
      const strengths = [];

      // Credit score assessment
      if (creditScore < 620) {
        riskLevel = 'HIGH';
        riskColor = '🔴';
        redFlags.push('Credit score below minimum for conventional loans');
      } else if (creditScore < 680) {
        if (riskLevel !== 'HIGH') riskLevel = 'MODERATE';
        riskColor = '🟡';
        redFlags.push('Credit score may result in higher interest rates');
      } else if (creditScore >= 740) {
        strengths.push('Excellent credit score qualifies for best rates');
      }

      // DTI assessment
      if (backDTI > 50) {
        riskLevel = 'HIGH';
        riskColor = '🔴';
        redFlags.push(`Back-end DTI of ${backDTI.toFixed(1)}% exceeds most lender limits`);
      } else if (backDTI > 43) {
        if (riskLevel !== 'HIGH') riskLevel = 'MODERATE';
        riskColor = '🟡';
        redFlags.push(`Back-end DTI of ${backDTI.toFixed(1)}% requires compensating factors`);
      } else if (backDTI < 36) {
        strengths.push(`Excellent DTI of ${backDTI.toFixed(1)}% well below limits`);
      }

      // Down payment assessment
      if (ltv > 95) {
        if (riskLevel !== 'HIGH') riskLevel = 'MODERATE';
        riskColor = '🟡';
        redFlags.push('Low down payment requires mortgage insurance');
      } else if (ltv <= 80) {
        strengths.push('20%+ down payment avoids PMI and improves terms');
      }

      // Employment assessment
      if (employmentYears < 1) {
        if (riskLevel !== 'HIGH') riskLevel = 'MODERATE';
        riskColor = '🟡';
        redFlags.push('Less than 1 year employment may require additional documentation');
      } else if (employmentYears >= 2) {
        strengths.push('Stable 2+ year employment history');
      }

      // Reserves assessment
      if (monthsReserves < 2) {
        if (riskLevel !== 'HIGH') riskLevel = 'MODERATE';
        riskColor = '🟡';
        redFlags.push('Low reserves may concern underwriters');
      } else if (monthsReserves >= 6) {
        strengths.push(`Strong reserves covering ${monthsReserves.toFixed(1)} months of payments`);
      }

      return [
        { 
          label: 'Approval Risk Level', 
          value: `${riskColor} ${riskLevel} RISK

${loanType.toUpperCase()} Loan Approval Likelihood: ${
  riskLevel === 'LOW' ? 'STRONG (90-95% likely to be approved)' :
  riskLevel === 'MODERATE' ? 'GOOD (70-85% likely with some conditions)' :
  'UNCERTAIN (40-60% likely, improvements recommended)'
}

Your profile ${riskLevel === 'LOW' ? 'exceeds' : riskLevel === 'MODERATE' ? 'meets most' : 'may not meet all'} standard ${loanType} underwriting requirements.

${strengths.length > 0 ? '\n✅ STRENGTHS:\n' + strengths.map(s => `  • ${s}`).join('\n') : ''}`, 
          isCurrency: false 
        },
        { 
          label: 'Key Metrics Analysis', 
          value: `CREDIT & INCOME RATIOS:

📊 Credit Score: ${creditScore}
  ${creditScore >= 740 ? '✅ Excellent - Best rates' : creditScore >= 680 ? '✓ Good - Competitive rates' : creditScore >= 620 ? '⚠️ Fair - Higher rates' : '❌ Below conventional minimum'}

📊 Debt-to-Income Ratios:
  Front-end (housing): ${frontDTI.toFixed(1)}%
  ${frontDTI <= 28 ? '✅' : frontDTI <= 31 ? '✓' : '⚠️'} (Target: ≤28% ideal, ≤31% acceptable)
  
  Back-end (total debt): ${backDTI.toFixed(1)}%
  ${backDTI <= 36 ? '✅' : backDTI <= 43 ? '✓' : '⚠️'} (Target: ≤36% ideal, ≤43-50% max)

📊 Loan-to-Value: ${ltv.toFixed(1)}%
  ${ltv <= 80 ? '✅ No PMI required' : ltv <= 95 ? '⚠️ PMI required' : '❌ High LTV'}

📊 Reserves: ${monthsReserves.toFixed(1)} months
  ${monthsReserves >= 6 ? '✅ Strong reserves' : monthsReserves >= 2 ? '✓ Adequate' : '⚠️ Low reserves'}

📊 Employment: ${employmentYears} years
  ${employmentYears >= 2 ? '✅ Stable history' : '⚠️ May need prior employment verification'}`, 
          isCurrency: false 
        },
        { 
          label: 'Red Flags Identified', 
          value: redFlags.length > 0 ? 
            `⚠️ ISSUES TO ADDRESS:\n\n${redFlags.map((flag, i) => `${i + 1}. ${flag}`).join('\n\n')}` : 
            '✅ No significant red flags identified. Your profile meets standard underwriting guidelines.', 
          isCurrency: false 
        },
        { 
          label: 'Recommendations', 
          value: `ACTION ITEMS TO IMPROVE APPROVAL ODDS:

${creditScore < 680 ? '1. IMPROVE CREDIT SCORE:\n   • Pay down credit card balances below 30% utilization\n   • Dispute any errors on credit reports\n   • Avoid new credit applications\n\n' : ''}${backDTI > 43 ? '2. REDUCE DEBT-TO-INCOME:\n   • Pay down installment loans or credit cards\n   • Increase income through raises/bonuses\n   • Consider less expensive property\n\n' : ''}${ltv > 80 ? '3. INCREASE DOWN PAYMENT:\n   • Save for 20% to avoid PMI\n   • Consider gift funds from family\n   • Look into down payment assistance programs\n\n' : ''}${monthsReserves < 6 ? '4. BUILD RESERVES:\n   • Aim for 6+ months payment reserves\n   • Strengthens application significantly\n   • May offset other moderate weaknesses\n\n' : ''}${employmentYears < 2 ? '5. EMPLOYMENT DOCUMENTATION:\n   • Prepare prior employment verification\n   • Get letter from employer confirming position\n   • Document any relevant training/credentials\n\n' : ''}${riskLevel === 'LOW' ? '✅ READY TO APPLY:\nYour profile is strong. Shop multiple lenders for best rates within 14-45 days to minimize credit impact.\n\n' : ''}📝 Next Steps:
  • Get pre-approved (not just pre-qualified)
  • Avoid major purchases or credit changes
  • Respond quickly to lender document requests
  • Consider working with experienced loan officer`, 
          isCurrency: false 
        },
      ];
    },
  },
};
