import { CalculatorContent } from "@/types";

export const LOAN_203K_RENOVATION_BUDGET_TRACKER_CONTENT: CalculatorContent = {
  title: "203k Loan Renovation Budget Tracker",
  description: "Track and manage your FHA 203k loan renovation budget with detailed cost breakdowns.",
  icon: "Icon",
  category: "Real Estate",
  slug: "203k-loan-renovation-budget-tracker",
  article: {
    title: "About the 203k Loan Renovation Budget Tracker",
    content: `
    The 203k Loan Renovation Budget Tracker helps homebuyers and homeowners manage FHA 203k loans, which allow you to finance both the purchase and renovation of a property in a single mortgage.

    ### How it Works

    This calculator tracks renovation costs, contingency reserves, loan limits, and helps ensure your project stays within FHA 203k guidelines.

    #### Key Inputs:

    - **Purchase Price:** The cost of acquiring the property.
    - **Renovation Costs:** Detailed breakdown of renovation expenses.
    - **Contingency Reserve:** Required 10-20% reserve for unexpected costs.
    - **Consultant Fees:** HUD consultant fees (typically $400-$1,500).
    - **Interest Rate & Loan Term:** Financing terms for the 203k loan.
    - **Down Payment:** Minimum 3.5% for FHA loans.

    ### Why Use This Calculator?

    - **Budget Compliance:** Ensure your renovation budget meets FHA 203k requirements.
    - **Contingency Planning:** Automatically calculate required contingency reserves.
    - **Total Loan Amount:** See the complete financing picture including all costs.
    - **Monthly Payment:** Understand your full mortgage obligation.

    ### Key Features:

    - Track multiple renovation categories
    - Calculate FHA-required contingency reserves
    - Include supplemental costs (permits, consultant fees)
    - Verify compliance with 203k loan limits
    - Calculate total monthly payment including renovation costs
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: "200000",
      },
      {
        name: "structuralRenovation",
        label: "Structural Renovation Costs",
        type: "number",
        defaultValue: "25000",
      },
      {
        name: "kitchenBath",
        label: "Kitchen & Bath Renovation",
        type: "number",
        defaultValue: "30000",
      },
      {
        name: "mechanicalSystems",
        label: "Mechanical Systems (HVAC, Plumbing, Electrical)",
        type: "number",
        defaultValue: "15000",
      },
      {
        name: "cosmeticUpdates",
        label: "Cosmetic Updates (Flooring, Paint)",
        type: "number",
        defaultValue: "12000",
      },
      {
        name: "consultantFees",
        label: "HUD Consultant Fees",
        type: "number",
        defaultValue: "1000",
      },
      {
        name: "contingencyRate",
        label: "Contingency Reserve (%)",
        type: "number",
        defaultValue: "15",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        defaultValue: "3.5",
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
    ],
    results: [
      { label: "Total Renovation Costs", isCurrency: true },
      { label: "Contingency Reserve", isCurrency: true },
      { label: "Total Project Cost", isCurrency: true },
      { label: "Total Loan Amount", isCurrency: true },
      { label: "Down Payment Required", isCurrency: true },
      { label: "Monthly Principal & Interest", isCurrency: true },
      { label: "Estimated FHA MIP (Monthly)", isCurrency: true },
      { label: "Total Monthly Payment", isCurrency: true },
    ],
    calculate: (values) => {
      const { purchasePrice, structuralRenovation, kitchenBath, mechanicalSystems, cosmeticUpdates, consultantFees, contingencyRate, downPaymentPercent, interestRate, loanTerm } = values;
      
      const totalRenovationCosts = structuralRenovation + kitchenBath + mechanicalSystems + cosmeticUpdates + consultantFees;
      const contingencyReserve = totalRenovationCosts * (contingencyRate / 100);
      const totalProjectCost = purchasePrice + totalRenovationCosts + contingencyReserve;
      const downPayment = totalProjectCost * (downPaymentPercent / 100);
      const totalLoanAmount = totalProjectCost - downPayment;
      
      const monthlyRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPI = totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const annualMIPRate = 0.0085;
      const monthlyMIP = (totalLoanAmount * annualMIPRate) / 12;
      const totalMonthlyPayment = monthlyPI + monthlyMIP;

      return [
        { label: "Total Renovation Costs", value: totalRenovationCosts.toFixed(2), isCurrency: true },
        { label: "Contingency Reserve", value: contingencyReserve.toFixed(2), isCurrency: true },
        { label: "Total Project Cost", value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: "Total Loan Amount", value: totalLoanAmount.toFixed(2), isCurrency: true },
        { label: "Down Payment Required", value: downPayment.toFixed(2), isCurrency: true },
        { label: "Monthly Principal & Interest", value: monthlyPI.toFixed(2), isCurrency: true },
        { label: "Estimated FHA MIP (Monthly)", value: monthlyMIP.toFixed(2), isCurrency: true },
        { label: "Total Monthly Payment", value: totalMonthlyPayment.toFixed(2), isCurrency: true },
      ];
    },
  },
};
