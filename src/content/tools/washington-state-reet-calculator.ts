import { CalculatorContent } from '@/types';

export const WASHINGTON_STATE_REET_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Washington State Real Estate Excise Tax (REET) Calculator',
  description: 'Calculate Washington State and local Real Estate Excise Tax (REET) for property sales including Seattle, Bellevue, and other municipalities',
  slug: 'washington-state-reet-calculator',
  icon: '📊',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Washington State Real Estate Excise Tax (REET)',
    content: `
    <h2>Washington REET Complete Guide</h2>
    <p>Washington State imposes a <strong>Real Estate Excise Tax (REET)</strong> on the sale of real property, making it one of the few states with a significant transfer tax. REET is typically paid by the seller and can range from 1.1% to over 3% depending on property value and location.</p>
    
    <h3>What is REET?</h3>
    <p>Real Estate Excise Tax is a tax on the sale or transfer of real property in Washington State. It's calculated as a percentage of the full selling price and is due at closing.</p>
    <ul>
      <li><strong>Who Pays:</strong> Typically the seller, unless negotiated otherwise</li>
      <li><strong>When Due:</strong> At closing, collected by title company or closing attorney</li>
      <li><strong>Components:</strong> State REET + Local REET (city/county)</li>
      <li><strong>Base Rate:</strong> Minimum 1.28% state REET for all properties</li>
    </ul>
    
    <h3>Washington State REET Rate Structure (2024)</h3>
    <p>Washington uses a progressive REET structure since 2020:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">State REET Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$0 - $525,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.10%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$525,001 - $1,525,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.28%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,525,001 - $3,025,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.75%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Over $3,025,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.00%</td>
      </tr>
    </table>
    
    <h3>Local REET Rates (City and County)</h3>
    <p>Most Washington municipalities add additional local REET on top of state REET:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">City/Area</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Local REET</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total REET ($500K sale)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Seattle</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.50%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.60%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Bellevue</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.50%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.60%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tacoma</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.35%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Spokane</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.35%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vancouver</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.35%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">King County (Unincorporated)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.35%</td>
      </tr>
    </table>
    
    <h3>How REET is Calculated</h3>
    <p>REET is calculated on the <strong>full selling price</strong>, not the gain or net proceeds:</p>
    <ul>
      <li><strong>Base Amount:</strong> Full purchase price of the property</li>
      <li><strong>Inclusions:</strong> Assumed debt, value of personal property if included</li>
      <li><strong>State REET:</strong> Applied based on progressive brackets</li>
      <li><strong>Local REET:</strong> Flat percentage added on top</li>
    </ul>
    <p><strong>Example Calculation:</strong> Selling a home in Seattle for $750,000</p>
    <ul>
      <li>State REET (1.28% for $525K-$1.525M range): $9,600</li>
      <li>Seattle Local REET (0.50%): $3,750</li>
      <li><strong>Total REET: $13,350</strong></li>
    </ul>
    
    <h3>Who Must Pay REET?</h3>
    <p>REET applies to most real estate transfers:</p>
    <ul>
      <li><strong>Residential Sales:</strong> Single-family homes, condos, townhomes</li>
      <li><strong>Commercial Sales:</strong> Office buildings, retail, industrial</li>
      <li><strong>Land Sales:</strong> Vacant land, agricultural, development parcels</li>
      <li><strong>Multi-Family:</strong> Apartments, duplexes, investment properties</li>
      <li><strong>Partial Interests:</strong> Even partial ownership transfers may trigger REET</li>
    </ul>
    
    <h3>REET Exemptions and Special Cases</h3>
    <p>Certain transfers are exempt from REET:</p>
    <ul>
      <li><strong>Gifts:</strong> Transfers without consideration (true gifts to family)</li>
      <li><strong>Inheritance:</strong> Transfers by will or intestate succession</li>
      <li><strong>Divorce:</strong> Property division as part of dissolution decree</li>
      <li><strong>Entity Reorganizations:</strong> Certain corporate restructurings</li>
      <li><strong>Government Transfers:</strong> Sales to/from government entities</li>
      <li><strong>Nominal Transfers:</strong> Sales under $100 (rare)</li>
    </ul>
    
    <h3>Comparison: REET by Property Value</h3>
    <p>See how REET impacts sales at different price points in Seattle:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">State REET</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Local REET (Seattle)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total REET</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$400,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,400</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,600</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,750</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,350</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,360</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$21,360</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$2,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$55,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$65,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$4,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$120,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$140,000</td>
      </tr>
    </table>
    
    <h3>Impact on Real Estate Transactions</h3>
    <p>REET significantly affects net proceeds for sellers:</p>
    <ul>
      <li><strong>Reduces Net Proceeds:</strong> Seller's proceeds reduced by 1.6-3.5% of sale price</li>
      <li><strong>Not Deductible:</strong> REET is NOT deductible for federal tax purposes</li>
      <li><strong>Must Be Paid at Closing:</strong> Cannot be financed or rolled into mortgage</li>
      <li><strong>Negotiable:</strong> Buyer and seller can negotiate who pays (rare for buyer to pay)</li>
    </ul>
    
    <h3>1031 Exchange and REET</h3>
    <p>Important notes for investors doing 1031 exchanges:</p>
    <ul>
      <li><strong>REET Still Due:</strong> 1031 exchanges do NOT exempt you from REET</li>
      <li><strong>Both Sides:</strong> You pay REET on property sold AND acquired</li>
      <li><strong>No Federal Offset:</strong> Federal tax deferral doesn't reduce state REET</li>
      <li><strong>Factor Into Calculation:</strong> Include REET in your exchange equity calculations</li>
    </ul>
    
    <h3>Investment Property Considerations</h3>
    <p>For real estate investors, REET impacts returns:</p>
    <ul>
      <li><strong>Reduces ROI:</strong> 1.6-3.5% reduction in net proceeds at sale</li>
      <li><strong>Hold Period Impact:</strong> Short-term flips hit harder by REET</li>
      <li><strong>Cap Rate Calculations:</strong> Include REET in exit cost assumptions</li>
      <li><strong>Wholesaling:</strong> Double assignment may trigger REET twice (caution)</li>
    </ul>
    
    <h3>Comparison to Other States</h3>
    <p>Washington's REET vs. neighboring states:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.60% - 3.50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Progressive, includes local</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Oregon</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0% (None)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No state transfer tax</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Idaho</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0% (None)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No state transfer tax</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11% - 1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Varies widely by city</td>
      </tr>
    </table>
    
    <h3>Recent REET Changes and Trends</h3>
    <p>Washington's REET has evolved significantly:</p>
    <ul>
      <li><strong>2020:</strong> Progressive rate structure implemented for luxury homes</li>
      <li><strong>2021:</strong> Threshold adjusted to $525K (from $500K)</li>
      <li><strong>2022:</strong> Local option REET expanded for affordable housing</li>
      <li><strong>2024:</strong> Several cities increased local REET for housing initiatives</li>
    </ul>
    
    <h3>Strategies to Minimize REET Impact</h3>
    <p>Legal ways to reduce REET burden:</p>
    <ul>
      <li><strong>Timing:</strong> Consider holding property longer to amortize REET over appreciation</li>
      <li><strong>Exemption Review:</strong> Verify all exemptions apply (divorce, inheritance, etc.)</li>
      <li><strong>Structure Carefully:</strong> Consult CPA on entity transfers vs. real property transfers</li>
      <li><strong>Factor Into Pricing:</strong> Price property to account for REET when selling</li>
      <li><strong>Consider Owner Financing:</strong> Spreads tax burden over time (consult attorney)</li>
    </ul>
    
    <h3>Paying and Reporting REET</h3>
    <p>How REET is collected and reported:</p>
    <ul>
      <li><strong>Collection:</strong> Title company or closing attorney collects at closing</li>
      <li><strong>Forms:</strong> Washington State REET Affidavit must be completed</li>
      <li><strong>Deadline:</strong> Due at time of recording deed</li>
      <li><strong>Penalties:</strong> Late payment: 5% penalty plus interest (1% per month)</li>
      <li><strong>Audits:</strong> State can audit REET payments up to 4 years after filing</li>
    </ul>
    
    <h3>REET for Sellers: Key Takeaways</h3>
    <p>What sellers need to know:</p>
    <ul>
      <li>Budget 1.6-3.5% of sale price for REET in net proceeds calculation</li>
      <li>REET is separate from real estate commission (typically 5-6%)</li>
      <li>High-value homes ($3M+) face the highest REET burden at 3.5%</li>
      <li>Seattle and Bellevue have the highest total REET in Washington</li>
      <li>REET cannot be deducted from federal capital gains</li>
    </ul>
    
    <h3>Resources</h3>
    <p>Official Washington REET resources:</p>
    <ul>
      <li><strong>WA Department of Revenue:</strong> dor.wa.gov for REET rates and forms</li>
      <li><strong>County Treasurers:</strong> Check local county websites for local REET rates</li>
      <li><strong>Title Companies:</strong> Provide REET estimates during transaction</li>
      <li><strong>Tax Professionals:</strong> Consult CPA for complex REET situations</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        id: 'salePrice',
        label: 'Property Sale Price',
        type: 'currency',
        defaultValue: 750000,
        min: 10000,
        max: 10000000,
        step: 10000,
        required: true,
        placeholder: 'Enter sale price',
        helpText: 'Full purchase price of the property',
      },
      {
        id: 'location',
        label: 'Location',
        type: 'select',
        defaultValue: 'seattle',
        required: true,
        options: [
          { value: 'seattle', label: 'Seattle (0.50% local)' },
          { value: 'bellevue', label: 'Bellevue (0.50% local)' },
          { value: 'tacoma', label: 'Tacoma (0.25% local)' },
          { value: 'spokane', label: 'Spokane (0.25% local)' },
          { value: 'vancouver', label: 'Vancouver (0.25% local)' },
          { value: 'king-county', label: 'King County Unincorporated (0.25% local)' },
          { value: 'pierce-county', label: 'Pierce County Unincorporated (0.25% local)' },
          { value: 'snohomish-county', label: 'Snohomish County Unincorporated (0.25% local)' },
          { value: 'other', label: 'Other (No local REET)' },
        ],
        helpText: 'Select the city or county where property is located',
      },
    ],
    results: [
      {
        id: 'stateREET',
        label: 'Washington State REET',
        format: 'currency',
        helpText: 'State real estate excise tax based on progressive rate',
      },
      {
        id: 'stateREETRate',
        label: 'State REET Rate',
        format: 'percentage',
        helpText: 'Progressive state REET rate for this sale price',
      },
      {
        id: 'localREET',
        label: 'Local REET (City/County)',
        format: 'currency',
        helpText: 'Local jurisdiction real estate excise tax',
      },
      {
        id: 'localREETRate',
        label: 'Local REET Rate',
        format: 'percentage',
        helpText: 'Local tax rate',
      },
      {
        id: 'totalREET',
        label: 'Total REET Due at Closing',
        format: 'currency',
        primary: true,
        helpText: 'Combined state and local REET',
      },
      {
        id: 'effectiveRate',
        label: 'Effective Total REET Rate',
        format: 'percentage',
        helpText: 'Combined effective tax rate',
      },
      {
        id: 'sellerNetProceeds',
        label: 'Estimated Seller Net (after REET only)',
        format: 'currency',
        helpText: 'Sale price minus REET (excludes commission and other costs)',
      },
    ],
    calculate: (inputs: Record<string, number | string | boolean>) => {
      const salePrice = Number(inputs.salePrice) || 750000;
      const location = String(inputs.location);

      let stateREETRate = 0;
      if (salePrice <= 525000) {
        stateREETRate = 0.011;
      } else if (salePrice <= 1525000) {
        stateREETRate = 0.0128;
      } else if (salePrice <= 3025000) {
        stateREETRate = 0.0275;
      } else {
        stateREETRate = 0.03;
      }

      const localREETRates: Record<string, number> = {
        'seattle': 0.005,
        'bellevue': 0.005,
        'tacoma': 0.0025,
        'spokane': 0.0025,
        'vancouver': 0.0025,
        'king-county': 0.0025,
        'pierce-county': 0.0025,
        'snohomish-county': 0.0025,
        'other': 0,
      };

      const localREETRate = localREETRates[location] || 0;

      const stateREET = salePrice * stateREETRate;
      const localREET = salePrice * localREETRate;
      const totalREET = stateREET + localREET;
      const effectiveRate = ((totalREET / salePrice) * 100);
      const sellerNetProceeds = salePrice - totalREET;

      return {
        stateREET,
        stateREETRate: stateREETRate * 100,
        localREET,
        localREETRate: localREETRate * 100,
        totalREET,
        effectiveRate,
        sellerNetProceeds,
      };
    },
  },
};
