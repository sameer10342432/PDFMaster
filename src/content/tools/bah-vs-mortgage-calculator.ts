import { CalculatorContent } from "@/types";

export const BAH_VS_MORTGAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "BAH (Basic Allowance for Housing) vs. Mortgage Calculator",
  description: "Compare your military BAH against mortgage payments to determine affordable home prices and maximize housing benefits.",
  icon: "Icon",
  category: "Real Estate",
  slug: "bah-vs-mortgage-calculator",
  article: {
    title: "About the BAH vs. Mortgage Calculator",
    content: `
    Military service members receive BAH (Basic Allowance for Housing) to cover housing costs. This calculator helps you determine how much home you can afford using your BAH, whether your BAH will fully cover your mortgage and housing expenses, and how to maximize this valuable benefit.

    ### How it Works

    This calculator compares your monthly BAH against total housing costs including mortgage, property taxes, insurance, and HOA fees to determine affordability and out-of-pocket expenses.

    ### Why Use This Calculator?

    BAH is a significant military benefit that can help build equity instead of paying rent. This calculator helps you maximize BAH coverage, avoid out-of-pocket expenses, and plan your housing budget.

    ### Best Practices

    1. **Stay Within BAH:** Aim for total housing costs at or below your BAH
    2. **Include All Costs:** Factor in taxes, insurance, HOA, and maintenance
    3. **VA Loan Benefits:** Use 0% down with VA loans to maximize leverage
    4. **Future Rental:** Choose properties that rent well for future PCS moves
  `,
  },
  calculator: {
    fields: [
      { name: "monthlyBAH", label: "Monthly BAH ($)", type: "number", defaultValue: "2400" },
      { name: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: "300000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "0" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "3600" },
      { name: "annualInsurance", label: "Annual Home Insurance ($)", type: "number", defaultValue: "1800" },
      { name: "monthlyHOA", label: "Monthly HOA Fees ($)", type: "number", defaultValue: "150" },
      { name: "vaFundingFee", label: "VA Funding Fee (%)", type: "number", defaultValue: "2.15" },
    ],
    results: [
      { label: "Monthly Mortgage Payment", isCurrency: true },
      { label: "Monthly Property Tax", isCurrency: true },
      { label: "Monthly Insurance", isCurrency: true },
      { label: "Total Monthly Housing Cost", isCurrency: true },
      { label: "Monthly BAH", isCurrency: true },
      { label: "Monthly Out-of-Pocket / Surplus", isCurrency: true },
      { label: "Annual Out-of-Pocket / Surplus", isCurrency: true },
      { label: "BAH Coverage Percentage", isCurrency: false },
    ],
    calculate: (values) => {
      const fundingFee = values.homePrice * (values.vaFundingFee / 100);
      const loanAmount = values.homePrice * (1 - values.downPayment / 100) + fundingFee;
      const monthlyRate = values.interestRate / 100 / 12;
      const numPayments = values.loanTerm * 12;
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      const totalMonthlyCost = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + values.monthlyHOA;

      const monthlyBAH = values.monthlyBAH;
      const monthlyDifference = monthlyBAH - totalMonthlyCost;
      const annualDifference = monthlyDifference * 12;
      const bahCoverage = (monthlyBAH / totalMonthlyCost) * 100;

      return [
        { label: "Monthly Mortgage Payment", value: monthlyMortgage.toFixed(2), isCurrency: true },
        { label: "Monthly Property Tax", value: monthlyPropertyTax.toFixed(2), isCurrency: true },
        { label: "Monthly Insurance", value: monthlyInsurance.toFixed(2), isCurrency: true },
        { label: "Total Monthly Housing Cost", value: totalMonthlyCost.toFixed(2), isCurrency: true },
        { label: "Monthly BAH", value: monthlyBAH.toFixed(2), isCurrency: true },
        { label: "Monthly Out-of-Pocket / Surplus", value: monthlyDifference.toFixed(2), isCurrency: true },
        { label: "Annual Out-of-Pocket / Surplus", value: annualDifference.toFixed(2), isCurrency: true },
        { label: "BAH Coverage Percentage", value: bahCoverage.toFixed(1) + '%', isCurrency: false },
      ];
    },
  },
};
