import { CalculatorContent } from '@/types';

export const COST_PER_LEAD_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost Per Lead (CPL) Calculator',
  description: 'Calculate your marketing cost per lead and optimize your real estate lead generation budget across different channels.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'cost-per-lead-calculator',
  article: {
    title: 'Cost Per Lead Calculator: Optimize Your Real Estate Marketing Budget',
    content: `
Understanding your Cost Per Lead (CPL) is essential for real estate professionals to optimize marketing spend and maximize return on investment across different lead generation channels.

### What is Cost Per Lead?

Cost Per Lead (CPL) is the total amount spent on marketing divided by the number of leads generated. It helps you understand which marketing channels are most cost-effective for your real estate business.

**Formula:** CPL = Total Marketing Spend ÷ Number of Leads Generated

### Industry Benchmarks for Real Estate CPL

**Digital Marketing Channels:**
- Facebook Ads: $15-40 per lead
- Google Ads (PPC): $30-80 per lead
- Instagram Ads: $20-50 per lead
- YouTube Ads: $25-60 per lead
- Zillow/Realtor.com: $50-150 per lead

**Traditional Marketing:**
- Direct Mail: $40-100 per lead
- Print Advertising: $80-200 per lead
- Billboards: $100-300 per lead
- TV/Radio: $150-400 per lead

**Organic/Content Marketing:**
- SEO/Blog Content: $10-30 per lead
- Social Media (organic): $5-20 per lead
- Email Marketing: $5-15 per lead
- Referrals: $0-10 per lead

### Factors Affecting CPL

**Market Conditions:**
- Competitive markets have higher CPL
- Luxury markets: $100-500 per lead
- Entry-level markets: $20-60 per lead
- Rural areas: $10-40 per lead
- Urban areas: $40-120 per lead

**Campaign Quality:**
- Targeting accuracy affects cost efficiency
- Ad creative and messaging impact
- Landing page conversion rates
- Offer value and relevance

**Seasonality:**
- Spring/Summer: Higher competition, higher CPL
- Fall/Winter: Lower competition, lower CPL
- Holiday periods: Variable CPL

### Optimizing Your Cost Per Lead

**Best Practices:**
1. **Target Audience Refinement**
   - Use demographic and geographic targeting
   - Leverage lookalike audiences
   - Exclude unqualified segments

2. **A/B Testing**
   - Test ad creative variations
   - Compare different messaging angles
   - Optimize landing pages

3. **Multi-Channel Strategy**
   - Don't rely on single channel
   - Diversify to reduce risk
   - Cross-channel remarketing

4. **Lead Quality vs. Quantity**
   - Lower CPL doesn't always mean better ROI
   - Focus on conversion rates
   - Track lead-to-client ratio

### Calculating True Lead Cost

**Total Marketing Investment:**
- Ad spend
- Creative development
- Landing page costs
- CRM and tools
- Time investment
- Agency/contractor fees

**Hidden Costs:**
- Follow-up time
- Lead qualification time
- Nurturing resources
- Lost opportunity cost

### Channel Comparison Example

**Facebook Ads Campaign:**
- Spend: $1,000
- Leads: 40
- CPL: $25
- Conversion rate: 8%
- Clients: 3.2
- Cost per client: $312.50

**Google Ads Campaign:**
- Spend: $1,500
- Leads: 30
- CPL: $50
- Conversion rate: 12%
- Clients: 3.6
- Cost per client: $416.67

**Analysis:** Facebook has lower CPL, but Google has better conversion rate. Evaluate both CPL and cost per acquisition (CPA).

### Setting Your CPL Budget

**Calculate Maximum Allowable CPL:**
1. Average commission per deal: $10,000
2. Lead-to-client conversion rate: 5%
3. Desired profit margin: 60%
4. Maximum CPL = $10,000 × 5% × 40% = $200

### Improving Lead Quality

**Qualification Criteria:**
- Pre-qualified financially
- Ready to move timeline
- Realistic price expectations
- Exclusive vs. shared leads

**Lead Nurturing:**
- Automated drip campaigns
- Personal follow-up schedule
- Value-added content
- Relationship building

## How to Use This Calculator

Enter your marketing data:
1. Total marketing spend
2. Number of leads generated
3. Lead-to-client conversion rate
4. Average commission per client
5. Time spent per lead (hours)
6. Your hourly value

Get comprehensive CPL analysis and optimization insights.
`,
  },
  calculator: {
    fields: [
      {
        name: 'marketingSpend',
        label: 'Total Marketing Spend ($)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'leadsGenerated',
        label: 'Number of Leads Generated',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'conversionRate',
        label: 'Lead-to-Client Conversion Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Client ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'timePerLead',
        label: 'Time Spent Per Lead (hours)',
        type: 'number',
        defaultValue: 0.5,
      },
      {
        name: 'hourlyValue',
        label: 'Your Hourly Value ($)',
        type: 'number',
        defaultValue: 50,
      },
    ],
    results: [
      { label: 'Cost Per Lead (CPL)', isCurrency: true },
      { label: 'Expected Number of Clients', isCurrency: false },
      { label: 'Cost Per Acquisition (CPA)', isCurrency: true },
      { label: 'Total Time Investment', isCurrency: false },
      { label: 'Time Cost Value', isCurrency: true },
      { label: 'True Cost Per Lead (Including Time)', isCurrency: true },
      { label: 'Expected Revenue', isCurrency: true },
      { label: 'Marketing ROI', isCurrency: false },
    ],
    calculate: (data) => {
      const {
        marketingSpend,
        leadsGenerated,
        conversionRate,
        avgCommission,
        timePerLead,
        hourlyValue,
      } = data;

      const cpl = parseFloat(marketingSpend) / parseInt(leadsGenerated);
      const expectedClients = parseInt(leadsGenerated) * (parseFloat(conversionRate) / 100);
      const cpa = expectedClients > 0 ? parseFloat(marketingSpend) / expectedClients : 0;
      const totalTimeHours = parseInt(leadsGenerated) * parseFloat(timePerLead);
      const timeCostValue = totalTimeHours * parseFloat(hourlyValue);
      const trueCPL = (parseFloat(marketingSpend) + timeCostValue) / parseInt(leadsGenerated);
      const expectedRevenue = expectedClients * parseFloat(avgCommission);
      const totalCost = parseFloat(marketingSpend) + timeCostValue;
      const roi = totalCost > 0 ? ((expectedRevenue - totalCost) / totalCost) * 100 : 0;

      return [
        { label: 'Cost Per Lead (CPL)', value: `$${cpl.toFixed(2)}` },
        { label: 'Expected Number of Clients', value: expectedClients.toFixed(1) },
        { label: 'Cost Per Acquisition (CPA)', value: `$${cpa.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
        { label: 'Total Time Investment', value: `${totalTimeHours.toFixed(1)} hours` },
        { label: 'Time Cost Value', value: `$${timeCostValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'True Cost Per Lead (Including Time)', value: `$${trueCPL.toFixed(2)}` },
        { label: 'Expected Revenue', value: `$${expectedRevenue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Marketing ROI', value: `${roi.toFixed(1)}%` },
      ];
    },
  },
};
