import { CalculatorContent } from '@/types';

export const FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Florida Transfer Tax Calculator - Documentary Stamp Tax Calculator',
  description: 'Calculate Florida doc stamps, transfer tax, and recording fees for real estate transactions',
  slug: 'florida-transfer-tax-calculator',
  icon: '🌴',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Florida Documentary Stamp Tax & Transfer Costs',
    content: `
    <h2>Florida Documentary Stamp Tax Guide</h2>
    <p>Florida charges a <strong>documentary stamp tax</strong> (often called "doc stamps") instead of a traditional transfer tax. This tax is applied to documents that transfer interest in Florida real property and is one of the most important closing costs for sellers to understand.</p>
    
    <h3>Florida Documentary Stamp Tax Rates</h3>
    <p><strong>Standard Rate:</strong> $0.70 per $100 (or 0.7% of sale price)</p>
    <p><strong>Miami-Dade County:</strong> $0.60 per $100 for single-family homes ($0.60 cents rate)</p>
    <p><strong>Miami-Dade Commercial/Multi-Family:</strong> $0.60 + $0.45 surtax = $1.05 per $100</p>
    <p>Florida's documentary stamp tax is calculated by rounding up to the nearest $100. For example, a $500,050 sale price is taxed as $500,100.</p>

    <h3>Who Pays Florida Doc Stamps?</h3>
    <p>Traditionally, the <strong>seller pays documentary stamp tax</strong> on the deed in Florida. However, this is negotiable in the purchase contract. In competitive markets, buyers sometimes agree to pay a portion of doc stamps to make their offer more attractive.</p>
    <p>On the mortgage/note, the buyer typically pays documentary stamps at $0.35 per $100 of the loan amount.</p>

    <h3>Florida Documentary Stamp Tax Breakdown</h3>
    <p><strong>On the Deed (paid by seller):</strong></p>
    <ul>
      <li>Standard Florida rate: $0.70 per $100</li>
      <li>Miami-Dade single-family: $0.60 per $100</li>
      <li>Miami-Dade commercial: $1.05 per $100</li>
      <li>Calculated on full purchase price</li>
      <li>Due regardless of loan amount</li>
    </ul>

    <p><strong>On the Mortgage/Note (paid by buyer):</strong></p>
    <ul>
      <li>Flat rate: $0.35 per $100 of loan</li>
      <li>Applies to all Florida counties</li>
      <li>Not due on cash purchases</li>
      <li>Refinances also pay this tax</li>
    </ul>

    <h3>Florida Intangible Tax</h3>
    <p>Florida also charges an <strong>intangible tax</strong> on new mortgages at $0.002 per dollar (or $2.00 per $1,000). This applies to:</p>
    <ul>
      <li>New purchase mortgages</li>
      <li>Refinance mortgages</li>
      <li>Home equity loans and HELOCs</li>
      <li>Commercial property loans</li>
    </ul>
    <p>The intangible tax is paid by the borrower and collected at closing. For example, a $400,000 mortgage pays $800 in intangible tax.</p>

    <h3>Florida Recording Fees</h3>
    <p>County recording fees in Florida vary but typically include:</p>
    <p><strong>Deed Recording:</strong> $10 first page + $8.50 each additional page</p>
    <p><strong>Mortgage Recording:</strong> $10 first page + $8.50 each additional page</p>
    <p><strong>Satisfaction of Mortgage:</strong> $10 (when paying off existing loan)</p>
    <p>Most deeds are 2-4 pages, so total recording costs range from $18.50 to $35.50 per document.</p>

    <h3>Miami-Dade County Special Rates</h3>
    <p>Miami-Dade County is the only Florida county with different documentary stamp rates:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rate per $100</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Single-Family Residence</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.60</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Condominium</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.60</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Multi-Family (2-4 units)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.05</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial Property</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1.05</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vacant Land</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0.60</td>
      </tr>
    </table>

    <h3>Florida Transfer Tax Examples</h3>
    <p><strong>Example 1: $350,000 Single-Family Home (Orlando)</strong></p>
    <ul>
      <li>Sale Price: $350,000</li>
      <li>Doc Stamps on Deed: $350,000 ÷ 100 × $0.70 = $2,450</li>
      <li>Recording Fee: $27 (3 pages)</li>
      <li>Total Seller Cost: $2,477</li>
    </ul>

    <p><strong>Example 2: $500,000 Condo (Miami-Dade)</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Doc Stamps on Deed: $500,000 ÷ 100 × $0.60 = $3,000</li>
      <li>Recording Fee: $27</li>
      <li>Total Seller Cost: $3,027</li>
    </ul>

    <p><strong>Example 3: $1,000,000 Commercial Building (Tampa)</strong></p>
    <ul>
      <li>Sale Price: $1,000,000</li>
      <li>Doc Stamps on Deed: $1,000,000 ÷ 100 × $0.70 = $7,000</li>
      <li>Recording Fee: $35</li>
      <li>Total Seller Cost: $7,035</li>
    </ul>

    <h3>Exemptions from Florida Doc Stamps</h3>
    <p>Certain transactions are exempt from documentary stamp tax:</p>
    <ul>
      <li>Gifts between immediate family members (with proper affidavit)</li>
      <li>Transfers to/from government entities</li>
      <li>Bankruptcy proceedings and foreclosures</li>
      <li>Transfers between spouses in divorce</li>
      <li>Certain nonprofit organization transfers</li>
      <li>Inheritance/estate transfers (though recording fees still apply)</li>
    </ul>
    <p>You must file Form DR-219 (Declaration of Exemption) to claim an exemption.</p>

    <h3>How Florida Compares to Other States</h3>
    <p>At 0.7%, Florida's documentary stamp tax is moderate compared to other states:</p>
    <ul>
      <li><strong>Lower than:</strong> Pennsylvania (2%), Delaware (4%), Washington (1.78%)</li>
      <li><strong>Higher than:</strong> Texas (0%), Ohio (~0.4%), Indiana (0%)</li>
      <li><strong>Similar to:</strong> Connecticut (0.75%), Georgia (0.1% state only)</li>
    </ul>
    <p>Florida's doc stamps are generally considered reasonable and predictable compared to high-tax states.</p>

    <h3>Florida Seller Closing Costs Breakdown</h3>
    <p>Typical seller closing costs in Florida (on a $400,000 home):</p>
    <ul>
      <li>Real Estate Commission (6%): $24,000</li>
      <li>Documentary Stamp Tax (0.7%): $2,800</li>
      <li>Title Insurance: $1,000-$2,000</li>
      <li>Recording Fees: $25-$50</li>
      <li>HOA Transfer Fees: $0-$500</li>
      <li>Attorney Fees: $500-$1,500 (optional in Florida)</li>
      <li><strong>Total: ~$28,500-$31,000 (7.1-7.8%)</strong></li>
    </ul>

    <h3>How to Reduce Florida Transfer Costs</h3>
    <p><strong>Negotiate in contract:</strong> Ask buyer to pay portion of doc stamps</p>
    <p><strong>Seller concessions:</strong> Offer to cover buyer costs instead of price reduction</p>
    <p><strong>FSBO (For Sale By Owner):</strong> Save commission but pay doc stamps</p>
    <p><strong>Title insurance:</strong> Shop around - Florida allows competition for title</p>
    <p><strong>Discount brokers:</strong> Pay lower commission but still pay full doc stamps</p>
    <p>Documentary stamps are non-negotiable once the sale price is set, but you can negotiate who pays them.</p>

    <h3>Florida Real Estate Closing Process</h3>
    <p>Florida uses <strong>attorney closings</strong> or <strong>title company closings</strong>, varying by region:</p>
    <ul>
      <li><strong>South Florida:</strong> Typically attorney closings</li>
      <li><strong>Central/North Florida:</strong> More title company closings</li>
      <li><strong>Timeline:</strong> 30-45 days from contract to closing</li>
      <li><strong>Title Search:</strong> 30+ years of ownership history reviewed</li>
      <li><strong>Closing Disclosure:</strong> Received 3 days before closing</li>
    </ul>

    <h3>Special Considerations for Florida Investors</h3>
    <p>Real estate investors should note:</p>
    <ul>
      <li>Doc stamps apply to every sale - factor into flip calculations</li>
      <li>Short-term rentals may trigger commercial rates in Miami-Dade</li>
      <li>1031 exchanges still require doc stamp payment</li>
      <li>Wholesaling contracts may owe doc stamps on assignment</li>
      <li>LLC transfers may require separate documentary stamps</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Florida documentary stamp tax on deed (seller pays)</li>
      <li>Doc stamps on mortgage/note (buyer pays)</li>
      <li>Intangible tax on new mortgage</li>
      <li>County recording fees</li>
      <li>Total transfer costs breakdown</li>
      <li>Percentage of sale price</li>
    </ul>

    <h3>Common Florida Doc Stamp Mistakes</h3>
    <p><strong>Mistake 1:</strong> Forgetting Miami-Dade has different rates for different property types</p>
    <p><strong>Mistake 2:</strong> Not rounding up to nearest $100 (understating tax due)</p>
    <p><strong>Mistake 3:</strong> Confusing deed stamps (seller) with mortgage stamps (buyer)</p>
    <p><strong>Mistake 4:</strong> Overlooking intangible tax when budgeting buyer costs</p>
    <p><strong>Mistake 5:</strong> Assuming all exemptions apply without filing proper forms</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'Florida County',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard Florida County ($0.70 per $100)' },
          { value: 'miami_dade_residential', label: 'Miami-Dade - Single Family/Condo ($0.60)' },
          { value: 'miami_dade_commercial', label: 'Miami-Dade - Commercial/Multi-Family ($1.05)' },
        ],
        defaultValue: 'standard',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'loanAmount',
        label: 'Mortgage/Loan Amount (Buyer)',
        type: 'number',
        defaultValue: 320000,
      },
      {
        name: 'recordingPages',
        label: 'Number of Pages to Record',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'titleInsurance',
        label: 'Estimated Title Insurance',
        type: 'number',
        defaultValue: 1500,
      },
    ],
    results: [
      { label: 'Doc Stamps on Deed (Seller Pays)', isCurrency: true },
      { label: 'Doc Stamps on Mortgage (Buyer Pays)', isCurrency: true },
      { label: 'Intangible Tax on Mortgage (Buyer)', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Title Insurance (Estimate)', isCurrency: true },
      { label: 'Total Seller Transfer Costs', isCurrency: true },
      { label: 'Total Buyer Transfer Costs', isCurrency: true },
      { label: 'Combined Transfer Costs', isCurrency: true },
      { label: 'Seller Costs as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        county,
        salePrice,
        loanAmount,
        recordingPages,
        titleInsurance,
      } = values;

      // Documentary stamp rates per $100
      const docStampRates: Record<string, number> = {
        standard: 0.70,
        miami_dade_residential: 0.60,
        miami_dade_commercial: 1.05,
      };

      // Round up sale price to nearest $100 (Florida law)
      const roundedSalePrice = Math.ceil(salePrice / 100) * 100;
      const roundedLoanAmount = Math.ceil(loanAmount / 100) * 100;

      // Calculate doc stamps on deed (seller pays)
      const rate = docStampRates[county as string] || 0.70;
      const docStampsOnDeed = (roundedSalePrice / 100) * rate;

      // Calculate doc stamps on mortgage (buyer pays)
      const docStampsOnMortgage = (roundedLoanAmount / 100) * 0.35;

      // Calculate intangible tax (buyer pays) - $2 per $1,000
      const intangibleTax = (loanAmount / 1000) * 2;

      // Recording fees: $10 first page + $8.50 per additional page
      const recordingFees = 10 + ((recordingPages - 1) * 8.50);

      // Total costs
      const totalSellerCosts = docStampsOnDeed + recordingFees + titleInsurance;
      const totalBuyerCosts = docStampsOnMortgage + intangibleTax + recordingFees;
      const combinedCosts = totalSellerCosts + totalBuyerCosts - recordingFees; // Don't double count recording
      const sellerPercentage = (totalSellerCosts / salePrice) * 100;

      return [
        { label: 'Doc Stamps on Deed (Seller Pays)', value: docStampsOnDeed.toFixed(2), isCurrency: true },
        { label: 'Doc Stamps on Mortgage (Buyer Pays)', value: docStampsOnMortgage.toFixed(2), isCurrency: true },
        { label: 'Intangible Tax on Mortgage (Buyer)', value: intangibleTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Title Insurance (Estimate)', value: titleInsurance.toFixed(2), isCurrency: true },
        { label: 'Total Seller Transfer Costs', value: totalSellerCosts.toFixed(2), isCurrency: true },
        { label: 'Total Buyer Transfer Costs', value: totalBuyerCosts.toFixed(2), isCurrency: true },
        { label: 'Combined Transfer Costs', value: combinedCosts.toFixed(2), isCurrency: true },
        { label: 'Seller Costs as % of Sale Price', value: `${sellerPercentage.toFixed(2)}%` },
      ];
    },
  },
};
