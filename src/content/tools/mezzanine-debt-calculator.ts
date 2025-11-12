import { CalculatorContent } from '@/types';

export const MEZZANINE_DEBT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Mezzanine Debt Calculator',
  description: 'Calculate returns and analyze mezzanine debt financing for commercial real estate deals including interest rates, fees, and total costs.',
  slug: 'mezzanine-debt-calculator',
  icon: '🏢',
  category: 'Investment Analysis',
  article: {
    title: 'Understanding Mezzanine Debt in Commercial Real Estate',
    content: `
    <h2>Understanding Mezzanine Debt in Commercial Real Estate</h2>
    <p>Mezzanine debt is a hybrid form of financing that sits between senior debt and equity in the capital stack. It's commonly used in large commercial real estate transactions to bridge the gap when senior debt doesn't provide enough leverage.</p>
    
    <h3>What is Mezzanine Debt?</h3>
    <p>Mezzanine debt is subordinated debt secured by a pledge of the ownership interests in the borrowing entity rather than the property itself. Key characteristics include:</p>
    <ul>
      <li><strong>Higher Interest Rates:</strong> Typically 10-15% annual interest due to higher risk</li>
      <li><strong>Subordinate Position:</strong> Paid after senior debt but before equity</li>
      <li><strong>Equity Kickers:</strong> Often includes warrants or profit participation</li>
      <li><strong>Shorter Terms:</strong> Usually 2-5 years with balloon payments</li>
      <li><strong>Intercreditor Agreements:</strong> Defines rights between senior and mezzanine lenders</li>
    </ul>

    <h3>Capital Stack Position</h3>
    <p>Typical commercial real estate capital stack:</p>
    <ol>
      <li><strong>Senior Debt:</strong> 55-65% LTV (lowest risk, 4-7% interest)</li>
      <li><strong>Mezzanine Debt:</strong> 10-25% of capital stack (medium risk, 10-15% interest)</li>
      <li><strong>Preferred Equity:</strong> 5-15% (medium-high risk, 12-18% return)</li>
      <li><strong>Common Equity:</strong> 10-25% (highest risk, 15-25%+ return)</li>
    </ol>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to analyze your mezzanine debt:</p>
    <ul>
      <li><strong>Property Value:</strong> Total value of the commercial property</li>
      <li><strong>Senior Debt Amount:</strong> First mortgage loan amount</li>
      <li><strong>Mezzanine Loan Amount:</strong> Amount of subordinated debt needed</li>
      <li><strong>Interest Rate:</strong> Annual mezzanine interest rate (typically 10-15%)</li>
      <li><strong>Loan Term:</strong> Duration of the mezzanine loan in years</li>
      <li><strong>Origination Fee:</strong> Upfront fee charged by mezzanine lender</li>
      <li><strong>Exit Fee:</strong> Fee due upon payoff (often 1-3%)</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Monthly Payment:</strong> Regular debt service on mezzanine loan</li>
      <li><strong>Total Interest Paid:</strong> Cumulative interest over loan term</li>
      <li><strong>All-In Cost:</strong> True cost including fees and interest</li>
      <li><strong>Effective Interest Rate:</strong> Real rate after factoring in fees</li>
      <li><strong>Combined LTV:</strong> Total leverage including senior and mezz debt</li>
    </ul>

    <h3>Advantages of Mezzanine Debt</h3>
    <ul>
      <li>Increases leverage without diluting equity ownership</li>
      <li>Faster closing than securing additional senior debt</li>
      <li>Flexible terms compared to traditional financing</li>
      <li>No personal guarantees required in most cases</li>
      <li>Can increase overall project returns through leverage</li>
    </ul>

    <h3>Disadvantages and Risks</h3>
    <ul>
      <li>Significantly higher interest rates than senior debt</li>
      <li>Substantial origination and exit fees</li>
      <li>Risk of foreclosure if unable to refinance or sell</li>
      <li>Restrictive covenants and operating requirements</li>
      <li>Potential for profit participation reducing upside</li>
    </ul>

    <h3>When to Use Mezzanine Debt</h3>
    <p>Mezzanine financing makes sense when:</p>
    <ul>
      <li>Senior lenders won't provide enough leverage (maxed at 65% LTV)</li>
      <li>Sponsor wants to preserve equity for other investments</li>
      <li>Property has strong cash flows to support debt service</li>
      <li>Clear exit strategy exists (sale or refinance)</li>
      <li>Expected returns significantly exceed mezzanine costs</li>
    </ul>

    <h3>Mezzanine vs. Preferred Equity</h3>
    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background:#f4f4f4;">
        <th style="border:1px solid #ddd; padding:8px;">Feature</th>
        <th style="border:1px solid #ddd; padding:8px;">Mezzanine Debt</th>
        <th style="border:1px solid #ddd; padding:8px;">Preferred Equity</th>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Security</td>
        <td style="border:1px solid #ddd; padding:8px;">Pledge of ownership interests</td>
        <td style="border:1px solid #ddd; padding:8px;">Equity ownership</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Tax Treatment</td>
        <td style="border:1px solid #ddd; padding:8px;">Interest is tax deductible</td>
        <td style="border:1px solid #ddd; padding:8px;">Distributions not deductible</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Foreclosure Rights</td>
        <td style="border:1px solid #ddd; padding:8px;">Can foreclose on pledge</td>
        <td style="border:1px solid #ddd; padding:8px;">No foreclosure rights</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Return Structure</td>
        <td style="border:1px solid #ddd; padding:8px;">Interest payments</td>
        <td style="border:1px solid #ddd; padding:8px;">Preferred distributions</td>
      </tr>
    </table>

    <h3>Structuring Considerations</h3>
    <ul>
      <li><strong>Amortization:</strong> Often interest-only with balloon payment</li>
      <li><strong>Prepayment:</strong> May include yield maintenance or prepayment penalties</li>
      <li><strong>Covenants:</strong> Cash sweep triggers, debt service coverage minimums</li>
      <li><strong>Default Remedies:</strong> Cure periods, foreclosure rights, operating control</li>
      <li><strong>Exit Strategy:</strong> Sale, refinance, or equity raise to pay off</li>
    </ul>

    <h3>Best Practices</h3>
    <ul>
      <li>Model multiple scenarios including stress cases</li>
      <li>Understand intercreditor agreement thoroughly</li>
      <li>Plan exit strategy before taking mezzanine debt</li>
      <li>Negotiate origination and exit fees aggressively</li>
      <li>Maintain strong relationship with senior lender</li>
      <li>Ensure cash flows can support all debt layers</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'number',
        defaultValue: 10000000,
      },
      {
        name: 'seniorDebt',
        label: 'Senior Debt Amount',
        type: 'number',
        defaultValue: 6500000,
      },
      {
        name: 'mezzLoanAmount',
        label: 'Mezzanine Loan Amount',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'interestRate',
        label: 'Mezzanine Interest Rate (%)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'loanTerm',
        label: 'Loan Term (Years)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'originationFee',
        label: 'Origination Fee (%)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'exitFee',
        label: 'Exit Fee (%)',
        type: 'number',
        defaultValue: 1,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Annual Debt Service', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
      { label: 'Origination Fee', isCurrency: true },
      { label: 'Exit Fee', isCurrency: true },
      { label: 'Total All-In Cost', isCurrency: true },
      { label: 'Effective Interest Rate', isPercentage: true },
      { label: 'Combined LTV', isPercentage: true },
    ],
    calculate: (values) => {
      const { propertyValue, seniorDebt, mezzLoanAmount, interestRate, loanTerm, originationFee, exitFee } = values;
      
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const monthlyPayment = mezzLoanAmount * monthlyRate;
      const annualDebtService = monthlyPayment * 12;
      const totalInterest = annualDebtService * loanTerm;
      
      const originationFeeAmount = mezzLoanAmount * (originationFee / 100);
      const exitFeeAmount = mezzLoanAmount * (exitFee / 100);
      const totalAllInCost = totalInterest + originationFeeAmount + exitFeeAmount;
      
      const effectiveRate = (totalAllInCost / mezzLoanAmount / loanTerm) * 100;
      const combinedLTV = ((seniorDebt + mezzLoanAmount) / propertyValue) * 100;

      return [
        { label: 'Monthly Payment', value: monthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Annual Debt Service', value: annualDebtService.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
        { label: 'Origination Fee', value: originationFeeAmount.toFixed(2), isCurrency: true },
        { label: 'Exit Fee', value: exitFeeAmount.toFixed(2), isCurrency: true },
        { label: 'Total All-In Cost', value: totalAllInCost.toFixed(2), isCurrency: true },
        { label: 'Effective Interest Rate', value: effectiveRate.toFixed(2), isPercentage: true },
        { label: 'Combined LTV', value: combinedLTV.toFixed(2), isPercentage: true },
      ];
    },
  },
};
