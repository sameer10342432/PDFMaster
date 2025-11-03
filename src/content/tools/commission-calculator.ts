import { CalculatorContent } from '@/types';

export const COMMISSION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Commission Calculator',
  description: 'Calculate the commission for a real estate transaction. For agents and sellers.',
  icon: 'Icon',
  category: 'General',
  slug: 'commission-calculator',
    article: {
    title: 'Understanding Real Estate Commissions',
    content: `
A real estate commission is a fee paid to a real estate agent for their services in facilitating the sale of a property. This fee is typically a percentage of the property's sale price and is negotiated between the seller and the agent.

### How are commissions split?

The total commission is often split between the seller's agent and the buyer's agent. For example, a 6% commission might be split, with 3% going to the seller's agent and 3% to the buyer's agent.

### Who pays the commission?

Typically, the seller pays the commission from the proceeds of the sale. However, this can be a point of negotiation in the transaction.

## How to Use This Calculator

This calculator is designed to be straightforward. Here’s how to use it:

1.  **Sale Price:** Enter the final sale price of the property in the designated field.
2.  **Commission Rate (%):** Input the total commission percentage. For example, if the rate is 6%, simply enter 6.

The calculator will then compute the total commission amount in dollars. This figure represents the gross commission before any splits between agents or brokerages.
`,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Sale Price',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'commissionRate',
        label: 'Commission Rate (%)',
        type: 'number',
        defaultValue: 6,
      },
    ],
    results: [{ label: "Commission", isCurrency: true }],
    calculate: (data) => {
      const { salePrice, commissionRate } = data;
      const commission = salePrice * (commissionRate / 100);
      return [{ label: 'Commission', value: `$${commission.toLocaleString()}` }];
    },
  },
};