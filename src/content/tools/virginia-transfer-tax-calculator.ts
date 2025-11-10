import { CalculatorContent } from '@/types';

export const VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Virginia Transfer Tax Calculator - State & Local Recording Fees',
  description: 'Calculate Virginia real estate transfer costs including state recordation tax, grantor tax, and Northern Virginia regional fees',
  slug: 'virginia-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Virginia Real Estate Transfer Tax & Recordation Fees',
    content: `
    <h2>Virginia Transfer Tax Guide</h2>
    <p>Virginia has a <strong>dual transfer tax system</strong> with separate taxes for buyers (recordation tax) and sellers (grantor tax). Additionally, properties in Northern Virginia and certain other regions face extra regional taxes to fund transportation and infrastructure projects.</p>
    
    <h3>Virginia Transfer Tax Structure</h3>
    <p>Unlike most states with a single transfer tax, Virginia charges <strong>two separate state-level taxes</strong>:</p>
    <ul>
      <li><strong>State Recordation Tax (Buyer):</strong> $0.25 per $100 of purchase price</li>
      <li><strong>State Grantor Tax (Seller):</strong> $0.50 per $500 ($1.00 per $1,000) of sale price</li>
    </ul>
    <p>This means on a $500,000 home, the buyer pays $1,250 in recordation tax while the seller pays $500 in grantor tax - a combined $1,750 in state transfer taxes alone.</p>

    <h3>Northern Virginia Additional Taxes</h3>
    <p>Properties in the Northern Virginia Transportation Authority (NVTA) region face <strong>additional regional grantor taxes</strong> paid by the seller:</p>
    <ul>
      <li><strong>Northern Virginia Grantor Tax:</strong> $0.15 per $100 of sale price</li>
      <li><strong>WMATA Capital Fee:</strong> $0.10 per $100 (in certain jurisdictions)</li>
    </ul>
    <p><strong>Affected Jurisdictions:</strong> Arlington, Fairfax, Loudoun, Prince William counties, and cities of Alexandria, Fairfax, Falls Church, Manassas, and Manassas Park.</p>
    <p>On a $500,000 sale in Northern Virginia, the seller pays an additional $750 in regional taxes (plus $500 WMATA fee if applicable) - totaling $1,250-$1,750 in seller-side taxes.</p>

    <h3>Local Recordation Taxes</h3>
    <p>Cities and counties can impose <strong>local recordation taxes</strong> up to one-third of the state recordation tax:</p>
    <p><strong>Maximum Local Rate:</strong> $0.083 per $100 (when imposed at the maximum)</p>
    <p>Not all localities impose this tax. Check with your local circuit court clerk. On a $500,000 home, maximum local recordation tax would be $415.</p>

    <h3>Recording Fees</h3>
    <p>Beyond transfer taxes, Virginia charges <strong>clerk recording fees</strong> to file deeds:</p>
    <ul>
      <li><strong>1-10 pages:</strong> $18 base fee (some jurisdictions charge $22-26)</li>
      <li><strong>11-30 pages:</strong> $32</li>
      <li><strong>51+ pages:</strong> $52</li>
      <li><strong>Additional state fee:</strong> $3 per recorded deed</li>
    </ul>
    <p>Most deeds are 2-5 pages, so expect $18-26 in recording fees.</p>

    <h3>Who Pays What in Virginia?</h3>
    <p>Virginia has <strong>customary but negotiable</strong> payment responsibilities:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Party</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typically Pays</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Buyer</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">State recordation tax, local recordation tax, deed of trust recording fees</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Seller</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">State grantor tax, regional grantor taxes (Northern VA)</td>
      </tr>
    </table>
    <p><strong>Important:</strong> All fees are negotiable in the purchase agreement. In competitive markets, sellers may offer to pay buyer's recordation taxes.</p>

    <h3>Example: $400,000 Home in Northern Virginia</h3>
    <p><strong>Buyer's Costs:</strong></p>
    <ul>
      <li>State Recordation Tax: $1,000 ($0.25 per $100)</li>
      <li>Local Recordation Tax: $333 (if maximum)</li>
      <li>Recording Fee: $26 (estimated)</li>
      <li><strong>Total Buyer Costs: $1,359</strong></li>
    </ul>
    <p><strong>Seller's Costs:</strong></p>
    <ul>
      <li>State Grantor Tax: $400 ($1.00 per $1,000)</li>
      <li>Northern VA Grantor Tax: $600 ($0.15 per $100)</li>
      <li>WMATA Capital Fee: $400 ($0.10 per $100)</li>
      <li><strong>Total Seller Costs: $1,400</strong></li>
    </ul>
    <p><strong>Combined Transfer Tax: $2,759</strong></p>

    <h3>Hampton Roads Transportation Fee</h3>
    <p>Properties in the Hampton Roads region face a <strong>$0.06 per $100 regional fee</strong> similar to Northern Virginia. Affected areas include Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, and surrounding localities.</p>

    <h3>Virginia vs Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia (basic)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.35% combined</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,750</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Northern Virginia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.55-0.65%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,750-3,250</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Maryland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.2-3.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$11,000-15,000</td>
      </tr>
    </table>

    <h3>Deed of Trust (Mortgage) Recording Tax</h3>
    <p>If you're financing your purchase, Virginia also charges recordation tax on the <strong>deed of trust (mortgage)</strong>:</p>
    <ul>
      <li><strong>State Rate:</strong> $0.25 per $100 of loan amount</li>
      <li><strong>Local Add-on:</strong> Up to $0.083 per $100 (if imposed)</li>
    </ul>
    <p>On a $400,000 mortgage, expect $1,000 state recordation tax plus up to $332 local tax.</p>

    <h3>Exemptions and Special Cases</h3>
    <p><strong>Gift Deeds:</strong> No consideration means no recordation tax, but grantor tax may still apply</p>
    <p><strong>Transfers Between Spouses:</strong> Exempt from grantor tax in divorce settlements</p>
    <p><strong>Estate Transfers:</strong> Executor deeds may have reduced or no tax</p>
    <p><strong>Refinances:</strong> New deed of trust incurs recordation tax on the new loan amount</p>
    <p><strong>Partial Interest Transfers:</strong> Tax calculated on proportional value</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>State recordation tax (buyer pays)</li>
      <li>State grantor tax (seller pays)</li>
      <li>Northern Virginia regional taxes (if applicable)</li>
      <li>Local recordation taxes</li>
      <li>Recording fees</li>
      <li>Total transfer costs split by buyer and seller</li>
      <li>Percentage of sale price</li>
    </ul>

    <h3>Tips for Virginia Real Estate Closings</h3>
    <p>Request a title commitment early to verify legal description. Budget separately for buyer and seller transfer costs. Consider negotiating who pays which taxes in competitive markets. Northern Virginia has the highest transfer costs in the state. Factor in deed of trust recording tax if financing. Verify local recordation tax with your circuit court clerk. Get a detailed closing cost estimate within 3 days of contract. Consider recording fees when budgeting for closing.</p>
    
    <h3>Virginia Seller Closing Costs Beyond Transfer Taxes</h3>
    <p>While sellers pay grantor taxes, they also face:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Title insurance for buyer (sometimes negotiated)</li>
      <li>HOA transfer fees and capital contributions</li>
      <li>Property tax prorations</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty for buyer (if offered)</li>
      <li>Repairs negotiated after inspection</li>
    </ul>
    <p>A typical Northern Virginia seller on a $500,000 home pays $32,000-38,000 in total closing costs, with commissions being the largest expense.</p>

    <h3>Resources</h3>
    <p>Check the Virginia Code § 58.1-801 et seq. for official transfer tax statutes. Contact your local Circuit Court Clerk for jurisdiction-specific rates. Use the Virginia Courts website for deed calculators. Consult a Virginia real estate attorney for complex transactions.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'isNorthernVirginia',
        label: 'Property in Northern Virginia (NVTA Region)?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes (Arlington, Fairfax, Loudoun, Prince William, Alexandria, etc.)' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'hasWMATAFee',
        label: 'Subject to WMATA Capital Fee?',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'no',
      },
      {
        name: 'localRecordationRate',
        label: 'Local Recordation Tax Rate (per $100)',
        type: 'number',
        defaultValue: 0.083,
      },
      {
        name: 'recordingFee',
        label: 'Clerk Recording Fee',
        type: 'number',
        defaultValue: 26,
      },
    ],
    results: [
      { label: 'State Recordation Tax (Buyer)', isCurrency: true },
      { label: 'State Grantor Tax (Seller)', isCurrency: true },
      { label: 'Northern VA Grantor Tax (Seller)', isCurrency: true },
      { label: 'WMATA Capital Fee (Seller)', isCurrency: true },
      { label: 'Local Recordation Tax (Buyer)', isCurrency: true },
      { label: 'Recording Fee', isCurrency: true },
      { label: 'Total Buyer Costs', isCurrency: true },
      { label: 'Total Seller Costs', isCurrency: true },
      { label: 'Total Transfer & Recording Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        salePrice,
        isNorthernVirginia,
        hasWMATAFee,
        localRecordationRate,
        recordingFee,
      } = values;

      const stateRecordationTax = (salePrice / 100) * 0.25;
      const stateGrantorTax = (salePrice / 1000) * 1.00;
      
      const northernVAGrantorTax = isNorthernVirginia === 'yes' ? (salePrice / 100) * 0.15 : 0;
      const wmataFee = hasWMATAFee === 'yes' ? (salePrice / 100) * 0.10 : 0;
      
      const localRecordationTax = (salePrice / 100) * localRecordationRate;

      const totalBuyerCosts = stateRecordationTax + localRecordationTax + recordingFee;
      const totalSellerCosts = stateGrantorTax + northernVAGrantorTax + wmataFee;
      const totalCosts = totalBuyerCosts + totalSellerCosts;
      const percentageOfSale = (totalCosts / salePrice) * 100;

      return [
        { label: 'State Recordation Tax (Buyer)', value: stateRecordationTax.toFixed(2), isCurrency: true },
        { label: 'State Grantor Tax (Seller)', value: stateGrantorTax.toFixed(2), isCurrency: true },
        { label: 'Northern VA Grantor Tax (Seller)', value: northernVAGrantorTax.toFixed(2), isCurrency: true },
        { label: 'WMATA Capital Fee (Seller)', value: wmataFee.toFixed(2), isCurrency: true },
        { label: 'Local Recordation Tax (Buyer)', value: localRecordationTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Total Buyer Costs', value: totalBuyerCosts.toFixed(2), isCurrency: true },
        { label: 'Total Seller Costs', value: totalSellerCosts.toFixed(2), isCurrency: true },
        { label: 'Total Transfer & Recording Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
      ];
    },
  },
};
