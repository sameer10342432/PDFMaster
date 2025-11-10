import { CalculatorContent } from '@/types';

export const REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Agent Commission Split Calculator',
  description: 'Calculate commission splits between listing and buyer\'s agents, brokerages, and team members.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'real-estate-agent-commission-split-calculator',
  article: {
    title: "Understanding Real Estate Commission Splits",
    content: `
      <h2>How Real Estate Commissions Are Split</h2>
      <p>
        Real estate commissions typically total 5-6% of the home sale price, but this amount is divided among multiple parties. Understanding commission splits helps both agents and sellers know where the money goes and how much agents actually earn from a transaction.
      </p>
      <h3>Standard Commission Split Structure</h3>
      <h4>Level 1: Total Commission Split (50/50 typical)</h4>
      <p>
        The total commission (usually 5-6%) is first split between the listing side and buyer's side:
      </p>
      <ul>
        <li><strong>Listing Side:</strong> 2.5-3% goes to listing agent and their brokerage</li>
        <li><strong>Buyer's Side:</strong> 2.5-3% goes to buyer's agent and their brokerage</li>
      </ul>
      <h4>Level 2: Agent-Brokerage Split (varies 50/50 to 90/10)</h4>
      <p>
        Each agent splits their portion with their brokerage. Common splits:
      </p>
      <ul>
        <li><strong>New Agents:</strong> 50/50 or 60/40 split (agent gets 50-60%)</li>
        <li><strong>Experienced Agents:</strong> 70/30 or 80/20 split</li>
        <li><strong>Top Producers:</strong> 85/15 to 95/5 split</li>
        <li><strong>100% Brokerages:</strong> Agent keeps 100% but pays monthly desk fees ($500-$2,000)</li>
      </ul>
      <h4>Level 3: Team Splits (if applicable)</h4>
      <p>
        If the agent is part of a team, they may split their portion with the team lead:
      </p>
      <ul>
        <li><strong>Team Lead:</strong> Takes 20-50% of agent's portion for leads and support</li>
        <li><strong>Team Agent:</strong> Keeps remaining 50-80%</li>
      </ul>
      <h3>Commission Split Example</h3>
      <p>
        <strong>Sale Price:</strong> $500,000<br>
        <strong>Total Commission:</strong> 6% = $30,000
      </p>
      <p>
        <strong>Split 1 - Listing vs Buyer's Side:</strong><br>
        Listing side: $15,000 (50%)<br>
        Buyer's side: $15,000 (50%)
      </p>
      <p>
        <strong>Split 2 - Listing Agent (70/30 brokerage split):</strong><br>
        Agent: $10,500 (70%)<br>
        Brokerage: $4,500 (30%)
      </p>
      <p>
        <strong>Split 3 - If on Team (60/40 team split):</strong><br>
        Agent keeps: $6,300 (60% of $10,500)<br>
        Team lead: $4,200 (40% of $10,500)
      </p>
      <p>
        Final agent earnings: $6,300 from $500,000 sale (1.26% effective commission)
      </p>
      <h3>Additional Deductions</h3>
      <ul>
        <li><strong>Transaction Fees:</strong> $200-$500 per transaction (admin and E&O insurance)</li>
        <li><strong>Franchise Fees:</strong> 6-8% of agent's gross commission (Keller Williams, RE/MAX, etc.)</li>
        <li><strong>Marketing Costs:</strong> Photography, staging, ads (often agent-paid)</li>
        <li><strong>MLS Dues:</strong> $30-$50/month</li>
        <li><strong>Board/Association Dues:</strong> $500-$1,500/year</li>
        <li><strong>Errors & Omissions Insurance:</strong> $500-$2,000/year</li>
        <li><strong>Business Expenses:</strong> Car, gas, phone, CRM, marketing materials</li>
      </ul>
      <h3>Negotiating Commission Splits</h3>
      <p>
        <strong>For Agents:</strong> Increase your split by: demonstrating consistent sales volume, covering your own marketing costs, bringing your own leads, negotiating with low-fee brokerages, or moving to 100% commission brokerage.
      </p>
      <p>
        <strong>For Sellers:</strong> Commission rates are negotiable, especially for: high-value properties, dual agency situations, quick/easy sales, repeat clients, or in buyer's markets with long inventory times.
      </p>
      <h3>Different Brokerage Models</h3>
      <p>
        <strong>Traditional Full-Service:</strong> 50/50 to 70/30 splits with full support, leads, and marketing.
      </p>
      <p>
        <strong>High-Split Brokerages:</strong> 80/20 to 90/10 splits with less support; agent covers own marketing.
      </p>
      <p>
        <strong>100% Commission:</strong> Agent keeps 100% but pays $500-$2,000/month desk fees plus per-transaction fees.
      </p>
      <p>
        <strong>Discount Brokerages:</strong> Lower commission rates (1-2%) with minimal services; agent keeps higher percentage.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "salePrice",
        label: "Home Sale Price",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "totalCommissionRate",
        label: "Total Commission Rate (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "listingBuyerSplit",
        label: "Listing Side Percentage (%)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "agentBrokerageSplit",
        label: "Agent's Share from Brokerage (%)",
        type: "number",
        placeholder: "70",
        defaultValue: "70",
      },
      {
        name: "onTeam",
        label: "Agent on Team? (1=Yes, 0=No)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "teamAgentSplit",
        label: "Team Agent's Share (%)",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "transactionFee",
        label: "Transaction Fee",
        type: "number",
        placeholder: "350",
        defaultValue: "350",
      },
      {
        name: "franchiseFeeRate",
        label: "Franchise Fee Rate (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
    ],
    results: [
      { label: "Total Commission", isCurrency: true },
      { label: "Listing Side Commission", isCurrency: true },
      { label: "Buyer's Side Commission", isCurrency: true },
      { label: "Agent's Share (Before Team Split)", isCurrency: true },
      { label: "Brokerage's Share", isCurrency: true },
      { label: "Agent's Final Share (After All Splits)", isCurrency: true },
      { label: "Total Deductions", isCurrency: true },
      { label: "Net Agent Earnings", isCurrency: true },
      { label: "Effective Commission Rate", isCurrency: false },
    ],
    calculate: (data: any) => {
      const salePrice = Number(data.salePrice) || 0;
      const totalCommissionRate = Number(data.totalCommissionRate) || 0;
      const listingBuyerSplit = Number(data.listingBuyerSplit) || 50;
      const agentBrokerageSplit = Number(data.agentBrokerageSplit) || 70;
      const onTeam = Number(data.onTeam) || 0;
      const teamAgentSplit = Number(data.teamAgentSplit) || 60;
      const transactionFee = Number(data.transactionFee) || 0;
      const franchiseFeeRate = Number(data.franchiseFeeRate) || 0;

      if (salePrice <= 0) {
        return [
          { label: "Net Agent Earnings", value: "Please enter a valid sale price.", type: "string" },
        ];
      }

      const totalCommission = salePrice * (totalCommissionRate / 100);
      const listingSideCommission = totalCommission * (listingBuyerSplit / 100);
      const buyerSideCommission = totalCommission * ((100 - listingBuyerSplit) / 100);

      const agentShareBeforeTeam = listingSideCommission * (agentBrokerageSplit / 100);
      const brokerageShare = listingSideCommission * ((100 - agentBrokerageSplit) / 100);

      let agentFinalShare = agentShareBeforeTeam;
      if (onTeam === 1) {
        agentFinalShare = agentShareBeforeTeam * (teamAgentSplit / 100);
      }

      const franchiseFee = agentFinalShare * (franchiseFeeRate / 100);
      const totalDeductions = transactionFee + franchiseFee;
      const netAgentEarnings = agentFinalShare - totalDeductions;
      const effectiveCommissionRate = (netAgentEarnings / salePrice) * 100;

      return [
        { label: "Total Commission", value: totalCommission, type: "currency" },
        { label: "Listing Side Commission", value: listingSideCommission, type: "currency" },
        { label: "Buyer's Side Commission", value: buyerSideCommission, type: "currency" },
        { label: "Agent's Share (Before Team Split)", value: agentShareBeforeTeam, type: "currency" },
        { label: "Brokerage's Share", value: brokerageShare, type: "currency" },
        { label: "Agent's Final Share (After All Splits)", value: agentFinalShare, type: "currency" },
        { label: "Total Deductions", value: totalDeductions, type: "currency" },
        { label: "Net Agent Earnings", value: netAgentEarnings, type: "currency" },
        { label: "Effective Commission Rate", value: effectiveCommissionRate, type: "percentage" },
      ];
    },
  },
};
