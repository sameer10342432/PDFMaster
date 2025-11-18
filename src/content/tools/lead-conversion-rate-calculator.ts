import { CalculatorContent } from '@/types';

export const LEAD_CONVERSION_RATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Lead Conversion Rate Calculator',
  description: 'Calculate and analyze your real estate lead conversion rates across different stages of the sales funnel to optimize your conversion strategy.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'lead-conversion-rate-calculator',
  article: {
    title: 'Lead Conversion Rate Calculator: Optimize Your Real Estate Sales Funnel',
    content: `
Lead conversion rate is the most critical metric for measuring the effectiveness of your real estate sales process. Understanding and optimizing conversion rates at each stage of your funnel dramatically impacts your bottom line.

### What is Lead Conversion Rate?

Lead conversion rate is the percentage of leads that successfully convert into clients. It measures how effectively you turn prospects into paying customers.

**Formula:** Conversion Rate = (Number of Clients ÷ Total Leads) × 100

### Industry Benchmarks for Real Estate Conversion Rates

**Overall Conversion Rates:**
- Industry average: 0.4-1.2%
- Good performance: 1.5-3%
- Excellent performance: 3-5%
- Top performers: 5-10%

**By Lead Source:**
- Referrals: 15-30% conversion
- Sphere of influence: 10-25% conversion
- Past clients: 20-40% conversion
- Online leads (PPC): 0.5-2% conversion
- Facebook leads: 0.3-1.5% conversion
- Zillow/Realtor.com: 0.5-2% conversion
- Open house: 2-5% conversion
- For Sale By Owner (FSBO): 1-3% conversion
- Expired listings: 2-6% conversion

**By Lead Quality:**
- Pre-qualified leads: 8-15% conversion
- Warm leads (engaged): 3-8% conversion
- Cold leads (unresponsive): 0.1-0.5% conversion
- Exclusive leads: 3-10% conversion
- Shared leads: 0.3-2% conversion

### The Real Estate Sales Funnel

**Stage 1: Lead Generation**
- Total leads captured
- Baseline metric for all calculations

**Stage 2: Qualification (30-50% of leads)**
- Respond to inquiry
- Assess timeline and motivation
- Determine financial capability
- Establish needs and wants

**Stage 3: Nurturing (15-30% of qualified)**
- Regular follow-up communication
- Value-added content delivery
- Relationship building
- Trust establishment

**Stage 4: Active Engagement (8-15% of nurtured)**
- Property showings
- Buyer consultations
- Listing presentations
- Offer preparation

**Stage 5: Under Contract (3-8% of engaged)**
- Negotiation
- Inspection period
- Financing approval
- Closing coordination

**Stage 6: Closed Deal (0.5-5% of total leads)**
- Final conversion
- Revenue generated
- Client satisfaction

### Factors Affecting Conversion Rates

**Lead Quality Factors:**
- Source credibility
- Lead intent level
- Budget alignment
- Timeline readiness
- Geographic match

**Agent Performance Factors:**
- Response time (within 5 minutes increases conversion 400%)
- Follow-up consistency
- Communication skills
- Market knowledge
- Negotiation ability

**Market Conditions:**
- Buyer vs seller market
- Inventory levels
- Interest rates
- Economic conditions
- Seasonal factors

**Technology & Systems:**
- CRM usage effectiveness
- Automation quality
- Lead scoring accuracy
- Follow-up system reliability

### Improving Your Conversion Rate

**Response Time Optimization:**
- Respond within 5 minutes: 21× more conversions
- Respond within 30 minutes: 5× more conversions
- Respond within 1 hour: 2× more conversions
- After 24 hours: 60% less likely to convert

**Follow-Up Best Practices:**
- Contact leads 5-12 times before giving up
- 80% of sales require 5+ follow-up attempts
- Use multi-channel approach (call, text, email)
- Provide value in every interaction

**Lead Scoring System:**
- Assign points based on engagement
- Prioritize high-score leads
- Focus efforts where they matter most
- Automate low-score lead nurturing

**Nurture Campaign Strategy:**
- Automated drip campaigns
- Educational content series
- Market updates and insights
- Personal success stories
- Client testimonials

### Conversion Rate Impact on Revenue

**Example Scenario:**
- 100 leads per month
- Current conversion rate: 2%
- Clients: 2 per month
- Average commission: $10,000
- Monthly revenue: $20,000
- Annual revenue: $240,000

**After 1% Improvement (3% conversion):**
- Clients: 3 per month
- Monthly revenue: $30,000
- Annual revenue: $360,000
- Additional income: $120,000/year

**The 1% Rule:** Each 1% improvement in conversion rate can increase annual income by $60,000-120,000 for active agents.

### Conversion Rate by Timeline

**Immediate (0-30 days):**
- Hot leads: 15-25% conversion
- Ready to transact now
- Highest priority follow-up

**Short-term (1-3 months):**
- Warm leads: 5-12% conversion
- Active looking phase
- Regular engagement needed

**Mid-term (3-6 months):**
- Cool leads: 2-6% conversion
- Planning and researching
- Consistent nurture required

**Long-term (6-12 months):**
- Cold leads: 0.5-2% conversion
- Future consideration
- Periodic touchpoints

**Very Long-term (12+ months):**
- Database leads: 0.1-1% conversion
- Staying top-of-mind
- Automated nurture campaigns

### Tracking and Analytics

**Key Metrics to Monitor:**
- Lead-to-appointment conversion
- Appointment-to-showing conversion
- Showing-to-offer conversion
- Offer-to-close conversion
- Overall lead-to-close conversion

**Performance Dashboard:**
- Weekly lead volume
- Monthly conversion rates
- Channel performance comparison
- Trend analysis
- Goal tracking

### Common Conversion Killers

**Mistakes to Avoid:**
- Slow response time
- Inconsistent follow-up
- Generic communication
- Pushy sales tactics
- Lack of value provision
- Poor lead qualification
- No CRM system
- Ignoring lead scoring

## How to Use This Calculator

Enter your funnel data:
1. Total leads received
2. Qualified leads
3. Leads actively engaged
4. Number of appointments/showings
5. Offers made
6. Closed deals
7. Average commission per deal

Get detailed conversion analysis at each funnel stage and revenue insights.
`,
  },
  calculator: {
    fields: [
      {
        name: 'totalLeads',
        label: 'Total Leads Received',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'qualifiedLeads',
        label: 'Qualified Leads',
        type: 'number',
        defaultValue: 40,
      },
      {
        name: 'activelyEngaged',
        label: 'Leads Actively Engaged',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'appointments',
        label: 'Appointments/Showings',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'offersMade',
        label: 'Offers Made',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'closedDeals',
        label: 'Closed Deals',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Deal ($)',
        type: 'number',
        defaultValue: 10000,
      },
    ],
    results: [
      { label: 'Lead-to-Qualified Conversion', isCurrency: false },
      { label: 'Qualified-to-Engaged Conversion', isCurrency: false },
      { label: 'Engaged-to-Appointment Conversion', isCurrency: false },
      { label: 'Appointment-to-Offer Conversion', isCurrency: false },
      { label: 'Offer-to-Close Conversion', isCurrency: false },
      { label: 'Overall Lead-to-Close Conversion', isCurrency: false },
      { label: 'Total Revenue Generated', isCurrency: true },
      { label: 'Revenue Per Lead', isCurrency: true },
    ],
    calculate: (data) => {
      const {
        totalLeads,
        qualifiedLeads,
        activelyEngaged,
        appointments,
        offersMade,
        closedDeals,
        avgCommission,
      } = data;

      const total = parseInt(totalLeads);
      const qualified = parseInt(qualifiedLeads);
      const engaged = parseInt(activelyEngaged);
      const appts = parseInt(appointments);
      const offers = parseInt(offersMade);
      const closed = parseInt(closedDeals);

      const leadToQualified = total > 0 ? (qualified / total) * 100 : 0;
      const qualifiedToEngaged = qualified > 0 ? (engaged / qualified) * 100 : 0;
      const engagedToAppt = engaged > 0 ? (appts / engaged) * 100 : 0;
      const apptToOffer = appts > 0 ? (offers / appts) * 100 : 0;
      const offerToClose = offers > 0 ? (closed / offers) * 100 : 0;
      const overallConversion = total > 0 ? (closed / total) * 100 : 0;
      const totalRevenue = closed * parseFloat(avgCommission);
      const revenuePerLead = total > 0 ? totalRevenue / total : 0;

      return [
        { label: 'Lead-to-Qualified Conversion', value: `${leadToQualified.toFixed(1)}%` },
        { label: 'Qualified-to-Engaged Conversion', value: `${qualifiedToEngaged.toFixed(1)}%` },
        { label: 'Engaged-to-Appointment Conversion', value: `${engagedToAppt.toFixed(1)}%` },
        { label: 'Appointment-to-Offer Conversion', value: `${apptToOffer.toFixed(1)}%` },
        { label: 'Offer-to-Close Conversion', value: `${offerToClose.toFixed(1)}%` },
        { label: 'Overall Lead-to-Close Conversion', value: `${overallConversion.toFixed(2)}%` },
        { label: 'Total Revenue Generated', value: `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Revenue Per Lead', value: `$${revenuePerLead.toFixed(2)}` },
      ];
    },
  },
};
