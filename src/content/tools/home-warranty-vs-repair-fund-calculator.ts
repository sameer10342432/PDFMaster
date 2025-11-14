import { CalculatorContent } from "@/types";

export const HOME_WARRANTY_VS_REPAIR_FUND_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Home Warranty vs. Repair Fund Calculator",
  description: "Compare the costs of home warranties versus building your own repair fund savings.",
  icon: "Icon",
  category: "Real Estate",
  slug: "home-warranty-vs-repair-fund-calculator",
  article: {
    title: "About the Home Warranty vs. Repair Fund Calculator",
    content: `
    The Home Warranty vs. Repair Fund Calculator helps homeowners decide whether to purchase a home warranty or build their own emergency repair fund.

    ### How it Works

    This calculator compares the total cost of home warranty premiums and service fees against the potential costs of building and maintaining your own repair fund for home maintenance and repairs.

    #### Key Inputs:

    - **Home Warranty Annual Premium:** Yearly cost of the warranty plan.
    - **Service Call Fee:** The fee charged per service visit.
    - **Expected Service Calls:** Estimated number of repairs per year.
    - **Home Age:** Older homes typically need more repairs.
    - **Average Repair Cost:** Typical cost of home repairs without warranty.
    - **Repair Fund Contribution:** Monthly amount saved for home repairs.
    - **Investment Return:** Interest earned on repair fund savings.

    ### Why Use This Calculator?

    - **Cost Comparison:** See total costs over 1, 5, and 10 years.
    - **Break-Even Analysis:** Determine when self-funding becomes more economical.
    - **Investment Growth:** Track how a repair fund grows with interest.
    - **Informed Decision:** Choose the most cost-effective protection strategy.

    ### Key Features:

    - Multi-year cost projection (1, 5, 10 years)
    - Account for service call fees and deductibles
    - Calculate repair fund growth with interest
    - Adjust for home age and repair frequency
    - Compare total costs side-by-side
    - Identify break-even point
  `,
  },
  calculator: {
    fields: [
      {
        name: "warrantyAnnualPremium",
        label: "Home Warranty Annual Premium",
        type: "number",
        defaultValue: "600",
      },
      {
        name: "serviceCallFee",
        label: "Service Call Fee (per visit)",
        type: "number",
        defaultValue: "100",
      },
      {
        name: "expectedServiceCalls",
        label: "Expected Service Calls per Year",
        type: "number",
        defaultValue: "3",
      },
      {
        name: "averageRepairCost",
        label: "Average Repair Cost (without warranty)",
        type: "number",
        defaultValue: "450",
      },
      {
        name: "monthlyRepairFund",
        label: "Monthly Repair Fund Contribution",
        type: "number",
        defaultValue: "100",
      },
      {
        name: "investmentReturnRate",
        label: "Annual Return on Repair Fund (%)",
        type: "number",
        defaultValue: "4",
      },
      {
        name: "homeAge",
        label: "Home Age (Years)",
        type: "number",
        defaultValue: "15",
      },
      {
        name: "yearsToAnalyze",
        label: "Analysis Period (Years)",
        type: "number",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Warranty Cost (Year 1)", isCurrency: true },
      { label: "Warranty Total Cost (Full Period)", isCurrency: true },
      { label: "Repair Fund Balance (End of Period)", isCurrency: true },
      { label: "Estimated Out-of-Pocket Repairs", isCurrency: true },
      { label: "Total Cost with Repair Fund", isCurrency: true },
      { label: "Difference (Warranty - Self-Fund)", isCurrency: true },
      { label: "Better Option", isCurrency: false },
    ],
    calculate: (values) => {
      const { warrantyAnnualPremium, serviceCallFee, expectedServiceCalls, averageRepairCost, monthlyRepairFund, investmentReturnRate, homeAge, yearsToAnalyze } = values;
      
      const warrantyYear1 = warrantyAnnualPremium + (serviceCallFee * expectedServiceCalls);
      const warrantyTotalCost = warrantyYear1 * yearsToAnalyze;
      
      const monthlyRate = (investmentReturnRate / 100) / 12;
      const months = yearsToAnalyze * 12;
      let repairFundBalance = 0;
      for (let i = 0; i < months; i++) {
        repairFundBalance = repairFundBalance * (1 + monthlyRate) + monthlyRepairFund;
      }
      
      const ageMultiplier = homeAge > 20 ? 1.3 : (homeAge > 10 ? 1.1 : 0.9);
      const estimatedRepairCosts = (averageRepairCost * expectedServiceCalls * yearsToAnalyze) * ageMultiplier;
      const totalCostRepairFund = (monthlyRepairFund * months) + estimatedRepairCosts - repairFundBalance;
      const difference = warrantyTotalCost - totalCostRepairFund;
      const betterOption = difference > 0 ? "Repair Fund Saves Money" : "Warranty Saves Money";

      return [
        { label: "Warranty Cost (Year 1)", value: warrantyYear1.toFixed(2), isCurrency: true },
        { label: "Warranty Total Cost (Full Period)", value: warrantyTotalCost.toFixed(2), isCurrency: true },
        { label: "Repair Fund Balance (End of Period)", value: repairFundBalance.toFixed(2), isCurrency: true },
        { label: "Estimated Out-of-Pocket Repairs", value: estimatedRepairCosts.toFixed(2), isCurrency: true },
        { label: "Total Cost with Repair Fund", value: totalCostRepairFund.toFixed(2), isCurrency: true },
        { label: "Difference (Warranty - Self-Fund)", value: Math.abs(difference).toFixed(2), isCurrency: true },
        { label: "Better Option", value: betterOption, isCurrency: false },
      ];
    },
  },
};
