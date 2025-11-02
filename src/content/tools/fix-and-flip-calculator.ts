import { Calculator, Tool } from "@/lib/types";

export const FIX_AND_FLIP_CALCULATOR_CONTENT: Tool = {
  title: "Fix and Flip Calculator",
  description: "Analyze potential fix and flip projects to estimate profits and return on investment (ROI).",
  category: "Real Estate",
  article: {
    sections: [
      {
        title: "Understanding the Key Metrics in Fix and Flip Deals",
        content: `
          <p>
            Fix and flip projects can be highly profitable, but they also come with significant risks. A thorough analysis of the numbers is crucial before committing to a deal. This calculator helps you estimate the potential profit and ROI based on the key metrics of a fix and flip project.
          </p>
          <ul>
            <li>
              <strong>Purchase Price:</strong> The price you pay to acquire the property.
            </li>
            <li>
              <strong>Renovation Costs:</strong> The total cost of all repairs and improvements to the property.
            </li>
            <li>
              <strong>After Repair Value (ARV):</strong> The estimated market value of the property after all renovations are complete.
            </li>
            <li>
              <strong>Holding Period:</strong> The length of time you plan to own the property, from purchase to sale.
            </li>
            <li>
              <strong>Financing Costs:</strong> The total cost of any loans used to finance the purchase and renovation of the property.
            </li>
            <li>
              <strong>Selling Costs:</strong> The costs associated with selling the property, such as real estate commissions, closing costs, and staging.
            </li>
          </ul>
        `,
      },
      {
        title: "How to Calculate Profit and ROI",
        content: `
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
    ],
  },
};

export const fixAndFlipCalculator: Calculator<any> = {
  ...FIX_AND_FLIP_CALCULATOR_CONTENT,
  calculate: async (data) => {
    const { purchasePrice, renovationCosts, arv, financingCosts, sellingCosts } = data;
    const totalCost = purchasePrice + renovationCosts + financingCosts + sellingCosts;
    const profit = arv - totalCost;
    const roi = (profit / totalCost) * 100;
    return { profit, roi };
  },
  inputs: [
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
      name: "holdingPeriod",
      label: "Holding Period (Months)",
      type: "number",
      defaultValue: 6,
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
};