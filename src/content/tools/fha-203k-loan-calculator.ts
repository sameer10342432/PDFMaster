import { CalculatorContent } from '@/types';

export const FHA_203K_LOAN_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'FHA 203k Loan Calculator',
  description: 'Calculate FHA 203k renovation loan payments for fixer-upper properties',
  slug: 'fha-203k-loan-calculator',
  icon: '🔧',
  category: 'Basic Calculators',
  metaTitle: 'FHA 203k Loan Calculator - Calculate Renovation Mortgage for Fixer-Upper Homes',
  metaDescription: 'Free FHA 203k rehab loan calculator. Estimate payments for purchase plus renovation costs in one mortgage. Perfect for fixing up distressed properties.',
  article: {
    title: 'Understanding FHA 203k Renovation Loans',
    content: `
    <h2>What is an FHA 203k Loan?</h2>
    <p>An FHA 203k loan is a special government-backed mortgage that combines the purchase price and renovation costs into a single loan. This program allows homebuyers to purchase a fixer-upper property and finance the repairs or improvements, all with just one mortgage and one closing. It's perfect for buying distressed properties that might not qualify for traditional financing.</p>
    
    <h3>Types of FHA 203k Loans</h3>
    
    <h4>Limited 203k (Streamline):</h4>
    <ul>
      <li>Maximum renovation budget: $35,000</li>
      <li>For non-structural repairs and upgrades</li>
      <li>No architectural drawings or consultant required</li>
      <li>Faster approval process</li>
      <li>Examples: New appliances, flooring, painting, roof repairs</li>
    </ul>

    <h4>Standard 203k:</h4>
    <ul>
      <li>Minimum renovation budget: $5,000</li>
      <li>No maximum limit (subject to FHA loan limits)</li>
      <li>Structural repairs and major renovations allowed</li>
      <li>Requires FHA-approved consultant</li>
      <li>Examples: Room additions, foundation work, complete gut rehabs</li>
    </ul>

    <h3>Key Benefits of FHA 203k Loans</h3>
    <ul>
      <li><strong>Single Loan:</strong> Finance purchase and renovations together - one loan, one closing</li>
      <li><strong>Low Down Payment:</strong> As little as 3.5% down on total project cost</li>
      <li><strong>Flexible Credit:</strong> Lower credit requirements than conventional renovation loans</li>
      <li><strong>Increased Home Value:</strong> Buy distressed properties at discount and add value through renovations</li>
      <li><strong>Repairs Before Move-In:</strong> Complete renovations before moving in</li>
      <li><strong>Streamlined Process:</strong> Easier than juggling construction loan and mortgage</li>
      <li><strong>Energy Efficient Upgrades:</strong> Can finance up to $8,000 in energy improvements without appraisal</li>
    </ul>

    <h3>FHA 203k Eligibility Requirements</h3>
    
    <h4>Borrower Requirements:</h4>
    <ul>
      <li>Credit score minimum of 500-580 (depending on down payment)</li>
      <li>Debt-to-income ratio typically below 43%</li>
      <li>Must be primary residence (not investment property)</li>
      <li>Employment verification required</li>
      <li>Must demonstrate ability to afford total project costs</li>
    </ul>
    
    <h4>Property Requirements:</h4>
    <ul>
      <li>Property must be at least 1 year old</li>
      <li>1-4 unit residential properties eligible</li>
      <li>Property can be in any condition (even uninhabitable)</li>
      <li>Mixed-use properties allowed if residential is 51%+</li>
      <li>Must meet FHA property standards after renovation</li>
    </ul>

    <h4>Renovation Requirements:</h4>
    <ul>
      <li>All work must be completed within 6 months (can extend in some cases)</li>
      <li>Must use licensed contractors for major work</li>
      <li>10% contingency reserve required for Standard 203k</li>
      <li>FHA consultant required for Standard 203k to oversee work</li>
      <li>Funds released in draws as work is completed</li>
    </ul>

    <h3>Eligible Renovations with 203k</h3>
    <p>You can finance a wide range of improvements:</p>
    <ul>
      <li><strong>Structural:</strong> Foundation repairs, room additions, major structural changes</li>
      <li><strong>Systems:</strong> Plumbing, electrical, HVAC replacement or upgrades</li>
      <li><strong>Exterior:</strong> Roofing, siding, decks, patios, landscaping</li>
      <li><strong>Interior:</strong> Kitchen and bathroom remodels, flooring, painting</li>
      <li><strong>Accessibility:</strong> Ramps, widened doorways for wheelchair access</li>
      <li><strong>Energy Efficiency:</strong> New windows, insulation, solar panels</li>
      <li><strong>Safety:</strong> Lead paint removal, mold remediation</li>
    </ul>

    <h3>How FHA 203k Loan Process Works</h3>
    <ol>
      <li><strong>Get Pre-Approved:</strong> Work with FHA 203k approved lender</li>
      <li><strong>Find a Property:</strong> Locate fixer-upper within budget</li>
      <li><strong>Get Contractor Bids:</strong> Obtain detailed renovation estimates</li>
      <li><strong>Submit Plans:</strong> Provide renovation scope and budget to lender</li>
      <li><strong>Appraisal:</strong> Property appraised based on after-renovation value</li>
      <li><strong>Close on Loan:</strong> Single closing for purchase and renovation</li>
      <li><strong>Renovations Begin:</strong> Contractor starts work with draw schedule</li>
      <li><strong>Inspections & Draws:</strong> Consultant inspects, funds released in stages</li>
      <li><strong>Final Completion:</strong> All work finished, final inspection approved</li>
    </ol>

    <h3>How to Use This FHA 203k Calculator</h3>
    <p>Enter the following to calculate your total monthly payment:</p>
    <ul>
      <li><strong>Purchase Price:</strong> The cost to buy the fixer-upper property</li>
      <li><strong>Renovation Budget:</strong> Estimated cost of all repairs and improvements</li>
      <li><strong>Down Payment %:</strong> Typically 3.5% to 10%</li>
      <li><strong>Interest Rate:</strong> Current FHA 203k rate (usually similar to standard FHA)</li>
      <li><strong>Loan Term:</strong> Typically 30 years</li>
      <li><strong>Property Taxes:</strong> Annual estimate after renovations</li>
      <li><strong>Home Insurance:</strong> Annual insurance cost</li>
    </ul>

    <h3>FHA 203k Costs and Fees</h3>
    <ul>
      <li><strong>Upfront MIP:</strong> 1.75% of total loan amount</li>
      <li><strong>Annual MIP:</strong> 0.55% to 0.85% depending on LTV and term</li>
      <li><strong>Consultant Fee:</strong> $400-$800 for Standard 203k</li>
      <li><strong>Supplemental Origination Fee:</strong> Up to $350</li>
      <li><strong>Architectural/Engineering:</strong> If structural plans needed</li>
      <li><strong>Contingency Reserve:</strong> 10-20% of renovation budget for Standard 203k</li>
    </ul>

    <h3>203k vs. Home Equity Loan vs. Personal Loan</h3>
    <table>
      <tr>
        <th>Feature</th>
        <th>FHA 203k</th>
        <th>Home Equity</th>
        <th>Personal Loan</th>
      </tr>
      <tr>
        <td>Down Payment</td>
        <td>3.5%</td>
        <td>Need existing equity</td>
        <td>None</td>
      </tr>
      <tr>
        <td>Interest Rate</td>
        <td>6-7%</td>
        <td>7-9%</td>
        <td>10-20%</td>
      </tr>
      <tr>
        <td>Loan Amount</td>
        <td>Up to FHA limits</td>
        <td>Up to 80-90% LTV</td>
        <td>Up to $50k usually</td>
      </tr>
      <tr>
        <td>Best For</td>
        <td>Buying fixer-uppers</td>
        <td>Current homeowners</td>
        <td>Small projects</td>
      </tr>
    </table>

    <h3>Is an FHA 203k Loan Right for You?</h3>
    <p>FHA 203k loans are ideal if you:</p>
    <ul>
      <li>Want to buy a fixer-upper at a discount price</li>
      <li>Don't have cash reserves for renovations after buying</li>
      <li>Want to customize a home before moving in</li>
      <li>Found a great location but the home needs work</li>
      <li>Are willing to manage a renovation project</li>
      <li>Have time to complete renovations (6 month timeline)</li>
    </ul>
    <p>Work with an experienced FHA 203k lender who can guide you through the process and connect you with approved contractors and consultants.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price ($)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'renovationBudget',
        label: 'Renovation Budget ($)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 3.5,
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
        defaultValue: 3000,
      },
      {
        name: 'homeInsurance',
        label: 'Annual Home Insurance ($)',
        type: 'number',
        defaultValue: 1200,
      },
    ],
    results: [
      { label: 'Monthly Payment', isCurrency: true },
      { label: 'Principal & Interest', isCurrency: true },
      { label: 'Monthly MIP', isCurrency: true },
      { label: 'Monthly Property Tax', isCurrency: true },
      { label: 'Monthly Insurance', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Total Loan Amount', isCurrency: true },
      { label: 'Down Payment', isCurrency: true },
      { label: 'Upfront MIP', isCurrency: true },
    ],
    calculate: (values) => {
      const { purchasePrice, renovationBudget, downPaymentPercent, interestRate, loanTerm, propertyTax, homeInsurance } = values;
      
      const totalProjectCost = purchasePrice + renovationBudget;
      const downPaymentAmount = (totalProjectCost * downPaymentPercent) / 100;
      const loanAmountBeforeMIP = totalProjectCost - downPaymentAmount;
      
      const upfrontMIP = loanAmountBeforeMIP * 0.0175;
      const totalLoanAmount = loanAmountBeforeMIP + upfrontMIP;
      
      const annualMIPRate = 0.0085;
      const monthlyMIP = (loanAmountBeforeMIP * annualMIPRate) / 12;
      
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;
      
      const principalAndInterest = totalLoanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      const monthlyPropertyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      
      const totalMonthlyPayment = principalAndInterest + monthlyMIP + monthlyPropertyTax + monthlyInsurance;

      return [
        { label: 'Monthly Payment', value: totalMonthlyPayment.toFixed(2), isCurrency: true },
        { label: 'Principal & Interest', value: principalAndInterest.toFixed(2), isCurrency: true },
        { label: 'Monthly MIP', value: monthlyMIP.toFixed(2), isCurrency: true },
        { label: 'Monthly Property Tax', value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: 'Monthly Insurance', value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Total Loan Amount', value: totalLoanAmount.toFixed(2), isCurrency: true },
        { label: 'Down Payment', value: downPaymentAmount.toFixed(2), isCurrency: true },
        { label: 'Upfront MIP', value: upfrontMIP.toFixed(2), isCurrency: true },
      ];
    },
  },
};
