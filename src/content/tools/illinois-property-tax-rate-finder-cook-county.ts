import { CalculatorContent } from '@/types';

export const ILLINOIS_PROPERTY_TAX_RATE_FINDER_COOK_COUNTY_CONTENT: CalculatorContent = {
  title: 'Illinois Property Tax Rate Finder (Cook County)',
  description: 'Find accurate property tax rates for Cook County, Illinois municipalities and calculate your estimated annual property tax bill',
  slug: 'illinois-property-tax-rate-finder-cook-county',
  icon: '🏛️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Cook County, Illinois Property Taxes',
    content: `
    <h2>Cook County Property Tax Guide</h2>
    <p>Cook County, Illinois has one of the <strong>highest property tax rates in the United States</strong>, with effective rates ranging from 1.73% to over 3.5% depending on your municipality. Understanding these rates is crucial for homeowners, buyers, and investors in the Chicago metropolitan area.</p>
    
    <h3>How Cook County Property Taxes Work</h3>
    <p>Cook County property taxes are unique compared to most of the country:</p>
    <ul>
      <li><strong>Assessed Value:</strong> Properties are assessed at 10% of market value for residential properties</li>
      <li><strong>Equalized Assessed Value (EAV):</strong> The assessed value adjusted by an equalization factor set by the state</li>
      <li><strong>Multiple Tax Districts:</strong> Your total rate combines county, township, municipality, school district, and special district taxes</li>
      <li><strong>Homeowner Exemptions:</strong> Various exemptions can significantly reduce your tax burden</li>
    </ul>
    
    <h3>Cook County Property Tax Rates by Area (2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Municipality</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Effective Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Tax on $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Chicago (Loop)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.05%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,150</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Chicago (North Side)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.31%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,930</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Evanston</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.64%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,920</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Oak Park</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.87%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,610</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Berwyn</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.12%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,360</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Harvey</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.56%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,680</td>
      </tr>
    </table>
    
    <h3>Understanding Your Tax Bill Components</h3>
    <p>A typical Cook County property tax bill includes multiple layers of taxation:</p>
    <ul>
      <li><strong>School District Tax:</strong> Usually 50-60% of your total bill</li>
      <li><strong>Municipal Tax:</strong> City or village services (police, fire, infrastructure)</li>
      <li><strong>Township Tax:</strong> Local government services</li>
      <li><strong>County Tax:</strong> Cook County operations</li>
      <li><strong>Special Districts:</strong> Library, park, sanitation, water districts</li>
    </ul>
    
    <h3>Cook County Homeowner Exemptions</h3>
    <p>These exemptions can save thousands annually:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exemption Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Reduction in EAV</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Estimated Annual Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Homeowner Exemption</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600 - $900</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Senior Citizen (Age 65+)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$480 - $720</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Senior Freeze (Income < $65K)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">Variable</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $2,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Veterans with Disabilities</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500 - $5,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$150 - $450</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Disabled Persons</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$120 - $180</td>
      </tr>
    </table>
    
    <h3>Highest vs. Lowest Tax Rates in Cook County</h3>
    <p><strong>Highest Property Tax Areas:</strong></p>
    <ul>
      <li><strong>Harvey:</strong> 3.56% effective rate - Highest in Cook County</li>
      <li><strong>Dolton:</strong> 3.47% effective rate</li>
      <li><strong>Ford Heights:</strong> 3.41% effective rate</li>
      <li><strong>Berwyn:</strong> 3.12% effective rate</li>
      <li><strong>Cicero:</strong> 3.08% effective rate</li>
    </ul>
    <p><strong>Lowest Property Tax Areas:</strong></p>
    <ul>
      <li><strong>Winnetka:</strong> 1.73% effective rate - Lowest in Cook County</li>
      <li><strong>Glencoe:</strong> 1.78% effective rate</li>
      <li><strong>Kenilworth:</strong> 1.82% effective rate</li>
      <li><strong>Wilmette:</strong> 1.95% effective rate</li>
    </ul>
    
    <h3>Why Cook County Taxes Are So High</h3>
    <p>Several factors contribute to Cook County's high property tax burden:</p>
    <ul>
      <li><strong>School Funding:</strong> Illinois relies heavily on property taxes to fund schools</li>
      <li><strong>Pension Obligations:</strong> Massive public employee pension debt</li>
      <li><strong>Municipal Debt:</strong> Many Cook County municipalities carry high debt loads</li>
      <li><strong>Home Rule:</strong> Many municipalities have home rule authority to raise taxes</li>
      <li><strong>Tax Increment Financing (TIF) Districts:</strong> Divert property tax revenue to development projects</li>
    </ul>
    
    <h3>Property Tax Payment Schedule</h3>
    <p>Cook County property taxes are paid in arrears, meaning you pay for the previous year:</p>
    <ul>
      <li><strong>First Installment:</strong> Due March 1st (55% of prior year's total bill)</li>
      <li><strong>Second Installment:</strong> Due August 1st (based on current year assessment, minus first installment)</li>
      <li><strong>Grace Period:</strong> 30 days after due date before penalties apply</li>
      <li><strong>Penalty:</strong> 1.5% per month on unpaid balance</li>
    </ul>
    
    <h3>How to Appeal Your Cook County Assessment</h3>
    <p>If you believe your property is over-assessed, you can appeal:</p>
    <ul>
      <li><strong>Timing:</strong> Appeals filed during designated appeal period (usually spring/summer)</li>
      <li><strong>Evidence Needed:</strong> Comparable sales, appraisals, or photos showing property condition</li>
      <li><strong>Process:</strong> File with Cook County Assessor's Office or Board of Review</li>
      <li><strong>Success Rate:</strong> Approximately 60% of appeals result in some reduction</li>
      <li><strong>Cost:</strong> DIY is free; property tax attorneys charge 30-35% of savings</li>
    </ul>
    
    <h3>Triennial Reassessment Schedule</h3>
    <p>Cook County reassesses properties on a three-year rotating schedule by township:</p>
    <ul>
      <li><strong>2024:</strong> City of Chicago reassessment year</li>
      <li><strong>2025:</strong> North and Northwest suburbs</li>
      <li><strong>2026:</strong> South and West suburbs</li>
    </ul>
    <p>During reassessment years, property values may change significantly based on market conditions.</p>
    
    <h3>Investment Considerations</h3>
    <p>When investing in Cook County real estate, property taxes significantly impact returns:</p>
    <ul>
      <li><strong>Cash Flow Impact:</strong> High taxes reduce rental income by $400-$700 per month on average properties</li>
      <li><strong>Cap Rate Compression:</strong> High taxes lower effective cap rates by 1-2%</li>
      <li><strong>Tenant Resistance:</strong> In rent-burdened areas, high taxes limit rent increase potential</li>
      <li><strong>Location Strategy:</strong> Lower-tax suburbs (Winnetka, Glencoe) offer better long-term appreciation</li>
    </ul>
    
    <h3>Tax Impact on Home Affordability</h3>
    <p>Cook County property taxes substantially affect mortgage affordability:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Home Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Tax (2.5% rate)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Tax</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$417</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$625</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,042</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,563</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$18,750</td>
      </tr>
    </table>
    
    <h3>Strategies to Minimize Cook County Property Taxes</h3>
    <p>Smart strategies to reduce your property tax burden:</p>
    <ul>
      <li><strong>Apply for All Exemptions:</strong> File homeowner, senior, and other applicable exemptions</li>
      <li><strong>Appeal Regularly:</strong> Appeal during your reassessment year if comparable sales support lower value</li>
      <li><strong>Choose Location Wisely:</strong> North Shore suburbs have lower rates despite higher home values</li>
      <li><strong>Monitor Assessment:</strong> Check your assessment notice carefully each year for errors</li>
      <li><strong>Consider Tax Attorney:</strong> For properties over $400K, professional appeals often worthwhile</li>
    </ul>
    
    <h3>Cook County vs. Collar Counties</h3>
    <p>Comparing Cook County to surrounding counties:</p>
    <ul>
      <li><strong>DuPage County:</strong> Average 2.15% rate (13% lower than Cook)</li>
      <li><strong>Lake County:</strong> Average 2.28% rate (8% lower than Cook)</li>
      <li><strong>Will County:</strong> Average 2.35% rate (5% lower than Cook)</li>
      <li><strong>Kane County:</strong> Average 2.42% rate (2% lower than Cook)</li>
    </ul>
    <p>Moving to collar counties can save thousands annually, but consider commute costs and home values.</p>
    
    <h3>Future Property Tax Outlook</h3>
    <p>Cook County property taxes are expected to continue rising:</p>
    <ul>
      <li><strong>Pension Crisis:</strong> $137 billion in unfunded pension liabilities statewide</li>
      <li><strong>School Funding:</strong> Continued reliance on property taxes for education</li>
      <li><strong>Municipal Debt:</strong> Many cities increasing taxes to cover debt service</li>
      <li><strong>Expected Increase:</strong> 3-5% annual increases projected through 2030</li>
    </ul>
    
    <h3>Resources and Tools</h3>
    <p>Helpful resources for Cook County property taxpayers:</p>
    <ul>
      <li><strong>Cook County Assessor:</strong> cookcountyassessor.com for property valuations</li>
      <li><strong>Cook County Treasurer:</strong> cookcountytreasurer.com to pay taxes online</li>
      <li><strong>Illinois Property Tax Appeal Board:</strong> State-level appeals</li>
      <li><strong>BGA Tax Appeal Tool:</strong> Better Government Association's free appeal assistance</li>
      <li><strong>Property Tax Portal:</strong> cookcountypropertyinfo.com for historical tax data</li>
    </ul>
    `,
  },
  calculator: {
    fields: [
      {
        id: 'propertyValue',
        label: 'Property Market Value',
        type: 'currency',
        defaultValue: 300000,
        min: 50000,
        max: 5000000,
        step: 10000,
        required: true,
        placeholder: 'Enter property market value',
        helpText: 'Estimated market value of the property',
      },
      {
        id: 'municipality',
        label: 'Municipality/Area',
        type: 'select',
        defaultValue: 'chicago-loop',
        required: true,
        options: [
          { value: 'chicago-loop', label: 'Chicago (Loop) - 2.05%' },
          { value: 'chicago-north', label: 'Chicago (North Side) - 2.31%' },
          { value: 'chicago-south', label: 'Chicago (South Side) - 2.18%' },
          { value: 'chicago-west', label: 'Chicago (West Side) - 2.27%' },
          { value: 'evanston', label: 'Evanston - 2.64%' },
          { value: 'oak-park', label: 'Oak Park - 2.87%' },
          { value: 'skokie', label: 'Skokie - 2.41%' },
          { value: 'berwyn', label: 'Berwyn - 3.12%' },
          { value: 'cicero', label: 'Cicero - 3.08%' },
          { value: 'harvey', label: 'Harvey - 3.56%' },
          { value: 'dolton', label: 'Dolton - 3.47%' },
          { value: 'winnetka', label: 'Winnetka - 1.73%' },
          { value: 'glencoe', label: 'Glencoe - 1.78%' },
          { value: 'wilmette', label: 'Wilmette - 1.95%' },
          { value: 'palatine', label: 'Palatine - 2.52%' },
          { value: 'schaumburg', label: 'Schaumburg - 2.38%' },
        ],
        helpText: 'Select your municipality to get accurate tax rate',
      },
      {
        id: 'homeownerExemption',
        label: 'Homeowner Exemption',
        type: 'boolean',
        defaultValue: true,
        helpText: 'Do you qualify for the homeowner exemption? (Primary residence)',
      },
      {
        id: 'seniorExemption',
        label: 'Senior Citizen Exemption (65+)',
        type: 'boolean',
        defaultValue: false,
        helpText: 'Are you 65 or older?',
      },
      {
        id: 'seniorFreeze',
        label: 'Senior Freeze Exemption',
        type: 'boolean',
        defaultValue: false,
        helpText: 'Senior with household income under $65,000?',
      },
    ],
    results: [
      {
        id: 'effectiveTaxRate',
        label: 'Effective Tax Rate',
        format: 'percentage',
        helpText: 'Your total property tax rate including all districts',
      },
      {
        id: 'assessedValue',
        label: 'Assessed Value (10% of Market)',
        format: 'currency',
        helpText: 'Illinois residential assessment is 10% of market value',
      },
      {
        id: 'exemptionAmount',
        label: 'Total Exemptions (EAV Reduction)',
        format: 'currency',
        helpText: 'Total reduction in equalized assessed value from exemptions',
      },
      {
        id: 'taxableEAV',
        label: 'Taxable Equalized Assessed Value',
        format: 'currency',
        helpText: 'Assessed value after exemptions are applied',
      },
      {
        id: 'annualTax',
        label: 'Estimated Annual Property Tax',
        format: 'currency',
        primary: true,
        helpText: 'Your total annual property tax bill',
      },
      {
        id: 'monthlyTax',
        label: 'Monthly Tax Amount',
        format: 'currency',
        helpText: 'Monthly property tax (for budgeting purposes)',
      },
      {
        id: 'firstInstallment',
        label: 'First Installment (Due March 1)',
        format: 'currency',
        helpText: '55% of prior year tax bill',
      },
      {
        id: 'secondInstallment',
        label: 'Second Installment (Due August 1)',
        format: 'currency',
        helpText: 'Remaining balance of current year tax',
      },
      {
        id: 'taxSavingsFromExemptions',
        label: 'Annual Savings from Exemptions',
        format: 'currency',
        helpText: 'How much you save annually from exemptions',
      },
    ],
    calculate: (inputs: Record<string, number | string | boolean>) => {
      const propertyValue = Number(inputs.propertyValue) || 300000;
      const municipality = String(inputs.municipality);
      const homeownerExemption = Boolean(inputs.homeownerExemption);
      const seniorExemption = Boolean(inputs.seniorExemption);
      const seniorFreeze = Boolean(inputs.seniorFreeze);

      const taxRates: Record<string, number> = {
        'chicago-loop': 0.0205,
        'chicago-north': 0.0231,
        'chicago-south': 0.0218,
        'chicago-west': 0.0227,
        'evanston': 0.0264,
        'oak-park': 0.0287,
        'skokie': 0.0241,
        'berwyn': 0.0312,
        'cicero': 0.0308,
        'harvey': 0.0356,
        'dolton': 0.0347,
        'winnetka': 0.0173,
        'glencoe': 0.0178,
        'wilmette': 0.0195,
        'palatine': 0.0252,
        'schaumburg': 0.0238,
      };

      const effectiveTaxRate = taxRates[municipality] || 0.025;
      const assessedValue = propertyValue * 0.10;

      let exemptionAmount = 0;
      if (homeownerExemption) exemptionAmount += 10000;
      if (seniorExemption) exemptionAmount += 8000;
      if (seniorFreeze) exemptionAmount += 5000;

      const taxableEAV = Math.max(0, assessedValue - exemptionAmount);

      const annualTaxWithoutExemptions = assessedValue * effectiveTaxRate;
      const annualTax = taxableEAV * effectiveTaxRate;
      const monthlyTax = annualTax / 12;
      const firstInstallment = annualTax * 0.55;
      const secondInstallment = annualTax * 0.45;
      const taxSavingsFromExemptions = annualTaxWithoutExemptions - annualTax;

      return {
        effectiveTaxRate: effectiveTaxRate * 100,
        assessedValue,
        exemptionAmount,
        taxableEAV,
        annualTax,
        monthlyTax,
        firstInstallment,
        secondInstallment,
        taxSavingsFromExemptions,
      };
    },
  },
};
