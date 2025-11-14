import { CalculatorContent } from "@/types";

export const HOME_INSPECTION_REPAIR_CREDIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Home Inspection Repair Credit Calculator",
  description: "Calculate repair credits and negotiate concessions based on home inspection findings.",
  icon: "Icon",
  category: "Real Estate",
  slug: "home-inspection-repair-credit-calculator",
  article: {
    title: "About the Home Inspection Repair Credit Calculator",
    content: `
    The Home Inspection Repair Credit Calculator helps buyers and sellers determine fair repair credits and negotiate concessions based on home inspection findings. This tool is essential for navigating the post-inspection negotiation process.

    ### How it Works

    This calculator evaluates repair costs, market conditions, and negotiation leverage to determine appropriate repair credits or price reductions.

    #### Key Inputs:

    - **Total Repair Costs:** The estimated cost of all repairs identified in the inspection.
    - **Major Repairs:** Costs for structural, electrical, plumbing, or HVAC issues.
    - **Minor Repairs:** Costs for cosmetic or less critical items.
    - **Purchase Price:** The agreed-upon purchase price of the property.
    - **Market Conditions:** Whether it's a buyer's or seller's market.
    - **Negotiation Strategy:** Requesting cash credit, price reduction, or seller repairs.

    ### Why Use This Calculator?

    - **Fair Negotiations:** Determine reasonable credit amounts based on actual repair costs.
    - **Multiple Scenarios:** Compare cash credits vs. price reductions vs. seller repairs.
    - **Market Awareness:** Adjust expectations based on current market conditions.
    - **Closing Impact:** Understand how repair credits affect closing costs and loan amounts.

    ### Key Features:

    - Calculate percentage of purchase price for repair credits
    - Compare different negotiation strategies
    - Account for contractor markups and urgency factors
    - Estimate impact on cash-to-close and loan qualification
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: "350000",
      },
      {
        name: "majorRepairs",
        label: "Major Repairs Cost",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "minorRepairs",
        label: "Minor Repairs Cost",
        type: "number",
        defaultValue: "3000",
      },
      {
        name: "contractorMarkup",
        label: "Contractor Markup (%)",
        type: "number",
        defaultValue: "15",
      },
      {
        name: "marketCondition",
        label: "Market Condition (Buyer=1, Neutral=2, Seller=3)",
        type: "number",
        defaultValue: "2",
      },
      {
        name: "urgencyFactor",
        label: "Repair Urgency (Safety/Structural=1.5, Standard=1, Cosmetic=0.7)",
        type: "number",
        defaultValue: "1",
      },
      {
        name: "closingCosts",
        label: "Estimated Closing Costs",
        type: "number",
        defaultValue: "7000",
      },
    ],
    results: [
      { label: "Total Repair Costs", isCurrency: true },
      { label: "Adjusted Repair Costs (with Markup)", isCurrency: true },
      { label: "Recommended Repair Credit", isCurrency: true },
      { label: "Credit as % of Purchase Price", isCurrency: false },
      { label: "Adjusted Purchase Price", isCurrency: true },
      { label: "Impact on Cash to Close", isCurrency: true },
      { label: "Total Savings", isCurrency: true },
    ],
    calculate: (values) => {
      const { purchasePrice, majorRepairs, minorRepairs, contractorMarkup, marketCondition, urgencyFactor, closingCosts } = values;
      
      const totalRepairCosts = majorRepairs + minorRepairs;
      const markupMultiplier = 1 + (contractorMarkup / 100);
      const adjustedRepairCosts = totalRepairCosts * markupMultiplier;
      
      let marketAdjustment = 1.0;
      if (marketCondition === 1) marketAdjustment = 1.2;
      else if (marketCondition === 3) marketAdjustment = 0.7;
      
      const recommendedCredit = adjustedRepairCosts * urgencyFactor * marketAdjustment;
      const creditPercentage = (recommendedCredit / purchasePrice) * 100;
      const adjustedPurchasePrice = purchasePrice - recommendedCredit;
      const impactOnCashToClose = recommendedCredit * 0.8;
      const totalSavings = recommendedCredit + impactOnCashToClose;

      return [
        { label: "Total Repair Costs", value: totalRepairCosts.toFixed(2), isCurrency: true },
        { label: "Adjusted Repair Costs (with Markup)", value: adjustedRepairCosts.toFixed(2), isCurrency: true },
        { label: "Recommended Repair Credit", value: recommendedCredit.toFixed(2), isCurrency: true },
        { label: "Credit as % of Purchase Price", value: creditPercentage.toFixed(2) + '%', isCurrency: false },
        { label: "Adjusted Purchase Price", value: adjustedPurchasePrice.toFixed(2), isCurrency: true },
        { label: "Impact on Cash to Close", value: impactOnCashToClose.toFixed(2), isCurrency: true },
        { label: "Total Savings", value: totalSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
