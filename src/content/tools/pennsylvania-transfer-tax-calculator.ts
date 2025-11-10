import { CalculatorContent } from '@/types';

export const PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Pennsylvania Transfer Tax Calculator - State & Local Transfer Tax',
  description: 'Calculate Pennsylvania real estate transfer tax, local realty transfer tax, and recording fees',
  slug: 'pennsylvania-transfer-tax-calculator',
  icon: '🔔',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Pennsylvania Real Estate Transfer Tax',
    content: `
    <h2>Pennsylvania Transfer Tax Guide</h2>
    <p>Pennsylvania has one of the highest transfer tax rates in the United States, with a combined <strong>state and local rate of 2%</strong> on most property sales. Understanding who pays these taxes and how they're calculated is essential for both buyers and sellers.</p>
    
    <h3>Pennsylvania Transfer Tax Rates</h3>
    <p><strong>State Transfer Tax:</strong> 1% of sale price</p>
    <p><strong>Local Transfer Tax:</strong> 1% of sale price (combined county and municipality)</p>
    <p><strong>Total Standard Rate:</strong> 2% of sale price</p>
    <p>This means on a $300,000 home, you'll pay $6,000 in transfer taxes ($3,000 state + $3,000 local).</p>

    <h3>Who Pays Pennsylvania Transfer Tax?</h3>
    <p>By default, Pennsylvania law states the seller pays the state transfer tax (1%) and the buyer pays the local transfer tax (1%). However, <strong>this is negotiable</strong> in the purchase agreement.</p>
    <p>Common arrangements:</p>
    <ul>
      <li><strong>50/50 Split:</strong> Each party pays 1% (most common)</li>
      <li><strong>Seller Pays All:</strong> Seller pays full 2% (buyer's market)</li>
      <li><strong>Buyer Pays All:</strong> Buyer pays full 2% (rare, very hot markets)</li>
      <li><strong>Per Contract:</strong> Specifically negotiated in agreement</li>
    </ul>

    <h3>Local Transfer Tax Breakdown</h3>
    <p>The 1% local rate is split between county and municipality:</p>
    <p><strong>County:</strong> Typically 0.5%</p>
    <p><strong>Municipality:</strong> Typically 0.5%</p>
    <p>Some municipalities charge less than 0.5%, making the total local tax less than 1%.</p>

    <h3>Special Municipal Rates</h3>
    <p>Some Pennsylvania municipalities have higher local rates:</p>
    <p><strong>Philadelphia:</strong> Total 4% (1% state + 3% city)</p>
    <p><strong>Pittsburgh:</strong> Total 4% (1% state + 3% local)</p>
    <p><strong>Scranton:</strong> Total 3% (1% state + 2% local)</p>
    <p>Always verify your specific municipality's rate, as they can vary significantly.</p>

    <h3>Pennsylvania Recording Fees</h3>
    <p>In addition to transfer taxes, you'll pay county recording fees:</p>
    <p><strong>Deed Recording:</strong> $125-$175</p>
    <p><strong>Mortgage Recording:</strong> $125-$175</p>
    <p><strong>Additional Pages:</strong> $2-$5 per page beyond the first</p>
    <p>These fees vary by county and are typically paid by the buyer.</p>

    <h3>Pennsylvania Transfer Tax vs Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $300K</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania (Standard)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania (Philadelphia)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <h3>Transfer Tax Exemptions in Pennsylvania</h3>
    <p>Certain transfers are exempt from Pennsylvania transfer tax:</p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Transfers to/from government entities</li>
      <li>Gifts with no monetary consideration</li>
      <li>Transfers to secure or release debt</li>
      <li>Certain nonprofit transfers</li>
      <li>Partition of jointly-owned property (in some cases)</li>
      <li>Certain agricultural transfers</li>
    </ul>
    <p>Exemptions must be documented on the deed and filed with the county.</p>

    <h3>First-Time Homebuyer Programs</h3>
    <p>Pennsylvania offers no state-level transfer tax reduction for first-time homebuyers. However, some counties and municipalities offer:</p>
    <ul>
      <li>Reduced local transfer tax rates</li>
      <li>Transfer tax deferral programs</li>
      <li>Down payment assistance (not transfer tax relief)</li>
    </ul>

    <h3>Example: Selling a $400,000 Home in Pennsylvania</h3>
    <p><strong>Transfer Tax Costs:</strong></p>
    <ul>
      <li>State Transfer Tax (1%): $4,000</li>
      <li>Local Transfer Tax (1%): $4,000</li>
      <li>Recording Fees: $150</li>
      <li><strong>Total Transfer Costs: $8,150</strong></li>
    </ul>
    <p>If split 50/50 between buyer and seller:</p>
    <ul>
      <li>Seller pays: $4,075</li>
      <li>Buyer pays: $4,075</li>
    </ul>

    <h3>Philadelphia Real Estate Transfer Tax</h3>
    <p>Philadelphia has significantly higher rates:</p>
    <p><strong>Total Rate:</strong> 4% (1% state + 3% city)</p>
    <p><strong>Split:</strong> Typically 50/50 (2% each party)</p>
    <p><strong>First-Time Buyers:</strong> May qualify for reduced 1% city tax (instead of 3%) if:</p>
    <ul>
      <li>Never owned property in Philadelphia before</li>
      <li>Property will be primary residence</li>
      <li>Owner occupancy for at least 3 years</li>
    </ul>
    <p>This saves first-time buyers $6,000 on a $300,000 home.</p>

    <h3>Pennsylvania Seller Closing Costs</h3>
    <p>Typical seller costs in Pennsylvania (on $350,000 home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $17,500-$21,000</li>
      <li>Transfer Tax (1% or 2%): $3,500-$7,000</li>
      <li>Title Insurance: $1,000-$1,500</li>
      <li>Attorney Fees: $500-$1,500</li>
      <li>Outstanding Liens: Variable</li>
      <li>Prorated Taxes: Variable</li>
      <li><strong>Total: $22,500-$31,000 (6.4-8.9%)</strong></li>
    </ul>

    <h3>How to Reduce Transfer Tax Burden</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Negotiate for buyer to pay full transfer tax</li>
      <li>Offer concessions instead of price reductions</li>
      <li>Factor into listing price in buyer's market</li>
      <li>Consider FSBO to save commission, not transfer tax</li>
    </ul>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>In Philadelphia: Verify first-time buyer eligibility for reduced rate</li>
      <li>Negotiate split in purchase agreement</li>
      <li>Request seller concessions to offset transfer tax</li>
      <li>Budget 2-4% for all closing costs including transfer tax</li>
    </ul>

    <h3>When is Pennsylvania Transfer Tax Due?</h3>
    <p>Transfer tax is paid at closing and must be reported within 90 days using:</p>
    <ul>
      <li><strong>REV-183:</strong> Pennsylvania Realty Transfer Tax Statement of Value</li>
      <li><strong>Local Forms:</strong> County and municipal transfer tax forms</li>
      <li>Failure to file can result in penalties and interest</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property location, sale price, and local tax rate to calculate:</p>
    <ul>
      <li>Pennsylvania state transfer tax (1%)</li>
      <li>Local transfer tax (county + municipality)</li>
      <li>Total transfer tax burden</li>
      <li>Recording fees</li>
      <li>Cost breakdown by payer (buyer/seller/split)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard PA (2% total)' },
          { value: 'philadelphia', label: 'Philadelphia (4% total)' },
          { value: 'philadelphia_first_time', label: 'Philadelphia - First-Time Buyer (2%)' },
          { value: 'pittsburgh', label: 'Pittsburgh (4% total)' },
          { value: 'custom', label: 'Custom Rate' },
        ],
        defaultValue: 'standard',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'customLocalRate',
        label: 'Custom Local Tax Rate (%)',
        type: 'number',
        defaultValue: 1.0,
      },
      {
        name: 'paymentSplit',
        label: 'Who Pays Transfer Tax',
        type: 'select',
        options: [
          { value: 'split', label: '50/50 Split (Most Common)' },
          { value: 'seller', label: 'Seller Pays All' },
          { value: 'buyer', label: 'Buyer Pays All' },
          { value: 'default', label: 'PA Default (Seller 1%, Buyer 1%)' },
        ],
        defaultValue: 'split',
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 150,
      },
    ],
    results: [
      { label: 'PA State Transfer Tax (1%)', isCurrency: true },
      { label: 'Local Transfer Tax', isCurrency: true },
      { label: 'Total Transfer Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Seller Pays', isCurrency: true },
      { label: 'Buyer Pays', isCurrency: true },
      { label: 'Transfer Tax as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        location,
        salePrice,
        customLocalRate,
        paymentSplit,
        recordingFees,
      } = values;

      const stateRate = 0.01; // Always 1%
      let localRate = 0.01; // Default 1%

      // Adjust local rate based on location
      if (location === 'philadelphia') {
        localRate = 0.03; // 3% city tax
      } else if (location === 'philadelphia_first_time') {
        localRate = 0.01; // 1% reduced rate for first-time buyers
      } else if (location === 'pittsburgh') {
        localRate = 0.03; // 3% local tax
      } else if (location === 'custom') {
        localRate = customLocalRate / 100;
      }

      const stateTransferTax = salePrice * stateRate;
      const localTransferTax = salePrice * localRate;
      const totalTransferTax = stateTransferTax + localTransferTax;
      const totalCosts = totalTransferTax + recordingFees;

      let sellerPays = 0;
      let buyerPays = 0;

      if (paymentSplit === 'split') {
        sellerPays = totalTransferTax / 2 + recordingFees / 2;
        buyerPays = totalTransferTax / 2 + recordingFees / 2;
      } else if (paymentSplit === 'seller') {
        sellerPays = totalTransferTax + recordingFees;
        buyerPays = 0;
      } else if (paymentSplit === 'buyer') {
        sellerPays = 0;
        buyerPays = totalTransferTax + recordingFees;
      } else { // default PA law
        sellerPays = stateTransferTax;
        buyerPays = localTransferTax + recordingFees;
      }

      const percentageOfSale = (totalTransferTax / salePrice) * 100;

      return [
        { label: 'PA State Transfer Tax (1%)', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'Local Transfer Tax', value: localTransferTax.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Tax', value: totalTransferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Seller Pays', value: sellerPays.toFixed(2), isCurrency: true },
        { label: 'Buyer Pays', value: buyerPays.toFixed(2), isCurrency: true },
        { label: 'Transfer Tax as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
