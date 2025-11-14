import { CalculatorContent } from "@/types";

export const CORPORATE_HOUSING_RENTAL_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Corporate Housing Rental Calculator",
  description: "Analyze the profitability of corporate housing rentals for business travelers and relocating professionals.",
  icon: "Icon",
  category: "Real Estate",
  slug: "corporate-housing-rental-calculator",
  article: {
    title: "About the Corporate Housing Rental Calculator",
    content: `
    Corporate housing provides fully-furnished, short-term accommodations for business travelers, relocating employees, and professionals on temporary assignments. This calculator helps property investors evaluate the financial performance of corporate housing investments, which typically generate 30-50% higher revenue than traditional rentals.

    ### Why Use This Calculator?

    Corporate housing offers significantly higher returns but requires professional management and higher upfront investment. This calculator helps you maximize revenue and budget accurately for corporate clients.

    ### Best Practices

    1. **Prime Locations:** Near corporate parks, hospitals, universities, downtown areas
    2. **Professional Furnishing:** Executive-quality furniture and modern amenities
    3. **Full Service:** Include all utilities, WiFi, cable, housekeeping
    4. **Flexible Terms:** 30-day minimum stays with monthly billing
  `,
  },
  calculator: {
    fields: [
      { name: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: "350000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "25" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "monthlyRate", label: "Monthly Corporate Rate ($)", type: "number", defaultValue: "3500" },
      { name: "occupancyRate", label: "Average Occupancy Rate (%)", type: "number", defaultValue: "78" },
      { name: "furnitureInvestment", label: "Initial Furniture & Setup ($)", type: "number", defaultValue: "25000" },
      { name: "monthlyUtilities", label: "Monthly Utilities (All Inclusive) ($)", type: "number", defaultValue: "400" },
      { name: "platformFees", label: "Platform Fees (%)", type: "number", defaultValue: "8" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "4200" },
      { name: "annualInsurance", label: "Annual Insurance ($)", type: "number", defaultValue: "2400" },
      { name: "monthlyMaintenance", label: "Monthly Maintenance & Supplies ($)", type: "number", defaultValue: "350" },
      { name: "annualFurnitureReplacement", label: "Annual Furniture Replacement ($)", type: "number", defaultValue: "3000" },
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

      const grossMonthlyIncome = values.monthlyRate;
      const effectiveMonthlyIncome = grossMonthlyIncome * (values.occupancyRate / 100);
      const platformFeeAmount = effectiveMonthlyIncome * (values.platformFees / 100);
      
      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      const monthlyFurnitureReplacement = values.annualFurnitureReplacement / 12;
      
      const totalMonthlyExpenses = monthlyMortgage + values.monthlyUtilities + monthlyPropertyTax + 
                                   monthlyInsurance + values.monthlyMaintenance + 
                                   monthlyFurnitureReplacement + platformFeeAmount;
      
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
