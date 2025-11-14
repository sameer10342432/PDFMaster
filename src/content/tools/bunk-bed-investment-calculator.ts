import { CalculatorContent } from "@/types";

export const BUNK_BED_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: "\"Bunk Bed\" Investment Calculator (High-Density Rentals)",
  description: "Analyze high-density rental investments with bunk bed configurations to maximize rental income per square foot.",
  icon: "Icon",
  category: "Real Estate",
  slug: "bunk-bed-investment-calculator",
  article: {
    title: "About the \"Bunk Bed\" Investment Calculator",
    content: `
    The "Bunk Bed" investment strategy involves renting out individual beds in shared rooms or units to maximize rental income per square foot. This calculator helps you analyze the profitability of high-density rental investments, popular in urban markets, college towns, and workforce housing.

    ### How it Works

    This calculator evaluates the financial performance of high-density rentals by comparing per-bed rental income against property costs, occupancy rates, and operating expenses unique to shared living arrangements.

    #### Key Inputs:

    - **Property Purchase Price:** Total acquisition cost of the property
    - **Number of Beds:** Total number of rentable beds in the property
    - **Number of Units/Rooms:** Total shared rooms or units
    - **Rent per Bed:** Monthly rental rate charged per bed
    - **Occupancy Rate:** Expected percentage of beds rented (typically 85-95%)
    - **Utilities Included:** Whether utilities are included in rent (common in bunk bed rentals)
    - **Turnover Rate:** Expected annual tenant turnover percentage
    - **Operating Expenses:** Monthly costs including utilities, cleaning, maintenance, management

    ### Why Use This Calculator?

    High-density "bunk bed" rentals can generate significantly higher rental income per square foot than traditional rentals, but they also come with higher operating costs, turnover, and management complexity. This calculator helps you:

    - **Compare ROI:** Evaluate returns versus traditional single-tenant rentals
    - **Analyze Cash Flow:** Calculate monthly and annual net operating income
    - **Plan Operations:** Budget for higher turnover, utilities, and maintenance
    - **Assess Feasibility:** Determine if zoning and local regulations permit this rental strategy
    - **Risk Analysis:** Understand the impact of vacancy rates on profitability

    ### Best Practices

    1. **Check Local Regulations:** Ensure your property is zoned for multi-tenant or boardinghouse use
    2. **Higher Turnover Costs:** Budget 15-25% higher for cleaning, repairs, and tenant acquisition
    3. **Utilities Planning:** Individual bed rentals typically include utilities—factor in higher costs
    4. **Safety Standards:** Install adequate fire safety equipment and follow building codes
    5. **Target Market:** Focus on areas with high demand: colleges, hospitals, tech hubs, tourism zones
    6. **Professional Management:** Consider professional property management due to complexity

    ### Common Use Cases

    - **College Housing:** Near universities with high student demand
    - **Workforce Housing:** For seasonal workers, travel nurses, interns
    - **Urban Markets:** High-cost cities where affordability drives shared living demand
    - **Tourism Areas:** Hostel-style accommodations in vacation destinations
  `,
  },
  calculator: {
    fields: [
      { name: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: "400000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "25" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "numberOfBeds", label: "Total Number of Beds", type: "number", defaultValue: "12" },
      { name: "rentPerBed", label: "Monthly Rent per Bed ($)", type: "number", defaultValue: "600" },
      { name: "occupancyRate", label: "Occupancy Rate (%)", type: "number", defaultValue: "90" },
      { name: "monthlyUtilities", label: "Monthly Utilities ($)", type: "number", defaultValue: "800" },
      { name: "monthlyMaintenance", label: "Monthly Maintenance & Cleaning ($)", type: "number", defaultValue: "600" },
      { name: "propertyManagement", label: "Property Management (%)", type: "number", defaultValue: "12" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "4800" },
      { name: "annualInsurance", label: "Annual Insurance ($)", type: "number", defaultValue: "2400" },
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

      const grossMonthlyIncome = values.numberOfBeds * values.rentPerBed;
      const effectiveMonthlyIncome = grossMonthlyIncome * (values.occupancyRate / 100);
      
      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      const managementFee = effectiveMonthlyIncome * (values.propertyManagement / 100);
      
      const totalMonthlyExpenses = monthlyMortgage + values.monthlyUtilities + values.monthlyMaintenance + 
                                   monthlyPropertyTax + monthlyInsurance + managementFee;
      
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
