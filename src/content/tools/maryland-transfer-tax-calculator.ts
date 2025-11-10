import { CalculatorContent } from '@/types';

export const MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Maryland Transfer Tax Calculator - State & County Transfer Tax + Recordation Tax',
  description: 'Calculate Maryland real estate transfer tax, recordation tax, and recording fees by county including first-time homebuyer benefits',
  slug: 'maryland-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Maryland Real Estate Transfer Tax & Recordation Tax',
    content: `
    <h2>Maryland Transfer Tax Guide</h2>
    <p>Maryland has one of the most complex transfer tax structures in the United States, with <strong>state transfer tax, county transfer tax, and recordation tax</strong> all applying to most transactions. Combined rates can reach 3-4% in some counties, making Maryland one of the highest transfer tax states in the nation.</p>
    
    <h3>Maryland State Transfer Tax Rates</h3>
    <p><strong>Standard Rate:</strong> 0.5% of purchase price</p>
    <p><strong>First-Time Maryland Homebuyer Rate:</strong> 0.25% (buyer must occupy as principal residence)</p>
    <p>The state transfer tax is typically <strong>split 50/50</strong> between buyer and seller unless the purchase contract specifies otherwise. When a first-time homebuyer qualifies for the reduced 0.25% rate, the seller pays the full state transfer tax.</p>

    <h3>Maryland County Transfer Tax & Recordation Tax Rates (2025)</h3>
    <p>Below is a comprehensive breakdown by county:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County/City</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">County Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Recordation Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Anne Arundel County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0% (1.5% if >$1M)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.2-2.7%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Baltimore City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0%+</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.0%+</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Baltimore County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.89%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.89%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Carroll County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.82%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.32%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Frederick County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.2%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Harford County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.66%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.66%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Howard County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.75%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.5%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.8%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.3%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Prince George's County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.9%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.8%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">St. Mary's County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.7%</td>
      </tr>
    </table>
    <p><strong>Note:</strong> Total rate includes 0.5% state transfer tax (typical split). Rates do not include state transfer tax split between parties.</p>

    <h3>Baltimore City Special Taxes</h3>
    <p>Baltimore City imposes additional taxes on high-value transactions:</p>
    <ul>
      <li><strong>Yield Tax Surcharge (over $1M):</strong> 15% of recordation tax + 40% of transfer tax</li>
      <li><strong>Example:</strong> On a $2M property, the yield tax adds approximately $15,000 to closing costs</li>
      <li>Combined state + city + recordation + yield tax can exceed <strong>3.5%</strong> for luxury properties</li>
    </ul>

    <h3>Who Pays Maryland Transfer & Recordation Tax?</h3>
    <p><strong>State Transfer Tax (0.5%):</strong> Typically split 50/50 between buyer and seller</p>
    <p><strong>County Transfer Tax:</strong> Typically split 50/50, but varies by local custom</p>
    <p><strong>Recordation Tax:</strong> Typically split 50/50</p>
    <p><strong>First-Time Homebuyer:</strong> If buyer qualifies for 0.25% reduced state rate, seller pays full state transfer tax</p>
    <p>All allocations are negotiable in the purchase contract. In competitive markets, buyers may agree to pay more of the transfer costs.</p>

    <h3>Maryland First-Time Homebuyer Benefits</h3>
    <p>Maryland offers significant savings for first-time homebuyers:</p>
    <ul>
      <li><strong>Reduced State Transfer Tax:</strong> 0.25% instead of 0.5% (saves $1,250 on $500K home)</li>
      <li><strong>Qualification:</strong> Buyer must occupy as principal residence</li>
      <li><strong>Additional County Exemptions:</strong></li>
      <ul>
        <li>Montgomery County: $30,000 exemption for owner-occupied residential</li>
        <li>Worcester County: $50,000 exemption if owner-occupied</li>
        <li>St. Mary's County: $100,000 exemption for principal residence</li>
        <li>Harford County: $22,000 exemption for owner-occupied</li>
      </ul>
    </ul>

    <h3>Maryland Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $400,000 Home in Montgomery County (Standard Buyer)</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>State Transfer Tax (0.5%, split 50/50): Buyer $1,000, Seller $1,000</li>
      <li>County Transfer Tax (1.0%, split 50/50): Buyer $2,000, Seller $2,000</li>
      <li>Recordation Tax (0.8%, split 50/50): Buyer $1,600, Seller $1,600</li>
      <li><strong>Total Buyer Cost: $4,600 (1.15%)</strong></li>
      <li><strong>Total Seller Cost: $4,600 (1.15%)</strong></li>
      <li><strong>Combined Transfer Costs: $9,200 (2.3%)</strong></li>
    </ul>

    <p><strong>Example 2: $400,000 Home in Montgomery County (First-Time Homebuyer)</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>State Transfer Tax (0.25%): Seller pays $1,000</li>
      <li>County Transfer Tax ($370K after $30K exemption, split): Each pays $1,850</li>
      <li>Recordation Tax (0.8%, split): Each pays $1,600</li>
      <li><strong>Total Buyer Cost: $3,450 (0.86%)</strong></li>
      <li><strong>Total Seller Cost: $4,450 (1.11%)</strong></li>
      <li><strong>Savings vs Standard: $1,150 for buyer, $150 for seller</strong></li>
    </ul>

    <p><strong>Example 3: $600,000 Home in Baltimore City</strong></p>
    <ul>
      <li>Sale Price: $600,000</li>
      <li>State Transfer Tax (0.5%, split): Each pays $1,500</li>
      <li>City Transfer Tax (1.5%, split): Each pays $4,500</li>
      <li>Recordation Tax (1.0%, split): Each pays $3,000</li>
      <li><strong>Total Buyer Cost: $9,000 (1.5%)</strong></li>
      <li><strong>Total Seller Cost: $9,000 (1.5%)</strong></li>
      <li><strong>Combined Transfer Costs: $18,000 (3.0%)</strong></li>
    </ul>

    <h3>Maryland Recording Fees</h3>
    <p>In addition to transfer and recordation taxes, Maryland charges recording fees:</p>
    <p><strong>Releases (≤9 pages):</strong> $10</p>
    <p><strong>Other instruments (≤9 pages):</strong> $20</p>
    <p><strong>Principal residence instrument (any length):</strong> $20</p>
    <p><strong>Other instruments (≥10 pages):</strong> $75</p>
    <p><strong>$40 surcharge:</strong> On all recordable instruments (except notices of sale, POAs, plats, HOA docs)</p>
    <p>Typical total recording fees: $60-$135 per transaction</p>

    <h3>How Maryland Compares to Other States</h3>
    <p>Maryland has some of the highest transfer taxes in the United States:</p>
    <ul>
      <li><strong>Maryland (avg):</strong> 2.0-3.0% combined transfer costs</li>
      <li><strong>Higher than:</strong> Most states - only Delaware (4%), Washington DC (1.45-2.9%), and some CA cities rival MD</li>
      <li><strong>Lower than:</strong> Delaware (4% transfer tax), some SF Bay Area cities (up to 3%)</li>
      <li><strong>Much higher than:</strong> TX/IN/MO (0% transfer tax), FL (0.7%), PA (2% but no recordation tax)</li>
    </ul>
    <p>On a $400,000 home, Maryland buyers and sellers pay $7,000-$12,000 in combined transfer costs compared to $0-$100 in zero-tax states.</p>

    <h3>Maryland Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Maryland (on a $400,000 home in Montgomery County):</p>
    <ul>
      <li>Real Estate Commission (6%): $24,000</li>
      <li>Transfer & Recordation Taxes (seller's half): $4,600</li>
      <li>Title Insurance: $1,000-$1,500</li>
      <li>Attorney Fees: $800-$1,500</li>
      <li>Recording Fees: $60-$100</li>
      <li>FHA/VA Required Repairs (if applicable): $500-$2,000</li>
      <li><strong>Total: ~$31,000-$34,000 (7.75-8.5%)</strong></li>
    </ul>
    <p>Transfer and recordation taxes represent 14-18% of total seller closing costs in Maryland.</p>

    <h3>Maryland Transfer Tax Exemptions</h3>
    <p>Certain transactions are exempt or receive reduced rates:</p>
    <ul>
      <li>Transfers between spouses or domestic partners</li>
      <li>Divorce settlements per court order</li>
      <li>Estate/inheritance transfers</li>
      <li>Transfers to/from government entities</li>
      <li>Certain nonprofit organization transfers</li>
      <li>Foreclosures and bankruptcy sales</li>
      <li>First-time homebuyer exemptions (varies by county)</li>
    </ul>

    <h3>Carroll & Frederick Counties - Lowest Cost Counties</h3>
    <p>Carroll and Frederick counties have <strong>no county transfer tax</strong>, making them Maryland's most affordable:</p>
    <ul>
      <li><strong>Carroll County Total:</strong> 0.5% state + 0.82% recordation = 1.32% (saves $4,000+ on $400K vs Baltimore County)</li>
      <li><strong>Frederick County Total:</strong> 0.5% state + 0.7% recordation = 1.2% (lowest in MD)</li>
    </ul>
    <p>Homebuyers looking to minimize transfer costs often target these counties.</p>

    <h3>Prince George's County Special Rules</h3>
    <p>Prince George's County has unique transfer tax provisions:</p>
    <ul>
      <li><strong>First $50,000 exempt</strong> from county transfer tax</li>
      <li><strong>Transfer tax applies to security instruments</strong> (mortgages/deeds of trust) in addition to deeds</li>
      <li>Combined state + county + recordation can reach <strong>2.8%</strong></li>
      <li>Higher rates make it less competitive vs neighboring DC and Virginia</li>
    </ul>

    <h3>How to Reduce Maryland Transfer Costs</h3>
    <p><strong>1. First-Time Homebuyer Benefits:</strong> Qualify for 0.25% state rate + county exemptions</p>
    <p><strong>2. Choose Low-Tax Counties:</strong> Carroll and Frederick have no county transfer tax</p>
    <p><strong>3. Negotiate Who Pays:</strong> In buyer's markets, negotiate seller pays more transfer costs</p>
    <p><strong>4. Seller Concessions:</strong> Offer to cover other costs instead of price reduction (reduces tax base)</p>
    <p><strong>5. Consider Pricing Strategy:</strong> In Montgomery County, staying under $370K saves $300 in transfer tax vs $400K</p>

    <h3>Maryland vs. Virginia vs. DC Transfer Tax Comparison</h3>
    <p>For DC metro area homebuyers comparing locations:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Jurisdiction</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400K Home Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Maryland (Montgomery County)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia (Fairfax County)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.33%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,320</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington DC</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.45% (<$400K)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,800</td>
      </tr>
    </table>
    <p>Maryland's higher transfer costs are a factor in DC metro area location decisions.</p>

    <h3>Maryland Real Estate Attorney Requirement</h3>
    <p>Maryland <strong>requires attorney involvement</strong> in most real estate transactions:</p>
    <ul>
      <li>Attorneys review contracts and conduct title searches</li>
      <li>Typical attorney fees: $800-$1,500 per party</li>
      <li>Adds to overall transaction costs but provides legal protection</li>
      <li>Attorneys often negotiate transfer tax allocation in contracts</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price, select your county, and indicate if buyer qualifies as first-time homebuyer. Results show:</p>
    <ul>
      <li>State transfer tax (standard or first-time buyer rate)</li>
      <li>County transfer tax (with applicable exemptions)</li>
      <li>Recordation tax</li>
      <li>Recording fees</li>
      <li>Total costs split by buyer/seller (50/50 or as specified)</li>
      <li>Comparison to neighboring states</li>
    </ul>
    <p>For exact calculations with all exemptions, consult your title company or real estate attorney.</p>

    <h3>Additional Resources</h3>
    <p><strong>Maryland Department of Assessments & Taxation:</strong> Official transfer tax information</p>
    <p><strong>County Clerk of Courts:</strong> Recording fee schedules and procedures</p>
    <p><strong>Title Companies:</strong> Detailed closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Contract negotiation and tax allocation strategies</p>
    <p><strong>Maryland Association of Realtors:</strong> Market data and transfer tax trends</p>
    `
  }
};
