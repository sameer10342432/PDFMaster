import { CalculatorContent } from '@/types';

export const MASSACHUSETTS_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Massachusetts Transfer Tax Calculator - Deed Excise Tax',
  description: 'Calculate Massachusetts real estate deed excise tax with standard $2.28 per $500 rate and Barnstable County $2.85 per $500 rate',
  slug: 'massachusetts-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Massachusetts Real Estate Deed Excise Tax',
    content: `
    <h2>Massachusetts Deed Excise Tax Guide</h2>
    <p>Massachusetts imposes a <strong>deed excise tax</strong> on all real estate transfers. The state uses a relatively simple rate structure, but there's an important exception: <strong>Barnstable County</strong> (Cape Cod) has a higher rate than the rest of the state to fund land conservation efforts.</p>
    
    <h3>Massachusetts Deed Excise Tax Rates</h3>
    <p>The deed excise tax is calculated based on the selling price:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Location</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Effective Percentage</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Standard Rate (Most of MA)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.28 per $500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.456%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Barnstable County (Cape Cod)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.85 per $500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.57%</td>
      </tr>
    </table>
    <p><strong>How the Calculation Works:</strong> The sale price is divided by $500, rounded up to the nearest whole number, then multiplied by the rate. For example, a $500,001 sale is treated as 1,001 units.</p>

    <h3>Why Barnstable County Has a Higher Rate</h3>
    <p>The <strong>Cape Cod and Islands Land Conservation</strong> initiative established the higher rate in Barnstable County. The additional $0.57 per $500 goes toward:</p>
    <ul>
      <li>Preserving open space and natural resources</li>
      <li>Protecting water quality</li>
      <li>Supporting affordable housing initiatives</li>
      <li>Maintaining the region's ecological character</li>
    </ul>
    <p>This conservation fee has been in place since 1998 and has helped protect thousands of acres on Cape Cod.</p>

    <h3>Example Calculations</h3>
    <p><strong>$500,000 Home in Boston (Standard Rate):</strong></p>
    <ul>
      <li>Units: $500,000 ÷ $500 = 1,000 units</li>
      <li>Deed Excise Tax: 1,000 × $2.28 = $2,280</li>
      <li><strong>Tax as % of Sale: 0.456%</strong></li>
    </ul>
    
    <p><strong>$500,000 Home in Barnstable County (Cape Cod):</strong></p>
    <ul>
      <li>Units: $500,000 ÷ $500 = 1,000 units</li>
      <li>Deed Excise Tax: 1,000 × $2.85 = $2,850</li>
      <li><strong>Tax as % of Sale: 0.57%</strong></li>
    </ul>

    <p><strong>$850,000 Home in Worcester (Standard Rate):</strong></p>
    <ul>
      <li>Units: $850,000 ÷ $500 = 1,700 units</li>
      <li>Deed Excise Tax: 1,700 × $2.28 = $3,876</li>
      <li><strong>Tax as % of Sale: 0.456%</strong></li>
    </ul>

    <h3>Who Pays Massachusetts Deed Excise Tax?</h3>
    <p><strong>Typically the Seller</strong> pays the deed excise tax in Massachusetts. This is the customary practice throughout the state, though like all closing costs, it can be negotiated in the purchase and sale agreement.</p>
    <p><strong>Legal Responsibility:</strong> The buyer and seller are jointly liable for the tax, but by custom, the seller pays unless otherwise agreed.</p>

    <h3>When and How the Tax is Paid</h3>
    <p>The deed excise tax must be paid <strong>before the deed is recorded</strong> at the Registry of Deeds. The title company or closing attorney:</p>
    <ul>
      <li>Calculates the exact tax amount</li>
      <li>Prepares Form TA-11-R3 (Declaration of Consideration)</li>
      <li>Collects payment from the seller (or agreed party)</li>
      <li>Submits payment with the deed for recording</li>
      <li>Records the deed after tax payment confirmation</li>
    </ul>
    <p>The tax is paid to the county Registry of Deeds where the property is located.</p>

    <h3>Additional Local Transfer Fees</h3>
    <p>Some Massachusetts cities and towns impose <strong>additional local transfer fees</strong> beyond the state deed excise tax:</p>
    <p><strong>Common Local Fees:</strong></p>
    <ul>
      <li><strong>Community Preservation Act (CPA) Fee:</strong> Up to 3% surcharge in participating communities</li>
      <li><strong>Affordable Housing Fee:</strong> Various amounts in specific municipalities</li>
      <li><strong>Recording Fees:</strong> Typically $125-$165 per deed document</li>
    </ul>
    <p><strong>Check with your local Registry of Deeds</strong> to determine if additional fees apply in your municipality.</p>

    <h3>Massachusetts vs Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Massachusetts (Standard)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.456%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,280</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Massachusetts (Barnstable)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.57%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,850</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Hampshire</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rhode Island</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.3-4.6%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$11,500-23,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Connecticut</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75-2.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750-11,250</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>
    <p>Massachusetts has one of the <strong>lowest transfer tax rates</strong> in the Northeast, making it relatively affordable compared to neighboring states.</p>

    <h3>Exemptions from Deed Excise Tax</h3>
    <p><strong>Full Exemptions (No Tax):</strong></p>
    <ul>
      <li>Gifts with no consideration (true gifts to family members)</li>
      <li>Transfers to or from government entities</li>
      <li>Partition deeds among co-owners</li>
      <li>Transfers to correct errors in prior deeds</li>
      <li>Certain mortgage-related transfers</li>
      <li>Transfers between spouses in divorce (if no other consideration)</li>
    </ul>
    
    <p><strong>Reduced Tax Situations:</strong></p>
    <ul>
      <li>Transfers subject to existing mortgages (tax calculated on equity only in certain cases)</li>
      <li>Sales with life estate reservations</li>
      <li>Partial interest transfers (tax on proportional value)</li>
    </ul>

    <h3>First-Time Homebuyer Programs</h3>
    <p>While Massachusetts doesn't exempt first-time buyers from deed excise tax, several programs help offset closing costs:</p>
    <ul>
      <li><strong>MassHousing First-Time Homebuyer Programs:</strong> Down payment assistance</li>
      <li><strong>ONE Mortgage Program:</strong> Low down payment options</li>
      <li><strong>Local Housing Authorities:</strong> City-specific assistance programs</li>
    </ul>
    <p>These programs don't waive the deed excise tax but can help with overall affordability.</p>

    <h3>Tax Deductibility</h3>
    <p><strong>NOT Deductible as Property Tax:</strong> The deed excise tax is a one-time transfer tax, not an ongoing property tax, so it cannot be deducted annually on your federal income taxes.</p>
    <p><strong>May Reduce Capital Gains:</strong> For investment properties, the seller's deed excise tax can potentially be subtracted from capital gains as a cost of sale. Consult a tax professional for guidance.</p>

    <h3>Recording Fees</h3>
    <p>Beyond the deed excise tax, Massachusetts charges <strong>recording fees</strong> to file documents:</p>
    <ul>
      <li><strong>Deed Recording:</strong> $125 (first page) + $5 per additional page</li>
      <li><strong>Mortgage Recording:</strong> $135 (first page) + $5 per additional page</li>
      <li><strong>Discharge of Mortgage:</strong> $85-$95</li>
      <li><strong>State Technology Fee:</strong> $20 per document</li>
    </ul>
    <p>Total recording fees for a typical residential sale: $150-$200 for the deed, plus mortgage-related fees if financing.</p>

    <h3>Suffolk County (Boston) Specifics</h3>
    <p>Suffolk County, which includes Boston, follows the standard state rate of $2.28 per $500. However, some Boston neighborhoods may have:</p>
    <ul>
      <li>Community Preservation Act surcharges (if adopted by the city)</li>
      <li>Affordable housing linkage fees for certain properties</li>
      <li>Additional recording fees</li>
    </ul>
    <p>On a $750,000 Boston condo, expect $3,420 in deed excise tax plus recording fees.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Deed excise tax based on standard or Barnstable County rate</li>
      <li>Total transfer cost</li>
      <li>Percentage of sale price</li>
      <li>Comparison to neighboring states</li>
      <li>Savings vs higher-tax states</li>
    </ul>

    <h3>Tips for Massachusetts Real Estate Sellers</h3>
    <p>Budget approximately 0.5% of sale price for deed excise tax. Add 0.12% if selling in Barnstable County. Check for local Community Preservation Act fees in your municipality. Request a closing cost estimate within 3 days of accepting an offer. Verify whether the buyer will pay any transfer costs in competitive markets. Factor in deed excise tax when calculating net proceeds. Get Form TA-11-R3 prepared accurately to avoid recording delays. Consider the tax when pricing your home. Consult with your real estate attorney about any exemptions that might apply.</p>
    
    <h3>Massachusetts Seller Closing Costs Beyond Transfer Tax</h3>
    <p>While deed excise tax is one expense, sellers also typically pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Title examination fee ($300-$500)</li>
      <li>Attorney fees ($1,000-$2,500)</li>
      <li>Property tax prorations</li>
      <li>Outstanding liens, water/sewer bills, or municipal charges</li>
      <li>HOA fees or condo fees (prorated)</li>
      <li>Smoke detector and carbon monoxide certificate ($150-$300)</li>
      <li>Municipal lien certificate ($50-$150)</li>
    </ul>
    <p>A typical Massachusetts seller on a $600,000 home pays $38,000-46,000 in total closing costs, with commissions being by far the largest expense.</p>

    <h3>Common Questions</h3>
    <p><strong>Q: Is the deed excise tax paid on the full purchase price or just the mortgage amount?</strong></p>
    <p>A: The tax is based on the full purchase price, not the mortgage amount. Even cash purchases pay deed excise tax on the entire sale price.</p>

    <p><strong>Q: Can the buyer and seller split the deed excise tax?</strong></p>
    <p>A: Yes, absolutely. While the seller customarily pays, you can negotiate any split in your purchase and sale agreement.</p>

    <p><strong>Q: What happens if the tax isn't paid?</strong></p>
    <p>A: The Registry of Deeds will not record the deed until the tax is paid in full. No recording means the buyer doesn't have legal title.</p>

    <p><strong>Q: Does a refinance trigger deed excise tax?</strong></p>
    <p>A: No. Refinancing doesn't involve a sale, so there's no deed excise tax. You'll pay mortgage recording fees on the new mortgage.</p>

    <h3>Resources</h3>
    <p>Visit the Massachusetts Department of Revenue for official deed excise tax guidance. Check your local Registry of Deeds for recording fees and local surcharges. Review Massachusetts General Laws Chapter 64D for complete statutory details. Consult a Massachusetts real estate attorney for complex transactions. Contact your city or town clerk about Community Preservation Act fees.</p>
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
        name: 'isBarnstableCounty',
        label: 'Property Location',
        type: 'select',
        options: [
          { value: 'no', label: 'Standard Rate (Most of Massachusetts)' },
          { value: 'yes', label: 'Barnstable County (Cape Cod)' },
        ],
        defaultValue: 'no',
      },
    ],
    results: [
      { label: 'Deed Excise Tax', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs New Hampshire (1.5%)', isCurrency: true },
      { label: 'Savings vs Rhode Island (2.3%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, isBarnstableCounty } = values;

      const ratePerUnit = isBarnstableCounty === 'yes' ? 2.85 : 2.28;
      const units = Math.ceil(salePrice / 500);
      const deedExciseTax = units * ratePerUnit;
      const percentageOfSale = (deedExciseTax / salePrice) * 100;

      const newHampshireTax = salePrice * 0.015;
      const rhodeIslandTax = salePrice * 0.023;
      const savingsVsNH = newHampshireTax - deedExciseTax;
      const savingsVsRI = rhodeIslandTax - deedExciseTax;

      return [
        { label: 'Deed Excise Tax', value: deedExciseTax.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs New Hampshire (1.5%)', value: savingsVsNH.toFixed(2), isCurrency: true },
        { label: 'Savings vs Rhode Island (2.3%)', value: savingsVsRI.toFixed(2), isCurrency: true },
      ];
    },
  },
};
