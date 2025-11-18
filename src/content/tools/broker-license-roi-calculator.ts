import { CalculatorContent } from '@/types';

export const BROKER_LICENSE_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Broker License ROI Calculator',
  description: 'Calculate the ROI of upgrading to a broker license including higher commission splits, team building potential, and brokerage ownership opportunities.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'broker-license-roi-calculator',
  article: {
    title: 'Broker License ROI: Complete Guide for Real Estate Agents',
    content: `
Upgrading from a real estate agent to a broker license opens doors to higher earnings, team leadership, and brokerage ownership opportunities.

### Benefits of Getting Your Broker License

**Higher Commission Splits:**
- Agent splits: 50-70% typical
- Broker splits: 70-100% common
- Additional $10,000-30,000 annual income
- Negotiate better terms with brokerage

**Team Building Opportunities:**
- Recruit agents under you
- Earn overrides on team production
- Build passive income streams
- Scale beyond personal production

**Brokerage Ownership:**
- Open your own brokerage
- Recruit multiple agents
- Create long-term asset
- Build equity in business

**Professional Credibility:**
- Higher trust with clients
- Enhanced market positioning
- More referrals from professionals
- Luxury market opportunities

### Costs of Getting Broker License

**Education Requirements:**
- Broker pre-licensing courses: $300-800
- Additional state requirements: $200-500
- Study materials and prep: $100-300
- Total education: $600-1,600

**Examination and Licensing:**
- Broker exam fee: $50-300
- License application: $100-400
- Background check: $50-100
- Total licensing fees: $200-800

**Experience Requirements:**
- 1-3 years as licensed agent (varies by state)
- Minimum transaction requirements
- Continuing education
- Time investment: 60-120 hours

**Annual Maintenance:**
- License renewal: $100-500/year
- Continuing education: $100-300/year
- E&O insurance increase: $200-500/year
- Total annual: $400-1,300/year

### Revenue Opportunities

**Improved Commission Split:**
- If closing $500K GCI at 60% split = $300K net
- Same production at 85% split = $425K net
- Annual increase: $125,000

**Team Override Income:**
- 5 agents producing $300K each = $1.5M
- 20% override on team = $300K
- Less expenses (20%) = $240K net override income

**Brokerage Owner Income:**
- 20 agents at average $200K GCI = $4M
- Brokerage keeps 30% = $1.2M gross
- After overhead (60%) = $480K net profit

### Career Path Options

**Associate Broker:**
- Work under managing broker
- Better split arrangement
- No brokerage liability
- Focus on sales with better compensation

**Team Leader/Broker:**
- Build and manage team
- Recruit producing agents
- Override income streams
- Leadership role with passive income

**Brokerage Owner:**
- Full independence
- Recruit unlimited agents
- Build sellable business asset
- Long-term wealth building

### Time Investment Required

**Getting Licensed:**
- Coursework: 40-90 hours
- Exam preparation: 20-40 hours
- Application process: 5-10 hours
- Total time: 65-140 hours

**Managing as Broker:**
- Team oversight: 5-10 hours/week
- Recruitment activities: 3-5 hours/week
- Administrative duties: 2-5 hours/week
- Training and development: 2-4 hours/week

### Realistic ROI Timeline

**Year 1:**
- Costs: $1,000-2,400 (licensing + fees)
- Improved split benefit: $15,000-40,000
- Net benefit: $12,600-37,600
- ROI: 525-1,467%

**Years 2-3:**
- Minimal costs: $400-1,300/year
- Team building phase
- Growing override income: $20,000-80,000
- Expanding opportunities

**Years 4-5+:**
- Established team or brokerage
- Multiple income streams
- $100,000-500,000+ additional annual income
- Long-term business asset

## How to Use This Calculator

Enter your business metrics:
1. Current annual GCI (Gross Commission Income)
2. Current commission split percentage
3. Expected broker split percentage
4. Licensing and education costs
5. Team building goals (number of agents)
6. Expected override percentage

Get comprehensive analysis including:
- Total investment required
- Annual split improvement benefit
- Team override income potential
- Break-even timeline
- 5-year cumulative ROI
- Net wealth increase

This calculator helps you make an informed decision about pursuing your broker license based on your career goals and financial situation.
`,
  },
  calculator: {
    fields: [
      {
        name: 'annualGCI',
        label: 'Annual Gross Commission Income (GCI)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'currentSplit',
        label: 'Current Agent Split (%)',
        type: 'number',
        defaultValue: 65,
      },
      {
        name: 'brokerSplit',
        label: 'Expected Broker Split (%)',
        type: 'number',
        defaultValue: 85,
      },
      {
        name: 'licensingCost',
        label: 'Total Licensing Cost',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'teamAgents',
        label: 'Number of Team Agents (Year 3)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'avgTeamGCI',
        label: 'Average GCI Per Team Agent',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'overridePercent',
        label: 'Team Override Percentage (%)',
        type: 'number',
        defaultValue: 20,
      },
    ],
    results: [
      { label: 'Total Investment', isCurrency: true },
      { label: 'Year 1 Split Improvement', isCurrency: true },
      { label: 'Year 3 Team Override Income', isCurrency: true },
      { label: '5-Year Cumulative Benefit', isCurrency: true },
      { label: 'ROI Percentage (5 Years)', isCurrency: false },
    ],
    calculate: (data) => {
      const { annualGCI, currentSplit, brokerSplit, licensingCost, teamAgents, avgTeamGCI, overridePercent } = data;
      
      const totalInvestment = parseFloat(licensingCost) + (800 * 4); // 4 years of increased fees
      const currentIncome = parseFloat(annualGCI) * (parseFloat(currentSplit) / 100);
      const brokerIncome = parseFloat(annualGCI) * (parseFloat(brokerSplit) / 100);
      const splitImprovement = brokerIncome - currentIncome;
      
      const teamOverrideIncome = parseFloat(teamAgents) * parseFloat(avgTeamGCI) * (parseFloat(overridePercent) / 100);
      
      const year1Benefit = splitImprovement;
      const year2Benefit = splitImprovement;
      const year3Benefit = splitImprovement + teamOverrideIncome;
      const year4Benefit = splitImprovement + teamOverrideIncome;
      const year5Benefit = splitImprovement + teamOverrideIncome;
      
      const cumulativeBenefit = year1Benefit + year2Benefit + year3Benefit + year4Benefit + year5Benefit;
      const netBenefit = cumulativeBenefit - totalInvestment;
      const roiPercentage = ((netBenefit / totalInvestment) * 100).toFixed(1);
      
      return [
        { label: 'Total Investment', value: `$${totalInvestment.toLocaleString()}` },
        { label: 'Year 1 Split Improvement', value: `$${splitImprovement.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Year 3 Team Override Income', value: `$${teamOverrideIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: '5-Year Cumulative Benefit', value: `$${netBenefit.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'ROI Percentage (5 Years)', value: `${roiPercentage}%` },
      ];
    },
  },
};
