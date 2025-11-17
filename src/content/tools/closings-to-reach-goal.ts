import { CalculatorContent } from '@/types';

export const CLOSINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'How Many Closings to Reach Goal',
  description: 'Calculate how many closings you need to reach your income goals with commission splits and expenses.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'closings-to-reach-goal',
  article: {
    title: 'Setting Realistic Closing Goals for Real Estate Agents',
    content: `
Working backward from your income goal to determine required closings helps you set realistic activity targets.

### The Formula

**Required Closings = (Income Goal + Expenses) / (Avg Price × Commission Rate × Agent Split)**

### Example Calculation

**Goal: $100,000 net income**
- Annual expenses: $15,000
- Average price: $400,000
- Commission rate: 3%
- Agent split: 70%

**Calculation:**
- Need to earn: $115,000 (goal + expenses)
- Per closing: $400,000 × 3% × 70% = $8,400
- Required closings: $115,000 / $8,400 = 13.7 ≈ 14 closings

### Activity Required

**To close 14 deals:**
- Need 28-42 pending contracts (50% fall through)
- Need 140-280 active leads (5-10% conversion)
- Need 1,400-2,800 contacts/year
- Equals 120-230 contacts per month

## Reverse Engineering Success

1. Set income goal
2. Calculate required closings
3. Determine needed contracts
4. Calculate required leads
5. Plan daily activities

This turns vague income goals into specific daily actions.
`,
  },
  calculator: {
    fields: [
      {
        name: 'incomeGoal',
        label: 'Annual Income Goal',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'avgPrice',
        label: 'Average Sale Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'commissionRate',
        label: 'Commission Rate (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'split',
        label: 'Your Split (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'expenses',
        label: 'Annual Expenses',
        type: 'number',
        defaultValue: 15000,
      },
    ],
    results: [
      { label: 'Required Closings', isCurrency: false },
      { label: 'Closings Per Month', isCurrency: false },
      { label: 'Commission Per Closing', isCurrency: true },
    ],
    calculate: (data) => {
      const { incomeGoal, avgPrice, commissionRate, split, expenses } = data;
      
      const commissionPerClosing = parseFloat(avgPrice) * (parseFloat(commissionRate) / 100) * (parseFloat(split) / 100);
      const totalNeeded = parseFloat(incomeGoal) + parseFloat(expenses);
      const requiredClosings = Math.ceil(totalNeeded / commissionPerClosing);
      const perMonth = (requiredClosings / 12).toFixed(1);
      
      return [
        { label: 'Required Closings', value: `${requiredClosings} closings/year` },
        { label: 'Closings Per Month', value: `${perMonth} closings/month` },
        { label: 'Commission Per Closing', value: `$${Math.round(commissionPerClosing).toLocaleString()}` },
      ];
    },
  },
};
