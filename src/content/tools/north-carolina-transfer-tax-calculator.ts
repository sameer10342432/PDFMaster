import { CalculatorContent } from '@/types';

export const NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'North Carolina Transfer Tax Calculator - Excise Tax',
  description: 'Calculate North Carolina real estate excise tax and recording fees',
  slug: 'north-carolina-transfer-tax-calculator',
  icon: '🌲',
  category: 'Seller Tools',
  article: {
    title: 'Understanding North Carolina Real Estate Excise Tax',
    content: `
    <h2>North Carolina Excise Tax Guide</h2>
    <p>North Carolina charges a state <strong>excise tax</strong> (transfer tax) of <strong>$2 per $1,000</strong> (0.2% of sale price) on all real estate transfers. This is one of the lower transfer tax rates in the country, making North Carolina relatively affordable for property transfers.</p>
    
    <h3>North Carolina State Excise Tax Rate</h3>
    <p><strong>State Rate:</strong> $2 per $1,000 of consideration (0.2%)</p>
    <p>On a $300,000 home, the state excise tax is $600. The tax is calculated by rounding up to the nearest $500.</p>

    <h3>Who Pays North Carolina Excise Tax?</h3>
    <p>By law, both buyer and seller are jointly liable for the excise tax. However, by custom, the <strong>seller typically pays</strong> the excise tax. This is negotiable in the purchase contract.</p>

    <h3>No County or City Transfer Taxes</h3>
    <p>Unlike many states, North Carolina <strong>does not allow</strong> counties or municipalities to impose additional transfer taxes. The state excise tax is the only transfer tax you'll pay.</p>

    <h3>North Carolina Recording Fees</h3>
    <p>County recording fees in North Carolina:</p>
    <p><strong>Deed Recording:</strong> $26 first 15 pages + $4 per additional page</p>
    <p><strong>Deed of Trust Recording:</strong> $64 first 35 pages + $4 per additional page</p>
    <p><strong>Satisfaction/Release:</strong> $10</p>

    <h3>Example: $400,000 Home Purchase</h3>
    <p><strong>Excise Tax:</strong> $400,000 ÷ 1,000 × $2 = $800</p>
    <p><strong>Deed Recording:</strong> $26</p>
    <p><strong>Deed of Trust Recording:</strong> $64</p>
    <p><strong>Total Transfer Costs: $890</strong></p>
    <p>Typically:</p>
    <ul>
      <li>Seller pays: Excise tax ($800) + deed recording ($26) = $826</li>
      <li>Buyer pays: Deed of trust recording ($64)</li>
    </ul>

    <h3>Excise Tax Exemptions</h3>
    <p>North Carolina grants exemptions for:</p>
    <ul>
      <li>Transfers between spouses or to former spouse per divorce decree</li>
      <li>Gifts without monetary consideration</li>
      <li>Transfers to/from government entities</li>
      <li>Transfers to secure or release debt</li>
      <li>Partition of jointly-owned property (in some cases)</li>
      <li>Certain inheritance/estate transfers</li>
    </ul>

    <h3>NC Excise Tax Form E-500</h3>
    <p>The North Carolina excise tax is reported on <strong>Form E-500</strong> (North Carolina Revenue Stamp Affidavit), which must be:</p>
    <ul>
      <li>Completed at closing</li>
      <li>Attached to the deed</li>
      <li>Filed with the register of deeds</li>
      <li>Signed by buyer and seller</li>
    </ul>

    <h3>North Carolina vs Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">On $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Variable</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300-$600</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">South Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.185%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$555</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Georgia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price to calculate:</p>
    <ul>
      <li>North Carolina excise tax</li>
      <li>Recording fees</li>
      <li>Total transfer costs</li>
      <li>Typical buyer/seller split</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'deedPages',
        label: 'Deed Pages',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'deedOfTrustPages',
        label: 'Deed of Trust Pages',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'NC Excise Tax', isCurrency: true },
      { label: 'Deed Recording Fee', isCurrency: true },
      { label: 'Deed of Trust Recording Fee', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Seller Pays (Typical)', isCurrency: true },
      { label: 'Buyer Pays (Typical)', isCurrency: true },
      { label: 'Excise Tax as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, deedPages, deedOfTrustPages } = values;

      const exciseTax = (salePrice / 1000) * 2; // $2 per $1,000
      
      // Deed recording: $26 for first 15 pages + $4 per additional
      let deedRecording = 26;
      if (deedPages > 15) {
        deedRecording += (deedPages - 15) * 4;
      }
      
      // Deed of trust recording: $64 for first 35 pages + $4 per additional
      let deedOfTrustRecording = 64;
      if (deedOfTrustPages > 35) {
        deedOfTrustRecording += (deedOfTrustPages - 35) * 4;
      }

      const totalCosts = exciseTax + deedRecording + deedOfTrustRecording;
      const sellerPays = exciseTax + deedRecording; // Seller typically pays excise tax + deed recording
      const buyerPays = deedOfTrustRecording; // Buyer typically pays deed of trust recording
      const percentageOfSale = (exciseTax / salePrice) * 100;

      return [
        { label: 'NC Excise Tax', value: exciseTax.toFixed(2), isCurrency: true },
        { label: 'Deed Recording Fee', value: deedRecording.toFixed(2), isCurrency: true },
        { label: 'Deed of Trust Recording Fee', value: deedOfTrustRecording.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Seller Pays (Typical)', value: sellerPays.toFixed(2), isCurrency: true },
        { label: 'Buyer Pays (Typical)', value: buyerPays.toFixed(2), isCurrency: true },
        { label: 'Excise Tax as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
