import { CalculatorContent } from '@/types';

export const FHA_VS_CONVENTIONAL_ANALYZER_CONTENT: CalculatorContent = {
  title: 'FHA vs. Conventional Loan Analyzer',
  description: 'Compare FHA and conventional loans side-by-side to find the best option for you',
  slug: 'fha-vs-conventional-loan-analyzer',
  icon: '⚖️',
  category: 'Basic Calculators',
  metaTitle: 'FHA vs Conventional Loan Calculator - Compare Mortgage Options Side-by-Side',
  metaDescription: 'Free FHA vs conventional loan comparison calculator. Compare monthly payments, total costs, and see which mortgage type saves you more money.',
  article: {
    title: 'FHA vs. Conventional Loans: Complete Comparison Guide',
    content: `
    <h2>FHA vs. Conventional Loans: Which is Right for You?</h2>
    <p>Choosing between an FHA and conventional loan is one of the most important decisions in the home-buying process. While both can finance your home purchase, they have significant differences in requirements, costs, and long-term value. This comprehensive comparison will help you make the right choice for your situation.</p>
    
    <h3>Quick Comparison Overview</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>FHA Loan</th>
        <th>Conventional Loan</th>
      </tr>
      <tr>
        <td><strong>Minimum Down Payment</strong></td>
        <td>3.5%</td>
        <td>3%</td>
      </tr>
      <tr>
        <td><strong>Minimum Credit Score</strong></td>
        <td>580 (500 with 10% down)</td>
        <td>620 (varies by lender)</td>
      </tr>
      <tr>
        <td><strong>Maximum DTI Ratio</strong></td>
        <td>Up to 50% (with compensating factors)</td>
        <td>Typically 43-45%</td>
      </tr>
      <tr>
        <td><strong>Mortgage Insurance</strong></td>
        <td>1.75% upfront + 0.45-1.00% annual</td>
        <td>0.30-1.50% annual (if < 20% down)</td>
      </tr>
      <tr>
        <td><strong>MI Removal</strong></td>
        <td>Life of loan (< 10% down) or 11 years</td>
        <td>Automatic at 20% equity</td>
      </tr>
      <tr>
        <td><strong>Loan Limits</strong></td>
        <td>$498,257 (varies by county)</td>
        <td>$766,550 (varies by county)</td>
      </tr>
      <tr>
        <td><strong>Best For</strong></td>
        <td>Lower credit, small down payment</td>
        <td>Good credit, 5%+ down payment</td>
      </tr>
    </table>

    <h3>Detailed Feature Comparison</h3>
    
    <h4>1. Down Payment Requirements</h4>
    
    <strong>FHA Loans:</strong>
    <ul>
      <li>Minimum 3.5% with 580+ credit score</li>
      <li>Minimum 10% with 500-579 credit score</li>
      <li>Gift funds allowed from family</li>
      <li>Down payment assistance programs accepted</li>
      <li>Seller can contribute up to 6% of purchase price</li>
    </ul>

    <strong>Conventional Loans:</strong>
    <ul>
      <li>Minimum 3% for first-time buyers (some programs)</li>
      <li>Typically 5% for most buyers</li>
      <li>20% to avoid PMI</li>
      <li>Gift funds allowed with documentation</li>
      <li>Seller can contribute 3-9% depending on down payment</li>
    </ul>

    <h4>2. Credit Score Requirements</h4>
    
    <strong>FHA Loans:</strong>
    <ul>
      <li>Minimum 580 for 3.5% down (most common)</li>
      <li>500-579 accepted with 10% down payment</li>
      <li>More lenient on past credit issues</li>
      <li>Bankruptcy: 2 years after discharge</li>
      <li>Foreclosure: 3 years after completion</li>
      <li>Can qualify with non-traditional credit</li>
    </ul>

    <strong>Conventional Loans:</strong>
    <ul>
      <li>Minimum 620 for most lenders</li>
      <li>Higher scores get better rates</li>
      <li>Stricter on recent credit problems</li>
      <li>Bankruptcy: 4 years after discharge (7 years for Chapter 7)</li>
      <li>Foreclosure: 7 years after completion</li>
      <li>Recent late payments heavily penalized</li>
    </ul>

    <h4>3. Debt-to-Income (DTI) Ratio</h4>
    
    <strong>FHA Loans:</strong>
    <ul>
      <li>Maximum DTI typically 43%</li>
      <li>Can go up to 50% with compensating factors</li>
      <li>More flexible underwriting guidelines</li>
      <li>Considers overall financial picture</li>
      <li>Residual income guidelines apply</li>
    </ul>

    <strong>Conventional Loans:</strong>
    <ul>
      <li>Maximum DTI typically 43%</li>
      <li>Some programs allow up to 45%</li>
      <li>Stricter adherence to guidelines</li>
      <li>Higher credit scores allow higher DTI</li>
      <li>Automated underwriting more rigid</li>
    </ul>

    <h4>4. Mortgage Insurance Comparison</h4>
    
    <strong>FHA MIP (Mortgage Insurance Premium):</strong>
    <ul>
      <li><strong>Upfront MIP:</strong> 1.75% of loan amount (can be financed)</li>
      <li><strong>Annual MIP:</strong> 0.45% to 1.00% (paid monthly)</li>
      <li><strong>Duration:</strong> Life of loan if < 10% down</li>
      <li><strong>Duration:</strong> 11 years if 10%+ down</li>
      <li><strong>Removal:</strong> Only via refinance (< 10% down)</li>
      <li><strong>Cost Example:</strong> $300k loan = $5,250 upfront + $212/month</li>
    </ul>

    <strong>Conventional PMI (Private Mortgage Insurance):</strong>
    <ul>
      <li><strong>Upfront Cost:</strong> None typically</li>
      <li><strong>Annual Rate:</strong> 0.30% to 1.50% (paid monthly)</li>
      <li><strong>Duration:</strong> Until 20% equity achieved</li>
      <li><strong>Removal:</strong> Automatic at 20% equity</li>
      <li><strong>Can Cancel:</strong> Yes, at 80% LTV</li>
      <li><strong>Cost Example:</strong> $300k loan = $150/month (varies by credit)</li>
    </ul>

    <h4>5. Interest Rates</h4>
    
    <strong>FHA Loans:</strong>
    <ul>
      <li>Typically 0.25% to 0.50% lower than conventional</li>
      <li>Less variation based on credit score</li>
      <li>Government backing provides rate stability</li>
      <li>Good option for lower credit scores</li>
    </ul>

    <strong>Conventional Loans:</strong>
    <ul>
      <li>Rates vary significantly by credit score</li>
      <li>Excellent credit (760+) gets best rates</li>
      <li>Can be lower than FHA for excellent credit</li>
      <li>More rate variation between lenders</li>
    </ul>

    <h4>6. Property Requirements</h4>
    
    <strong>FHA Loans:</strong>
    <ul>
      <li>Must meet FHA property standards</li>
      <li>Stricter inspection requirements</li>
      <li>Properties must be "move-in ready"</li>
      <li>No health/safety hazards</li>
      <li>Chipping paint must be addressed</li>
      <li>Some condos not FHA-approved</li>
    </ul>

    <strong>Conventional Loans:</strong>
    <ul>
      <li>More flexible property standards</li>
      <li>Standard appraisal required</li>
      <li>Will finance fixer-uppers (renovation loans)</li>
      <li>Most condos acceptable</li>
      <li>Fewer cosmetic requirements</li>
    </ul>

    <h4>7. Loan Limits</h4>
    
    <strong>FHA Loans (2024):</strong>
    <ul>
      <li>Standard limit: $498,257 (most counties)</li>
      <li>High-cost areas: Up to $1,149,825</li>
      <li>Limits vary by county and property type</li>
      <li>Lower limits than conventional</li>
    </ul>

    <strong>Conventional Loans (2024):</strong>
    <ul>
      <li>Conforming limit: $766,550 (most counties)</li>
      <li>High-cost areas: Up to $1,149,825</li>
      <li>Higher limits accommodate more expensive homes</li>
      <li>Jumbo loans available for amounts above limits</li>
    </ul>

    <h3>Total Cost Comparison Examples</h3>
    
    <h4>Scenario 1: First-Time Buyer, $300,000 Home</h4>
    <p><strong>FHA Loan (3.5% down, 630 credit score):</strong></p>
    <ul>
      <li>Down Payment: $10,500</li>
      <li>Loan Amount: $289,500</li>
      <li>Upfront MIP: $5,066 (financed)</li>
      <li>Interest Rate: 6.75%</li>
      <li>Monthly P&I: $1,909</li>
      <li>Monthly MIP: $204</li>
      <li>Total Monthly: $2,113 (+ taxes/insurance)</li>
      <li>Total MIP (30 years): $78,506</li>
    </ul>

    <p><strong>Conventional Loan (5% down, 630 credit score):</strong></p>
    <ul>
      <li>Down Payment: $15,000</li>
      <li>Loan Amount: $285,000</li>
      <li>Interest Rate: 7.00%</li>
      <li>Monthly P&I: $1,896</li>
      <li>Monthly PMI: $199</li>
      <li>Total Monthly: $2,095 (+ taxes/insurance)</li>
      <li>Total PMI (until 20% equity): ~$13,930</li>
      <li><strong>Winner: Conventional</strong> (saves ~$64,576 over life)</li>
    </ul>

    <h4>Scenario 2: Lower Credit, $250,000 Home</h4>
    <p><strong>FHA Loan (3.5% down, 580 credit score):</strong></p>
    <ul>
      <li>Down Payment: $8,750</li>
      <li>Interest Rate: 7.00%</li>
      <li>Can qualify - approved!</li>
      <li>Monthly Payment: ~$1,850</li>
    </ul>

    <p><strong>Conventional Loan (5% down, 580 credit score):</strong></p>
    <ul>
      <li>Down Payment: $12,500</li>
      <li>Cannot qualify - credit score too low</li>
      <li><strong>Winner: FHA</strong> (only option available)</li>
    </ul>

    <h4>Scenario 3: Excellent Credit, $400,000 Home</h4>
    <p><strong>FHA Loan (3.5% down, 760 credit score):</strong></p>
    <ul>
      <li>Down Payment: $14,000</li>
      <li>Interest Rate: 6.50%</li>
      <li>Monthly Payment: ~$2,952 (includes MIP)</li>
      <li>Total Cost (30 years): ~$1,062,720</li>
    </ul>

    <p><strong>Conventional Loan (10% down, 760 credit score):</strong></p>
    <ul>
      <li>Down Payment: $40,000</li>
      <li>Interest Rate: 6.25%</li>
      <li>Monthly Payment: ~$2,471 (includes PMI)</li>
      <li>PMI removed in 5 years</li>
      <li>Total Cost (30 years): ~$889,560</li>
      <li><strong>Winner: Conventional</strong> (saves ~$173,160)</li>
    </ul>

    <h3>When to Choose FHA</h3>
    <p>FHA loans are the better choice when you:</p>
    <ul>
      <li><strong>Have lower credit (580-680):</strong> FHA more likely to approve</li>
      <li><strong>Have minimal savings:</strong> 3.5% down vs. 5-20%</li>
      <li><strong>Have higher DTI ratio:</strong> FHA allows up to 50%</li>
      <li><strong>Have recent credit issues:</strong> FHA has shorter waiting periods</li>
      <li><strong>Are self-employed:</strong> FHA more flexible with income documentation</li>
      <li><strong>Plan to refinance within 5 years:</strong> Can refi to conventional to remove MIP</li>
      <li><strong>Need seller concessions:</strong> FHA allows up to 6% vs. 3-9% conventional</li>
    </ul>

    <h3>When to Choose Conventional</h3>
    <p>Conventional loans are the better choice when you:</p>
    <ul>
      <li><strong>Have good credit (680+):</strong> Get best rates and lower PMI</li>
      <li><strong>Can put 5-20% down:</strong> Maximizes conventional benefits</li>
      <li><strong>Plan to stay long-term:</strong> PMI cancellation saves huge money</li>
      <li><strong>Are buying expensive home:</strong> Higher loan limits than FHA</li>
      <li><strong>Have low DTI ratio:</strong> Easy to qualify</li>
      <li><strong>Want property flexibility:</strong> Fewer inspection requirements</li>
      <li><strong>Are buying condo:</strong> More condos qualify for conventional</li>
      <li><strong>Want to avoid upfront fees:</strong> No upfront mortgage insurance</li>
    </ul>

    <h3>How to Use This FHA vs. Conventional Analyzer</h3>
    <p>Enter the following information to compare both loan types:</p>
    <ul>
      <li><strong>Home Price:</strong> Purchase price of the property</li>
      <li><strong>Down Payment Percentage:</strong> How much you can put down</li>
      <li><strong>Credit Score:</strong> Your FICO score (affects rates and PMI)</li>
      <li><strong>Loan Term:</strong> Typically 30 years</li>
      <li><strong>Property Taxes:</strong> Annual estimate</li>
      <li><strong>Home Insurance:</strong> Annual estimate</li>
    </ul>
    <p>The calculator will show side-by-side comparison of monthly payments, total costs, and lifetime savings.</p>

    <h3>Refinancing Between FHA and Conventional</h3>
    
    <h4>FHA to Conventional Refinance:</h4>
    <p>Consider refinancing from FHA to conventional when:</p>
    <ul>
      <li>You've reached 20% equity (to eliminate mortgage insurance)</li>
      <li>Your credit score has improved to 700+</li>
      <li>You can get a lower interest rate</li>
      <li>Current rates are 0.75% or more below your FHA rate</li>
      <li>You've been paying MIP for life (< 10% down originally)</li>
    </ul>
    <p><strong>Benefits:</strong> Remove MIP, lower monthly payment, save thousands long-term</p>

    <h4>Conventional to FHA Refinance:</h4>
    <p>Rarely recommended, but might make sense if:</p>
    <ul>
      <li>You need to access equity with cash-out refinance</li>
      <li>Your credit has declined and conventional won't refinance</li>
      <li>FHA streamline rates are significantly lower</li>
    </ul>
    <p><strong>Caution:</strong> You'll add FHA MIP which may cost more long-term</p>

    <h3>Special Situations</h3>
    
    <h4>High-Cost Areas:</h4>
    <ul>
      <li>Both FHA and conventional have higher limits</li>
      <li>Conventional limits are higher overall</li>
      <li>Consider conventional for expensive markets</li>
    </ul>

    <h4>Investment Properties:</h4>
    <ul>
      <li>FHA: Primary residence only (can house hack with 2-4 units)</li>
      <li>Conventional: Can use for investment properties</li>
      <li>Conventional required for pure investment</li>
    </ul>

    <h4>Second Homes:</h4>
    <ul>
      <li>FHA: Not allowed for second homes</li>
      <li>Conventional: Acceptable for second homes</li>
      <li>Conventional is only option</li>
    </ul>

    <h3>Common Misconceptions</h3>
    
    <h4>Myth: "Conventional loans require 20% down"</h4>
    <p><strong>Truth:</strong> Conventional loans can be as low as 3% down for qualified buyers. You'll pay PMI with less than 20%, but it's removable.</p>

    <h4>Myth: "FHA is always better for first-time buyers"</h4>
    <p><strong>Truth:</strong> With good credit (700+), conventional often costs less long-term due to cancellable PMI and no upfront mortgage insurance.</p>

    <h4>Myth: "FHA loans are only for low-income buyers"</h4>
    <p><strong>Truth:</strong> FHA has no income limits. They're designed for lower down payments and flexible credit, not income restrictions.</p>

    <h4>Myth: "You can't switch from FHA to conventional"</h4>
    <p><strong>Truth:</strong> You can refinance from FHA to conventional anytime you qualify, often eliminating MIP and reducing payments.</p>

    <h3>Bottom Line: Which Should You Choose?</h3>
    <p>The right choice depends on your specific situation:</p>
    
    <p><strong>Choose FHA if you prioritize:</strong></p>
    <ul>
      <li>Getting approved with lower credit or income challenges</li>
      <li>Minimal down payment (3.5%)</li>
      <li>Near-term homeownership over long-term cost</li>
      <li>Ability to qualify with higher DTI</li>
    </ul>

    <p><strong>Choose Conventional if you prioritize:</strong></p>
    <ul>
      <li>Long-term cost savings (lifetime of loan)</li>
      <li>Ability to remove mortgage insurance at 20% equity</li>
      <li>No upfront mortgage insurance fee</li>
      <li>Higher loan limits for expensive homes</li>
      <li>Property and condo flexibility</li>
    </ul>

    <p><strong>The Best Strategy:</strong> Run the numbers for your specific situation, consider your timeline, and factor in your credit score, down payment, and long-term plans. For most buyers with good credit and 5%+ down, conventional saves more money over time. For buyers with credit challenges or minimal down payment, FHA provides crucial access to homeownership.</p>

    <p>Use this calculator to see exact cost comparisons for your situation and make an informed decision.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'creditScore',
        label: 'Credit Score',
        type: 'number',
        defaultValue: 680,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'propertyTax',
        label: 'Annual Property Tax ($)',
        type: 'number',
        defaultValue: 4200,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1400,
      },
    ],
    results: [
      { label: 'FHA Monthly Payment', isCurrency: true },
      { label: 'FHA Down Payment', isCurrency: true },
      { label: 'FHA Total Cost (30 years)', isCurrency: true },
      { label: 'Conventional Monthly Payment', isCurrency: true },
      { label: 'Conventional Down Payment', isCurrency: true },
      { label: 'Conventional Total Cost (30 years)', isCurrency: true },
      { label: 'Monthly Payment Difference', isCurrency: true },
      { label: 'Lifetime Savings', isCurrency: true },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (values) => {
      const { homePrice, downPaymentPercent, creditScore, loanTerm, propertyTax, homeInsurance } = values;
      
      const fhaDownPercent = Math.max(downPaymentPercent, 3.5);
      const fhaDownPayment = (homePrice * fhaDownPercent) / 100;
      const fhaLoanAmount = homePrice - fhaDownPayment;
      const fhaUpfrontMIP = fhaLoanAmount * 0.0175;
      const fhaTotalLoan = fhaLoanAmount + fhaUpfrontMIP;
      
      let fhaRate = 6.75;
      if (creditScore >= 700) fhaRate = 6.5;
      if (creditScore >= 740) fhaRate = 6.25;
      
      const fhaMonthlyRate = fhaRate / 100 / 12;
      const fhaPayments = loanTerm * 12;
      const fhaPI = fhaTotalLoan * 
        (fhaMonthlyRate * Math.pow(1 + fhaMonthlyRate, fhaPayments)) / 
        (Math.pow(1 + fhaMonthlyRate, fhaPayments) - 1);
      
      const fhaMIPRate = fhaDownPercent >= 10 ? 0.0055 : 0.0085;
      const fhaMonthlyMIP = (fhaLoanAmount * fhaMIPRate) / 12;
      const fhaMonthlyTax = propertyTax / 12;
      const fhaMonthlyIns = homeInsurance / 12;
      const fhaTotalMonthly = fhaPI + fhaMonthlyMIP + fhaMonthlyTax + fhaMonthlyIns;
      const fhaTotalCost = (fhaTotalMonthly * fhaPayments) + fhaDownPayment;
      
      const convDownPercent = Math.max(downPaymentPercent, 5);
      const convDownPayment = (homePrice * convDownPercent) / 100;
      const convLoanAmount = homePrice - convDownPayment;
      
      let convRate = 7.0;
      if (creditScore >= 700) convRate = 6.75;
      if (creditScore >= 740) convRate = 6.5;
      if (creditScore >= 760) convRate = 6.25;
      
      const convMonthlyRate = convRate / 100 / 12;
      const convPayments = loanTerm * 12;
      const convPI = convLoanAmount * 
        (convMonthlyRate * Math.pow(1 + convMonthlyRate, convPayments)) / 
        (Math.pow(1 + convMonthlyRate, convPayments) - 1);
      
      let pmiRate = 0.0075;
      if (creditScore >= 700) pmiRate = 0.0055;
      if (creditScore >= 740) pmiRate = 0.0045;
      if (creditScore >= 760) pmiRate = 0.0035;
      
      const monthlyPMI = convDownPercent >= 20 ? 0 : (convLoanAmount * pmiRate) / 12;
      
      const convMonthlyTax = propertyTax / 12;
      const convMonthlyIns = homeInsurance / 12;
      const convTotalMonthly = convPI + monthlyPMI + convMonthlyTax + convMonthlyIns;
      
      let monthsToPMIRemoval = 0;
      if (convDownPercent < 20) {
        let balance = convLoanAmount;
        const targetBalance = homePrice * 0.80;
        while (balance > targetBalance && monthsToPMIRemoval < convPayments) {
          const intPayment = balance * convMonthlyRate;
          const prinPayment = convPI - intPayment;
          balance -= prinPayment;
          monthsToPMIRemoval++;
        }
      }
      
      const pmiTotalPaid = monthlyPMI * monthsToPMIRemoval;
      const convTotalCost = (convPI * convPayments) + (convMonthlyTax * convPayments) + 
                            (convMonthlyIns * convPayments) + pmiTotalPaid + convDownPayment;
      
      const monthlyDiff = convTotalMonthly - fhaTotalMonthly;
      const lifetimeSavings = fhaTotalCost - convTotalCost;
      
      let recommendation = '';
      if (creditScore < 620) {
        recommendation = 'FHA - Only option with this credit score';
      } else if (lifetimeSavings > 10000) {
        recommendation = 'Conventional - Saves $' + Math.abs(lifetimeSavings).toFixed(0) + ' over life';
      } else if (lifetimeSavings < -10000) {
        recommendation = 'FHA - Saves $' + Math.abs(lifetimeSavings).toFixed(0) + ' over life';
      } else {
        recommendation = 'Similar costs - Choose based on down payment ability';
      }

      return [
        { label: 'FHA Monthly Payment', value: fhaTotalMonthly.toFixed(2), isCurrency: true },
        { label: 'FHA Down Payment', value: fhaDownPayment.toFixed(2), isCurrency: true },
        { label: 'FHA Total Cost (30 years)', value: fhaTotalCost.toFixed(2), isCurrency: true },
        { label: 'Conventional Monthly Payment', value: convTotalMonthly.toFixed(2), isCurrency: true },
        { label: 'Conventional Down Payment', value: convDownPayment.toFixed(2), isCurrency: true },
        { label: 'Conventional Total Cost (30 years)', value: convTotalCost.toFixed(2), isCurrency: true },
        { label: 'Monthly Payment Difference', value: Math.abs(monthlyDiff).toFixed(2) + (monthlyDiff > 0 ? ' (Conv higher)' : ' (FHA higher)'), isCurrency: true },
        { label: 'Lifetime Savings', value: Math.abs(lifetimeSavings).toFixed(2) + (lifetimeSavings > 0 ? ' (Conv saves)' : ' (FHA saves)'), isCurrency: true },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
