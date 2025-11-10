import { CalculatorContent } from '@/types';

export const FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'FSBO vs Agent Savings Calculator',
  description: 'Compare the costs and benefits of selling your home yourself (For Sale By Owner) versus using a real estate agent.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'fsbo-vs-agent-savings-calculator',
  article: {
    title: "FSBO vs Using a Real Estate Agent: Which is Right for You?",
    content: `
      <h2>Understanding FSBO (For Sale By Owner)</h2>
      <p>
        FSBO means selling your home without a real estate agent. While this saves on commission fees (typically 5-6% of the sale price), it requires significant time, effort, and expertise. Only 7% of homes are sold FSBO, and they typically sell for 26% less than agent-assisted sales according to NAR data.
      </p>
      <h3>FSBO Costs to Consider</h3>
      <ul>
        <li><strong>MLS Listing:</strong> Flat-fee MLS listing services cost $100-$500 to get your home on realtor.com and Zillow.</li>
        <li><strong>Photography:</strong> Professional photos cost $150-$500 and are essential for online listings.</li>
        <li><strong>Marketing:</strong> Signs, flyers, online ads, and open house materials cost $200-$1,000.</li>
        <li><strong>Legal Fees:</strong> Real estate attorney fees for contract review cost $500-$1,500.</li>
        <li><strong>Title Work:</strong> Title search and insurance still required, $1,000-$2,000.</li>
        <li><strong>Buyer's Agent Commission:</strong> You may still need to offer 2.5-3% to buyer's agents or fewer buyers will see your listing.</li>
        <li><strong>Time Investment:</strong> FSBO requires 20-40+ hours of work: showings, negotiations, paperwork.</li>
      </ul>
      <h3>Benefits of Using an Agent</h3>
      <ul>
        <li><strong>Higher Sale Price:</strong> Agent-assisted sales average 26% higher than FSBO sales.</li>
        <li><strong>Faster Sale:</strong> Agents have marketing networks and MLS access to reach more buyers.</li>
        <li><strong>Expert Negotiation:</strong> Agents negotiate repairs, contingencies, and price on your behalf.</li>
        <li><strong>Legal Protection:</strong> Agents understand disclosure laws and contract requirements.</li>
        <li><strong>Time Savings:</strong> Agents handle showings, marketing, and coordination.</li>
      </ul>
      <h3>When FSBO Makes Sense</h3>
      <p>
        FSBO can work well if: you're selling to a known buyer (family/friend), you have real estate experience, your market is hot with limited inventory, you have time to dedicate to the sale, or your home is priced under $200,000 where commission savings are smaller.
      </p>
      <h3>Calculating the True Savings</h3>
      <p>
        <strong>Formula:</strong> True Savings = (Agent Sale Price - FSBO Sale Price) - (Agent Commission - FSBO Costs)
      </p>
      <p>
        Factor in the typically lower FSBO sale price, your time investment, and the stress of handling everything yourself. For many sellers, the agent's expertise and higher sale price more than justify the commission.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeValue",
        label: "Estimated Home Value",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "agentCommissionRate",
        label: "Agent Commission Rate (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "fsboSalePriceReduction",
        label: "Expected FSBO Sale Price Reduction (%)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "mlsListingFee",
        label: "FSBO MLS Listing Fee",
        type: "number",
        placeholder: "300",
        defaultValue: "300",
      },
      {
        name: "photographyCost",
        label: "FSBO Photography Cost",
        type: "number",
        placeholder: "350",
        defaultValue: "350",
      },
      {
        name: "marketingCost",
        label: "FSBO Marketing Cost",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "legalFees",
        label: "FSBO Legal Fees",
        type: "number",
        placeholder: "1000",
        defaultValue: "1000",
      },
      {
        name: "buyerAgentCommission",
        label: "Buyer's Agent Commission (%)",
        type: "number",
        placeholder: "2.5",
        defaultValue: "2.5",
      },
    ],
    results: [
      { label: "Agent-Assisted Sale Price", isCurrency: true },
      { label: "Total Agent Commission", isCurrency: true },
      { label: "Net from Agent Sale", isCurrency: true },
      { label: "FSBO Sale Price", isCurrency: true },
      { label: "Total FSBO Costs", isCurrency: true },
      { label: "Net from FSBO Sale", isCurrency: true },
      { label: "Actual Savings with Agent", isCurrency: true },
    ],
    calculate: (data: any) => {
      const homeValue = Number(data.homeValue) || 0;
      const agentCommissionRate = Number(data.agentCommissionRate) || 0;
      const fsboSalePriceReduction = Number(data.fsboSalePriceReduction) || 0;
      const mlsListingFee = Number(data.mlsListingFee) || 0;
      const photographyCost = Number(data.photographyCost) || 0;
      const marketingCost = Number(data.marketingCost) || 0;
      const legalFees = Number(data.legalFees) || 0;
      const buyerAgentCommission = Number(data.buyerAgentCommission) || 0;

      if (homeValue <= 0) {
        return [
          { label: "Actual Savings with Agent", value: "Please enter a valid home value.", type: "string" },
        ];
      }

      const agentSalePrice = homeValue;
      const agentCommission = agentSalePrice * (agentCommissionRate / 100);
      const netFromAgent = agentSalePrice - agentCommission;

      const fsboSalePrice = homeValue * (1 - fsboSalePriceReduction / 100);
      const fsboBuyerCommission = fsboSalePrice * (buyerAgentCommission / 100);
      const totalFsboCosts = mlsListingFee + photographyCost + marketingCost + legalFees + fsboBuyerCommission;
      const netFromFsbo = fsboSalePrice - totalFsboCosts;

      const actualSavings = netFromAgent - netFromFsbo;

      return [
        { label: "Agent-Assisted Sale Price", value: agentSalePrice, type: "currency" },
        { label: "Total Agent Commission", value: agentCommission, type: "currency" },
        { label: "Net from Agent Sale", value: netFromAgent, type: "currency" },
        { label: "FSBO Sale Price", value: fsboSalePrice, type: "currency" },
        { label: "Total FSBO Costs", value: totalFsboCosts, type: "currency" },
        { label: "Net from FSBO Sale", value: netFromFsbo, type: "currency" },
        { label: "Actual Savings with Agent", value: actualSavings, type: "currency" },
      ];
    },
  },
};
