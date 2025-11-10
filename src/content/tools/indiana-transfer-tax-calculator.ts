import { CalculatorContent } from '@/types';

export const INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Indiana Transfer Tax Calculator - Recording Fees & Closing Costs',
  description: 'Calculate Indiana real estate recording fees and transfer costs. Indiana has no state transfer tax',
  slug: 'indiana-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Indiana Real Estate Transfer Tax & Recording Fees',
    content: `
    <h2>Indiana Transfer Tax Guide</h2>
    <p>Indiana is one of the <strong>most affordable states for real estate transfer costs</strong>. Unlike many states, Indiana has <strong>no state or local transfer tax</strong>. The only costs at closing for recording documents are county recorder fees, which are among the lowest in the nation.</p>
    
    <h3>Indiana Transfer Tax Rates</h3>
    <p><strong>State Transfer Tax:</strong> $0 (Indiana has no state transfer tax)</p>
    <p><strong>County Transfer Tax:</strong> $0 (No Indiana counties impose transfer tax)</p>
    <p><strong>Local Transfer Tax:</strong> $0 (No cities or municipalities charge transfer tax)</p>
    <p>This makes Indiana one of the most seller-friendly and buyer-friendly states from a transfer tax perspective.</p>

    <h3>Indiana Recording Fees</h3>
    <p>Instead of transfer taxes, Indiana only charges recording fees for documenting the property transfer:</p>
    <p><strong>Deed Recording Fee:</strong> $28-$40 (varies by county)</p>
    <p><strong>Mortgage Recording Fee:</strong> $36-$52 (varies by county)</p>
    <p><strong>Satisfaction of Mortgage:</strong> $28-$40</p>
    <p><strong>Mortgage Tax:</strong> None</p>
    <p>Total recording costs typically range from $60-$150 for a standard transaction, significantly lower than high-tax states like Pennsylvania (2%), Delaware (4%), or New York (1.4%+).</p>

    <h3>Who Pays Indiana Recording Fees?</h3>
    <p>In Indiana, payment of recording fees is typically divided:</p>
    <p><strong>Seller pays:</strong> Deed recording fee ($28-$40)</p>
    <p><strong>Buyer pays:</strong> Mortgage recording fee ($36-$52) if financing</p>
    <p><strong>Negotiable:</strong> All fees can be allocated differently in the purchase agreement</p>
    <p>In practice, recording fees are so minimal that they're rarely a point of negotiation in Indiana real estate transactions.</p>

    <h3>Indiana Recording Fee Breakdown by County</h3>
    <p>Major Indiana counties and their recording fees:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Deed Recording</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Mortgage Recording</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Marion County (Indianapolis)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$32</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$45</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Lake County (Gary)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$35</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$48</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Allen County (Fort Wayne)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$42</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Hamilton County (Carmel/Fishers)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$28</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">St. Joseph County (South Bend)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$42</td>
      </tr>
    </table>

    <h3>Indiana Transfer Cost Examples</h3>
    <p><strong>Example 1: $250,000 Home in Indianapolis (Marion County)</strong></p>
    <ul>
      <li>Sale Price: $250,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $32</li>
      <li>Satisfaction of Old Mortgage: $32</li>
      <li><strong>Total Seller Cost: $64 (0.03%)</strong></li>
    </ul>

    <p><strong>Example 2: $400,000 Home in Carmel (Hamilton County)</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $28</li>
      <li>Satisfaction of Old Mortgage: $28</li>
      <li><strong>Total Seller Cost: $56 (0.01%)</strong></li>
    </ul>

    <p><strong>Buyer's Recording Cost (for new mortgage):</strong></p>
    <ul>
      <li>$400,000 Sale Price</li>
      <li>$320,000 Mortgage (80% LTV)</li>
      <li>Mortgage Recording Fee: $40</li>
      <li><strong>Total Buyer Recording Cost: $40</strong></li>
    </ul>

    <h3>How Indiana Compares to Other States</h3>
    <p>Indiana's lack of transfer tax makes it one of the cheapest states for closing costs:</p>
    <ul>
      <li><strong>Indiana:</strong> $0 transfer tax + $28-$40 recording = ~$60 total</li>
      <li><strong>Pennsylvania:</strong> 2% transfer tax ($8,000 on $400K sale) + recording</li>
      <li><strong>Delaware:</strong> 4% transfer tax ($16,000 on $400K sale)</li>
      <li><strong>New York:</strong> 1.4-3%+ transfer tax ($5,600+ on $400K sale)</li>
      <li><strong>California (SF):</strong> Up to 3% transfer tax ($12,000 on $400K sale)</li>
    </ul>
    <p>On a $400,000 home sale, Indiana sellers save $5,000-$15,000 compared to high-tax states.</p>

    <h3>States Without Transfer Tax (Like Indiana)</h3>
    <p>Indiana is one of only a few states with no transfer tax:</p>
    <ul>
      <li><strong>Alaska:</strong> No state transfer tax (some boroughs charge small fees)</li>
      <li><strong>Idaho:</strong> No state transfer tax</li>
      <li><strong>Indiana:</strong> No state or local transfer tax</li>
      <li><strong>Louisiana:</strong> No transfer tax (but has mortgage tax)</li>
      <li><strong>Mississippi:</strong> No state transfer tax</li>
      <li><strong>Missouri:</strong> No state transfer tax (county fees only)</li>
      <li><strong>Montana:</strong> No state transfer tax</li>
      <li><strong>New Mexico:</strong> No transfer tax (recording fees only)</li>
      <li><strong>North Dakota:</strong> No transfer tax</li>
      <li><strong>Oregon:</strong> No state transfer tax (some counties have fees)</li>
      <li><strong>Texas:</strong> No state transfer tax</li>
      <li><strong>Utah:</strong> No transfer tax (recording fees)</li>
      <li><strong>Wyoming:</strong> No state transfer tax</li>
    </ul>
    <p>These states represent about 25% of the US and offer significant savings for property transfers.</p>

    <h3>Indiana Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Indiana (on a $300,000 home):</p>
    <ul>
      <li>Real Estate Commission (6%): $18,000</li>
      <li>Transfer Tax: $0</li>
      <li>Deed Recording: $30</li>
      <li>Satisfaction of Mortgage: $30</li>
      <li>Title Search: $150-$250</li>
      <li>Owner's Title Policy: $800-$1,200</li>
      <li>Attorney Fees (optional): $500-$1,000</li>
      <li><strong>Total: ~$19,500-$20,500 (6.5-6.8%)</strong></li>
    </ul>
    <p>The absence of transfer tax keeps total closing costs well below the national average.</p>

    <h3>Indiana Title Insurance Costs</h3>
    <p>While Indiana has no transfer tax, title insurance is customary:</p>
    <p><strong>Owner's Title Policy:</strong> Approximately $3.00-$4.00 per $1,000 of purchase price</p>
    <p><strong>Lender's Title Policy:</strong> Approximately $2.50-$3.50 per $1,000 of loan amount</p>
    <p><strong>Simultaneous Issue Rate:</strong> Discounted rate when owner's and lender's policies issued together</p>
    <p>On a $300,000 purchase, expect to pay $900-$1,200 for owner's title insurance.</p>

    <h3>Who Pays for What in Indiana</h3>
    <p>Standard practice in Indiana real estate transactions:</p>
    <p><strong>Seller Typically Pays:</strong></p>
    <ul>
      <li>Real estate commission (6% total)</li>
      <li>Owner's title insurance policy</li>
      <li>Deed recording fee ($28-$40)</li>
      <li>Satisfaction of existing mortgage</li>
      <li>Seller's attorney fees (if applicable)</li>
      <li>Transfer taxes ($0 - none in Indiana)</li>
    </ul>
    <p><strong>Buyer Typically Pays:</strong></p>
    <ul>
      <li>Lender's title insurance policy</li>
      <li>Mortgage recording fee ($36-$52)</li>
      <li>Home inspection ($350-$500)</li>
      <li>Appraisal ($400-$600)</li>
      <li>Survey ($350-$600)</li>
      <li>Buyer's attorney fees (if applicable)</li>
    </ul>

    <h3>Indiana Real Estate Transfer Process</h3>
    <p>Typical Indiana closing timeline and requirements:</p>
    <ul>
      <li><strong>Purchase Agreement:</strong> Signed by buyer and seller</li>
      <li><strong>Title Search:</strong> 30-50 year search of property records</li>
      <li><strong>Title Insurance:</strong> Owner's and lender's policies issued</li>
      <li><strong>Closing:</strong> 30-45 days from contract (cash deals faster)</li>
      <li><strong>Attorney or Title Company:</strong> Conducts closing</li>
      <li><strong>Recording:</strong> Deed and mortgage recorded same day or next business day</li>
      <li><strong>Possession:</strong> Typically day of closing or per agreement</li>
    </ul>

    <h3>Indiana Disclosure Requirements</h3>
    <p>Indiana sellers must provide:</p>
    <ul>
      <li><strong>Seller's Residential Real Estate Sales Disclosure:</strong> Required by state law</li>
      <li><strong>Lead-Based Paint Disclosure:</strong> For homes built before 1978</li>
      <li><strong>HOA Documents:</strong> If property in homeowners association</li>
      <li><strong>Well/Septic Disclosure:</strong> If applicable</li>
      <li><strong>Property Condition Disclosure:</strong> Known defects must be disclosed</li>
    </ul>
    <p>Failure to disclose known issues can lead to liability after closing.</p>

    <h3>Indiana Real Estate Excise Tax (Proposed but Not Enacted)</h3>
    <p>Periodically, Indiana legislators propose a real estate excise tax (transfer tax), but none have been enacted. Proposed rates have ranged from 0.1% to 0.5%, but strong opposition from:</p>
    <ul>
      <li>Real estate industry groups</li>
      <li>Homebuilders associations</li>
      <li>Property rights advocates</li>
      <li>Chamber of Commerce organizations</li>
    </ul>
    <p>has prevented passage. Indiana's competitive advantage in attracting residents and businesses includes its low closing costs.</p>

    <h3>Benefits of No Transfer Tax for Indiana</h3>
    <p>The absence of transfer tax provides several economic advantages:</p>
    <ul>
      <li><strong>Increased Mobility:</strong> Lower costs make it easier to relocate for jobs</li>
      <li><strong>Investment-Friendly:</strong> Flippers and investors face lower transaction costs</li>
      <li><strong>Business Attraction:</strong> Companies relocating employees face lower costs</li>
      <li><strong>Economic Development:</strong> Lower barriers to property ownership</li>
      <li><strong>Market Liquidity:</strong> Easier to buy/sell encourages active market</li>
    </ul>

    <h3>Indiana Property Tax Context</h3>
    <p>While Indiana has no transfer tax, buyers should be aware of property taxes:</p>
    <p><strong>Average Effective Rate:</strong> 0.81% of home value (below national average)</p>
    <p><strong>Tax Cap:</strong> Homestead properties capped at 1% of assessed value</p>
    <p><strong>Assessment:</strong> Properties reassessed annually</p>
    <p><strong>Payment:</strong> Property taxes paid in two installments (May and November)</p>
    <p><strong>Homestead Deduction:</strong> Up to 60% of assessed value for primary residence</p>
    <p>This combination of low transfer costs and reasonable property taxes makes Indiana attractive for homebuyers.</p>

    <h3>FSBO (For Sale By Owner) in Indiana</h3>
    <p>With no transfer tax, FSBO transactions in Indiana are particularly cost-effective:</p>
    <ul>
      <li>Avoid 6% real estate commission ($18,000 on $300K sale)</li>
      <li>Pay only $28-$40 deed recording fee</li>
      <li>Still pay for title insurance ($900-$1,200)</li>
      <li>Consider attorney fees ($500-$1,000) for contract review</li>
      <li><strong>Total FSBO closing costs: ~$1,500-$2,500 vs. $19,500+ with agent</strong></li>
    </ul>
    <p>The lack of transfer tax makes FSBO more viable in Indiana than in high-tax states.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and county to calculate estimated transfer costs. Results show:</p>
    <ul>
      <li>Transfer tax (always $0 in Indiana)</li>
      <li>County recording fees</li>
      <li>Estimated total closing costs</li>
      <li>Comparison to high-tax states</li>
    </ul>
    <p>For exact recording fees, contact your county recorder's office or title company.</p>

    <h3>Additional Resources</h3>
    <p><strong>Indiana County Recorders:</strong> Verify exact recording fees by county</p>
    <p><strong>Indiana Real Estate Commission:</strong> License verification and consumer information</p>
    <p><strong>Title Companies:</strong> Provide detailed closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Review contracts and conduct closings</p>
    <p><strong>Indiana Bar Association:</strong> Find qualified real estate attorneys</p>
    `
  }
};
