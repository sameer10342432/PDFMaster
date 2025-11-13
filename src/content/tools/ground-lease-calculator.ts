import { CalculatorContent } from '@/types';

export const GROUND_LEASE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Ground Lease Calculator',
  description: 'Calculate ground lease payments, land value analysis, and long-term investment returns for ground lease transactions.',
  slug: 'ground-lease-calculator',
  icon: '🏗️',
  category: 'Investment Analysis',
  metaTitle: 'Ground Lease Calculator - Analyze Land Lease Investments & Returns',
  metaDescription: 'Free ground lease calculator. Estimate lease payments, analyze land value, calculate investment returns, and compare ground lease vs purchase scenarios.',
  article: {
    title: 'Understanding Ground Leases in Commercial Real Estate',
    content: `
    <h2>Understanding Ground Leases in Commercial Real Estate</h2>
    <p>A ground lease is a long-term agreement where a tenant leases land from a property owner and has the right to develop or use that land during the lease period. At the end of the lease, the land and all improvements typically revert to the landowner. Ground leases are common for commercial properties, hotels, corporate headquarters, and multi-family developments.</p>
    
    <h3>What is a Ground Lease?</h3>
    <p>A ground lease separates ownership of land from ownership of improvements. Key characteristics include:</p>
    <ul>
      <li><strong>Long-Term Duration:</strong> Typically 50-99 years, allowing for full amortization of building costs</li>
      <li><strong>Land Only:</strong> Tenant leases only the land, not existing buildings</li>
      <li><strong>Tenant Builds:</strong> Lessee constructs improvements at their expense</li>
      <li><strong>Reversion Rights:</strong> Land and improvements return to owner at lease end</li>
      <li><strong>Subordination:</strong> May be subordinated or unsubordinated to financing</li>
    </ul>

    <h3>Types of Ground Leases</h3>
    <p>Ground leases come in different structures:</p>
    <ul>
      <li><strong>Subordinated Ground Lease:</strong> Landowner subordinates interest to tenant's mortgage, allowing easier financing but higher risk for landowner</li>
      <li><strong>Unsubordinated Ground Lease:</strong> Landowner's interest superior to tenant's mortgage, making tenant financing more difficult but protecting landowner</li>
      <li><strong>Build-to-Suit Ground Lease:</strong> Landowner constructs building per tenant specifications</li>
      <li><strong>Percentage Ground Lease:</strong> Rent includes base amount plus percentage of tenant revenue</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to analyze your ground lease:</p>
    <ul>
      <li><strong>Land Value:</strong> Current market value of the land</li>
      <li><strong>Lease Term:</strong> Duration of the ground lease in years</li>
      <li><strong>Annual Rent:</strong> Base annual ground rent payment</li>
      <li><strong>Rent Escalation:</strong> Annual percentage increase in rent</li>
      <li><strong>Building Cost:</strong> Total cost to construct improvements</li>
      <li><strong>Cap Rate:</strong> Capitalization rate for land value analysis</li>
      <li><strong>Discount Rate:</strong> Rate to discount future cash flows</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Monthly Ground Rent:</strong> Regular lease payment to landowner</li>
      <li><strong>Total Rent Paid:</strong> Cumulative rent over entire lease term</li>
      <li><strong>Land Cost as % of NOI:</strong> Ground rent as percentage of net operating income</li>
      <li><strong>Effective Land Cost:</strong> Present value of all future rent payments</li>
      <li><strong>Total Project Cost:</strong> Land rent burden plus building costs</li>
      <li><strong>Implied Land Yield:</strong> Return to landowner on land value</li>
    </ul>

    <h3>Advantages of Ground Leases for Tenants</h3>
    <ul>
      <li>Reduces upfront capital requirements by eliminating land purchase</li>
      <li>Preserves equity for building construction and improvements</li>
      <li>Ground rent is tax deductible as operating expense</li>
      <li>Allows development in high-value locations otherwise unaffordable</li>
      <li>Long lease term provides operational security</li>
      <li>Can sublease property to other tenants</li>
    </ul>

    <h3>Advantages of Ground Leases for Landowners</h3>
    <ul>
      <li>Retains long-term land ownership and appreciation</li>
      <li>Receives steady rental income stream</li>
      <li>Improvements revert to owner at lease end</li>
      <li>Property remains in family/institutional portfolio</li>
      <li>Less property management responsibility</li>
      <li>Potential for rent escalations over time</li>
    </ul>

    <h3>Disadvantages and Risks for Tenants</h3>
    <ul>
      <li>Never builds equity in land ownership</li>
      <li>Rent escalations can significantly increase costs over time</li>
      <li>Lose all improvements when lease expires</li>
      <li>More difficult to obtain financing (especially unsubordinated leases)</li>
      <li>Limited control over land use after initial development</li>
      <li>Potential conflicts with landowner over modifications</li>
    </ul>

    <h3>Disadvantages and Risks for Landowners</h3>
    <ul>
      <li>Land tied up for very long period (50-99 years)</li>
      <li>Cannot sell land during lease term</li>
      <li>Risk of tenant default and property deterioration</li>
      <li>Subordination exposes land to foreclosure risk</li>
      <li>Improvements may be obsolete when lease ends</li>
      <li>Property tax obligations typically remain with owner</li>
    </ul>

    <h3>Ground Rent Calculation Methods</h3>
    <p>Common approaches to determining ground rent:</p>
    <ul>
      <li><strong>Percentage of Land Value:</strong> Annual rent = Land Value × 5-7%</li>
      <li><strong>Capitalization Rate:</strong> Rent = Land Value × Cap Rate</li>
      <li><strong>Percentage of Revenue:</strong> Base rent + percentage of gross revenue</li>
      <li><strong>Fixed Amount:</strong> Negotiated fixed rent with scheduled increases</li>
      <li><strong>Appraised Value:</strong> Periodic resets based on market appraisals</li>
    </ul>

    <h3>Rent Escalation Structures</h3>
    <ul>
      <li><strong>Fixed Percentage:</strong> Annual increase of 2-3% per year</li>
      <li><strong>CPI Adjustment:</strong> Tied to Consumer Price Index changes</li>
      <li><strong>Periodic Resets:</strong> Fair market value reassessment every 10-20 years</li>
      <li><strong>Stepped Increases:</strong> Pre-determined rent levels at specific years</li>
      <li><strong>Hybrid Models:</strong> Combination of fixed and variable components</li>
    </ul>

    <h3>Financing Considerations</h3>
    <p>Obtaining financing for ground lease properties:</p>
    <ul>
      <li>Lenders prefer subordinated ground leases for easier foreclosure</li>
      <li>Unsubordinated leases require higher equity (30-40%+)</li>
      <li>Lease must extend 20+ years beyond loan maturity</li>
      <li>Lender approval often required for lease amendments</li>
      <li>Ground rent coverage ratios analyzed carefully</li>
      <li>Specialty lenders may be required for complex structures</li>
    </ul>

    <h3>Ground Lease vs. Purchase Analysis</h3>
    <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background:#f4f4f4;">
        <th style="border:1px solid #ddd; padding:8px;">Factor</th>
        <th style="border:1px solid #ddd; padding:8px;">Ground Lease</th>
        <th style="border:1px solid #ddd; padding:8px;">Fee Simple Purchase</th>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Upfront Capital</td>
        <td style="border:1px solid #ddd; padding:8px;">Lower (no land purchase)</td>
        <td style="border:1px solid #ddd; padding:8px;">Higher (full land cost)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Long-Term Costs</td>
        <td style="border:1px solid #ddd; padding:8px;">Higher (ongoing rent payments)</td>
        <td style="border:1px solid #ddd; padding:8px;">Lower (no rent obligation)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Land Appreciation</td>
        <td style="border:1px solid #ddd; padding:8px;">Landowner retains</td>
        <td style="border:1px solid #ddd; padding:8px;">Owner receives benefit</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Tax Treatment</td>
        <td style="border:1px solid #ddd; padding:8px;">Rent is deductible expense</td>
        <td style="border:1px solid #ddd; padding:8px;">Depreciation deduction only</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Exit Strategy</td>
        <td style="border:1px solid #ddd; padding:8px;">Limited (leasehold interest only)</td>
        <td style="border:1px solid #ddd; padding:8px;">Full property sale flexibility</td>
      </tr>
    </table>

    <h3>Common Industries Using Ground Leases</h3>
    <ul>
      <li><strong>Hotels and Resorts:</strong> Major hotel chains on high-value tourism land</li>
      <li><strong>Fast Food Restaurants:</strong> National chains in prime retail locations</li>
      <li><strong>Gas Stations:</strong> Convenience stores and fuel retailers</li>
      <li><strong>Healthcare Facilities:</strong> Hospitals and medical office buildings</li>
      <li><strong>Corporate Headquarters:</strong> Large company office campuses</li>
      <li><strong>Retail Centers:</strong> Shopping centers and big-box stores</li>
      <li><strong>Multi-Family:</strong> Apartment developments in expensive markets</li>
    </ul>

    <h3>Negotiation Points in Ground Leases</h3>
    <ul>
      <li><strong>Initial Rent Amount:</strong> Starting ground rent payment level</li>
      <li><strong>Escalation Terms:</strong> Frequency and method of rent increases</li>
      <li><strong>Lease Term:</strong> Base period plus extension options</li>
      <li><strong>Permitted Uses:</strong> Allowed property uses and restrictions</li>
      <li><strong>Improvement Rights:</strong> Tenant's ability to modify or expand</li>
      <li><strong>Assignment/Subletting:</strong> Rights to transfer leasehold interest</li>
      <li><strong>Casualty Provisions:</strong> Obligations after fire, flood, or disaster</li>
      <li><strong>Subordination:</strong> Whether lease is subordinate to financing</li>
      <li><strong>Purchase Options:</strong> Right to buy land at future date</li>
    </ul>

    <h3>Tax Implications</h3>
    <ul>
      <li>Ground rent payments are fully tax deductible as operating expenses</li>
      <li>Tenant can depreciate building improvements over 39 years (commercial)</li>
      <li>Landowner reports ground rent as taxable income</li>
      <li>No depreciation deduction for landowner (land doesn't depreciate)</li>
      <li>Property taxes typically remain landowner's responsibility</li>
      <li>Leasehold improvements may qualify for bonus depreciation</li>
    </ul>

    <h3>Renewal and Extension Options</h3>
    <p>Planning for lease expiration:</p>
    <ul>
      <li>Negotiate extension options at inception (common: 2-4 additional 25-year periods)</li>
      <li>Extension terms should be defined upfront (rent methodology, conditions)</li>
      <li>Some leases include purchase options at fair market value</li>
      <li>Consider building obsolescence at end of long lease terms</li>
      <li>Plan exit strategy well before lease expiration</li>
    </ul>

    <h3>Best Practices for Ground Lease Analysis</h3>
    <ul>
      <li>Model rent escalations conservatively over full lease term</li>
      <li>Compare total ground lease costs to purchase alternative</li>
      <li>Ensure lease term significantly exceeds financing period</li>
      <li>Negotiate strong extension options for long-term flexibility</li>
      <li>Factor in potential land appreciation when assessing costs</li>
      <li>Obtain legal review of all ground lease terms before signing</li>
      <li>Consider impact on property resale value and marketability</li>
      <li>Evaluate subordination impact on financing availability and cost</li>
    </ul>

    <h3>Real-World Example</h3>
    <p><strong>Scenario:</strong> Developer wants to build $10M hotel on land valued at $5M</p>
    <ul>
      <li><strong>Option 1 - Purchase:</strong> $5M land + $10M construction = $15M total upfront</li>
      <li><strong>Option 2 - Ground Lease:</strong> 75-year lease at 6% of land value = $300,000/year ground rent</li>
      <li><strong>Analysis:</strong> Ground lease saves $5M upfront but costs $22.5M over 75 years (before discounting)</li>
      <li><strong>Decision Factors:</strong> Capital availability, alternative investment returns, land appreciation expectations</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'landValue',
        label: 'Land Value',
        type: 'number',
        defaultValue: 5000000,
      },
      {
        name: 'leaseTerm',
        label: 'Lease Term (Years)',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'annualRent',
        label: 'Annual Ground Rent',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'rentEscalation',
        label: 'Annual Rent Escalation (%)',
        type: 'number',
        defaultValue: 2.5,
      },
      {
        name: 'buildingCost',
        label: 'Building Construction Cost',
        type: 'number',
        defaultValue: 10000000,
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
    ],
    results: [
      { label: 'Monthly Ground Rent', isCurrency: true },
      { label: 'First Year Total Rent', isCurrency: true },
      { label: 'Total Rent Paid (Nominal)', isCurrency: true },
      { label: 'Present Value of Rent', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Implied Land Yield', isPercentage: true },
      { label: 'Average Annual Rent', isCurrency: true },
    ],
    calculate: (values) => {
      const { landValue, leaseTerm, annualRent, rentEscalation, buildingCost, discountRate } = values;
      
      const monthlyRent = annualRent / 12;
      const escalationRate = rentEscalation / 100;
      const discountRateDecimal = discountRate / 100;
      
      let totalRentNominal = 0;
      let presentValueRent = 0;
      
      for (let year = 1; year <= leaseTerm; year++) {
        const yearRent = annualRent * Math.pow(1 + escalationRate, year - 1);
        totalRentNominal += yearRent;
        presentValueRent += yearRent / Math.pow(1 + discountRateDecimal, year);
      }
      
      const totalProjectCost = buildingCost + presentValueRent;
      const impliedYield = (annualRent / landValue) * 100;
      const averageAnnualRent = totalRentNominal / leaseTerm;

      return [
        { label: 'Monthly Ground Rent', value: monthlyRent.toFixed(2), isCurrency: true },
        { label: 'First Year Total Rent', value: annualRent.toFixed(2), isCurrency: true },
        { label: 'Total Rent Paid (Nominal)', value: totalRentNominal.toFixed(2), isCurrency: true },
        { label: 'Present Value of Rent', value: presentValueRent.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Implied Land Yield', value: impliedYield.toFixed(2), isPercentage: true },
        { label: 'Average Annual Rent', value: averageAnnualRent.toFixed(2), isCurrency: true },
      ];
    },
  },
};
