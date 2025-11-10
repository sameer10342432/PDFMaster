import { CalculatorContent } from '@/types';

export const CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'California Transfer Tax Calculator - County & City Transfer Tax',
  description: 'Calculate California real estate transfer tax by county and city including documentary transfer tax rates',
  slug: 'california-transfer-tax-calculator',
  icon: '🌴',
  category: 'Seller Tools',
  article: {
    title: 'Understanding California Real Estate Transfer Tax & Documentary Transfer Tax',
    content: `
    <h2>California Transfer Tax Guide</h2>
    <p>California has one of the most complex transfer tax systems in the United States, with <strong>county transfer tax, city transfer tax, and special district taxes</strong> all potentially applying to a single transaction. Rates vary dramatically by location, from as low as $0.55 per $500 to over $3.00 per $500 in some Bay Area cities.</p>
    
    <h3>California Base Transfer Tax Rate</h3>
    <p><strong>Standard County Rate:</strong> $0.55 per $500 of consideration (0.11% of sale price)</p>
    <p><strong>State Tax:</strong> None - California has no state-level transfer tax</p>
    <p>The base rate of $0.55 per $500 is the minimum charged in most California counties. However, cities within those counties can add their own transfer taxes on top of the county rate, creating combined rates that can exceed 3%.</p>

    <h3>California City Transfer Taxes (Additional)</h3>
    <p>Many California cities impose additional transfer taxes, creating some of the highest combined rates in the nation:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">City</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">County Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">City Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Combined Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">San Francisco</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.50/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Varies by price</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.5% - 3.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Oakland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12/$1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.31%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Berkeley</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15/$1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.61%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Alameda</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12/$1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.31%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Los Angeles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.50/$1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.56%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">San Jose</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.30/$1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.44%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">San Diego</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Sacramento</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.55/$500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">None</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.11%</td>
      </tr>
    </table>

    <h3>San Francisco Progressive Transfer Tax</h3>
    <p>San Francisco has a unique progressive transfer tax structure that increases with property value:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$0 - $100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2.50 per $500 (0.5%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$100,001 - $250,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.40 per $500 (0.68%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$250,001 - $1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.75 per $500 (0.75%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,001 - $5,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10 per $500 (2.0%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000,001 - $10,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13.75 per $500 (2.75%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$10,000,001 - $25,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12 per $500 (2.4%)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Over $25,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15 per $500 (3.0%)</td>
      </tr>
    </table>
    <p>San Francisco's progressive structure means ultra-luxury properties can face transfer taxes exceeding $750,000 on a $25M sale.</p>

    <h3>Who Pays California Transfer Tax?</h3>
    <p>In California, transfer tax payment is <strong>negotiable</strong> and varies by local custom:</p>
    <p><strong>Northern California (Bay Area):</strong> Typically split 50/50 between buyer and seller</p>
    <p><strong>Southern California (LA, San Diego, OC):</strong> Seller usually pays entire transfer tax</p>
    <p><strong>Negotiable in contract:</strong> Can be allocated differently based on market conditions</p>
    <p>In competitive markets, buyers may agree to pay all transfer taxes to strengthen their offer.</p>

    <h3>California Transfer Tax Calculation Examples</h3>
    <p><strong>Example 1: $600,000 Home in San Diego</strong></p>
    <ul>
      <li>Sale Price: $600,000</li>
      <li>County Transfer Tax: $600,000 ÷ 500 × $0.55 = $660</li>
      <li>City Transfer Tax: $0 (San Diego has none)</li>
      <li>Recording Fee: $75</li>
      <li><strong>Total Transfer Cost: $735 (0.12%)</strong></li>
    </ul>

    <p><strong>Example 2: $1,200,000 Condo in San Francisco</strong></p>
    <ul>
      <li>Sale Price: $1,200,000</li>
      <li>First $1,000,000: $1,000,000 ÷ 500 × $3.75 = $7,500</li>
      <li>Next $200,000: $200,000 ÷ 500 × $10 = $4,000</li>
      <li>Total Transfer Tax: $11,500</li>
      <li>Recording Fee: $75</li>
      <li><strong>Total Transfer Cost: $11,575 (0.96%)</strong></li>
    </ul>

    <p><strong>Example 3: $800,000 House in Oakland</strong></p>
    <ul>
      <li>Sale Price: $800,000</li>
      <li>County Tax (Alameda): $800,000 ÷ 500 × $0.55 = $880</li>
      <li>City Tax (Oakland): $800,000 × 0.012 = $9,600</li>
      <li>Recording Fee: $75</li>
      <li><strong>Total Transfer Cost: $10,555 (1.32%)</strong></li>
    </ul>

    <p><strong>Example 4: $500,000 Home in Los Angeles</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>County Tax (LA): $500,000 ÷ 500 × $0.55 = $550</li>
      <li>City Tax (LA): $500,000 × 0.0045 = $2,250</li>
      <li>Recording Fee: $75</li>
      <li><strong>Total Transfer Cost: $2,875 (0.58%)</strong></li>
    </ul>

    <h3>California Recording Fees</h3>
    <p>County recording fees vary across California but typically include:</p>
    <p><strong>Deed Recording:</strong> $15-$75 first page + $3-$10 each additional page</p>
    <p><strong>Mortgage/Deed of Trust:</strong> $15-$100 depending on county</p>
    <p><strong>PCOR (Preliminary Change of Ownership):</strong> $20-$40</p>
    <p><strong>Document Transfer Tax Declaration:</strong> Included in deed recording</p>
    <p>Most California counties charge $50-$150 total for all recording fees combined.</p>

    <h3>Documentary Transfer Tax Declaration</h3>
    <p>California requires sellers to complete a <strong>Documentary Transfer Tax Declaration</strong> on every recorded deed, disclosing:</p>
    <ul>
      <li>Full consideration (sale price) for the property</li>
      <li>Whether transfer tax is based on full value or computed value</li>
      <li>Any liens or encumbrances remaining on property</li>
      <li>Exemption claims (if applicable)</li>
    </ul>
    <p>This declaration is recorded with the deed and becomes public record. Buyers and sellers must verify the calculation before recording.</p>

    <h3>Transfer Tax Exemptions in California</h3>
    <p>Certain transfers may be exempt from documentary transfer tax:</p>
    <ul>
      <li>Gifts to family members (with proper gift tax reporting)</li>
      <li>Transfers between spouses or domestic partners</li>
      <li>Transfers to revocable trusts where grantor is beneficiary</li>
      <li>Divorce-related transfers per court order</li>
      <li>Estate/inheritance transfers (though recording fees apply)</li>
      <li>Certain nonprofit and government entity transfers</li>
      <li>Deeds given as security for a debt (deeds of trust)</li>
    </ul>
    <p>To claim exemption, check the appropriate box on the Documentary Transfer Tax Declaration.</p>

    <h3>How California Compares to Other States</h3>
    <p>California's base rate (0.11%) is low, but city additions make some areas very expensive:</p>
    <ul>
      <li><strong>Lower than CA (Bay Area):</strong> Texas (0%), Florida (0.7%), Nevada (varies)</li>
      <li><strong>Higher than CA (most areas):</strong> Pennsylvania (2%), Delaware (4%), Washington DC (1.45%)</li>
      <li><strong>Similar to CA (base rate):</strong> Nevada (0.12-0.51%), Arizona (depends on county)</li>
    </ul>
    <p>San Francisco's 3% rate on luxury properties rivals the highest transfer taxes nationwide.</p>

    <h3>Proposition 13 and Transfer Tax Impact</h3>
    <p>California's Proposition 13 limits annual property tax increases to 2%, but property is reassessed at market value upon sale. This creates a unique dynamic:</p>
    <ul>
      <li>Long-term owners pay low property taxes due to Prop 13</li>
      <li>New buyers face immediate reassessment at purchase price</li>
      <li>Transfer tax + reassessment = significant one-time costs at sale</li>
      <li>Some owners hold property longer to avoid both transfer tax and reassessment</li>
    </ul>
    <p>This makes California transfer costs particularly significant for investors flipping properties frequently.</p>

    <h3>Bay Area Cities with High Transfer Taxes</h3>
    <p>Beyond San Francisco, many Bay Area cities have imposed high transfer taxes:</p>
    <ul>
      <li><strong>Berkeley:</strong> 1.5% city tax + 0.11% county = 1.61% total</li>
      <li><strong>Oakland:</strong> 1.2% city tax + 0.11% county = 1.31% total</li>
      <li><strong>Alameda:</strong> 1.2% city tax + 0.11% county = 1.31% total</li>
      <li><strong>Richmond:</strong> 1.5% city tax + 0.11% county = 1.61% total</li>
      <li><strong>San Pablo:</strong> 1.5% city tax + 0.11% county = 1.61% total</li>
    </ul>
    <p>These cities enacted higher transfer taxes via voter initiatives to fund affordable housing, homelessness programs, and city services.</p>

    <h3>California Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in California (on a $700,000 Bay Area home):</p>
    <ul>
      <li>Real Estate Commission (5-6%): $35,000-$42,000</li>
      <li>Transfer Tax (varies by city): $4,550-$9,100</li>
      <li>Title Insurance: $1,500-$2,500</li>
      <li>Recording Fees: $75-$150</li>
      <li>HOA Transfer Fees: $200-$500</li>
      <li>Natural Hazard Disclosure: $125-$300</li>
      <li>Home Warranty (optional): $400-$600</li>
      <li><strong>Total: ~$42,000-$55,000 (6-7.9%)</strong></li>
    </ul>
    <p>Transfer tax represents 10-20% of total closing costs in high-tax Bay Area cities.</p>

    <h3>How to Reduce California Transfer Tax</h3>
    <p><strong>1. Negotiate in Contract:</strong> In Northern California, it's common to split transfer tax - negotiate buyer payment</p>
    <p><strong>2. Choose Location Strategically:</strong> Adjacent cities can have vastly different rates (compare SF vs. Daly City)</p>
    <p><strong>3. Seller Concessions:</strong> Offer to cover other buyer costs instead of price reduction (reduces tax base)</p>
    <p><strong>4. FSBO Savings:</strong> Save commission costs but still pay transfer tax</p>
    <p><strong>5. Discount Brokerages:</strong> Lower commission doesn't reduce transfer tax (calculated on sale price)</p>
    <p>Unlike commission, transfer tax is non-negotiable once the sale price is set. Focus on negotiating who pays.</p>

    <h3>Transfer Tax Avoidance Schemes (Illegal)</h3>
    <p><strong>Warning:</strong> Some sellers attempt to underreport sale prices to reduce transfer tax. This is illegal and can result in:</p>
    <ul>
      <li>Criminal charges for tax evasion</li>
      <li>Civil penalties up to 300% of tax owed</li>
      <li>Fraudulent conveyance claims from future buyers</li>
      <li>IRS scrutiny and additional tax liability</li>
    </ul>
    <p>Always report the true consideration on the Documentary Transfer Tax Declaration. County assessors cross-check MLS data and can audit transactions.</p>

    <h3>Commercial Property Transfer Tax in California</h3>
    <p>Commercial properties generally face the same transfer tax rates as residential, but with some nuances:</p>
    <ul>
      <li>Same county and city rates apply</li>
      <li>Larger sale prices mean much higher absolute tax amounts</li>
      <li>1031 exchanges still require transfer tax payment</li>
      <li>Entity transfers (LLC/corp) may avoid transfer tax if structured correctly</li>
      <li>Long-term leases may trigger transfer tax in some jurisdictions</li>
    </ul>

    <h3>Future of California Transfer Taxes</h3>
    <p>California cities continue to propose and pass transfer tax increases:</p>
    <ul>
      <li>Voter initiatives to fund affordable housing</li>
      <li>Progressive structures targeting luxury properties</li>
      <li>Annual CPI adjustments to existing rates</li>
      <li>Additional taxes on vacant properties</li>
      <li>Commercial property tax reform efforts</li>
    </ul>
    <p>Stay informed about local ballot measures that could impact transfer tax rates in your area.</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price and select your county and city to calculate estimated transfer taxes. Results show:</p>
    <ul>
      <li>County documentary transfer tax</li>
      <li>City transfer tax (if applicable)</li>
      <li>Estimated recording fees</li>
      <li>Total transfer costs</li>
      <li>Effective tax rate as percentage of sale price</li>
    </ul>
    <p>For the most accurate calculation, verify current rates with your title company or county recorder's office.</p>

    <h3>Additional Resources</h3>
    <p><strong>County Recorder Offices:</strong> Verify exact rates and fees</p>
    <p><strong>Title Companies:</strong> Provide detailed closing cost estimates</p>
    <p><strong>Real Estate Attorneys:</strong> Advise on transfer tax strategies</p>
    <p><strong>City Finance Departments:</strong> Publish official transfer tax rates</p>
    <p><strong>Escrow Companies:</strong> Calculate exact transfer tax at closing</p>
    `
  }
};
