import { CalculatorContent } from "@/types";

export const DOWNSIZING_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Downsizing Savings Calculator (Retirement)",
  description: "Calculate the financial benefits of downsizing your home in retirement to reduce expenses and free up equity.",
  icon: "Icon",
  category: "Real Estate",
  slug: "downsizing-savings-calculator",
  article: {
    title: "About the Downsizing Savings Calculator",
    content: `
    Downsizing in retirement can significantly reduce housing expenses while freeing up home equity for retirement savings. This calculator helps retirees evaluate the financial impact of moving to a smaller, more affordable home, including monthly savings, equity release, and long-term financial benefits.

    ### How it Works

    This calculator compares your current home costs against a smaller home's costs, factoring in mortgage payoff, reduced maintenance, lower utilities, and the cash released from downsizing.

    ### Why Use This Calculator?

    Downsizing can reduce monthly expenses by 30-50% while releasing hundreds of thousands in equity for retirement income. This calculator helps you quantify monthly savings, calculate equity release, plan for moving costs, and optimize retirement cash flow.

    ### Best Practices

    1. **Right-Size:** Choose a home that fits your current needs (2-bed vs. 4-bed)
    2. **Location:** Consider areas with lower property taxes and insurance
    3. **Accessibility:** Single-story homes reduce future mobility concerns
    4. **Maintenance:** New or low-maintenance homes reduce ongoing costs
    5. **Timing:** Downsize before you have to, while you can make clear decisions
  `,
  },
  calculator: {
    fields: [
      { name: "currentHomeValue", label: "Current Home Value ($)", type: "number", defaultValue: "500000" },
      { name: "currentMortgageBalance", label: "Current Mortgage Balance ($)", type: "number", defaultValue: "150000" },
      { name: "currentMonthlyMortgage", label: "Current Monthly Mortgage ($)", type: "number", defaultValue: "1200" },
      { name: "currentPropertyTax", label: "Current Annual Property Tax ($)", type: "number", defaultValue: "6000" },
      { name: "currentInsurance", label: "Current Annual Insurance ($)", type: "number", defaultValue: "2400" },
      { name: "currentMaintenance", label: "Current Monthly Maintenance ($)", type: "number", defaultValue: "500" },
      { name: "currentUtilities", label: "Current Monthly Utilities ($)", type: "number", defaultValue: "400" },
      { name: "newHomePrice", label: "New Home Purchase Price ($)", type: "number", defaultValue: "300000" },
      { name: "newPropertyTax", label: "New Annual Property Tax ($)", type: "number", defaultValue: "3600" },
      { name: "newInsurance", label: "New Annual Insurance ($)", type: "number", defaultValue: "1500" },
      { name: "newMaintenance", label: "New Monthly Maintenance ($)", type: "number", defaultValue: "250" },
      { name: "newUtilities", label: "New Monthly Utilities ($)", type: "number", defaultValue: "250" },
      { name: "movingCosts", label: "One-Time Moving Costs ($)", type: "number", defaultValue: "10000" },
      { name: "sellingCosts", label: "Selling Costs (% of Current Home)", type: "number", defaultValue: "7" },
    ],
    results: [
      { label: "Net Proceeds from Sale", isCurrency: true },
      { label: "Cash After Buying New Home", isCurrency: true },
      { label: "Current: Total Monthly Costs", isCurrency: true },
      { label: "New: Total Monthly Costs", isCurrency: true },
      { label: "Monthly Savings", isCurrency: true },
      { label: "Annual Savings", isCurrency: true },
      { label: "10-Year Savings", isCurrency: true },
      { label: "Payback Period (Months)", isCurrency: false },
    ],
    calculate: (values) => {
      const sellingCostAmount = values.currentHomeValue * (values.sellingCosts / 100);
      const netProceeds = values.currentHomeValue - values.currentMortgageBalance - sellingCostAmount;
      const cashAfterBuying = netProceeds - values.newHomePrice - values.movingCosts;
      
      const currentMonthlyPropertyTax = values.currentPropertyTax / 12;
      const currentMonthlyInsurance = values.currentInsurance / 12;
      const currentTotalMonthlyCost = values.currentMonthlyMortgage + currentMonthlyPropertyTax + 
                                      currentMonthlyInsurance + values.currentMaintenance + values.currentUtilities;
      
      const newMonthlyPropertyTax = values.newPropertyTax / 12;
      const newMonthlyInsurance = values.newInsurance / 12;
      const newTotalMonthlyCost = newMonthlyPropertyTax + newMonthlyInsurance + values.newMaintenance + values.newUtilities;
      
      const monthlySavings = currentTotalMonthlyCost - newTotalMonthlyCost;
      const annualSavings = monthlySavings * 12;
      const tenYearSavings = annualSavings * 10;
      
      const totalUpfrontCosts = sellingCostAmount + values.movingCosts;
      const paybackMonths = monthlySavings > 0 ? totalUpfrontCosts / monthlySavings : 999;

      return [
        { label: "Net Proceeds from Sale", value: netProceeds.toFixed(2), isCurrency: true },
        { label: "Cash After Buying New Home", value: cashAfterBuying.toFixed(2), isCurrency: true },
        { label: "Current: Total Monthly Costs", value: currentTotalMonthlyCost.toFixed(2), isCurrency: true },
        { label: "New: Total Monthly Costs", value: newTotalMonthlyCost.toFixed(2), isCurrency: true },
        { label: "Monthly Savings", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Annual Savings", value: annualSavings.toFixed(2), isCurrency: true },
        { label: "10-Year Savings", value: tenYearSavings.toFixed(2), isCurrency: true },
        { label: "Payback Period (Months)", value: paybackMonths.toFixed(1), isCurrency: false },
      ];
    },
  },
};
