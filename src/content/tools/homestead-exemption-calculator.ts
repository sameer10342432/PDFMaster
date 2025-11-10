import { CalculatorContent } from '@/types';

export const HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Homestead Exemption Calculator (by State)',
  description: 'Calculate property tax savings from homestead exemptions across different states',
  slug: 'homestead-exemption-calculator',
  icon: '🏠',
  category: 'Financial Planning',
  article: {
    title: 'Complete Guide to Homestead Exemptions',
    content: `
    <h2>Understanding Homestead Exemptions</h2>
    <p>A homestead exemption reduces your home's assessed value for property tax purposes, lowering your annual tax bill. Each state offers different exemption amounts and eligibility requirements for primary residences.</p>
    
    <h3>How Homestead Exemptions Work</h3>
    <ul>
      <li><strong>Assessment Reduction:</strong> Exemption amount is subtracted from your home's assessed value</li>
      <li><strong>Tax Savings:</strong> You pay property taxes only on the reduced value</li>
      <li><strong>Primary Residence:</strong> Must be your principal residence as of January 1</li>
      <li><strong>Annual Application:</strong> Some states require yearly filing, others are automatic after initial application</li>
      <li><strong>Portability:</strong> Some states allow transferring exemption when you move</li>
    </ul>

    <h3>State Exemption Amounts (Examples)</h3>
    <p><strong>Florida:</strong> $50,000 exemption (first $25,000 applies to all taxes, second $25,000 excludes school taxes)</p>
    <p><strong>Texas:</strong> $40,000 for school district taxes, additional exemptions for seniors, disabled</p>
    <p><strong>California:</strong> $7,000 assessed value exemption for owner-occupied homes</p>
    <p><strong>Georgia:</strong> $2,000 standard exemption from county and school taxes</p>
    <p><strong>Illinois:</strong> Up to $10,000 reduction in assessed value in Cook County</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Select your state, enter your home's assessed value and local tax rate. The calculator determines:</p>
    <ul>
      <li>Applicable exemption amount for your state</li>
      <li>Taxable value after exemption</li>
      <li>Annual property tax before and after exemption</li>
      <li>Your total tax savings</li>
      <li>Lifetime savings projection</li>
    </ul>

    <h3>Special Exemptions</h3>
    <p><strong>Senior Citizens:</strong> Many states offer additional exemptions for homeowners 65+, ranging from $5,000 to complete exemption of first $250,000 value.</p>
    <p><strong>Disabled Veterans:</strong> Disabled veterans often receive enhanced exemptions, with 100% disabled veterans potentially paying no property taxes in some states.</p>
    <p><strong>Disabled Persons:</strong> Permanent disability may qualify for additional exemptions similar to senior benefits.</p>
    
    <h3>Application Process</h3>
    <p>File with your county tax assessor or appraisal district. Required documents typically include proof of ownership, driver's license showing property address, and completed exemption form. Application deadline is usually March 1 for that tax year. Late applications may be accepted with penalty in some jurisdictions.</p>
    
    <h3>Common Mistakes to Avoid</h3>
    <p>Missing application deadlines, failing to notify assessor when moving, claiming exemption on non-primary residence (fraud), not reapplying when required, and forgetting to apply for additional exemptions you qualify for (senior, disabled veteran, etc.).</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'state',
        label: 'State',
        type: 'select',
        options: [
          { value: 'florida', label: 'Florida ($50,000)' },
          { value: 'texas', label: 'Texas ($40,000 school)' },
          { value: 'california', label: 'California ($7,000)' },
          { value: 'georgia', label: 'Georgia ($2,000)' },
          { value: 'illinois', label: 'Illinois ($10,000)' },
          { value: 'alabama', label: 'Alabama ($4,000-$5,000)' },
          { value: 'louisiana', label: 'Louisiana ($75,000)' },
          { value: 'mississippi', label: 'Mississippi ($300,000 assessed)' },
          { value: 'south_carolina', label: 'South Carolina ($50,000)' },
          { value: 'other', label: 'Other/Custom' },
        ],
        defaultValue: 'florida',
      },
      {
        name: 'customExemption',
        label: 'Custom Exemption Amount (if Other)',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'assessedValue',
        label: 'Home Assessed Value',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'taxRate',
        label: 'Property Tax Rate (per $1,000)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'seniorExemption',
        label: 'Senior Citizen (65+)',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'seniorExemptionAmount',
        label: 'Additional Senior Exemption',
        type: 'number',
        defaultValue: 25000,
      },
      {
        name: 'disabledVeteran',
        label: 'Disabled Veteran',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'veteranExemptionAmount',
        label: 'Veteran Exemption Amount',
        type: 'number',
        defaultValue: 50000,
      },
    ],
    results: [
      { label: 'Base Homestead Exemption', isCurrency: true },
      { label: 'Additional Exemptions', isCurrency: true },
      { label: 'Total Exemption', isCurrency: true },
      { label: 'Taxable Value', isCurrency: true },
      { label: 'Annual Tax Without Exemption', isCurrency: true },
      { label: 'Annual Tax With Exemption', isCurrency: true },
      { label: 'Annual Tax Savings', isCurrency: true },
      { label: '10-Year Tax Savings', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        state,
        customExemption,
        assessedValue,
        taxRate,
        seniorExemption,
        seniorExemptionAmount,
        disabledVeteran,
        veteranExemptionAmount,
      } = values;

      // Base exemption by state
      const stateExemptions: Record<string, number> = {
        florida: 50000,
        texas: 40000,
        california: 7000,
        georgia: 2000,
        illinois: 10000,
        alabama: 4500,
        louisiana: 75000,
        mississippi: 300000,
        south_carolina: 50000,
        other: customExemption,
      };
      
      const baseExemption = stateExemptions[state as string] || customExemption;
      
      // Additional exemptions
      let additionalExemptions = 0;
      if (seniorExemption) {
        additionalExemptions += seniorExemptionAmount;
      }
      if (disabledVeteran) {
        additionalExemptions += veteranExemptionAmount;
      }
      
      const totalExemption = baseExemption + additionalExemptions;
      const taxableValue = Math.max(0, assessedValue - totalExemption);
      
      // Property tax calculation (rate is per $1,000 of assessed value)
      const annualTaxWithoutExemption = (assessedValue / 1000) * taxRate;
      const annualTaxWithExemption = (taxableValue / 1000) * taxRate;
      const annualSavings = annualTaxWithoutExemption - annualTaxWithExemption;
      const tenYearSavings = annualSavings * 10;

      return [
        { label: 'Base Homestead Exemption', value: baseExemption.toFixed(2), isCurrency: true },
        { label: 'Additional Exemptions', value: additionalExemptions.toFixed(2), isCurrency: true },
        { label: 'Total Exemption', value: totalExemption.toFixed(2), isCurrency: true },
        { label: 'Taxable Value', value: taxableValue.toFixed(2), isCurrency: true },
        { label: 'Annual Tax Without Exemption', value: annualTaxWithoutExemption.toFixed(2), isCurrency: true },
        { label: 'Annual Tax With Exemption', value: annualTaxWithExemption.toFixed(2), isCurrency: true },
        { label: 'Annual Tax Savings', value: annualSavings.toFixed(2), isCurrency: true },
        { label: '10-Year Tax Savings', value: tenYearSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
