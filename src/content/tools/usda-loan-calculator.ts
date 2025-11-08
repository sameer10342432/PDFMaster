import { CalculatorContent } from '@/types';

export const USDA_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'USDA Loan Calculator',
  description: 'Calculate USDA Rural Development loan payments with 100% financing and low rates',
  slug: 'usda-loan-calculator',
  icon: '🌾',
  category: 'Basic Calculators',
  metaTitle: 'USDA Loan Calculator - Calculate Rural Development 100% Financing Mortgage',
  metaDescription: 'Free USDA loan calculator for rural and suburban homes. Calculate payments with no down payment, low rates, and affordable monthly costs. Check eligibility instantly.',
  article: {
    title: 'Understanding USDA Loans for Rural Housing',
    content: `
    <h2>What is a USDA Loan?</h2>
    <p>A USDA loan, also known as a USDA Rural Development Guaranteed Housing Loan, is a zero-down-payment mortgage backed by the United States Department of Agriculture. These loans are designed to promote homeownership in rural and suburban areas, making them an excellent option for low-to-moderate income buyers.</p>
    
    <h3>Key Benefits of USDA Loans</h3>
    <ul>
      <li><strong>100% Financing:</strong> No down payment required - finance the entire purchase price</li>
      <li><strong>Low Interest Rates:</strong> Competitive rates often lower than conventional loans</li>
      <li><strong>Low Mortgage Insurance:</strong> Much lower than FHA mortgage insurance premiums</li>
      <li><strong>Flexible Credit Requirements:</strong> More lenient than conventional loans</li>
      <li><strong>Seller Concessions:</strong> Sellers can contribute up to 6% toward closing costs</li>
      <li><strong>Gift Funds Allowed:</strong> Down payment and closing costs can be gifts</li>
      <li><strong>Refinance Options:</strong> Streamlined refinance programs available</li>
    </ul>

    <h3>USDA Loan Eligibility Requirements</h3>
    <p>To qualify for a USDA loan, you must meet these requirements:</p>
    <h4>Location Requirements:</h4>
    <ul>
      <li>Property must be in a USDA-eligible rural or suburban area</li>
      <li>About 97% of U.S. land area qualifies as "rural"</li>
      <li>Many suburban areas outside major cities are eligible</li>
      <li>Use the USDA eligibility map online to check your area</li>
    </ul>
    
    <h4>Income Requirements:</h4>
    <ul>
      <li>Household income cannot exceed 115% of median income for the area</li>
      <li>Income limits vary by location and household size</li>
      <li>All household members' income counts, not just borrowers</li>
    </ul>

    <h4>Credit and Property Requirements:</h4>
    <ul>
      <li>Minimum credit score typically 640 (can be lower with compensating factors)</li>
      <li>Must be a primary residence (not for investment properties or vacation homes)</li>
      <li>Property must be modest in size and design (no pools or income-generating features)</li>
      <li>Home must be in good condition and meet USDA standards</li>
    </ul>

    <h3>USDA Loan Fees</h3>
    <p>USDA loans require two types of fees:</p>
    <ul>
      <li><strong>Upfront Guarantee Fee:</strong> 1% of the loan amount (can be rolled into the loan)</li>
      <li><strong>Annual Fee:</strong> 0.35% of the loan balance, divided into monthly payments</li>
    </ul>
    <p>These fees are significantly lower than FHA mortgage insurance, saving you money every month.</p>

    <h3>How to Use This USDA Loan Calculator</h3>
    <p>Enter the following information to calculate your USDA loan payment:</p>
    <ul>
      <li><strong>Home Price:</strong> The purchase price of the rural property</li>
      <li><strong>Interest Rate:</strong> Current USDA loan interest rate</li>
      <li><strong>Loan Term:</strong> Typically 30 years</li>
      <li><strong>Property Taxes:</strong> Annual property tax estimate</li>
      <li><strong>Home Insurance:</strong> Annual homeowners insurance</li>
    </ul>

    <h3>USDA Loan Types</h3>
    <p>The USDA offers different loan programs:</p>
    <ul>
      <li><strong>USDA Guaranteed Loan:</strong> Most common, no down payment, processed through approved lenders</li>
      <li><strong>USDA Direct Loan:</strong> For very low-income buyers (50% or less of area median), subsidized rates</li>
      <li><strong>USDA Home Improvement Loan:</strong> For repairs and improvements to USDA-financed homes</li>
    </ul>

    <h3>USDA vs. FHA vs. VA Loans</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>USDA</th>
        <th>FHA</th>
        <th>VA</th>
      </tr>
      <tr>
        <td>Down Payment</td>
        <td>0%</td>
        <td>3.5%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Mortgage Insurance</td>
        <td>0.35% annual</td>
        <td>0.55-0.85% annual</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Upfront Fee</td>
        <td>1%</td>
        <td>1.75%</td>
        <td>2.15-3.3%</td>
      </tr>
      <tr>
        <td>Location Restriction</td>
        <td>Rural/suburban only</td>
        <td>None</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Eligibility</td>
        <td>Income limits apply</td>
        <td>All buyers</td>
        <td>Veterans only</td>
      </tr>
    </table>

    <h3>Is a USDA Loan Right for You?</h3>
    <p>USDA loans are ideal if you:</p>
    <ul>
      <li>Want to buy in a rural or suburban area outside major cities</li>
      <li>Have little to no savings for a down payment</li>
      <li>Meet the income requirements for your area</li>
      <li>Want lower monthly payments than FHA loans</li>
      <li>Are a first-time homebuyer or current homeowner</li>
    </ul>
    <p>Check your property eligibility at the USDA website and get pre-approved with a USDA-approved lender today.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'homePrice',
        label: 'Home Price ($)',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 6.0,
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
        defaultValue: 2500,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Principal & Interest', isCurrency: true },
      { label: 'Monthly Guarantee Fee', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Upfront Guarantee Fee', isCurrency: true },
      { label: 'Total Loan Amount', isCurrency: true },
    ],
    calculate: (values) => {
      const { homePrice, interestRate, loanTerm, propertyTax, homeInsurance } = values;
      
      const upfrontFee = homePrice * 0.01;
      const totalLoanAmount = homePrice + upfrontFee;
      
      const annualGuaranteeFee = homePrice * 0.0035;
      const monthlyGuaranteeFee = annualGuaranteeFee / 12;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = totalLoanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const monthlyPropertyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      
      const totalMonthlyPayment = principalAndInterest + monthlyGuaranteeFee + monthlyPropertyTax + monthlyInsurance;

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Principal & Interest', value: principalAndInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly Guarantee Fee', value: monthlyGuaranteeFee.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Upfront Guarantee Fee', value: upfrontFee.toFixed(2), isCurrency: true },
        { label: 'Total Loan Amount', value: totalLoanAmount.toFixed(2), isCurrency: true },
      ];
    },
  },
};
