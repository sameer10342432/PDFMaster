import { CalculatorContent } from "@/types";

export const BRRRR_METHOD_CALCULATOR_CONTENT: CalculatorContent = {
  title: "BRRRR Method Calculator",
  description: "Analyze a BRRRR (Buy, Rehab, Rent, Refinance, Repeat) deal.",
  category: "Real Estate",
  slug: "brrrr-method-calculator",
  article: {
    title: "About the BRRRR Method Calculator",
    content: `
    The BRRRR (Buy, Rehab, Rent, Refinance, Repeat) method is a real estate investment strategy that involves flipping a distressed property to hold as a rental. This calculator helps you analyze the potential of a BRRRR deal.

    ### How it Works

    The calculator takes into account all the key financial aspects of a BRRRR deal, from the initial purchase and renovation to the rental income and refinancing.

    #### Key Inputs:

    - **Purchase Price:** The price you pay to acquire the property.
    - **After Repair Value (ARV):** The estimated market value of the property after all renovations are complete.
    - **Renovation Costs:** The total cost of all repairs and improvements to the property.
    - **Financing Details:** Loan amount, interest rate, and term for the initial purchase.
    - **Refinance LTV:** The loan-to-value ratio for the cash-out refinance.
    - **Rental Income & Expenses:** Monthly rent, vacancy rate, property management fees, and other operating expenses.

    ### Why Use This Calculator?

    Using the BRRRR Method Calculator allows you to get a clear picture of the potential return on your investment, including the cash-on-cash return and the cap rate. This can help you make an informed decision about whether a particular BRRRR deal is right for you.
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: "150000",
      },
      {
        name: "renovationCosts",
        label: "Renovation Costs",
        type: "number",
        defaultValue: "30000",
      },
      {
        name: "arv",
        label: "After Repair Value (ARV)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "loanAmount",
        label: "Initial Loan Amount",
        type: "number",
        defaultValue: "120000",
      },
      {
        name: "interestRate",
        label: "Initial Interest Rate (%)",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "loanTerm",
        label: "Initial Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
      {
        name: "refinanceLTV",
        label: "Refinance LTV (%)",
        type: "number",
        defaultValue: "75",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        defaultValue: "2000",
      },
      {
        name: "vacancyRate",
        label: "Vacancy Rate (%)",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "propertyManagement",
        label: "Property Management (% of Rent)",
        type: "number",
        defaultValue: "10",
      },
      {
        name: "operatingExpenses",
        label: "Monthly Operating Expenses",
        type: "number",
        defaultValue: "300",
      },
    ],
    calculate: (values) => {
      const { purchasePrice, renovationCosts, arv, loanAmount, interestRate, loanTerm, refinanceLTV, monthlyRent, vacancyRate, propertyManagement, operatingExpenses } = values;
      const totalInvestment = purchasePrice + renovationCosts;
      const cashInvested = totalInvestment - loanAmount;
      const refinanceLoanAmount = arv * (refinanceLTV / 100);
      const cashOut = refinanceLoanAmount - loanAmount;
      const grossMonthlyIncome = monthlyRent * (1 - vacancyRate / 100);
      const totalMonthlyExpenses = (grossMonthlyIncome * (propertyManagement / 100)) + operatingExpenses;
      const monthlyCashFlow = grossMonthlyIncome - totalMonthlyExpenses;
      const annualCashFlow = monthlyCashFlow * 12;
      const cashOnCashReturn = (annualCashFlow / cashInvested) * 100;
      const capRate = ((grossMonthlyIncome * 12) / totalInvestment) * 100;

      return [
        { label: "Total Investment", value: totalInvestment.toFixed(2), isCurrency: true },
        { label: "Cash Invested", value: cashInvested.toFixed(2), isCurrency: true },
        { label: "Refinance Loan Amount", value: refinanceLoanAmount.toFixed(2), isCurrency: true },
        { label: "Cash Out from Refinance", value: cashOut.toFixed(2), isCurrency: true },
        { label: "Monthly Cash Flow", value: monthlyCashFlow.toFixed(2), isCurrency: true },
        { label: "Annual Cash Flow", value: annualCashFlow.toFixed(2), isCurrency: true },
        { label: "Cash on Cash Return", value: cashOnCashReturn.toFixed(2), isPercentage: true },
        { label: "Cap Rate", value: capRate.toFixed(2), isPercentage: true },
      ];
    },
  },
};