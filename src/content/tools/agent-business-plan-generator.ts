import { CalculatorContent } from '@/types';

export const AGENT_BUSINESS_PLAN_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Agent Business Plan Generator',
  description: 'Generate a comprehensive real estate business plan including income goals, marketing strategies, lead generation plans, and financial projections.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'agent-business-plan-generator',
  article: {
    title: 'Real Estate Agent Business Plan: Complete Planning Guide',
    content: `
A well-crafted business plan transforms your real estate career from reactive to proactive, providing clear goals and actionable strategies for success.

### Why Real Estate Agents Need a Business Plan

**Goal Clarity:**
- Define specific income targets
- Set transaction volume goals
- Establish market positioning
- Create accountability structure

**Strategic Direction:**
- Marketing strategy roadmap
- Lead generation systems
- Client acquisition plan
- Business growth trajectory

**Financial Planning:**
- Revenue projections
- Expense budgeting
- Profit margin analysis
- Investment allocation

**Performance Measurement:**
- Track progress vs. goals
- Identify what's working
- Adjust strategies quickly
- Celebrate achievements

### Essential Business Plan Components

**1. Income Goals and Financial Targets**

**Annual Gross Commission Income (GCI):**
- Year 1: $80,000-150,000
- Year 2: $120,000-250,000
- Year 3: $180,000-400,000+
- Year 5: $300,000-750,000+

**Transaction Volume:**
- Define units needed
- Average sale price target
- Average commission percentage
- Commission split consideration

**2. Market Positioning and Niche**

**Target Market:**
- Geographic farm area
- Price point focus
- Client demographic
- Property type specialty

**Unique Value Proposition:**
- What makes you different
- Specialized expertise
- Service differentiators
- Competitive advantages

**3. Marketing Strategy**

**Online Presence:**
- Professional website
- Social media platforms
- Google Business Profile
- Online review management
- Budget: $300-800/month

**Content Marketing:**
- Blog posts: 2-4 per month
- Social media: Daily posts
- Email newsletters: Weekly/Bi-weekly
- Video content: 2-8 per month
- Budget: $200-500/month

**Paid Advertising:**
- Facebook/Instagram ads: $300-1,000/month
- Google Ads: $500-2,000/month
- Zillow Premier Agent: $500-3,000/month
- Direct mail: $200-800/month
- Total ad budget: $1,500-6,800/month

**4. Lead Generation Plan**

**Sphere of Influence:**
- Database of 200-500 contacts
- Monthly touchpoints: 6-12 per year
- Referral request system
- Past client nurture program

**Prospecting Activities:**
- Open houses: 2-4 per month
- Door knocking: 2-4 hours/week
- Circle prospecting: 3-5 hours/week
- Expired/FSBO outreach: Daily
- Geographic farming: 300-500 homes

**Lead Sources and Conversion:**
- SOI/Referrals: 40-60% of business
- Online leads: 20-30%
- Open houses: 10-20%
- Geographic farm: 10-20%
- Other sources: 5-10%

**5. Daily Schedule and Activities**

**Revenue-Generating Activities (60-70% of time):**
- Lead generation: 2-3 hours/day
- Client appointments: 2-4 appointments/day
- Follow-up and nurturing: 1-2 hours/day
- Listing presentations: 2-4 per week
- Buyer consultations: 3-5 per week

**Business Development (20-30% of time):**
- Marketing activities: 1-2 hours/day
- Networking events: 2-3 per week
- Education and training: 3-5 hours/week
- Planning and review: 2-3 hours/week

**Administrative (10-20% of time):**
- Transaction management: 1-2 hours/day
- Email and communication: 30-60 minutes/day
- Paperwork and compliance: 1-2 hours/day

**6. Financial Projections**

**Revenue Forecast:**
- Transactions per quarter
- Average commission per transaction
- Gross commission income (GCI)
- After-split income

**Expense Budget:**
- Marketing: 15-25% of GCI
- Technology and tools: 5-10% of GCI
- Continuing education: 2-5% of GCI
- MLS/Association fees: $1,500-3,000/year
- Insurance: $500-2,000/year
- Total expenses: 25-50% of GCI

**Profitability:**
- Net income target
- Savings and investment
- Tax planning (25-35%)
- Personal draw requirements

**7. Growth Strategy**

**Year 1: Foundation Building**
- Establish systems and processes
- Build database to 300+ contacts
- Complete 8-15 transactions
- Develop marketing presence
- Focus on learning and skill development

**Year 2: Momentum and Scale**
- Double transaction volume to 15-25
- Expand marketing reach
- Consider hiring assistant
- Increase average sale price
- Develop referral network

**Year 3+: Team and Leadership**
- Build team (optional)
- Systemize operations
- Focus on highest-value activities
- Mentor junior agents
- Consider specialty niche

### Implementation and Accountability

**Monthly Reviews:**
- Actual vs. projected income
- Lead generation metrics
- Conversion rate analysis
- Marketing ROI assessment
- Expense management review

**Quarterly Planning:**
- Strategic adjustments
- Goal refinement
- Market condition analysis
- Competition assessment
- Investment decisions

**Annual Evaluation:**
- Full year performance review
- Next year goal setting
- Major strategy changes
- Business model evolution
- Professional development planning

## How to Use This Generator

Enter your business goals:
1. Target annual income
2. Average commission per transaction
3. Commission split percentage
4. Expected transactions Year 1
5. Monthly marketing budget
6. Lead generation hours per week

Get comprehensive business plan including:
- Transaction volume needed
- Gross commission required
- Lead generation targets
- Marketing budget allocation
- Daily activity requirements
- Monthly income projections
- Profitability forecast

This generator helps you create a data-driven business plan that turns your real estate career goals into actionable daily activities and measurable outcomes.
`,
  },
  calculator: {
    fields: [
      {
        name: 'targetIncome',
        label: 'Target Annual Net Income',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Transaction',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'commissionSplit',
        label: 'Your Commission Split (%)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'expensePercent',
        label: 'Business Expenses (% of GCI)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'leadGenHoursWeek',
        label: 'Lead Generation Hours Per Week',
        type: 'number',
        defaultValue: 15,
      },
    ],
    results: [
      { label: 'Transactions Needed', isCurrency: false },
      { label: 'Gross Commission Income (GCI)', isCurrency: true },
      { label: 'Income After Split', isCurrency: true },
      { label: 'Total Business Expenses', isCurrency: true },
      { label: 'Monthly Income Target', isCurrency: true },
    ],
    calculate: (data) => {
      const { targetIncome, avgCommission, commissionSplit, expensePercent, leadGenHoursWeek } = data;
      
      const splitDecimal = parseFloat(commissionSplit) / 100;
      const expenseDecimal = parseFloat(expensePercent) / 100;
      
      const incomeAfterSplit = parseFloat(targetIncome) / (1 - expenseDecimal);
      const grossGCI = incomeAfterSplit / splitDecimal;
      const transactionsNeeded = Math.ceil(grossGCI / parseFloat(avgCommission));
      const totalExpenses = grossGCI * expenseDecimal;
      const monthlyTarget = parseFloat(targetIncome) / 12;
      
      return [
        { label: 'Transactions Needed', value: `${transactionsNeeded} deals` },
        { label: 'Gross Commission Income (GCI)', value: `$${grossGCI.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Income After Split', value: `$${incomeAfterSplit.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Business Expenses', value: `$${totalExpenses.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Monthly Income Target', value: `$${monthlyTarget.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
      ];
    },
  },
};
