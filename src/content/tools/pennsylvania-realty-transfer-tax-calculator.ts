import { CalculatorContent } from '@/types';

export const PENNSYLVANIA_REALTY_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Pennsylvania Realty Transfer Tax Calculator',
  description: 'Calculate Pennsylvania realty transfer tax on property sales - state, county, and local transfer taxes',
  slug: 'pennsylvania-realty-transfer-tax-calculator',
  icon: '💰',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Pennsylvania Realty Transfer Tax',
    content: `
    <h2>Pennsylvania Realty Transfer Tax Complete Guide</h2>
    <p>Pennsylvania imposes realty transfer tax on the sale or transfer of real property, combining state, county, and often local (municipal/school district) taxes for a total rate typically ranging from 2-4% of the sale price. For a $300,000 home in Philadelphia, transfer taxes can exceed $12,000, making Pennsylvania's transfer tax among the highest in the nation.</p>
    
    <h3>What is Pennsylvania Realty Transfer Tax?</h3>
    <p>Realty transfer tax is a one-time tax paid when property changes hands:</p>
    <ul>
      <li><strong>State Tax:</strong> 1% of sale price (split 0.5% buyer, 0.5% seller by custom)</li>
      <li><strong>County Tax:</strong> Up to 1% additional (varies by county)</li>
      <li><strong>Local Tax:</strong> Municipal and school district taxes (0-2%)</li>
      <li><strong>Total Range:</strong> Typically 2-4% depending on location</li>
      <li><strong>Due at Closing:</strong> Paid via settlement statement</li>
    </ul>
    
    <h3>PA Transfer Tax Breakdown by Location</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Location</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Local</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Philadelphia</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3.278% (city)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.278%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pittsburgh</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3.0-4.0% (varies)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.0-5.0%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Allegheny County (outside Pittsburgh)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0-2.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.0-3.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.5-1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5-2.5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0-2.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.0-3.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Chester County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0-1.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.0-2.5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Rural Counties</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.5-1.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5-2.0%</td>
      </tr>
    </table>
    
    <h3>Philadelphia Transfer Tax - Highest in PA</h3>
    <p>Philadelphia has the highest transfer tax in Pennsylvania:</p>
    <ul>
      <li><strong>Total Rate:</strong> 4.278% of sale price</li>
      <li><strong>Breakdown:</strong> 1% state + 3.278% city</li>
      <li><strong>First-Time Homebuyers:</strong> Can apply for 1% city exemption (reduces to 3.278% total)</li>
      <li><strong>$300K Home Example:</strong> $12,834 in transfer taxes</li>
      <li><strong>Split Convention:</strong> Typically buyer pays all local tax, state split 50/50</li>
    </ul>
    
    <h3>Who Pays Transfer Tax?</h3>
    <p>While negotiable, Pennsylvania has standard conventions:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Tax Component</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typical Responsibility</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">State Tax (1%)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Split 50/50 (0.5% buyer, 0.5% seller)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">County/Local Tax</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Buyer pays 100% (varies by region)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Philadelphia City Tax</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Buyer typically pays all local tax</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pittsburgh Tax</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Negotiable - often 50/50 or buyer pays all</td>
      </tr>
    </table>
    
    <h3>Transfer Tax Exemptions</h3>
    <p>Certain transactions are exempt from PA transfer tax:</p>
    <ul>
      <li><strong>Gifts:</strong> Transfers for no consideration (must be genuine gift)</li>
      <li><strong>Inheritance:</strong> Transfers through will or intestate succession</li>
      <li><strong>Divorce:</strong> Property transfers pursuant to divorce decree</li>
      <li><strong>Spousal Transfers:</strong> Transfers between husband and wife</li>
      <li><strong>Parent-Child:</strong> Transfers between parents and children (family farm exemption)</li>
      <li><strong>Corrections:</strong> Deeds to correct previous errors</li>
      <li><strong>Foreclosure:</strong> Sheriff's sale transfers</li>
      <li><strong>Government:</strong> Transfers to/from government entities</li>
    </ul>
    
    <h3>First-Time Homebuyer Exemptions</h3>
    <p>Pennsylvania offers transfer tax relief for first-time buyers in some localities:</p>
    <ul>
      <li><strong>Philadelphia:</strong> 1% city tax exemption for qualified first-time buyers (reduces rate to 3.278%)</li>
      <li><strong>Eligibility:</strong> No home ownership in past 3 years, primary residence, income limits</li>
      <li><strong>Application:</strong> Must apply before closing through Office of Housing & Community Development</li>
      <li><strong>Savings:</strong> $3,000 on a $300,000 home</li>
      <li><strong>Other Cities:</strong> Some municipalities offer similar programs</li>
    </ul>
    
    <h3>Calculating Transfer Tax</h3>
    <p>How to calculate Pennsylvania transfer tax:</p>
    <ol>
      <li><strong>Determine Sale Price:</strong> Use actual consideration paid</li>
      <li><strong>Apply State Rate:</strong> Sale price × 1% = state tax</li>
      <li><strong>Apply Local Rate:</strong> Sale price × local % = local tax</li>
      <li><strong>Add Components:</strong> State + local = total transfer tax</li>
      <li><strong>Round:</strong> Most counties don't allow partial dollars</li>
    </ol>
    <p><strong>Example:</strong> $400,000 home in Montgomery County (2.5% total rate):<br>
    $400,000 × 0.025 = $10,000 transfer tax</p>
    
    <h3>Transfer Tax on Refinances</h3>
    <p>Good news for Pennsylvania homeowners:</p>
    <ul>
      <li><strong>No Transfer Tax on Refinance:</strong> Refinancing existing mortgage does not trigger transfer tax</li>
      <li><strong>No Change in Ownership:</strong> Property must remain with same owner(s)</li>
      <li><strong>Cash-Out Refinance:</strong> Still exempt as long as no ownership change</li>
      <li><strong>Adding Spouse:</strong> May be exempt as spousal transfer</li>
    </ul>
    
    <h3>Transfer Tax on New Construction</h3>
    <p>How transfer tax applies to new builds:</p>
    <ul>
      <li><strong>Land + Construction:</strong> Tax based on total purchase price (land + building)</li>
      <li><strong>Builder Sales:</strong> Full transfer tax due on sale from builder to buyer</li>
      <li><strong>No Exemption:</strong> New construction doesn't reduce or eliminate transfer tax</li>
      <li><strong>Model Homes:</strong> Tax due when model sold to retail buyer</li>
    </ul>
    
    <h3>Deed Recording Fees vs. Transfer Tax</h3>
    <p>Don't confuse transfer tax with recording fees:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fee Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Purpose</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Transfer Tax</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-4% of sale price</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax on property transfer</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Recording Fee</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$50-$200 flat fee</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Fee to record deed in county records</td>
      </tr>
    </table>
    
    <h3>Transfer Tax Impact on Home Affordability</h3>
    <p>High transfer taxes affect purchasing power:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Home Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Philly Transfer Tax (4.278%)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rural PA (1.5%)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Difference</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,556</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,556</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,834</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,334</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$21,390</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,890</td>
      </tr>
    </table>
    
    <h3>Commercial vs. Residential Transfer Tax</h3>
    <p>Same rates apply to all property types:</p>
    <ul>
      <li><strong>No Distinction:</strong> Commercial and residential taxed at same rate</li>
      <li><strong>Industrial Property:</strong> Same transfer tax rates apply</li>
      <li><strong>Mixed-Use:</strong> Entire sale price subject to transfer tax</li>
      <li><strong>Business Sales:</strong> If property included in business sale, allocate to determine taxable amount</li>
    </ul>
    
    <h3>Transfer Tax on Land Contracts/Installment Sales</h3>
    <p>How transfer tax works with alternative financing:</p>
    <ul>
      <li><strong>Land Contract:</strong> Transfer tax due when buyer gets equitable title (contract signing)</li>
      <li><strong>Based on Full Price:</strong> Tax calculated on total purchase price, not payments made</li>
      <li><strong>Lease-Option:</strong> No transfer tax until option exercised and deed transfers</li>
      <li><strong>Contract for Deed:</strong> Tax due at contract execution, not final deed</li>
    </ul>
    
    <h3>Appealing Transfer Tax Assessment</h3>
    <p>What to do if transfer tax seems incorrect:</p>
    <ul>
      <li><strong>Review Calculation:</strong> Verify correct rates applied for your municipality</li>
      <li><strong>Check Exemptions:</strong> Ensure eligible exemptions were applied</li>
      <li><strong>Contact County:</strong> Reach out to county recorder or assessment office</li>
      <li><strong>File Objection:</strong> Most counties have 30-60 day objection period</li>
      <li><strong>Legal Counsel:</strong> Complex cases may require real estate attorney</li>
    </ul>
    
    <h3>Transfer Tax Statements (REV-183)</h3>
    <p>Pennsylvania requires transfer tax reporting:</p>
    <ul>
      <li><strong>REV-183 Form:</strong> Statement of value required with every deed</li>
      <li><strong>Price Disclosure:</strong> Must state actual consideration paid</li>
      <li><strong>Exemption Claims:</strong> Form indicates if exemption claimed</li>
      <li><strong>Recording Requirement:</strong> Deed cannot be recorded without REV-183</li>
      <li><strong>Public Record:</strong> Sale price becomes public information</li>
    </ul>
    
    <h3>History of Pennsylvania Transfer Tax</h3>
    <p>How PA transfer tax evolved:</p>
    <ul>
      <li><strong>1951:</strong> State transfer tax enacted at 1%</li>
      <li><strong>Local Option:</strong> Counties/municipalities given authority to levy additional tax</li>
      <li><strong>Philadelphia Increase:</strong> City rate increased multiple times, now 3.278%</li>
      <li><strong>Revenue Source:</strong> Major funding source for local governments</li>
      <li><strong>Reform Attempts:</strong> Multiple attempts to cap or reduce rates have failed</li>
    </ul>
    
    <h3>Comparing PA to Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5-4.3% (varies by location)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New Jersey</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.78-1.0%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.0-4.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Maryland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.5-1.5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ohio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0% (no transfer tax)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.4-2.0%</td>
      </tr>
    </table>
    
    <h3>Transfer Tax Planning Strategies</h3>
    <p>Legal ways to minimize Pennsylvania transfer tax:</p>
    <ul>
      <li><strong>First-Time Buyer Programs:</strong> Apply for available exemptions in Philadelphia and other cities</li>
      <li><strong>Negotiate Splits:</strong> Negotiate seller to pay portion of buyer's typical responsibility</li>
      <li><strong>Gift Portions:</strong> For family transfers, legitimate gifts may reduce taxable amount (consult attorney)</li>
      <li><strong>Timing:</strong> Complete eligible transactions (divorce, inheritance) properly to claim exemptions</li>
      <li><strong>Entity Transfers:</strong> In some cases, transferring entity ownership instead of property (complex, requires counsel)</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'currency',
        required: true,
        placeholder: '300000',
        helpText: 'Purchase price of the property'
      },
      {
        name: 'location',
        label: 'Property Location',
        type: 'select',
        required: true,
        options: [
          { value: 'philadelphia', label: 'Philadelphia' },
          { value: 'pittsburgh', label: 'Pittsburgh' },
          { value: 'allegheny', label: 'Allegheny County (outside Pittsburgh)' },
          { value: 'montgomery', label: 'Montgomery County' },
          { value: 'delaware', label: 'Delaware County' },
          { value: 'chester', label: 'Chester County' },
          { value: 'bucks', label: 'Bucks County' },
          { value: 'rural', label: 'Rural Pennsylvania' },
        ],
        helpText: 'Location determines local transfer tax rate'
      },
      {
        name: 'firstTimeHomebuyer',
        label: 'First-Time Homebuyer (Philadelphia only)',
        type: 'select',
        required: false,
        options: [
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes - Qualified for 1% Exemption' },
        ],
        helpText: 'Philadelphia offers 1% reduction for qualified first-time buyers'
      },
      {
        name: 'paymentSplit',
        label: 'How is Transfer Tax Split?',
        type: 'select',
        required: true,
        options: [
          { value: 'standard', label: 'Standard (Buyer pays local, state split 50/50)' },
          { value: 'buyerAll', label: 'Buyer Pays All' },
          { value: 'sellerAll', label: 'Seller Pays All' },
          { value: 'equal', label: 'Split 50/50 (Buyer and Seller)' },
        ],
        helpText: 'Who pays transfer tax is negotiable'
      }
    ],
    results: [
      {
        name: 'totalTransferTax',
        label: 'Total Transfer Tax',
        type: 'currency',
        helpText: 'Combined state and local transfer tax'
      },
      {
        name: 'stateTransferTax',
        label: 'State Transfer Tax (1%)',
        type: 'currency',
        helpText: 'Pennsylvania state portion'
      },
      {
        name: 'localTransferTax',
        label: 'Local Transfer Tax',
        type: 'currency',
        helpText: 'County/municipal/school district portion'
      },
      {
        name: 'buyerPays',
        label: 'Buyer Pays',
        type: 'currency',
        helpText: 'Amount buyer responsible for'
      },
      {
        name: 'sellerPays',
        label: 'Seller Pays',
        type: 'currency',
        helpText: 'Amount seller responsible for'
      },
      {
        name: 'effectiveRate',
        label: 'Effective Transfer Tax Rate',
        type: 'text',
        helpText: 'Total transfer tax as percentage of sale price'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const salePrice = parseFloat(inputs.salePrice) || 0;
      const location = inputs.location || 'rural';
      const firstTimeHomebuyer = inputs.firstTimeHomebuyer === 'yes';
      const paymentSplit = inputs.paymentSplit || 'standard';

      // State tax is always 1%
      const stateTransferTax = Math.round(salePrice * 0.01);

      // Local tax varies by location
      let localRate = 0;
      switch (location) {
        case 'philadelphia':
          localRate = firstTimeHomebuyer ? 0.02278 : 0.03278; // 3.278% normally, 2.278% with exemption
          break;
        case 'pittsburgh':
          localRate = 0.04; // 4% typical
          break;
        case 'allegheny':
          localRate = 0.015; // 1.5% average
          break;
        case 'montgomery':
          localRate = 0.015; // 1.5% average
          break;
        case 'delaware':
          localRate = 0.02; // 2% average
          break;
        case 'chester':
          localRate = 0.015; // 1.5% average
          break;
        case 'bucks':
          localRate = 0.01; // 1% average
          break;
        default:
          localRate = 0.005; // 0.5% rural average
      }

      const localTransferTax = Math.round(salePrice * localRate);
      const totalTransferTax = stateTransferTax + localTransferTax;

      let buyerPays = 0;
      let sellerPays = 0;

      switch (paymentSplit) {
        case 'standard':
          // Buyer pays all local, state split 50/50
          buyerPays = Math.round(stateTransferTax / 2) + localTransferTax;
          sellerPays = Math.round(stateTransferTax / 2);
          break;
        case 'buyerAll':
          buyerPays = totalTransferTax;
          sellerPays = 0;
          break;
        case 'sellerAll':
          buyerPays = 0;
          sellerPays = totalTransferTax;
          break;
        case 'equal':
          buyerPays = Math.round(totalTransferTax / 2);
          sellerPays = Math.round(totalTransferTax / 2);
          break;
      }

      const effectiveRate = ((totalTransferTax / salePrice) * 100).toFixed(3) + '%';

      return {
        totalTransferTax,
        stateTransferTax,
        localTransferTax,
        buyerPays,
        sellerPays,
        effectiveRate
      };
    }
  }
};
