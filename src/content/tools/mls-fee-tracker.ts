import { CalculatorContent } from '@/types';

export const MLS_FEE_TRACKER_CONTENT: CalculatorContent = {
  title: 'MLS Fee Tracker',
  description: 'Track and calculate total MLS (Multiple Listing Service) fees including membership, listing fees, and additional services.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'mls-fee-tracker',
  article: {
    title: 'MLS Fees for Real Estate Agents: Complete Cost Breakdown',
    content: `
Understanding MLS (Multiple Listing Service) costs is crucial for managing your real estate business expenses.

### MLS Fee Components

**Annual Membership Fees:**
- Base MLS membership: $300-600/year
- Board of Realtors dues: $200-400/year
- NAR membership: $150-200/year
- State association dues: $100-300/year
- Total average: $750-1,500/year

**Per-Listing Fees:**
- Standard residential listing: $0-50 per listing
- Some MLSs charge per listing, others don't
- Virtual tour fees: $10-30 per listing
- Premium placement: $25-100 per listing

**Technology & Service Fees:**
- MLS data access: $30-60/month
- Showing service: $20-40/month
- Lockbox rental: $5-15/month
- Mobile app access: $10-20/month

### Regional Variations

**High-Cost Markets:**
- Major metros (NYC, LA, SF): $1,200-2,000/year
- Multiple MLS access required
- Premium features standard

**Mid-Cost Markets:**
- Most suburban areas: $800-1,200/year
- Standard features included
- Optional upgrades available

**Low-Cost Markets:**
- Rural areas: $500-800/year
- Basic features only
- Fewer add-on services

### Additional MLS Services

**Optional Upgrades:**
- Professional photography: $150-300 per listing
- Virtual staging: $50-150 per listing
- Drone photography: $200-400 per listing
- 3D virtual tours: $150-300 per listing
- Enhanced listing visibility: $50-200 per listing

**Showing Services:**
- ShowingTime subscription: $50-100/month
- Lockbox system: $10-20/month
- Showing feedback reports: Included or $10-30/month

### Cost Management Strategies

**Reduce Fees:**
- Join board with lowest MLS access
- Negotiate bulk pricing with brokerage
- Use included services before paying for extras
- Share technology subscriptions with team
- Review annually and cancel unused services

**Tax Deductions:**
- All MLS fees are tax deductible
- Track monthly and annual fees separately
- Include in business expense tracking
- Document all subscriptions and services

**Budgeting Tips:**
- Set aside $100-150/month for MLS costs
- Factor into commission splits
- Compare MLS options in multi-board areas
- Consider brokerage reimbursements

### What's Included vs Extra

**Usually Included:**
- Basic listing input
- Property search access
- Standard reports
- Email notifications
- Mobile app access

**Usually Extra:**
- Premium listing placement
- Professional media services
- Advanced marketing tools
- Multiple market access
- API data feeds

## How to Use This Calculator

Enter your MLS expenses:
1. Annual MLS membership fee
2. Number of listings per year
3. Fee per listing (if applicable)
4. Monthly technology fees
5. Average marketing upgrades per listing

Get total annual MLS costs and cost per listing.
`,
  },
  calculator: {
    fields: [
      {
        name: 'annualMembership',
        label: 'Annual MLS Membership Fee',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'listings',
        label: 'Listings Per Year',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'perListingFee',
        label: 'Fee Per Listing',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'monthlyTech',
        label: 'Monthly Technology Fees',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'avgMarketing',
        label: 'Avg Marketing Upgrades Per Listing',
        type: 'number',
        defaultValue: 100,
      },
    ],
    results: [
      { label: 'Total Annual MLS Costs', isCurrency: true },
      { label: 'Monthly MLS Costs', isCurrency: true },
      { label: 'Cost Per Listing', isCurrency: true },
      { label: 'Total Marketing Costs', isCurrency: true },
    ],
    calculate: (data) => {
      const { annualMembership, listings, perListingFee, monthlyTech, avgMarketing } = data;
      
      const membership = parseFloat(annualMembership);
      const listingCount = parseInt(listings);
      const listingFees = listingCount * parseFloat(perListingFee);
      const annualTech = parseFloat(monthlyTech) * 12;
      const marketingCosts = listingCount * parseFloat(avgMarketing);
      
      const totalAnnual = membership + listingFees + annualTech + marketingCosts;
      const monthly = Math.round(totalAnnual / 12);
      const costPerListing = listingCount > 0 ? Math.round(totalAnnual / listingCount) : 0;
      
      return [
        { label: 'Total Annual MLS Costs', value: `$${Math.round(totalAnnual).toLocaleString()}` },
        { label: 'Monthly MLS Costs', value: `$${monthly.toLocaleString()}` },
        { label: 'Cost Per Listing', value: `$${costPerListing.toLocaleString()}` },
        { label: 'Total Marketing Costs', value: `$${Math.round(marketingCosts).toLocaleString()}` },
      ];
    },
  },
};
