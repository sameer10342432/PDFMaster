import { CalculatorContent } from '@/types';

export const HOME_STAGING_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Staging ROI Calculator',
  description: 'Calculate the return on investment for home staging to determine if professional staging is worth the cost.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'home-staging-roi-calculator',
  article: {
    title: "Maximizing Home Sale Value with Staging",
    content: `
      <h2>What is Home Staging ROI?</h2>
      <p>
        Home staging return on investment (ROI) measures the financial benefit of professionally preparing your home for sale. Studies show that staged homes typically sell 73% faster and for 1-5% more than non-staged homes, making staging a smart investment for most sellers.
      </p>
      <h3>Benefits of Professional Home Staging</h3>
      <ul>
        <li><strong>Higher Sale Price:</strong> Staged homes typically sell for 1-5% more than non-staged homes.</li>
        <li><strong>Faster Sale:</strong> Staged homes spend an average of 33-50% less time on the market.</li>
        <li><strong>Better Online Appeal:</strong> 90% of buyers start their search online; staging makes photos more attractive.</li>
        <li><strong>Reduced Carrying Costs:</strong> Faster sales mean lower costs for mortgage, utilities, and maintenance.</li>
        <li><strong>Competitive Edge:</strong> Stand out in a crowded market with professional presentation.</li>
      </ul>
      <h3>Types of Staging Costs</h3>
      <p>
        <strong>Consultation Only:</strong> $150-$600 for professional advice on decluttering and arranging existing furniture.
      </p>
      <p>
        <strong>Partial Staging:</strong> $1,000-$3,000 to stage key rooms like living room, kitchen, and master bedroom.
      </p>
      <p>
        <strong>Full Staging:</strong> $3,000-$10,000+ to professionally furnish and decorate the entire home.
      </p>
      <h3>Calculating Your Staging ROI</h3>
      <p>
        <strong>Formula:</strong> ROI = ((Additional Sale Price - Staging Cost - Carrying Costs Saved) / Staging Cost) × 100%
      </p>
      <p>
        A positive ROI means the staging investment paid for itself and generated additional profit. Industry data shows average staging ROI ranges from 400% to 600%, making it one of the most cost-effective selling strategies.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "originalListPrice",
        label: "Original Expected Sale Price (Without Staging)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "stagedSalePrice",
        label: "Expected Sale Price (With Staging)",
        type: "number",
        placeholder: "415000",
        defaultValue: "415000",
      },
      {
        name: "stagingCost",
        label: "Total Staging Cost",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "daysOnMarketWithoutStaging",
        label: "Expected Days on Market (Without Staging)",
        type: "number",
        placeholder: "90",
        defaultValue: "90",
      },
      {
        name: "daysOnMarketWithStaging",
        label: "Expected Days on Market (With Staging)",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "monthlyCarryingCosts",
        label: "Monthly Carrying Costs (Mortgage, Utilities, etc.)",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
    ],
    results: [
      { label: "Additional Sale Price from Staging", isCurrency: true },
      { label: "Time Saved on Market (Days)", isNumber: true },
      { label: "Carrying Costs Saved", isCurrency: true },
      { label: "Net Benefit from Staging", isCurrency: true },
      { label: "Staging ROI", isPercentage: true },
    ],
    calculate: (data: any) => {
      const originalListPrice = Number(data.originalListPrice) || 0;
      const stagedSalePrice = Number(data.stagedSalePrice) || 0;
      const stagingCost = Number(data.stagingCost) || 0;
      const daysWithoutStaging = Number(data.daysOnMarketWithoutStaging) || 0;
      const daysWithStaging = Number(data.daysOnMarketWithStaging) || 0;
      const monthlyCarryingCosts = Number(data.monthlyCarryingCosts) || 0;

      if (originalListPrice <= 0 || stagedSalePrice <= 0 || stagingCost <= 0) {
        return [
          { label: "Staging ROI", value: "Please enter valid prices and staging cost.", type: "string" },
        ];
      }

      const additionalSalePrice = stagedSalePrice - originalListPrice;
      const daysSaved = daysWithoutStaging - daysWithStaging;
      const carryingCostsSaved = (daysSaved / 30) * monthlyCarryingCosts;
      const netBenefit = additionalSalePrice + carryingCostsSaved - stagingCost;
      const roi = (netBenefit / stagingCost) * 100;

      return [
        { label: "Additional Sale Price from Staging", value: additionalSalePrice, type: "currency" },
        { label: "Time Saved on Market (Days)", value: daysSaved, type: "number" },
        { label: "Carrying Costs Saved", value: carryingCostsSaved, type: "currency" },
        { label: "Net Benefit from Staging", value: netBenefit, type: "currency" },
        { label: "Staging ROI", value: roi, type: "percentage" },
      ];
    },
  },
};
