import { CalculatorContent } from '@/types';

export const NEW_HOME_VS_RESALE_HOME_COST_ANALYZER_CONTENT: CalculatorContent = {
  title: 'New Home vs. Resale Home Cost Analyzer',
  description: 'Compare the total cost of ownership between buying a new construction home versus a resale property',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'new-home-vs-resale-home-cost-analyzer',
  article: {
    title: "New Home vs. Resale Home: Total Cost Analysis",
    content: `
    <h2>New Home vs. Resale Home: Making the Right Choice</h2>
    <p>Deciding between a new construction home and a resale property involves more than just comparing purchase prices. This calculator helps you understand the true 5-year cost of ownership for each option.</p>
    
    <h3>New Home Advantages</h3>
    <ul>
      <li><strong>Lower Maintenance:</strong> Everything is brand new with warranties</li>
      <li><strong>Energy Efficiency:</strong> Modern insulation and appliances reduce utility bills</li>
      <li><strong>Builder Incentives:</strong> Upgrades, closing cost credits, rate buydowns</li>
      <li><strong>Customization:</strong> Choose finishes, layouts, and features</li>
      <li><strong>Modern Standards:</strong> Current building codes and safety features</li>
    </ul>
    
    <h3>New Home Disadvantages</h3>
    <ul>
      <li><strong>Higher Purchase Price:</strong> Often 10-20% more expensive per sq ft</li>
      <li><strong>Builder Fees:</strong> HOA fees, special assessments, development charges</li>
      <li><strong>Slower Appreciation:</strong> New homes often appreciate more slowly initially</li>
      <li><strong>Landscaping Costs:</strong> Bare lots require extensive yard work</li>
      <li><strong>Construction Delays:</strong> Move-in dates can shift by months</li>
    </ul>
    
    <h3>Resale Home Advantages</h3>
    <ul>
      <li><strong>Lower Purchase Price:</strong> Generally better price per square foot</li>
      <li><strong>Established Neighborhoods:</strong> Mature trees, infrastructure, community</li>
      <li><strong>Faster Move-In:</strong> Immediate availability</li>
      <li><strong>Negotiation Power:</strong> More room to negotiate price and repairs</li>
      <li><strong>Known History:</strong> Can assess actual energy bills and maintenance needs</li>
    </ul>
    
    <h3>Resale Home Disadvantages</h3>
    <ul>
      <li><strong>Higher Maintenance:</strong> Older systems need repairs and replacement</li>
      <li><strong>Less Efficiency:</strong> Higher utility costs with older construction</li>
      <li><strong>Immediate Repairs:</strong> May need updates to HVAC, roof, appliances</li>
      <li><strong>Renovation Costs:</strong> Personalization requires remodeling</li>
    </ul>
    
    <h3>Making Your Decision</h3>
    <p>Use this calculator to compare 5-year total cost of ownership including:</p>
    <ul>
      <li>Purchase price differences</li>
      <li>Builder incentives and credits</li>
      <li>Expected maintenance and repair costs</li>
      <li>Energy savings from efficiency</li>
      <li>Appreciation rate differentials</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "newHomePurchasePrice",
        label: "New Home Purchase Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "resaleHomePurchasePrice",
        label: "Resale Home Purchase Price",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "builderIncentives",
        label: "Builder Incentives/Credits",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "resaleHomeRepairs",
        label: "Estimated Resale Home Repairs (5 years)",
        type: "number",
        placeholder: "25000",
        defaultValue: "25000",
      },
      {
        name: "newHomeRepairs",
        label: "Estimated New Home Repairs (5 years)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "energySavingsPerYear",
        label: "Annual Energy Savings (New Home)",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "newHomeAppreciation",
        label: "New Home Appreciation Rate (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "resaleHomeAppreciation",
        label: "Resale Home Appreciation Rate (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
    ],
    results: [
      { label: "New Home Net Cost (5 Years)", isCurrency: true },
      { label: "Resale Home Net Cost (5 Years)", isCurrency: true },
      { label: "Cost Difference", isCurrency: true },
      { label: "New Home Future Value", isCurrency: true },
      { label: "Resale Home Future Value", isCurrency: true },
      { label: "Better Financial Choice", isCurrency: false },
    ],
    calculate: (data: any) => {
      const newHomePurchasePrice = Number(data.newHomePurchasePrice) || 0;
      const resaleHomePurchasePrice = Number(data.resaleHomePurchasePrice) || 0;
      const builderIncentives = Number(data.builderIncentives) || 0;
      const resaleHomeRepairs = Number(data.resaleHomeRepairs) || 0;
      const newHomeRepairs = Number(data.newHomeRepairs) || 0;
      const energySavingsPerYear = Number(data.energySavingsPerYear) || 0;
      const newHomeAppreciationRate = Number(data.newHomeAppreciation) / 100 || 0;
      const resaleHomeAppreciationRate = Number(data.resaleHomeAppreciation) / 100 || 0;
      
      const totalEnergySavings = energySavingsPerYear * 5;
      
      const newHomeNetCost = newHomePurchasePrice - builderIncentives + newHomeRepairs - totalEnergySavings;
      const resaleHomeNetCost = resaleHomePurchasePrice + resaleHomeRepairs;
      
      const costDifference = newHomeNetCost - resaleHomeNetCost;
      
      const newHomeFutureValue = newHomePurchasePrice * Math.pow(1 + newHomeAppreciationRate, 5);
      const resaleHomeFutureValue = resaleHomePurchasePrice * Math.pow(1 + resaleHomeAppreciationRate, 5);
      
      const newHomeEquity = newHomeFutureValue - newHomeNetCost;
      const resaleHomeEquity = resaleHomeFutureValue - resaleHomeNetCost;
      
      let verdict = "";
      if (newHomeEquity > resaleHomeEquity + 10000) {
        verdict = "✅ New Home - Better long-term value";
      } else if (resaleHomeEquity > newHomeEquity + 10000) {
        verdict = "✅ Resale Home - Better long-term value";
      } else {
        verdict = "⚖️ Similar Value - Choose based on lifestyle preferences";
      }

      return [
        { label: "New Home Net Cost (5 Years)", value: `${newHomeNetCost.toFixed(2)}`, isCurrency: true },
        { label: "Resale Home Net Cost (5 Years)", value: `${resaleHomeNetCost.toFixed(2)}`, isCurrency: true },
        { label: "Cost Difference", value: `${Math.abs(costDifference).toFixed(2)}`, isCurrency: true },
        { label: "New Home Future Value", value: `${newHomeFutureValue.toFixed(2)}`, isCurrency: true },
        { label: "Resale Home Future Value", value: `${resaleHomeFutureValue.toFixed(2)}`, isCurrency: true },
        { label: "Better Financial Choice", value: verdict, isCurrency: false },
      ];
    },
  },
};
