import { CalculatorContent } from '@/types';

export const OHIO_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Ohio Transfer Tax Calculator - County Conveyance Fees',
  description: 'Calculate Ohio real estate transfer tax and county conveyance fees',
  slug: 'ohio-transfer-tax-calculator',
  icon: '🌰',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Ohio Real Estate Transfer Tax & Conveyance Fees',
    content: `
    <h2>Ohio Transfer Tax Guide</h2>
    <p>Ohio does <strong>not have a state-level transfer tax</strong>. Instead, counties charge conveyance fees that vary by location, typically ranging from <strong>$1 to $4 per $1,000</strong> of sale price (0.1% to 0.4%). This makes Ohio one of the most affordable states for transfer costs.</p>
    
    <h3>Ohio County Conveyance Fees</h3>
    <p>Each Ohio county sets its own conveyance fee rate:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Fee per $1,000</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rate %</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Franklin (Columbus)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.4%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Cuyahoga (Cleveland)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.4%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hamilton (Cincinnati)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.3%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Summit (Akron)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.3%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery (Dayton)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.3%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Most Other Counties</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1-$4</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1-0.4%</td>
      </tr>
    </table>

    <h3>Who Pays Ohio Conveyance Fees?</h3>
    <p>In Ohio, the conveyance fee is traditionally <strong>split 50/50</strong> between buyer and seller, though this is negotiable. Many purchase contracts specify the exact split in the terms.</p>

    <h3>Ohio Recording Fees</h3>
    <p>In addition to conveyance fees, counties charge recording fees:</p>
    <p><strong>Deed Recording:</strong> $34-$60</p>
    <p><strong>Mortgage Recording:</strong> $34-$60</p>
    <p><strong>Additional Pages:</strong> $4-$8 per page</p>

    <h3>Example: $300,000 Home in Franklin County</h3>
    <p><strong>Conveyance Fee:</strong> $300,000 ÷ 1,000 × $4 = $1,200</p>
    <p><strong>Recording Fee:</strong> $50</p>
    <p><strong>Total Transfer Costs: $1,250</strong></p>
    <p>If split 50/50:</p>
    <ul>
      <li>Seller pays: $625</li>
      <li>Buyer pays: $625</li>
    </ul>

    <h3>Exemptions from Ohio Conveyance Fees</h3>
    <p>Certain transfers are exempt:</p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Gifts to family members</li>
      <li>Transfers to secure or release debt</li>
      <li>Government transfers</li>
      <li>Certain court-ordered transfers</li>
    </ul>

    <h3>Ohio vs High-Tax States Comparison</h3>
    <p>Ohio's transfer costs are very affordable:</p>
    <ul>
      <li><strong>Ohio:</strong> 0.1-0.4% conveyance fee</li>
      <li><strong>Pennsylvania:</strong> 2% transfer tax</li>
      <li><strong>Delaware:</strong> 4% transfer tax</li>
      <li><strong>Washington:</strong> 1.78% transfer tax</li>
    </ul>
    <p>On a $300,000 home, Ohio saves you $1,500-$11,000 compared to these high-tax states.</p>

    <h3>How to Use This Calculator</h3>
    <p>Select your Ohio county, enter the sale price, and calculate:</p>
    <ul>
      <li>County conveyance fee</li>
      <li>Recording fees</li>
      <li>Total transfer costs</li>
      <li>Buyer and seller split</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'Ohio County',
        type: 'select',
        options: [
          { value: '4', label: 'Franklin/Cuyahoga ($4 per $1,000)' },
          { value: '3', label: 'Hamilton/Summit/Montgomery ($3 per $1,000)' },
          { value: '2', label: 'Other County ($2 per $1,000)' },
          { value: 'custom', label: 'Custom Rate' },
        ],
        defaultValue: '4',
      },
      {
        name: 'customRate',
        label: 'Custom Rate per $1,000',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 50,
      },
    ],
    results: [
      { label: 'County Conveyance Fee', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Seller Pays (50%)', isCurrency: true },
      { label: 'Buyer Pays (50%)', isCurrency: true },
      { label: 'Transfer Cost as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { county, customRate, salePrice, recordingFees } = values;

      let ratePerThousand = county === 'custom' ? customRate : parseFloat(county);
      const conveyanceFee = (salePrice / 1000) * ratePerThousand;
      const totalCosts = conveyanceFee + recordingFees;
      const sellerPays = totalCosts / 2;
      const buyerPays = totalCosts / 2;
      const percentageOfSale = (conveyanceFee / salePrice) * 100;

      return [
        { label: 'County Conveyance Fee', value: conveyanceFee.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Seller Pays (50%)', value: sellerPays.toFixed(2), isCurrency: true },
        { label: 'Buyer Pays (50%)', value: buyerPays.toFixed(2), isCurrency: true },
        { label: 'Transfer Cost as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
