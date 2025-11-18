import { CalculatorContent } from '@/types';

export const BROKER_PROFITABILITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Broker Profitability (Per-Agent) Calculator',
  description: 'Calculate per-agent profitability for brokerages including desk fees, splits, overhead costs, and net profit per agent.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'broker-profitability-calculator',
  article: {
    title: 'Brokerage Per-Agent Profitability: Complete Analysis Guide',
    content: `
Understanding per-agent profitability is essential for brokerage owners and managing brokers to build sustainable, profitable businesses while providing value to agents.

### Why Per-Agent Profitability Matters

**Business Sustainability:**
- Determines brokerage viability
- Identifies profitable agent profiles
- Guides recruitment decisions
- Informs retention strategies

**Growth Planning:**
- Calculate break-even agent count
- Project scaling profitability
- Determine optimal team size
- Plan office expansion

**Competitive Positioning:**
- Benchmark against industry
- Justify commission splits
- Evaluate service offerings
- Optimize value proposition

**Strategic Decisions:**
- Set desk fees and splits
- Allocate resources effectively
- Identify cost reduction opportunities
- Maximize profitability

### Brokerage Revenue Models

**Traditional Commission Split:**
- Agent earns 50-80% of GCI
- Brokerage retains 20-50%
- May have annual caps ($12K-18K typical)
- Recurring revenue per agent

**Desk Fee Model:**
- Monthly fee: $500-1,500
- Agent keeps 90-100% of commissions
- Predictable revenue stream
- Lower per-transaction involvement

**100% Commission with Transaction Fees:**
- High monthly fee: $800-2,000
- Agent keeps all commission
- Brokerage charges per-transaction fee: $250-500
- Administrative and technology services

**Hybrid Models:**
- Combination of split and desk fee
- Graduated splits based on production
- Cap then desk fee structure
- Flexibility for different agent levels

### Brokerage Costs Per Agent

**Direct Agent Costs:**
- Technology platform: $50-200/month
- CRM and tools: $30-100/month
- MLS and association fees (if brokerage pays): $100-200/month
- E&O insurance: $30-80/month
- Marketing materials: $20-100/month
- Total direct costs: $230-680/month per agent

**Overhead Allocation:**
- Office space: $200-800/month per desk
- Office manager/staff: $100-400/month per agent
- Utilities and operations: $50-150/month
- Training and development: $30-100/month
- Legal and compliance: $20-80/month
- Total overhead: $400-1,530/month per agent

**Support Services:**
- Transaction coordination: $100-300/month
- Marketing support: $50-200/month
- Administrative assistance: $80-250/month
- IT and tech support: $30-100/month
- Total support: $260-850/month

**Total Cost Per Agent: $890-3,060/month**

### Revenue Per Agent Analysis

**Low Producer (0-8 deals/year):**
- Average GCI: $60,000
- At 30% split: $18,000 brokerage revenue
- Annual revenue: $18,000
- Monthly revenue: $1,500
- Monthly costs: $1,200
- Monthly profit: $300 (17% margin)

**Mid Producer (12-24 deals/year):**
- Average GCI: $150,000
- At 30% split: $45,000 brokerage revenue
- Annual revenue: $45,000
- Monthly revenue: $3,750
- Monthly costs: $1,500
- Monthly profit: $2,250 (60% margin)

**High Producer (30+ deals/year):**
- Average GCI: $300,000
- At 25% split (better terms): $75,000
- Annual revenue: $75,000
- Monthly revenue: $6,250
- Monthly costs: $2,000
- Monthly profit: $4,250 (68% margin)

### Break-Even Analysis

**Minimum Agent Production:**
- Monthly costs per agent: $1,500
- At 30% brokerage split
- Agent must produce $5,000 GCI/month
- Equals $60,000 annual GCI minimum
- Approximately 6-8 deals/year at average pricing

**Brokerage Break-Even:**
- Total monthly overhead: $15,000
- Average profit per agent: $2,000/month
- Break-even at 7-8 agents
- Profitable growth after that

### Profitability Optimization Strategies

**Revenue Enhancement:**
- Recruit higher producers
- Retain top performers
- Add ancillary revenue streams
- Transaction coordination fees
- Referral fee sharing
- Training and coaching programs

**Cost Reduction:**
- Negotiate vendor contracts
- Virtual/hybrid office models
- Shared services platforms
- Technology automation
- Efficient processes

**Agent Mix Optimization:**
- Recruit selectively
- Focus on productivity
- Support agent development
- Remove low performers
- Team-based structures

**Value-Add Services:**
- Premium coaching programs
- Lead generation systems
- Advanced marketing platforms
- Transaction support
- Business development training

### Brokerage Models Comparison

**Traditional Full-Service:**
- Split: 60/40 to 70/30
- Full support and training
- Office space provided
- Higher overhead per agent
- Profit: $1,500-3,000/agent/month

**Low-Cost Virtual:**
- Split: 80/20 or desk fee
- Minimal overhead
- Cloud-based operations
- Lower services
- Profit: $800-1,500/agent/month

**Boutique/Luxury:**
- Split: 70/30 to 80/20
- High-touch services
- Premium positioning
- Higher revenue per agent
- Profit: $3,000-6,000/agent/month

**Team-Based Model:**
- Team leader agreements
- Override structures
- Shared resources
- Scalable profitability
- Profit: $1,000-2,500/agent/month

### Key Performance Indicators (KPIs)

**Revenue Metrics:**
- Average GCI per agent
- Brokerage revenue per agent
- Revenue growth rate
- Market share

**Profitability Metrics:**
- Gross profit per agent
- Net profit margin
- Operating expense ratio
- EBITDA per agent

**Agent Metrics:**
- Agent retention rate
- Average tenure
- Recruitment cost
- Agent satisfaction scores

**Efficiency Metrics:**
- Transactions per agent
- Revenue per transaction
- Cost per transaction
- Staff-to-agent ratio

### Building a Profitable Brokerage

**Year 1: Foundation**
- Start with 8-15 productive agents
- Focus on profitability over size
- Build systems and culture
- Target: 15-25% net margin

**Year 2-3: Growth**
- Scale to 25-50 agents
- Hire support staff efficiently
- Add service offerings
- Target: 20-30% net margin

**Year 4-5: Optimization**
- 50-100+ agents
- Multiple locations possible
- Strong brand and systems
- Target: 25-35% net margin

## How to Use This Calculator

Enter your brokerage metrics:
1. Number of agents
2. Average GCI per agent
3. Brokerage commission split percentage
4. Monthly cost per agent
5. Annual overhead costs
6. Desk fees or transaction fees

Get comprehensive analysis including:
- Total brokerage revenue
- Revenue per agent
- Costs per agent
- Profit per agent
- Net profit margin
- Break-even agent count
- Profitability forecast

This calculator helps brokerage owners and managing brokers make informed decisions about splits, fees, recruitment, and growth strategies to build profitable and sustainable real estate businesses.
`,
  },
  calculator: {
    fields: [
      {
        name: 'numberOfAgents',
        label: 'Number of Agents',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'avgGCIPerAgent',
        label: 'Average GCI Per Agent (Annual)',
        type: 'number',
        defaultValue: 120000,
      },
      {
        name: 'brokerageSplit',
        label: 'Brokerage Split (%)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'monthlyCostPerAgent',
        label: 'Monthly Cost Per Agent',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'annualOverhead',
        label: 'Annual Fixed Overhead',
        type: 'number',
        defaultValue: 120000,
      },
    ],
    results: [
      { label: 'Total Annual Revenue', isCurrency: true },
      { label: 'Revenue Per Agent', isCurrency: true },
      { label: 'Total Annual Costs', isCurrency: true },
      { label: 'Net Profit Per Agent', isCurrency: true },
      { label: 'Profit Margin', isCurrency: false },
    ],
    calculate: (data) => {
      const { numberOfAgents, avgGCIPerAgent, brokerageSplit, monthlyCostPerAgent, annualOverhead } = data;
      
      const agents = parseFloat(numberOfAgents);
      const gci = parseFloat(avgGCIPerAgent);
      const split = parseFloat(brokerageSplit) / 100;
      const monthlyCost = parseFloat(monthlyCostPerAgent);
      const overhead = parseFloat(annualOverhead);
      
      const revenuePerAgent = gci * split;
      const totalRevenue = revenuePerAgent * agents;
      
      const annualCostPerAgent = monthlyCost * 12;
      const totalAgentCosts = annualCostPerAgent * agents;
      const totalCosts = totalAgentCosts + overhead;
      
      const netProfit = totalRevenue - totalCosts;
      const netProfitPerAgent = netProfit / agents;
      const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(1);
      
      return [
        { label: 'Total Annual Revenue', value: `$${totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Revenue Per Agent', value: `$${revenuePerAgent.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Annual Costs', value: `$${totalCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Net Profit Per Agent', value: `$${netProfitPerAgent.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Profit Margin', value: `${profitMargin}%` },
      ];
    },
  },
};
