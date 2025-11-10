import { CalculatorContent } from '@/types';

export const NEW_YORK_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New York Transfer Tax Calculator - Mansion Tax & NYC Transfer Tax',
  description: 'Calculate New York State transfer tax, NYC transfer tax, mansion tax, and recording fees',
  slug: 'new-york-transfer-tax-calculator',
  icon: '🗽',
  category: 'Seller Tools',
  article: {
    title: 'Understanding New York Real Estate Transfer Tax & Mansion Tax',
    content: `
    <h2>New York Transfer Tax Guide</h2>
    <p>New York has some of the most complex transfer tax structures in the United States, with <strong>state transfer tax, NYC transfer tax, and mansion tax</strong> all potentially applying to a single transaction. Understanding these costs is critical for buyers and sellers in the New York real estate market.</p>
    
    <h3>New York State Transfer Tax Rates</h3>
    <p><strong>Standard Rate:</strong> $2 per $500 (0.4% of sale price)</p>
    <p><strong>Properties over $3 million:</strong> $2.50 per $500 (0.5%)</p>
    <p>The state transfer tax applies to all real property transfers in New York State, whether residential or commercial. It's calculated by rounding up to the nearest $500.</p>

    <h3>NYC Transfer Tax (Additional)</h3>
    <p>New York City imposes its own transfer tax on top of the state tax:</p>
    <p><strong>Properties under $500,000:</strong> 1% of sale price</p>
    <p><strong>Properties $500,000 and above:</strong> 1.425% of sale price</p>
    <p><strong>Commercial properties over $500,000:</strong> 2.625% of sale price</p>
    <p>This means NYC properties face combined state + city transfer taxes of approximately <strong>1.4% to 3.125%</strong> depending on the property type and value.</p>

    <h3>New York Mansion Tax (Buyer Pays)</h3>
    <p>The mansion tax is a progressive tax paid by <strong>buyers only</strong> on properties $1 million and above:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Purchase Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Mansion Tax Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Under $1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000 - $1,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,000,000 - $2,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.25%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000,000 - $4,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000,000 - $9,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.25%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$10,000,000 - $14,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.25%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$15,000,000 - $19,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.5%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$20,000,000 - $24,999,999</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.75%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$25,000,000 and above</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.9%</td>
      </tr>
    </table>

    <h3>Who Pays New York Transfer Tax?</h3>
    <p><strong>Seller typically pays:</strong> New York State transfer tax + NYC transfer tax</p>
    <p><strong>Buyer typically pays:</strong> Mansion tax (if applicable) + mortgage recording tax</p>
    <p>However, these are negotiable in the purchase contract. In competitive markets, buyers may agree to pay a portion of the seller's transfer taxes to strengthen their offer.</p>

    <h3>New York Mortgage Recording Tax (Buyer Pays)</h3>
    <p>Separate from transfer taxes, buyers with mortgages pay a mortgage recording tax:</p>
    <p><strong>NYC Properties:</strong></p>
    <ul>
      <li>1.8% for loans under $500,000</li>
      <li>1.925% for loans $500,000 and above</li>
      <li>Plus additional 0.25-0.3% for commercial properties</li>
    </ul>
    <p><strong>Rest of New York State:</strong></p>
    <ul>
      <li>0.5% for residential properties</li>
      <li>0.75% for commercial properties</li>
    </ul>
    <p>Lenders often credit buyers for a portion (usually 0.25%) of the mortgage recording tax, reducing the effective rate.</p>

    <h3>Example: $2,500,000 Manhattan Condo</h3>
    <p><strong>Seller's Transfer Costs:</strong></p>
    <ul>
      <li>NYS Transfer Tax (0.5%): $12,500</li>
      <li>NYC Transfer Tax (1.425%): $35,625</li>
      <li>Recording Fees: $250</li>
      <li><strong>Total Seller: $48,375 (1.94%)</strong></li>
    </ul>
    <p><strong>Buyer's Transfer Costs:</strong></p>
    <ul>
      <li>Mansion Tax (1.25%): $31,250</li>
      <li>Mortgage Recording Tax (1.925% on $2M loan): $38,500</li>
      <li>Attorney Fees: $3,000-$5,000</li>
      <li><strong>Total Buyer: $72,750+ (2.91%+)</strong></li>
    </ul>
    <p><strong>Combined Transfer Costs: $121,125 (4.85% of purchase price)</strong></p>

    <h3>New York Recording Fees</h3>
    <p>County recording fees vary but are generally:</p>
    <p><strong>Deed Recording:</strong> $32-$100 depending on county and number of pages</p>
    <p><strong>Mortgage Recording:</strong> $100-$250</p>
    <p><strong>UCC Filings:</strong> $50-$80</p>
    <p><strong>Discharge of Mortgage:</strong> $100-$150</p>
    <p>NYC and surrounding counties tend to have the highest recording fees.</p>

    <h3>Transfer Tax Exemptions in New York</h3>
    <p>Certain transactions may be exempt or receive reduced rates:</p>
    <ul>
      <li>Transfers to/from government entities</li>
      <li>Certain nonprofit organization transfers</li>
      <li>Transfers securing or releasing a debt</li>
      <li>Transfers between spouses or to former spouse per divorce</li>
      <li>Gifts with no consideration (but may face gift tax)</li>
      <li>Estate or inheritance transfers</li>
    </ul>
    <p>Exemptions must be claimed on form TP-584 (Combined Real Estate Transfer Tax Return).</p>

    <h3>NYC Condo vs. Co-op Transfer Taxes</h3>
    <p><strong>Condos:</strong> Full transfer taxes apply as described above</p>
    <p><strong>Co-ops:</strong> Technically selling shares, not real estate:</p>
    <ul>
      <li>No NYC or NYS real estate transfer tax</li>
      <li>Instead: NYC pays 1.4% co-op transfer tax (buyer typically)</li>
      <li>Mansion tax still applies to co-ops over $1M</li>
      <li>No mortgage recording tax (secured by shares, not real property)</li>
    </ul>
    <p>This makes co-ops slightly cheaper from a transfer tax perspective, though flip taxes and board approval add other costs.</p>

    <h3>Commercial Real Estate in New York</h3>
    <p>Commercial properties face higher transfer tax rates:</p>
    <ul>
      <li>NYS transfer tax: 0.5% (same rate as high-value residential)</li>
      <li>NYC transfer tax: 2.625% (vs. 1.425% residential)</li>
      <li>Combined: 3.125% for commercial NYC properties</li>
      <li>No mansion tax on commercial (only residential)</li>
      <li>Higher mortgage recording tax if financed</li>
    </ul>

    <h3>New York Transfer Tax Strategies</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Factor 2-3.5% into net proceeds calculations</li>
      <li>Consider offering concessions instead of price reductions</li>
      <li>In slow markets, buyer may demand seller pay some mansion tax</li>
      <li>Understand that transfer tax is on gross sale price (not net of commission)</li>
    </ul>
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Budget 1-4% for mansion tax depending on price tier</li>
      <li>Consider just under $1M to avoid mansion tax entirely</li>
      <li>Larger down payments reduce mortgage recording tax</li>
      <li>Shop lenders for mortgage recording tax credits</li>
      <li>Factor all taxes into affordability calculations</li>
    </ul>

    <h3>Westchester, Long Island, and Upstate NY</h3>
    <p>Properties outside NYC only pay:</p>
    <ul>
      <li>NYS transfer tax: 0.4% (or 0.5% over $3M)</li>
      <li>Local recording fees: $50-$150</li>
      <li>Mansion tax: Still applies to all NY properties over $1M</li>
      <li>Mortgage recording tax: 0.5% (much lower than NYC's 1.8-1.925%)</li>
    </ul>
    <p>This makes upstate and suburban NY significantly more affordable from a transfer tax perspective.</p>

    <h3>How to Use This Calculator</h3>
    <p>Select your property location (NYC or rest of state), enter the sale price and property type, and the calculator will show:</p>
    <ul>
      <li>New York State transfer tax</li>
      <li>NYC transfer tax (if applicable)</li>
      <li>Mansion tax (if $1M+)</li>
      <li>Recording fees</li>
      <li>Estimated mortgage recording tax</li>
      <li>Total transfer costs for buyer and seller</li>
      <li>Combined closing costs</li>
    </ul>

    <h3>Common New York Transfer Tax Mistakes</h3>
    <p><strong>Mistake 1:</strong> Not accounting for both state AND city transfer taxes in NYC</p>
    <p><strong>Mistake 2:</strong> Forgetting mansion tax when budgeting (can be $10K-$500K+)</p>
    <p><strong>Mistake 3:</strong> Confusing transfer tax (seller) with mortgage recording tax (buyer)</p>
    <p><strong>Mistake 4:</strong> Not knowing commercial properties have higher NYC rates (2.625% vs 1.425%)</p>
    <p><strong>Mistake 5:</strong> Overlooking the progressive mansion tax brackets for luxury properties</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'location',
        label: 'Property Location',
        type: 'select',
        options: [
          { value: 'nyc', label: 'New York City (NYC)' },
          { value: 'rest_of_state', label: 'Rest of New York State' },
        ],
        defaultValue: 'nyc',
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial' },
        ],
        defaultValue: 'residential',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 1500000,
      },
      {
        name: 'loanAmount',
        label: 'Mortgage Amount (for buyer costs)',
        type: 'number',
        defaultValue: 1200000,
      },
      {
        name: 'recordingFees',
        label: 'Estimated Recording Fees',
        type: 'number',
        defaultValue: 250,
      },
    ],
    results: [
      { label: 'NYS Transfer Tax (Seller)', isCurrency: true },
      { label: 'NYC Transfer Tax (Seller)', isCurrency: true },
      { label: 'Total Seller Transfer Costs', isCurrency: true },
      { label: 'Mansion Tax (Buyer)', isCurrency: true },
      { label: 'Mortgage Recording Tax (Buyer)', isCurrency: true },
      { label: 'Total Buyer Transfer Costs', isCurrency: true },
      { label: 'Combined Transfer Costs', isCurrency: true },
      { label: 'Total as % of Sale Price', isCurrency: false },
      { label: 'Recording Fees', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        location,
        propertyType,
        salePrice,
        loanAmount,
        recordingFees,
      } = values;

      // NYS Transfer Tax
      const nysRate = salePrice >= 3000000 ? 0.005 : 0.004;
      const nysTransferTax = salePrice * nysRate;

      // NYC Transfer Tax
      let nycTransferTax = 0;
      if (location === 'nyc') {
        if (propertyType === 'commercial' && salePrice >= 500000) {
          nycTransferTax = salePrice * 0.02625;
        } else if (salePrice >= 500000) {
          nycTransferTax = salePrice * 0.01425;
        } else {
          nycTransferTax = salePrice * 0.01;
        }
      }

      // Mansion Tax (Buyer pays) - Progressive brackets
      let mansionTax = 0;
      if (salePrice >= 25000000) {
        mansionTax = salePrice * 0.039;
      } else if (salePrice >= 20000000) {
        mansionTax = salePrice * 0.0375;
      } else if (salePrice >= 15000000) {
        mansionTax = salePrice * 0.035;
      } else if (salePrice >= 10000000) {
        mansionTax = salePrice * 0.0325;
      } else if (salePrice >= 5000000) {
        mansionTax = salePrice * 0.0225;
      } else if (salePrice >= 3000000) {
        mansionTax = salePrice * 0.015;
      } else if (salePrice >= 2000000) {
        mansionTax = salePrice * 0.0125;
      } else if (salePrice >= 1000000) {
        mansionTax = salePrice * 0.01;
      }

      // Mortgage Recording Tax (Buyer pays)
      let mortgageRecordingTax = 0;
      if (loanAmount > 0) {
        if (location === 'nyc') {
          const baseRate = loanAmount >= 500000 ? 0.01925 : 0.018;
          const additionalRate = propertyType === 'commercial' ? 0.003 : 0;
          mortgageRecordingTax = loanAmount * (baseRate + additionalRate);
          // Lender typically credits 0.25%
          mortgageRecordingTax -= loanAmount * 0.0025;
        } else {
          const rate = propertyType === 'commercial' ? 0.0075 : 0.005;
          mortgageRecordingTax = loanAmount * rate;
        }
      }

      const totalSellerCosts = nysTransferTax + nycTransferTax + recordingFees;
      const totalBuyerCosts = mansionTax + mortgageRecordingTax;
      const combinedCosts = totalSellerCosts + totalBuyerCosts;
      const percentageOfSale = (combinedCosts / salePrice) * 100;

      return [
        { label: 'NYS Transfer Tax (Seller)', value: nysTransferTax.toFixed(2), isCurrency: true },
        { label: 'NYC Transfer Tax (Seller)', value: nycTransferTax.toFixed(2), isCurrency: true },
        { label: 'Total Seller Transfer Costs', value: totalSellerCosts.toFixed(2), isCurrency: true },
        { label: 'Mansion Tax (Buyer)', value: mansionTax.toFixed(2), isCurrency: true },
        { label: 'Mortgage Recording Tax (Buyer)', value: mortgageRecordingTax.toFixed(2), isCurrency: true },
        { label: 'Total Buyer Transfer Costs', value: totalBuyerCosts.toFixed(2), isCurrency: true },
        { label: 'Combined Transfer Costs', value: combinedCosts.toFixed(2), isCurrency: true },
        { label: 'Total as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
      ];
    },
  },
};
