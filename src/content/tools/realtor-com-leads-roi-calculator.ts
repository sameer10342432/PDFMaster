import { CalculatorContent } from '@/types';

export const REALTOR_COM_LEADS_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Realtor.com Leads ROI Calculator',
  description: 'Calculate return on investment for Realtor.com ReadyConnect Concierge exclusive leads program.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'realtor-com-leads-roi-calculator',
  article: {
    title: 'Realtor.com Leads ROI: Complete Investment Analysis Guide',
    content: `
Realtor.com offers exclusive buyer and seller leads through ReadyConnect Concierge. Here's how to evaluate ROI.

### Realtor.com Lead Programs

**ReadyConnect Concierge:**
- Exclusive leads (not shared)
- Pre-screened by Realtor.com staff
- Higher quality than Zillow
- More expensive per lead
- Better conversion rates

**Pricing Models:**
- Pay per lead: $50-250 per lead
- Monthly subscription: $500-2,000/month
- Market dependent pricing
- Buyer leads: $50-150 each
- Seller leads: $100-250 each

### Lead Quality Comparison

**Realtor.com Advantages:**
- Exclusive (not sold to multiple agents)
- Pre-qualified by staff
- Higher intent to transact
- Better contact rates
- Typically 3-6 month timeline

**Conversion Expectations:**
- Buyer leads: 3-8% conversion
- Seller leads: 5-12% conversion
- Combined average: 4-10%
- Higher than Zillow (1-3%)

### Cost Analysis by Market

**Tier 1 Markets (NYC, LA, SF):**
- Buyer leads: $150-250 each
- Seller leads: $200-350 each
- Monthly budget needed: $2,000-5,000
- Expected closings: 1-3 per month

**Tier 2 Markets (Austin, Denver, Seattle):**
- Buyer leads: $80-150 each
- Seller leads: $120-200 each
- Monthly budget needed: $1,000-2,500
- Expected closings: 1-2 per month

**Tier 3 Markets (Smaller Metros):**
- Buyer leads: $50-100 each
- Seller leads: $80-150 each
- Monthly budget needed: $500-1,500
- Expected closings: 1-2 per month

### ROI Calculation Example

**Scenario: $1,500/month**
- 15 leads per month @ $100 each
- 6% conversion rate
- 0.9 closings/month = 11 closings/year
- $12,000 average commission
- Annual revenue: $132,000
- Annual cost: $18,000
- ROI: 633% (or 7.3x return)

### Lead Types and Value

**Buyer Leads:**
- Lower cost per lead
- Longer sales cycle (90-180 days)
- Lower conversion (3-6%)
- Referral potential

**Seller Leads:**
- Higher cost per lead
- Faster conversion (30-90 days)
- Higher conversion rate (8-12%)
- Higher commission potential

**Commercial/Investment:**
- Premium pricing
- Longer sales cycle
- Lower volume
- Higher commission per deal

### Success Factors

**What Makes Realtor.com Work:**
- Immediate response (under 5 min)
- Professional phone presence
- CRM tracking system
- Consistent follow-up
- Value proposition clarity
- Local market expertise

**Required Infrastructure:**
- Mobile lead alerts
- Auto-response system
- CRM integration
- Scripted follow-up sequence
- Database nurture campaign

### Maximizing ROI

**Best Practices:**
- Answer phone immediately
- Professional greeting script
- Qualify leads efficiently
- Set appointments on first call
- Multi-touch follow-up
- Track to closing
- Request reviews and referrals

**Technology Integration:**
- Realtor.com dashboard
- CRM sync (auto-import leads)
- Text messaging platform
- Email automation
- Call recording for training
- Lead scoring system

### Realtor.com vs Zillow

**Realtor.com Pros:**
- Exclusive leads
- Higher quality
- Better conversion rates
- Pre-screened
- Less competition

**Realtor.com Cons:**
- More expensive per lead
- Lower volume
- Limited markets
- Higher budget needed

**Zillow Pros:**
- Higher volume
- Lower cost per lead
- All markets
- Brand recognition

**Zillow Cons:**
- Shared leads (3-4 agents)
- Lower quality
- Speed critical
- Lower conversion

### When to Choose Realtor.com

**Good Fit:**
- Strong phone sales skills
- Professional follow-up system
- $1,000+ monthly budget
- Prefer quality over quantity
- High-ticket transactions
- Established agent

**Not a Good Fit:**
- Limited budget (<$500/month)
- Inconsistent availability
- Poor conversion skills
- Need high volume
- Brand new agent

### Performance Tracking

**Key Metrics:**
- Cost per lead
- Contact rate (% reached)
- Qualification rate
- Appointment set rate
- Show rate
- Contract conversion rate
- Cost per closing
- ROI percentage

**Monthly Review Checklist:**
- Total leads received
- Total spent
- Contacts made
- Appointments set
- Contracts signed
- Closings completed
- Calculate ROI
- Adjust budget

### 60-Day Test Period

**Trial Approach:**
- Start with $1,000-1,500/month
- Track every lead meticulously
- Measure response time
- Test scripts and approaches
- Calculate preliminary ROI
- Scale up if positive
- Adjust or cancel if negative

**Break-Even Analysis:**
- Calculate cost per closing
- Compare to average commission
- Need 2-3x minimum for profit
- Account for time investment
- Factor in long-term database value

## How to Use This Calculator

Enter your Realtor.com lead data:
1. Monthly lead budget
2. Average cost per lead
3. Your conversion rate percentage
4. Average commission per sale
5. Campaign duration in months

Get complete ROI analysis with projections.
`,
  },
  calculator: {
    fields: [
      {
        name: 'monthlyBudget',
        label: 'Monthly Lead Budget',
        type: 'number',
        defaultValue: 1200,
      },
      {
        name: 'costPerLead',
        label: 'Average Cost Per Lead',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'conversionRate',
        label: 'Conversion Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Sale',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'months',
        label: 'Campaign Duration (Months)',
        type: 'number',
        defaultValue: 6,
      },
    ],
    results: [
      { label: 'Total Investment', isCurrency: true },
      { label: 'Total Leads Purchased', isCurrency: false },
      { label: 'Expected Closings', isCurrency: false },
      { label: 'Cost Per Closing', isCurrency: true },
      { label: 'Total Revenue Generated', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'ROI Percentage', isCurrency: false },
    ],
    calculate: (data) => {
      const { monthlyBudget, costPerLead, conversionRate, avgCommission, months } = data;
      
      const totalInvestment = parseFloat(monthlyBudget) * parseInt(months);
      const totalLeads = totalInvestment / Math.max(1, parseFloat(costPerLead));
      const expectedClosings = totalLeads * (parseFloat(conversionRate) / 100);
      const costPerClosing = expectedClosings > 0 ? totalInvestment / expectedClosings : 0;
      const totalRevenue = expectedClosings * parseFloat(avgCommission);
      const netProfit = totalRevenue - totalInvestment;
      const roiPercentage = totalInvestment > 0 ? ((netProfit / totalInvestment) * 100) : 0;
      
      return [
        { label: 'Total Investment', value: `$${Math.round(totalInvestment).toLocaleString()}` },
        { label: 'Total Leads Purchased', value: Math.round(totalLeads).toString() },
        { label: 'Expected Closings', value: expectedClosings.toFixed(1) },
        { label: 'Cost Per Closing', value: `$${Math.round(costPerClosing).toLocaleString()}` },
        { label: 'Total Revenue Generated', value: `$${Math.round(totalRevenue).toLocaleString()}` },
        { label: 'Net Profit', value: `$${Math.round(netProfit).toLocaleString()}` },
        { label: 'ROI Percentage', value: `${roiPercentage.toFixed(1)}%` },
      ];
    },
  },
};
