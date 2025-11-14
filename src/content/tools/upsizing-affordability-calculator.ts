import { CalculatorContent } from "@/types";

export const UPSIZING_AFFORDABILITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Upsizing Affordability Calculator",
  description: "Determine if you can afford to upsize to a larger home and calculate the financial impact on your budget.",
  icon: "Icon",
  category: "Real Estate",
  slug: "upsizing-affordability-calculator",
  article: {
    title: "About the Upsizing Affordability Calculator",
    content: `
    Growing families and lifestyle changes often require upsizing to a larger home. This calculator helps you determine if you can afford to move up to a bigger house by analyzing your current home equity, new mortgage requirements, and the impact on your monthly budget.

    ### How it Works

    This calculator evaluates your ability to upsize by comparing your current home sale proceeds against the new home purchase price, calculating new monthly payments, and determining if you qualify financially.

    ### Why Use This Calculator?

    Upsizing is a major financial decision that can strain budgets if not planned carefully. This calculator helps you assess affordability, plan for equity transfer, calculate new monthly payments, and avoid overextending financially.

    ### Best Practices

    1. **Build Equity First:** Upsize when you have 20%+ equity in current home
    2. **Income Growth:** Ensure income has grown to support higher payments
    3. **3-5 Year Horizon:** Plan to stay in new home at least 3-5 years
    4. **DTI Ratio:** Keep debt-to-income below 43% for conventional loans
    5. **Emergency Fund:** Maintain 6 months expenses before upsizing
  `,
  },
  calculator: {
    fields: [
      { name: "currentHomeValue", label: "Current Home Value ($)", type: "number", defaultValue: "350000" },
      { name: "currentMortgageBalance", label: "Current Mortgage Balance ($)", type: "number", defaultValue: "220000" },
      { name: "currentMonthlyPayment", label: "Current Monthly Payment ($)", type: "number", defaultValue: "1800" },
      { name: "newHomePrice", label: "New Home Purchase Price ($)", type: "number", defaultValue: "550000" },
      { name: "newDownPayment", label: "Down Payment for New Home (%)", type: "number", defaultValue: "20" },
      { name: "newInterestRate", label: "New Mortgage Interest Rate (%)", type: "number", defaultValue: "6.75" },
      { name: "newLoanTerm", label: "New Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "sellingCosts", label: "Selling Costs Current Home (%)", type: "number", defaultValue: "7" },
      { name: "movingCosts", label: "Moving Costs ($)", type: "number", defaultValue: "8000" },
      { name: "newPropertyTax", label: "New Annual Property Tax ($)", type: "number", defaultValue: "6600" },
      { name: "newInsurance", label: "New Annual Insurance ($)", type: "number", defaultValue: "2200" },
      { name: "newHOA", label: "New Monthly HOA Fees ($)", type: "number", defaultValue: "200" },
      { name: "monthlyIncome", label: "Gross Monthly Income ($)", type: "number", defaultValue: "12000" },
      { name: "monthlyDebts", label: "Other Monthly Debts ($)", type: "number", defaultValue: "800" },
    ],
    results: [
      { label: "Net Proceeds from Current Home", isCurrency: true },
      { label: "Cash Needed for Down Payment", isCurrency: true },
      { label: "Additional Cash Needed", isCurrency: true },
      { label: "New Monthly Mortgage Payment", isCurrency: true },
      { label: "New Total Monthly Housing Cost", isCurrency: true },
      { label: "Monthly Payment Increase", isCurrency: true },
      { label: "Debt-to-Income Ratio", isCurrency: false },
      { label: "Can You Afford to Upsize?", isCurrency: false },
    ],
    calculate: (values) => {
      const sellingCostAmount = values.currentHomeValue * (values.sellingCosts / 100);
      const netProceeds = values.currentHomeValue - values.currentMortgageBalance - sellingCostAmount;
      
      const downPaymentNeeded = values.newHomePrice * (values.newDownPayment / 100);
      const additionalCashNeeded = downPaymentNeeded + values.movingCosts - netProceeds;
      
      const newLoanAmount = values.newHomePrice - downPaymentNeeded;
      const monthlyRate = values.newInterestRate / 100 / 12;
      const numPayments = values.newLoanTerm * 12;
      const newMonthlyMortgage = newLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const newMonthlyPropertyTax = values.newPropertyTax / 12;
      const newMonthlyInsurance = values.newInsurance / 12;
      const newTotalMonthlyCost = newMonthlyMortgage + newMonthlyPropertyTax + newMonthlyInsurance + values.newHOA;
      
      const monthlyIncrease = newTotalMonthlyCost - values.currentMonthlyPayment;
      
      const totalMonthlyDebts = newTotalMonthlyCost + values.monthlyDebts;
      const dtiRatio = (totalMonthlyDebts / values.monthlyIncome) * 100;
      
      const canAfford = dtiRatio <= 43 && additionalCashNeeded <= 0 ? "Yes" : "No";

      return [
        { label: "Net Proceeds from Current Home", value: netProceeds.toFixed(2), isCurrency: true },
        { label: "Cash Needed for Down Payment", value: downPaymentNeeded.toFixed(2), isCurrency: true },
        { label: "Additional Cash Needed", value: Math.max(0, additionalCashNeeded).toFixed(2), isCurrency: true },
        { label: "New Monthly Mortgage Payment", value: newMonthlyMortgage.toFixed(2), isCurrency: true },
        { label: "New Total Monthly Housing Cost", value: newTotalMonthlyCost.toFixed(2), isCurrency: true },
        { label: "Monthly Payment Increase", value: monthlyIncrease.toFixed(2), isCurrency: true },
        { label: "Debt-to-Income Ratio", value: dtiRatio.toFixed(1) + '%', isCurrency: false },
        { label: "Can You Afford to Upsize?", value: canAfford, isCurrency: false },
      ];
    },
  },
};
