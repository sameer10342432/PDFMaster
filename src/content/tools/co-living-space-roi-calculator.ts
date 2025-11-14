import { CalculatorContent } from "@/types";

export const CO_LIVING_SPACE_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Co-Living Space ROI Calculator",
  description: "Calculate the return on investment for co-living properties with private bedrooms and shared common areas.",
  icon: "Icon",
  category: "Real Estate",
  slug: "co-living-space-roi-calculator",
  article: {
    title: "About the Co-Living Space ROI Calculator",
    content: `
    Co-living is a modern housing model that combines private bedrooms with shared common spaces like kitchens, living rooms, and amenities. This calculator helps property investors analyze the financial viability of co-living investments, which offer higher rental yields than traditional apartments while providing community-focused living.

    ### How it Works

    This calculator evaluates co-living investments by analyzing per-room rental income, shared amenity costs, community management expenses, and overall property performance compared to traditional rental models.

    #### Key Inputs:

    - **Property Purchase Price:** Total acquisition cost
    - **Number of Private Rooms:** Individual bedrooms available for rent
    - **Rent per Room:** Monthly rental rate per private bedroom
    - **Common Area Square Footage:** Shared spaces (kitchen, living room, workspace)
    - **Amenity Costs:** Monthly costs for shared amenities (WiFi, cleaning, supplies)
    - **Community Manager Salary:** Cost for on-site community management
    - **Occupancy Rate:** Expected room occupancy percentage
    - **Operating Expenses:** Utilities, maintenance, insurance, taxes

    ### Why Use This Calculator?

    Co-living properties can generate 20-40% higher revenue than traditional rentals due to per-room pricing, but they require specialized management and amenity investments.
  `,
  },
  calculator: {
    fields: [
      { name: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: "800000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "25" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "numberOfRooms", label: "Number of Private Rooms", type: "number", defaultValue: "8" },
      { name: "rentPerRoom", label: "Monthly Rent per Room ($)", type: "number", defaultValue: "1200" },
      { name: "occupancyRate", label: "Occupancy Rate (%)", type: "number", defaultValue: "92" },
      { name: "monthlyAmenityCosts", label: "Monthly Amenity Costs ($)", type: "number", defaultValue: "1500" },
      { name: "communityManagerSalary", label: "Monthly Community Manager Cost ($)", type: "number", defaultValue: "3000" },
      { name: "monthlyUtilities", label: "Monthly Utilities ($)", type: "number", defaultValue: "1200" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "9600" },
      { name: "annualInsurance", label: "Annual Insurance ($)", type: "number", defaultValue: "4800" },
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

      const grossMonthlyIncome = values.numberOfRooms * values.rentPerRoom;
      const effectiveMonthlyIncome = grossMonthlyIncome * (values.occupancyRate / 100);
      
      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      
      const totalMonthlyExpenses = monthlyMortgage + values.monthlyUtilities + monthlyPropertyTax + monthlyInsurance + 
                                   values.monthlyAmenityCosts + values.communityManagerSalary;
      
      const monthlyNetCashFlow = effectiveMonthlyIncome - totalMonthlyExpenses;
      const annualNetIncome = monthlyNetCashFlow * 12;
      
      const totalInvestment = values.purchasePrice * (values.downPayment / 100);
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
