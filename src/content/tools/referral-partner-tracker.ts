import { CalculatorContent } from '@/types';

export const REFERRAL_PARTNER_TRACKER_CONTENT: CalculatorContent = {
  title: 'Referral Partner (Loan Officer) Tracker',
  description: 'Track and manage relationships with loan officers, mortgage brokers, and other referral partners including lead exchanges and closed deals.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'referral-partner-tracker',
  article: {
    title: 'Referral Partner Relationships for Real Estate Agents: Complete Guide',
    content: `
Building strong referral partnerships with loan officers, attorneys, contractors, and other professionals creates a steady stream of qualified leads and enhanced client service.

### Why Referral Partnerships Matter

**Lead Generation:**
- Consistent qualified buyer referrals
- Pre-qualified client introductions
- Two-way referral exchange
- Lower cost per acquisition than advertising

**Client Service Enhancement:**
- One-stop-shop experience
- Trusted professional network
- Faster transaction timelines
- Problem-solving resources

**Business Growth:**
- 30-50% of business from referrals typical
- Higher quality leads
- Better conversion rates
- Sustainable long-term growth

**Market Credibility:**
- Professional reputation building
- Expert network association
- Industry thought leadership
- Community presence

### Key Referral Partner Types

**Loan Officers & Mortgage Brokers:**
- Primary referral source for buyers
- Pre-qualified lead sharing
- Smooth transaction coordination
- Buyer financing expertise

**Real Estate Attorneys:**
- Legal expertise for clients
- Complex transaction support
- Contract review and guidance
- Referrals from legal consultations

**Home Inspectors:**
- Quality service for clients
- Post-inspection referrals
- Buyer confidence building
- Seller preparation services

**Contractors & Handymen:**
- Pre-listing repairs and staging
- Post-inspection negotiations
- Renovation and remodeling
- Property improvement referrals

**Insurance Agents:**
- Homeowners insurance coordination
- New homeowner lead source
- Life changes trigger home purchases
- Cross-promotional opportunities

**Financial Advisors:**
- Wealth management clients relocating
- Investment property guidance
- Estate planning home sales
- High-net-worth client referrals

**Relocation Companies:**
- Corporate transferees
- Guaranteed volume
- National network access
- Both buyer and seller sides

### Building Effective Partnerships

**Partner Selection Criteria:**
- Shared values and ethics
- Excellent client reviews
- Responsive and professional
- Similar target market
- Complementary services
- Track record of success

**Relationship Development:**
- Regular coffee meetings (monthly)
- Reciprocal referrals
- Joint client events
- Co-marketing initiatives
- Professional appreciation
- Personal connection

**Communication System:**
- CRM tracking for all partners
- Regular touchpoints (weekly/monthly)
- Transaction updates
- Feedback loops
- Celebration of wins

**Value Exchange:**
- Quality referrals both ways
- Client testimonials shared
- Marketing support
- Educational collaboration
- Mutual business growth

### Loan Officer Partnership Strategy

**Finding the Right LO:**
- Multiple lender options
- Specialization alignment (FHA, VA, jumbo)
- Quick pre-approval turnaround
- Excellent communication
- Client-first mentality

**Partnership Agreement:**
- Referral expectations
- Communication protocols
- Client service standards
- Conflict resolution
- Exclusivity considerations

**Tracking Metrics:**
- Referrals sent to LO
- Referrals received from LO
- Closed transactions together
- Client satisfaction scores
- Response time averages

**Common Challenges:**
- Unbalanced referral exchange
- Poor client communication
- Slow pre-approval process
- Changing loan programs
- Lost deals due to financing

**Solutions:**
- Regular performance reviews
- Multiple LO partnerships
- Clear expectations set
- Alternative lender backup
- Continuous training together

### Referral Tracking System

**Database Management:**
- Partner contact information
- Specializations and services
- Geographic coverage
- Client capacity
- Preferred communication method

**Referral Documentation:**
- Date of referral
- Client name and details
- Referral direction (sent/received)
- Transaction status
- Closing date and outcome
- Commission/fees involved

**Performance Metrics:**
- Total referrals sent
- Total referrals received
- Conversion rates
- Revenue generated
- Client feedback scores
- Partnership ROI

**Relationship Quality:**
- Last contact date
- Meeting frequency
- Reciprocity balance
- Client satisfaction
- Professional development

### Co-Marketing Strategies

**Joint Events:**
- First-time homebuyer seminars
- Financial planning workshops
- Home improvement expos
- Networking mixers
- Client appreciation events

**Content Collaboration:**
- Co-authored blog posts
- Joint social media content
- Webinar partnerships
- Newsletter features
- Video collaborations

**Cross-Promotion:**
- Shared marketing materials
- Reciprocal email marketing
- Social media shoutouts
- Website partner pages
- Referral incentives

**Educational Programs:**
- Client workshops together
- Professional development
- Market update presentations
- Industry trend discussions
- Best practices sharing

### Maintaining Strong Partnerships

**Regular Touchpoints:**
- Monthly coffee or lunch meetings
- Weekly check-in calls/texts
- Quarterly business reviews
- Annual planning sessions
- Social relationship building

**Reciprocity Balance:**
- Track give-and-take
- Address imbalances proactively
- Adjust expectations if needed
- Appreciate all referrals
- Don't keep score publicly

**Professional Development:**
- Attend industry events together
- Share educational resources
- Introduce to network
- Collaborative learning
- Skill development support

**Appreciation and Recognition:**
- Thank you notes for referrals
- Small gifts (coffee, lunch)
- Public acknowledgment
- Feature in marketing
- Celebrate their success

### Legal and Ethical Considerations

**RESPA Compliance:**
- No kickbacks or payments for referrals
- Allowed: Marketing expenses split
- Allowed: Co-hosted events
- Not allowed: Referral fees
- Disclosure requirements

**NAR Code of Ethics:**
- Disclose all relationships
- Client's best interest first
- No conflicts of interest
- Transparent communication
- Honest representations

**Best Practices:**
- Multiple partner options
- Client freedom of choice
- Quality over quantity
- Documented processes
- Ethical behavior always

### Measuring Partnership ROI

**Revenue Impact:**
- Gross commission from partner referrals
- Cost of partnership maintenance
- Marketing expenses shared
- Time investment value
- Net profit from relationship

**Quality Metrics:**
- Referral conversion rate
- Average commission per referral
- Client satisfaction scores
- Repeat and referral business
- Time to close averages

**Relationship Health:**
- Mutual satisfaction
- Communication quality
- Trust and reliability
- Growth trajectory
- Long-term potential

## How to Use This Tracker

Enter your partnership details:
1. Partner name and type
2. Referrals sent (this year)
3. Referrals received (this year)
4. Closed transactions together
5. Last contact date
6. Revenue generated from partnership

Get comprehensive tracking including:
- Reciprocity balance analysis
- Partnership value calculation
- Relationship health score
- Action items and reminders
- ROI assessment
- Growth opportunities

This tracker helps you systematically build, manage, and optimize referral partnerships that generate consistent leads and enhance client service.
`,
  },
  calculator: {
    fields: [
      {
        name: 'partnerName',
        label: 'Partner Name',
        type: 'text',
        defaultValue: 'Mike Johnson (Loan Officer)',
      },
      {
        name: 'referralsSent',
        label: 'Referrals Sent to Partner (YTD)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'referralsReceived',
        label: 'Referrals Received from Partner (YTD)',
        type: 'number',
        defaultValue: 8,
      },
      {
        name: 'closedDeals',
        label: 'Closed Deals Together (YTD)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Deal',
        type: 'number',
        defaultValue: 7500,
      },
    ],
    results: [
      { label: 'Reciprocity Balance', isCurrency: false },
      { label: 'Partnership Revenue (YTD)', isCurrency: true },
      { label: 'Conversion Rate', isCurrency: false },
      { label: 'Relationship Health', isCurrency: false },
      { label: 'Partnership Value Score', isCurrency: false },
    ],
    calculate: (data) => {
      const { partnerName, referralsSent, referralsReceived, closedDeals, avgCommission } = data;
      
      const sent = parseFloat(referralsSent);
      const received = parseFloat(referralsReceived);
      const closed = parseFloat(closedDeals);
      const commission = parseFloat(avgCommission);
      
      const balance = sent > received ? `Giving ${sent - received} more` :
                     received > sent ? `Receiving ${received - sent} more` : 'Perfectly balanced';
      
      const revenue = closed * commission;
      const conversionRate = received > 0 ? ((closed / received) * 100).toFixed(1) : '0';
      
      const healthScore = Math.min(100, Math.round(
        (closed * 15) + (received * 5) + (sent * 3) + (sent === received ? 20 : 0)
      ));
      
      const health = healthScore >= 80 ? 'Excellent' :
                    healthScore >= 60 ? 'Good' :
                    healthScore >= 40 ? 'Fair' : 'Needs Attention';
      
      const valueScore = `${healthScore}/100`;
      
      return [
        { label: 'Reciprocity Balance', value: balance },
        { label: 'Partnership Revenue (YTD)', value: `$${revenue.toLocaleString()}` },
        { label: 'Conversion Rate', value: `${conversionRate}%` },
        { label: 'Relationship Health', value: health },
        { label: 'Partnership Value Score', value: valueScore },
      ];
    },
  },
};
