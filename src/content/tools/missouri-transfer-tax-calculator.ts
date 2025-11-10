import { CalculatorContent } from '@/types';

export const MISSOURI_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Missouri Transfer Tax Calculator - Recording Fees & Closing Costs',
  description: 'Calculate Missouri real estate recording fees and transfer costs. Missouri has no state transfer tax',
  slug: 'missouri-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Missouri Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Missouri Transfer Tax Guide</h2>
    <p>Missouri is one of the most <strong>seller-friendly states</strong> for real estate transactions. Like Indiana and Texas, Missouri has <strong>no state transfer tax</strong> and no local transfer taxes in most counties. The only costs are minimal recording fees, making Missouri one of the cheapest states for closing on property.</p>
    
    <h3>Missouri Transfer Tax Rates</h3>
    <p><strong>State Transfer Tax:</strong> $0 (Missouri has no state transfer tax)</p>
    <p><strong>County Transfer Tax:</strong> $0 (No Missouri counties impose transfer tax)</p>
    <p><strong>Local Transfer Tax:</strong> $0 (No cities charge transfer tax)</p>
    <p><strong>St. Louis City:</strong> $0 (No transfer tax even in major metros)</p>
    <p><strong>Kansas City:</strong> $0 (No transfer tax)</p>
    <p>This makes Missouri exceptionally competitive with neighboring states and highly attractive for real estate investors.</p>

    <h3>Missouri Recording Fees</h3>
    <p>Missouri counties charge recording fees to document property transfers:</p>
    <p><strong>Deed Recording Fee:</strong> $30-$60 (varies by county and document pages)</p>
    <p><strong>Mortgage Recording Fee:</strong> $40-$70 (varies by county)</p>
    <p><strong>Deed of Trust Recording:</strong> $40-$70 (Missouri uses deeds of trust, not mortgages)</p>
    <p><strong>Release/Satisfaction:</strong> $30-$50</p>
    <p>Total recording costs typically range from $80-$200 for a standard transaction.</p>

    <h3>Who Pays Missouri Recording Fees?</h3>
    <p>In Missouri, payment of recording fees follows standard practice:</p>
    <p><strong>Seller typically pays:</strong> Deed recording fee + release of existing deed of trust</p>
    <p><strong>Buyer typically pays:</strong> New deed of trust recording fee (if financing)</p>
    <p><strong>Negotiable:</strong> All fees can be reallocated in the purchase contract</p>
    <p>Recording fees are so minimal in Missouri that they're rarely a significant negotiation point.</p>

    <h3>Missouri Recording Fee Breakdown by County</h3>
    <p>Major Missouri counties and their typical recording fees:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Deed Recording</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Deed of Trust Recording</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">St. Louis County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$51</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$62</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">St. Louis City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$48</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$58</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Jackson County (Kansas City)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$45</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$55</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Greene County (Springfield)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$50</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Clay County (Liberty)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$42</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$52</td>
      </tr>
    </table>

    <h3>Missouri Transfer Cost Examples</h3>
    <p><strong>Example 1: $200,000 Home in Kansas City (Jackson County)</strong></p>
    <ul>
      <li>Sale Price: $200,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $45</li>
      <li>Release of Old Deed of Trust: $45</li>
      <li><strong>Total Seller Cost: $90 (0.045%)</strong></li>
    </ul>

    <p><strong>Example 2: $350,000 Home in St. Louis County</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $51</li>
      <li>Release of Old Deed of Trust: $51</li>
      <li><strong>Total Seller Cost: $102 (0.03%)</strong></li>
    </ul>

    <p><strong>Buyer's Recording Cost (for new financing):</strong></p>
    <ul>
      <li>$350,000 Sale Price</li>
      <li>$280,000 Loan (80% LTV)</li>
      <li>Deed of Trust Recording: $62</li>
      <li><strong>Total Buyer Recording Cost: $62</strong></li>
    </ul>

    <h3>How Missouri Compares to Neighboring States</h3>
    <p>Missouri's zero transfer tax provides significant savings compared to neighboring states:</p>
    <ul>
      <li><strong>Missouri:</strong> $0 transfer tax + ~$100 recording = minimal cost</li>
      <li><strong>Illinois:</strong> $0.50 per $500 state (0.1%) + local taxes = 0.1-0.4%</li>
      <li><strong>Kansas:</strong> $0.26 per $500 (0.052%) + county fees</li>
      <li><strong>Iowa:</strong> $0.80 per $500 (0.16%) state tax</li>
      <li><strong>Nebraska:</strong> $2.25 per $1,000 (0.225%) state tax</li>
      <li><strong>Tennessee:</strong> $0.37 per $100 (0.37%) state tax</li>
      <li><strong>Arkansas:</strong> $3.30 per $1,000 (0.33%) state tax</li>
      <li><strong>Kentucky:</strong> $0.50 per $500 (0.1%) state tax</li>
    </ul>
    <p>On a $300,000 home sale, Missouri sellers save $300-$1,200 compared to all neighboring states.</p>

    <h3>Missouri Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Missouri (on a $250,000 home):</p>
    <ul>
      <li>Real Estate Commission (6%): $15,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $45</li>
      <li>Release of Deed of Trust: $45</li>
      <li>Title Search: $150-$250</li>
      <li>Owner's Title Insurance: $600-$900</li>
      <li>Attorney Fees (optional in MO): $500-$800</li>
      <li><strong>Total: ~$16,300-$17,000 (6.5-6.8%)</strong></li>
    </ul>
    <p>With no transfer tax, Missouri sellers keep more of their equity at closing.</p>

    <h3>Missouri Deed of Trust System</h3>
    <p>Missouri uses <strong>deeds of trust</strong> rather than traditional mortgages:</p>
    <ul>
      <li><strong>Three Parties:</strong> Borrower (trustor), lender (beneficiary), trustee</li>
      <li><strong>Non-Judicial Foreclosure:</strong> Faster foreclosure process (120 days)</li>
      <li><strong>Power of Sale:</strong> Trustee can sell property without court order</li>
      <li><strong>Recording:</strong> Deed of trust recorded in county recorder's office</li>
      <li><strong>Release:</strong> Trustee releases deed of trust when loan paid off</li>
    </ul>
    <p>This system benefits lenders with faster foreclosure rights and keeps recording costs low.</p>

    <h3>Missouri Title Insurance Costs</h3>
    <p>Missouri is a <strong>regulated title insurance state</strong> with rates set by the Department of Insurance:</p>
    <p><strong>Owner's Title Policy:</strong> Approximately $2.50-$3.50 per $1,000 of purchase price</p>
    <p><strong>Lender's Title Policy:</strong> Approximately $2.00-$3.00 per $1,000 of loan amount</p>
    <p><strong>Simultaneous Issue Discount:</strong> Available when both policies issued together</p>
    <p>On a $250,000 purchase, expect to pay $625-$875 for owner's title insurance.</p>

    <h3>Who Pays for What in Missouri</h3>
    <p>Standard practice in Missouri real estate transactions:</p>
    <p><strong>Seller Typically Pays:</strong></p>
    <ul>
      <li>Real estate commission (6% total)</li>
      <li>Owner's title insurance policy</li>
      <li>Deed recording fee</li>
      <li>Release of existing deed of trust</li>
      <li>Title search</li>
      <li>Transfer taxes ($0 - none in Missouri)</li>
    </ul>
    <p><strong>Buyer Typically Pays:</strong></p>
    <ul>
      <li>Lender's title insurance policy</li>
      <li>Deed of trust recording fee</li>
      <li>Home inspection ($350-$500)</li>
      <li>Appraisal ($400-$600)</li>
      <li>Survey ($350-$600)</li>
      <li>Loan origination fees</li>
    </ul>

    <h3>Missouri Real Estate Transfer Process</h3>
    <p>Typical Missouri closing timeline:</p>
    <ul>
      <li><strong>Purchase Agreement:</strong> Signed by both parties</li>
      <li><strong>Title Search:</strong> 30-60 years of ownership history</li>
      <li><strong>Title Insurance:</strong> Issued by regulated title companies</li>
      <li><strong>Closing:</strong> 30-45 days from contract (cash deals faster)</li>
      <li><strong>Closing Agent:</strong> Title company or attorney conducts closing</li>
      <li><strong>Recording:</strong> Same day or next business day</li>
      <li><strong>Possession:</strong> Typically at closing unless otherwise negotiated</li>
    </ul>

    <h3>Missouri Disclosure Requirements</h3>
    <p>Missouri sellers must provide:</p>
    <ul>
      <li><strong>Seller's Disclosure Statement:</strong> Required for residential 1-4 units</li>
      <li><strong>Lead-Based Paint Disclosure:</strong> For homes built before 1978</li>
      <li><strong>Wood-Destroying Insect Inspection:</strong> Required by many lenders</li>
      <li><strong>Well/Septic Certification:</strong> If applicable</li>
      <li><strong>HOA Documents:</strong> If property in association</li>
    </ul>
    <p>Failure to disclose known defects can lead to liability after closing.</p>

    <h3>Real Estate Transfer Tax Proposals in Missouri</h3>
    <p>Like Indiana, Missouri has periodically seen proposals for a state transfer tax, but none have passed due to:</p>
    <ul>
      <li>Strong opposition from Missouri Realtors Association</li>
      <li>Homebuilders and developers lobbying</li>
      <li>Conservative legislature favoring low taxes</li>
      <li>Concern about competitiveness with neighboring states</li>
    </ul>
    <p>Missouri's competitive advantage includes low closing costs, which attracts businesses and residents from higher-tax states.</p>

    <h3>Benefits of No Transfer Tax for Missouri</h3>
    <p>The absence of transfer tax provides economic advantages:</p>
    <ul>
      <li><strong>Increased Market Activity:</strong> Lower transaction costs encourage buying/selling</li>
      <li><strong>Investor-Friendly:</strong> House flippers and investors face lower costs</li>
      <li><strong>Job Market Flexibility:</strong> Easier to relocate for employment</li>
      <li><strong>Business Attraction:</strong> Companies relocating employees benefit</li>
      <li><strong>Senior Mobility:</strong> Retirees can downsize affordably</li>
    </ul>

    <h3>Missouri Property Tax Context</h3>
    <p>While Missouri has no transfer tax, buyers should understand property taxes:</p>
    <p><strong>Average Effective Rate:</strong> 1.01% of home value (slightly above national average)</p>
    <p><strong>Assessment:</strong> Properties assessed at 19% of market value for residential</p>
    <p><strong>Reassessment:</strong> Every odd-numbered year in most counties</li>
    <p><strong>Payment:</strong> Property taxes due December 31st annually</p>
    <p><strong>Senior Citizen Credit:</strong> Tax credit for seniors 62+ meeting income requirements</p>

    <h3>FSBO (For Sale By Owner) in Missouri</h3>
    <p>With no transfer tax, FSBO transactions are particularly attractive in Missouri:</p>
    <ul>
      <li>Avoid 6% real estate commission ($15,000 on $250K sale)</li>
      <li>Pay only $45-$51 deed recording fee</li>
      <li>Still pay for title insurance ($600-$900)</li>
      <li>Consider attorney fees ($500-$800) for contract/closing</li>
      <li><strong>Total FSBO closing costs: ~$1,200-$2,000 vs. $16,000+ with agent</strong></li>
    </ul>
    <p>The lack of transfer tax makes FSBO savings even more significant.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and county to calculate estimated transfer costs. Results show:</p>
    <ul>
      <li>Transfer tax (always $0 in Missouri)</li>
      <li>County recording fees</li>
      <li>Estimated total closing costs</li>
      <li>Comparison to neighboring states</li>
    </ul>
    <p>For exact fees, contact your county recorder or title company.</p>

    <h3>Additional Resources</h3>
    <p><strong>Missouri County Recorders:</strong> Verify exact recording fees</p>
    <p><strong>Missouri Real Estate Commission:</strong> License verification and consumer info</p>
    <p><strong>Title Companies:</strong> Provide detailed closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Contract review and closing services</p>
    <p><strong>Missouri Bar Association:</strong> Find qualified real estate attorneys</p>
    `
  }
};
