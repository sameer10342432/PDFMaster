import { CalculatorContent } from '@/types';

export const ARIZONA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Arizona Transfer Tax Calculator - $0 Transfer Tax State',
  description: 'Arizona has NO state transfer tax due to constitutional Proposition 100. Calculate your minimal $2 recording fee and see massive savings vs other states.',
  slug: 'arizona-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Arizona Real Estate Transfer Costs - No Transfer Tax!',
    content: `
    <h2>Arizona Transfer Tax Guide - The $0 Tax State</h2>
    <p>Arizona is one of the <strong>most seller-friendly states</strong> in the nation when it comes to transfer taxes. Thanks to <strong>Proposition 100</strong> (passed in 1990), Arizona has a <strong>constitutional prohibition</strong> against state, county, and municipal transfer taxes on real estate sales.</p>
    
    <h3>Arizona Transfer Tax: $0</h3>
    <p>Unlike most states that charge 0.5% to 4% in transfer taxes, Arizona charges:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fee Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>State Transfer Tax</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>County Transfer Tax</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>City Transfer Tax</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Recording Fee (Deed)</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2 (first page)</td>
      </tr>
    </table>
    <p>That's right - on a $500,000 home sale in Arizona, you pay <strong>just $2</strong> in transfer-related fees!</p>

    <h3>What is Proposition 100?</h3>
    <p>In November 1990, Arizona voters passed <strong>Proposition 100</strong> by an overwhelming margin. This constitutional amendment (Article IX, Section 11) permanently prohibits:</p>
    <ul>
      <li>State government from imposing transfer taxes on real property sales</li>
      <li>County governments from imposing transfer taxes</li>
      <li>City and municipal governments from imposing transfer taxes</li>
      <li>Any government entity from levying sales tax on real estate transactions</li>
    </ul>
    <p><strong>Why it passed:</strong> Voters wanted to keep Arizona competitive for homebuyers and businesses, reduce closing costs, and prevent government revenue expansion through property transfer taxes.</p>

    <h3>Recording Fees in Arizona</h3>
    <p>While there's no transfer tax, Arizona does charge <strong>minimal recording fees</strong> to file deeds and mortgages:</p>
    <p><strong>County Recorder Fees (Typical):</strong></p>
    <ul>
      <li><strong>Deed Recording:</strong> $2 (first page) + $1 per additional page</li>
      <li><strong>Mortgage/Deed of Trust:</strong> $30 (first page) + $5 per additional page</li>
      <li><strong>Release of Lien:</strong> $12-15</li>
      <li><strong>Affidavit of Property Value:</strong> No fee (required disclosure form)</li>
    </ul>
    <p>Fees vary slightly by county. Check with your local County Recorder's office for exact amounts.</p>

    <h3>Affidavit of Property Value</h3>
    <p>Even though there's no transfer tax, Arizona requires an <strong>Affidavit of Property Value</strong> (APV) for all property transfers. This form:</p>
    <ul>
      <li>Discloses the sale price to the county</li>
      <li>Helps assessors maintain accurate property tax records</li>
      <li>Must be notarized and submitted with the deed</li>
      <li><strong>Has no associated fee</strong></li>
    </ul>
    <p>The APV is required by law but doesn't trigger any transfer tax - it's purely informational.</p>

    <h3>Example: $500,000 Home in Phoenix</h3>
    <p><strong>Transfer Costs:</strong></p>
    <ul>
      <li>State Transfer Tax: $0</li>
      <li>County Transfer Tax: $0</li>
      <li>City of Phoenix Transfer Tax: $0</li>
      <li>Deed Recording Fee: $2</li>
      <li>Affidavit of Property Value: $0</li>
      <li><strong>Total Transfer Cost: $2</strong></li>
    </ul>
    <p>Compare this to California where the same home would incur $550-1,100 in transfer taxes!</p>

    <h3>Arizona vs Other States - Massive Savings</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">AZ Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Arizona</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">-</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11-0.22%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$550-1,100</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$548-1,098</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.28%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,398</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,998</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2-2.8%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000-14,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,998-13,998</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$19,998</td>
      </tr>
    </table>
    <p>On a $500,000 home, Arizona sellers save between <strong>$548 and $19,998</strong> compared to other states!</p>

    <h3>Who Benefits from $0 Transfer Tax?</h3>
    <p><strong>Sellers:</strong> Keep more equity from their sale - no 1-4% tax eating into proceeds</p>
    <p><strong>Buyers:</strong> Lower overall transaction costs make homeownership more accessible</p>
    <p><strong>Real Estate Market:</strong> More competitive pricing and easier property turnover</p>
    <p><strong>Investors:</strong> Fix-and-flip and rental investors save thousands on each transaction</p>
    <p><strong>Retirees:</strong> Downsizing or relocating doesn't trigger massive transfer taxes</p>

    <h3>Other States with No Transfer Tax</h3>
    <p>Arizona isn't alone! A handful of states also prohibit transfer taxes:</p>
    <ul>
      <li><strong>Alaska</strong> - No state transfer tax (though some municipalities may charge)</li>
      <li><strong>Idaho</strong> - No transfer tax</li>
      <li><strong>Indiana</strong> - No transfer tax</li>
      <li><strong>Louisiana</strong> - No transfer tax</li>
      <li><strong>Mississippi</strong> - No transfer tax</li>
      <li><strong>Missouri</strong> - No state transfer tax (some cities charge)</li>
      <li><strong>Montana</strong> - No transfer tax</li>
      <li><strong>New Mexico</strong> - No transfer tax</li>
      <li><strong>North Dakota</strong> - No transfer tax</li>
      <li><strong>Oregon</strong> - No transfer tax (but some counties charge)</li>
      <li><strong>Texas</strong> - No transfer tax</li>
      <li><strong>Utah</strong> - No transfer tax</li>
      <li><strong>Wyoming</strong> - No transfer tax</li>
    </ul>
    <p>These 14 states (including Arizona) represent nearly <strong>30% of U.S. states</strong> that don't burden property transfers with taxation.</p>

    <h3>Who Pays Recording Fees?</h3>
    <p>In Arizona, recording fees are typically split:</p>
    <ul>
      <li><strong>Buyer:</strong> Pays to record the deed of trust (mortgage) - approximately $30-50</li>
      <li><strong>Seller:</strong> Pays to record the deed - approximately $2-5</li>
    </ul>
    <p>These are minimal costs and can be negotiated in the purchase contract.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to see:</p>
    <ul>
      <li>Arizona transfer tax: $0</li>
      <li>Recording fees: ~$2</li>
      <li>Total transfer costs</li>
      <li>Comparison to high-tax states</li>
      <li>Exact savings by moving to or selling in Arizona</li>
    </ul>

    <h3>Tips for Arizona Real Estate Sellers</h3>
    <p>Enjoy $0 in transfer taxes - it's protected by the Arizona Constitution. Budget approximately $2-5 for deed recording fees. Ensure the Affidavit of Property Value is completed accurately and notarized. Work with a title company familiar with Arizona requirements. Consider negotiating who pays minimal recording fees. Factor in the $0 transfer tax when pricing your home competitively. Consult with your real estate agent about customary closing cost splits. Remember to disclose property condition and required disclosures under Arizona law.</p>
    
    <h3>Arizona Seller Closing Costs Beyond Transfer Tax</h3>
    <p>While transfer tax is $0, Arizona sellers still typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6% of sale price)</li>
      <li>Title insurance for buyer ($500-$2,000 depending on price)</li>
      <li>Escrow/closing fees (split with buyer, ~$500-$1,000 total)</li>
      <li>Property tax prorations</li>
      <li>HOA transfer fees ($100-$500 if applicable)</li>
      <li>Outstanding liens, judgments, or HOA dues</li>
      <li>Home warranty for buyer ($400-$600 if offered)</li>
      <li>Repairs negotiated after inspection</li>
    </ul>
    <p>A typical Arizona seller on a $500,000 home pays $30,000-35,000 in total closing costs, with commissions being the largest expense. <strong>But $0 in transfer tax!</strong></p>

    <h3>Why Arizona's Real Estate Market is Attractive</h3>
    <p>Beyond $0 transfer tax, Arizona offers:</p>
    <ul>
      <li>No state inheritance tax or estate tax</li>
      <li>Relatively low property tax rates (average 0.62% of home value)</li>
      <li>Growing economy with job opportunities</li>
      <li>Favorable climate for year-round living</li>
      <li>Strong real estate appreciation in major metros (Phoenix, Tucson, Scottsdale)</li>
      <li>Investor-friendly landlord-tenant laws</li>
    </ul>

    <h3>Impact on Home Prices</h3>
    <p>States without transfer taxes often see:</p>
    <ul>
      <li><strong>Higher liquidity:</strong> Easier to buy and sell without tax penalties</li>
      <li><strong>More competitive pricing:</strong> Sellers can price lower without losing as much to taxes</li>
      <li><strong>Faster market turnover:</strong> Lower transaction costs encourage more sales</li>
      <li><strong>Better for investors:</strong> Fix-and-flip margins improve significantly</li>
    </ul>

    <h3>Common Questions</h3>
    <p><strong>Q: Are there any hidden transfer taxes in Arizona?</strong></p>
    <p>A: No. Proposition 100 constitutionally prohibits all transfer taxes at state, county, and municipal levels. What you see is what you get: $2.</p>

    <p><strong>Q: Could Arizona ever impose a transfer tax in the future?</strong></p>
    <p>A: Only if voters approve a constitutional amendment to repeal Proposition 100. Given its popularity, this is highly unlikely.</p>

    <p><strong>Q: Do I still need to file the Affidavit of Property Value?</strong></p>
    <p>A: Yes. While there's no tax, the APV is required by law to help county assessors maintain accurate property records. Your title company handles this.</p>

    <p><strong>Q: Does this apply to commercial real estate too?</strong></p>
    <p>A: Yes! All real property in Arizona - residential, commercial, industrial, and land - is exempt from transfer taxes.</p>

    <h3>Resources</h3>
    <p>Review Arizona Constitution Article IX, Section 11 (Proposition 100) for the transfer tax prohibition. Contact your County Recorder's office for exact recording fees. Visit the Arizona Department of Revenue for Affidavit of Property Value forms and guidance. Consult an Arizona real estate attorney for complex transactions. Check with your title company for complete closing cost estimates.</p>
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
        name: 'recordingFee',
        label: 'Recording Fee (Deed)',
        type: 'number',
        defaultValue: 2,
      },
    ],
    results: [
      { label: 'Transfer Tax', isCurrency: true },
      { label: 'Recording Fee', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
      { label: 'Savings vs Washington (1.28%)', isCurrency: true },
      { label: 'Savings vs Delaware (4%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, recordingFee } = values;

      const transferTax = 0;
      const totalCosts = transferTax + recordingFee;

      const pennsylvaniaTax = salePrice * 0.02;
      const washingtonTax = salePrice * 0.0128;
      const delawareTax = salePrice * 0.04;

      const savingsVsPA = pennsylvaniaTax - totalCosts;
      const savingsVsWA = washingtonTax - totalCosts;
      const savingsVsDE = delawareTax - totalCosts;

      return [
        { label: 'Transfer Tax', value: transferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fee', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Savings vs Pennsylvania (2%)', value: savingsVsPA.toFixed(2), isCurrency: true },
        { label: 'Savings vs Washington (1.28%)', value: savingsVsWA.toFixed(2), isCurrency: true },
        { label: 'Savings vs Delaware (4%)', value: savingsVsDE.toFixed(2), isCurrency: true },
      ];
    },
  },
};
