import { CalculatorContent } from '@/types';

export const NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Jersey "Exit Tax" Calculator',
  description: 'Calculate New Jersey exit tax (estimated income tax withholding) when selling your home and moving out of state. Understand NJ departure tax requirements and refund options.',
  slug: 'new-jersey-exit-tax-calculator',
  icon: '🚪',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding New Jersey Exit Tax',
    content: `
    <h2>New Jersey Exit Tax Guide</h2>
    <p>New Jersey's so-called <strong>"Exit Tax"</strong> (officially the "Estimated Income Tax Withholding") is one of the most misunderstood and controversial tax requirements in the United States. When you sell your home and move out of New Jersey, you may be required to pay <strong>up to 8.97% of the sale price</strong> at closing, even if you owe no actual tax.</p>
    
    <h3>What is the New Jersey Exit Tax?</h3>
    <p>The New Jersey Exit Tax is not actually a tax but a <strong>withholding requirement</strong> on the sale of property:</p>
    <ul>
      <li><strong>Official Name:</strong> Estimated Income Tax Withholding</li>
      <li><strong>Withholding Rate:</strong> Up to 8.97% of sale price or 2% of consideration (whichever applies)</li>
      <li><strong>Who Pays:</strong> Sellers who are moving out of New Jersey or nonresidents</li>
      <li><strong>Purpose:</strong> Ensures NJ collects capital gains tax before you leave the state</li>
      <li><strong>Refundable:</strong> You can get a refund if actual tax owed is less than withheld</li>
    </ul>
    
    <h3>2024 NJ Exit Tax Withholding Rates</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Seller Status</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Withholding Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">On $500K Sale</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">NJ Resident Staying in NJ</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">NJ Resident Moving Out of State</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">8.97% of gain or 2% of sale</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000 - $44,850</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Non-Resident of NJ</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">8.97% of gain or 2% of sale</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000 - $44,850</td>
      </tr>
    </table>
    
    <h3>How the Exit Tax is Calculated</h3>
    <p>Two possible calculations - the higher amount applies:</p>
    
    <p><strong>Method 1: 8.97% of Estimated Gain</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Original Purchase Price: $300,000</li>
      <li>Estimated Gain: $200,000</li>
      <li>Withholding: $200,000 × 8.97% = <strong>$17,940</strong></li>
    </ul>
    
    <p><strong>Method 2: 2% of Sale Price</strong></p>
    <ul>
      <li>Sale Price: $500,000</li>
      <li>Withholding: $500,000 × 2% = <strong>$10,000</strong></li>
    </ul>
    
    <p><strong>Higher amount applies:</strong> You would pay $17,940 at closing in this example.</p>
    
    <h3>Who Must Pay the NJ Exit Tax?</h3>
    <p>The exit tax withholding applies to:</p>
    <ul>
      <li><strong>NJ Residents Moving Out of State:</strong> Moving to PA, FL, NC, etc.</li>
      <li><strong>Non-Residents Selling NJ Property:</strong> Already live elsewhere</li>
      <li><strong>Foreign Nationals:</strong> International sellers of NJ property</li>
      <li><strong>Business Entities:</strong> Corporations, LLCs, partnerships selling NJ real estate</li>
    </ul>
    
    <p><strong>Exempt from Exit Tax:</strong></p>
    <ul>
      <li>NJ residents staying in New Jersey</li>
      <li>Properties sold for under $300,000 (in some cases)</li>
      <li>Seller staying in NJ for at least another year after sale</li>
      <li>Seller qualifies for full capital gains exclusion ($250K single / $500K married)</li>
    </ul>
    
    <h3>Exit Tax by Home Sale Price</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sale Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">2% Withholding</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">8.97% on $100K Gain</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Likely Withholding</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,970</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,970</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,455 (on $150K gain)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,455</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$22,425 (on $250K gain)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$22,425</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$31,395 (on $350K gain)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$31,395</td>
      </tr>
    </table>
    
    <h3>Getting a Waiver or Reduction</h3>
    <p>You can reduce or eliminate the withholding by filing for a waiver:</p>
    <ul>
      <li><strong>Form GIT/REP-3:</strong> Application for Waiver or Reduced Withholding</li>
      <li><strong>Timing:</strong> File before closing to reduce withholding</li>
      <li><strong>Approval Time:</strong> 4-6 weeks processing (plan ahead!)</li>
      <li><strong>Eligibility:</strong> If actual tax will be much less than withholding amount</li>
    </ul>
    
    <h3>When You'll Get Your Refund</h3>
    <p>If withholding exceeds your actual capital gains tax:</p>
    <ol>
      <li><strong>File NJ Tax Return:</strong> File NJ income tax return for year of sale</li>
      <li><strong>Claim Withholding Credit:</strong> Report exit tax withheld on your return</li>
      <li><strong>Refund Timeline:</strong> 6-12 months after filing</li>
      <li><strong>Interest:</strong> NJ pays no interest on withholding refunds</li>
    </ol>
    
    <h3>Primary Residence Exclusion</h3>
    <p>Federal capital gains exclusion may eliminate or reduce NJ exit tax:</p>
    <ul>
      <li><strong>Single Filers:</strong> Exclude up to $250,000 in gains</li>
      <li><strong>Married Filing Jointly:</strong> Exclude up to $500,000 in gains</li>
      <li><strong>Ownership Requirement:</strong> Owned and lived in home 2 of past 5 years</li>
      <li><strong>Impact on Exit Tax:</strong> Reduced gain = lower withholding, but still must pay upfront</li>
    </ul>
    
    <h3>Example Exit Tax Scenarios</h3>
    
    <p><strong>Scenario 1: Married Couple, Primary Residence</strong></p>
    <ul>
      <li>Sale Price: $700,000</li>
      <li>Purchase Price: $400,000</li>
      <li>Gross Gain: $300,000</li>
      <li>Capital Gains Exclusion: $300,000 (married, under $500K)</li>
      <li>Taxable Gain: $0</li>
      <li><strong>Exit Tax Withheld:</strong> $0 (qualifies for waiver)</li>
      <li><strong>Actual Tax Owed:</strong> $0</li>
      <li><strong>Refund:</strong> $0</li>
    </ul>
    
    <p><strong>Scenario 2: Single Person, Investment Property</strong></p>
    <ul>
      <li>Sale Price: $550,000</li>
      <li>Purchase Price: $350,000</li>
      <li>Gross Gain: $200,000</li>
      <li>Capital Gains Exclusion: $0 (investment property)</li>
      <li>Taxable Gain: $200,000</li>
      <li><strong>Exit Tax Withheld:</strong> $17,940 (8.97% of $200K)</li>
      <li><strong>Actual Tax Owed:</strong> ~$5,000 (NJ income tax on $200K gain)</li>
      <li><strong>Refund:</strong> ~$12,940</li>
    </ul>
    
    <h3>Reducing the Impact of NJ Exit Tax</h3>
    <p>Strategies to minimize exit tax burden:</p>
    <ul>
      <li><strong>Apply for Waiver:</strong> File Form GIT/REP-3 if you qualify for exclusion</li>
      <li><strong>Plan Ahead:</strong> Apply for waiver 6+ weeks before closing</li>
      <li><strong>Document Improvements:</strong> Capital improvements increase cost basis, reducing gain</li>
      <li><strong>Time Your Sale:</strong> Consider delaying sale until fully qualified for capital gains exclusion</li>
      <li><strong>Separate Closings:</strong> For multi-property sales, spread across tax years</li>
    </ul>
    
    <h3>Impact on Cash at Closing</h3>
    <p>The exit tax significantly reduces net proceeds:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Line Item</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Sale Price</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mortgage Payoff</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">-$350,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Realtor Commission (5%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">-$30,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Closing Costs</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">-$8,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>NJ Exit Tax Withholding</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>-$15,000</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Net Proceeds</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$197,000</strong></td>
      </tr>
    </table>
    
    <h3>Comparison to Other States</h3>
    <p>How NJ's exit tax compares nationally:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exit Tax / Withholding</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New Jersey</td>
        <td style="border: 1px solid #ddd; padding: 8px;">8.97% of gain or 2% of sale (exit tax)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3.33% withholding on gains over $100K</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Mansion tax on sales over $1M (buyer pays)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px;">None</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px;">None</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">None</td>
      </tr>
    </table>
    
    <h3>Common Misconceptions</h3>
    <ul>
      <li><strong>Myth:</strong> "It's a penalty for leaving New Jersey" - <strong>Reality:</strong> It's withholding on potential tax owed</li>
      <li><strong>Myth:</strong> "You'll never get the money back" - <strong>Reality:</strong> Refundable if you overpay</li>
      <li><strong>Myth:</strong> "Primary residence is exempt" - <strong>Reality:</strong> Must apply for waiver, not automatic</li>
      <li><strong>Myth:</strong> "It's only for rich people" - <strong>Reality:</strong> Applies to any home sale above ~$300K</li>
    </ul>
    
    <h3>Constitutional Challenges</h3>
    <p>Legal challenges to NJ's exit tax:</p>
    <ul>
      <li><strong>Constitutional Questions:</strong> Some argue it violates right to interstate travel</li>
      <li><strong>Court Rulings:</strong> Generally upheld as valid tax collection mechanism</li>
      <li><strong>Reform Efforts:</strong> Periodic legislative attempts to repeal or reduce</li>
      <li><strong>Current Status:</strong> Remains in effect, unlikely to be eliminated</li>
    </ul>
    
    <h3>Impact on NJ Real Estate Market</h3>
    <p>How the exit tax affects housing:</p>
    <ul>
      <li><strong>Retirement Relocations:</strong> Discourages retirees from selling to move to FL, SC</li>
      <li><strong>Job Relocations:</strong> Adds friction to out-of-state job moves</li>
      <li><strong>Cash Flow Burden:</strong> Reduces seller proceeds available for next home purchase</li>
      <li><strong>Market Perception:</strong> Creates negative perception of NJ tax environment</li>
    </ul>
    
    <h3>Planning Your Exit from New Jersey</h3>
    <p>Steps to minimize exit tax impact:</p>
    <ol>
      <li><strong>6+ Months Before Sale:</strong> Consult CPA about potential exit tax liability</li>
      <li><strong>3 Months Before Sale:</strong> Gather purchase documentation, improvement records</li>
      <li><strong>2 Months Before Sale:</strong> File Form GIT/REP-3 for waiver if eligible</li>
      <li><strong>At Closing:</strong> Ensure title company properly remits withholding to NJ</li>
      <li><strong>Tax Season:</strong> File NJ return claiming withholding credit</li>
      <li><strong>Post-Filing:</strong> Wait 6-12 months for refund</li>
    </ol>
    
    <h3>Working with Title Companies</h3>
    <p>Title company responsibilities:</p>
    <ul>
      <li><strong>Calculate Withholding:</strong> Title company determines amount owed</li>
      <li><strong>Collect at Closing:</strong> Withholding deducted from seller proceeds</li>
      <li><strong>Remit to NJ:</strong> Title company sends payment to NJ Division of Taxation</li>
      <li><strong>Provide Documentation:</strong> Seller receives proof of withholding</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>NJ Division of Taxation:</strong> state.nj.us/treasury/taxation</li>
      <li><strong>Form GIT/REP-3:</strong> Waiver application</li>
      <li><strong>Seller's Residency Certification (GIT/REP):</strong> Required at all closings</li>
      <li><strong>CPA Consultation:</strong> Highly recommended for exit tax planning</li>
      <li><strong>NJ Hotline:</strong> 609-292-6400 for exit tax questions</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Home Sale Price',
        type: 'currency',
        required: true,
        placeholder: '600000',
        helpText: 'Expected or actual sale price of your New Jersey home'
      },
      {
        name: 'purchasePrice',
        label: 'Original Purchase Price',
        type: 'currency',
        required: true,
        placeholder: '400000',
        helpText: 'What you originally paid for the property'
      },
      {
        name: 'improvements',
        label: 'Capital Improvements',
        type: 'currency',
        required: false,
        placeholder: '50000',
        helpText: 'Major renovations, additions (increases cost basis)'
      },
      {
        name: 'residencyStatus',
        label: 'Residency Status',
        type: 'select',
        required: true,
        options: [
          { value: 'resident-staying', label: 'NJ Resident Staying in NJ' },
          { value: 'resident-leaving', label: 'NJ Resident Leaving NJ' },
          { value: 'nonresident', label: 'Non-Resident of NJ' },
        ],
        helpText: 'Are you leaving New Jersey after the sale?'
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'primary', label: 'Primary Residence (lived 2+ years)' },
          { value: 'investment', label: 'Investment / Rental Property' },
          { value: 'second-home', label: 'Second Home / Vacation Property' },
        ],
        helpText: 'How did you use this property?'
      },
      {
        name: 'filingStatus',
        label: 'Tax Filing Status',
        type: 'select',
        required: true,
        options: [
          { value: 'single', label: 'Single' },
          { value: 'married', label: 'Married Filing Jointly' },
        ],
        helpText: 'Your tax filing status for capital gains exclusion'
      },
      {
        name: 'yearsOwned',
        label: 'Years Owned',
        type: 'number',
        required: true,
        placeholder: '5',
        helpText: 'How many years have you owned the property?'
      },
      {
        name: 'waiverApplication',
        label: 'Waiver Status',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Waiver Applied For' },
          { value: 'partial', label: 'Partial Waiver Granted' },
          { value: 'full', label: 'Full Waiver Granted' },
        ],
        helpText: 'Have you applied for or received a withholding waiver?'
      }
    ],
    results: [
      {
        name: 'totalGain',
        label: 'Total Capital Gain',
        type: 'currency',
        helpText: 'Sale price minus purchase price and improvements'
      },
      {
        name: 'capitalGainsExclusion',
        label: 'Federal Capital Gains Exclusion',
        type: 'currency',
        helpText: 'Amount excluded from taxation (primary residence benefit)'
      },
      {
        name: 'taxableGain',
        label: 'Taxable Gain',
        type: 'currency',
        helpText: 'Gain after applying federal exclusion'
      },
      {
        name: 'exitTaxWithheld',
        label: 'NJ Exit Tax Withheld',
        type: 'currency',
        helpText: 'Amount withheld at closing (higher of 8.97% gain or 2% sale)'
      },
      {
        name: 'estimatedTaxOwed',
        label: 'Estimated Actual NJ Tax Owed',
        type: 'currency',
        helpText: 'Estimated NJ income tax on your capital gain'
      },
      {
        name: 'estimatedRefund',
        label: 'Estimated Refund',
        type: 'currency',
        helpText: 'Expected refund if withholding exceeds actual tax'
      },
      {
        name: 'netProceedsImpact',
        label: 'Impact on Net Proceeds',
        type: 'currency',
        helpText: 'How much exit tax reduces your cash at closing'
      },
      {
        name: 'recommendation',
        label: 'Recommendation',
        type: 'text',
        helpText: 'Suggested actions to minimize exit tax burden'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const salePrice = parseFloat(inputs.salePrice) || 0;
      const purchasePrice = parseFloat(inputs.purchasePrice) || 0;
      const improvements = parseFloat(inputs.improvements) || 0;
      const residencyStatus = inputs.residencyStatus || 'resident-staying';
      const propertyType = inputs.propertyType || 'primary';
      const filingStatus = inputs.filingStatus || 'single';
      const waiverApplication = inputs.waiverApplication || 'none';

      const costBasis = purchasePrice + improvements;
      const totalGain = Math.max(0, salePrice - costBasis);

      let capitalGainsExclusion = 0;
      if (propertyType === 'primary') {
        capitalGainsExclusion = filingStatus === 'married' ? Math.min(500000, totalGain) : Math.min(250000, totalGain);
      }

      const taxableGain = Math.max(0, totalGain - capitalGainsExclusion);

      let exitTaxWithheld = 0;
      if (residencyStatus !== 'resident-staying') {
        if (waiverApplication === 'full') {
          exitTaxWithheld = 0;
        } else if (waiverApplication === 'partial') {
          const method1 = totalGain * 0.0897;
          const method2 = salePrice * 0.02;
          exitTaxWithheld = Math.max(method1, method2) * 0.5;
        } else {
          const method1 = totalGain * 0.0897;
          const method2 = salePrice * 0.02;
          exitTaxWithheld = Math.max(method1, method2);
        }
      }

      const njTaxRate = 0.0637;
      const estimatedTaxOwed = taxableGain * njTaxRate;

      const estimatedRefund = Math.max(0, exitTaxWithheld - estimatedTaxOwed);

      const netProceedsImpact = exitTaxWithheld;

      let recommendation = '';
      if (residencyStatus === 'resident-staying') {
        recommendation = 'No exit tax applies since you are staying in New Jersey. Proceed with normal closing.';
      } else if (capitalGainsExclusion >= totalGain && waiverApplication !== 'full') {
        recommendation = `Apply for FULL WAIVER (Form GIT/REP-3) immediately! Your gain qualifies for complete federal exclusion, eliminating NJ exit tax. File 6+ weeks before closing.`;
      } else if (estimatedRefund > exitTaxWithheld * 0.5 && waiverApplication === 'none') {
        recommendation = `Apply for PARTIAL WAIVER - You will be over-withheld by $${Math.round(estimatedRefund).toLocaleString()}. File Form GIT/REP-3 to reduce withholding and improve cash at closing.`;
      } else {
        recommendation = `Exit tax withholding required. Plan for $${Math.round(exitTaxWithheld).toLocaleString()} reduction in closing proceeds. File NJ tax return to claim $${Math.round(estimatedRefund).toLocaleString()} refund in 6-12 months.`;
      }

      return {
        totalGain: Math.round(totalGain),
        capitalGainsExclusion: Math.round(capitalGainsExclusion),
        taxableGain: Math.round(taxableGain),
        exitTaxWithheld: Math.round(exitTaxWithheld),
        estimatedTaxOwed: Math.round(estimatedTaxOwed),
        estimatedRefund: Math.round(estimatedRefund),
        netProceedsImpact: Math.round(netProceedsImpact),
        recommendation,
      };
    }
  }
};
