import { CalculatorContent } from '@/types';

export const MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Michigan Transfer Tax Calculator - State & County Transfer Tax',
  description: 'Calculate Michigan real estate transfer tax and county transfer tax',
  slug: 'michigan-transfer-tax-calculator',
  icon: '🏞️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Michigan Real Estate Transfer Tax',
    content: `
    <h2>Michigan Transfer Tax Guide</h2>
    <p>Michigan charges a <strong>state transfer tax</strong> of <strong>$3.75 per $500</strong> (0.75%) plus <strong>county transfer tax</strong> of <strong>$0.55 per $500</strong> (0.11%), for a total of <strong>$4.30 per $500 (0.86%)</strong> on most property transfers.</p>
    
    <h3>Michigan State Transfer Tax</h3>
    <p><strong>State Rate:</strong> $3.75 per $500 of value (0.75%)</p>
    <p>This is Michigan's standard state transfer tax rate that applies to all real estate transfers statewide.</p>

    <h3>County Transfer Tax</h3>
    <p><strong>County Rate:</strong> $0.55 per $500 of value (0.11%)</p>
    <p>All Michigan counties charge this uniform county transfer tax in addition to the state tax.</p>

    <h3>Total Combined Rate</h3>
    <p><strong>Combined:</strong> $4.30 per $500 (0.86%)</p>
    <p>On a $300,000 home, the combined transfer tax is $2,580 ($2,250 state + $330 county).</p>

    <h3>Who Pays Michigan Transfer Tax?</h3>
    <p>Michigan law states the seller pays the transfer tax unless the purchase agreement specifies otherwise. By custom:</p>
    <ul>
      <li><strong>Seller pays:</strong> State + county transfer tax (most common)</li>
      <li><strong>Negotiable:</strong> Can be split or shifted to buyer in contract</li>
      <li><strong>Buyer's market:</strong> Seller usually pays full amount</li>
      <li><strong>Seller's market:</strong> Sometimes split 50/50</li>
    </ul>

    <h3>Michigan Recording Fees</h3>
    <p>County recording fees in Michigan:</p>
    <p><strong>Deed Recording:</strong> $30 first page + $3 per additional page</p>
    <p><strong>Mortgage Recording:</strong> $30 first page + $3 per additional page</p>
    <p><strong>Discharge of Mortgage:</strong> $10-$20</p>

    <h3>Example: $350,000 Home Purchase</h3>
    <p><strong>State Transfer Tax:</strong> ($350,000 ÷ $500) × $3.75 = $2,625</p>
    <p><strong>County Transfer Tax:</strong> ($350,000 ÷ $500) × $0.55 = $385</p>
    <p><strong>Recording Fees:</strong> $60</p>
    <p><strong>Total Transfer Costs: $3,070</strong></p>

    <h3>Transfer Tax Exemptions</h3>
    <p>Michigan grants exemptions for:</p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Gifts without consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Certain court-ordered transfers</li>
      <li>Transfers to secure or release a debt</li>
      <li>Principal residence transfers between relatives</li>
    </ul>

    <h3>Michigan vs Great Lakes States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">On $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Michigan</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.86%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,580</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ohio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1-0.4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-$1,200</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Illinois</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1-0.85%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-$2,550</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Indiana</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price to calculate:</p>
    <ul>
      <li>Michigan state transfer tax</li>
      <li>County transfer tax</li>
      <li>Combined transfer tax</li>
      <li>Recording fees</li>
      <li>Total transfer costs</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 60,
      },
    ],
    results: [
      { label: 'MI State Transfer Tax (0.75%)', isCurrency: true },
      { label: 'County Transfer Tax (0.11%)', isCurrency: true },
      { label: 'Total Transfer Tax (0.86%)', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Tax as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, recordingFees } = values;

      const stateTransferTax = (salePrice / 500) * 3.75; // $3.75 per $500
      const countyTransferTax = (salePrice / 500) * 0.55; // $0.55 per $500
      const totalTransferTax = stateTransferTax + countyTransferTax;
      const totalCosts = totalTransferTax + recordingFees;
      const percentageOfSale = (totalTransferTax / salePrice) * 100;

      return [
        { label: 'MI State Transfer Tax (0.75%)', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'County Transfer Tax (0.11%)', value: countyTransferTax.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Tax (0.86%)', value: totalTransferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Tax as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
