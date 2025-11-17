import { CalculatorContent } from '@/types';

export const ALASKA_PFD_HOUSING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Alaska Permanent Fund Dividend (PFD) Housing Calculator',
  description: 'Calculate how Alaska Permanent Fund Dividend payments impact housing affordability, mortgage qualification, and rent-to-income ratios in Alaska communities.',
  slug: 'alaska-pfd-housing-calculator',
  icon: '🏔️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Alaska PFD and Housing Affordability',
    content: `
    <h2>Alaska Permanent Fund Dividend (PFD) and Housing Guide</h2>
    <p>Alaska's <strong>Permanent Fund Dividend (PFD)</strong> is a unique annual payment distributed to Alaska residents from the state's oil wealth fund. For many Alaskans, this $1,000-$3,000+ annual payment significantly impacts housing affordability, mortgage qualification, and financial planning.</p>
    
    <h3>What is the Alaska Permanent Fund Dividend?</h3>
    <p>The PFD is an annual cash payment to Alaska residents:</p>
    <ul>
      <li><strong>Eligibility:</strong> Alaska residents who lived in state for full calendar year</li>
      <li><strong>Payment Amount (2024):</strong> $1,312 per person</li>
      <li><strong>Payment Timing:</strong> Typically distributed in October</li>
      <li><strong>Household Benefit:</strong> Family of 4 receives ~$5,000+ annually</li>
      <li><strong>Qualification:</strong> Must apply annually by March 31st</li>
    </ul>
    
    <h3>Historical PFD Payment Amounts</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">PFD Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Family of 4 Total</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2020</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$992</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,968</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2021</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,114</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,456</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2022</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,284</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,136</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2023</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,312</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,248</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2024</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,702</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,808</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Historical Average</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>~$1,600</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>~$6,400</strong></td>
      </tr>
    </table>
    
    <h3>PFD Impact on Housing Affordability</h3>
    <p>The annual PFD payment significantly improves housing affordability for Alaska families:</p>
    <ul>
      <li><strong>Monthly Housing Boost:</strong> $1,600 PFD = $133/month additional housing budget</li>
      <li><strong>Family Advantage:</strong> Family of 4 gets $6,400 = $533/month toward housing</li>
      <li><strong>Down Payment Assistance:</strong> Many Alaskans save PFDs for home down payments</li>
      <li><strong>Rent Payment:</strong> One month's PFD often covers winter rent expenses</li>
    </ul>
    
    <h3>Using PFD for Mortgage Qualification</h3>
    <p>Lenders' treatment of PFD varies:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Lender Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">PFD Treatment</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Documentation Required</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Alaska-Based Credit Unions</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Count as income (averaged over 2 years)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2 years PFD history</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">National Lenders</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Usually NOT counted as income</td>
        <td style="border: 1px solid #ddd; padding: 8px;">N/A</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">FHA/VA Loans</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Case-by-case (usually excluded)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Underwriter discretion</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Alaska Housing Finance Corp</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Accepted as supplemental income</td>
        <td style="border: 1px solid #ddd; padding: 8px;">PFD application history</td>
      </tr>
    </table>
    
    <h3>Alaska Housing Costs by Community</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Community</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Median Home Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Avg Monthly Rent (2BR)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Anchorage</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,400</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Fairbanks</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$315,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Juneau</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$475,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Wasilla/Palmer</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$380,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,350</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kenai/Soldotna</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$325,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,100</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rural Bush Communities</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150,000-$250,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800-$1,500</td>
      </tr>
    </table>
    
    <h3>PFD as Down Payment Source</h3>
    <p>Many Alaskans strategically save PFDs for home down payments:</p>
    <ul>
      <li><strong>5-Year Strategy:</strong> Family of 4 saving PFDs = ~$32,000 down payment</li>
      <li><strong>10-Year Strategy:</strong> ~$64,000+ saved (plus investment growth)</li>
      <li><strong>Children's PFDs:</strong> Save kids' PFDs from birth to age 18 = $28,800+ per child</li>
      <li><strong>Lender Acceptance:</strong> Seasoned PFD savings accepted as down payment source</li>
    </ul>
    
    <h3>How PFD Improves Rent-to-Income Ratio</h3>
    <p>The PFD effectively reduces rent burden:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Rent</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Income Without PFD</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rent % of Income</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Single, No PFD Considered</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">34%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Single, With PFD ($1,600/yr)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,633</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">33%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Family of 4, No PFD Considered</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">33%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Family of 4, With PFD ($6,400/yr)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,033</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">30%</td>
      </tr>
    </table>
    
    <h3>Strategic Uses of PFD for Housing</h3>
    <p>Smart ways Alaskans leverage the PFD for housing:</p>
    <ol>
      <li><strong>Emergency Fund:</strong> Save entire PFD as 6-month rent backup</li>
      <li><strong>Winter Heating Offset:</strong> Use PFD to cover high winter heating bills ($200-$400/month)</li>
      <li><strong>Principal Paydown:</strong> Make annual lump-sum mortgage principal payment</li>
      <li><strong>Property Tax Payment:</strong> Cover annual property tax bill in October</li>
      <li><strong>Home Repairs:</strong> Fund annual maintenance (roof, furnace, etc.)</li>
      <li><strong>Rental Deposit:</strong> New residents use PFD as first/last month deposit</li>
    </ol>
    
    <h3>PFD Eligibility Requirements</h3>
    <p>To qualify for the annual PFD:</p>
    <ul>
      <li><strong>Residency:</strong> Alaska resident for entire prior calendar year (January 1 - December 31)</li>
      <li><strong>Intent:</strong> Intent to remain Alaska resident indefinitely</li>
      <li><strong>Physical Presence:</strong> Cannot be absent from Alaska for more than 180 days (with exceptions)</li>
      <li><strong>Application:</strong> Must file application by March 31st annually</li>
      <li><strong>Not Incarcerated:</strong> No felony convictions during qualifying year</li>
    </ul>
    
    <h3>Effect on Landlord-Tenant Dynamics</h3>
    <p>PFD season (October) creates unique rental market patterns:</p>
    <ul>
      <li><strong>Rent Payments:</strong> Many tenants pay 2-3 months rent in advance with PFD</li>
      <li><strong>Move-In Season:</strong> October surge in apartment applications (PFD deposit funds)</li>
      <li><strong>Lease Timing:</strong> Some landlords structure leases to align with October PFD payment</li>
      <li><strong>Security Deposits:</strong> PFD commonly used for last month's rent + deposits</li>
    </ul>
    
    <h3>Alaska-Specific Mortgage Programs</h3>
    <p>State programs designed for Alaska residents:</p>
    <ul>
      <li><strong>Alaska Housing Finance Corporation (AHFC):</strong> Down payment assistance programs</li>
      <li><strong>Rural/Native Programs:</strong> Special loans for Alaska Native communities</li>
      <li><strong>Energy Efficient Mortgages:</strong> Extra funds for weatherization/insulation</li>
      <li><strong>VA Loans:</strong> Military presence makes VA loans very common</li>
    </ul>
    
    <h3>High Cost of Living Offset</h3>
    <p>Alaska has significantly higher living costs than Lower 48:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Expense</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Alaska</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Lower 48 Average</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">% Higher</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Utilities (Winter)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$350/month</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150/month</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+133%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Groceries</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$650/month</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400/month</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+63%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fuel Oil (Heating)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500/year</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800/year</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+213%</td>
      </tr>
    </table>
    <p>The PFD helps offset these higher costs, especially for families.</p>
    
    <h3>Tax Treatment of PFD</h3>
    <p>Important tax considerations:</p>
    <ul>
      <li><strong>Federal Taxes:</strong> PFD is considered taxable income by IRS</li>
      <li><strong>State Taxes:</strong> Alaska has NO state income tax</li>
      <li><strong>Form 1099-MISC:</strong> State issues 1099 for federal tax reporting</li>
      <li><strong>Tax Rate Impact:</strong> $1,600 PFD increases federal tax ~$350 (22% bracket)</li>
    </ul>
    
    <h3>PFD Future Uncertainty</h3>
    <p>The PFD's future is subject to ongoing political debate:</p>
    <ul>
      <li><strong>Budget Pressures:</strong> State faces deficits from low oil prices</li>
      <li><strong>Formula Debates:</strong> Legislature vs. traditional calculation formula</li>
      <li><strong>2022 Spike:</strong> $3,284 payment included back-payments, unlikely to repeat</li>
      <li><strong>Typical Range:</strong> $1,000-$2,000 per person is realistic expectation</li>
      <li><strong>Constitutional Protection:</strong> PFD protected in Alaska Constitution</li>
    </ul>
    
    <h3>Comparison to Other State Programs</h3>
    <p>Alaska's PFD is unique among US states:</p>
    <ul>
      <li><strong>No Other State:</strong> No other state has universal cash payment to all residents</li>
      <li><strong>Sovereign Wealth Fund:</strong> $78 billion Alaska Permanent Fund (2024)</li>
      <li><strong>Oil Revenue Source:</strong> Funded by oil lease royalties and investment returns</li>
      <li><strong>Since 1982:</strong> Annual payments for 42+ years</li>
    </ul>
    
    <h3>PFD and Remote Work</h3>
    <p>Remote work trends affecting Alaska residency:</p>
    <ul>
      <li><strong>Remote Worker Influx:</strong> Lower 48 workers moving to Alaska for PFD + lifestyle</li>
      <li><strong>Residency Verification:</strong> Stricter enforcement to prevent PFD fraud</li>
      <li><strong>365-Day Rule:</strong> Must be in Alaska full year to qualify (limits "PFD tourism")</li>
      <li><strong>Intent Requirement:</strong> Must prove indefinite Alaska residency intent</li>
    </ul>
    
    <h3>Housing Market Impacts</h3>
    <p>How PFD affects Alaska housing market:</p>
    <ul>
      <li><strong>October Sales Bump:</strong> Home sales increase post-PFD payment</li>
      <li><strong>Down Payment Boost:</strong> First-time buyers use saved PFDs</li>
      <li><strong>Refinance Timing:</strong> Homeowners refinance and use PFD to pay costs</li>
      <li><strong>Market Stability:</strong> PFD provides household income stability supporting housing demand</li>
    </ul>
    
    <h3>Planning for Variable PFD Amounts</h3>
    <p>Best practices given PFD uncertainty:</p>
    <ul>
      <li><strong>Conservative Budgeting:</strong> Budget housing based on wages only, treat PFD as bonus</li>
      <li><strong>Build Emergency Fund:</strong> Don't rely on PFD for monthly housing payments</li>
      <li><strong>Average Multi-Year:</strong> If counting PFD, average past 5 years (~$1,600)</li>
      <li><strong>Separate Savings:</strong> Deposit PFD to savings, not checking account</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Alaska Permanent Fund Corporation:</strong> apfc.org - Official PFD information</li>
      <li><strong>PFD Division:</strong> pfd.alaska.gov - Apply for PFD, check status</li>
      <li><strong>Alaska Housing Finance Corporation:</strong> ahfc.us - State housing programs</li>
      <li><strong>Application Deadline:</strong> March 31st annually</li>
      <li><strong>PFD Hotline:</strong> 907-465-2323</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'householdSize',
        label: 'Household Size',
        type: 'select',
        required: true,
        options: [
          { value: '1', label: '1 Person' },
          { value: '2', label: '2 People' },
          { value: '3', label: '3 People' },
          { value: '4', label: '4 People' },
          { value: '5', label: '5 People' },
          { value: '6', label: '6+ People' },
        ],
        helpText: 'Number of eligible Alaska residents in household'
      },
      {
        name: 'pfdAmount',
        label: 'Expected Annual PFD per Person',
        type: 'currency',
        required: true,
        placeholder: '1600',
        helpText: 'Historical average ~$1,600, 2024 was $1,702'
      },
      {
        name: 'annualIncome',
        label: 'Annual Household Income (wages only)',
        type: 'currency',
        required: true,
        placeholder: '75000',
        helpText: 'Annual income from employment, excluding PFD'
      },
      {
        name: 'monthlyRent',
        label: 'Monthly Rent or Mortgage Payment',
        type: 'currency',
        required: true,
        placeholder: '1400',
        helpText: 'Monthly housing payment (rent or mortgage + taxes + insurance)'
      },
      {
        name: 'community',
        label: 'Alaska Community',
        type: 'select',
        required: true,
        options: [
          { value: 'anchorage', label: 'Anchorage' },
          { value: 'fairbanks', label: 'Fairbanks' },
          { value: 'juneau', label: 'Juneau' },
          { value: 'wasilla-palmer', label: 'Wasilla/Palmer (Mat-Su)' },
          { value: 'kenai-soldotna', label: 'Kenai/Soldotna' },
          { value: 'rural', label: 'Rural Bush Community' },
        ],
        helpText: 'Your Alaska community (affects cost of living adjustments)'
      },
      {
        name: 'housingGoal',
        label: 'Housing Goal',
        type: 'select',
        required: true,
        options: [
          { value: 'current-rent', label: 'Current Renter - Understanding Affordability' },
          { value: 'saving-down', label: 'Saving PFD for Home Down Payment' },
          { value: 'mortgage-qualify', label: 'Using PFD to Qualify for Mortgage' },
          { value: 'current-owner', label: 'Current Homeowner - PFD Planning' },
        ],
        helpText: 'What is your housing goal?'
      },
      {
        name: 'yearsToSave',
        label: 'Years to Save PFD (if saving for down payment)',
        type: 'number',
        required: false,
        placeholder: '5',
        helpText: 'How many years will you save PFD payments?'
      },
      {
        name: 'pfdLenderAcceptance',
        label: 'Lender Counts PFD as Income?',
        type: 'select',
        required: false,
        options: [
          { value: 'no', label: 'No - Lender Does Not Count PFD' },
          { value: 'yes', label: 'Yes - Alaska Lender Counts PFD' },
        ],
        helpText: 'Does your lender count PFD toward qualifying income?'
      }
    ],
    results: [
      {
        name: 'totalHouseholdPFD',
        label: 'Total Annual Household PFD',
        type: 'currency',
        helpText: 'Combined PFD for all household members'
      },
      {
        name: 'monthlyPFDBoost',
        label: 'Monthly Housing Boost from PFD',
        type: 'currency',
        helpText: 'PFD amount divided across 12 months'
      },
      {
        name: 'incomeWithPFD',
        label: 'Annual Income Including PFD',
        type: 'currency',
        helpText: 'Total income when PFD is included'
      },
      {
        name: 'rentToIncomeNoPFD',
        label: 'Rent-to-Income Ratio (No PFD)',
        type: 'text',
        helpText: 'Housing cost as % of income (excluding PFD)'
      },
      {
        name: 'rentToIncomeWithPFD',
        label: 'Rent-to-Income Ratio (With PFD)',
        type: 'text',
        helpText: 'Housing cost as % of income (including PFD)'
      },
      {
        name: 'savedDownPayment',
        label: 'Down Payment Saved (if saving PFDs)',
        type: 'currency',
        helpText: 'Total saved if entire household PFD saved for down payment'
      },
      {
        name: 'monthlyHousingPower',
        label: 'Monthly Housing Affordability',
        type: 'currency',
        helpText: 'Max affordable monthly housing payment (30% of income with PFD)'
      },
      {
        name: 'recommendation',
        label: 'PFD Housing Strategy',
        type: 'text',
        helpText: 'Recommended use of PFD for your housing situation'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const householdSize = parseInt(inputs.householdSize) || 1;
      const pfdAmount = parseFloat(inputs.pfdAmount) || 1600;
      const annualIncome = parseFloat(inputs.annualIncome) || 0;
      const monthlyRent = parseFloat(inputs.monthlyRent) || 0;
      const housingGoal = inputs.housingGoal || 'current-rent';
      const yearsToSave = parseInt(inputs.yearsToSave) || 5;
      const pfdLenderAcceptance = inputs.pfdLenderAcceptance === 'yes';

      const totalHouseholdPFD = pfdAmount * householdSize;
      const monthlyPFDBoost = Math.round(totalHouseholdPFD / 12);

      const incomeWithPFD = annualIncome + totalHouseholdPFD;

      const monthlyIncomeNoPFD = annualIncome / 12;
      const monthlyIncomeWithPFD = incomeWithPFD / 12;

      const rentToIncomeNoPFD = monthlyIncomeNoPFD > 0 ? ((monthlyRent / monthlyIncomeNoPFD) * 100).toFixed(1) + '%' : 'N/A';
      const rentToIncomeWithPFD = ((monthlyRent / monthlyIncomeWithPFD) * 100).toFixed(1) + '%';

      const savedDownPayment = totalHouseholdPFD * yearsToSave;

      const monthlyHousingPower = Math.round(monthlyIncomeWithPFD * 0.30);

      let recommendation = '';
      if (housingGoal === 'saving-down') {
        recommendation = `Save entire household PFD for ${yearsToSave} years = $${savedDownPayment.toLocaleString()} down payment. This equals ${((savedDownPayment / 400000) * 100).toFixed(1)}% down on a $400K home. Consider investing saved PFDs for additional growth.`;
      } else if (housingGoal === 'mortgage-qualify' && pfdLenderAcceptance) {
        recommendation = `Your Alaska lender counts PFD as income, boosting qualifying income by $${monthlyPFDBoost.toLocaleString()}/month. This allows approximately $${Math.round(monthlyPFDBoost * 4 * 12).toLocaleString()} higher mortgage amount (assuming 4x income qualification).`;
      } else if (housingGoal === 'mortgage-qualify' && !pfdLenderAcceptance) {
        recommendation = `Your lender doesn't count PFD, but you can save it for larger down payment or closing costs. ${yearsToSave} years of saved PFDs = $${savedDownPayment.toLocaleString()}.`;
      } else if (housingGoal === 'current-owner') {
        recommendation = `Use your $${totalHouseholdPFD.toLocaleString()} PFD for: (1) Extra mortgage principal payment, (2) Annual property tax, (3) Winter heating costs, or (4) Home maintenance fund. Extra $${totalHouseholdPFD.toLocaleString()} principal payment saves ~$${Math.round(totalHouseholdPFD * 0.4).toLocaleString()} in interest over loan life.`;
      } else {
        const rentBurdenReduction = parseFloat(rentToIncomeNoPFD) - parseFloat(rentToIncomeWithPFD);
        recommendation = `PFD reduces rent burden by ${rentBurdenReduction.toFixed(1)} percentage points. Use PFD to: (1) Pay 2-3 months rent in advance, (2) Build emergency rent fund, or (3) Save for down payment on future home.`;
      }

      return {
        totalHouseholdPFD: Math.round(totalHouseholdPFD),
        monthlyPFDBoost,
        incomeWithPFD: Math.round(incomeWithPFD),
        rentToIncomeNoPFD,
        rentToIncomeWithPFD,
        savedDownPayment: Math.round(savedDownPayment),
        monthlyHousingPower,
        recommendation,
      };
    }
  }
};
