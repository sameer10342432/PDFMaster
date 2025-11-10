import { CalculatorContent } from '@/types';

export const WISCONSIN_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wisconsin Transfer Tax Calculator - State Transfer Fee & Recording Costs',
  description: 'Calculate Wisconsin real estate transfer fee (0.3%) and county recording fees for property sales',
  slug: 'wisconsin-transfer-tax-calculator',
  icon: '🧀',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Wisconsin Real Estate Transfer Fee & Recording Costs',
    content: `
    <h2>Wisconsin Transfer Fee Guide</h2>
    <p>Wisconsin has a straightforward and affordable transfer tax system with a <strong>flat 0.3% state transfer fee</strong> and uniform $30 county recording fees. Unlike high-tax states like Maryland (2-3%) or California (up to 3%), Wisconsin keeps real estate transaction costs low and predictable.</p>
    
    <h3>Wisconsin State Transfer Fee Rate</h3>
    <p><strong>Rate:</strong> $0.30 per $100 of property value (0.3% or $3.00 per $1,000)</p>
    <p><strong>Calculation:</strong> Value rounded UP to the next $100</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>$331,195 home = $331,200 rounded = $993.60 transfer fee</li>
      <li>$318,000 home = $318,000 (already rounded) = $954 transfer fee</li>
      <li>$500,550 home = $500,600 rounded = $1,501.80 transfer fee</li>
    </ul>

    <h3>Who Pays Wisconsin Transfer Fee?</h3>
    <p><strong>Typically the seller</strong> pays the Wisconsin transfer fee, though this is negotiable in the purchase contract.</p>
    <p><strong>Payment:</strong> Collected at closing and paid to the county Register of Deeds when the deed is recorded</p>
    <p><strong>Electronic Filing:</strong> All conveyances require an eRETR (electronic Real Estate Transfer Return) filed through the Wisconsin Department of Revenue</p>

    <h3>Wisconsin County Recording Fees (Uniform Statewide)</h3>
    <p>Since Wisconsin Act 314 (2010), recording fees are standardized across all counties:</p>
    <p><strong>Standard Documents (Deeds, Mortgages, Satisfactions, Land Contracts):</strong> $30.00 flat fee per document</p>
    <p><strong>Plats:</strong></p>
    <ul>
      <li>Subdivision/Cemetery/Condominium: $50.00</li>
      <li>Highway/DOT Project Plats: $25.00</li>
    </ul>
    <p><strong>Filed Documents (Lis Pendens, etc.):</strong> $30.00 flat fee</p>
    <p><strong>Certified Copies:</strong> First page $2.00, each additional page $1.00, certification fee +$1.00</p>
    <p><strong>Maximum Sheet Size:</strong> 8.5" × 14"</p>

    <h3>Wisconsin Transfer Cost Examples</h3>
    <p><strong>Example 1: $250,000 Home Purchase</strong></p>
    <ul>
      <li>Sale Price: $250,000</li>
      <li>State Transfer Fee: $250,000 ÷ 100 × $0.30 = $750</li>
      <li>Deed Recording Fee: $30</li>
      <li>Satisfaction of Old Mortgage: $30 (if seller has existing mortgage)</li>
      <li><strong>Total Seller Cost: $810 (0.32%)</strong></li>
    </ul>

    <p><strong>Example 2: $400,000 Home Purchase</strong></p>
    <ul>
      <li>Sale Price: $400,000</li>
      <li>State Transfer Fee: $400,000 ÷ 100 × $0.30 = $1,200</li>
      <li>Deed Recording Fee: $30</li>
      <li>Satisfaction of Old Mortgage: $30</li>
      <li><strong>Total Seller Cost: $1,260 (0.32%)</strong></li>
    </ul>

    <p><strong>Buyer's Recording Cost (for new mortgage):</strong></p>
    <ul>
      <li>$400,000 Sale Price</li>
      <li>$320,000 Mortgage (80% LTV)</li>
      <li>Mortgage Recording Fee: $30</li>
      <li><strong>Total Buyer Recording Cost: $30</strong></li>
    </ul>

    <h3>How Wisconsin Compares to Other States</h3>
    <p>Wisconsin's 0.3% transfer fee is moderate and highly predictable:</p>
    <ul>
      <li><strong>Wisconsin:</strong> 0.3% transfer fee + $60 recording = ~$1,260 on $400K</li>
      <li><strong>Lower than Wisconsin:</strong> TX/IN/MO (0% transfer tax)</li>
      <li><strong>Higher than Wisconsin:</strong> MD (2-3%), CA (0.1-3%), NY (1.4-3%), PA (2%)</li>
      <li><strong>Similar to Wisconsin:</strong> NC (0.2%), GA (0.1% state only), KS (0.05%)</li>
    </ul>
    <p>Wisconsin's moderate rate balances state revenue needs with reasonable closing costs for buyers and sellers.</p>

    <h3>Wisconsin Transfer Fee Exemptions</h3>
    <p>No transfer fee required for the following transactions:</p>
    <ul>
      <li>Transfers before October 1, 1969</li>
      <li>Divorce settlements, bankruptcy, foreclosure</li>
      <li>Transfers between parent and child (without payment)</li>
      <li>Family/domestic partner transfers for nominal consideration</li>
      <li>Entity mergers/conversions where ownership unchanged</li>
      <li>Delinquent tax sales</li>
      <li>Transfers to government entities</li>
      <li>Transfers where no value changes hands (quit claim between co-owners)</li>
    </ul>

    <h3>Wisconsin Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Wisconsin (on a $300,000 home):</p>
    <ul>
      <li>Real Estate Commission (6%): $18,000</li>
      <li>Transfer Fee (0.3%): $900</li>
      <li>Deed Recording: $30</li>
      <li>Satisfaction of Mortgage: $30</li>
      <li>Title Insurance: $800-$1,200</li>
      <li>Attorney Fees (optional): $500-$1,000</li>
      <li>Municipal/County Fees: $50-$100</li>
      <li><strong>Total: ~$20,300-$21,300 (6.8-7.1%)</strong></li>
    </ul>
    <p>Transfer fees represent only about 4-5% of total seller closing costs - far less than commission.</p>

    <h3>Wisconsin eRETR Electronic Filing System</h3>
    <p>Wisconsin requires electronic filing of transfer returns:</p>
    <p><strong>System:</strong> eRETR (electronic Real Estate Transfer Return)</p>
    <p><strong>Website:</strong> https://www.revenue.wi.gov/retr</p>
    <p><strong>Filing Required For:</strong> All conveyances of Wisconsin real property</p>
    <p><strong>Information Required:</strong></p>
    <ul>
      <li>Property address and legal description</li>
      <li>Seller and buyer information</li>
      <li>Sale price/consideration</li>
      <li>Property type and use</li>
      <li>Exemption claims (if applicable)</li>
    </ul>
    <p><strong>Who Files:</strong> Typically the title company or closing attorney</p>

    <h3>Wisconsin Title Insurance Costs</h3>
    <p>Wisconsin is a <strong>regulated title insurance state</strong> with rates set by the Office of the Commissioner of Insurance:</p>
    <p><strong>Owner's Title Policy:</strong> Approximately $2.75-$4.00 per $1,000 of purchase price</p>
    <p><strong>Lender's Title Policy:</strong> Approximately $2.50-$3.50 per $1,000 of loan amount</p>
    <p><strong>Simultaneous Issue Discount:</strong> Available when both policies issued together (saves 20-40%)</p>
    <p>On a $300,000 purchase, expect to pay $825-$1,200 for owner's title insurance.</p>

    <h3>Who Pays for What in Wisconsin</h3>
    <p>Standard practice in Wisconsin real estate transactions:</p>
    <p><strong>Seller Typically Pays:</strong></p>
    <ul>
      <li>Real estate commission (6% total)</li>
      <li>State transfer fee (0.3%)</li>
      <li>Deed recording fee ($30)</li>
      <li>Satisfaction of existing mortgage ($30)</li>
      <li>Title insurance (varies by region)</li>
      <li>Seller's attorney fees (if using attorney)</li>
    </ul>
    <p><strong>Buyer Typically Pays:</strong></p>
    <ul>
      <li>Mortgage recording fee ($30)</li>
      <li>Home inspection ($350-$500)</li>
      <li>Appraisal ($400-$600)</li>
      <li>Survey ($350-$600)</li>
      <li>Loan origination fees</li>
      <li>Buyer's attorney fees (if using attorney)</li>
    </ul>

    <h3>Wisconsin Real Estate Transfer Process</h3>
    <p>Typical Wisconsin closing timeline:</p>
    <ul>
      <li><strong>Purchase Agreement:</strong> Signed by both parties using WB-11 form (Wisconsin standard)</li>
      <li><strong>Title Search:</strong> 40-60 years of ownership history reviewed</li>
      <li><strong>Title Insurance:</strong> Issued by regulated title companies</li>
      <li><strong>Closing:</strong> 30-45 days from contract (cash deals faster)</li>
      <li><strong>Closing Agent:</strong> Title company or attorney conducts closing</li>
      <li><strong>eRETR Filing:</strong> Electronic transfer return filed with state</li>
      <li><strong>Recording:</strong> Same day or next business day at Register of Deeds</li>
      <li><strong>Possession:</strong> Typically at closing unless otherwise negotiated</li>
    </ul>

    <h3>Wisconsin Disclosure Requirements</h3>
    <p>Wisconsin sellers must provide:</p>
    <ul>
      <li><strong>Real Estate Condition Report:</strong> Required for residential 1-4 units (WB-14 form)</li>
      <li><strong>Lead-Based Paint Disclosure:</strong> For homes built before 1978</li>
      <li><strong>Well/Septic Disclosure:</strong> If applicable</li>
      <li><strong>HOA Documents:</strong> If property in association</li>
      <li><strong>Zoning Compliance:</strong> Disclosure of zoning violations</li>
    </ul>
    <p>Failure to disclose known defects can lead to liability after closing.</p>

    <h3>Regional Variations in Wisconsin</h3>
    <p>While transfer fee and recording fees are uniform statewide, some local practices vary:</p>
    <p><strong>Milwaukee Area:</strong></p>
    <ul>
      <li>Seller typically pays title insurance</li>
      <li>Attorney closings more common than title company closings</li>
      <li>Higher overall closing costs due to attorney fees</li>
    </ul>
    <p><strong>Madison Area:</strong></p>
    <ul>
      <li>Buyer and seller often split title insurance</li>
      <li>Mix of attorney and title company closings</li>
      <li>Moderate overall closing costs</li>
    </ul>
    <p><strong>Green Bay/Fox Valley:</strong></p>
    <ul>
      <li>Title company closings predominant</li>
      <li>Lower attorney usage keeps costs down</li>
      <li>Seller pays title insurance</li>
    </ul>

    <h3>Wisconsin Property Tax Context</h3>
    <p>While Wisconsin has a moderate transfer fee, buyers should understand property taxes:</p>
    <p><strong>Average Effective Rate:</strong> 1.85% of home value (above national average of 1.07%)</p>
    <p><strong>Assessment:</strong> Properties assessed annually by local assessors</p>
    <p><strong>Payment:</strong> Varies by municipality (annual, semi-annual, or monthly)</p>
    <p><strong>School Tax Credit:</strong> Available to reduce property tax burden</p>
    <p><strong>Lottery Credit:</strong> Additional credit for primary residences</p>
    <p>Wisconsin's higher property taxes are offset by moderate transfer fees and no state income tax on Social Security.</p>

    <h3>FSBO (For Sale By Owner) in Wisconsin</h3>
    <p>With Wisconsin's straightforward transfer fee, FSBO transactions are manageable:</p>
    <ul>
      <li>Avoid 6% real estate commission ($18,000 on $300K sale)</li>
      <li>Pay only $900 transfer fee + $60 recording fees</li>
      <li>Still pay for title insurance ($800-$1,200)</li>
      <li>Consider attorney fees ($500-$1,000) for contract/closing</li>
      <li><strong>Total FSBO closing costs: ~$2,400-$3,200 vs. $20,000+ with agent</strong></li>
    </ul>
    <p>Wisconsin's simple transfer fee structure makes FSBO more accessible than complex multi-tier tax states.</p>

    <h3>How Wisconsin Transfer Fee is Calculated</h3>
    <p>Step-by-step calculation method:</p>
    <p><strong>Step 1:</strong> Determine property value (sale price)</p>
    <p><strong>Step 2:</strong> Round UP to nearest $100</p>
    <p><strong>Step 3:</strong> Divide by 100 to get number of $100 units</p>
    <p><strong>Step 4:</strong> Multiply by $0.30</p>
    <p><strong>Example:</strong> $387,450 home</p>
    <ul>
      <li>Round up: $387,500</li>
      <li>Divide by 100: 3,875 units</li>
      <li>Multiply by $0.30: $1,162.50 transfer fee</li>
    </ul>

    <h3>Transfer Fee on Land Contracts and Quit Claim Deeds</h3>
    <p><strong>Land Contracts:</strong> Transfer fee applies when land contract is executed, not when fulfilled</p>
    <p><strong>Quit Claim Deeds:</strong> Transfer fee applies based on consideration or fair market value if no consideration stated</p>
    <p><strong>Gift Transfers:</strong> Exempt if truly gifted with no consideration (family transfers)</p>
    <p><strong>Divorce Transfers:</strong> Exempt when transferring per court order</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property sale price to calculate estimated transfer costs. Results show:</p>
    <ul>
      <li>State transfer fee (0.3%)</li>
      <li>County recording fees ($30 per document)</li>
      <li>Total transfer costs</li>
      <li>Effective rate as percentage of sale price</li>
      <li>Comparison to other states</li>
    </ul>
    <p>For exact calculation including exemptions, verify with your title company or closing attorney.</p>

    <h3>Additional Resources</h3>
    <p><strong>Wisconsin Department of Revenue eRETR System:</strong> https://www.revenue.wi.gov/retr</p>
    <p><strong>Wisconsin Statute 77.22:</strong> Official transfer fee statute and exemptions</p>
    <p><strong>County Register of Deeds:</strong> Local recording requirements and fees</p>
    <p><strong>Wisconsin Realtors Association:</strong> Market data and standard forms</p>
    <p><strong>Title Companies:</strong> Detailed closing cost estimates and title insurance quotes</p>
    `
  }
};
