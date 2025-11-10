import { CalculatorContent } from '@/types';

export const COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Colorado Transfer Tax Calculator - Documentary Fee & Recording Costs',
  description: 'Calculate Colorado real estate documentary fee (0.01%) and county recording fees including resort town transfer taxes',
  slug: 'colorado-transfer-tax-calculator',
  icon: '⛰️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Colorado Real Estate Documentary Fee & Transfer Costs',
    content: `
    <h2>Colorado Transfer Fee Guide</h2>
    <p>Colorado has one of the <strong>lowest transfer costs in the United States</strong> with a minimal 0.01% state documentary fee and new flat $43 county recording fees (as of July 1, 2025). However, 12 mountain resort towns maintain grandfathered local transfer taxes that can reach 1.5%, making location a critical factor in closing costs.</p>
    
    <h3>Colorado State Documentary Fee</h3>
    <p><strong>Rate:</strong> $0.01 per $100 of property value (0.01%)</p>
    <p><strong>Threshold:</strong> Only applies to properties over $500</p>
    <p><strong>Who Pays:</strong> Typically the buyer, but negotiable between parties</p>
    <p><strong>When Collected:</strong> At closing when deed is recorded with county clerk & recorder</p>
    <p><strong>Note:</strong> This is technically a "documentary fee" not a "transfer tax" due to Colorado's 1992 constitutional amendment freezing transfer taxes.</p>

    <h3>Colorado Documentary Fee Calculation</h3>
    <p><strong>Formula:</strong> (Property Value ÷ 100) × $0.01 = Documentary Fee</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>$300,000 home: ($300,000 ÷ 100) × $0.01 = $30</li>
      <li>$500,000 home: ($500,000 ÷ 100) × $0.01 = $50</li>
      <li>$750,000 home: ($750,000 ÷ 100) × $0.01 = $75</li>
      <li>$1,000,000 home: ($1,000,000 ÷ 100) × $0.01 = $100</li>
    </ul>

    <h3>Colorado County Recording Fees (Effective July 1, 2025)</h3>
    <p>Colorado House Bill 24-1269 changed recording fees from per-page to flat-fee structure:</p>
    <p><strong>New Standard Rates (July 1, 2025 onward):</strong></p>
    <ul>
      <li><strong>Base Fee:</strong> $40 per document</li>
      <li><strong>Surcharges:</strong> $3 per document (technology/filing surcharges)</li>
      <li><strong>Total:</strong> <strong>$43 per document</strong> (regardless of page count)</li>
    </ul>
    <p><strong>Previous System (Pre-July 2025):</strong> $13 first page + $5 per additional page + $3 surcharge (could exceed $100 for lengthy documents)</p>
    <p><strong>Exceptions:</strong></p>
    <ul>
      <li>Death Certificates: No recording fee (may have $1 surcharge)</li>
      <li>UCC Filings: Continue under existing fee schedule</li>
      <li>Deposited Plats: $40 in some counties</li>
    </ul>

    <h3>Colorado Local Transfer Taxes (12 Grandfathered Towns)</h3>
    <p>The following mountain/resort towns have local transfer taxes established before 1992:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">City/Town</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Aspen</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0% HRETT + 0.5% Wheeler Opera House</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Winter Park</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On ownership changes</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Avon</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Contact local clerk for current rate</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Breckenridge</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Contact local clerk</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Crested Butte</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Contact local clerk</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Telluride</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Contact local clerk</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vail</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Contact local clerk</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Other Resort Towns</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0-1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Frisco, Gypsum, Mountain Village, Mt. Crested Butte, Snowmass Village</td>
      </tr>
    </table>
    <p><strong>Note:</strong> These local transfer taxes are <strong>in addition to</strong> the state documentary fee.</p>

    <h3>Colorado Transfer Cost Examples</h3>
    <p><strong>Example 1: $400,000 Home in Denver (No Local Transfer Tax)</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>State Documentary Fee: $40</li>
      <li>Deed Recording Fee: $43</li>
      <li>Deed of Trust Recording Fee: $43</li>
      <li>Release of Old Deed of Trust: $43</li>
      <li><strong>Total Transfer Costs: $169 (0.04%)</strong></li>
    </ul>

    <p><strong>Example 2: $500,000 Condo in Aspen (1.5% Local Transfer Tax)</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>State Documentary Fee: $50</li>
      <li>Aspen Local Transfer Tax (1.5%): $7,500</li>
      <li>Deed Recording Fee: $43</li>
      <li>Deed of Trust Recording Fee: $43</li>
      <li>Release of Old Deed of Trust: $43</li>
      <li><strong>Total Transfer Costs: $7,679 (1.54%)</strong></li>
    </ul>

    <p><strong>Example 3: $750,000 Home in Colorado Springs (No Local Transfer Tax)</strong></p>
    <ul>
      <li>Sale Price: $750,000</li>
      <li>State Documentary Fee: $75</li>
      <li>Recording Fees (3 documents): $129</li>
      <li><strong>Total Transfer Costs: $204 (0.03%)</strong></li>
    </ul>

    <h3>Who Pays What in Colorado</h3>
    <p><strong>State Documentary Fee:</strong> Typically buyer, but negotiable</p>
    <p><strong>Recording Fees:</strong></p>
    <ul>
      <li>Buyer pays for deed recording ($43)</li>
      <li>Buyer pays for new deed of trust recording ($43)</li>
      <li>Seller pays for release of existing deed of trust ($43)</li>
    </ul>
    <p><strong>Local Transfer Taxes (resort towns):</strong> Varies by municipality; often seller but negotiable</p>
    <p>All fees are negotiable between buyer and seller and should be specified in the purchase contract.</p>

    <h3>How Colorado Compares to Other States</h3>
    <p>Colorado (excluding resort towns) has the lowest transfer costs in the region:</p>
    <ul>
      <li><strong>Colorado (non-resort):</strong> 0.01% documentary fee + ~$170 recording = minimal</li>
      <li><strong>Colorado (Aspen):</strong> 1.51% total = $7,550 on $500K home</li>
      <li><strong>California:</strong> 0.11-3% = $550-$15,000 on $500K home</li>
      <li><strong>New Mexico:</strong> 0% transfer tax = ~$100 recording only</li>
      <li><strong>Wyoming:</strong> 0% transfer tax = ~$100 recording only</li>
      <li><strong>Utah:</strong> 0% transfer tax = ~$150 recording only</li>
    </ul>
    <p>Colorado's low documentary fee makes it highly competitive, but resort town taxes significantly increase costs.</p>

    <h3>Colorado Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Colorado (on a $450,000 Denver home):</p>
    <ul>
      <li>Real Estate Commission (6%): $27,000</li>
      <li>Documentary Fee: $45</li>
      <li>Recording Fees: $43</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>HOA Transfer Fees: $200-$400</li>
      <li>Home Warranty (optional): $400-$600</li>
      <li><strong>Total: ~$28,500-$29,300 (6.3-6.5%)</strong></li>
    </ul>
    <p>Documentary fees represent less than 0.2% of total closing costs in Colorado.</p>

    <h3>Colorado's 1992 Transfer Tax Freeze</h3>
    <p>In 1992, Colorado voters approved a constitutional amendment freezing transfer taxes:</p>
    <ul>
      <li><strong>No new transfer taxes</strong> can be created by state or local governments</li>
      <li><strong>12 towns with existing taxes</strong> were grandfathered (Aspen, Vail, Breckenridge, etc.)</li>
      <li><strong>Documentary fee created</strong> as workaround to generate some revenue</li>
      <li><strong>Periodic attempts to repeal</strong> freeze have all failed (most recently 2024)</li>
    </ul>
    <p>This constitutional protection keeps Colorado among the lowest transfer cost states.</p>

    <h3>Failed 2024 Colorado Transfer Tax Proposal</h3>
    <p>In 2024, a proposal to create a statewide transfer tax for affordable housing was rejected:</p>
    <ul>
      <li><strong>Proposed Rate:</strong> 0.5% on properties over $500,000</li>
      <li><strong>Projected Revenue:</strong> $300+ million annually for housing programs</li>
      <li><strong>Opposition:</strong> Real estate industry, business groups, property rights advocates</li>
      <li><strong>Result:</strong> Failed to gain enough support to go to voters</li>
    </ul>
    <p>Future proposals may emerge, but Colorado's anti-tax culture makes passage unlikely.</p>

    <h3>Exemptions from Colorado Documentary Fee</h3>
    <p>No state documentary fee is charged on:</p>
    <ul>
      <li>Transfers involving U.S. government or State of Colorado</li>
      <li>Public trustee's deeds, treasurer's deeds, sheriff's deeds</li>
      <li>Confirmation/correction deeds</li>
      <li>Transfers between spouses</li>
      <li>Leases or lease assignments</li>
      <li>Documents securing debt payment</li>
      <li>Court decrees determining title</li>
      <li>Properties under $500 in value</li>
    </ul>

    <h3>Colorado Title Insurance Costs</h3>
    <p>Colorado is a <strong>competitive title insurance market</strong> with rates varying by company:</p>
    <p><strong>Owner's Title Policy:</strong> Approximately $2.00-$3.50 per $1,000 of purchase price</p>
    <p><strong>Lender's Title Policy:</strong> Approximately $1.50-$2.50 per $1,000 of loan amount</p>
    <p><strong>Simultaneous Issue Discount:</strong> Available when both policies issued together</p>
    <p>On a $450,000 purchase, expect to pay $900-$1,575 for owner's title insurance. Shop around - rates vary significantly.</p>

    <h3>Who Pays for What in Colorado (Standard Practice)</h3>
    <p><strong>Seller Typically Pays:</strong></p>
    <ul>
      <li>Real estate commission (6% total)</li>
      <li>Release of existing deed of trust ($43)</li>
      <li>HOA transfer fees ($200-$400)</li>
      <li>Title insurance (varies by region - Denver area typically seller pays)</li>
      <li>Local transfer tax if applicable (resort towns)</li>
    </ul>
    <p><strong>Buyer Typically Pays:</strong></p>
    <ul>
      <li>State documentary fee (0.01%)</li>
      <li>Deed recording fee ($43)</li>
      <li>Deed of trust recording fee ($43)</li>
      <li>Home inspection ($400-$600)</li>
      <li>Appraisal ($500-$700)</li>
      <li>Survey ($400-$700)</li>
      <li>Loan origination fees</li>
    </ul>

    <h3>Colorado Real Estate Transfer Process</h3>
    <p>Typical Colorado closing timeline:</p>
    <ul>
      <li><strong>Purchase Agreement:</strong> Signed by both parties (Colorado standard forms)</li>
      <li><strong>Title Search:</strong> 40+ years of ownership history reviewed</li>
      <li><strong>Title Insurance:</strong> Issued by competitive title companies</li>
      <li><strong>Closing:</strong> 30-45 days from contract (cash deals faster)</li>
      <li><strong>Closing Agent:</strong> Title company conducts closing (not attorneys in CO)</li>
      <li><strong>Recording:</strong> Documents recorded with county clerk & recorder same day or next day</li>
      <li><strong>Possession:</strong> Typically at closing unless otherwise negotiated</li>
    </ul>

    <h3>Colorado Deed of Trust System</h3>
    <p>Colorado uses <strong>deeds of trust</strong> rather than traditional mortgages:</p>
    <ul>
      <li><strong>Three Parties:</strong> Borrower (trustor), lender (beneficiary), public trustee (trustee)</li>
      <li><strong>Non-Judicial Foreclosure:</strong> Faster foreclosure process (110-125 days)</li>
      <li><strong>Public Trustee System:</strong> County public trustee handles foreclosures</li>
      <li><strong>Recording:</strong> Deed of trust recorded in county clerk & recorder's office ($43)</li>
      <li><strong>Release:</strong> Public trustee releases deed of trust when loan paid off</li>
    </ul>

    <h3>Special Considerations for Mountain Resort Properties</h3>
    <p>Buying in Colorado's resort towns (Aspen, Vail, Breckenridge, etc.):</p>
    <ul>
      <li><strong>Higher Transfer Taxes:</strong> 0.5-1.5% local transfer tax adds $2,500-$7,500 on $500K property</li>
      <li><strong>HOA Fees:</strong> Significantly higher than metro areas ($500-$2,000/month common)</li>
      <li><strong>Short-Term Rental Restrictions:</strong> Many resort towns limit Airbnb/VRBO</li>
      <li><strong>Deed Restrictions:</strong> Some properties have local employee housing requirements</li>
      <li><strong>Property Taxes:</strong> Often higher mill levies to fund resort amenities</li>
    </ul>
    <p>Factor these additional costs into your budget when considering resort property purchases.</p>

    <h3>FSBO (For Sale By Owner) in Colorado</h3>
    <p>With Colorado's minimal documentary fee, FSBO is highly cost-effective:</p>
    <ul>
      <li>Avoid 6% real estate commission ($27,000 on $450K sale)</li>
      <li>Pay only $45 documentary fee + ~$125 recording fees</li>
      <li>Still pay for title insurance ($900-$1,575)</li>
      <li>Consider transaction coordinator ($500-$1,000) or real estate attorney</li>
      <li><strong>Total FSBO closing costs: ~$1,600-$2,700 vs. $28,500+ with agent</strong></li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and location (city/town) to calculate estimated transfer costs. Results show:</p>
    <ul>
      <li>State documentary fee (0.01%)</li>
      <li>County recording fees ($43 per document)</li>
      <li>Local transfer tax (if applicable for resort towns)</li>
      <li>Total transfer costs</li>
      <li>Effective rate as percentage of sale price</li>
      <li>Comparison to other states</li>
    </ul>
    <p>For resort town properties, verify current local transfer tax rate with the town clerk or title company.</p>

    <h3>Additional Resources</h3>
    <p><strong>County Clerk & Recorder Offices:</strong> Verify exact recording fees by county</p>
    <p><strong>Colorado Division of Real Estate:</strong> License verification and consumer information</p>
    <p><strong>Title Companies:</strong> Provide detailed closing cost estimates</p>
    <p><strong>Local Town Clerks:</strong> Current local transfer tax rates for resort towns</p>
    <p><strong>Colorado Real Estate Commission:</strong> Standard forms and regulations</p>
    `
  }
};
