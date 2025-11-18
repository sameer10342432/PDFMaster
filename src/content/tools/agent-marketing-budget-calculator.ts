import { CalculatorContent } from '@/types';

export const AGENT_MARKETING_BUDGET_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Agent Marketing Budget Calculator',
  description: 'Calculate recommended marketing budget for real estate agents based on income goals and business stage.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'agent-marketing-budget-calculator',
  article: {
    title: 'Real Estate Agent Marketing Budget: Complete Planning Guide',
    content: `
Proper marketing budget allocation is critical for growing your real estate business sustainably.

### Marketing Budget Guidelines

**Industry Standards:**
- New agents (0-2 years): 15-20% of GCI
- Growing agents (3-5 years): 10-15% of GCI
- Established agents (5+ years): 8-12% of GCI
- Top producers: 5-10% of GCI

**GCI = Gross Commission Income**

### Marketing Budget Breakdown

**Digital Marketing (40-50%):**
- Social media ads: $500-2,000/month
- Google Ads/PPC: $500-1,500/month
- Website and SEO: $200-500/month
- Email marketing: $50-200/month
- CRM software: $100-300/month

**Traditional Marketing (20-30%):**
- Direct mail postcards: $300-1,000/month
- Print advertising: $200-500/month
- Signage and yard signs: $100-300/month
- Business cards/brochures: $50-200/month

**Content & Media (15-25%):**
- Professional photography: $150-300 per listing
- Videography: $200-500 per listing
- Virtual staging: $50-150 per listing
- Drone footage: $150-300 per listing
- Content creation: $200-800/month

**Events & Networking (10-15%):**
- Open houses: $100-300 each
- Client appreciation events: $500-2,000/year
- Networking events: $100-300/month
- Sponsorships: $500-2,000/year

**Branding & Collateral (5-10%):**
- Professional headshots: $200-500/year
- Logo and brand design: $500-2,000 (one-time)
- Promotional items: $200-500/quarter

### Budget by Agent Type

**New Agent (Year 1):**
- Target GCI: $40,000
- Marketing budget: $6,000-8,000 (15-20%)
- Monthly: $500-670
- Focus: Digital presence, networking, low-cost tactics

**Growing Agent (Year 3):**
- Target GCI: $100,000
- Marketing budget: $10,000-15,000 (10-15%)
- Monthly: $830-1,250
- Focus: Paid ads, professional media, database marketing

**Established Agent (Year 5+):**
- Target GCI: $200,000
- Marketing budget: $16,000-24,000 (8-12%)
- Monthly: $1,330-2,000
- Focus: Brand building, retention, referral systems

**Top Producer:**
- Target GCI: $500,000+
- Marketing budget: $25,000-50,000 (5-10%)
- Monthly: $2,080-4,165
- Focus: Team building, assistant support, premium positioning

### ROI-Focused Allocation

**High ROI Tactics (Prioritize):**
- Past client database marketing: 5-10x ROI
- Referral programs: 10-20x ROI
- Sphere of influence marketing: 8-15x ROI
- Targeted Facebook ads: 3-8x ROI
- Google local service ads: 4-10x ROI

**Medium ROI Tactics:**
- Direct mail to farm area: 2-5x ROI
- Open house marketing: 2-4x ROI
- Content marketing/SEO: 3-7x ROI (long-term)
- Zillow/Realtor.com leads: 2-4x ROI

**Lower ROI Tactics (Use Selectively):**
- General print advertising: 1-2x ROI
- Billboard advertising: 1-3x ROI
- Generic online display ads: 1-2x ROI
- Mass market radio/TV: 1-2x ROI

### Monthly Budget Allocation

**Sample $1,000/Month Budget:**
- Social media ads: $300
- Google Ads: $200
- CRM/software: $150
- Direct mail: $150
- Content creation: $100
- Photography fund: $100

**Sample $2,500/Month Budget:**
- Social media ads: $800
- Google Ads: $500
- Professional media: $400
- Direct mail: $300
- CRM/tech stack: $250
- Events/networking: $150
- Content/SEO: $100

### Adjusting Budget Over Time

**Increase Marketing When:**
- Entering new market area
- Launching new service line
- Slow season approaching
- Building new farm area
- Below transaction goals

**Decrease Marketing When:**
- Exceeding capacity
- Strong referral pipeline
- Market shifting rapidly
- Cash flow constraints
- Testing and optimizing

### Tracking Marketing ROI

**Key Metrics:**
- Cost per lead
- Lead conversion rate
- Cost per closing
- Marketing ROI percentage
- Customer acquisition cost

**Monthly Review:**
- Track all marketing expenses
- Attribute leads to sources
- Calculate ROI by channel
- Adjust spending accordingly
- Test new tactics regularly

## How to Use This Calculator

Enter your business information:
1. Target annual gross commission income (GCI)
2. Years of experience
3. Number of target transactions per year
4. Current marketing budget percentage
5. Preferred marketing focus

Get recommended marketing budget allocation.
`,
  },
  calculator: {
    fields: [
      {
        name: 'targetGCI',
        label: 'Target Annual GCI',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'experience',
        label: 'Years of Experience',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'transactions',
        label: 'Target Transactions Per Year',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'budgetPercentage',
        label: 'Marketing Budget % of GCI',
        type: 'number',
        defaultValue: 12,
      },
    ],
    results: [
      { label: 'Recommended Annual Marketing Budget', isCurrency: true },
      { label: 'Monthly Marketing Budget', isCurrency: true },
      { label: 'Budget Per Transaction', isCurrency: true },
      { label: 'Digital Marketing Allocation', isCurrency: true },
      { label: 'Traditional Marketing Allocation', isCurrency: true },
      { label: 'Content & Media Allocation', isCurrency: true },
    ],
    calculate: (data) => {
      const { targetGCI, experience, transactions, budgetPercentage } = data;
      
      let recommendedPercent = parseFloat(budgetPercentage);
      
      if (parseInt(experience) < 2) recommendedPercent = Math.max(recommendedPercent, 15);
      else if (parseInt(experience) < 5) recommendedPercent = Math.max(recommendedPercent, 10);
      else recommendedPercent = Math.max(recommendedPercent, 8);
      
      const annualBudget = parseFloat(targetGCI) * (recommendedPercent / 100);
      const monthlyBudget = Math.round(annualBudget / 12);
      const perTransaction = Math.round(annualBudget / Math.max(1, parseInt(transactions)));
      
      const digitalAllocation = Math.round(annualBudget * 0.45);
      const traditionalAllocation = Math.round(annualBudget * 0.25);
      const contentAllocation = Math.round(annualBudget * 0.20);
      
      return [
        { label: 'Recommended Annual Marketing Budget', value: `$${Math.round(annualBudget).toLocaleString()}` },
        { label: 'Monthly Marketing Budget', value: `$${monthlyBudget.toLocaleString()}` },
        { label: 'Budget Per Transaction', value: `$${perTransaction.toLocaleString()}` },
        { label: 'Digital Marketing Allocation', value: `$${digitalAllocation.toLocaleString()}` },
        { label: 'Traditional Marketing Allocation', value: `$${traditionalAllocation.toLocaleString()}` },
        { label: 'Content & Media Allocation', value: `$${contentAllocation.toLocaleString()}` },
      ];
    },
  },
};
