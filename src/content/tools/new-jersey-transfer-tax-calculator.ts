import { CalculatorContent } from '@/types';

export const NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Jersey Transfer Tax Calculator - Realty Transfer Fee & Mansion Tax',
  description: 'Calculate New Jersey realty transfer fee, mansion tax, and recording fees',
  slug: 'new-jersey-transfer-tax-calculator',
  icon: '🌊',
  category: 'Seller Tools',
  article: {
    title: 'Understanding New Jersey Real Estate Transfer Tax',
    content: `
    <h2>New Jersey Transfer Tax Guide</h2>
    <p>New Jersey has a complex transfer tax structure with a <strong>realty transfer fee</strong>, <strong>mansion tax</strong> for high-value properties, and potential <strong>recording fees</strong>. Understanding all these costs is essential for accurate closing estimates.</p>
    
    <h3>New Jersey Realty Transfer Fee</h3>
    <p><strong>Standard Rate:</strong> $2 to $5.90 per $500 (0.4% to 1.18%)</p>
    <p>The rate depends on the property type and sale price:</p>
    <ul>
      <li><strong>Class 1 (Residential, Under $1M):</strong> 1% of sale price</li>
      <li><strong>Class 1 (Residential, $1M and above):</strong> 1% of sale price</li>
      <li><strong>Class 2 (Residential, $1M+):</strong> 1% plus mansion tax</li>
      <li><strong>Class 4A (Commercial/Industrial):</strong> Variable rates</li>
    </ul>

    <h3>New Jersey Mansion Tax</h3>
    <p>Properties selling for $1 million or more face an additional <strong>mansion tax</strong>:</p>
    <p><strong>Rate:</strong> 1% of the amount over $1 million</p>
    <p>Examples:</p>
    <ul>
      <li>$1,200,000 home: Mansion tax on $200,000 = $2,000</li>
      <li>$2,500,000 home: Mansion tax on $1,500,000 = $15,000</li>
      <li>$5,000,000 home: Mansion tax on $4,000,000 = $40,000</li>
    </ul>

    <h3>Who Pays New Jersey Transfer Fees?</h3>
    <p>By New Jersey law:</p>
    <p><strong>Seller pays:</strong> Realty transfer fee (0.78%)</p>
    <p><strong>Buyer pays:</strong> Portion of realty transfer fee (0.22%) + mansion tax if applicable</p>
    <p>Total combined rate for properties under $1M is approximately <strong>1% of sale price</strong>.</p>

    <h3>New Jersey Recording Fees</h3>
    <p>County recording fees vary:</p>
    <p><strong>Deed Recording:</strong> $50-$125</p>
    <p><strong>Mortgage Recording:</strong> $200-$300</p>
    <p><strong>Additional Pages:</strong> $5-$10 per page</p>

    <h3>Example: $1,500,000 Home in NJ</h3>
    <p><strong>Seller's Costs:</strong></p>
    <ul>
      <li>Realty Transfer Fee (0.78%): $11,700</li>
      <li>Recording Fees: $75</li>
      <li><strong>Total Seller: $11,775</strong></li>
    </ul>
    <p><strong>Buyer's Costs:</strong></p>
    <ul>
      <li>Realty Transfer Fee (0.22%): $3,300</li>
      <li>Mansion Tax (1% on $500K): $5,000</li>
      <li>Recording Fees: $250</li>
      <li><strong>Total Buyer: $8,550</strong></li>
    </ul>
    <p><strong>Combined Transfer Costs: $20,325 (1.36%)</strong></p>

    <h3>Transfer Tax Exemptions</h3>
    <p>New Jersey grants exemptions for:</p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Transfers to secure or release debt</li>
      <li>Gifts without consideration</li>
      <li>Certain court-ordered transfers</li>
      <li>Government transfers</li>
    </ul>

    <h3>New Jersey vs New York Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Under $1M</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.5M Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Jersey</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~1.36%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New York (NYC)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~1.83%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">~2.93%</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>New Jersey realty transfer fee</li>
      <li>Mansion tax (if $1M+)</li>
      <li>Recording fees</li>
      <li>Buyer and seller costs breakdown</li>
      <li>Total combined transfer costs</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 325,
      },
    ],
    results: [
      { label: 'Realty Transfer Fee - Seller (0.78%)', isCurrency: true },
      { label: 'Realty Transfer Fee - Buyer (0.22%)', isCurrency: true },
      { label: 'Mansion Tax (Buyer)', isCurrency: true },
      { label: 'Total Seller Costs', isCurrency: true },
      { label: 'Total Buyer Costs', isCurrency: true },
      { label: 'Combined Transfer Costs', isCurrency: true },
      { label: 'Total as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, recordingFees } = values;

      const sellerRate = 0.0078; // 0.78%
      const buyerRate = 0.0022; // 0.22%
      
      const sellerTransferFee = salePrice * sellerRate;
      const buyerTransferFee = salePrice * buyerRate;
      
      // Mansion tax: 1% on amount over $1M
      let mansionTax = 0;
      if (salePrice > 1000000) {
        mansionTax = (salePrice - 1000000) * 0.01;
      }

      const totalSellerCosts = sellerTransferFee + (recordingFees / 2);
      const totalBuyerCosts = buyerTransferFee + mansionTax + (recordingFees / 2);
      const combinedCosts = sellerTransferFee + buyerTransferFee + mansionTax + recordingFees;
      const percentageOfSale = (combinedCosts / salePrice) * 100;

      return [
        { label: 'Realty Transfer Fee - Seller (0.78%)', value: sellerTransferFee.toFixed(2), isCurrency: true },
        { label: 'Realty Transfer Fee - Buyer (0.22%)', value: buyerTransferFee.toFixed(2), isCurrency: true },
        { label: 'Mansion Tax (Buyer)', value: mansionTax.toFixed(2), isCurrency: true },
        { label: 'Total Seller Costs', value: totalSellerCosts.toFixed(2), isCurrency: true },
        { label: 'Total Buyer Costs', value: totalBuyerCosts.toFixed(2), isCurrency: true },
        { label: 'Combined Transfer Costs', value: combinedCosts.toFixed(2), isCurrency: true },
        { label: 'Total as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
