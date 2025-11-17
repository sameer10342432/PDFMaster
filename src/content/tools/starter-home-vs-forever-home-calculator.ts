import { CalculatorContent } from '@/types';

export const STARTER_HOME_VS_FOREVER_HOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Starter Home vs. Forever Home Calculator',
  description: 'Compare the 10-year financial impact of buying a starter home versus waiting to buy your dream home',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'starter-home-vs-forever-home-calculator',
  article: {
    title: "Starter Home vs. Forever Home: Strategic Analysis",
    content: `
    <h2>Starter Home vs. Forever Home Decision</h2>
    <p>Should you buy a smaller, affordable home now and upgrade later, or wait and save for your dream home? This calculator helps quantify the 10-year financial implications of each strategy.</p>
    
    <h3>The Starter Home Strategy</h3>
    <p><strong>Buy Now, Upgrade Later:</strong></p>
    <ul>
      <li><strong>Build Equity Early:</strong> Start building equity today instead of paying rent</li>
      <li><strong>Lower Entry Cost:</strong> Smaller down payment and monthly payments</li>
      <li><strong>Learn Homeownership:</strong> Experience maintenance and costs on a smaller scale</li>
      <li><strong>Leverage Appreciation:</strong> Ride the market up and use gains for next home</li>
      <li><strong>Tax Benefits:</strong> Mortgage interest and property tax deductions</li>
    </ul>
    
    <p><strong>Starter Home Downsides:</strong></p>
    <ul>
      <li><strong>Transaction Costs:</strong> Pay closing costs twice (buy and sell)</li>
      <li><strong>Moving Costs:</strong> Additional expense when upgrading</li>
      <li><strong>Potential Over-Improvement:</strong> Renovations may not fully recoup costs</li>
      <li><strong>Market Timing Risk:</strong> Could sell during downturn</li>
      <li><strong>Life Disruption:</strong> Moving with family, kids, pets</li>
    </ul>
    
    <h3>The Forever Home Strategy</h3>
    <p><strong>Wait and Buy Dream Home:</strong></p>
    <ul>
      <li><strong>Avoid Double Transactions:</strong> One set of closing costs</li>
      <li><strong>Long-Term Fit:</strong> Home meets needs for 15-30+ years</li>
      <li><strong>Larger Down Payment:</strong> More time to save = lower monthly payments</li>
      <li><strong>No Compromises:</strong> Get exactly what you want</li>
      <li><strong>Stability:</strong> Put down roots in ideal community</li>
    </ul>
    
    <p><strong>Forever Home Downsides:</strong></p>
    <ul>
      <li><strong>Missed Appreciation:</strong> Lose years of equity building</li>
      <li><strong>Rising Prices:</strong> Homes may become less affordable over time</li>
      <li><strong>Rent Payments:</strong> Continue paying landlord instead of yourself</li>
      <li><strong>Life Changes:</strong> Needs may change before you buy</li>
      <li><strong>Market Timing:</strong> Could buy at peak if waiting too long</li>
    </ul>
    
    <h3>Key Factors in Your Decision</h3>
    <ol>
      <li><strong>Market Appreciation:</strong> Strong appreciation favors buying sooner</li>
      <li><strong>Rent vs. Own Costs:</strong> High rent vs low starter home payment tips scales</li>
      <li><strong>Life Timeline:</strong> Planning kids/marriage soon? Consider space needs</li>
      <li><strong>Career Stability:</strong> Secure income supports stretching for forever home</li>
      <li><strong>Local Market:</strong> Competitive markets may require acting fast</li>
    </ol>
    
    <h3>The Math of Two Strategies</h3>
    <p><strong>Starter Home Path:</strong> Buy $300K home → 5 years → Sell for $360K → Buy $450K home</p>
    <p><strong>Forever Home Path:</strong> Rent 5 years → Save down payment → Buy $450K home</p>
    <p>The starter home strategy builds ~$60K in equity but incurs ~$30K in transaction costs. Net gain: $30K plus living in owned home for 5 years.</p>
    
    <h3>Best Strategy by Scenario</h3>
    <p><strong>Buy Starter Home If:</strong> Appreciating market, high rent, stable job, comfortable with moving.</p>
    <p><strong>Wait for Forever Home If:</strong> Flat/declining market, affordable rent, major life changes expected, significant salary increases coming.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "starterHomePrice",
        label: "Starter Home Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "foreverHomePrice",
        label: "Forever Home Purchase Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "yearsInStarterHome",
        label: "Years in Starter Home Before Upgrading",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "appreciationRate",
        label: "Annual Appreciation Rate (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "monthlyRent",
        label: "Current Monthly Rent (If Waiting)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "buyingClosingCosts",
        label: "Buying Closing Costs (% of price)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "sellingClosingCosts",
        label: "Selling Closing Costs (% of price)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "movingCosts",
        label: "Moving Costs (Each Move)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
    ],
    results: [
      { label: "Starter Home Strategy: Net Worth After 10 Years", isCurrency: true },
      { label: "Forever Home Strategy: Net Worth After 10 Years", isCurrency: true },
      { label: "Difference in Net Worth", isCurrency: true },
      { label: "Total Transaction Costs (Starter)", isCurrency: true },
      { label: "Total Transaction Costs (Forever)", isCurrency: true },
      { label: "Recommended Strategy", isCurrency: false },
    ],
    calculate: (data: any) => {
      const starterHomePrice = Number(data.starterHomePrice) || 0;
      const foreverHomePrice = Number(data.foreverHomePrice) || 0;
      const yearsInStarterHome = Number(data.yearsInStarterHome) || 5;
      const appreciationRate = Number(data.appreciationRate) / 100 || 0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      const buyingClosingCostsPct = Number(data.buyingClosingCosts) / 100 || 0;
      const sellingClosingCostsPct = Number(data.sellingClosingCosts) / 100 || 0;
      const movingCosts = Number(data.movingCosts) || 0;
      
      // Starter Home Strategy
      const starterHomeBuyingCosts = starterHomePrice * buyingClosingCostsPct;
      const starterHomeValueAfterYears = starterHomePrice * Math.pow(1 + appreciationRate, yearsInStarterHome);
      const starterHomeSellingCosts = starterHomeValueAfterYears * sellingClosingCostsPct;
      const starterHomeNetProceeds = starterHomeValueAfterYears - starterHomeSellingCosts;
      
      const foreverHomePriceAtUpgrade = foreverHomePrice * Math.pow(1 + appreciationRate, yearsInStarterHome);
      const foreverHomeBuyingCostsLater = foreverHomePriceAtUpgrade * buyingClosingCostsPct;
      const foreverHomeValueAfter10Years = foreverHomePriceAtUpgrade * Math.pow(1 + appreciationRate, 10 - yearsInStarterHome);
      
      const starterTotalTransactionCosts = starterHomeBuyingCosts + starterHomeSellingCosts + foreverHomeBuyingCostsLater + (movingCosts * 2);
      const starterNetWorth = foreverHomeValueAfter10Years - starterTotalTransactionCosts;
      
      // Forever Home Strategy
      const totalRentPaid = monthlyRent * 12 * yearsInStarterHome;
      const foreverHomeBuyingCosts = foreverHomePrice * buyingClosingCostsPct;
      const foreverHomeValueDirect = foreverHomePrice * Math.pow(1 + appreciationRate, 10);
      
      const foreverTotalTransactionCosts = foreverHomeBuyingCosts + movingCosts;
      const foreverNetWorth = foreverHomeValueDirect - totalRentPaid - foreverTotalTransactionCosts;
      
      const netWorthDifference = starterNetWorth - foreverNetWorth;
      
      let verdict = "";
      if (netWorthDifference > 30000) {
        verdict = "✅ Starter Home Strategy - Build equity now, upgrade later";
      } else if (netWorthDifference < -30000) {
        verdict = "✅ Forever Home Strategy - Wait and buy dream home";
      } else {
        verdict = "⚖️ Similar Outcomes - Choose based on lifestyle flexibility";
      }

      return [
        { label: "Starter Home Strategy: Net Worth After 10 Years", value: `${starterNetWorth.toFixed(2)}`, isCurrency: true },
        { label: "Forever Home Strategy: Net Worth After 10 Years", value: `${foreverNetWorth.toFixed(2)}`, isCurrency: true },
        { label: "Difference in Net Worth", value: `${Math.abs(netWorthDifference).toFixed(2)}`, isCurrency: true },
        { label: "Total Transaction Costs (Starter)", value: `${starterTotalTransactionCosts.toFixed(2)}`, isCurrency: true },
        { label: "Total Transaction Costs (Forever)", value: `${foreverTotalTransactionCosts.toFixed(2)}`, isCurrency: true },
        { label: "Recommended Strategy", value: verdict, isCurrency: false },
      ];
    },
  },
};
