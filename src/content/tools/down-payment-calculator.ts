import { CalculatorContent } from '@/types';

export const DOWN_PAYMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Down Payment Calculator',
  description: 'Calculate down payment requirements and analyze different scenarios for home purchases',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'down-payment-calculator',
  article: {
    title: "Understanding Down Payments for Home Purchases",
    content: `
    <p>A down payment is the initial upfront portion of the total amount due on a home purchase. It's typically expressed as a percentage of the purchase price. The down payment amount directly affects your loan amount, monthly mortgage payment, and whether you'll need to pay private mortgage insurance (PMI).</p>
    
    <h2>How Much Should You Put Down?</h2>
    <p>While 20% is often cited as the ideal down payment, many buyers put down less. Here are common down payment scenarios:</p>
    <ul>
      <li><strong>3-5%:</strong> FHA loans and some conventional loans allow down payments as low as 3-5%</li>
      <li><strong>10%:</strong> A middle ground that reduces PMI costs while keeping cash reserves</li>
      <li><strong>20%:</strong> Avoids PMI entirely and typically gets better interest rates</li>
      <li><strong>25%+:</strong> Maximizes equity and minimizes monthly costs</li>
    </ul>
    
    <h2>Additional Costs to Consider</h2>
    <p>Beyond the down payment, homebuyers need to budget for:</p>
    <ul>
      <li><strong>Closing Costs:</strong> Typically 2-5% of the purchase price</li>
      <li><strong>PMI:</strong> Required if down payment is less than 20%</li>
      <li><strong>Property Taxes:</strong> Varies by location, usually 1-2% annually</li>
      <li><strong>Homeowners Insurance:</strong> Protects your investment</li>
      <li><strong>HOA Fees:</strong> If applicable to your property</li>
    </ul>
    
    <h2>Calculating Debt-to-Income Ratio</h2>
    <p>Lenders use your debt-to-income (DTI) ratio to determine loan eligibility:</p>
    <ul>
      <li><strong>Below 28%:</strong> Excellent - You're in a strong financial position</li>
      <li><strong>28-36%:</strong> Good - Most lenders approve loans in this range</li>
      <li><strong>Above 36%:</strong> Risky - May have difficulty qualifying for a loan</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "monthlyIncome",
        label: "Monthly Gross Income",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "propertyTaxRate",
        label: "Property Tax Rate (%)",
        type: "number",
        placeholder: "1.2",
        defaultValue: "1.2",
      },
      {
        name: "homeInsurance",
        label: "Annual Home Insurance",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "hoaFees",
        label: "Monthly HOA Fees",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "closingCostPercent",
        label: "Closing Costs (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "pmiRate",
        label: "PMI Rate (%)",
        type: "number",
        placeholder: "0.5",
        defaultValue: "0.5",
      },
    ],
    results: [
      { label: "Down Payment Amount", isCurrency: true },
      { label: "Total Cash Needed at Closing", isCurrency: true },
      { label: "Loan Amount", isCurrency: true },
      { label: "Monthly Payment (PITI + PMI + HOA)", isCurrency: true },
      { label: "PMI Monthly Cost", isCurrency: true },
      { label: "Loan-to-Value Ratio", isCurrency: false },
      { label: "Debt-to-Income Ratio", isCurrency: false },
    ],
    calculate: (data: any) => {
      const {
        homePrice,
        downPaymentPercent,
        interestRate,
        loanTerm,
        monthlyIncome,
        monthlyDebts,
        propertyTaxRate,
        homeInsurance,
        hoaFees,
        closingCostPercent,
        pmiRate
      } = data;

      const price = Number(homePrice) || 0;
      const downPercent = Number(downPaymentPercent) || 0;
      const rate = (Number(interestRate) || 0) / 100 / 12;
      const term = (Number(loanTerm) || 0) * 12;
      const income = Number(monthlyIncome) || 0;
      const debts = Number(monthlyDebts) || 0;
      const taxRate = (Number(propertyTaxRate) || 0) / 100;
      const insurance = (Number(homeInsurance) || 0) / 12;
      const hoa = Number(hoaFees) || 0;
      const closingPercent = (Number(closingCostPercent) || 0) / 100;
      const pmi = (Number(pmiRate) || 0) / 100;

      const downPaymentAmount = price * (downPercent / 100);
      const loanAmount = price - downPaymentAmount;
      const loanToValue = (loanAmount / price) * 100;

      // Monthly payment calculation (P&I)
      let monthlyPayment = 0;
      if (rate > 0 && term > 0) {
        monthlyPayment = loanAmount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      }

      // PMI calculation (if down payment < 20%)
      const pmiAmount = downPercent < 20 ? (loanAmount * pmi / 12) : 0;

      // Property taxes
      const monthlyPropertyTax = price * taxRate / 12;

      // Total monthly payment (PITI + HOA + PMI)
      const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + insurance + hoa + pmiAmount;

      // Closing costs
      const totalClosingCosts = price * closingPercent;

      // Total cash needed
      const totalCashNeeded = downPaymentAmount + totalClosingCosts;

      // Debt-to-income ratio
      const debtToIncome = ((totalMonthlyPayment + debts) / income) * 100;

      return [
        { label: "Down Payment Amount", value: `${downPaymentAmount.toFixed(2)}`, isCurrency: true },
        { label: "Total Cash Needed at Closing", value: `${totalCashNeeded.toFixed(2)}`, isCurrency: true },
        { label: "Loan Amount", value: `${loanAmount.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Payment (PITI + PMI + HOA)", value: `${totalMonthlyPayment.toFixed(2)}`, isCurrency: true },
        { label: "PMI Monthly Cost", value: `${pmiAmount.toFixed(2)}`, isCurrency: true },
        { label: "Loan-to-Value Ratio", value: `${loanToValue.toFixed(2)}%`, isCurrency: false },
        { label: "Debt-to-Income Ratio", value: `${debtToIncome.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};