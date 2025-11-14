import { CalculatorContent } from "@/types";

export const FURNISHED_VS_UNFURNISHED_RENTAL_ROI_CONTENT: CalculatorContent = {
  title: "Furnished vs. Unfurnished Rental ROI Calculator",
  description: "Compare the return on investment between furnished and unfurnished rental properties to maximize your rental income.",
  icon: "Icon",
  category: "Real Estate",
  slug: "furnished-vs-unfurnished-rental-roi",
  article: {
    title: "About the Furnished vs. Unfurnished Rental ROI Calculator",
    content: `
    Deciding between furnishing a rental property or leaving it unfurnished is a critical financial decision for landlords. This calculator helps you compare the ROI of both options by factoring in furniture costs, higher rent premiums, maintenance, and tenant turnover rates.

    ### How it Works

    This calculator compares two scenarios side-by-side: furnished vs. unfurnished rental properties. It accounts for furniture investment, rental premium, depreciation, replacement costs, and different tenant profiles.

    ###  Best Practices

    **Furnished Rentals Work Best For:**
    - **Corporate Housing:** Professionals on temporary assignments
    - **Vacation Rentals:** Short-term tourist accommodations
    - **Student Housing:** University areas with transient populations
    - **Urban Markets:** Cities with high transplant populations
  `,
  },
  calculator: {
    fields: [
      { name: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: "300000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "25" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "unfurnishedRent", label: "Unfurnished Monthly Rent ($)", type: "number", defaultValue: "2000" },
      { name: "furnishedRentPremium", label: "Furnished Rent Premium (%)", type: "number", defaultValue: "25" },
      { name: "furnitureInvestment", label: "Initial Furniture Investment ($)", type: "number", defaultValue: "15000" },
      { name: "annualFurnitureReplacement", label: "Annual Furniture Replacement ($)", type: "number", defaultValue: "2000" },
      { name: "unfurnishedVacancyRate", label: "Unfurnished Vacancy Rate (%)", type: "number", defaultValue: "5" },
      { name: "furnishedVacancyRate", label: "Furnished Vacancy Rate (%)", type: "number", defaultValue: "8" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "3600" },
      { name: "annualInsurance", label: "Annual Insurance ($)", type: "number", defaultValue: "1800" },
    ],
    results: [
      { label: "Unfurnished: Monthly Net Cash Flow", isCurrency: true },
      { label: "Furnished: Monthly Net Cash Flow", isCurrency: true },
      { label: "Unfurnished: Annual Net Income", isCurrency: true },
      { label: "Furnished: Annual Net Income", isCurrency: true },
      { label: "Unfurnished: Cash-on-Cash Return", isCurrency: false },
      { label: "Furnished: Cash-on-Cash Return", isCurrency: false },
      { label: "Additional Annual Income (Furnished)", isCurrency: true },
      { label: "Breakeven Period (Months)", isCurrency: false },
    ],
    calculate: (values) => {
      const loanAmount = values.purchasePrice * (1 - values.downPayment / 100);
      const monthlyRate = values.interestRate / 100 / 12;
      const numPayments = values.loanTerm * 12;
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;

      const unfurnishedMonthlyIncome = values.unfurnishedRent * (1 - values.unfurnishedVacancyRate / 100);
      const unfurnishedExpenses = monthlyMortgage + monthlyPropertyTax + monthlyInsurance;
      const unfurnishedNetCashFlow = unfurnishedMonthlyIncome - unfurnishedExpenses;
      const unfurnishedAnnualIncome = unfurnishedNetCashFlow * 12;

      const furnishedRent = values.unfurnishedRent * (1 + values.furnishedRentPremium / 100);
      const furnishedMonthlyIncome = furnishedRent * (1 - values.furnishedVacancyRate / 100);
      const monthlyFurnitureReplacement = values.annualFurnitureReplacement / 12;
      const furnishedExpenses = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + monthlyFurnitureReplacement;
      const furnishedNetCashFlow = furnishedMonthlyIncome - furnishedExpenses;
      const furnishedAnnualIncome = furnishedNetCashFlow * 12;

      const unfurnishedInvestment = values.purchasePrice * (values.downPayment / 100);
      const furnishedInvestment = unfurnishedInvestment + values.furnitureInvestment;
      
      const unfurnishedROI = (unfurnishedAnnualIncome / unfurnishedInvestment) * 100;
      const furnishedROI = (furnishedAnnualIncome / furnishedInvestment) * 100;

      const additionalIncome = furnishedAnnualIncome - unfurnishedAnnualIncome;
      const monthlyDifference = furnishedNetCashFlow - unfurnishedNetCashFlow;
      const breakEvenMonths = monthlyDifference > 0 ? values.furnitureInvestment / monthlyDifference : 999;

      return [
        { label: "Unfurnished: Monthly Net Cash Flow", value: unfurnishedNetCashFlow.toFixed(2), isCurrency: true },
        { label: "Furnished: Monthly Net Cash Flow", value: furnishedNetCashFlow.toFixed(2), isCurrency: true },
        { label: "Unfurnished: Annual Net Income", value: unfurnishedAnnualIncome.toFixed(2), isCurrency: true },
        { label: "Furnished: Annual Net Income", value: furnishedAnnualIncome.toFixed(2), isCurrency: true },
        { label: "Unfurnished: Cash-on-Cash Return", value: unfurnishedROI.toFixed(2) + '%', isCurrency: false },
        { label: "Furnished: Cash-on-Cash Return", value: furnishedROI.toFixed(2) + '%', isCurrency: false },
        { label: "Additional Annual Income (Furnished)", value: additionalIncome.toFixed(2), isCurrency: true },
        { label: "Breakeven Period (Months)", value: breakEvenMonths.toFixed(1), isCurrency: false },
      ];
    },
  },
};
