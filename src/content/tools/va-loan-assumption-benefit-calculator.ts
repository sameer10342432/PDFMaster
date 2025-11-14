import { CalculatorContent } from "@/types";

export const VA_LOAN_ASSUMPTION_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: "VA Loan Assumption Benefit Calculator",
  description: "Calculate the financial benefits of assuming an existing VA loan with a lower interest rate versus getting a new mortgage.",
  icon: "Icon",
  category: "Real Estate",
  slug: "va-loan-assumption-benefit-calculator",
  article: {
    title: "About the VA Loan Assumption Benefit Calculator",
    content: `
    VA loans are assumable, meaning buyers can take over the seller's existing VA loan, including their lower interest rate. This calculator helps you evaluate the financial benefits of assuming a VA loan versus obtaining a new mortgage, especially valuable when current rates are higher than the existing loan rate.

    ### How it Works

    This calculator compares the costs and savings of assuming an existing VA loan (with its lower rate) against getting a new mortgage at current rates, factoring in assumption fees, equity requirements, and long-term interest savings.

    ### Why Use This Calculator?

    In rising rate environments, assuming a VA loan with a 3-4% rate can save hundreds of thousands compared to a new 6-7% mortgage. This calculator helps you quantify the savings, understand equity requirements, and budget for assumption fees.

    ### Best Practices

    1. **Rate Differential:** Assumptions make most sense when the existing rate is 1.5%+ lower
    2. **Equity Payment:** Prepare to pay the difference between sale price and loan balance
    3. **Assumption Fees:** Budget $300-500 for VA assumption processing
    4. **Entitlement:** Non-veterans can assume VA loans but need lender approval
  `,
  },
  calculator: {
    fields: [
      { name: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: "350000" },
      { name: "existingLoanBalance", label: "Existing VA Loan Balance ($)", type: "number", defaultValue: "280000" },
      { name: "existingInterestRate", label: "Existing VA Loan Rate (%)", type: "number", defaultValue: "3.5" },
      { name: "remainingLoanTerm", label: "Remaining Loan Term (Years)", type: "number", defaultValue: "25" },
      { name: "currentMarketRate", label: "Current Market Interest Rate (%)", type: "number", defaultValue: "6.75" },
      { name: "newLoanTerm", label: "New Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "downPayment", label: "Down Payment for New Loan (%)", type: "number", defaultValue: "5" },
      { name: "assumptionFee", label: "VA Assumption Fee ($)", type: "number", defaultValue: "400" },
      { name: "newLoanClosingCosts", label: "New Loan Closing Costs ($)", type: "number", defaultValue: "10500" },
    ],
    results: [
      { label: "Equity Needed for Assumption", isCurrency: true },
      { label: "Assumed Loan: Monthly Payment", isCurrency: true },
      { label: "New Loan: Monthly Payment", isCurrency: true },
      { label: "Monthly Savings (Assumption)", isCurrency: true },
      { label: "Total Interest (Assumed Loan)", isCurrency: true },
      { label: "Total Interest (New Loan)", isCurrency: true },
      { label: "Lifetime Interest Savings", isCurrency: true },
      { label: "Breakeven Period (Months)", isCurrency: false },
    ],
    calculate: (values) => {
      const equityNeeded = values.homePrice - values.existingLoanBalance + values.assumptionFee;
      
      const assumedMonthlyRate = values.existingInterestRate / 100 / 12;
      const assumedNumPayments = values.remainingLoanTerm * 12;
      const assumedMonthlyPayment = values.existingLoanBalance * (assumedMonthlyRate * Math.pow(1 + assumedMonthlyRate, assumedNumPayments)) / (Math.pow(1 + assumedMonthlyRate, assumedNumPayments) - 1);
      
      const newLoanAmount = values.homePrice * (1 - values.downPayment / 100);
      const newMonthlyRate = values.currentMarketRate / 100 / 12;
      const newNumPayments = values.newLoanTerm * 12;
      const newMonthlyPayment = newLoanAmount * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumPayments)) / (Math.pow(1 + newMonthlyRate, newNumPayments) - 1);
      
      const monthlySavings = newMonthlyPayment - assumedMonthlyPayment;
      
      const totalInterestAssumed = (assumedMonthlyPayment * assumedNumPayments) - values.existingLoanBalance;
      const totalInterestNew = (newMonthlyPayment * newNumPayments) - newLoanAmount;
      const lifetimeInterestSavings = totalInterestNew - totalInterestAssumed;
      
      const upfrontCostDifference = (values.newLoanClosingCosts + values.homePrice * values.downPayment / 100) - equityNeeded;
      const breakEvenMonths = upfrontCostDifference > 0 ? upfrontCostDifference / monthlySavings : 0;

      return [
        { label: "Equity Needed for Assumption", value: equityNeeded.toFixed(2), isCurrency: true },
        { label: "Assumed Loan: Monthly Payment", value: assumedMonthlyPayment.toFixed(2), isCurrency: true },
        { label: "New Loan: Monthly Payment", value: newMonthlyPayment.toFixed(2), isCurrency: true },
        { label: "Monthly Savings (Assumption)", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Total Interest (Assumed Loan)", value: totalInterestAssumed.toFixed(2), isCurrency: true },
        { label: "Total Interest (New Loan)", value: totalInterestNew.toFixed(2), isCurrency: true },
        { label: "Lifetime Interest Savings", value: lifetimeInterestSavings.toFixed(2), isCurrency: true },
        { label: "Breakeven Period (Months)", value: breakEvenMonths.toFixed(1), isCurrency: false },
      ];
    },
  },
};
