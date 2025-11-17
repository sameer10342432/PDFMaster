import { CalculatorContent } from '@/types';

export const BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Boston (MA) Residential Exemption Calculator',
  description: 'Calculate your Boston residential exemption savings and understand how this property tax benefit reduces your annual tax bill for owner-occupied homes',
  slug: 'boston-ma-residential-exemption-calculator',
  icon: '🏛️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Boston Residential Exemption',
    content: `
    <h2>Boston Residential Exemption Guide</h2>
    <p>The <strong>Boston Residential Exemption</strong> is one of the most valuable property tax benefits available to homeowners in Massachusetts. For the 2024 fiscal year, the exemption can save eligible Boston homeowners <strong>up to $3,816 annually</strong> on their property tax bills.</p>
    
    <h3>What is the Boston Residential Exemption?</h3>
    <p>The residential exemption is a property tax reduction for owner-occupied homes in Boston. It works by:</p>
    <ul>
      <li><strong>Reducing Assessed Value:</strong> Exempts a portion of your home's assessed value from taxation</li>
      <li><strong>Owner-Occupant Only:</strong> Must be your principal residence</li>
      <li><strong>Automatic Renewal:</strong> Once approved, renews automatically as long as you meet requirements</li>
      <li><strong>Significant Savings:</strong> Average savings of $2,500-$3,800 per year</li>
    </ul>
    
    <h3>How Much is the Residential Exemption Worth? (FY2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Component</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Residential Exemption (35% of avg residential value)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$367,044</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Boston Residential Tax Rate (FY2024)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10.40 per $1,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Maximum Annual Tax Savings</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$3,817</strong></td>
      </tr>
    </table>
    <p><strong>Note:</strong> The exemption amount increases annually as Boston's average residential assessed value rises.</p>
    
    <h3>Who Qualifies for the Boston Residential Exemption?</h3>
    <p>To qualify, you must meet ALL of these requirements:</p>
    <ul>
      <li><strong>Owner-Occupant:</strong> You must own and occupy the property as your principal residence</li>
      <li><strong>Domicile Requirement:</strong> Property must be your legal domicile (primary residence)</li>
      <li><strong>July 1 Occupancy:</strong> You must occupy the property as of July 1st of the tax year</li>
      <li><strong>Massachusetts Resident:</strong> Must be a Massachusetts resident</li>
      <li><strong>Timely Application:</strong> File by April 1st for first-time applications (automatic renewal thereafter)</li>
    </ul>
    
    <h3>How the Residential Exemption Works</h3>
    <p>The exemption is calculated as <strong>35% of the average residential assessed value</strong> in Boston:</p>
    <p><strong>Example Calculation (FY2024):</strong></p>
    <ul>
      <li><strong>Your Home's Assessed Value:</strong> $650,000</li>
      <li><strong>Residential Exemption:</strong> $367,044</li>
      <li><strong>Taxable Value After Exemption:</strong> $282,956</li>
      <li><strong>Tax Rate:</strong> $10.40 per $1,000</li>
      <li><strong>Annual Tax:</strong> $2,943</li>
      <li><strong>Tax Without Exemption:</strong> $6,760</li>
      <li><strong>Annual Savings:</strong> $3,817</li>
    </ul>
    
    <h3>Boston Tax Rates: Residential vs. Commercial</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Class</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">FY2024 Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $650K Property</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Residential (with exemption)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10.40 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,943</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Residential (without exemption)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10.40 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,760</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial/Industrial</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$24.68 per $1,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$16,042</td>
      </tr>
    </table>
    
    <h3>Residential Exemption by Property Value (FY2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Home Value</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax Without Exemption</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax With Exemption</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$400,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,160</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$343</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$600,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,240</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,423</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$800,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,320</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,503</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,400</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,583</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,600</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$11,783</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
    </table>
    
    <h3>How to Apply for the Residential Exemption</h3>
    <p>Application process is straightforward:</p>
    <ol>
      <li><strong>First-Time Application:</strong> File Form 128-RES by April 1st</li>
      <li><strong>Online Application:</strong> Available at boston.gov/assessing</li>
      <li><strong>Documentation Needed:</strong>
        <ul>
          <li>Proof of residency (driver's license, utility bill, voter registration)</li>
          <li>Deed or mortgage statement</li>
          <li>Massachusetts state income tax return</li>
        </ul>
      </li>
      <li><strong>Automatic Renewal:</strong> Once approved, exemption renews automatically each year</li>
      <li><strong>Update Requirements:</strong> Must notify assessor if you move or property is no longer principal residence</li>
    </ol>
    
    <h3>Residential Exemption vs. Other Massachusetts Exemptions</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemption Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Eligibility</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Residential Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Boston owner-occupants</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Seniors (Age 70+)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10+ years residence, income limits</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,000 - $1,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Disabled Veterans</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Service-connected disability</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$750 - $1,250</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Blind Persons</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Legal blindness certification</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$520 - $625</td>
      </tr>
    </table>
    <p><strong>Important:</strong> You can stack the residential exemption with other exemptions you qualify for!</p>
    
    <h3>Who Cannot Claim the Residential Exemption?</h3>
    <ul>
      <li><strong>Investment Properties:</strong> Rental properties where you don't live</li>
      <li><strong>Second Homes:</strong> Vacation homes or properties that aren't your primary residence</li>
      <li><strong>Non-Owner Occupants:</strong> Renters cannot claim (landlord must claim if they live there)</li>
      <li><strong>Condo Unit Owners (sometimes):</strong> If owner doesn't occupy the unit</li>
      <li><strong>Trusts (without occupancy):</strong> Property held in trust where beneficiary doesn't occupy</li>
    </ul>
    
    <h3>Impact on Investment Properties</h3>
    <p>Investment property owners in Boston pay significantly more in property taxes:</p>
    <ul>
      <li><strong>No Residential Exemption:</strong> Pay full tax on entire assessed value</li>
      <li><strong>Higher Effective Rate:</strong> Approximately 58% higher tax bill than owner-occupied comparable property</li>
      <li><strong>Example:</strong> $650,000 condo pays $6,760 (investor) vs. $2,943 (owner-occupant)</li>
    </ul>
    
    <h3>Historical Residential Exemption Values</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fiscal Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Exemption Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">FY2020</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$296,172</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,140</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">FY2021</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$313,788</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,313</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">FY2022</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$331,549</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,501</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">FY2023</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$349,307</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,676</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">FY2024</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$367,044</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,817</td>
      </tr>
    </table>
    <p>The exemption typically increases 5-6% annually, tracking Boston's rising property values.</p>
    
    <h3>Boston Property Tax Payment Schedule</h3>
    <p>Boston property taxes are billed quarterly:</p>
    <ul>
      <li><strong>Q1 (Preliminary):</strong> Due July 1st - Based on prior year's tax</li>
      <li><strong>Q2 (Preliminary):</strong> Due November 1st - Based on prior year's tax</li>
      <li><strong>Q3 (Actual):</strong> Due February 1st - Based on current year assessment</li>
      <li><strong>Q4 (Actual):</strong> Due May 1st - Based on current year assessment</li>
    </ul>
    <p><strong>Interest on Late Payments:</strong> 14% annual interest charged on overdue balances.</p>
    
    <h3>What Happens If You Move?</h3>
    <p>When you move from your Boston home:</p>
    <ul>
      <li><strong>Notify Assessor:</strong> Must inform Boston Assessing Department within 30 days</li>
      <li><strong>Exemption Ends:</strong> Residential exemption terminates immediately</li>
      <li><strong>Prorated Adjustment:</strong> May owe additional taxes for the portion of year after you moved</li>
      <li><strong>Penalty for Failure to Report:</strong> Potential penalty of up to $5,000 plus back taxes</li>
    </ul>
    
    <h3>Residential Exemption and Condos</h3>
    <p>Condo owners in Boston can claim the residential exemption:</p>
    <ul>
      <li><strong>Individual Unit Owners:</strong> Each owner-occupant can claim for their unit</li>
      <li><strong>Not for Common Areas:</strong> Exemption applies only to individual units</li>
      <li><strong>Mixed-Use Buildings:</strong> Only residential portions qualify</li>
      <li><strong>Documentation:</strong> May need condo association documentation proving occupancy</li>
    </ul>
    
    <h3>Impact on Home Affordability</h3>
    <p>The residential exemption significantly affects affordability:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Home Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Tax (with exemption)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Tax (without)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$114</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$433</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$318</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$330</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$650</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$318</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$549</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$867</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$318</td>
      </tr>
    </table>
    <p>The exemption reduces monthly housing costs by approximately <strong>$318/month</strong>, equivalent to qualifying for a larger mortgage.</p>
    
    <h3>Comparing Boston to Other Massachusetts Cities</h3>
    <p>Only a few Massachusetts municipalities offer residential exemptions:</p>
    <ul>
      <li><strong>Boston:</strong> $367,044 exemption (FY2024)</li>
      <li><strong>Cambridge:</strong> $342,560 exemption (FY2024)</li>
      <li><strong>Brookline:</strong> Offers 30% exemption</li>
      <li><strong>Somerville:</strong> $255,000 exemption (FY2024)</li>
      <li><strong>Most Other Cities:</strong> No residential exemption available</li>
    </ul>
    
    <h3>Tax Appeals and the Residential Exemption</h3>
    <p>If you believe your assessment is too high:</p>
    <ul>
      <li><strong>File by February 1st:</strong> Annual deadline to appeal assessment</li>
      <li><strong>Exemption Still Applies:</strong> Reduced assessment lowers tax before exemption is calculated</li>
      <li><strong>Double Benefit:</strong> Lower assessment + residential exemption = maximum savings</li>
      <li><strong>Professional Help:</strong> Property tax attorneys typically charge 25-33% of first-year savings</li>
    </ul>
    
    <h3>Future Outlook</h3>
    <p>The residential exemption's future in Boston:</p>
    <ul>
      <li><strong>Expected to Grow:</strong> Exemption amount tracks average residential values</li>
      <li><strong>FY2025 Projection:</strong> Likely $385,000-$395,000 exemption (~$4,000 savings)</li>
      <li><strong>Political Support:</strong> Strong voter support for maintaining exemption</li>
      <li><strong>Revenue Impact:</strong> City makes up revenue through higher commercial/industrial rates</li>
    </ul>
    
    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li><strong>Not Applying:</strong> Exemption is not automatic - you must file Form 128-RES</li>
      <li><strong>Assuming Automatic Transfer:</strong> New homeowners must re-apply</li>
      <li><strong>Failing to Report Changes:</strong> Must notify if property is no longer principal residence</li>
      <li><strong>Missing the Deadline:</strong> Late applications may be denied for that tax year</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Boston Assessing Department:</strong> boston.gov/assessing</li>
      <li><strong>Application Form:</strong> Form 128-RES available online</li>
      <li><strong>Phone:</strong> 617-635-4287</li>
      <li><strong>Office Hours:</strong> Monday-Friday 9:00 AM - 5:00 PM</li>
      <li><strong>Location:</strong> 1 City Hall Square, Room 301, Boston, MA 02201</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'assessedValue',
        label: 'Property Assessed Value',
        type: 'currency',
        required: true,
        placeholder: '650000',
        helpText: 'Your property\'s assessed value from your tax bill'
      },
      {
        name: 'fiscalYear',
        label: 'Fiscal Year',
        type: 'select',
        required: true,
        options: [
          { value: '2024', label: 'FY2024 ($367,044 exemption)' },
          { value: '2023', label: 'FY2023 ($349,307 exemption)' },
          { value: '2022', label: 'FY2022 ($331,549 exemption)' },
        ],
        helpText: 'Select the fiscal year for calculation'
      },
      {
        name: 'ownerOccupied',
        label: 'Property Status',
        type: 'select',
        required: true,
        options: [
          { value: 'yes', label: 'Owner-Occupied (Principal Residence)' },
          { value: 'no', label: 'Investment/Rental Property' },
        ],
        helpText: 'Do you live in this property as your primary residence?'
      },
      {
        name: 'seniorExemption',
        label: 'Senior Exemption (Age 70+)',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Senior Exemption' },
          { value: 'senior', label: 'Qualify for Senior Exemption' },
        ],
        helpText: 'Additional exemption if you are 70+ and meet income requirements'
      },
      {
        name: 'veteranExemption',
        label: 'Veteran Exemption',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Veteran Exemption' },
          { value: 'veteran', label: 'Disabled Veteran Exemption' },
        ],
        helpText: 'Additional exemption for disabled veterans'
      }
    ],
    results: [
      {
        name: 'exemptionAmount',
        label: 'Residential Exemption Amount',
        type: 'currency',
        helpText: '35% of average residential assessed value in Boston'
      },
      {
        name: 'taxableValue',
        label: 'Taxable Value After Exemption',
        type: 'currency',
        helpText: 'Assessed value minus exemption amount'
      },
      {
        name: 'annualTaxWithExemption',
        label: 'Annual Property Tax (With Exemption)',
        type: 'currency',
        helpText: 'Your estimated annual tax with residential exemption'
      },
      {
        name: 'annualTaxWithoutExemption',
        label: 'Annual Property Tax (Without Exemption)',
        type: 'currency',
        helpText: 'What you would pay without the exemption'
      },
      {
        name: 'annualSavings',
        label: 'Annual Tax Savings',
        type: 'currency',
        helpText: 'How much you save per year with the exemption'
      },
      {
        name: 'monthlySavings',
        label: 'Monthly Tax Savings',
        type: 'currency',
        helpText: 'Monthly savings for budgeting purposes'
      },
      {
        name: 'quarterlyBill',
        label: 'Quarterly Tax Bill (With Exemption)',
        type: 'currency',
        helpText: 'Your quarterly property tax payment amount'
      },
      {
        name: 'tenYearSavings',
        label: '10-Year Total Savings',
        type: 'currency',
        helpText: 'Total tax savings over 10 years (assuming exemption grows 5.5% annually)'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const assessedValue = parseFloat(inputs.assessedValue) || 0;
      const fiscalYear = inputs.fiscalYear || '2024';
      const ownerOccupied = inputs.ownerOccupied === 'yes';
      const seniorExemption = inputs.seniorExemption === 'senior';
      const veteranExemption = inputs.veteranExemption === 'veteran';

      const exemptionAmounts: Record<string, number> = {
        '2024': 367044,
        '2023': 349307,
        '2022': 331549,
      };

      const taxRates: Record<string, number> = {
        '2024': 10.40,
        '2023': 10.53,
        '2022': 10.56,
      };

      const exemptionAmount = ownerOccupied ? exemptionAmounts[fiscalYear] : 0;
      const taxRate = taxRates[fiscalYear];

      let additionalExemptions = 0;
      if (seniorExemption) additionalExemptions += 1500 / taxRate * 1000;
      if (veteranExemption) additionalExemptions += 1000 / taxRate * 1000;

      const totalExemption = exemptionAmount + additionalExemptions;
      const taxableValue = Math.max(0, assessedValue - totalExemption);

      const annualTaxWithExemption = Math.round((taxableValue / 1000) * taxRate);
      const annualTaxWithoutExemption = Math.round((assessedValue / 1000) * taxRate);
      const annualSavings = annualTaxWithoutExemption - annualTaxWithExemption;
      const monthlySavings = Math.round(annualSavings / 12);
      const quarterlyBill = Math.round(annualTaxWithExemption / 4);

      let tenYearSavings = 0;
      let currentExemption = exemptionAmount;
      for (let year = 0; year < 10; year++) {
        const yearTaxableValue = Math.max(0, assessedValue - currentExemption - additionalExemptions);
        const yearTaxWithExemption = (yearTaxableValue / 1000) * taxRate;
        const yearTaxWithout = (assessedValue / 1000) * taxRate;
        tenYearSavings += yearTaxWithout - yearTaxWithExemption;
        currentExemption *= 1.055;
      }
      tenYearSavings = Math.round(tenYearSavings);

      return {
        exemptionAmount: Math.round(totalExemption),
        taxableValue: Math.round(taxableValue),
        annualTaxWithExemption,
        annualTaxWithoutExemption,
        annualSavings,
        monthlySavings,
        quarterlyBill,
        tenYearSavings,
      };
    }
  }
};
