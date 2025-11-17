import { CalculatorContent } from '@/types';

export const UTAH_PROPERTY_TAX_TRUTH_IN_TAXATION_TOOL_CONTENT: CalculatorContent = {
  title: 'Utah Property Tax Truth in Taxation Tool',
  description: 'Calculate Utah property tax increases and understand Truth in Taxation requirements for tax rate changes',
  slug: 'utah-property-tax-truth-in-taxation-tool',
  icon: '📊',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Utah Truth in Taxation Laws',
    content: `
    <h2>Utah Truth in Taxation Complete Guide</h2>
    <p>Utah's Truth in Taxation law is one of the nation's strongest taxpayer protection mechanisms, requiring public hearings and formal notice before local governments can increase property tax revenue beyond what population growth and new construction generate. Understanding Truth in Taxation helps Utah homeowners anticipate and influence their property tax burden.</p>
    
    <h3>What is Truth in Taxation?</h3>
    <p>Truth in Taxation is Utah's property tax transparency law:</p>
    <ul>
      <li><strong>Certified Tax Rate:</strong> Each year, county auditor calculates rate that generates same revenue as prior year</li>
      <li><strong>Revenue Neutral:</strong> Certified rate accounts for property value changes but maintains revenue</li>
      <li><strong>Rate Increase Process:</strong> To exceed certified rate, local government must hold public hearing</li>
      <li><strong>Public Notice:</strong> Tax increase notices mailed to every property owner</li>
      <li><strong>Transparency:</strong> Designed to prevent "silent" tax increases from rising property values</li>
    </ul>
    
    <h3>How Utah Property Tax Works</h3>
    <p>Utah property tax system basics:</p>
    <ul>
      <li><strong>Fair Market Value:</strong> County assessor determines annual market value</li>
      <li><strong>Primary Residence:</strong> 45% of value exempt from some tax entities (school district portion)</li>
      <li><strong>Tax Rate:</strong> Expressed as rate per $100 of taxable value</li>
      <li><strong>Multiple Entities:</strong> County, city, school district, special districts all levy separate rates</li>
      <li><strong>Combined Rate:</strong> Total tax = sum of all entity rates × taxable value</li>
    </ul>
    
    <h3>Certified Tax Rate Calculation</h3>
    <p>How the certified rate is determined each year:</p>
    <ol>
      <li><strong>Prior Year Revenue:</strong> Calculate total tax revenue collected previous year</li>
      <li><strong>Adjust for Growth:</strong> Add revenue from new construction and annexation</li>
      <li><strong>New Tax Base:</strong> Calculate current year total taxable value</li>
      <li><strong>Certified Rate:</strong> Divide adjusted revenue by new tax base</li>
      <li><strong>Result:</strong> Rate that generates same revenue despite value changes</li>
    </ol>
    
    <h3>Utah Property Tax Rates by County</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Avg Combined Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $400K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Salt Lake County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.1-1.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,400-$5,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Utah County (Provo)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0-1.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,000-$4,800</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Davis County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.1-1.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,400-$5,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Weber County (Ogden)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.2-1.4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,800-$5,600</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington County (St. George)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.9-1.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,600-$4,400</td>
      </tr>
    </table>
    
    <h3>Primary Residence Exemption</h3>
    <p>Utah's 45% exemption for owner-occupied homes:</p>
    <ul>
      <li><strong>45% Exemption:</strong> First 45% of fair market value exempt from school district basic levy</li>
      <li><strong>Automatic:</strong> Applies automatically if property is your primary residence</li>
      <li><strong>School Taxes Only:</strong> Exemption applies only to school district portion (typically 50-60% of total)</li>
      <li><strong>No Income Limit:</strong> Available regardless of homeowner income</li>
      <li><strong>Typical Savings:</strong> $800-$1,500 annually on median-priced home</li>
    </ul>
    
    <h3>Truth in Taxation Public Hearing Process</h3>
    <p>What happens when local government proposes tax increase:</p>
    <ol>
      <li><strong>Certified Rate Notice:</strong> County auditor certifies rate by June 22</li>
      <li><strong>Proposed Increase:</strong> Entity proposes rate higher than certified rate</li>
      <li><strong>Notice Mailed:</strong> Notices sent to all property owners showing proposed increase</li>
      <li><strong>Public Hearing:</strong> Required hearing held with at least 7 days notice</li>
      <li><strong>Final Vote:</strong> Governing body votes on proposed rate increase</li>
      <li><strong>Implementation:</strong> If approved, new rate applied to tax year</li>
    </ol>
    
    <h3>Understanding Your Tax Notice</h3>
    <p>What the Truth in Taxation notice tells you:</p>
    <ul>
      <li><strong>Current Year Tax:</strong> What you'll pay if certified rate is used</li>
      <li><strong>Proposed Tax:</strong> What you'll pay if proposed rate increase approved</li>
      <li><strong>Percentage Increase:</strong> How much your tax will increase</li>
      <li><strong>Hearing Date/Time:</strong> When public hearing will be held</li>
      <li><strong>Contact Information:</strong> How to submit comments or attend hearing</li>
    </ul>
    
    <h3>Calculating Your Tax Increase</h3>
    <p>How to determine your potential tax increase:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Tax Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Home value increases 10%, certified rate used</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax stays essentially the same</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Home value increases 10%, rate increases 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax increases approximately 5%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Home value decreases 5%, certified rate used</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax decreases approximately 5%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Home value stable, rate increases 3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax increases 3%</td>
      </tr>
    </table>
    
    <h3>Participating in Truth in Taxation Hearings</h3>
    <p>How to make your voice heard:</p>
    <ul>
      <li><strong>Attend Hearing:</strong> Show up in person (higher impact than written comments)</li>
      <li><strong>Sign Up to Speak:</strong> Usually sign-in sheet at hearing</li>
      <li><strong>Time Limit:</strong> Typically 2-3 minutes per speaker</li>
      <li><strong>Be Specific:</strong> Reference specific budget items or services</li>
      <li><strong>Written Comments:</strong> Submit comments via email/mail before hearing</li>
      <li><strong>Organize Neighbors:</strong> Collective action more effective</li>
    </ul>
    
    <h3>Common Reasons for Tax Rate Increases</h3>
    <p>Why local governments propose rate increases:</p>
    <ul>
      <li><strong>Employee Compensation:</strong> Raises for teachers, police, firefighters</li>
      <li><strong>New Services:</strong> Additional programs or service expansion</li>
      <li><strong>Infrastructure:</strong> Road maintenance, building repairs</li>
      <li><strong>Debt Service:</strong> Bond payments for capital projects</li>
      <li><strong>Rising Costs:</strong> Healthcare, utilities, fuel costs</li>
      <li><strong>Declining Other Revenue:</strong> Reduced state funding or fees</li>
    </ul>
    
    <h3>Utah Circuit Breaker - Additional Tax Relief</h3>
    <p>Property tax deferral and abatement for eligible homeowners:</p>
    <ul>
      <li><strong>Eligibility:</strong> Age 66+, disabled, or veterans with income under $49,174</li>
      <li><strong>Circuit Breaker Credit:</strong> Reduces property tax to maximum percentage of household income</li>
      <li><strong>Sliding Scale:</strong> Credit amount based on income level</li>
      <li><strong>Annual Application:</strong> Must apply each year through county</li>
      <li><strong>Typical Relief:</strong> $500-$1,500 annually for qualified homeowners</li>
    </ul>
    
    <h3>Appeal Rights for Property Assessments</h3>
    <p>How to challenge your property's assessed value:</p>
    <ol>
      <li><strong>Assessment Notice:</strong> Receive notice of value in August</li>
      <li><strong>45-Day Window:</strong> Must appeal within 45 days of notice</li>
      <li><strong>County Board:</strong> File appeal with County Board of Equalization</li>
      <li><strong>Evidence Required:</strong> Recent appraisal, comparable sales</li>
      <li><strong>Hearing:</strong> Present case at board hearing</li>
      <li><strong>State Commission:</strong> Can appeal board decision to State Tax Commission</li>
    </ol>
    
    <h3>Special Assessment Areas</h3>
    <p>Additional property taxes in certain districts:</p>
    <ul>
      <li><strong>Community Development Areas (CDAs):</strong> Infrastructure financing in new developments</li>
      <li><strong>Metropolitan Water Districts:</strong> Water service districts</li>
      <li><strong>Fire Service Districts:</strong> Rural fire protection</li>
      <li><strong>Cemetery Districts:</strong> Public cemetery maintenance</li>
      <li><strong>Library Districts:</strong> Public library funding</li>
    </ul>
    
    <h3>Impact of New Construction on Your Taxes</h3>
    <p>How development affects existing homeowners:</p>
    <ul>
      <li><strong>Certified Rate Adjustment:</strong> New construction increases tax base, lowering certified rate</li>
      <li><strong>Benefit to Existing Owners:</strong> More taxpayers sharing the burden</li>
      <li><strong>Service Demand:</strong> New development may require service expansion</li>
      <li><strong>Overall Effect:</strong> Generally neutral to slightly beneficial for existing homeowners</li>
    </ul>
    
    <h3>Utah Property Tax Payment Schedule</h3>
    <p>When and how to pay property taxes:</p>
    <ul>
      <li><strong>Tax Notices Mailed:</strong> October/November</li>
      <li><strong>November 30 Deadline:</strong> Full payment due by November 30 without penalty</li>
      <li><strong>5% Penalty:</strong> Added December 1 if unpaid</li>
      <li><strong>Quarterly Payments:</strong> Can opt for quarterly payments (with signed agreement)</li>
      <li><strong>Online Payment:</strong> Most counties accept online/credit card payments</li>
      <li><strong>Senior Deferral:</strong> Eligible seniors can defer payment</li>
    </ul>
    
    <h3>Truth in Taxation Success Stories</h3>
    <p>Examples of taxpayer impact:</p>
    <ul>
      <li><strong>Salt Lake County 2019:</strong> Proposed 15% increase reduced to 9% after public outcry</li>
      <li><strong>Park City 2020:</strong> Rate increase rejected entirely after hearings</li>
      <li><strong>Davis School District 2018:</strong> Modified budget after hundreds attended hearing</li>
      <li><strong>Key Lesson:</strong> Public participation makes a difference</li>
    </ul>
    
    <h3>How Utah Compares to Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Taxpayer Protection</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Effective Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Utah</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Truth in Taxation (strong)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.58%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Prop 13 (rate cap)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.76%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Rollback elections</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.69%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Colorado</td>
        <td style="border: 1px solid #ddd; padding: 8px;">TABOR (voter approval)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.51%</td>
      </tr>
    </table>
    
    <h3>Resources for Utah Taxpayers</h3>
    <p>Where to find more information:</p>
    <ul>
      <li><strong>Utah State Tax Commission:</strong> tax.utah.gov</li>
      <li><strong>County Assessor:</strong> Property value information and appeals</li>
      <li><strong>County Auditor:</strong> Tax rate information and certified rates</li>
      <li><strong>Utah Taxpayers Association:</strong> Advocacy organization</li>
      <li><strong>Local Government Websites:</strong> Budget documents and hearing schedules</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Fair Market Value',
        type: 'currency',
        required: true,
        placeholder: '400000',
        helpText: 'Current assessed fair market value of your home'
      },
      {
        name: 'county',
        label: 'Utah County',
        type: 'select',
        required: true,
        options: [
          { value: 'saltLake', label: 'Salt Lake County' },
          { value: 'utah', label: 'Utah County (Provo)' },
          { value: 'davis', label: 'Davis County' },
          { value: 'weber', label: 'Weber County (Ogden)' },
          { value: 'washington', label: 'Washington County (St. George)' },
          { value: 'other', label: 'Other Utah County' },
        ],
        helpText: 'County determines typical tax rates'
      },
      {
        name: 'isPrimaryResidence',
        label: 'Primary Residence',
        type: 'select',
        required: true,
        options: [
          { value: 'yes', label: 'Yes - Primary Residence (45% exemption)' },
          { value: 'no', label: 'No - Investment/Second Home' },
        ],
        helpText: 'Primary residences receive 45% school tax exemption'
      },
      {
        name: 'proposedIncrease',
        label: 'Proposed Tax Rate Increase',
        type: 'select',
        required: true,
        options: [
          { value: '0', label: 'No Increase (Certified Rate)' },
          { value: '3', label: '3% Increase' },
          { value: '5', label: '5% Increase' },
          { value: '10', label: '10% Increase' },
          { value: '15', label: '15% Increase' },
        ],
        helpText: 'Proposed increase above certified rate'
      },
      {
        name: 'valueChange',
        label: 'Home Value Change from Last Year',
        type: 'select',
        required: true,
        options: [
          { value: '0', label: 'No Change' },
          { value: '5', label: '+5% Increase' },
          { value: '10', label: '+10% Increase' },
          { value: '15', label: '+15% Increase' },
          { value: '-5', label: '-5% Decrease' },
        ],
        helpText: 'How much your home value changed this year'
      }
    ],
    results: [
      {
        name: 'currentYearTax',
        label: 'Current Year Tax (Certified Rate)',
        type: 'currency',
        helpText: 'Tax if certified rate is used (revenue neutral)'
      },
      {
        name: 'proposedTax',
        label: 'Proposed Tax (If Increase Approved)',
        type: 'currency',
        helpText: 'Tax if proposed rate increase is approved'
      },
      {
        name: 'annualIncrease',
        label: 'Annual Tax Increase',
        type: 'currency',
        helpText: 'Additional tax you would pay per year'
      },
      {
        name: 'percentageIncrease',
        label: 'Your Tax Increase Percentage',
        type: 'text',
        helpText: 'Total percentage increase in your property tax'
      },
      {
        name: 'exemptionSavings',
        label: 'Primary Residence Exemption Savings',
        type: 'currency',
        helpText: 'Amount saved from 45% school tax exemption'
      },
      {
        name: 'fiveYearProjection',
        label: '5-Year Tax Projection',
        type: 'currency',
        helpText: 'Estimated total tax in 5 years if rate increases continue'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const county = inputs.county || 'other';
      const isPrimaryResidence = inputs.isPrimaryResidence === 'yes';
      const proposedIncrease = parseFloat(inputs.proposedIncrease) || 0;
      const valueChange = parseFloat(inputs.valueChange) || 0;

      // Determine base tax rate by county (typical combined rates)
      let baseRate = 0.011; // 1.1% default
      switch (county) {
        case 'saltLake':
          baseRate = 0.012;
          break;
        case 'utah':
          baseRate = 0.011;
          break;
        case 'davis':
          baseRate = 0.012;
          break;
        case 'weber':
          baseRate = 0.013;
          break;
        case 'washington':
          baseRate = 0.010;
          break;
      }

      // Calculate taxable value
      // School tax is typically 55% of total, and 45% exemption applies to school portion
      let taxableValue = homeValue;
      let exemptionSavings = 0;
      
      if (isPrimaryResidence) {
        // 45% exemption on school portion (typically 55% of total tax)
        const schoolPortion = 0.55;
        const exemptionOnSchool = homeValue * 0.45 * schoolPortion;
        exemptionSavings = Math.round(exemptionOnSchool * baseRate);
      }

      // Current year tax (certified rate - revenue neutral despite value changes)
      // Due to Truth in Taxation, if certified rate is used, tax stays roughly same
      const lastYearValue = homeValue / (1 + (valueChange / 100));
      const lastYearTax = Math.round((lastYearValue * baseRate) - (isPrimaryResidence ? (lastYearValue * 0.45 * 0.55 * baseRate) : 0));
      
      // Current year tax at certified rate (should be approximately same as last year)
      const currentYearTax = lastYearTax;

      // Proposed tax if rate increase approved
      const rateAfterIncrease = baseRate * (1 + (proposedIncrease / 100));
      const proposedTax = Math.round(homeValue * rateAfterIncrease - (isPrimaryResidence ? (homeValue * 0.45 * 0.55 * rateAfterIncrease) : 0));

      const annualIncrease = proposedTax - currentYearTax;
      const percentageIncrease = currentYearTax > 0 ? ((annualIncrease / currentYearTax) * 100).toFixed(1) + '%' : '0%';

      // 5-year projection assuming same rate increase continues annually
      const annualRateIncrease = proposedIncrease / 100;
      let projectedTax = proposedTax;
      for (let i = 0; i < 4; i++) {
        projectedTax = projectedTax * (1 + annualRateIncrease);
      }
      const fiveYearProjection = Math.round(projectedTax);

      return {
        currentYearTax,
        proposedTax,
        annualIncrease,
        percentageIncrease,
        exemptionSavings: Math.round(exemptionSavings),
        fiveYearProjection
      };
    }
  }
};
