import { CalculatorContent } from '@/types';

export const SELLERS_PACKET_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Seller\'s Packet (Listing Presentation) Generator',
  description: 'Create professional listing presentation packets for sellers with market analysis, pricing strategies, marketing plans, and comprehensive selling guides to win more listings.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'sellers-packet-generator',
  article: {
    title: 'Seller\'s Packet Generator: Professional Listing Presentation Materials',
    content: `
A professional seller's packet is your most powerful tool for winning listings by demonstrating expertise, marketing prowess, and a comprehensive selling strategy.

### Essential Seller's Packet Components

**1. Professional Introduction**
- Your credentials and experience
- Years in business and transaction volume
- Professional designations (ABR, CRS, GRI, etc.)
- Awards and recognition
- Team introduction
- Why choose you as their listing agent

**2. Comparative Market Analysis (CMA)**
- Subject property analysis
- 4-6 comparable sold properties
- Active competition overview
- Pending sales analysis
- Market trends (6-12 months)
- Recommended pricing strategy
- Price range with justification

**3. Marketing Plan**
- Professional photography ($300-$800)
- Drone aerial photography ($200-$600)
- 3D virtual tour ($250-$500)
- Professional staging recommendations
- MLS listing optimization
- Syndication to 100+ websites
- Social media marketing campaign
- Email marketing to database
- Print marketing materials
- Open house strategy
- Agent-to-agent outreach
- Total marketing investment: $2,000-$5,000+

**4. Pricing Strategy**
- Initial pricing recommendation
- Pricing psychology
- Market positioning
- Competitive analysis
- Price adjustment strategy if needed
- Historical pricing data
- Days on market expectations

**5. Home Preparation Guide**
- Pre-listing home inspection benefits
- Recommended repairs and updates
- Staging advice (room by room)
- Curb appeal enhancements
- Deep cleaning checklist
- Decluttering guide
- Minor cosmetic improvements
- ROI on improvements

**6. Selling Process Timeline**
- Pre-listing preparation (2-4 weeks)
- Photography and marketing prep (1 week)
- MLS launch day strategy
- First 2 weeks critical period
- Showing feedback and adjustments
- Offer review and negotiation
- Under contract process (30-45 days)
- Closing preparation
- Total timeline: 60-90 days typical

**7. Commission and Costs Breakdown**
- Listing commission structure (5-6% typical)
- Buyer's agent commission (2.5-3%)
- Your commission (2.5-3%)
- Transaction fees
- Marketing costs
- Closing costs estimate
- Net proceeds calculation

**8. Legal Disclosures**
- Required seller disclosures by state
- Property condition disclosure
- Lead-based paint (pre-1978 homes)
- HOA documents and fees
- Special assessments
- Easements and encumbrances
- Agent representation agreement

**9. Market Statistics**
- Current inventory levels
- Average days on market: 30-45 days
- Average sale-to-list price ratio: 98-102%
- Absorption rate by price range
- Buyer demand indicators
- Seasonal trends
- Interest rate impact

**10. Client Testimonials**
- 5-10 recent client reviews
- Success stories
- Before/after transformations
- Video testimonials (if available)
- Third-party review ratings

**11. Past Sales Success**
- Recently sold similar properties
- Your average days on market
- Your sale-to-list price ratio
- Premium results examples
- Quick sale examples

**12. Frequently Asked Questions**
- "How did you determine this price?" (CMA analysis)
- "How long will it take to sell?" (30-60 days typical)
- "What if we don't get offers?" (Price adjustment strategy)
- "Do we need to stage?" (Highly recommended)
- "Can we stay during showings?" (No, vacant showings best)
- "What are closing costs?" (1-3% of sale price)
- "When do you get paid?" (At closing)

**13. Pre-Listing Action Items**
- Schedule pre-listing inspection
- Complete disclosure forms
- Gather property documents
- Plan for showings and access
- Utility information
- Sign listing agreement
- Schedule photography

**14. Post-Listing Strategy**
- First 2 weeks marketing blitz
- Showing schedule and feedback
- Weekly progress updates
- Price monitoring and adjustments
- Offer presentation and review
- Negotiation strategy
- Multiple offer handling

### Presentation Formats

**Print Presentation: $25-$75 per packet**
- Professional bound presentation
- Full-color premium materials
- Branded custom folder
- Leave-behind value
- Visual impact
- Reference material

**Digital Presentation: $0-$100**
- iPad/tablet presentation
- Interactive elements
- Video content
- Instant updates
- Environmentally friendly
- Easy to share

**Hybrid Approach:**
- Present digitally on tablet
- Leave printed executive summary
- Email full PDF after meeting
- Best of both worlds

### Design Best Practices

**Professional Branding:**
- Consistent brand colors
- Professional photography
- High-quality graphics
- Your logo throughout
- Modern, clean design

**Data Visualization:**
- Charts for market trends
- Graphs for pricing analysis
- Infographics for process
- Before/after photos
- Map-based comparables

**Credibility Builders:**
- Professional headshot
- Credentials and designations
- Client testimonials
- Recent sales data
- Market expertise demonstration

### Winning the Listing

**Pre-Meeting Research:**
- Property online research
- Neighborhood analysis
- Recent comparable sales
- Current competition
- Preliminary pricing estimate

**Presentation Meeting:**
- Establish rapport and trust
- Listen to seller goals and concerns
- Present comprehensive CMA
- Showcase marketing plan
- Demonstrate expertise
- Address objections
- Request listing commitment

**Follow-Up Strategy:**
- Thank you note within 24 hours
- Address any additional questions
- Provide references if requested
- Follow up in 3-5 days
- Stay in touch if not ready now

### Common Seller Objections

**"Your commission is too high"**
- Show value of marketing
- Demonstrate results and ROI
- Explain market positioning
- Showcase track record

**"I want to price higher"**
- Show CMA data
- Explain days on market impact
- Discuss price reduction stigma
- Provide pricing strategy

**"I want to wait"**
- Show current market conditions
- Discuss timing considerations
- Explain seasonal factors
- Address specific concerns

### Marketing Investment Breakdown

**Photography Package: $400-$1,200**
- Professional listing photos
- Twilight photography
- Drone aerial shots
- Video walkthrough

**Staging Consultation: $200-$500**
- Professional stager walkthrough
- Room-by-room recommendations
- Accessory rental (optional)

**Marketing Materials: $300-$800**
- Professional brochures
- Property signage
- Feature cards
- Direct mail postcards
- Online advertising

**Total Marketing Investment: $900-$2,500+**

### Net Proceeds Calculation

**Sale Price: $500,000 example**
- Gross sale price: $500,000
- Listing commission (3%): -$15,000
- Buyer's agent commission (3%): -$15,000
- Closing costs (1%): -$5,000
- Mortgage payoff: -$350,000
- **Net proceeds: $115,000**

## How to Use This Generator

Input your listing presentation details:
1. Property information and estimated value
2. Your marketing plan and investment
3. Commission structure
4. Recent comparable sales data
5. Market statistics and trends

Generate comprehensive packet including:
- Professional introduction and credentials
- Complete CMA with pricing strategy
- Detailed marketing plan presentation
- Home preparation guide
- Process timeline and expectations
- Commission and cost breakdown
- Market statistics and trends
- Client testimonials
- Legal disclosures
- Next steps and action items

This generator creates professional listing presentations that win seller confidence and secure listings.
`,
  },
  calculator: {
    fields: [
      {
        name: 'estimatedValue',
        label: 'Estimated Property Value ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'commissionRate',
        label: 'Total Commission Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'mortgageBalance',
        label: 'Current Mortgage Balance ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'closingCosts',
        label: 'Estimated Closing Costs (%)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'marketingBudget',
        label: 'Marketing Investment Budget ($)',
        type: 'number',
        defaultValue: 2000,
      },
    ],
    results: [
      { label: 'Estimated Sale Price', isCurrency: true },
      { label: 'Total Commission', isCurrency: true },
      { label: 'Closing Costs', isCurrency: true },
      { label: 'Net Proceeds to Seller', isCurrency: true },
      { label: 'Marketing ROI', isCurrency: false },
    ],
    calculate: (data) => {
      const { estimatedValue, commissionRate, mortgageBalance, closingCosts, marketingBudget } = data;
      
      const salePrice = parseFloat(estimatedValue);
      const commissionDecimal = parseFloat(commissionRate) / 100;
      const totalCommission = salePrice * commissionDecimal;
      const closingCostsDecimal = parseFloat(closingCosts) / 100;
      const totalClosingCosts = salePrice * closingCostsDecimal;
      const netProceeds = salePrice - totalCommission - totalClosingCosts - parseFloat(mortgageBalance);
      const marketingROI = ((salePrice - parseFloat(marketingBudget)) / parseFloat(marketingBudget) * 100);
      
      return [
        { label: 'Estimated Sale Price', value: `$${salePrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Commission', value: `$${totalCommission.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Closing Costs', value: `$${totalClosingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Net Proceeds to Seller', value: `$${netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Marketing ROI', value: `${marketingROI.toFixed(0)}%` },
      ];
    },
  },
};
