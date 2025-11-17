import { CalculatorContent } from '@/types';

export const AGENT_RAMP_UP_PLANNER_CONTENT: CalculatorContent = {
  title: 'Agent Ramp Up (First Year) Income Planner',
  description: 'Plan your first year as a real estate agent with realistic monthly income projections.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'agent-ramp-up-planner',
  article: {
    title: 'First Year Real Estate Agent: Ramp-Up Income Planning Guide',
    content: `
The first year as a real estate agent is challenging. Most new agents don't close their first deal for 3-4 months due to the time from lead to closing.

### Typical First Year Timeline

**Months 1-3: Building Foundation**
- Income: $0-5,000
- Focus: Training, sphere outreach, lead generation
- Reality: No closings yet, living off savings

**Months 4-6: First Closings**
- Income: $5,000-15,000
- Closings: 1-2 deals
- Reality: First commission checks arrive

**Months 7-9: Building Momentum**
- Income: $10,000-25,000
- Closings: 2-3 deals
- Reality: Pipeline growing, referrals starting

**Months 10-12: Steady Production**
- Income: $15,000-30,000
- Closings: 2-4 deals
- Reality: Consistent activity, repeat business

### Survival Strategies

**Financial Planning:**
- 6-12 months living expenses saved
- Part-time income source
- Supportive spouse/partner income
- Credit line for emergencies

**Income Acceleration:**
- Focus on buyer clients (faster closings)
- Join a team for leads
- Partner with experienced agent
- Aggressive sphere marketing

## How to Use This Planner

Enter your financial situation:
1. Savings available
2. Monthly expenses
3. Target first closing month
4. Expected monthly closings after ramp
5. Average commission per closing

Get month-by-month projections and survival timeline.
`,
  },
  calculator: {
    fields: [
      {
        name: 'savings',
        label: 'Total Savings Available',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'monthlyExpenses',
        label: 'Monthly Living Expenses',
        type: 'number',
        defaultValue: 3000,
      },
      {
        name: 'firstClosingMonth',
        label: 'Expected First Closing (Month)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Closing',
        type: 'number',
        defaultValue: 7500,
      },
    ],
    results: [
      { label: 'Months of Runway', isCurrency: false },
      { label: 'Estimated Year 1 Income', isCurrency: true },
      { label: 'Break-Even Month', isCurrency: false },
    ],
    calculate: (data) => {
      const { savings, monthlyExpenses, firstClosingMonth, avgCommission } = data;
      
      const runway = Math.floor(parseFloat(savings) / parseFloat(monthlyExpenses));
      const estimatedClosings = Math.max(0, 12 - parseInt(firstClosingMonth) + 1) * 0.75;
      const year1Income = estimatedClosings * parseFloat(avgCommission);
      const breakEven = parseInt(firstClosingMonth);
      
      return [
        { label: 'Months of Runway', value: `${runway} months` },
        { label: 'Estimated Year 1 Income', value: `$${Math.round(year1Income).toLocaleString()}` },
        { label: 'Break-Even Month', value: `Month ${breakEven}` },
      ];
    },
  },
};
