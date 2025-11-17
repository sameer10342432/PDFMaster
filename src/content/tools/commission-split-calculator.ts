import { CalculatorContent } from '@/types';

export const COMMISSION_SPLIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commission Split Calculator (Agent vs Broker)',
  description: 'Calculate and compare commission splits between agent and broker with different arrangements.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'commission-split-calculator',
  article: {
    title: 'Understanding Real Estate Commission Splits',
    content: `
Commission splits determine how much of each transaction goes to the agent versus the brokerage. Understanding splits helps you maximize income.

### Common Split Structures

**Traditional Splits:**
- 50/50: New agent standard
- 60/40: Experienced agent
- 70/30: Senior agent or team leader
- 80/20: Top producer
- 90/10: Mega producer or team

**Split with Cap:**
- Start at lower split (e.g., 60/40)
- After earning $X, go to 100% or higher split
- Example: 60/40 until $18K to broker, then 100%

**Graduated Splits:**
- Increases with production volume
- Example: 60/40 up to $500K, 70/30 up to $1M, 80/20 above

**100% Commission:**
- Keep all commission
- Pay monthly desk fee ($500-2,000)
- Pay per-transaction fee ($250-500)
- Better for high producers

### Factors Affecting Your Split

**Experience Level:**
- New agents: 50-60%
- 1-3 years: 60-70%
- 3-5 years: 70-80%
- 5+ years: 80-100%

**Services Provided:**
- Leads: Lower split
- Admin support: Lower split
- Self-generating: Higher split
- Own marketing: Higher split

**Production Volume:**
- Low volume: Lower split
- High volume: Higher split or cap

## How to Use This Calculator

Compare different split scenarios:
1. Enter gross commission
2. Compare split percentages
3. Factor in caps
4. Calculate break-even points
`,
  },
  calculator: {
    fields: [
      {
        name: 'grossCommission',
        label: 'Gross Commission Amount',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'agentSplit',
        label: 'Agent Split (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'transactionFee',
        label: 'Transaction Fee (if applicable)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'hasReachedCap',
        label: 'Has Reached Cap?',
        type: 'select',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
      },
    ],
    results: [
      { label: 'Agent Portion', isCurrency: true },
      { label: 'Broker Portion', isCurrency: true },
      { label: 'Net to Agent', isCurrency: true },
    ],
    calculate: (data) => {
      const { grossCommission, agentSplit, transactionFee, hasReachedCap } = data;
      
      let agentPortion;
      let brokerPortion;
      
      if (hasReachedCap === 'Yes') {
        agentPortion = parseFloat(grossCommission);
        brokerPortion = 0;
      } else {
        agentPortion = parseFloat(grossCommission) * (parseFloat(agentSplit) / 100);
        brokerPortion = parseFloat(grossCommission) - agentPortion;
      }
      
      const netToAgent = agentPortion - parseFloat(transactionFee);
      
      return [
        { label: 'Agent Portion', value: `$${Math.round(agentPortion).toLocaleString()}` },
        { label: 'Broker Portion', value: `$${Math.round(brokerPortion).toLocaleString()}` },
        { label: 'Net to Agent', value: `$${Math.round(netToAgent).toLocaleString()}` },
      ];
    },
  },
};
