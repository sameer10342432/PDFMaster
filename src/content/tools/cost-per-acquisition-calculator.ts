import { CalculatorContent } from '@/types';

export const COST_PER_ACQUISITION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost Per Acquisition (CPA) Calculator',
  description: 'Calculate your cost per acquisition for real estate clients and optimize your marketing spend to maximize profitability.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'cost-per-acquisition-calculator',
  article: {
    title: 'Cost Per Acquisition Calculator: Master Your Real Estate Client Acquisition Costs',
    content: `
Cost Per Acquisition (CPA) is one of the most critical metrics for real estate professionals. Understanding your true cost to acquire each client helps you make informed decisions about marketing spend and business growth.

### What is Cost Per Acquisition (CPA)?

Cost Per Acquisition (CPA) represents the total cost required to convert a lead into a paying client. Unlike Cost Per Lead (CPL), CPA accounts for the entire journey from initial contact to closed transaction.

**Formula:** CPA = Total Marketing & Sales Costs ÷ Number of Clients Acquired

### Industry Benchmarks for Real Estate CPA

**By Agent Experience:**
- New agents (0-2 years): $800-2,500 per client
- Mid-level agents (3-5 years): $500-1,500 per client
- Experienced agents (5+ years): $300-1,000 per client
- Top producers (10+ years): $200-600 per client

**By Market Type:**
- Luxury market: $2,000-8,000 per client
- Mid-range market: $500-2,000 per client
- Entry-level market: $300-1,000 per client
- Investment properties: $800-2,500 per client

**By Lead Source:**
- Referrals: $50-300 per client
- Sphere of influence: $100-500 per client
- Online advertising: $800-2,500 per client
- Purchased leads: $1,500-4,000 per client
- Open houses: $400-1,200 per client

### Components of Total Acquisition Cost

**Direct Marketing Costs:**
- Advertising spend (digital and traditional)
- Lead generation services
- Marketing materials and collateral
- Website and SEO expenses
- Social media advertising

**Indirect Costs:**
- CRM and technology tools
- Time spent on lead nurturing
- Follow-up and qualification time
- Administrative support
- Training and education

**Hidden Costs:**
- Opportunity cost of time
- Failed lead nurturing attempts
- Marketing waste and inefficiency
- Learning curve on new platforms

### Calculating Your Maximum Allowable CPA

**Step 1: Know Your Average Commission**
- Buyer side: $8,000-12,000 average
- Seller side: $8,000-12,000 average
- Dual agency: $16,000-24,000 average

**Step 2: Determine Your Target Profit Margin**
- Minimum recommended: 40%
- Industry average: 50-60%
- Top performers: 65-75%

**Step 3: Calculate Maximum CPA**
Maximum CPA = Average Commission × (1 - Target Profit Margin - Operating Expense %)

**Example:**
- Average commission: $10,000
- Target profit margin: 50%
- Operating expenses: 20%
- Maximum CPA = $10,000 × (1 - 0.50 - 0.20) = $3,000

### Improving Your CPA

**Optimize Lead Quality:**
- Better targeting reduces waste
- Pre-qualification saves time
- Focus on high-intent leads
- Use lead scoring systems

**Improve Conversion Rates:**
- Every 1% improvement in conversion reduces CPA
- Better follow-up systems
- Automated nurture campaigns
- Personalized communication

**Reduce Marketing Waste:**
- Track every dollar spent
- Eliminate underperforming channels
- A/B test all campaigns
- Regular performance audits

**Leverage Low-Cost Channels:**
- Referral programs: Lowest CPA
- Content marketing: Long-term value
- Email marketing: High ROI
- Social media (organic): Time investment

### CPA vs. Client Lifetime Value (CLV)

**Healthy Ratio:**
- CLV should be 3-5× your CPA
- Example: If CPA = $1,000, CLV should be $3,000-5,000
- Accounts for repeat business and referrals

**Increasing CLV:**
- Encourage repeat business
- Ask for referrals systematically
- Provide exceptional service
- Stay top-of-mind with past clients

### Channel Performance Analysis

**Facebook Ads Example:**
- Ad spend: $3,000/month
- Leads generated: 60
- Conversion rate: 5%
- Clients: 3
- CPA: $1,000

**Google Ads Example:**
- Ad spend: $4,000/month
- Leads generated: 40
- Conversion rate: 10%
- Clients: 4
- CPA: $1,000

**Analysis:** Both have same CPA, but Google has higher lead quality with 2× conversion rate.

### Time-Based CPA Analysis

**Consider Your Time Investment:**
- Time spent on lead follow-up
- Showing properties
- Transaction management
- Client communication
- Your hourly value matters

**Example:**
- Marketing spend: $1,500
- Time investment: 30 hours
- Hourly value: $75
- Time cost: $2,250
- True CPA: $3,750

### Setting CPA Goals by Business Stage

**Growth Mode:**
- Higher CPA acceptable (up to 60% of commission)
- Focus on building client base
- Long-term CLV justifies higher CPA

**Profitability Mode:**
- Lower CPA target (30-40% of commission)
- Focus on efficient channels
- Maximize profit per transaction

**Scaling Mode:**
- Balanced CPA (40-50% of commission)
- Predictable acquisition costs
- Sustainable growth rate

## How to Use This Calculator

Enter your acquisition data:
1. Total marketing and sales costs
2. Number of clients acquired
3. Average commission per client
4. Time spent per client acquisition (hours)
5. Your hourly value
6. Additional operating costs

Get comprehensive CPA analysis and profitability insights.
`,
  },
  calculator: {
    fields: [
      {
        name: 'totalMarketingCost',
        label: 'Total Marketing & Sales Costs ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'clientsAcquired',
        label: 'Number of Clients Acquired',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Client ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'timePerClient',
        label: 'Time Spent Per Client Acquisition (hours)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'hourlyValue',
        label: 'Your Hourly Value ($)',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'operatingCosts',
        label: 'Additional Operating Costs ($)',
        type: 'number',
        defaultValue: 1000,
      },
    ],
    results: [
      { label: 'Cost Per Acquisition (CPA)', isCurrency: true },
      { label: 'Total Time Investment', isCurrency: false },
      { label: 'Time Cost Value', isCurrency: true },
      { label: 'True CPA (Including Time)', isCurrency: true },
      { label: 'Total Revenue Generated', isCurrency: true },
      { label: 'Total Costs (All Inclusive)', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'Profit Margin', isCurrency: false },
      { label: 'CPA as % of Commission', isCurrency: false },
    ],
    calculate: (data) => {
      const {
        totalMarketingCost,
        clientsAcquired,
        avgCommission,
        timePerClient,
        hourlyValue,
        operatingCosts,
      } = data;

      const clients = parseInt(clientsAcquired);
      const cpa = parseFloat(totalMarketingCost) / clients;
      const totalTimeHours = clients * parseFloat(timePerClient);
      const timeCostValue = totalTimeHours * parseFloat(hourlyValue);
      const trueCPA = (parseFloat(totalMarketingCost) + timeCostValue + parseFloat(operatingCosts)) / clients;
      const totalRevenue = clients * parseFloat(avgCommission);
      const totalCosts = parseFloat(totalMarketingCost) + timeCostValue + parseFloat(operatingCosts);
      const netProfit = totalRevenue - totalCosts;
      const profitMargin = (netProfit / totalRevenue) * 100;
      const cpaPercentage = (cpa / parseFloat(avgCommission)) * 100;

      return [
        { label: 'Cost Per Acquisition (CPA)', value: `$${cpa.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
        { label: 'Total Time Investment', value: `${totalTimeHours.toFixed(1)} hours` },
        { label: 'Time Cost Value', value: `$${timeCostValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'True CPA (Including Time)', value: `$${trueCPA.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
        { label: 'Total Revenue Generated', value: `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Total Costs (All Inclusive)', value: `$${totalCosts.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Net Profit', value: `$${netProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Profit Margin', value: `${profitMargin.toFixed(1)}%` },
        { label: 'CPA as % of Commission', value: `${cpaPercentage.toFixed(1)}%` },
      ];
    },
  },
};
