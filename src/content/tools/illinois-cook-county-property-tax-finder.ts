import { CalculatorContent } from '@/types';

export const ILLINOIS_COOK_COUNTY_PROPERTY_TAX_FINDER_CONTENT: CalculatorContent = {
  title: 'Illinois Property Tax Rate Finder (Cook County)',
  description: 'Find and calculate Cook County, Illinois property tax rates by municipality including Chicago, Evanston, Oak Park, and suburbs',
  slug: 'illinois-cook-county-property-tax-finder',
  icon: '🏙️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Cook County Illinois Property Tax Rates',
    content: `
    <h2>Cook County Property Tax System Guide</h2>
    <p>Cook County, Illinois has one of the <strong>highest property tax burdens in the United States</strong>. Understanding how rates vary dramatically across the 130+ municipalities is essential for home buyers and owners in the Chicago metro area.</p>
    
    <h3>How Cook County Property Taxes Work</h3>
    <p>Unlike most states, Illinois property taxes are calculated through a complex multi-layered system:</p>
    <ol>
      <li><strong>Assessment:</strong> Properties assessed at 10% of market value (residential)</li>
      <li><strong>Equalization:</strong> State multiplier applied to maintain constitutional ratios</li>
      <li><strong>Tax Rate:</strong> Combined rates from multiple taxing districts</li>
      <li><strong>Exemptions:</strong> Homeowner and senior exemptions reduce taxable value</li>
    </ol>
    
    <h3>Effective Tax Rates by Area</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Municipality</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Effective Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Chicago</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.05 - 2.30%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,150 - $6,900</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Evanston</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.45 - 2.65%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,350 - $7,950</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Oak Park</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.80 - 3.10%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,400 - $9,300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Naperville</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.65 - 2.95%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,950 - $8,850</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Cicero</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.20 - 3.50%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,600 - $10,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Dolton</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.80 - 4.10%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$11,400 - $12,300</td>
      </tr>
    </table>
    
    <h3>Taxing Districts Explained</h3>
    <p>Your property tax bill includes levies from <strong>multiple overlapping taxing districts</strong>:</p>
    <ul>
      <li><strong>County:</strong> Cook County general services</li>
      <li><strong>Municipality:</strong> City or village services</li>
      <li><strong>School Districts:</strong> Elementary and high school (largest component, 50-65% of total)</li>
      <li><strong>Community College:</strong> District-level higher education</li>
      <li><strong>Park District:</strong> Parks and recreation</li>
      <li><strong>Library District:</strong> Public library services</li>
      <li><strong>Special Districts:</strong> Fire, sanitary, mosquito abatement, etc.</li>
    </ul>
    
    <h3>Cook County Reassessment Cycle</h3>
    <p>Cook County reassesses properties in <strong>3-year cycles</strong> by township:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Triennial</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Townships Reassessed</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">North Triennial</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Evanston, New Trier, Northfield, etc.</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South Triennial</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Bloom, Bremen, Thornton, etc.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">City of Chicago</td>
        <td style="border: 1px solid #ddd; padding: 8px;">All Chicago townships</td>
      </tr>
    </table>
    <p><strong>Warning:</strong> Property values can jump 20-40% during reassessment years, causing major tax increases.</p>
    
    <h3>General Homestead Exemption</h3>
    <p>Illinois offers homestead exemptions that reduce taxable value:</p>
    <ul>
      <li><strong>General Homestead:</strong> Up to $10,000 reduction in EAV</li>
      <li><strong>Senior Homestead:</strong> Additional $8,000 for homeowners 65+</li>
      <li><strong>Senior Freeze:</strong> Freezes EAV for seniors with income under $65,000</li>
      <li><strong>Veterans with Disabilities:</strong> Up to $2,500 reduction</li>
      <li><strong>Disabled Persons:</strong> $2,000 reduction</li>
    </ul>
    <p><strong>Important:</strong> Exemptions must be applied for annually and are NOT automatic.</p>
    
    <h3>Property Tax Appeals</h3>
    <p>Cook County homeowners can appeal assessments through three levels:</p>
    <ol>
      <li><strong>Assessor's Office:</strong> File objection within 30 days of notice</li>
      <li><strong>Board of Review:</strong> Appeal if assessor denies reduction</li>
      <li><strong>Illinois Property Tax Appeal Board:</strong> Final administrative appeal</li>
    </ol>
    <p>Successful appeals can reduce taxes by 10-30% for several years until next reassessment.</p>
    
    <h3>Why Cook County Taxes Are So High</h3>
    <p>Several factors drive Cook County's high property tax burden:</p>
    <ul>
      <li><strong>Pension Crisis:</strong> Underfunded public pensions require higher levies</li>
      <li><strong>School Funding:</strong> Heavy reliance on property taxes for education</li>
      <li><strong>Municipal Debt:</strong> Bond obligations from decades of borrowing</li>
      <li><strong>TIF Districts:</strong> Tax Increment Financing districts divert revenue</li>
      <li><strong>Population Loss:</strong> Declining tax base means higher per-capita burden</li>
    </ul>
    
    <h3>Highest Tax Burden Suburbs</h3>
    <p>These Cook County municipalities have effective tax rates over 3.5%:</p>
    <ul>
      <li>Harvey - 4.5%+</li>
      <li>Dolton - 4.1%</li>
      <li>Park Forest - 3.9%</li>
      <li>Robbins - 3.8%</li>
      <li>Ford Heights - 3.7%</li>
    </ul>
    
    <h3>Lower Tax Burden Areas</h3>
    <p>Relatively lower (but still high by national standards):</p>
    <ul>
      <li>Barrington Hills - 1.8-2.0%</li>
      <li>Inverness - 1.9-2.1%</li>
      <li>Long Grove - 2.0-2.2%</li>
      <li>South Barrington - 2.1-2.3%</li>
    </ul>
    
    <h3>Tax Bill Payment Options</h3>
    <p>Cook County offers two payment schedules:</p>
    <ul>
      <li><strong>First Installment:</strong> Due March 1 (55% of prior year's total)</li>
      <li><strong>Second Installment:</strong> Due August 1 (remainder based on current levy)</li>
    </ul>
    <p>Late payments incur 1.5% monthly penalties plus interest.</p>
    `
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Value',
        type: 'currency',
        required: true,
        placeholder: '350000',
        helpText: 'Current market value of your property'
      },
      {
        name: 'municipality',
        label: 'Municipality/Area',
        type: 'select',
        required: true,
        options: [
          { value: 'chicago', label: 'Chicago (2.05-2.30%)' },
          { value: 'evanston', label: 'Evanston (2.45-2.65%)' },
          { value: 'oakPark', label: 'Oak Park (2.80-3.10%)' },
          { value: 'naperville', label: 'Naperville (2.65-2.95%)' },
          { value: 'schaumburg', label: 'Schaumburg (2.50-2.75%)' },
          { value: 'skokie', label: 'Skokie (2.60-2.85%)' },
          { value: 'cicero', label: 'Cicero (3.20-3.50%)' },
          { value: 'dolton', label: 'Dolton (3.80-4.10%)' },
          { value: 'harvey', label: 'Harvey (4.20-4.60%)' },
          { value: 'barrington', label: 'Barrington/Inverness (1.80-2.10%)' },
        ],
        helpText: 'Select your municipality for accurate tax rate'
      },
      {
        name: 'homesteadExemption',
        label: 'Homestead Exemption',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'None' },
          { value: 'general', label: 'General Homestead ($10,000)' },
          { value: 'senior', label: 'Senior Homestead ($18,000)' },
          { value: 'seniorFreeze', label: 'Senior Freeze (Max Reduction)' },
        ],
        helpText: 'Select applicable homestead exemptions'
      }
    ],
    results: [
      {
        name: 'annualTax',
        label: 'Estimated Annual Property Tax',
        type: 'currency',
        helpText: 'Your total annual property tax bill'
      },
      {
        name: 'monthlyEscrow',
        label: 'Monthly Escrow Payment',
        type: 'currency',
        helpText: 'Monthly amount for mortgage escrow'
      },
      {
        name: 'effectiveRate',
        label: 'Effective Tax Rate',
        type: 'text',
        helpText: 'Your effective property tax rate as percentage of home value'
      },
      {
        name: 'exemptionSavings',
        label: 'Annual Exemption Savings',
        type: 'currency',
        helpText: 'How much exemptions reduce your tax bill'
      },
      {
        name: 'firstInstallment',
        label: 'First Installment (Due March 1)',
        type: 'currency',
        helpText: 'Approximate first half payment'
      },
      {
        name: 'secondInstallment',
        label: 'Second Installment (Due August 1)',
        type: 'currency',
        helpText: 'Approximate second half payment'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const municipality = inputs.municipality || 'chicago';
      const homesteadExemption = inputs.homesteadExemption || 'none';

      let taxRateMin = 0.0205;
      let taxRateMax = 0.0230;

      switch(municipality) {
        case 'chicago':
          taxRateMin = 0.0205;
          taxRateMax = 0.0230;
          break;
        case 'evanston':
          taxRateMin = 0.0245;
          taxRateMax = 0.0265;
          break;
        case 'oakPark':
          taxRateMin = 0.0280;
          taxRateMax = 0.0310;
          break;
        case 'naperville':
          taxRateMin = 0.0265;
          taxRateMax = 0.0295;
          break;
        case 'schaumburg':
          taxRateMin = 0.0250;
          taxRateMax = 0.0275;
          break;
        case 'skokie':
          taxRateMin = 0.0260;
          taxRateMax = 0.0285;
          break;
        case 'cicero':
          taxRateMin = 0.0320;
          taxRateMax = 0.0350;
          break;
        case 'dolton':
          taxRateMin = 0.0380;
          taxRateMax = 0.0410;
          break;
        case 'harvey':
          taxRateMin = 0.0420;
          taxRateMax = 0.0460;
          break;
        case 'barrington':
          taxRateMin = 0.0180;
          taxRateMax = 0.0210;
          break;
      }

      const avgTaxRate = (taxRateMin + taxRateMax) / 2;

      let exemptionAmount = 0;
      if (homesteadExemption === 'general') exemptionAmount = 10000;
      else if (homesteadExemption === 'senior') exemptionAmount = 18000;
      else if (homesteadExemption === 'seniorFreeze') exemptionAmount = 25000;

      const assessedValue = homeValue * 0.10;
      const taxableValue = Math.max(0, assessedValue - exemptionAmount);

      const annualTax = Math.round(homeValue * avgTaxRate);
      const annualTaxWithExemption = Math.round(taxableValue * avgTaxRate * 10);
      const exemptionSavings = annualTax - annualTaxWithExemption;

      const monthlyEscrow = Math.round(annualTaxWithExemption / 12);
      const effectiveRate = ((annualTaxWithExemption / homeValue) * 100).toFixed(2) + '%';

      const firstInstallment = Math.round(annualTaxWithExemption * 0.55);
      const secondInstallment = annualTaxWithExemption - firstInstallment;

      return {
        annualTax: annualTaxWithExemption,
        monthlyEscrow,
        effectiveRate,
        exemptionSavings,
        firstInstallment,
        secondInstallment
      };
    }
  }
};
