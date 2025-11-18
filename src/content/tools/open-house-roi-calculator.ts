import { CalculatorContent } from '@/types';

export const OPEN_HOUSE_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Open House ROI Calculator (Lead Gen)',
  description: 'Calculate return on investment for open houses as a lead generation and marketing strategy.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'open-house-roi-calculator',
  article: {
    title: 'Open House ROI: Complete Lead Generation Strategy Guide',
    content: `
Open houses are more than showing properties—they're lead generation goldmines when executed strategically.

### Open House as Lead Generation

**Dual Purpose:**
- Market the listing (primary)
- Generate buyer leads (secondary but valuable)
- Build database
- Meet neighbors (future sellers)
- Establish local presence

**Lead Types Generated:**
- Serious buyers (10-20% of visitors)
- Future buyers (40-50%)
- Nosy neighbors (20-30%)
- Agents (5-10%)
- Potential sellers (10-15%)

### Cost Per Open House

**Basic Open House:**
- Signs and directionals: $20-50
- Refreshments: $30-60
- Marketing materials: $20-40
- Time investment: 4-6 hours
- Total cost: $70-150

**Professional Open House:**
- Premium signage: $50-100
- Catered refreshments: $100-200
- Professional flyers: $50-100
- Digital sign-in system: $20-50
- Facebook/Instagram ads: $50-150
- Time + prep: 6-8 hours
- Total cost: $270-600

**Luxury Open House:**
- High-end signage: $100-200
- Professional catering: $300-500
- Premium marketing: $150-300
- Photographer/videographer: $200-400
- Targeted advertising: $200-500
- Valet/security: $200-400
- Total cost: $1,150-2,300

### Lead Capture Strategy

**Visitor Tracking Methods:**
- Digital sign-in (preferred): 80-90% capture rate
- Paper sign-in: 50-70% capture rate
- Business card fishbowl: 30-50% capture rate
- QR code scan: 40-60% capture rate

**Information to Collect:**
- Name and contact (minimum)
- Email address
- Home search criteria
- Timeline to purchase
- Pre-approval status
- Current housing situation

### Conversion Metrics

**Typical Open House:**
- Visitors: 15-30 groups
- Contact info captured: 10-20 leads
- Serious buyers: 2-4
- Future follow-up: 6-12
- Eventual conversions: 1-2 per year

**Well-Promoted Open House:**
- Visitors: 30-60 groups
- Contact info captured: 25-45 leads
- Serious buyers: 5-10
- Future follow-up: 15-30
- Eventual conversions: 2-4 per year

### ROI Calculation Example

**Scenario: 24 Open Houses Per Year**
- Cost per open house: $200
- Annual cost: $4,800
- Leads per open house: 15
- Annual leads: 360
- Conversion rate: 1%
- Closings: 3.6 per year
- Average commission: $10,000
- Revenue: $36,000
- ROI: 650% (or 7.5x return)

### Maximizing Lead Generation

**Pre-Event Marketing:**
- Facebook event (3-7 days before)
- Instagram stories (daily countdown)
- Targeted Facebook ads ($50-150)
- Email to database
- Signs up 2-3 days early
- Zillow/Realtor.com listing update

**During Open House:**
- Digital sign-in tablet
- Conversation with every visitor
- Qualify buyer readiness
- Offer comparative listings
- Follow property on social
- Schedule private showings

**Post-Event Follow-Up:**
- Thank you text (same day)
- Email with similar listings (next day)
- Phone call (within 3 days)
- Add to CRM nurture campaign
- Facebook retargeting ads
- Monthly market updates

### Open House Best Practices

**Timing Optimization:**
- Best days: Saturday and Sunday
- Best times: 1-4 PM
- Avoid holidays and major events
- Consider local schedules
- Test different times

**Visitor Engagement:**
- Greet at door
- Let them explore first
- Ask qualifying questions
- Provide market insights
- Don't oversell the house
- Focus on their needs

**Professional Setup:**
- All lights on
- Pleasant music
- Fresh flowers/plants
- Cookies or snacks
- Information packets
- Clear navigation
- Decluttered space

### Open House vs Other Lead Sources

**Advantages:**
- Face-to-face connection
- Free leads (besides event cost)
- Local market exposure
- Database building
- Multiple opportunities per event

**Disadvantages:**
- Time intensive
- Unqualified lookers
- Weekend commitment
- Inconsistent attendance
- Seasonal variations

**vs Zillow Leads:**
- Open house: Free leads, lower intent
- Zillow: Paid leads, shared, higher intent

**vs Facebook Ads:**
- Open house: Local, immediate, free leads
- Facebook: Scalable, targeted, paid

### Strategic Open House Planning

**Farm Area Focus:**
- Host in target neighborhood
- Meet potential sellers
- Establish local expertise
- Build community presence
- Generate referrals

**Builder/New Construction:**
- Higher foot traffic
- Less emotional attachment
- Easier lead capture
- Regular schedule possible
- Often more buyers

**Luxury Properties:**
- Invitation-only events
- Higher conversion potential
- Networking opportunities
- Media coverage
- Referral source

### Technology Integration

**Digital Tools:**
- iPad sign-in (Curb Hero, SparkListing)
- CRM auto-import
- Automated follow-up emails
- Lead scoring system
- Retargeting pixel
- Analytics tracking

**Social Media:**
- Facebook Live tour
- Instagram Stories updates
- Post-event recap video
- Visitor testimonials
- Share attendance success

### ROI Improvement Strategies

**Increase Attendance:**
- Better marketing (Facebook ads)
- Premium property selection
- Ideal timing
- Neighbor invitations
- Realtor outreach

**Improve Capture Rate:**
- Digital sign-in only
- Incentive for sign-in (drawing)
- Block paper sign-in
- Friendly greeting
- Value exchange (market report)

**Boost Conversion:**
- Immediate follow-up
- Systematic nurture
- Value-add content
- Regular check-ins
- Proactive matching

### When Open Houses Make Sense

**Good Fit:**
- Building local presence
- New agent gaining experience
- Developing farm area
- Weekend availability
- Strong follow-up system
- Database building mode

**Not a Good Fit:**
- Established with full pipeline
- No time for follow-up
- Unwilling to work weekends
- No CRM system
- Poor people skills
- Impatient for results

### Measuring Success

**Key Metrics:**
- Attendance per open house
- Capture rate %
- Cost per lead
- Lead quality score
- Appointment conversion
- Long-term closing rate
- ROI percentage

**30-Day Tracking:**
- Leads captured
- Immediate appointments
- Add to database
- Email engagement
- Phone connections
- Showing requests

**Annual Review:**
- Total open houses held
- Total leads generated
- Total closings attributed
- Revenue generated
- Time invested
- Overall ROI

## How to Use This Calculator

Enter your open house data:
1. Number of open houses per year
2. Average cost per open house
3. Average leads captured per event
4. Conversion rate (leads to closings %)
5. Average commission per sale

Get comprehensive ROI analysis.
`,
  },
  calculator: {
    fields: [
      {
        name: 'openHousesPerYear',
        label: 'Open Houses Per Year',
        type: 'number',
        defaultValue: 24,
      },
      {
        name: 'costPerEvent',
        label: 'Average Cost Per Open House',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'leadsPerEvent',
        label: 'Leads Captured Per Event',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'conversionRate',
        label: 'Conversion Rate (%)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Sale',
        type: 'number',
        defaultValue: 10000,
      },
    ],
    results: [
      { label: 'Total Annual Cost', isCurrency: true },
      { label: 'Total Leads Generated', isCurrency: false },
      { label: 'Cost Per Lead', isCurrency: true },
      { label: 'Expected Closings', isCurrency: false },
      { label: 'Cost Per Closing', isCurrency: true },
      { label: 'Total Revenue', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'ROI Percentage', isCurrency: false },
    ],
    calculate: (data) => {
      const { openHousesPerYear, costPerEvent, leadsPerEvent, conversionRate, avgCommission } = data;
      
      const events = parseInt(openHousesPerYear);
      const totalCost = events * parseFloat(costPerEvent);
      const totalLeads = events * parseInt(leadsPerEvent);
      const costPerLead = totalLeads > 0 ? totalCost / totalLeads : 0;
      const closings = totalLeads * (parseFloat(conversionRate) / 100);
      const costPerClosing = closings > 0 ? totalCost / closings : 0;
      const revenue = closings * parseFloat(avgCommission);
      const profit = revenue - totalCost;
      const roi = totalCost > 0 ? ((profit / totalCost) * 100) : 0;
      
      return [
        { label: 'Total Annual Cost', value: `$${Math.round(totalCost).toLocaleString()}` },
        { label: 'Total Leads Generated', value: totalLeads.toString() },
        { label: 'Cost Per Lead', value: `$${Math.round(costPerLead).toLocaleString()}` },
        { label: 'Expected Closings', value: closings.toFixed(1) },
        { label: 'Cost Per Closing', value: `$${Math.round(costPerClosing).toLocaleString()}` },
        { label: 'Total Revenue', value: `$${Math.round(revenue).toLocaleString()}` },
        { label: 'Net Profit', value: `$${Math.round(profit).toLocaleString()}` },
        { label: 'ROI Percentage', value: `${roi.toFixed(1)}%` },
      ];
    },
  },
};
