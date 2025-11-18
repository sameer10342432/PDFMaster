import { CalculatorContent } from '@/types';

export const AGENT_TEAM_SPLIT_VS_SALARY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Agent Team (Split vs. Salary) Calculator',
  description: 'Compare commission split versus salary compensation models for building and managing your real estate team to determine the most profitable structure.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'agent-team-split-vs-salary-calculator',
  article: {
    title: 'Agent Team Calculator: Split vs. Salary - Which Compensation Model Works Best?',
    content: `
Building a real estate team requires critical decisions about compensation structure. Understanding the financial implications of commission splits versus salary models helps you build a profitable and sustainable team.

### Commission Split vs. Salary Models

**Commission Split Model:**
Team members earn percentage of commissions they generate. Common structures:
- 50/50 split (agent keeps 50%, team lead keeps 50%)
- 60/40 split (agent keeps 60%, team lead keeps 40%)
- 70/30 split (agent keeps 70%, team lead keeps 30%)
- Graduated splits based on production levels

**Salary Model:**
Team members receive fixed compensation regardless of production:
- Base salary only
- Salary + small commission bonus
- Salary + performance bonuses
- Tiered salary levels by experience

**Hybrid Models:**
Combination approaches:
- Base salary + commission split
- Draw against commission
- Guaranteed minimum + split
- Performance-based salary adjustments

### Pros and Cons of Each Model

**Commission Split Advantages:**
- Performance-driven motivation
- Low fixed overhead
- Unlimited earning potential for agents
- Scales with production
- Attracts entrepreneurial personalities

**Commission Split Disadvantages:**
- Income variability for team members
- May encourage individual over team focus
- Less control over agent availability
- Difficult to budget team expenses
- High turnover in slow markets

**Salary Advantages:**
- Predictable expenses for team lead
- More control over agent schedules
- Easier to require admin tasks
- Attracts stability-focused agents
- Better for buyer's agents (time-intensive)
- Team-first culture

**Salary Disadvantages:**
- High fixed costs
- Less performance motivation
- Cap on agent earning potential
- Requires strong production from team lead
- Risk of overpaying underperformers

### Financial Breakeven Analysis

**Commission Split Model:**
Example: 60/40 split (agent keeps 60%)
- Agent closes $400,000 GCI
- Agent keeps: $240,000
- Team lead keeps: $160,000
- Team lead also covers: marketing, leads, admin support
- Net to team lead: $100,000-120,000

**Salary Model:**
Example: $60,000 salary + benefits
- Agent closes $400,000 GCI
- Agent salary + benefits: $75,000
- Team lead keeps: $325,000
- Team lead covers: marketing, leads, admin
- Net to team lead: $250,000-275,000

**Key Insight:** Salary model is more profitable when agents produce, but riskier in slow periods.

### Industry Benchmarks

**Average Team Compensation:**
- New buyer's agents: $40,000-60,000 salary or 50/50-60/40 split
- Experienced agents: $60,000-80,000 salary or 60/40-70/30 split
- Top producers: $80,000-120,000+ salary or 70/30+ split
- Team leaders: 20-50% of team's gross production

**Team Profitability Targets:**
- Team lead should retain 30-40% of gross team production
- Operating expenses: 15-25% of gross production
- Net profit to team lead: 15-25% of gross production

**Agent Production Minimums:**
- Buyer's agents should produce 2-3× their total cost
- Listing agents should produce 3-4× their total cost
- Mixed role agents should produce 2.5-3.5× their total cost

### Cost Analysis: Total Compensation

**Split Model True Cost:**
- 60/40 split on $400,000 production
- Team lead portion: $160,000
- Lead costs (40% to agent): $60,000
- Marketing: $20,000
- Administrative support: $15,000
- Technology/tools: $5,000
- **Total cost: $100,000**
- **Effective cost ratio: 25% of production**

**Salary Model True Cost:**
- Salary: $60,000
- Payroll taxes (7.65%): $4,590
- Benefits (health insurance): $6,000
- Workers comp/liability: $2,000
- Lead costs: $60,000
- Marketing: $20,000
- Administrative support: $15,000
- Technology/tools: $5,000
- **Total cost: $172,590**
- **Effective cost ratio: 43% of production**

### When to Use Each Model

**Best for Commission Splits:**
- Experienced agents joining team
- Agents with existing SOI/database
- Markets with established listing inventory
- Team lead has strong lead generation
- Scaling rapidly
- Entrepreneurial team culture

**Best for Salary:**
- New/training agents
- Buyer's agent specialists
- High-volume team model
- Team lead has massive lead flow
- Predictable business model needed
- Corporate team culture
- Markets with long sales cycles

**Best for Hybrid:**
- Retention of good agents
- Transition from new to experienced
- Guaranteed minimum performance
- Market uncertainty
- Attracting agents from competitors
- Seasonal market fluctuations

### Calculating Profitability by Model

**Key Metrics to Track:**
1. Cost per transaction by agent
2. Net margin per agent
3. Total team gross vs. expenses
4. Agent retention rate
5. Average agent tenure
6. Production per agent trend

**Profitability Formula:**
Net Profit = (Total GCI) - (Agent Comp + Leads + Marketing + Admin + Overhead)

**Target Benchmarks:**
- 30%+ net margin = excellent
- 20-30% net margin = good
- 15-20% net margin = acceptable
- <15% net margin = needs improvement

### Agent Recruitment Considerations

**What Attracts Agents:**
- Top producers prefer: Higher splits (70/30+)
- New agents prefer: Salary security + training
- Mid-level agents prefer: Hybrid with upside
- Lifestyle agents prefer: Flexible splits
- Career agents prefer: Growth path structure

**Competitive Positioning:**
- Market average split: 65/35
- Below market: Need other benefits (leads, admin, training)
- Above market: Can demand higher production
- Salary: Need strong lead generation + support system

### Transitioning Between Models

**Split to Salary Transition:**
Common when scaling to large team:
- Requires massive lead generation
- Need predictable agent availability
- Corporate structure preferred
- Higher profit margins on volume

**Salary to Split Transition:**
Common when:
- Lead costs become unsustainable
- Want to attract experienced agents
- Need to reduce fixed overhead
- Agents demand more upside potential

### Hidden Costs to Consider

**Split Model Hidden Costs:**
- Training time investment
- Onboarding and setup
- Quality control oversight
- Technology and CRM access
- E&O insurance increases
- Brokerage fees may increase with headcount

**Salary Model Hidden Costs:**
- Payroll processing fees
- HR compliance costs
- Unemployment insurance
- Potential severance costs
- Benefits administration
- State/federal employer taxes

### Scaling Considerations

**Small Team (2-4 agents):**
- Splits often work best
- Lower overhead
- Flexibility
- Easier to manage

**Medium Team (5-10 agents):**
- Hybrid models common
- Differentiate by role
- Some salary (buyers), some split (listings)
- Systems and structure critical

**Large Team (10+ agents):**
- Often salary or low draw + split
- Requires massive lead generation
- Corporate structure
- Multiple team leaders/pod structure

## How to Use This Calculator

Enter your team structure options:
1. Number of team members
2. Expected production per agent
3. Commission split percentage (if split model)
4. Salary amount (if salary model)
5. Lead generation costs
6. Marketing and overhead costs
7. Administrative support costs

Compare profitability and breakeven points between models.
`,
  },
  calculator: {
    fields: [
      {
        name: 'numberOfAgents',
        label: 'Number of Team Agents',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'avgProductionPerAgent',
        label: 'Average Production Per Agent ($GCI)',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'splitPercentage',
        label: 'Split Model: Agent Keep % (e.g., 60 for 60/40)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'salaryAmount',
        label: 'Salary Model: Annual Salary Per Agent ($)',
        type: 'number',
        defaultValue: 65000,
      },
      {
        name: 'leadCostPerAgent',
        label: 'Lead Generation Cost Per Agent ($)',
        type: 'number',
        defaultValue: 40000,
      },
      {
        name: 'marketingCost',
        label: 'Marketing & Branding Cost ($)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'adminCost',
        label: 'Administrative Support Cost ($)',
        type: 'number',
        defaultValue: 45000,
      },
      {
        name: 'overheadCost',
        label: 'Other Overhead (tech, office, etc.) ($)',
        type: 'number',
        defaultValue: 20000,
      },
    ],
    results: [
      { label: 'Total Team Production', isCurrency: true },
      { label: 'Split Model: Total Agent Compensation', isCurrency: true },
      { label: 'Split Model: Total Operating Costs', isCurrency: true },
      { label: 'Split Model: Net Profit to Team Lead', isCurrency: true },
      { label: 'Split Model: Profit Margin', isCurrency: false },
      { label: 'Salary Model: Total Agent Compensation', isCurrency: true },
      { label: 'Salary Model: Total Operating Costs', isCurrency: true },
      { label: 'Salary Model: Net Profit to Team Lead', isCurrency: true },
      { label: 'Salary Model: Profit Margin', isCurrency: false },
      { label: 'Profit Difference (Salary - Split)', isCurrency: true },
    ],
    calculate: (data) => {
      const {
        numberOfAgents,
        avgProductionPerAgent,
        splitPercentage,
        salaryAmount,
        leadCostPerAgent,
        marketingCost,
        adminCost,
        overheadCost,
      } = data;

      const agents = parseInt(numberOfAgents);
      const production = parseFloat(avgProductionPerAgent);
      const totalProduction = agents * production;

      // Split Model Calculations
      const splitAgentComp = totalProduction * (parseFloat(splitPercentage) / 100);
      const splitLeadCost = agents * parseFloat(leadCostPerAgent);
      const splitTotalCosts = splitAgentComp + splitLeadCost + parseFloat(marketingCost) + parseFloat(adminCost) + parseFloat(overheadCost);
      const splitNetProfit = totalProduction - splitTotalCosts;
      const splitMargin = (splitNetProfit / totalProduction) * 100;

      // Salary Model Calculations
      const salaryAgentComp = agents * parseFloat(salaryAmount);
      const salaryPayrollTax = salaryAgentComp * 0.0765; // 7.65% employer portion
      const salaryBenefits = agents * 6000; // Estimated benefits per agent
      const salaryTotalAgentCost = salaryAgentComp + salaryPayrollTax + salaryBenefits;
      const salaryLeadCost = agents * parseFloat(leadCostPerAgent);
      const salaryTotalCosts = salaryTotalAgentCost + salaryLeadCost + parseFloat(marketingCost) + parseFloat(adminCost) + parseFloat(overheadCost);
      const salaryNetProfit = totalProduction - salaryTotalCosts;
      const salaryMargin = (salaryNetProfit / totalProduction) * 100;

      const profitDiff = salaryNetProfit - splitNetProfit;

      return [
        { label: 'Total Team Production', value: `$${totalProduction.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Split Model: Total Agent Compensation', value: `$${splitAgentComp.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Split Model: Total Operating Costs', value: `$${splitTotalCosts.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Split Model: Net Profit to Team Lead', value: `$${splitNetProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Split Model: Profit Margin', value: `${splitMargin.toFixed(1)}%` },
        { label: 'Salary Model: Total Agent Compensation', value: `$${salaryTotalAgentCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Salary Model: Total Operating Costs', value: `$${salaryTotalCosts.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Salary Model: Net Profit to Team Lead', value: `$${salaryNetProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Salary Model: Profit Margin', value: `${salaryMargin.toFixed(1)}%` },
        { label: 'Profit Difference (Salary - Split)', value: `$${profitDiff.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
      ];
    },
  },
};
