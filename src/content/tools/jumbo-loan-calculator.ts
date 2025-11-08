import { CalculatorContent } from '@/types';

export const JUMBO_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Jumbo Loan Calculator',
  description: 'Calculate jumbo mortgage payments for luxury homes above conforming loan limits',
  slug: 'jumbo-loan-calculator',
  icon: '🏰',
  category: 'Basic Calculators',
  metaTitle: 'Jumbo Loan Calculator - Calculate High-Value Luxury Home Mortgage Payments',
  metaDescription: 'Free jumbo loan calculator for luxury properties exceeding $766,550. Calculate payments, rates, and qualification requirements for high-value mortgages instantly.',
  article: {
    title: 'Understanding Jumbo Loans for Luxury Properties',
    content: `
    <h2>What is a Jumbo Loan?</h2>
    <p>A jumbo loan, also known as a non-conforming loan, is a mortgage that exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA). For 2024, any loan above $766,550 (in most counties) is considered a jumbo loan. These loans are designed for purchasing high-value properties and luxury homes.</p>
    
    <h3>2024 Jumbo Loan Limits</h3>
    <ul>
      <li><strong>Standard Counties:</strong> Loans over $766,550</li>
      <li><strong>High-Cost Areas:</strong> Limits can go up to $1,149,825</li>
      <li><strong>Alaska, Hawaii, Guam, Virgin Islands:</strong> Higher limits up to $1,149,825</li>
      <li><strong>Specific Markets:</strong> San Francisco, New York, Los Angeles have varying limits</li>
    </ul>

    <h3>Key Features of Jumbo Loans</h3>
    <ul>
      <li><strong>Higher Loan Amounts:</strong> Finance luxury properties beyond conventional limits</li>
      <li><strong>Competitive Rates:</strong> Often similar to or slightly higher than conforming loans</li>
      <li><strong>Flexible Terms:</strong> 15, 20, or 30-year options available</li>
      <li><strong>Fixed or Adjustable:</strong> Choose fixed-rate or ARM options</li>
      <li><strong>No PMI Options:</strong> Can avoid mortgage insurance with 20% down</li>
      <li><strong>Portfolio Products:</strong> Held by lenders, not sold to Fannie Mae or Freddie Mac</li>
    </ul>

    <h3>Jumbo Loan Requirements</h3>
    <p>Jumbo loans have stricter qualification requirements than conforming loans:</p>
    
    <h4>Credit Score Requirements:</h4>
    <ul>
      <li>Minimum credit score: 700+ (many lenders prefer 720+)</li>
      <li>Excellent credit history with no recent late payments</li>
      <li>Low credit utilization ratios</li>
      <li>No recent bankruptcies or foreclosures</li>
    </ul>
    
    <h4>Down Payment Requirements:</h4>
    <ul>
      <li>Typically 10-20% minimum (20% to avoid PMI)</li>
      <li>Some lenders may require up to 30% for high loan amounts</li>
      <li>Larger down payments often secure better interest rates</li>
      <li>Gift funds may be restricted or not allowed</li>
    </ul>

    <h4>Income and Asset Requirements:</h4>
    <ul>
      <li>Debt-to-income ratio typically below 43% (some lenders prefer 36%)</li>
      <li>Substantial liquid reserves required (6-12 months of payments)</li>
      <li>Verified income through tax returns, W-2s, and pay stubs</li>
      <li>Significant assets and investment portfolios often required</li>
      <li>Some lenders require proof of post-closing liquidity</li>
    </ul>

    <h4>Property Requirements:</h4>
    <ul>
      <li>Full appraisal required (sometimes two appraisals)</li>
      <li>Property must meet lender's standards</li>
      <li>Some property types may have additional requirements</li>
      <li>Investment properties may require higher down payments</li>
    </ul>

    <h3>How to Use This Jumbo Loan Calculator</h3>
    <p>Enter the following information to estimate your jumbo loan payment:</p>
    <ul>
      <li><strong>Home Price:</strong> The purchase price of the luxury property</li>
      <li><strong>Down Payment Percentage:</strong> Typically 20% or more</li>
      <li><strong>Interest Rate:</strong> Current jumbo loan rate (often competitive with conforming rates)</li>
      <li><strong>Loan Term:</strong> 15, 20, or 30 years</li>
      <li><strong>Property Taxes:</strong> Annual property tax (often higher for luxury properties)</li>
      <li><strong>Home Insurance:</strong> Annual insurance (may require higher coverage)</li>
      <li><strong>HOA Fees:</strong> Monthly homeowners association fees if applicable</li>
    </ul>

    <h3>Jumbo Loan Interest Rates</h3>
    <p>Jumbo loan rates are typically:</p>
    <ul>
      <li>Competitive with conforming loan rates (sometimes even lower)</li>
      <li>Influenced by credit score, down payment, and loan amount</li>
      <li>Can be fixed or adjustable (ARM)</li>
      <li>May have rate buydown options</li>
      <li>Subject to market conditions and lender portfolio needs</li>
    </ul>

    <h3>Advantages of Jumbo Loans</h3>
    <ul>
      <li><strong>Purchase Luxury Homes:</strong> Finance high-value properties beyond conventional limits</li>
      <li><strong>Competitive Rates:</strong> Often similar rates to conforming loans despite higher risk</li>
      <li><strong>One Mortgage:</strong> Avoid the complexity of multiple mortgages (piggyback loans)</li>
      <li><strong>Flexible Terms:</strong> Various term lengths and payment structures available</li>
      <li><strong>Investment Opportunities:</strong> Can be used for high-value investment properties</li>
    </ul>

    <h3>Disadvantages of Jumbo Loans</h3>
    <ul>
      <li><strong>Stricter Qualification:</strong> Higher credit scores and larger down payments required</li>
      <li><strong>More Documentation:</strong> Extensive income and asset verification needed</li>
      <li><strong>Larger Reserves:</strong> Significant cash reserves required</li>
      <li><strong>Higher Closing Costs:</strong> Loan amounts result in higher percentage-based fees</li>
      <li><strong>Less Flexibility:</strong> Fewer lenders offer jumbo loans compared to conforming loans</li>
    </ul>

    <h3>Alternatives to Jumbo Loans</h3>
    <p>If a jumbo loan doesn't work for you, consider:</p>
    <ul>
      <li><strong>Piggyback Loans:</strong> Take out two smaller conforming loans</li>
      <li><strong>ARM Loans:</strong> Adjustable-rate mortgages with lower initial rates</li>
      <li><strong>Larger Down Payment:</strong> Reduce loan amount below conforming limits</li>
      <li><strong>Portfolio Loans:</strong> Custom loans held by smaller lenders</li>
    </ul>

    <h3>Is a Jumbo Loan Right for You?</h3>
    <p>Jumbo loans are ideal if you:</p>
    <ul>
      <li>Need to finance a luxury home above $766,550</li>
      <li>Have excellent credit (720+ credit score)</li>
      <li>Can make a substantial down payment (20% or more)</li>
      <li>Have significant income and assets</li>
      <li>Can maintain large cash reserves after closing</li>
      <li>Want to avoid multiple mortgages or complex financing structures</li>
    </ul>
    <p>Work with experienced jumbo loan lenders who specialize in high-value mortgages to get the best rates and terms for your luxury property purchase.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 1200000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.75,
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
        defaultValue: 15000,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'hoaFees',
        label: 'Monthly HOA Fees ($)',
        type: 'number',
        defaultValue: 500,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Principal & Interest', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Monthly HOA Fees', isCurrency: true },
      { label: 'Total Loan Amount', isCurrency: true },
      { label: 'Down Payment Amount', isCurrency: true },
      { label: 'Total Interest Paid', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, downPaymentPercent, interestRate, loanTerm, propertyTax, homeInsurance, hoaFees } = values;
      
      const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
      const loanAmount = homePrice - downPaymentAmount;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const totalPaid = principalAndInterest * numberOfPayments;
      const totalInterest = totalPaid - loanAmount;
      
      const monthlyPropertyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      
      const totalMonthlyPayment = principalAndInterest + monthlyPropertyTax + monthlyInsurance + hoaFees;

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Principal & Interest', value: principalAndInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Monthly HOA Fees', value: hoaFees.toFixed(2), isCurrency: true },
        { label: 'Total Loan Amount', value: loanAmount.toFixed(2), isCurrency: true },
        { label: 'Down Payment Amount', value: downPaymentAmount.toFixed(2), isCurrency: true },
        { label: 'Total Interest Paid', value: totalInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};
