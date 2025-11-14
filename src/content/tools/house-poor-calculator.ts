import { CalculatorContent } from "@/types";

export const HOUSE_POOR_CALCULATOR_CONTENT: CalculatorContent = {
  title: "House Poor Calculator (Mortgage vs. Lifestyle)",
  description: "Determine if your housing costs are limiting your lifestyle and financial flexibility.",
  icon: "Icon",
  category: "Real Estate",
  slug: "house-poor-calculator",
  article: {
    title: "About the House Poor Calculator",
    content: `
    The House Poor Calculator helps you determine if you're spending too much on housing relative to your income and lifestyle goals. Being "house poor" means having most of your income tied up in housing costs, leaving little for savings, entertainment, or other life goals.

    ### How it Works

    This calculator analyzes your housing costs as a percentage of income and compares them against recommended financial ratios and your personal lifestyle needs.

    #### Key Inputs:

    - **Gross Monthly Income:** Your total monthly income before taxes.
    - **Monthly Mortgage Payment:** Principal, interest, taxes, and insurance (PITI).
    - **HOA & Maintenance:** Monthly homeowner association fees and maintenance costs.
    - **Utilities:** Average monthly utility costs.
    - **Other Debt:** Car payments, student loans, credit cards.
    - **Desired Savings Rate:** Target percentage for retirement and savings.
    - **Lifestyle Spending:** Desired budget for entertainment, dining, travel.

    ### Why Use This Calculator?

    - **Financial Health Check:** Identify if housing costs are too high.
    - **Budget Analysis:** See how much is left for other priorities.
    - **Lifestyle Impact:** Understand the trade-offs you're making.
    - **Affordability Reality:** Compare actual costs vs. recommended ratios.

    ### Key Features:

    - Calculate total housing cost ratio (should be ≤28%)
    - Analyze debt-to-income ratio (should be ≤36%)
    - Determine discretionary income after all obligations
    - Compare actual vs. recommended spending
    - Identify areas where you're house poor
    - Provide actionable recommendations
  `,
  },
  calculator: {
    fields: [
      {
        name: "grossMonthlyIncome",
        label: "Gross Monthly Income",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "monthlyMortgage",
        label: "Monthly Mortgage Payment (PITI)",
        type: "number",
        defaultValue: "2800",
      },
      {
        name: "hoaAndMaintenance",
        label: "HOA & Maintenance Fees",
        type: "number",
        defaultValue: "300",
      },
      {
        name: "monthlyUtilities",
        label: "Monthly Utilities",
        type: "number",
        defaultValue: "250",
      },
      {
        name: "otherDebtPayments",
        label: "Other Monthly Debt Payments",
        type: "number",
        defaultValue: "600",
      },
      {
        name: "desiredSavingsRate",
        label: "Desired Savings Rate (%)",
        type: "number",
        defaultValue: "15",
      },
      {
        name: "lifestyleSpendingGoal",
        label: "Desired Monthly Lifestyle Spending",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "estimatedTaxRate",
        label: "Estimated Tax Rate (%)",
        type: "number",
        defaultValue: "25",
      },
    ],
    results: [
      { label: "Net Monthly Income (After Tax)", isCurrency: true },
      { label: "Total Housing Costs", isCurrency: true },
      { label: "Housing Cost Ratio", isCurrency: false },
      { label: "Total Debt-to-Income Ratio", isCurrency: false },
      { label: "Recommended Max Housing Cost", isCurrency: true },
      { label: "Monthly Discretionary Income", isCurrency: true },
      { label: "Can Afford Lifestyle Goal?", isCurrency: false },
      { label: "Assessment", isCurrency: false },
    ],
    calculate: (values) => {
      const { grossMonthlyIncome, monthlyMortgage, hoaAndMaintenance, monthlyUtilities, otherDebtPayments, desiredSavingsRate, lifestyleSpendingGoal, estimatedTaxRate } = values;
      
      const netMonthlyIncome = grossMonthlyIncome * (1 - estimatedTaxRate / 100);
      const totalHousingCosts = monthlyMortgage + hoaAndMaintenance + monthlyUtilities;
      const housingCostRatio = (totalHousingCosts / grossMonthlyIncome) * 100;
      const totalDebtPayments = totalHousingCosts + otherDebtPayments;
      const debtToIncomeRatio = (totalDebtPayments / grossMonthlyIncome) * 100;
      const recommendedMaxHousing = grossMonthlyIncome * 0.28;
      const desiredSavings = netMonthlyIncome * (desiredSavingsRate / 100);
      const discretionaryIncome = netMonthlyIncome - totalHousingCosts - otherDebtPayments - desiredSavings;
      
      const canAffordLifestyle = discretionaryIncome >= lifestyleSpendingGoal ? "Yes" : "No";
      
      let assessment = "";
      if (housingCostRatio > 35) {
        assessment = "House Poor - Housing costs are too high";
      } else if (housingCostRatio > 28) {
        assessment = "At Risk - Above recommended housing ratio";
      } else if (discretionaryIncome < lifestyleSpendingGoal) {
        assessment = "Lifestyle Constrained - Limited funds for lifestyle goals";
      } else {
        assessment = "Healthy Balance - Housing costs are manageable";
      }

      return [
        { label: "Net Monthly Income (After Tax)", value: netMonthlyIncome.toFixed(2), isCurrency: true },
        { label: "Total Housing Costs", value: totalHousingCosts.toFixed(2), isCurrency: true },
        { label: "Housing Cost Ratio", value: housingCostRatio.toFixed(1) + '% (Recommended ≤28%)', isCurrency: false },
        { label: "Total Debt-to-Income Ratio", value: debtToIncomeRatio.toFixed(1) + '% (Recommended ≤36%)', isCurrency: false },
        { label: "Recommended Max Housing Cost", value: recommendedMaxHousing.toFixed(2), isCurrency: true },
        { label: "Monthly Discretionary Income", value: discretionaryIncome.toFixed(2), isCurrency: true },
        { label: "Can Afford Lifestyle Goal?", value: canAffordLifestyle, isCurrency: false },
        { label: "Assessment", value: assessment, isCurrency: false },
      ];
    },
  },
};
