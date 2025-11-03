import { CalculatorContent } from "@/types";

export const FIX_AND_FLIP_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Fix and Flip Calculator",
  description: "Analyze potential fix and flip projects to estimate profits and return on investment (ROI).",
  icon: "Icon",
  category: "Real Estate",
  slug: "fix-and-flip-calculator",
  article: {
    title: "Understanding the Key Metrics in Fix and Flip Deals",
    content: `
        <p>
          Fix and flip projects can be highly profitable, but they also come with significant risks. A thorough analysis of the numbers is crucial before committing to a deal. This calculator helps you estimate the potential profit and ROI based on the key metrics of a fix and flip project.
        </p>
        <p>
          The profit on a fix and flip deal is the difference between the After Repair Value (ARV) and the total costs, which include the purchase price, renovation costs, financing costs, and selling costs.
        </p>
        <p>
          <strong>Profit = ARV - (Purchase Price + Renovation Costs + Financing Costs + Selling Costs)</strong>
        </p>
        <p>
          The Return on Investment (ROI) is a percentage that measures the profitability of the investment. It is calculated by dividing the profit by the total cost of the investment.
        </p>
        <p>
          <strong>ROI = (Profit / Total Cost) * 100</strong>
        </p>
      `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        defaultValue: 200000,
      },
      {
        name: "renovationCosts",
        label: "Renovation Costs",
        type: "number",
        defaultValue: 50000,
      },
      {
        name: "arv",
        label: "After Repair Value (ARV)",
        type: "number",
        defaultValue: 350000,
      },
      {
        name: "financingCosts",
        label: "Financing Costs",
        type: "number",
        defaultValue: 10000,
      },
      {
        name: "sellingCosts",
        label: "Selling Costs",
        type: "number",
        defaultValue: 21000,
      },
    ],
    results: [
      {
        label: "Profit",
        isCurrency: true,
      },
      {
        label: "ROI",
        isCurrency: false,
      },
    ],
    calculate: (data) => {
      const { purchasePrice, renovationCosts, arv, financingCosts, sellingCosts } = data;
      const totalCost = purchasePrice + renovationCosts + financingCosts + sellingCosts;
      const profit = arv - totalCost;
      const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;

      return {
        "Total Cost": totalCost,
        Profit: profit,
        ROI: roi,
      };
    },
  },
};