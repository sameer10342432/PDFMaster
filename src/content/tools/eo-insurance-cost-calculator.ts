import { CalculatorContent } from '@/types';

export const EO_INSURANCE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'E&O Insurance Cost Calculator',
  description: 'Calculate Errors & Omissions insurance costs for real estate agents based on coverage level and claims history.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'eo-insurance-cost-calculator',
  article: {
    title: 'E&O Insurance for Real Estate Agents: Complete Cost Guide',
    content: `
Errors & Omissions (E&O) insurance is essential protection for real estate agents against professional liability claims.

### What is E&O Insurance?

**Coverage Protection:**
- Professional negligence claims
- Misrepresentation allegations
- Failure to disclose material facts
- Breach of fiduciary duty
- Contract disputes
- Defense costs and legal fees

**Why Agents Need E&O:**
- Protects personal assets from lawsuits
- Required by many brokerages
- Increases client confidence
- Covers mistakes even after you're no longer an agent

### Cost Factors

**Annual Premium Ranges:**
- New agents: $300-500/year
- Experienced agents (clean record): $400-700/year
- High-volume agents: $700-1,200/year
- Agents with claims history: $1,500-3,000+/year

**Coverage Levels:**
- $500,000 coverage: Lower premiums
- $1,000,000 coverage: Standard (most common)
- $2,000,000+ coverage: Premium pricing

**Factors Affecting Cost:**
- Transaction volume per year
- Claims history
- Coverage amount
- Deductible selected
- Years of experience
- Geographic location
- Brokerage requirements

### Choosing Coverage

**Standard Coverage ($1M/$1M):**
- $1M per occurrence
- $1M aggregate annual limit
- Typical cost: $400-700/year
- Recommended for most agents

**Higher Coverage ($2M/$2M):**
- Luxury market agents
- High transaction volume
- Additional peace of mind
- Typical cost: $700-1,200/year

**Deductible Options:**
- $0 deductible: Higher premiums
- $2,500 deductible: Moderate savings
- $5,000 deductible: Lower premiums
- $10,000 deductible: Significant savings

### How to Reduce Costs

**Best Practices:**
- Maintain clean claims history
- Take risk management courses
- Join professional associations (group rates)
- Increase deductible if financially able
- Bundle with other business insurance
- Shop multiple carriers annually

**Red Flags That Increase Premiums:**
- Multiple claims in 5 years
- Lawsuit settlements
- License suspensions
- High-risk transaction types (commercial, land)

## How to Use This Calculator

Enter your information:
1. Years of experience in real estate
2. Annual transaction volume
3. Desired coverage amount
4. Number of claims in last 5 years
5. Selected deductible amount

Get estimated annual E&O insurance premium.
`,
  },
  calculator: {
    fields: [
      {
        name: 'experience',
        label: 'Years of Experience',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'transactions',
        label: 'Annual Transactions',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'coverage',
        label: 'Coverage Amount',
        type: 'select',
        options: [
          { value: '500000', label: '$500,000' },
          { value: '1000000', label: '$1,000,000' },
          { value: '2000000', label: '$2,000,000' },
        ],
        defaultValue: '1000000',
      },
      {
        name: 'claims',
        label: 'Claims in Last 5 Years',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'deductible',
        label: 'Deductible',
        type: 'select',
        options: [
          { value: '0', label: '$0' },
          { value: '2500', label: '$2,500' },
          { value: '5000', label: '$5,000' },
          { value: '10000', label: '$10,000' },
        ],
        defaultValue: '2500',
      },
    ],
    results: [
      { label: 'Estimated Annual Premium', isCurrency: true },
      { label: 'Monthly Cost', isCurrency: true },
      { label: 'Cost Per Transaction', isCurrency: true },
    ],
    calculate: (data) => {
      const { experience, transactions, coverage, claims, deductible } = data;
      
      let basePremium = 450;
      
      if (coverage === '500000') basePremium = 350;
      if (coverage === '2000000') basePremium = 850;
      
      if (parseInt(experience) < 2) basePremium *= 1.3;
      else if (parseInt(experience) > 10) basePremium *= 0.9;
      
      if (parseInt(transactions) > 24) basePremium *= 1.4;
      else if (parseInt(transactions) > 15) basePremium *= 1.2;
      
      const claimsMultiplier = 1 + (parseInt(claims) * 0.75);
      basePremium *= claimsMultiplier;
      
      if (deductible === '2500') basePremium *= 0.95;
      if (deductible === '5000') basePremium *= 0.85;
      if (deductible === '10000') basePremium *= 0.75;
      
      const annualPremium = Math.round(basePremium);
      const monthlyCost = Math.round(annualPremium / 12);
      const costPerTransaction = Math.round(annualPremium / Math.max(1, parseInt(transactions)));
      
      return [
        { label: 'Estimated Annual Premium', value: `$${annualPremium.toLocaleString()}` },
        { label: 'Monthly Cost', value: `$${monthlyCost.toLocaleString()}` },
        { label: 'Cost Per Transaction', value: `$${costPerTransaction.toLocaleString()}` },
      ];
    },
  },
};
