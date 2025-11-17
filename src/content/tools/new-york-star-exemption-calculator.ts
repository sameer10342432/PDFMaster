import { CalculatorContent } from '@/types';

export const NEW_YORK_STAR_EXEMPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New York STAR Exemption Calculator',
  description: 'Calculate your New York School Tax Relief (STAR) exemption savings - Basic and Enhanced STAR property tax benefits',
  slug: 'new-york-star-exemption-calculator',
  icon: '⭐',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding New York STAR Exemption Benefits',
    content: `
    <h2>New York STAR Exemption Guide</h2>
    <p>The School Tax Relief (STAR) program is New York State's homeowner property tax relief initiative, saving eligible homeowners an average of $700-$3,000 annually on school property taxes. STAR is one of the most valuable homeowner benefits in New York, but many homeowners don't fully understand how it works or whether they qualify.</p>
    
    <h3>What is the STAR Exemption?</h3>
    <p>STAR provides property tax relief by exempting a portion of your home's value from school property taxes:</p>
    <ul>
      <li><strong>Basic STAR:</strong> Available to homeowners with income under $500,000</li>
      <li><strong>Enhanced STAR:</strong> Available to seniors (65+) with income under $92,000</li>
      <li><strong>School Taxes Only:</strong> STAR only reduces school property taxes, not county or municipal taxes</li>
      <li><strong>Primary Residence:</strong> Must be your primary residence</li>
    </ul>
    
    <h3>STAR Credit vs. STAR Exemption</h3>
    <p>New York transitioned from exemptions to credits for new applicants:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">STAR Exemption (Pre-2016)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">STAR Credit (2016+)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">How Applied</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Reduces assessed value on tax bill</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Direct check mailed to homeowner</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Timing</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Applied before tax bill is issued</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Check received before school tax due date</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Registration</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Registered with local assessor</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Registered with NYS Tax Department</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Grandfathered</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Can keep if registered before 2016</td>
        <td style="border: 1px solid #ddd; padding: 8px;">All new homeowners since 2016</td>
      </tr>
    </table>
    
    <h3>Basic STAR Eligibility Requirements</h3>
    <p>To qualify for Basic STAR, you must meet ALL of the following:</p>
    <ul>
      <li><strong>Primary Residence:</strong> Property must be your primary residence</li>
      <li><strong>Income Limit:</strong> Combined household income under $500,000</li>
      <li><strong>Owner-Occupied:</strong> At least one owner must live in the property</li>
      <li><strong>Property Type:</strong> 1-3 family home, condo, or co-op</li>
      <li><strong>Not Receive Enhanced STAR:</strong> Cannot receive both Basic and Enhanced</li>
    </ul>
    
    <h3>Enhanced STAR Eligibility Requirements</h3>
    <p>Enhanced STAR provides higher benefits for eligible seniors:</p>
    <ul>
      <li><strong>Age Requirement:</strong> At least one owner must be 65+ as of December 31</li>
      <li><strong>Income Limit:</strong> Combined household income under $92,000</li>
      <li><strong>Primary Residence:</strong> Must be your primary residence</li>
      <li><strong>Owner-Occupied:</strong> Property must be owner-occupied</li>
      <li><strong>Annual Renewal:</strong> Income verification required annually</li>
    </ul>
    
    <h3>Average STAR Savings by County</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Basic STAR Average</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Enhanced STAR Average</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Westchester</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Nassau</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,600</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,200</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Suffolk</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,800</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rockland</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Monroe (Rochester)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$900</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Erie (Buffalo)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,600</td>
      </tr>
    </table>
    
    <h3>How STAR Exemption Works</h3>
    <p>STAR reduces the taxable assessed value of your home for school tax purposes:</p>
    <ul>
      <li><strong>Exemption Amount:</strong> Fixed dollar amount set by NYS annually</li>
      <li><strong>2024 Basic STAR:</strong> $30,000 exemption from assessed value</li>
      <li><strong>2024 Enhanced STAR:</strong> Varies by county, typically $70,000-$80,000</li>
      <li><strong>Applied to School Taxes Only:</strong> Your total tax bill shows STAR savings separately</li>
    </ul>
    
    <h3>STAR Benefit Calculation Example</h3>
    <p>Here's how STAR reduces your school taxes:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Item</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Home Assessed Value</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Basic STAR Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">- $30,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxable Value for School Taxes</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$170,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">School Tax Rate (example: 2.5%)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Annual Savings</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$750</strong></td>
      </tr>
    </table>
    
    <h3>STAR Income Verification</h3>
    <p>New York verifies income eligibility annually:</p>
    <ul>
      <li><strong>Basic STAR:</strong> Income verified through NYS Tax Department records</li>
      <li><strong>Enhanced STAR:</strong> Requires annual income verification form</li>
      <li><strong>Income Definition:</strong> Federal adjusted gross income (AGI) of all owners and resident spouses</li>
      <li><strong>Failure to Verify:</strong> STAR benefits suspended until compliance</li>
      <li><strong>Social Security:</strong> Social Security income counts toward Enhanced STAR limit but not Basic STAR</li>
    </ul>
    
    <h3>How to Apply for STAR</h3>
    <p>Application process differs based on when you purchased your home:</p>
    <ul>
      <li><strong>First-Time Homeowners (2016+):</strong> Register online at tax.ny.gov for STAR credit</li>
      <li><strong>Pre-2016 Homeowners:</strong> May have existing exemption or can switch to credit</li>
      <li><strong>Enhanced STAR:</strong> Apply through NYS Tax Department with age and income proof</li>
      <li><strong>Registration Deadline:</strong> No strict deadline, but apply early in ownership</li>
      <li><strong>Automatic Renewal:</strong> STAR credit renews automatically if income-eligible</li>
    </ul>
    
    <h3>STAR Credit Payment Schedule</h3>
    <p>For homeowners receiving STAR as a credit (not exemption):</p>
    <ul>
      <li><strong>Check Issued:</strong> Typically mailed in late August/early September</li>
      <li><strong>School Tax Due Date:</strong> Usually September 30 or October 31 (varies by district)</li>
      <li><strong>Direct Deposit:</strong> Option available for faster receipt</li>
      <li><strong>Lost Checks:</strong> Can request replacement from NYS Tax Department</li>
    </ul>
    
    <h3>STAR vs. Other NY Property Tax Exemptions</h3>
    <p>STAR can be combined with other exemptions:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemption</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Can Combine with STAR?</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Veterans Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Both can be claimed simultaneously</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Senior Citizen Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes (with Enhanced STAR)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Different income limits apply</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Disability Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Both apply to different portions</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Agricultural Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Partial</td>
        <td style="border: 1px solid #ddd; padding: 8px;">STAR applies only to residential portion</td>
      </tr>
    </table>
    
    <h3>Common STAR Mistakes to Avoid</h3>
    <ul>
      <li><strong>Not Registering:</strong> New homeowners must actively register for STAR credit</li>
      <li><strong>Income Over Limit:</strong> Going over $92,000 (Enhanced) or $500,000 (Basic) = lost benefit</li>
      <li><strong>Multiple Properties:</strong> STAR only applies to primary residence</li>
      <li><strong>Rental Units:</strong> Cannot claim STAR on rental properties</li>
      <li><strong>Not Updating Address:</strong> STAR credit checks mailed to address on file</li>
      <li><strong>Missing Income Verification:</strong> Enhanced STAR requires annual certification</li>
    </ul>
    
    <h3>STAR for Co-ops and Condos</h3>
    <p>STAR works differently for cooperative and condominium owners:</p>
    <ul>
      <li><strong>Condos:</strong> STAR credit/exemption applied same as single-family homes</li>
      <li><strong>Co-ops:</strong> Co-op corporation receives STAR benefit, passes to shareholders</li>
      <li><strong>Co-op Abatement:</strong> Reflected in reduced monthly maintenance charges</li>
      <li><strong>Individual Registration:</strong> Each unit owner must register separately</li>
    </ul>
    
    <h3>NYC STAR Specifics</h3>
    <p>New York City has unique STAR provisions:</p>
    <ul>
      <li><strong>Lower Benefits:</strong> NYC generally has lower STAR savings due to lower school tax rates</li>
      <li><strong>Co-op Advantage:</strong> Co-ops are particularly common in NYC and receive substantial benefits</li>
      <li><strong>Average NYC Savings:</strong> $200-$500 for Basic STAR, $400-$1,000 for Enhanced</li>
      <li><strong>Abatement System:</strong> NYC uses abatement (reduction) rather than exemption in many cases</li>
    </ul>
    
    <h3>STAR Benefit Value Over Time</h3>
    <p>Understanding the long-term value of STAR:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Time Period</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Basic STAR ($800/yr)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Enhanced STAR ($1,600/yr)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">5 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">10 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$16,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">20 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$16,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$32,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">30 Years (typical ownership)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$24,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$48,000</td>
      </tr>
    </table>
    
    <h3>STAR Recapture Tax</h3>
    <p>If you receive STAR improperly, you may owe recapture tax:</p>
    <ul>
      <li><strong>Improper Claims:</strong> Claiming on non-primary residence or when income-ineligible</li>
      <li><strong>Penalty:</strong> Repay 5 years of improper benefits plus interest</li>
      <li><strong>Audits:</strong> NYS Tax Department conducts random audits</li>
      <li><strong>Voluntary Disclosure:</strong> Withdraw STAR if you become ineligible</li>
    </ul>
    
    <h3>Future of STAR Program</h3>
    <p>Recent changes and proposals affecting STAR:</p>
    <ul>
      <li><strong>Credit Transition:</strong> All new homeowners receive credit (not exemption) since 2016</li>
      <li><strong>Income Limit Adjustments:</strong> Enhanced STAR limit increased periodically</li>
      <li><strong>Property Tax Cap:</strong> STAR works with 2% property tax cap to control costs</li>
      <li><strong>School Tax Relief Act:</strong> STAR part of broader school funding reform</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'assessedValue',
        label: 'Home Assessed Value',
        type: 'currency',
        required: true,
        placeholder: '200000',
        helpText: 'Your property assessed value (not market value)'
      },
      {
        name: 'schoolTaxRate',
        label: 'School Tax Rate (%)',
        type: 'number',
        required: true,
        placeholder: '2.5',
        helpText: 'School tax rate as percentage (found on tax bill)'
      },
      {
        name: 'starType',
        label: 'STAR Eligibility',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'Not Eligible for STAR' },
          { value: 'basic', label: 'Basic STAR (Income under $500K)' },
          { value: 'enhanced', label: 'Enhanced STAR (Age 65+, Income under $92K)' },
        ],
        helpText: 'Select your STAR eligibility level'
      },
      {
        name: 'county',
        label: 'County',
        type: 'select',
        required: true,
        options: [
          { value: 'westchester', label: 'Westchester' },
          { value: 'nassau', label: 'Nassau' },
          { value: 'suffolk', label: 'Suffolk' },
          { value: 'rockland', label: 'Rockland' },
          { value: 'monroe', label: 'Monroe (Rochester)' },
          { value: 'erie', label: 'Erie (Buffalo)' },
          { value: 'nyc', label: 'New York City' },
          { value: 'other', label: 'Other NY County' },
        ],
        helpText: 'Your county affects Enhanced STAR amount'
      },
      {
        name: 'receivingMethod',
        label: 'STAR Benefit Type',
        type: 'select',
        required: true,
        options: [
          { value: 'credit', label: 'STAR Credit (Check)' },
          { value: 'exemption', label: 'STAR Exemption (Pre-2016)' },
        ],
        helpText: 'How you receive your STAR benefit'
      }
    ],
    results: [
      {
        name: 'annualStarSavings',
        label: 'Annual STAR Savings',
        type: 'currency',
        helpText: 'Your total STAR benefit per year'
      },
      {
        name: 'schoolTaxBeforeStar',
        label: 'School Tax Before STAR',
        type: 'currency',
        helpText: 'School property tax without STAR'
      },
      {
        name: 'schoolTaxAfterStar',
        label: 'School Tax After STAR',
        type: 'currency',
        helpText: 'School property tax after STAR benefit'
      },
      {
        name: 'exemptionAmount',
        label: 'STAR Exemption Amount',
        type: 'currency',
        helpText: 'Dollar amount exempted from assessed value'
      },
      {
        name: 'tenYearSavings',
        label: '10-Year STAR Savings',
        type: 'currency',
        helpText: 'Total savings over 10 years (assuming constant rates)'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const assessedValue = parseFloat(inputs.assessedValue) || 0;
      const schoolTaxRate = parseFloat(inputs.schoolTaxRate) || 0;
      const starType = inputs.starType || 'none';
      const county = inputs.county || 'other';

      // STAR exemption amounts
      let exemptionAmount = 0;
      
      if (starType === 'basic') {
        exemptionAmount = 30000; // 2024 Basic STAR
      } else if (starType === 'enhanced') {
        // Enhanced STAR varies by county
        switch (county) {
          case 'westchester':
            exemptionAmount = 85000;
            break;
          case 'nassau':
          case 'suffolk':
            exemptionAmount = 80000;
            break;
          case 'rockland':
            exemptionAmount = 82000;
            break;
          case 'nyc':
            exemptionAmount = 65000;
            break;
          case 'monroe':
          case 'erie':
            exemptionAmount = 70000;
            break;
          default:
            exemptionAmount = 72000;
        }
      }

      // Calculate school tax before and after STAR
      const schoolTaxBeforeStar = (assessedValue * schoolTaxRate) / 100;
      const taxableValueAfterStar = Math.max(0, assessedValue - exemptionAmount);
      const schoolTaxAfterStar = (taxableValueAfterStar * schoolTaxRate) / 100;
      
      const annualStarSavings = schoolTaxBeforeStar - schoolTaxAfterStar;
      const tenYearSavings = annualStarSavings * 10;

      return {
        annualStarSavings: Math.round(annualStarSavings),
        schoolTaxBeforeStar: Math.round(schoolTaxBeforeStar),
        schoolTaxAfterStar: Math.round(schoolTaxAfterStar),
        exemptionAmount,
        tenYearSavings: Math.round(tenYearSavings)
      };
    }
  }
};
