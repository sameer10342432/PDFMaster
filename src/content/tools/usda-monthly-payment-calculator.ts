import { CalculatorContent } from "@/types";

export const usdaMonthlyPaymentCalculator: CalculatorContent = {
  title: "USDA Monthly Payment Calculator",
  description:
    "Calculate your monthly USDA loan payment with 100% financing including mortgage insurance fees.",
  icon: "Icon",
  category: "Calculators",
  slug: "usda-monthly-payment-calculator",
  metaTitle: "USDA Loan Monthly Payment Calculator - 100% Financing Rural Home Loans",
  metaDescription: "Free USDA monthly payment calculator for rural home loans. Calculate payments with 100% financing, including upfront and annual mortgage insurance fees. Get accurate USDA loan estimates for rural property purchases.",
  article: {
    title: "Complete Guide to USDA Loan Monthly Payments",
    content: `
      <h2>What is a USDA Loan?</h2>
      <p>USDA loans, backed by the U.S. Department of Agriculture, are designed to promote homeownership in eligible rural and suburban areas. These loans offer 100% financing (no down payment required) and competitive interest rates, making them an excellent option for qualified buyers in designated rural areas.</p>

      <h2>Components of a USDA Monthly Payment</h2>
      <h3>1. Principal and Interest</h3>
      <p>Your monthly principal and interest payment is based on the loan amount, interest rate, and loan term. USDA loans typically offer competitive rates similar to or better than conventional loans.</p>

      <h3>2. Annual Mortgage Insurance (MI)</h3>
      <p>USDA loans require annual mortgage insurance, which is 0.35% of the remaining loan balance paid monthly. This insurance protects the lender and allows the program to offer 100% financing with no down payment.</p>

      <h3>3. Upfront Guarantee Fee</h3>
      <p>USDA charges a one-time upfront guarantee fee of 1.0% of the loan amount. Most borrowers finance this fee into their loan rather than paying it at closing. This fee is lower than FHA's upfront mortgage insurance premium.</p>

      <h3>4. Property Taxes and Insurance</h3>
      <p>Like all mortgages, USDA loans require property taxes and homeowners insurance, typically collected monthly through escrow and paid annually by your lender.</p>

      <h2>USDA Loan Requirements</h2>
      <ul>
        <li><strong>Location:</strong> Property must be in a USDA-eligible rural area</li>
        <li><strong>Income Limits:</strong> Household income cannot exceed 115% of area median income</li>
        <li><strong>Credit Score:</strong> Minimum 640 credit score for automated underwriting</li>
        <li><strong>Primary Residence:</strong> Must be your primary residence, not investment property</li>
        <li><strong>Citizenship:</strong> U.S. citizen, non-citizen national, or qualified alien</li>
      </ul>

      <h2>USDA Loan Advantages</h2>
      <ul>
        <li><strong>Zero Down Payment:</strong> 100% financing available for qualified buyers</li>
        <li><strong>Low Mortgage Insurance:</strong> Annual MI of only 0.35%, lower than FHA's 0.55%</li>
        <li><strong>Competitive Rates:</strong> Interest rates often match or beat conventional loans</li>
        <li><strong>Flexible Credit:</strong> More lenient than conventional financing</li>
        <li><strong>Lower Total Costs:</strong> Combined fees typically lower than FHA loans</li>
        <li><strong>Refinancing Options:</strong> USDA offers streamlined refinancing programs</li>
      </ul>

      <h2>USDA Mortgage Insurance Breakdown</h2>
      <p><strong>Upfront Guarantee Fee:</strong> 1.0% of loan amount (can be financed)</p>
      <p><strong>Annual Guarantee Fee:</strong> 0.35% of remaining balance annually (paid monthly)</p>
      <p>Example: On a $200,000 loan, you'd pay $2,000 upfront (usually financed) and approximately $58 per month for annual MI.</p>

      <h2>Eligible Property Types</h2>
      <p>USDA loans can be used for:</p>
      <ul>
        <li>Single-family homes</li>
        <li>Condominiums (if USDA-approved)</li>
        <li>Townhomes</li>
        <li>New construction</li>
        <li>Existing homes</li>
      </ul>

      <h2>USDA vs. Other Loan Types</h2>
      <h3>USDA vs. FHA</h3>
      <ul>
        <li>USDA: 0% down, 0.35% annual MI, location restricted</li>
        <li>FHA: 3.5% down, 0.55% annual MI, no location restrictions</li>
      </ul>

      <h3>USDA vs. Conventional</h3>
      <ul>
        <li>USDA: 0% down, income limits, rural areas only</li>
        <li>Conventional: 3-20% down, no income limits, any location</li>
      </ul>

      <h2>How to Check USDA Eligibility</h2>
      <p>Visit the USDA's eligibility website to:</p>
      <ul>
        <li>Check if a property address is in an eligible rural area</li>
        <li>Verify household income limits for your county</li>
        <li>Find USDA-approved lenders in your area</li>
        <li>Learn about the application process</li>
      </ul>

      <h2>Tips for USDA Homebuyers</h2>
      <ul>
        <li><strong>Check Property Eligibility First:</strong> Verify the property is in a USDA-eligible area before house hunting</li>
        <li><strong>Understand Income Limits:</strong> Make sure your household income qualifies</li>
        <li><strong>Work with USDA Lenders:</strong> Choose lenders experienced with USDA loans</li>
        <li><strong>Budget for MI:</strong> Factor in the ongoing monthly mortgage insurance</li>
        <li><strong>Consider Total Costs:</strong> Include property taxes, insurance, and maintenance in your budget</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter your home price (USDA allows 100% financing), interest rate, loan term, and local property tax and insurance costs. The calculator includes the 1.0% upfront guarantee fee (financed into the loan) and the 0.35% annual mortgage insurance to show your complete monthly payment.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price ($)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "downPayment",
        label: "Down Payment ($)",
        type: "number",
        defaultValue: "0",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        defaultValue: "6.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
      {
        name: "propertyTax",
        label: "Annual Property Tax ($)",
        type: "number",
        defaultValue: "2500",
      },
      {
        name: "homeInsurance",
        label: "Annual Homeowners Insurance ($)",
        type: "number",
        defaultValue: "1000",
      },
    ],
    results: [
      {
        label: "Monthly Principal & Interest",
        isCurrency: true,
      },
      {
        label: "Monthly Mortgage Insurance (0.35%)",
        isCurrency: true,
      },
      {
        label: "Monthly Property Tax",
        isCurrency: true,
      },
      {
        label: "Monthly Home Insurance",
        isCurrency: true,
      },
      {
        label: "Total Monthly Payment",
        isCurrency: true,
      },
      {
        label: "Upfront Guarantee Fee (1.0%)",
        isCurrency: true,
      },
      {
        label: "Total Loan Amount (with guarantee fee)",
        isCurrency: true,
      },
      {
        label: "Total Paid Over Life of Loan",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const homePrice = parseFloat(values.homePrice);
      const downPayment = parseFloat(values.downPayment);
      const interestRate = parseFloat(values.interestRate);
      const loanTerm = parseInt(values.loanTerm);
      const propertyTax = parseFloat(values.propertyTax);
      const homeInsurance = parseFloat(values.homeInsurance);

      const baseLoanAmount = homePrice - downPayment;
      const upfrontFee = baseLoanAmount * 0.01;
      const totalLoanAmount = baseLoanAmount + upfrontFee;

      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const monthlyPI =
        (totalLoanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const annualMI = totalLoanAmount * 0.0035;
      const monthlyMI = annualMI / 12;
      const monthlyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      const totalMonthlyPayment = monthlyPI + monthlyMI + monthlyTax + monthlyInsurance;

      const totalPaid = (monthlyPI + monthlyMI) * numberOfPayments + upfrontFee;

      return [
        {
          label: "Monthly Principal & Interest",
          value: monthlyPI.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Mortgage Insurance (0.35%)",
          value: monthlyMI.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Property Tax",
          value: monthlyTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Home Insurance",
          value: monthlyInsurance.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Monthly Payment",
          value: totalMonthlyPayment.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Upfront Guarantee Fee (1.0%)",
          value: upfrontFee.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Loan Amount (with guarantee fee)",
          value: totalLoanAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Paid Over Life of Loan",
          value: totalPaid.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
