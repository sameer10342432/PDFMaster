import { CalculatorContent } from '@/types';

export const REALTOR_ASSOCIATION_DUES_TRACKER_CONTENT: CalculatorContent = {
  title: 'Realtor Association Dues Tracker',
  description: 'Calculate and track total realtor association dues including NAR, state, and local board memberships.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'realtor-association-dues-tracker',
  article: {
    title: 'Realtor Association Dues: Complete Membership Cost Guide',
    content: `
To use the REALTOR® trademark, agents must pay dues to National, State, and Local associations.

### Three-Tier Membership System

**National Association of Realtors (NAR):**
- Annual dues: $150-185/year
- Required for all Realtors
- Includes advocacy, education, research
- MLS access requires NAR membership
- Provides code of ethics training

**State Association:**
- Annual dues: $100-300/year
- Varies significantly by state
- State-level advocacy
- Local market data and training
- Legal resources and forms

**Local Board/Association:**
- Annual dues: $200-600/year
- Most variable cost component
- MLS access fees often included
- Networking events and local education
- Office space and meeting rooms

### Total Annual Cost Breakdown

**Typical New Agent:**
- NAR: $150
- State: $150
- Local: $400
- Total: $700/year

**Typical Established Agent:**
- NAR: $185
- State: $250
- Local: $500
- Total: $935/year

**High-Cost Markets (NYC, LA, SF):**
- NAR: $185
- State: $300
- Local: $800
- Total: $1,285/year

### Additional Association Fees

**One-Time Fees:**
- New member application: $100-300
- Background check: $50-100
- Orientation/onboarding: $50-150

**Optional Memberships:**
- Commercial association: $200-400/year
- Specialty councils (CRS, GRI): $100-300/year
- Young professionals network: $50-150/year
- Women's council: $75-200/year

**Monthly Fees:**
- Some boards charge monthly vs annual
- Typical: $75-100/month
- May include payment plans

### What You Get for Your Dues

**NAR Benefits:**
- REALTOR® trademark usage
- Legal advocacy
- Research and statistics
- Ethics training
- Professional development
- Consumer advertising

**State Benefits:**
- State-specific legal forms
- Legislative advocacy
- Continuing education
- Regional market data
- Networking events

**Local Benefits:**
- MLS access (usually)
- Local networking
- Office facilities
- Dispute mediation
- Community events
- Mentorship programs

### Dues Payment Strategies

**Annual vs Monthly:**
- Annual payment: Often 5-10% discount
- Monthly payment: Better cash flow
- Quarterly: Middle ground option

**Tax Deductions:**
- 100% tax deductible as business expense
- Track separately from other expenses
- Include in quarterly estimated taxes
- Request itemized receipts

**Reducing Costs:**
- New agent discounts (first year)
- Pay annually for discounts
- Skip optional memberships initially
- Ask about hardship programs
- Consider broker reimbursement

### Multi-Board Membership

**Working Multiple Markets:**
- Primary board: Full dues
- Secondary board: Reduced rate ($200-400)
- MLS-only access: $300-500/year
- Reciprocal agreements: Free to $100

**When Worth It:**
- Serving adjacent markets
- Relocation specialists
- Luxury agents across regions
- Commercial and residential mix

### Important Deadlines

**Annual Renewal:**
- Typically due December-January
- Late fees: $50-100
- Reinstatement fees if lapsed: $100-300
- Maintain continuous membership for benefits

**Pro-Rating:**
- Join mid-year: Prorated dues
- Some boards don't prorate
- Ask before joining

## How to Use This Calculator

Enter your association dues:
1. NAR annual dues
2. State association dues
3. Local board dues
4. Number of additional memberships
5. Average cost of additional memberships

Get total annual and monthly association costs.
`,
  },
  calculator: {
    fields: [
      {
        name: 'narDues',
        label: 'NAR Annual Dues',
        type: 'number',
        defaultValue: 185,
      },
      {
        name: 'stateDues',
        label: 'State Association Dues',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'localDues',
        label: 'Local Board Dues',
        type: 'number',
        defaultValue: 450,
      },
      {
        name: 'additionalMemberships',
        label: 'Number of Additional Memberships',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'avgAdditionalCost',
        label: 'Avg Cost of Additional Memberships',
        type: 'number',
        defaultValue: 200,
      },
    ],
    results: [
      { label: 'Total Annual Association Dues', isCurrency: true },
      { label: 'Monthly Cost', isCurrency: true },
      { label: 'Cost Per Transaction (12/year)', isCurrency: true },
      { label: 'Cost Per Transaction (24/year)', isCurrency: true },
    ],
    calculate: (data) => {
      const { narDues, stateDues, localDues, additionalMemberships, avgAdditionalCost } = data;
      
      const baseDues = parseFloat(narDues) + parseFloat(stateDues) + parseFloat(localDues);
      const additionalCosts = parseInt(additionalMemberships) * parseFloat(avgAdditionalCost);
      const totalAnnual = baseDues + additionalCosts;
      const monthly = Math.round(totalAnnual / 12);
      const costPer12 = Math.round(totalAnnual / 12);
      const costPer24 = Math.round(totalAnnual / 24);
      
      return [
        { label: 'Total Annual Association Dues', value: `$${Math.round(totalAnnual).toLocaleString()}` },
        { label: 'Monthly Cost', value: `$${monthly.toLocaleString()}` },
        { label: 'Cost Per Transaction (12/year)', value: `$${costPer12.toLocaleString()}` },
        { label: 'Cost Per Transaction (24/year)', value: `$${costPer24.toLocaleString()}` },
      ];
    },
  },
};
