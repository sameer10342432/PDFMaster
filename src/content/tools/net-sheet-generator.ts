import { CalculatorContent } from '@/types';

export const NET_SHEET_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Net Sheet Generator (for Seller Clients)',
  description: 'Generate accurate net proceeds calculations for sellers showing exact costs, commissions, and estimated proceeds from their home sale with detailed line-item breakdown.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'net-sheet-generator',
  article: {
    title: 'Net Sheet Generator: Accurate Seller Proceeds Calculator',
    content: `
A net sheet (seller's net proceeds estimate) is a critical document that shows sellers exactly how much money they'll walk away with after selling their home.

### What is a Net Sheet?

A net sheet is a detailed breakdown of all costs associated with selling a property, resulting in the estimated net proceeds the seller will receive at closing.

**Purpose:**
- Shows true cost of selling
- Manages seller expectations
- Helps sellers make informed decisions
- Prevents closing day surprises
- Enables accurate financial planning

### Key Components of a Net Sheet

**1. Gross Sale Price**
- Listed or expected sale price
- Basis for all calculations
- Starting point for net proceeds

**2. Selling Costs**

**Real Estate Commissions (5-6% typical):**
- Listing agent commission: 2.5-3%
- Buyer's agent commission: 2.5-3%
- Total: $25,000-$30,000 on $500K sale

**3. Seller Closing Costs (1-3%)**

**Title and Escrow:**
- Title insurance: $500-$2,000
- Escrow/closing fee: $300-$800
- Document preparation: $200-$400
- Recording fees: $100-$300

**Prorated Items:**
- Property taxes: Varies by sale date
- HOA dues: Prorated to closing
- Utilities: Final readings
- Rent (if tenant occupied)

**Payoffs and Liens:**
- First mortgage payoff
- Second mortgage/HELOC payoff
- HOA assessments
- Judgment liens
- Tax liens
- Mechanic's liens

**Repairs and Concessions:**
- Inspection repairs negotiated
- Buyer credits/concessions
- Required lender repairs
- Safety/code violations
- Termite treatment
- Home warranty: $400-$600

**Other Costs:**
- Home warranty for buyer: $400-$600
- HOA transfer fees: $200-$500
- HOA document fees: $200-$400
- Survey (if required): $300-$600
- Septic inspection: $200-$500
- Well inspection: $200-$400

**4. Credits and Reductions**
- Earnest money deposit (credited to buyer)
- Seller concessions toward closing costs
- Repair credits from inspection
- Appliance credits
- Price reductions from negotiation

**5. Proceeds**
- Gross sale price
- Minus all costs and payoffs
- Equals net proceeds to seller

### Typical Net Sheet Example

**Sale Price: $500,000**

**Costs:**
- Listing commission (3%): -$15,000
- Buyer's agent commission (3%): -$15,000
- Title insurance: -$1,200
- Escrow fee: -$600
- Transfer tax: -$2,500
- HOA transfer: -$300
- Home warranty: -$500
- Prorated property tax credit: -$1,800
- Inspection repairs: -$2,000

**Payoffs:**
- First mortgage: -$350,000
- HELOC: -$25,000

**Total Costs: $413,900**
**Net Proceeds: $86,100**

### State-Specific Transfer Taxes

**High Transfer Tax States:**
- Delaware: 3-4% (2% buyer, 1-2% seller)
- New York: 0.4-2.075%
- Washington: 1.6-3%
- Pennsylvania: 1-2%
- Vermont: 1.25-1.45%

**No Transfer Tax States:**
- Alaska
- Idaho  
- Indiana
- Louisiana
- Mississippi
- Missouri
- Montana
- New Mexico
- North Dakota
- Oregon
- Texas
- Utah
- Wyoming

**Average/Moderate:**
- California: $1.10 per $1,000
- Florida: $0.70 per $100
- Illinois: $1-$1.50 per $1,000
- Most other states: 0.1-1%

### Common Seller Payoffs

**Mortgage Payoff:**
- Principal balance
- Accrued interest to closing
- Prepayment penalties (rare)
- Processing fees: $50-$150

**HELOC Payoff:**
- Outstanding balance
- Daily interest calculation
- Early closure fees

**HOA Items:**
- Special assessments
- Unpaid dues
- Transfer fees
- Document fees
- Capital improvement assessments

**Property Tax Proration:**
- Seller pays through closing date
- Buyer responsible after closing
- May show as debit or credit
- Based on tax year and payment status

### Negotiated Seller Concessions

**Typical Buyer Requests:**
- Closing cost assistance: 1-3% of price
- Interest rate buy-down
- Repair credits from inspection
- Home warranty purchase
- Appliance inclusion
- Personal property inclusion

**Maximum Concessions by Loan Type:**
- Conventional: 3-9% depending on down payment
- FHA: 6% maximum
- VA: 4% maximum
- USDA: 6% maximum

### When to Provide a Net Sheet

**At Listing Appointment:**
- Show realistic expectations
- Demonstrate expertise
- Discuss pricing strategy
- Build trust and transparency

**Before Price Reduction:**
- Show financial impact
- Discuss net proceeds change
- Help seller make informed decision
- Manage expectations

**When Reviewing Offers:**
- Compare multiple offers accurately
- Show true net proceeds difference
- Consider price vs terms
- Evaluate concession requests

**During Negotiations:**
- Calculate counter offer impact
- Show cost of repair credits
- Evaluate inspection requests
- Make data-driven decisions

### Net Sheet Accuracy

**Estimates vs Actual:**
- Net sheet is an estimate
- Actual costs determined at closing
- Payoff balances change daily
- Prorations based on closing date
- Inspection repairs may vary

**Important Disclaimers:**
- "Estimate subject to change"
- "Actual costs determined at closing"
- "Consult tax advisor"
- "Not a guarantee"

### Digital Tools for Net Sheets

**MLS Net Sheet Calculator:**
- Built into most MLS systems
- Basic calculations
- Free for members

**Title Company Calculators:**
- Accurate transfer taxes
- Current title fees
- State-specific costs

**Agent Software:**
- Cloud CMA: $45-$99/month
- Dotloop: $29-$59/month
- SkySlope: $55-$85/month
- Integrated with transactions

### Professional Presentation

**Clear Format:**
- Line-item detail
- Category subtotals
- Bold final net proceeds
- Easy to understand
- Professional appearance

**Include:**
- Your contact information
- Date prepared
- Sale price scenario
- All assumption notes
- "Estimate subject to change" disclaimer

**Delivery:**
- Email PDF
- Print for in-person review
- Include with listing presentation
- Update as needed
- Provide multiple scenarios

### Multiple Scenarios

**Price Point Comparison:**
- $500,000 list price
- $490,000 scenario
- $480,000 scenario
- Shows impact of pricing

**Concession Comparison:**
- No concessions
- 2% buyer concessions
- 3% buyer concessions
- Helps evaluate offers

## How to Use This Generator

Input sale details:
1. Expected sale price
2. Current mortgage balance(s)
3. Commission rate structure
4. Estimated closing costs
5. Expected repairs/concessions
6. Property tax proration
7. Other liens or payoffs

Generate detailed net sheet showing:
- Gross sale price
- Complete cost breakdown
- All payoffs and liens
- Seller concessions
- Prorated items
- Net proceeds estimate
- Professional formatted document
- Multiple price scenarios

This generator creates accurate, professional net sheets that help sellers understand their true proceeds and make informed decisions about pricing and offers.
`,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Expected Sale Price ($)',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'mortgageBalance',
        label: 'Mortgage Balance ($)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'commissionRate',
        label: 'Total Commission Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'closingCosts',
        label: 'Other Closing Costs ($)',
        type: 'number',
        defaultValue: 5000,
      },
      {
        name: 'repairConcessions',
        label: 'Repair Concessions ($)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'propertyTaxCredit',
        label: 'Property Tax Credit ($)',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [
      { label: 'Gross Sale Price', isCurrency: true },
      { label: 'Total Commission', isCurrency: true },
      { label: 'Total Closing Costs', isCurrency: true },
      { label: 'Total Payoffs', isCurrency: true },
      { label: 'Net Proceeds to Seller', isCurrency: true },
    ],
    calculate: (data) => {
      const { salePrice, mortgageBalance, commissionRate, closingCosts, repairConcessions, propertyTaxCredit } = data;
      
      const grossSalePrice = parseFloat(salePrice);
      const commissionDecimal = parseFloat(commissionRate) / 100;
      const totalCommission = grossSalePrice * commissionDecimal;
      const totalClosingCosts = parseFloat(closingCosts) + parseFloat(repairConcessions) + parseFloat(propertyTaxCredit);
      const totalPayoffs = parseFloat(mortgageBalance);
      const netProceeds = grossSalePrice - totalCommission - totalClosingCosts - totalPayoffs;
      
      return [
        { label: 'Gross Sale Price', value: `$${grossSalePrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Commission', value: `$${totalCommission.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Closing Costs', value: `$${totalClosingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Total Payoffs', value: `$${totalPayoffs.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Net Proceeds to Seller', value: `$${netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
      ];
    },
  },
};
