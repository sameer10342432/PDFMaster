import { CalculatorContent } from '@/types';

export const DIRECT_MAIL_POSTCARD_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Direct Mail (Postcard) ROI Calculator',
  description: 'Calculate return on investment for direct mail postcard campaigns targeting farm areas and geographic territories.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'direct-mail-postcard-roi-calculator',
  article: {
    title: 'Direct Mail Postcard ROI: Complete Farm Marketing Guide',
    content: `
Direct mail postcards remain one of the most effective geographic farm marketing strategies for real estate agents.

### Direct Mail Strategy Basics

**What is Farming:**
- Target specific neighborhood (250-500 homes)
- Consistent mail presence (monthly minimum)
- Become the neighborhood expert
- Build name recognition
- Generate listings in farm area

**Why Direct Mail Works:**
- Tangible and physical
- High open rate (gets looked at)
- Less competition than digital
- Local targeting precision
- Builds consistent presence
- Works while you sleep

### Postcard Cost Structure

**Printing Costs:**
- DIY/Vistaprint: $0.15-0.30 per card
- Professional service: $0.35-0.50 per card
- Premium/custom: $0.50-0.80 per card
- Bulk discounts apply

**Mailing Costs:**
- EDDM (Every Door Direct Mail): $0.19 per piece
- Standard mail (bulk rate): $0.20-0.30 per piece
- First class: $0.48-0.60 per piece

**Total Cost Per Piece:**
- Budget: $0.34-0.49
- Standard: $0.55-0.80
- Premium: $0.70-1.40

### Farm Size and Budget

**Small Farm (250 homes):**
- Monthly cost: $85-350
- Annual cost: $1,020-4,200
- Recommended for new agents

**Medium Farm (500 homes):**
- Monthly cost: $170-700
- Annual cost: $2,040-8,400
- Standard farm size

**Large Farm (1,000 homes):**
- Monthly cost: $340-1,400
- Annual cost: $4,080-16,800
- For established agents

### Response Rates and Timeline

**First Year Results:**
- Months 1-3: Brand awareness (no calls)
- Months 4-6: Recognition building (few calls)
- Months 7-9: First listing leads (1-2)
- Months 10-12: Momentum building (2-4 leads)

**Second Year Results:**
- Quarterly: 3-5 listing leads
- Annual: 12-20 listing leads
- Market share: 15-25% of farm

**Third Year+ Results:**
- Quarterly: 5-10 listing leads
- Annual: 20-40 listing leads
- Market share: 30-50% of farm
- Referral machine established

### ROI Calculation Example

**Scenario: 500-Home Farm, Year 2**
- Monthly mailings: $400
- Annual cost: $4,800
- Listing leads: 15
- Conversion to listing: 60% (9 listings)
- Listings sold: 90% (8 closings)
- Average commission: $12,000
- Total revenue: $96,000
- ROI: 1,900% (or 20x return)

### Postcard Campaign Types

**Just Listed/Just Sold:**
- Showcase your activity
- Proof of competence
- Creates FOMO
- Most effective type
- Send immediately

**Market Updates:**
- Neighborhood stats
- Recent sales
- Price trends
- Inventory levels
- Quarterly recommended

**Seasonal/Holiday:**
- Spring market preview
- Summer tips
- Fall maintenance
- Holiday greetings
- 4 times per year

**Educational Content:**
- Home value tips
- Seller guides
- Market insights
- Renovation ROI
- Monthly rotation

### Design Best Practices

**Front Side:**
- Eye-catching image (listing photo)
- Clear headline
- Your name and photo
- Branding colors
- Call to action

**Back Side:**
- Key message/offer
- Contact information
- Website URL
- Social media
- QR code (optional)
- Mailing address

**Critical Elements:**
- Professional headshot
- Logo and branding
- Phone number (large)
- Website clearly visible
- High-quality images
- Clean design

### Frequency Strategy

**Minimum Effective:**
- 6 times per year
- Bi-monthly mailings
- Risk: Low recognition
- Cost: Lower

**Recommended:**
- 12 times per year
- Monthly mailings
- Best balance
- Industry standard

**Aggressive:**
- 24+ times per year
- Twice monthly
- Maximum presence
- Higher cost but faster results

### Farm Selection Criteria

**Ideal Farm Area:**
- 250-500 homes
- Good turnover rate (5-8%/year)
- Average price matches your specialty
- Low agent competition
- Geographic concentration
- Where you live/nearby

**Market Research:**
- Check recent sales history
- Count current listings
- Identify dominant agents
- Calculate turnover rate
- Assess competition level

### Direct Mail vs Digital Marketing

**Direct Mail Advantages:**
- Physical presence
- Less competition
- Older demographic prefers
- High-end markets effective
- Builds consistent brand
- Predictable costs

**Direct Mail Disadvantages:**
- Slow results (6-12 months)
- Ongoing commitment required
- Higher cost per impression
- Can't retarget
- Limited tracking

**vs Facebook Ads:**
- Direct mail: Local saturation, tangible
- Facebook: Cheaper, faster, broader reach

**vs Door Knocking:**
- Direct mail: Scalable, less time
- Door knocking: Personal, immediate feedback

### Tracking and Attribution

**Lead Tracking:**
- Ask "How did you hear about me?"
- Unique URLs per campaign
- Unique phone numbers
- QR codes with tracking
- Promo codes

**Success Metrics:**
- Cost per lead
- Response rate %
- Listing conversion %
- Market share in farm
- Name recognition (survey)
- ROI percentage

### Maximizing Farm ROI

**Multi-Touch Strategy:**
- Monthly postcards (minimum)
- Quarterly door knocking
- Annual client events
- Facebook ads to farm zip
- Local sponsorships
- Community involvement

**Combine Tactics:**
- Postcard + Facebook ad
- Postcard + door knock
- Postcard + email
- Postcard + open house

### Cost Reduction Strategies

**Save Money:**
- EDDM vs targeted mail
- Bulk printing discounts
- Annual vs monthly orders
- Design templates
- DIY mailing prep
- Seasonal promotions

**Increase Effectiveness:**
- Target motivated sellers only
- Focus on just sold postcards
- Improve design quality
- Increase frequency
- Add video QR codes
- Personalize by street

### When Direct Mail Works

**Good Fit:**
- Long-term business builder
- Geographic focus strategy
- Consistent budget
- Patience for results
- Local market expertise
- Commitment to farm

**Not a Good Fit:**
- Need immediate results
- Limited budget (<$200/month)
- Frequently move territories
- Inconsistent follow-through
- Prefer digital only
- Short-term thinking

### First Year Expectations

**Realistic Timeline:**
- Month 1-6: Brand building (no calls)
- Month 7-12: First 2-4 listing leads
- Year 1 ROI: May be negative
- Year 2 ROI: 300-800%
- Year 3+ ROI: 800-2,000%+

**Investment Mindset:**
- Play long game
- Compound effects
- Market share growth
- Referral generation
- Database building

## How to Use This Calculator

Enter your direct mail campaign data:
1. Number of homes in farm area
2. Mailings per year
3. Cost per postcard (including postage)
4. Expected response rate (%)
5. Conversion to listing rate (%)
6. Average commission per listing

Get detailed ROI projection and break-even analysis.
`,
  },
  calculator: {
    fields: [
      {
        name: 'farmSize',
        label: 'Number of Homes in Farm',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'mailingsPerYear',
        label: 'Mailings Per Year',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'costPerPiece',
        label: 'Cost Per Postcard (Including Postage)',
        type: 'number',
        defaultValue: 0.70,
      },
      {
        name: 'responseRate',
        label: 'Response Rate (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'conversionRate',
        label: 'Conversion to Listing Rate (%)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Listing',
        type: 'number',
        defaultValue: 12000,
      },
    ],
    results: [
      { label: 'Total Annual Cost', isCurrency: true },
      { label: 'Monthly Cost', isCurrency: true },
      { label: 'Total Pieces Mailed', isCurrency: false },
      { label: 'Expected Listing Leads', isCurrency: false },
      { label: 'Expected Listings Taken', isCurrency: false },
      { label: 'Total Revenue', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'ROI Percentage', isCurrency: false },
    ],
    calculate: (data) => {
      const { farmSize, mailingsPerYear, costPerPiece, responseRate, conversionRate, avgCommission } = data;
      
      const homes = parseInt(farmSize);
      const mailings = parseInt(mailingsPerYear);
      const totalPieces = homes * mailings;
      const totalCost = totalPieces * parseFloat(costPerPiece);
      const monthlyCost = Math.round(totalCost / 12);
      const leads = totalPieces * (parseFloat(responseRate) / 100);
      const listings = leads * (parseFloat(conversionRate) / 100);
      const revenue = listings * parseFloat(avgCommission);
      const profit = revenue - totalCost;
      const roi = totalCost > 0 ? ((profit / totalCost) * 100) : 0;
      
      return [
        { label: 'Total Annual Cost', value: `$${Math.round(totalCost).toLocaleString()}` },
        { label: 'Monthly Cost', value: `$${monthlyCost.toLocaleString()}` },
        { label: 'Total Pieces Mailed', value: totalPieces.toLocaleString() },
        { label: 'Expected Listing Leads', value: Math.round(leads).toString() },
        { label: 'Expected Listings Taken', value: listings.toFixed(1) },
        { label: 'Total Revenue', value: `$${Math.round(revenue).toLocaleString()}` },
        { label: 'Net Profit', value: `$${Math.round(profit).toLocaleString()}` },
        { label: 'ROI Percentage', value: `${roi.toFixed(1)}%` },
      ];
    },
  },
};
