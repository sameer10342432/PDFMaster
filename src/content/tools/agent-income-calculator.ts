import { CalculatorContent } from '@/types';

export const AGENT_INCOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Agent Income Calculator',
  description: 'Calculate potential real estate agent income based on closings, prices, and commission structures.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'agent-income-calculator',
  article: {
    title: 'Real Estate Agent Income: Complete Earning Potential Guide',
    content: `
Understanding your earning potential as a real estate agent requires analyzing multiple factors: closings, commission rates, splits, and expenses.

### Income Components

**Gross Commission Income:**
- Number of transactions
- Average sale price
- Commission rate (typically 5-6%)
- Buyer vs seller side representation

**Agent Split:**
- Brokerage split (50/50, 60/40, 70/30, etc.)
- Cap structures
- Graduated splits
- 100% commission models

**Expenses to Consider:**
- MLS and association fees: $500-2,000/year
- Marketing and advertising: $3,000-10,000/year
- Business expenses: $2,000-5,000/year
- Continuing education: $200-500/year
- Technology and tools: $1,000-3,000/year

### Realistic Income Expectations

**First Year Agent:**
- 4-8 closings typical
- $30,000-60,000 gross commission income
- After split and expenses: $15,000-35,000 net

**Experienced Agent (3+ years):**
- 12-24+ closings
- $80,000-200,000+ gross commission income
- After split and expenses: $50,000-140,000+ net

**Top Producer:**
- 30+ closings
- $200,000-500,000+ gross commission income
- Often negotiate better splits or 100% models

## How to Use This Calculator

Enter your projected activity:
1. Number of closings per year
2. Average sale price
3. Commission rate
4. Your split with broker
5. Annual expenses

Get realistic income projections.
`,
  },
  calculator: {
    fields: [
      {
        name: 'closings',
        label: 'Number of Closings Per Year',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'avgSalePrice',
        label: 'Average Sale Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'commissionRate',
        label: 'Commission Rate (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'agentSplit',
        label: 'Your Split (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'expenses',
        label: 'Annual Expenses',
        type: 'number',
        defaultValue: 10000,
      },
    ],
    results: [
      { label: 'Gross Commission Income', isCurrency: true },
      { label: 'Income After Split', isCurrency: true },
      { label: 'Net Income After Expenses', isCurrency: true },
    ],
    calculate: (data) => {
      const { closings, avgSalePrice, commissionRate, agentSplit, expenses } = data;
      
      const grossIncome = parseInt(closings) * parseFloat(avgSalePrice) * (parseFloat(commissionRate) / 100);
      const afterSplit = grossIncome * (parseFloat(agentSplit) / 100);
      const netIncome = afterSplit - parseFloat(expenses);
      
      return [
        { label: 'Gross Commission Income', value: `$${grossIncome.toLocaleString()}` },
        { label: 'Income After Split', value: `$${afterSplit.toLocaleString()}` },
        { label: 'Net Income After Expenses', value: `$${Math.max(0, netIncome).toLocaleString()}` },
      ];
    },
  },
};
