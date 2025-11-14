import { CalculatorContent } from "@/types";

export const TRAVEL_NURSE_HOUSING_INVESTMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: "Travel Nurse Housing Investment Analyzer",
  description: "Analyze rental property investments targeting travel nurses and medical professionals on temporary assignments.",
  icon: "Icon",
  category: "Real Estate",
  slug: "travel-nurse-housing-investment-analyzer",
  article: {
    title: "About the Travel Nurse Housing Investment Analyzer",
    content: `
    Travel nurses and medical professionals require short-term, fully-furnished housing near hospitals and medical centers. This calculator helps investors analyze the profitability of properties targeting this growing market segment, which offers premium rental rates and consistent demand.

    ### How it Works

    This calculator evaluates travel nurse housing investments by analyzing premium rental rates, furnishing costs, proximity to medical facilities, and occupancy patterns based on contract cycles.

    ### Why Use This Calculator?

    Travel nurse housing offers 30-50% higher rental rates than traditional apartments with relatively stable demand. This calculator helps you maximize rental income, budget for furnishing and amenities, and understand seasonal demand patterns.

    ### Best Practices

    1. **Location is Key:** Within 15-30 minutes of major hospitals and medical centers
    2. **Fully Furnished:** High-quality, move-in ready with all essentials
    3. **Amenities:** High-speed internet, washer/dryer, parking, workspace
    4. **Flexible Leases:** 13-26 week contract terms typical for travel nurses
  `,
  },
  calculator: {
    fields: [
      { name: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: "280000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "25" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "weeklyRate", label: "Weekly Rental Rate ($)", type: "number", defaultValue: "800" },
      { name: "occupancyRate", label: "Average Occupancy Rate (%)", type: "number", defaultValue: "85" },
      { name: "furnitureInvestment", label: "Initial Furniture Investment ($)", type: "number", defaultValue: "12000" },
      { name: "monthlyUtilities", label: "Monthly Utilities ($)", type: "number", defaultValue: "250" },
      { name: "cleaningFeePerContract", label: "Cleaning Fee per Contract ($)", type: "number", defaultValue: "200" },
      { name: "averageContractsPerYear", label: "Average Contracts per Year", type: "number", defaultValue: "4" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "3360" },
      { name: "annualInsurance", label: "Annual Insurance ($)", type: "number", defaultValue: "1680" },
      { name: "monthlyMaintenance", label: "Monthly Maintenance ($)", type: "number", defaultValue: "200" },
    ],
    results: [
      { label: "Gross Monthly Income", isCurrency: true },
      { label: "Effective Monthly Income", isCurrency: true },
      { label: "Monthly Mortgage Payment", isCurrency: true },
      { label: "Total Monthly Expenses", isCurrency: true },
      { label: "Monthly Net Cash Flow", isCurrency: true },
      { label: "Annual Net Income", isCurrency: true },
      { label: "Cash-on-Cash Return", isCurrency: false },
      { label: "Cap Rate", isCurrency: false },
    ],
    calculate: (values) => {
      const loanAmount = values.purchasePrice * (1 - values.downPayment / 100);
      const monthlyRate = values.interestRate / 100 / 12;
      const numPayments = values.loanTerm * 12;
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

      const grossMonthlyIncome = (values.weeklyRate * 52) / 12;
      const effectiveMonthlyIncome = grossMonthlyIncome * (values.occupancyRate / 100);
      
      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      const monthlyCleaning = (values.cleaningFeePerContract * values.averageContractsPerYear) / 12;
      
      const totalMonthlyExpenses = monthlyMortgage + values.monthlyUtilities + monthlyPropertyTax + 
                                   monthlyInsurance + values.monthlyMaintenance + monthlyCleaning;
      
      const monthlyNetCashFlow = effectiveMonthlyIncome - totalMonthlyExpenses;
      const annualNetIncome = monthlyNetCashFlow * 12;
      
      const totalInvestment = values.purchasePrice * (values.downPayment / 100) + values.furnitureInvestment;
      const cashOnCashReturn = (annualNetIncome / totalInvestment) * 100;
      
      const annualNOI = effectiveMonthlyIncome * 12 - (totalMonthlyExpenses - monthlyMortgage) * 12;
      const capRate = (annualNOI / values.purchasePrice) * 100;

      return [
        { label: "Gross Monthly Income", value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: "Effective Monthly Income", value: effectiveMonthlyIncome.toFixed(2), isCurrency: true },
        { label: "Monthly Mortgage Payment", value: monthlyMortgage.toFixed(2), isCurrency: true },
        { label: "Total Monthly Expenses", value: totalMonthlyExpenses.toFixed(2), isCurrency: true },
        { label: "Monthly Net Cash Flow", value: monthlyNetCashFlow.toFixed(2), isCurrency: true },
        { label: "Annual Net Income", value: annualNetIncome.toFixed(2), isCurrency: true },
        { label: "Cash-on-Cash Return", value: cashOnCashReturn.toFixed(2) + '%', isCurrency: false },
        { label: "Cap Rate", value: capRate.toFixed(2) + '%', isCurrency: false },
      ];
    },
  },
};
