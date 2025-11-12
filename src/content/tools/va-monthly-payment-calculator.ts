import { CalculatorContent } from "@/types";

export const vaMonthlyPaymentCalculator: CalculatorContent = {
  title: "VA Monthly Payment Calculator",
  description:
    "Calculate your monthly VA loan payment including principal, interest, taxes, insurance, and funding fee.",
  icon: "Icon",
  category: "Calculators",
  slug: "va-monthly-payment-calculator",
  metaTitle: "VA Loan Monthly Payment Calculator - Calculate VA Mortgage Payments",
  metaDescription: "Free VA loan monthly payment calculator. Estimate your monthly VA mortgage payment including principal, interest, property taxes, homeowners insurance, and VA funding fee. Get accurate VA loan payment calculations instantly.",
  article: {
    title: "Complete Guide to VA Loan Monthly Payments",
    content: `
      <h2>What is a VA Loan Monthly Payment?</h2>
      <p>A VA loan monthly payment consists of several components that together make up your total housing expense. Understanding each component helps you budget accurately and plan your finances when using your VA home loan benefit.</p>

      <h2>Components of a VA Monthly Payment</h2>
      <h3>1. Principal and Interest (P&I)</h3>
      <p>The principal is the amount you borrowed, while interest is the cost of borrowing that money. Together, these make up the bulk of your monthly payment. VA loans typically offer competitive interest rates, often lower than conventional loans.</p>

      <h3>2. Property Taxes</h3>
      <p>Property taxes are collected monthly as part of your payment and held in escrow. Your lender pays your annual property tax bill when it's due. Tax amounts vary significantly by location and property value.</p>

      <h3>3. Homeowners Insurance</h3>
      <p>Homeowners insurance protects your property and is required by VA lenders. Like property taxes, insurance premiums are typically collected monthly and paid from your escrow account annually.</p>

      <h3>4. VA Funding Fee</h3>
      <p>The VA funding fee is a one-time cost that helps keep the VA loan program running without taxpayer expense. Most borrowers finance this fee into their loan amount rather than paying it upfront. The fee varies based on:</p>
      <ul>
        <li>Down payment amount (if any)</li>
        <li>Whether it's your first or subsequent use of the benefit</li>
        <li>Your military service category</li>
        <li>Whether you're disabled (disabled veterans are exempt)</li>
      </ul>

      <h2>VA Loan Advantages</h2>
      <ul>
        <li><strong>No Down Payment:</strong> Qualified veterans can finance 100% of the home's value</li>
        <li><strong>No PMI:</strong> VA loans never require private mortgage insurance, even with zero down</li>
        <li><strong>Competitive Rates:</strong> VA loans typically offer lower interest rates than conventional mortgages</li>
        <li><strong>Flexible Credit:</strong> More lenient credit requirements compared to conventional loans</li>
        <li><strong>Limited Closing Costs:</strong> VA regulations limit what sellers can charge veterans</li>
      </ul>

      <h2>Understanding VA Funding Fees</h2>
      <p>Standard VA funding fee rates (2024):</p>
      <ul>
        <li>First-time use, 0% down: 2.15% of loan amount</li>
        <li>First-time use, 5% down: 1.50% of loan amount</li>
        <li>First-time use, 10%+ down: 1.25% of loan amount</li>
        <li>Subsequent use, 0% down: 3.30% of loan amount</li>
        <li>Subsequent use, 5% down: 1.50% of loan amount</li>
        <li>Subsequent use, 10%+ down: 1.25% of loan amount</li>
      </ul>

      <h2>Who Should Use This Calculator?</h2>
      <p>This calculator is perfect for:</p>
      <ul>
        <li>Active duty military members planning to buy a home</li>
        <li>Veterans exploring their home buying options</li>
        <li>Eligible surviving spouses considering a home purchase</li>
        <li>Those comparing VA loans to other financing options</li>
        <li>Homebuyers wanting to understand their monthly housing costs</li>
      </ul>

      <h2>Tips for Managing Your VA Monthly Payment</h2>
      <ul>
        <li><strong>Shop for Insurance:</strong> Compare homeowners insurance quotes to reduce your monthly payment</li>
        <li><strong>Consider Your Budget:</strong> Keep your total housing costs below 28% of gross monthly income</li>
        <li><strong>Plan for Maintenance:</strong> Budget an additional 1-2% of home value annually for repairs</li>
        <li><strong>Review Escrow Annually:</strong> Your lender reviews escrow accounts yearly; payments may adjust</li>
        <li><strong>Refinance When Beneficial:</strong> VA offers streamlined refinancing (IRRRL) to lower rates</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter your loan details including home price, down payment (if any), interest rate, loan term, property taxes, and homeowners insurance. The calculator will show you your complete monthly payment broken down by component, helping you understand exactly where your money goes each month.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price ($)",
        type: "number",
        defaultValue: "300000",
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
        defaultValue: "3600",
      },
      {
        name: "homeInsurance",
        label: "Annual Homeowners Insurance ($)",
        type: "number",
        defaultValue: "1200",
      },
      {
        name: "fundingFeeRate",
        label: "VA Funding Fee Rate (%)",
        type: "number",
        defaultValue: "2.15",
      },
      {
        name: "isFirstTime",
        label: "First Time Using VA Loan?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [
      {
        label: "Monthly Principal & Interest",
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
        label: "Total Monthly Payment (PITI)",
        isCurrency: true,
      },
      {
        label: "VA Funding Fee",
        isCurrency: true,
      },
      {
        label: "Total Loan Amount (with funding fee)",
        isCurrency: true,
      },
      {
        label: "Total Interest Paid Over Life of Loan",
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
      const fundingFeeRate = parseFloat(values.fundingFeeRate);

      const loanAmount = homePrice - downPayment;
      const fundingFee = loanAmount * (fundingFeeRate / 100);
      const totalLoanAmount = loanAmount + fundingFee;

      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const monthlyPI =
        (totalLoanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const monthlyTax = propertyTax / 12;
      const monthlyInsurance = homeInsurance / 12;
      const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance;

      const totalPaid = monthlyPI * numberOfPayments;
      const totalInterest = totalPaid - totalLoanAmount;

      return [
        {
          label: "Monthly Principal & Interest",
          value: monthlyPI.toFixed(2),
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
          label: "Total Monthly Payment (PITI)",
          value: totalMonthlyPayment.toFixed(2),
          isCurrency: true,
        },
        {
          label: "VA Funding Fee",
          value: fundingFee.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Loan Amount (with funding fee)",
          value: totalLoanAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Interest Paid Over Life of Loan",
          value: totalInterest.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
