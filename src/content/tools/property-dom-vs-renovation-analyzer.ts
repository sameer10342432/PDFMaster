import { CalculatorContent } from "@/types";

export const PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT: CalculatorContent = {
  title: "Property Days on Market vs. Renovation Analyzer",
  description: "Analyze whether renovations will reduce days on market and maximize sale price.",
  icon: "Icon",
  category: "Real Estate",
  slug: "property-dom-vs-renovation-analyzer",
  article: {
    title: "About the Property DOM vs. Renovation Analyzer",
    content: `
    The Property Days on Market (DOM) vs. Renovation Analyzer helps sellers determine if home renovations will reduce time on market and justify the investment.

    ### How it Works

    This calculator analyzes market data, renovation costs, and carrying costs to determine the optimal strategy for selling your property.

    #### Key Inputs:

    - **Current Property Value:** Estimated market value in current condition.
    - **Average Days on Market:** Typical DOM for similar properties in current condition.
    - **Renovation Costs:** Estimated cost of proposed improvements.
    - **Expected Value Increase:** Projected increase in sale price after renovations.
    - **Renovation Timeline:** Time required to complete renovations.
    - **Carrying Costs:** Monthly mortgage, taxes, insurance, and utilities.
    - **Market Trend:** Is the market appreciating or depreciating?

    ### Why Use This Calculator?

    - **Time vs. Money Analysis:** Compare renovation benefits against carrying costs.
    - **Market Speed Impact:** Understand how renovations affect sale timeline.
    - **ROI Calculation:** Determine if renovation costs are justified.
    - **Net Proceeds Comparison:** See final numbers for both scenarios.

    ### Key Features:

    - Calculate total carrying costs during renovation period
    - Project reduced days on market with improvements
    - Compare net proceeds: sell as-is vs. renovate first
    - Account for market trends and seasonal factors
    - Factor in opportunity costs and holding expenses
    - Provide clear go/no-go recommendation
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentPropertyValue",
        label: "Current Property Value (As-Is)",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "currentAvgDOM",
        label: "Average Days on Market (As-Is)",
        type: "number",
        defaultValue: "45",
      },
      {
        name: "renovationCosts",
        label: "Total Renovation Costs",
        type: "number",
        defaultValue: "25000",
      },
      {
        name: "expectedValueIncrease",
        label: "Expected Value Increase After Renovation",
        type: "number",
        defaultValue: "40000",
      },
      {
        name: "renovationTimeline",
        label: "Renovation Timeline (Days)",
        type: "number",
        defaultValue: "60",
      },
      {
        name: "expectedDOMReduction",
        label: "Expected DOM Reduction (%)",
        type: "number",
        defaultValue: "40",
      },
      {
        name: "monthlyCarryingCosts",
        label: "Monthly Carrying Costs (Mortgage, Tax, Insurance, Utilities)",
        type: "number",
        defaultValue: "3500",
      },
      {
        name: "sellerClosingCosts",
        label: "Seller Closing Costs (%)",
        type: "number",
        defaultValue: "6",
      },
      {
        name: "marketTrendPercent",
        label: "Monthly Market Appreciation Rate (%)",
        type: "number",
        defaultValue: "0.5",
      },
    ],
    results: [
      { label: "Net Proceeds (Sell As-Is)", isCurrency: true },
      { label: "Days on Market (As-Is)", isCurrency: false },
      { label: "After Renovation Value", isCurrency: true },
      { label: "Total Investment (Renovation + Carrying)", isCurrency: true },
      { label: "Days on Market (After Renovation)", isCurrency: false },
      { label: "Net Proceeds (After Renovation)", isCurrency: true },
      { label: "Additional Profit from Renovation", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (values) => {
      const { currentPropertyValue, currentAvgDOM, renovationCosts, expectedValueIncrease, renovationTimeline, expectedDOMReduction, monthlyCarryingCosts, sellerClosingCosts, marketTrendPercent } = values;
      
      const asIsClosingCosts = currentPropertyValue * (sellerClosingCosts / 100);
      const asIsCarryingCosts = (currentAvgDOM / 30) * monthlyCarryingCosts;
      const netProceedsAsIs = currentPropertyValue - asIsClosingCosts - asIsCarryingCosts;
      
      const afterRenovationValue = currentPropertyValue + expectedValueIncrease;
      const renovatedDOM = currentAvgDOM * (1 - expectedDOMReduction / 100);
      const totalTimeToSell = renovationTimeline + renovatedDOM;
      const totalCarryingCosts = (totalTimeToSell / 30) * monthlyCarryingCosts;
      const marketAppreciation = currentPropertyValue * (marketTrendPercent / 100) * (totalTimeToSell / 30);
      const renovatedClosingCosts = afterRenovationValue * (sellerClosingCosts / 100);
      const totalInvestment = renovationCosts + totalCarryingCosts;
      const netProceedsRenovated = afterRenovationValue + marketAppreciation - renovatedClosingCosts - totalInvestment;
      
      const additionalProfit = netProceedsRenovated - netProceedsAsIs;
      const recommendation = additionalProfit > 0 ? "Renovate Before Selling" : "Sell As-Is";

      return [
        { label: "Net Proceeds (Sell As-Is)", value: netProceedsAsIs.toFixed(2), isCurrency: true },
        { label: "Days on Market (As-Is)", value: currentAvgDOM.toFixed(0) + ' days', isCurrency: false },
        { label: "After Renovation Value", value: afterRenovationValue.toFixed(2), isCurrency: true },
        { label: "Total Investment (Renovation + Carrying)", value: totalInvestment.toFixed(2), isCurrency: true },
        { label: "Days on Market (After Renovation)", value: renovatedDOM.toFixed(0) + ' days', isCurrency: false },
        { label: "Net Proceeds (After Renovation)", value: netProceedsRenovated.toFixed(2), isCurrency: true },
        { label: "Additional Profit from Renovation", value: additionalProfit.toFixed(2), isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
