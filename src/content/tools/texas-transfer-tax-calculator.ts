import { CalculatorContent } from '@/types';

export const TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Texas Transfer Tax Calculator - Real Estate Recording Fees',
  description: 'Calculate Texas real estate transfer costs and county recording fees',
  slug: 'texas-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Texas Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Texas Transfer Tax Guide</h2>
    <p>Texas is unique among US states because it does <strong>not impose a state transfer tax</strong> on real estate transactions. However, sellers and buyers still face recording fees and documentation costs when transferring property ownership.</p>
    
    <h3>Why Texas Has No State Transfer Tax</h3>
    <p>Texas is one of only 14 states without a state-level transfer or excise tax on real estate sales. This makes Texas particularly attractive for real estate investors and sellers, as they avoid the significant closing costs associated with transfer taxes in other states.</p>
    <p>For comparison, states like Pennsylvania charge 2% transfer tax, Delaware charges 4%, and Washington state charges 1.78% - all of which can add thousands to tens of thousands of dollars to closing costs.</p>

    <h3>What You Do Pay in Texas</h3>
    <p>While Texas has no state transfer tax, you'll still encounter these costs:</p>
    <ul>
      <li><strong>County Recording Fees:</strong> Typically $5-$15 to record the deed with the county clerk</li>
      <li><strong>Documentary Preparation:</strong> $100-$300 for preparing transfer documents</li>
      <li><strong>Title Insurance:</strong> One-time premium (Texas has regulated rates)</li>
      <li><strong>Deed Preparation:</strong> Attorney or title company fees for deed drafting</li>
      <li><strong>HOA Transfer Fees:</strong> $100-$500 if property is in an HOA</li>
    </ul>

    <h3>Texas County Recording Fees</h3>
    <p>Recording fees vary by county but are generally very affordable:</p>
    <p><strong>Harris County (Houston):</strong> $16 first page, $4 each additional page</p>
    <p><strong>Dallas County:</strong> $5 first page, $4 each additional page</p>
    <p><strong>Travis County (Austin):</strong> $5 first page, $4 each additional page</p>
    <p><strong>Bexar County (San Antonio):</strong> $5 first page, $4 each additional page</p>
    <p><strong>Tarrant County (Fort Worth):</strong> $5 first page, $4 each additional page</p>
    <p>Most warranty deeds are 2-4 pages, so total recording costs are typically $13-$28.</p>

    <h3>Texas Documentary Transfer Tax (Historical Context)</h3>
    <p>Some Texans confuse "documentary stamps" with transfer taxes. In the past, Texas required revenue stamps on deeds, but these were eliminated decades ago. The phrase sometimes appears in older documents, but it no longer applies to modern transactions.</p>

    <h3>Title Insurance Costs in Texas</h3>
    <p>Texas is one of the few states with <strong>promulgated title insurance rates</strong>, meaning rates are set by the Texas Department of Insurance and are uniform across all title companies.</p>
    <p>Title insurance is a one-time premium paid at closing and is based on the property's purchase price. Typical costs:</p>
    <ul>
      <li>$300,000 home: ~$1,800</li>
      <li>$500,000 home: ~$2,500</li>
      <li>$1,000,000 home: ~$4,000</li>
    </ul>
    <p>The buyer typically pays for the owner's title policy, while the lender's policy is often paid by the seller or negotiated.</p>

    <h3>Who Pays Closing Costs in Texas?</h3>
    <p>Texas is a "buyer pays" state by tradition, meaning:</p>
    <ul>
      <li><strong>Buyer typically pays:</strong> Title insurance, recording fees, survey costs, lender fees</li>
      <li><strong>Seller typically pays:</strong> Real estate commissions, HOA transfer fees, deed preparation</li>
      <li><strong>Negotiable:</strong> All costs can be negotiated in the purchase contract</li>
    </ul>
    <p>In competitive buyer's markets, sellers may offer to pay some or all of the buyer's closing costs as an incentive.</p>

    <h3>Texas Real Estate Advantages</h3>
    <p><strong>No State Transfer Tax:</strong> Saves 0.5-4% compared to other states</p>
    <p><strong>No State Income Tax:</strong> Additional savings for investors</p>
    <p><strong>Homestead Exemption:</strong> Primary residence property tax reduction</p>
    <p><strong>Low Recording Fees:</strong> Among the lowest in the nation</p>
    <p><strong>Growing Market:</strong> Strong population and job growth</p>

    <h3>Example: Selling a $500,000 Texas Home</h3>
    <p><strong>Transfer Tax (Texas):</strong> $0</p>
    <p><strong>Recording Fee:</strong> $13 (estimated)</p>
    <p><strong>Deed Preparation:</strong> $200</p>
    <p><strong>HOA Transfer Fee:</strong> $250</p>
    <p><strong>Total Transfer Costs:</strong> $463</p>
    <p>Compare this to selling the same home in Pennsylvania ($10,000 in transfer taxes) or Delaware ($20,000 in transfer taxes).</p>

    <h3>Special Situations in Texas</h3>
    <p><strong>New Construction:</strong> No transfer tax, but builder may charge documentation fees</p>
    <p><strong>Inherited Property:</strong> No transfer tax; only recording fees and probate costs</p>
    <p><strong>Gift Deeds:</strong> No transfer tax; minimal recording fees</p>
    <p><strong>Quitclaim Deeds:</strong> Same recording fees as warranty deeds</p>
    <p><strong>Trust Transfers:</strong> Recording fees only if ownership actually changes</p>

    <h3>Texas vs Other States: Transfer Tax Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and estimated costs to calculate:</p>
    <ul>
      <li>Texas transfer tax (always $0)</li>
      <li>County recording fees based on document pages</li>
      <li>Title insurance estimate (Texas promulgated rates)</li>
      <li>Total closing cost estimate</li>
      <li>Savings compared to other states</li>
    </ul>

    <h3>Tips for Texas Real Estate Closings</h3>
    <p>Shop title companies even though rates are regulated - service quality varies. Order your title commitment early to address issues. Budget for title insurance separately from recording fees. Consider buying owner's title insurance even if not required. Factor in HOA transfer fees if applicable (often overlooked). Get a closing cost estimate within 3 days of offer acceptance.</p>
    
    <h3>Texas Seller Closing Costs Beyond Transfer Fees</h3>
    <p>While transfer taxes are zero, Texas sellers still pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Title policy for buyer (negotiable)</li>
      <li>HOA fees and transfer charges</li>
      <li>Property tax prorations</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty for buyer (if offered)</li>
    </ul>
    <p>A typical seller on a $500,000 home pays $30,000-35,000 in total closing costs, with commissions being the largest expense.</p>
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
        name: 'recordingPages',
        label: 'Number of Pages to Record',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'recordingFeePerPage',
        label: 'Recording Fee Per Page',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'deedPreparation',
        label: 'Deed Preparation Fee',
        type: 'number',
        defaultValue: 200,
      },
      {
        name: 'hoaTransferFee',
        label: 'HOA Transfer Fee (if applicable)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance Cost',
        type: 'number',
        defaultValue: 2500,
      },
    ],
    results: [
      { label: 'Texas State Transfer Tax', isCurrency: true },
      { label: 'County Recording Fees', isCurrency: true },
      { label: 'Deed Preparation', isCurrency: true },
      { label: 'HOA Transfer Fee', isCurrency: true },
      { label: 'Title Insurance (Estimate)', isCurrency: true },
      { label: 'Total Transfer & Recording Costs', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
      { label: 'Savings vs Delaware (4%)', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        salePrice,
        recordingPages,
        recordingFeePerPage,
        deedPreparation,
        hoaTransferFee,
        titleInsurance,
      } = values;

      const stateTransferTax = 0; // Texas has no state transfer tax
      const recordingFees = recordingPages * recordingFeePerPage;
      const totalCosts = recordingFees + deedPreparation + hoaTransferFee + titleInsurance;
      const percentageOfSale = (totalCosts / salePrice) * 100;
      
      // Savings comparisons
      const pennsylvaniaTax = salePrice * 0.02; // 2%
      const delawareTax = salePrice * 0.04; // 4%
      const savingsVsPennsylvania = pennsylvaniaTax;
      const savingsVsDelaware = delawareTax;

      return [
        { label: 'Texas State Transfer Tax', value: '0.00', isCurrency: true },
        { label: 'County Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Deed Preparation', value: deedPreparation.toFixed(2), isCurrency: true },
        { label: 'HOA Transfer Fee', value: hoaTransferFee.toFixed(2), isCurrency: true },
        { label: 'Title Insurance (Estimate)', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Transfer & Recording Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Pennsylvania (2%)', value: savingsVsPennsylvania.toFixed(2), isCurrency: true },
        { label: 'Savings vs Delaware (4%)', value: savingsVsDelaware.toFixed(2), isCurrency: true },
      ];
    },
  },
};
