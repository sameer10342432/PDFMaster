import { CalculatorContent } from '@/types';

export const BUYERS_AGENT_VS_DUAL_AGENT_CONTENT: CalculatorContent = {
  title: 'Buyer\'s Agent vs. Dual Agent Comparison',
  description: 'Compare the benefits and risks of using a buyer\'s agent versus dual agency',
  icon: '🤝',
  category: 'Buyer Tools',
  slug: 'buyers-agent-vs-dual-agent',
  metaTitle: 'Buyer\'s Agent vs. Dual Agent | Which Representation is Right for You?',
  metaDescription: 'Compare buyer\'s agent and dual agency representation. Understand the pros, cons, and financial implications to make the best choice for your home purchase.',
  article: {
    title: "Buyer's Agent vs. Dual Agent: Understanding Your Options",
    content: `
    <h2>What is a Buyer's Agent?</h2>
    <p>A buyer's agent works exclusively for you, the buyer, and has a fiduciary duty to protect your interests throughout the home buying process. They are legally obligated to get you the best possible deal and represent only your interests.</p>
    
    <h3>What is Dual Agency?</h3>
    <p>Dual agency occurs when a single agent or brokerage represents both the buyer and seller in the same transaction. In this arrangement, the agent cannot provide full advocacy to either party and must remain neutral.</p>
    
    <h3>Buyer's Agent Advantages</h3>
    <ul>
      <li><strong>Undivided Loyalty:</strong> Agent works solely for your benefit</li>
      <li><strong>Full Advocacy:</strong> Can aggressively negotiate on your behalf</li>
      <li><strong>Complete Disclosure:</strong> Agent must share all relevant information</li>
      <li><strong>Market Insights:</strong> Access to comparable sales and pricing strategies</li>
      <li><strong>Price Negotiation:</strong> Agent fights to get you the lowest price</li>
      <li><strong>No Conflict of Interest:</strong> Agent's commission isn't affected by price</li>
    </ul>
    
    <h3>Dual Agency Considerations</h3>
    <ul>
      <li><strong>Limited Advocacy:</strong> Agent cannot fully represent either party</li>
      <li><strong>Neutral Position:</strong> Cannot negotiate aggressively for you</li>
      <li><strong>Information Restrictions:</strong> Limited in what they can disclose</li>
      <li><strong>Potential Conflict:</strong> Agent benefits from higher price</li>
      <li><strong>Less Protection:</strong> Reduced fiduciary duties</li>
    </ul>
    
    <h3>Financial Considerations</h3>
    <p>In dual agency, the agent typically earns the full commission (both buyer and seller sides, usually 5-6% total). With separate representation, the commission is split between two agents (typically 2.5-3% each).</p>
    
    <h3>When Dual Agency Might Work</h3>
    <ul>
      <li>Very straightforward transaction</li>
      <li>Experienced buyers who don't need much advocacy</li>
      <li>Fair market price is clearly established</li>
      <li>Both parties agree to limited representation</li>
    </ul>
    
    <h3>Red Flags with Dual Agency</h3>
    <ul>
      <li>Agent pressures you to accept dual agency</li>
      <li>Complex negotiation situations</li>
      <li>First-time home buyers</li>
      <li>Competitive market conditions</li>
      <li>Significant price negotiations needed</li>
    </ul>
    
    <h3>Legal Status by State</h3>
    <p>Dual agency is illegal in some states (Alaska, Colorado, Florida, Kansas, Maryland, Oklahoma, Texas, Vermont, Wyoming). In other states, it's legal but requires written consent from both parties.</p>
    
    <h3>Best Practice Recommendations</h3>
    <p>Most real estate experts recommend using your own buyer's agent for maximum protection and advocacy. The cost to you is typically the same whether you use a buyer's agent or accept dual agency, but the level of representation differs significantly.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "commissionRate",
        label: "Total Commission Rate (%)",
        type: "number",
        placeholder: "5.5",
        defaultValue: "5.5",
        step: "0.5",
      },
      {
        name: "firstTimeBuyer",
        label: "First-Time Home Buyer?",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        defaultValue: "yes",
      },
      {
        name: "negotiationNeeded",
        label: "Expect Complex Negotiations?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - Price, repairs, contingencies" },
          { value: "moderate", label: "Moderate - Some negotiation" },
          { value: "no", label: "No - Accepting list price" },
        ],
        defaultValue: "yes",
      },
      {
        name: "marketType",
        label: "Market Type",
        type: "select",
        options: [
          { value: "seller", label: "Seller's Market (Competitive)" },
          { value: "balanced", label: "Balanced Market" },
          { value: "buyer", label: "Buyer's Market" },
        ],
        defaultValue: "seller",
      },
    ],
    results: [
      { label: "Total Commission Paid", isCurrency: true },
      { label: "Buyer's Agent Commission", isCurrency: true },
      { label: "Dual Agent Commission", isCurrency: true },
      { label: "Dual Agency Risk Score", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
      { label: "Key Advantage", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const commissionRate = Number(data.commissionRate) || 0;
      const firstTimeBuyer = data.firstTimeBuyer;
      const negotiationNeeded = data.negotiationNeeded;
      const marketType = data.marketType;
      
      const totalCommission = purchasePrice * (commissionRate / 100);
      const buyerAgentCommission = totalCommission / 2;
      const dualAgentCommission = totalCommission;
      
      let riskScore = 0;
      if (firstTimeBuyer === "yes") riskScore += 30;
      if (negotiationNeeded === "yes") riskScore += 30;
      if (negotiationNeeded === "moderate") riskScore += 15;
      if (marketType === "seller") riskScore += 25;
      if (marketType === "balanced") riskScore += 10;
      if (purchasePrice > 500000) riskScore += 15;
      
      let riskLevel = "";
      if (riskScore >= 70) {
        riskLevel = "🔴 HIGH RISK - Dual agency strongly discouraged";
      } else if (riskScore >= 40) {
        riskLevel = "🟡 MODERATE RISK - Dual agency has significant drawbacks";
      } else {
        riskLevel = "🟢 LOW RISK - Dual agency might be acceptable";
      }
      
      let recommendation = "";
      let keyAdvantage = "";
      
      if (riskScore >= 70) {
        recommendation = "✅ USE BUYER'S AGENT - You need dedicated representation";
        keyAdvantage = "Full advocacy, aggressive negotiation, complete information disclosure";
      } else if (riskScore >= 40) {
        recommendation = "⚠️ PREFER BUYER'S AGENT - Safer choice for most buyers";
        keyAdvantage = "No conflict of interest, agent works exclusively for you";
      } else {
        recommendation = "💡 CONSIDER BOTH OPTIONS - Evaluate based on comfort level";
        keyAdvantage = "Buyer's agent still recommended for maximum protection";
      }

      return [
        { label: "Total Commission Paid", value: totalCommission.toFixed(2), isCurrency: true },
        { label: "Buyer's Agent Commission", value: buyerAgentCommission.toFixed(2), isCurrency: true },
        { label: "Dual Agent Commission", value: dualAgentCommission.toFixed(2), isCurrency: true },
        { label: "Dual Agency Risk Score", value: `${riskScore}/100 - ${riskLevel}`, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
        { label: "Key Advantage", value: keyAdvantage, isCurrency: false },
      ];
    },
  },
};
