import { CalculatorContent } from '@/types';

export const SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'South Carolina Property Tax Calculator',
  description: 'Calculate South Carolina property taxes with assessment ratios, exemptions, and millage rates by county',
  slug: 'south-carolina-property-tax-calculator',
  icon: '🏠',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding South Carolina Property Tax',
    content: `
    <h2>South Carolina Property Tax Complete Guide</h2>
    <p>South Carolina has one of the lowest effective property tax rates in the nation, but a unique assessment ratio system that can confuse homeowners. Understanding how assessment ratios, millage rates, and exemptions work is essential to accurately calculating your property tax burden in the Palmetto State.</p>
    
    <h3>SC Property Tax Assessment Ratio System</h3>
    <p>South Carolina uses different assessment ratios for different property types:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Assessment Ratio</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Example (on $200K value)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Primary Residence</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable: $8,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rental/Investment Property</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">6%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable: $12,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial/Business</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">6%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable: $12,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Agricultural Property</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable: $8,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Manufacturing</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable: $21,000</td>
      </tr>
    </table>
    
    <h3>How SC Property Tax is Calculated</h3>
    <p>South Carolina property tax calculation follows this formula:</p>
    <ol>
      <li><strong>Fair Market Value:</strong> County assessor determines your home's value</li>
      <li><strong>Apply Assessment Ratio:</strong> Market value × 4% (for primary residence)</li>
      <li><strong>Subtract Exemptions:</strong> Legal residence exemption and other applicable exemptions</li>
      <li><strong>Apply Millage Rate:</strong> (Assessed value - exemptions) × millage rate / 1000</li>
    </ol>
    <p><strong>Example:</strong> $300,000 home in Charleston County:<br>
    $300,000 × 4% = $12,000 assessed value<br>
    $12,000 - $50,000 exemption = $0 (exemption exceeds assessed value)<br>
    Final tax: $0 (due to legal residence exemption)</p>
    
    <h3>Legal Residence Exemption (Homestead Exemption)</h3>
    <p>SC's most valuable exemption for homeowners:</p>
    <ul>
      <li><strong>$50,000 Exemption:</strong> First $50,000 of assessed value exempt from school operations taxes</li>
      <li><strong>On Assessed Value:</strong> Applied to 4% assessed value, not market value</li>
      <li><strong>Typical Savings:</strong> $500-$800 annually depending on school millage</li>
      <li><strong>Eligibility:</strong> Must be primary residence and owner-occupied by December 31</li>
      <li><strong>Application:</strong> File with county auditor once (automatic renewal)</li>
      <li><strong>Timing:</strong> Must apply by January 15 to receive exemption for that tax year</li>
    </ul>
    
    <h3>Average Millage Rates by SC County</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total Millage</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Est. Tax on $250K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Charleston</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">300-350 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500-$2,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Greenville</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">280-320 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,400-$1,800</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Richland (Columbia)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">310-340 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,550-$1,900</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Horry (Myrtle Beach)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">260-300 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,300-$1,700</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">York</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">290-330 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,450-$1,850</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Beaufort</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">320-360 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,600-$2,100</td>
      </tr>
    </table>
    
    <h3>Understanding Millage Rates</h3>
    <p>Millage is the tax rate per $1,000 of assessed value:</p>
    <ul>
      <li><strong>1 Mill = $1 per $1,000:</strong> 100 mills = $100 per $1,000 assessed value</li>
      <li><strong>Multiple Taxing Entities:</strong> County, school district, municipalities, special districts</li>
      <li><strong>Combined Rate:</strong> Total millage is sum of all applicable entities</li>
      <li><strong>Annual Changes:</strong> Millage rates set annually by each jurisdiction</li>
      <li><strong>Public Record:</strong> Published by county auditor each year</li>
    </ul>
    
    <h3>Additional SC Property Tax Exemptions</h3>
    <p>Beyond the legal residence exemption:</p>
    <ul>
      <li><strong>Homestead Exemption (65+):</strong> Seniors 65+ with income under $38,580 exempt from all county operations taxes
        <ul>
          <li>Can save $500-$1,500 annually</li>
          <li>Does not apply to school taxes</li>
          <li>Renewable annually with income verification</li>
        </ul>
      </li>
      <li><strong>Disabled Veterans:</strong> 100% disabled vets exempt from all property taxes on primary residence</li>
      <li><strong>Surviving Spouse:</strong> Of disabled vet or first responder killed in line of duty</li>
      <li><strong>Manufacturing:</strong> Fee-in-lieu programs for qualifying manufacturers</li>
    </ul>
    
    <h3>Assessment Caps and Limits</h3>
    <p>SC limits how much assessed value can increase:</p>
    <ul>
      <li><strong>15% Cap:</strong> Assessed value cannot increase more than 15% in any 5-year period</li>
      <li><strong>Applies to Primary Residence:</strong> Only applies to owner-occupied homes with legal residence</li>
      <li><strong>Resets on Sale:</strong> New buyer starts fresh with current market value</li>
      <li><strong>Protects Long-Term Owners:</strong> Prevents tax shock in rapidly appreciating markets</li>
    </ul>
    
    <h3>SC Property Tax Payment Schedule</h3>
    <p>When property taxes are due in South Carolina:</p>
    <ul>
      <li><strong>Tax Bills Mailed:</strong> September/October</li>
      <li><strong>Due Date:</strong> January 15 without penalty</li>
      <li><strong>3% Penalty:</strong> Added February 1</li>
      <li><strong>10% Additional Penalty:</strong> Added March 16</li>
      <li><strong>Tax Lien:</strong> Property can be sold for delinquent taxes after 12 months</li>
      <li><strong>Installment Plans:</strong> Available in some counties with application</li>
    </ul>
    
    <h3>Special Assessment Districts</h3>
    <p>Additional taxes in certain areas:</p>
    <ul>
      <li><strong>Fire Districts:</strong> Special fire protection districts add 5-30 mills</li>
      <li><strong>Water/Sewer:</strong> Utility districts may levy property taxes</li>
      <li><strong>Recreation Districts:</strong> Parks and recreation millage in some areas</li>
      <li><strong>Road Maintenance:</strong> Special road districts in rural counties</li>
    </ul>
    
    <h3>Challenging Your SC Property Assessment</h3>
    <p>How to appeal if you believe assessment is too high:</p>
    <ol>
      <li><strong>Review Notice:</strong> Assessment notice sent annually listing market value</li>
      <li><strong>File Appeal:</strong> Must appeal by first penalty date (usually January 15)</li>
      <li><strong>County Board:</strong> First appeal to County Board of Assessment Appeals</li>
      <li><strong>Provide Evidence:</strong> Recent appraisal, comparable sales data</li>
      <li><strong>Administrative Law Court:</strong> If county appeal fails, can appeal to ALC</li>
      <li><strong>Timeline:</strong> Complete process can take 6-18 months</li>
    </ol>
    
    <h3>SC Property Tax vs. Neighboring States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Effective Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $250K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">South Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.57%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,425</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.82%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,050</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Georgia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.87%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,175</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.89%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,225</td>
      </tr>
    </table>
    
    <h3>Act 388 - School Operations Tax Exemption</h3>
    <p>2006 law that created the legal residence exemption:</p>
    <ul>
      <li><strong>Eliminated School Operations Tax:</strong> On owner-occupied homes up to $100,000 market value</li>
      <li><strong>Replaced with Sales Tax:</strong> Sales tax increased 1% to fund schools</li>
      <li><strong>Ongoing Benefit:</strong> Most significant property tax relief in SC history</li>
      <li><strong>Home Value Threshold:</strong> Effectively exempts first $50,000 assessed value</li>
    </ul>
    
    <h3>Rental Property Tax Considerations</h3>
    <p>Investment properties taxed differently:</p>
    <ul>
      <li><strong>6% Assessment:</strong> Rental properties assessed at 6% instead of 4%</li>
      <li><strong>No Legal Residence Exemption:</strong> Cannot claim $50,000 school tax exemption</li>
      <li><strong>Higher Taxes:</strong> Typically 50-100% higher than owner-occupied comparable</li>
      <li><strong>Short-Term Rentals:</strong> Same 6% rate as long-term rentals</li>
      <li><strong>Tax Deductible:</strong> Property taxes deductible as rental expense</li>
    </ul>
    
    <h3>Property Tax and Homeowners Insurance Escrow</h3>
    <p>How property taxes fit into mortgage payments:</p>
    <ul>
      <li><strong>Monthly Escrow:</strong> Lender collects 1/12 of annual tax bill monthly</li>
      <li><strong>Lender Pays:</strong> Lender pays county directly from escrow account</li>
      <li><strong>Escrow Analysis:</strong> Annual review adjusts monthly payment if taxes change</li>
      <li><strong>Cushion:</strong> Lenders typically maintain 2-month cushion in escrow</li>
      <li><strong>Pay Direct Option:</strong> Can pay taxes yourself once mortgage paid off</li>
    </ul>
    
    <h3>SC Property Tax in Retirement</h3>
    <p>Important considerations for retirees:</p>
    <ul>
      <li><strong>Senior Exemption:</strong> 65+ with low income can exempt county operations taxes</li>
      <li><strong>Social Security Exempt:</strong> SC doesn't tax Social Security income</li>
      <li><strong>Fixed Income Planning:</strong> Property taxes generally stable in SC</li>
      <li><strong>Reverse Mortgages:</strong> Some reverse mortgages pay property taxes</li>
      <li><strong>Tax Deferral:</strong> Some counties offer tax deferral programs for seniors</li>
    </ul>
    
    <h3>New Home Construction and Property Taxes</h3>
    <p>How taxes work for newly built homes:</p>
    <ul>
      <li><strong>Assessed After Completion:</strong> Home valued once construction complete</li>
      <li><strong>Land Tax Only:</strong> Pay only on land until home finished</li>
      <li><strong>Prorated First Year:</strong> Taxes prorated based on completion date</li>
      <li><strong>Builder Pays:</strong> Builder typically pays taxes up to closing</li>
      <li><strong>Legal Residence:</strong> Can claim exemption for first full year after purchase</li>
    </ul>
    
    <h3>Property Tax Refunds and Adjustments</h3>
    <p>When you may receive a refund:</p>
    <ul>
      <li><strong>Assessment Reduction:</strong> If appeal succeeds, refund issued</li>
      <li><strong>Exemption Retroactive:</strong> Legal residence exemption retroactive if applied late</li>
      <li><strong>Double Payments:</strong> If both you and lender pay taxes</li>
      <li><strong>Property Damage:</strong> Some counties adjust for major casualty loss</li>
      <li><strong>Clerical Errors:</strong> County will refund overpayments from mistakes</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'marketValue',
        label: 'Property Market Value',
        type: 'currency',
        required: true,
        placeholder: '250000',
        helpText: 'Fair market value of your property'
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'primary', label: 'Primary Residence (4% assessment)' },
          { value: 'rental', label: 'Rental/Investment (6% assessment)' },
          { value: 'commercial', label: 'Commercial (6% assessment)' },
        ],
        helpText: 'Property classification determines assessment ratio'
      },
      {
        name: 'county',
        label: 'County',
        type: 'select',
        required: true,
        options: [
          { value: 'charleston', label: 'Charleston County' },
          { value: 'greenville', label: 'Greenville County' },
          { value: 'richland', label: 'Richland County (Columbia)' },
          { value: 'horry', label: 'Horry County (Myrtle Beach)' },
          { value: 'york', label: 'York County' },
          { value: 'beaufort', label: 'Beaufort County' },
          { value: 'other', label: 'Other SC County' },
        ],
        helpText: 'County determines millage rate'
      },
      {
        name: 'legalResidence',
        label: 'Legal Residence Exemption',
        type: 'select',
        required: true,
        options: [
          { value: 'yes', label: 'Yes - Primary Residence' },
          { value: 'no', label: 'No - Not Primary Residence' },
        ],
        helpText: '$50,000 exemption from school operations taxes'
      },
      {
        name: 'seniorExemption',
        label: 'Senior Homestead Exemption (65+)',
        type: 'select',
        required: false,
        options: [
          { value: 'no', label: 'Not Eligible' },
          { value: 'yes', label: 'Yes - Age 65+ and Income Qualified' },
        ],
        helpText: 'Exempts county operations taxes for eligible seniors'
      }
    ],
    results: [
      {
        name: 'assessedValue',
        label: 'Assessed Value',
        type: 'currency',
        helpText: 'Market value × assessment ratio'
      },
      {
        name: 'taxableValue',
        label: 'Taxable Value (After Exemptions)',
        type: 'currency',
        helpText: 'Assessed value minus applicable exemptions'
      },
      {
        name: 'annualPropertyTax',
        label: 'Estimated Annual Property Tax',
        type: 'currency',
        helpText: 'Total property tax owed for the year'
      },
      {
        name: 'monthlyEscrow',
        label: 'Monthly Escrow Payment',
        type: 'currency',
        helpText: 'If escrowing taxes with mortgage'
      },
      {
        name: 'exemptionSavings',
        label: 'Total Exemption Savings',
        type: 'currency',
        helpText: 'Amount saved through exemptions'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const marketValue = parseFloat(inputs.marketValue) || 0;
      const propertyType = inputs.propertyType || 'primary';
      const county = inputs.county || 'other';
      const legalResidence = inputs.legalResidence === 'yes';
      const seniorExemption = inputs.seniorExemption === 'yes';

      // Determine assessment ratio
      let assessmentRatio = 0.04; // Primary residence default
      if (propertyType === 'rental' || propertyType === 'commercial') {
        assessmentRatio = 0.06;
      }

      const assessedValue = Math.round(marketValue * assessmentRatio);

      // Determine millage rate by county (typical combined rates)
      let millageRate = 300; // Default mills
      switch (county) {
        case 'charleston':
          millageRate = 325;
          break;
        case 'greenville':
          millageRate = 300;
          break;
        case 'richland':
          millageRate = 325;
          break;
        case 'horry':
          millageRate = 280;
          break;
        case 'york':
          millageRate = 310;
          break;
        case 'beaufort':
          millageRate = 340;
          break;
      }

      // Calculate exemptions
      let totalExemptions = 0;
      let legalResidenceSavings = 0;
      let seniorSavings = 0;

      if (legalResidence && propertyType === 'primary') {
        // Legal residence exemption: $50,000 from school operations (typically 60% of total millage)
        const schoolMillage = millageRate * 0.6; // School taxes typically 60% of total
        legalResidenceSavings = Math.round((50000 * schoolMillage) / 1000);
        totalExemptions += 50000; // For display purposes
      }

      if (seniorExemption && propertyType === 'primary') {
        // Senior exemption removes county operations taxes (typically 20% of total millage)
        const countyMillage = millageRate * 0.2;
        seniorSavings = Math.round((assessedValue * countyMillage) / 1000);
      }

      // Calculate tax before and after exemptions
      const taxBeforeExemptions = Math.round((assessedValue * millageRate) / 1000);
      const exemptionSavings = legalResidenceSavings + seniorSavings;
      const annualPropertyTax = Math.max(0, taxBeforeExemptions - exemptionSavings);
      
      const taxableValue = Math.max(0, assessedValue - totalExemptions);
      const monthlyEscrow = Math.round(annualPropertyTax / 12);

      return {
        assessedValue,
        taxableValue,
        annualPropertyTax,
        monthlyEscrow,
        exemptionSavings
      };
    }
  }
};
