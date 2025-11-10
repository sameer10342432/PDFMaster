import { CalculatorContent } from '@/types';

export const BEST_TIME_TO_SELL_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Best Time to Sell Analyzer',
  description: 'Analyze market conditions and personal factors to determine the optimal time to sell your home.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'best-time-to-sell-analyzer',
  article: {
    title: "Timing Your Home Sale for Maximum Profit",
    content: `
      <h2>When is the Best Time to Sell?</h2>
      <p>
        Timing your home sale can significantly impact both the sale price and how quickly your home sells. While national trends show spring (March-June) as the hottest seller's market, the optimal time depends on your local market conditions, personal circumstances, and financial goals.
      </p>
      <h3>Seasonal Market Trends</h3>
      <p>
        <strong>Spring (March-June):</strong> Peak selling season with highest prices and most buyers. Homes sell 18.5% faster and for 1-2% more than winter sales. Competition among sellers is highest.
      </p>
      <p>
        <strong>Summer (July-August):</strong> Still strong buyer activity, especially families moving before school. Prices remain high but start to soften in late August.
      </p>
      <p>
        <strong>Fall (September-November):</strong> Buyer pool shrinks but serious buyers remain. Less competition from other sellers. Prices typically 1-2% lower than spring.
      </p>
      <p>
        <strong>Winter (December-February):</strong> Slowest season with fewest buyers. Homes sell for 2-3% less and take 25% longer. However, winter buyers are often highly motivated and ready to close quickly.
      </p>
      <h3>Market Condition Factors</h3>
      <ul>
        <li><strong>Inventory Levels:</strong> Low inventory (seller's market) means higher prices and faster sales regardless of season.</li>
        <li><strong>Interest Rates:</strong> Rising rates reduce buyer purchasing power; selling before rate hikes preserves demand.</li>
        <li><strong>Local Job Market:</strong> Strong employment growth attracts buyers and supports home prices.</li>
        <li><strong>New Development:</strong> New construction can increase inventory and competition in your area.</li>
        <li><strong>Days on Market:</strong> When average DOM is low in your area, it's a good time to sell.</li>
      </ul>
      <h3>Personal Timing Considerations</h3>
      <ul>
        <li><strong>Equity Position:</strong> Have you built enough equity to cover closing costs and down payment on next home?</li>
        <li><strong>Home Condition:</strong> Is your home market-ready or will repairs delay listing?</li>
        <li><strong>Tax Implications:</strong> Capital gains exclusion requires 2 of 5 years as primary residence.</li>
        <li><strong>Job/Life Changes:</strong> Relocation, downsizing, or life events may dictate timing.</li>
        <li><strong>Next Home Purchase:</strong> Can you afford to buy before selling? Bridge financing?</li>
      </ul>
      <h3>Optimal Listing Day and Month</h3>
      <p>
        Research shows homes listed on Thursday or Friday get 20% more views than Monday listings. The single best week to list is the first week of May, followed by late March and early April. However, the "best" time for you depends on your specific circumstances.
      </p>
      <h3>When to Wait</h3>
      <p>
        Consider waiting if: mortgage rates are expected to drop soon, major infrastructure improvements are coming to your area, you've owned less than 2 years (capital gains taxes), your home needs significant repairs, or personal circumstances allow flexibility.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "currentHomeValue",
        label: "Current Home Value Estimate",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "monthsOfInventory",
        label: "Months of Inventory in Your Market",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "averageDaysOnMarket",
        label: "Average Days on Market in Your Area",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "homeEquity",
        label: "Your Home Equity",
        type: "number",
        placeholder: "150000",
        defaultValue: "150000",
      },
      {
        name: "yearsOwned",
        label: "Years You've Owned the Home",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "currentSeason",
        label: "Current Season (1=Spring, 2=Summer, 3=Fall, 4=Winter)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "urgencyLevel",
        label: "Urgency to Sell (1=Low, 5=High)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
    ],
    results: [
      { label: "Market Condition", isString: true },
      { label: "Seasonal Factor", isString: true },
      { label: "Timing Score", isNumber: true },
      { label: "Recommendation", isString: true },
    ],
    calculate: (data: any) => {
      const currentHomeValue = Number(data.currentHomeValue) || 0;
      const monthsOfInventory = Number(data.monthsOfInventory) || 0;
      const averageDaysOnMarket = Number(data.averageDaysOnMarket) || 0;
      const homeEquity = Number(data.homeEquity) || 0;
      const yearsOwned = Number(data.yearsOwned) || 0;
      const currentSeason = Number(data.currentSeason) || 1;
      const urgencyLevel = Number(data.urgencyLevel) || 3;

      if (currentHomeValue <= 0) {
        return [
          { label: "Recommendation", value: "Please enter valid home value and market data.", type: "string" },
        ];
      }

      let marketCondition = "Balanced Market";
      let marketScore = 50;
      if (monthsOfInventory < 4) {
        marketCondition = "Strong Seller's Market";
        marketScore = 85;
      } else if (monthsOfInventory > 6) {
        marketCondition = "Buyer's Market";
        marketScore = 30;
      }

      let seasonalFactor = "Average Season";
      let seasonScore = 50;
      if (currentSeason === 1) {
        seasonalFactor = "Peak Spring Season - Best Time";
        seasonScore = 90;
      } else if (currentSeason === 2) {
        seasonalFactor = "Summer - Good Time";
        seasonScore = 75;
      } else if (currentSeason === 3) {
        seasonalFactor = "Fall - Moderate Season";
        seasonScore = 55;
      } else {
        seasonalFactor = "Winter - Slowest Season";
        seasonScore = 35;
      }

      const daysOnMarketScore = averageDaysOnMarket < 30 ? 20 : averageDaysOnMarket < 60 ? 10 : 5;
      const equityScore = homeEquity > 50000 ? 15 : homeEquity > 20000 ? 10 : 5;
      const taxScore = yearsOwned >= 2 ? 10 : 0;
      const urgencyBonus = urgencyLevel >= 4 ? 10 : 0;

      const timingScore = Math.min(100, marketScore * 0.4 + seasonScore * 0.3 + daysOnMarketScore + equityScore + taxScore + urgencyBonus);

      let recommendation = "";
      if (timingScore >= 75) {
        recommendation = "Excellent time to sell! Market conditions and timing are favorable. List soon to capitalize on current conditions.";
      } else if (timingScore >= 55) {
        recommendation = "Good time to sell. Market is reasonable. Prepare your home and list within the next 1-2 months.";
      } else if (timingScore >= 40) {
        recommendation = "Fair time to sell. Consider waiting for spring or improving market conditions unless you must sell soon.";
      } else {
        recommendation = "Consider waiting. Market conditions are challenging. Use this time to improve your home and build more equity.";
      }

      return [
        { label: "Market Condition", value: marketCondition, type: "string" },
        { label: "Seasonal Factor", value: seasonalFactor, type: "string" },
        { label: "Timing Score", value: Math.round(timingScore), type: "number" },
        { label: "Recommendation", value: recommendation, type: "string" },
      ];
    },
  },
};
