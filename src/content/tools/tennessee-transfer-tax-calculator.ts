import { CalculatorContent } from '@/types';

export const TENNESSEE_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Tennessee Transfer Tax Calculator - Real Property Transfer Tax',
  description: 'Calculate Tennessee real estate transfer tax at $0.37 per $100 (0.37%) on property sales. Understand who pays and exemptions.',
  slug: 'tennessee-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Tennessee Real Estate Transfer Tax',
    content: `
    <h2>Tennessee Transfer Tax Guide</h2>
    <p>Tennessee imposes a <strong>real property transfer tax</strong> on the sale or transfer of real estate. The state uses a simple, flat-rate structure that makes calculating transfer costs straightforward and predictable.</p>
    
    <h3>Tennessee Transfer Tax Rate</h3>
    <p>The transfer tax is calculated based on the selling price or consideration:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Rate Structure</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>State Transfer Tax</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.37 per $100</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Effective Percentage</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.37%</td>
      </tr>
    </table>
    <p><strong>How the Calculation Works:</strong> The sale price is divided by $100, then multiplied by $0.37. For example, a $400,000 sale = 4,000 units × $0.37 = $1,480 in transfer tax.</p>

    <h3>Example Calculations</h3>
    <p><strong>$300,000 Home in Nashville:</strong></p>
    <ul>
      <li>Units: $300,000 ÷ $100 = 3,000 units</li>
      <li>Transfer Tax: 3,000 × $0.37 = $1,110</li>
      <li><strong>Tax as % of Sale: 0.37%</strong></li>
    </ul>
    
    <p><strong>$500,000 Home in Memphis:</strong></p>
    <ul>
      <li>Units: $500,000 ÷ $100 = 5,000 units</li>
      <li>Transfer Tax: 5,000 × $0.37 = $1,850</li>
      <li><strong>Tax as % of Sale: 0.37%</strong></li>
    </ul>

    <p><strong>$750,000 Home in Knoxville:</strong></p>
    <ul>
      <li>Units: $750,000 ÷ $100 = 7,500 units</li>
      <li>Transfer Tax: 7,500 × $0.37 = $2,775</li>
      <li><strong>Tax as % of Sale: 0.37%</strong></li>
    </ul>

    <h3>Who Pays Tennessee Transfer Tax?</h3>
    <p><strong>Typically the Buyer</strong> pays the transfer tax in Tennessee. This is the customary practice throughout the state, making Tennessee somewhat unique compared to most states where the seller usually pays.</p>
    <p><strong>However, it's negotiable:</strong> Like all closing costs, the buyer and seller can agree in the purchase contract that the seller (or both parties) will pay the transfer tax.</p>
    <p><strong>Legal Responsibility:</strong> Tennessee law makes the buyer and seller jointly liable for the tax, but custom dictates the buyer pays unless otherwise agreed.</p>

    <h3>When and How the Tax is Paid</h3>
    <p>The transfer tax must be paid <strong>before the deed is recorded</strong> at the County Register of Deeds. The process typically involves:</p>
    <ul>
      <li>Title company or closing attorney calculates the exact tax</li>
      <li>Prepares the required <strong>Real Property Transfer Declaration</strong></li>
      <li>Collects payment from the buyer (or agreed party) at closing</li>
      <li>Submits payment with the deed for recording</li>
      <li>County records the deed after tax payment confirmation</li>
    </ul>
    <p>The tax is paid to the County Register of Deeds where the property is located.</p>

    <h3>Real Property Transfer Declaration (Affidavit)</h3>
    <p>Tennessee requires a <strong>Real Property Transfer Declaration</strong> to be filed with every deed. This affidavit includes:</p>
    <ul>
      <li>Full legal description of the property</li>
      <li>Actual consideration (sale price)</li>
      <li>How consideration was paid (cash, assumption of debt, etc.)</li>
      <li>Exemption claims (if any)</li>
      <li>Buyer and seller information</li>
    </ul>
    <p><strong>Important:</strong> The affidavit must be accurate and signed under oath. False statements can result in penalties.</p>

    <h3>Tennessee vs Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tennessee</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.37%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,850</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,000</td>
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
    <p>Tennessee's 0.37% rate is <strong>significantly lower</strong> than many states, particularly those in the Northeast and Mid-Atlantic regions.</p>

    <h3>Exemptions from Transfer Tax</h3>
    <p><strong>Full Exemptions (No Tax):</strong></p>
    <ul>
      <li>Gifts with no consideration or nominal consideration ($10 or less)</li>
      <li>Transfers between spouses (including divorce settlements)</li>
      <li>Transfers to or from government entities</li>
      <li>Partition deeds among co-owners (in some circumstances)</li>
      <li>Corrections of prior deeds (if no new consideration)</li>
      <li>Transfers to revocable living trusts (where grantor retains control)</li>
      <li>Inheritance/estate transfers with no sale</li>
      <li>Foreclosure deeds and bankruptcy transfers</li>
    </ul>
    
    <p><strong>Reduced Tax Situations:</strong></p>
    <ul>
      <li>Transfers involving life estates (tax on present value only)</li>
      <li>Partial interest transfers (tax on proportional value)</li>
      <li>Subject-to transactions (tax may be on equity only)</li>
    </ul>

    <h3>Local Transfer Taxes and Recording Fees</h3>
    <p><strong>No Local Transfer Taxes:</strong> Unlike some states, Tennessee counties and municipalities <strong>cannot impose additional local transfer taxes</strong>. The state $0.37 per $100 is the only transfer tax.</p>
    
    <p><strong>Recording Fees (County-Specific):</strong></p>
    <ul>
      <li><strong>Deed Recording:</strong> Typically $12-27 (varies by county)</li>
      <li><strong>Additional Pages:</strong> $2-5 per page after the first</li>
      <li><strong>Deed of Trust (Mortgage):</strong> $15-30</li>
      <li><strong>Release of Lien:</strong> $12-20</li>
    </ul>
    <p>Check with your County Register of Deeds for exact fees.</p>

    <h3>Davidson County (Nashville) Specifics</h3>
    <p>Davidson County, home to Nashville, follows standard state rates:</p>
    <ul>
      <li>Transfer Tax: $0.37 per $100 (same as statewide)</li>
      <li>Recording Fees: Approximately $27 for a deed</li>
      <li>No additional local transfer taxes</li>
    </ul>
    <p>On a $600,000 Nashville home, expect $2,220 in transfer tax plus ~$27 recording fee = <strong>$2,247 total</strong>.</p>

    <h3>Shelby County (Memphis) Specifics</h3>
    <p>Shelby County also follows standard state rates:</p>
    <ul>
      <li>Transfer Tax: $0.37 per $100</li>
      <li>Recording Fees: Approximately $24-27 for a deed</li>
      <li>No local add-on taxes</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>NOT Deductible:</strong> Transfer tax is a one-time transaction cost, not an ongoing property tax, so it cannot be deducted annually on federal income taxes.</p>
    <p><strong>May Reduce Capital Gains:</strong> For investment properties, transfer tax paid can be added to the cost basis (if paid by seller) or acquisition cost (if paid by buyer), potentially reducing capital gains liability. Consult a tax professional.</p>

    <h3>Buyer vs Seller Responsibility</h3>
    <p><strong>By Custom in Tennessee:</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Party</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typically Pays</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Buyer</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Transfer tax ($0.37 per $100), deed recording fees, title insurance, survey costs</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Seller</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Real estate commissions, owner's title policy (if agreed), prorated property taxes, outstanding liens</td>
      </tr>
    </table>
    <p><strong>Always Negotiable:</strong> Everything can be negotiated in the purchase agreement. In competitive seller's markets, sellers may offer to pay transfer tax.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Tennessee transfer tax at $0.37 per $100</li>
      <li>Percentage of sale price</li>
      <li>Comparison to other states</li>
      <li>Savings vs high-tax states</li>
    </ul>

    <h3>Tips for Tennessee Real Estate Transactions</h3>
    <p>Buyers should budget 0.37% of purchase price for transfer tax. Verify whether the seller will pay transfer tax in your purchase contract. Ensure the Real Property Transfer Declaration is accurate and complete. Check county recording fees with your local Register of Deeds. Get a detailed closing cost estimate early in the process. Factor in transfer tax when calculating total acquisition costs. Work with a Tennessee-licensed title company or attorney. Review exemptions carefully if transaction involves family transfers or trusts.</p>
    
    <h3>Tennessee Buyer Closing Costs</h3>
    <p>Since buyers typically pay transfer tax in Tennessee, expect these buyer costs:</p>
    <ul>
      <li>Transfer tax (0.37% of purchase price)</li>
      <li>Lender's title insurance ($300-$1,200)</li>
      <li>Loan origination fees (0.5-1% of loan amount)</li>
      <li>Appraisal fee ($400-$600)</li>
      <li>Credit report fee ($25-$50)</li>
      <li>Survey ($300-$500)</li>
      <li>Recording fees for deed and mortgage ($30-$60)</li>
      <li>Homeowner's insurance (first year prepaid)</li>
      <li>Property tax escrow (2-6 months)</li>
    </ul>
    <p>A typical Tennessee buyer on a $400,000 home pays $10,000-$15,000 in closing costs, with the largest expenses being loan fees and title insurance.</p>

    <h3>Tennessee Seller Closing Costs</h3>
    <p>While sellers don't typically pay transfer tax, they do pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6% of sale price)</li>
      <li>Owner's title insurance policy (if negotiated)</li>
      <li>Prorated property taxes</li>
      <li>HOA transfer fees (if applicable)</li>
      <li>Outstanding liens or judgments</li>
      <li>Home warranty for buyer (if offered, $400-$700)</li>
      <li>Repairs negotiated after inspection</li>
    </ul>
    <p>A typical Tennessee seller on a $400,000 home pays $24,000-$30,000 in total closing costs, with commissions being the largest expense.</p>

    <h3>Common Questions</h3>
    <p><strong>Q: Can the seller refuse to pay the transfer tax even if the buyer requests it?</strong></p>
    <p>A: Yes, unless it's written into the purchase agreement. The buyer customarily pays, but it's always negotiable.</p>

    <p><strong>Q: What happens if the transfer tax isn't paid?</strong></p>
    <p>A: The County Register of Deeds will not record the deed until the tax is paid in full. Without recording, the buyer doesn't have legal title.</p>

    <p><strong>Q: Does a refinance trigger transfer tax?</strong></p>
    <p>A: No. Refinancing doesn't involve a sale or transfer of ownership, so there's no transfer tax. You'll pay recording fees for the new mortgage.</p>

    <p><strong>Q: Are gift deeds really exempt from transfer tax?</strong></p>
    <p>A: Yes, if there's truly no consideration (or only nominal consideration like $10). The Real Property Transfer Declaration must state this clearly.</p>

    <h3>Resources</h3>
    <p>Visit the Tennessee Department of Revenue for official transfer tax guidance and forms. Check with your County Register of Deeds for local recording fees. Review Tennessee Code Annotated § 67-4-401 et seq. for complete statutory details. Consult a Tennessee real estate attorney for complex transactions or exemption questions. Contact a title company for complete closing cost estimates.</p>
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
    ],
    results: [
      { label: 'Transfer Tax', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Florida (0.7%)', isCurrency: true },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
      { label: 'Additional Cost vs North Carolina (0.2%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice } = values;

      const transferTax = (salePrice / 100) * 0.37;
      const percentageOfSale = (transferTax / salePrice) * 100;

      const floridaTax = salePrice * 0.007;
      const pennsylvaniaTax = salePrice * 0.02;
      const northCarolinaTax = salePrice * 0.002;

      const savingsVsFL = floridaTax - transferTax;
      const savingsVsPA = pennsylvaniaTax - transferTax;
      const additionalVsNC = transferTax - northCarolinaTax;

      return [
        { label: 'Transfer Tax', value: transferTax.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Florida (0.7%)', value: savingsVsFL.toFixed(2), isCurrency: true },
        { label: 'Savings vs Pennsylvania (2%)', value: savingsVsPA.toFixed(2), isCurrency: true },
        { label: 'Additional Cost vs North Carolina (0.2%)', value: additionalVsNC.toFixed(2), isCurrency: true },
      ];
    },
  },
};
