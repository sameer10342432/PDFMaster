import { CalculatorContent } from '@/types';

export const BROKERAGE_FEE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Brokerage Fee Structure Analyzer (Desk Fee vs Split)',
  description: 'Compare desk fee vs commission split models to determine which maximizes your income.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'brokerage-fee-analyzer',
  article: {
    title: 'Desk Fee vs Commission Split: Complete Comparison Guide',
    content: `
Choosing between desk fee and commission split models significantly impacts your income. The right choice depends on your production level.

### Commission Split Model

**How It Works:**
- Pay percentage to broker on each deal
- Common splits: 50/50, 60/40, 70/30, 80/20
- May have annual cap
- Lower upfront costs

**Best For:**
- New agents (low production)
- Agents needing leads
- Agents wanting full support
- Uncertain income

**Example:**
- 70/30 split
- $100K gross commission
- To broker: $30,000
- To agent: $70,000

### Desk Fee Model

**How It Works:**
- Monthly flat fee ($500-$2,000)
- Keep 100% of commissions
- Pay per-transaction fee ($250-$500)
- Higher upfront costs

**Best For:**
- Experienced agents
- Self-generators
- High producers
- Predictable income

**Example:**
- $1,000/month desk fee ($12K/year)
- $300 per transaction × 20 deals = $6K
- Total fees: $18K
- On $100K production, keep $82K

### Break-Even Analysis

**The Math:**
Break-even = (Annual Desk Fee + Transaction Fees) / (Split Percentage Difference)

**Example:**
- Desk fee: $12K/year
- Transaction fees: $6K (20 deals)
- Current split: 70%
- Break-even: $18K / 0.30 = $60K

If you produce over $60K, desk fee model pays more.

### Hidden Factors

**Commission Split Pros:**
- Lower risk
- No monthly obligation
- Full support services
- Better when starting

**Desk Fee Pros:**
- Higher income at scale
- More independence
- Better at $75K+ production
- Own your business

**Questions to Ask:**
1. What's your current production?
2. How many deals per year?
3. Do you generate own leads?
4. Need broker support/leads?
5. Risk tolerance?

## How to Use This Analyzer

Compare both models based on your production:
1. Enter annual production
2. Number of transactions
3. Current/offered split
4. Desk fee amount
5. Transaction fees

See which model maximizes your income.
`,
  },
  calculator: {
    fields: [
      {
        name: 'annualProduction',
        label: 'Annual Gross Commission',
        type: 'number',
        defaultValue: 100000,
      },
      {
        name: 'transactions',
        label: 'Number of Transactions Per Year',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'splitPercent',
        label: 'Commission Split % (Your Share)',
        type: 'number',
        defaultValue: 70,
      },
      {
        name: 'deskFee',
        label: 'Monthly Desk Fee',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'transactionFee',
        label: 'Per-Transaction Fee (Desk Fee Model)',
        type: 'number',
        defaultValue: 300,
      },
    ],
    results: [
      { label: 'Split Model Net Income', isCurrency: true },
      { label: 'Desk Fee Model Net Income', isCurrency: true },
      { label: 'Better Option', isCurrency: false },
    ],
    calculate: (data) => {
      const { annualProduction, transactions, splitPercent, deskFee, transactionFee } = data;
      
      const splitModelNet = parseFloat(annualProduction) * (parseFloat(splitPercent) / 100);
      
      const deskFeeCosts = (parseFloat(deskFee) * 12) + (parseInt(transactions) * parseFloat(transactionFee));
      const deskModelNet = parseFloat(annualProduction) - deskFeeCosts;
      
      const difference = deskModelNet - splitModelNet;
      let better = 'Split Model';
      if (difference > 0) {
        better = `Desk Fee (saves $${Math.round(difference).toLocaleString()})`;
      } else if (difference < 0) {
        better = `Split Model (saves $${Math.round(Math.abs(difference)).toLocaleString()})`;
      } else {
        better = 'Equal';
      }
      
      return [
        { label: 'Split Model Net Income', value: `$${Math.round(splitModelNet).toLocaleString()}` },
        { label: 'Desk Fee Model Net Income', value: `$${Math.round(deskModelNet).toLocaleString()}` },
        { label: 'Better Option', value: better },
      ];
    },
  },
};
