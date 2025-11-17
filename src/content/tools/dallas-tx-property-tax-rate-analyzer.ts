import { CalculatorContent } from '@/types/calculator';

export const dallasPropertyTaxAnalyzerContent: CalculatorContent = {
  meta: {
    title: 'Dallas Property Tax Rate Analyzer | Texas Tax Calculator',
    description: 'Analyze Dallas County property tax rates, exemptions, and total tax burden. Compare school districts and calculate total property taxes in Texas.',
  },
  title: 'Dallas (TX) Property Tax Rate Analyzer',
  description: 'Calculate and compare Dallas-area property tax rates by school district',
  icon: 'Receipt',
  category: 'State-Specific Tools',
  subcategory: 'Location Analysis',
  article: {
    title: 'Dallas Property Tax Analysis and Comparison Guide',
    content: `
# Dallas Property Tax Rate Analyzer

## Dallas Property Tax Overview

Dallas County has some of the highest property tax rates in Texas, ranging from 2.0% to 3.2% of assessed value annually.

## Tax Components

### School District Tax (largest component)
- **Range**: 1.0% to 1.5%
- **Average**: 1.25%
- **Examples**:
  - Highland Park ISD: 1.45%
  - Plano ISD: 1.34%
  - Dallas ISD: 1.26%
  - Richardson ISD: 1.38%

### City Tax
- **Dallas**: 0.77%
- **Plano**: 0.44%
- **Richardson**: 0.62%
- **Frisco**: 0.43%

### County Tax
- **Dallas County**: 0.25%
- **Collin County**: 0.19%
- **Denton County**: 0.21%

### Community College District
- **Dallas County Community College**: 0.08%
- **Collin College**: 0.08%

## Total Tax Rates by Area

### High-Tax Areas (2.6%+)
- **Highland Park**: 2.85%
- **University Park**: 2.82%
- **Dallas (DISD)**: 2.61%

### Mid-Tax Areas (2.3-2.6%)
- **Richardson**: 2.51%
- **Plano (East)**: 2.38%
- **Irving**: 2.44%

### Lower-Tax Areas (2.0-2.3%)
- **Frisco**: 2.23%
- **McKinney**: 2.19%
- **Allen**: 2.18%

## Homestead Exemption

### General Homestead
- **Amount**: Varies by district, typically $25,000-$40,000
- **Impact**: Saves $500-$1,200 annually
- **Eligibility**: Primary residence only

### Over-65 Exemption
- **Additional Exemption**: $10,000-$25,000
- **Tax Freeze**: School taxes frozen
- **Savings**: $2,000-$5,000+ annually

### Disabled Veteran Exemption
- **10-29% Disabled**: $5,000 exemption
- **30-49% Disabled**: $7,500 exemption
- **50-69% Disabled**: $10,000 exemption
- **70-100% Disabled**: Full exemption

## Annual Cost Examples

### $300,000 Home
- **Low Rate (2.1%)**: $6,300/year
- **Average Rate (2.4%)**: $7,200/year
- **High Rate (2.8%)**: $8,400/year

### $500,000 Home
- **Low Rate (2.1%)**: $10,500/year
- **Average Rate (2.4%)**: $12,000/year
- **High Rate (2.8%)**: $14,000/year

### $750,000 Home
- **Low Rate (2.1%)**: $15,750/year
- **Average Rate (2.4%)**: $18,000/year
- **High Rate (2.8%)**: $21,000/year

## Tax Rate Trends (2019-2024)

- **2019 Average**: 2.28%
- **2020 Average**: 2.32%
- **2021 Average**: 2.35%
- **2022 Average**: 2.39%
- **2023 Average**: 2.43%
- **2024 Average**: 2.47%

**5-Year Increase**: +8.3% (0.19 percentage points)

## Investment Considerations

### Cash Flow Impact
- **Rental Properties**: Higher taxes reduce NOI
- **Fix & Flip**: 6-12 months of taxes in budget
- **Long-Term Hold**: Tax increases reduce returns

### Appreciation vs. Taxes
- **Home Appreciation**: 4-6% annually
- **Tax Increase**: 2-3% annually
- **Net Benefit**: Still positive, but reduced

    `,
    keywords: [
      'Dallas property tax',
      'Texas property tax rate',
      'Dallas County taxes',
      'DISD tax rate',
      'Plano property tax',
      'Richardson taxes',
      'Dallas homestead exemption',
      'Texas tax comparison',
      'Dallas school district taxes',
    ],
  },
  variables: {
    homeValue: {
      label: 'Home Value ($)',
      type: 'number',
      defaultValue: 400000,
      min: 100000,
      max: 5000000,
      step: 10000,
      helpText: 'Assessed home value',
    },
    schoolDistrict: {
      label: 'School District',
      type: 'select',
      defaultValue: 'dallas-isd',
      options: [
        { value: 'dallas-isd', label: 'Dallas ISD (1.26%)' },
        { value: 'highland-park', label: 'Highland Park ISD (1.45%)' },
        { value: 'plano', label: 'Plano ISD (1.34%)' },
        { value: 'richardson', label: 'Richardson ISD (1.38%)' },
        { value: 'frisco', label: 'Frisco ISD (1.30%)' },
      ],
      helpText: 'Select school district',
    },
    city: {
      label: 'City',
      type: 'select',
      defaultValue: 'dallas',
      options: [
        { value: 'dallas', label: 'Dallas (0.77%)' },
        { value: 'plano', label: 'Plano (0.44%)' },
        { value: 'richardson', label: 'Richardson (0.62%)' },
        { value: 'frisco', label: 'Frisco (0.43%)' },
        { value: 'irving', label: 'Irving (0.64%)' },
      ],
      helpText: 'Select city',
    },
    homesteadExemption: {
      label: 'Homestead Exemption',
      type: 'select',
      defaultValue: 'yes',
      options: [
        { value: 'no', label: 'No (investment/rental property)' },
        { value: 'yes', label: 'Yes (standard homestead)' },
        { value: 'over65', label: 'Over 65 (with freeze)' },
      ],
      helpText: 'Exemption status',
    },
  },
  calculate: (inputs) => {
    const homeValue = inputs.homeValue || 400000;
    const schoolDistrict = inputs.schoolDistrict || 'dallas-isd';
    const city = inputs.city || 'dallas';
    const homesteadExemption = inputs.homesteadExemption || 'yes';

    // School tax rates
    const schoolRates: Record<string, number> = {
      'dallas-isd': 0.0126,
      'highland-park': 0.0145,
      'plano': 0.0134,
      'richardson': 0.0138,
      'frisco': 0.0130,
    };

    // City tax rates
    const cityRates: Record<string, number> = {
      'dallas': 0.0077,
      'plano': 0.0044,
      'richardson': 0.0062,
      'frisco': 0.0043,
      'irving': 0.0064,
    };

    const schoolTaxRate = schoolRates[schoolDistrict] || 0.0126;
    const cityTaxRate = cityRates[city] || 0.0077;
    const countyTaxRate = 0.0023; // Dallas County average
    const collegeTaxRate = 0.0008; // Community college
    const totalTaxRate = schoolTaxRate + cityTaxRate + countyTaxRate + collegeTaxRate;

    // Exemption amount
    let exemptionAmount = 0;
    if (homesteadExemption === 'yes') exemptionAmount = 30000;
    if (homesteadExemption === 'over65') exemptionAmount = 50000;

    const taxableValue = Math.max(0, homeValue - exemptionAmount);

    const annualSchoolTax = taxableValue * schoolTaxRate;
    const annualCityTax = taxableValue * cityTaxRate;
    const annualCountyTax = taxableValue * countyTaxRate;
    const annualCollegeTax = taxableValue * collegeTaxRate;
    const totalAnnualTax = annualSchoolTax + annualCityTax + annualCountyTax + annualCollegeTax;
    const monthlyTax = totalAnnualTax / 12;

    const exemptionSavings = homesteadExemption !== 'no' ? exemptionAmount * totalTaxRate : 0;

    return {
      results: {
        totalTaxRate: {
          label: 'Total Tax Rate',
          value: totalTaxRate * 100,
          type: 'percentage' as const,
        },
        taxableValue: {
          label: 'Taxable Value (after exemption)',
          value: taxableValue,
          type: 'currency' as const,
        },
        annualSchoolTax: {
          label: 'Annual School District Tax',
          value: annualSchoolTax,
          type: 'currency' as const,
        },
        annualCityTax: {
          label: 'Annual City Tax',
          value: annualCityTax,
          type: 'currency' as const,
        },
        annualCountyTax: {
          label: 'Annual County Tax',
          value: annualCountyTax,
          type: 'currency' as const,
        },
        annualCollegeTax: {
          label: 'Annual Community College Tax',
          value: annualCollegeTax,
          type: 'currency' as const,
        },
        totalAnnualTax: {
          label: 'Total Annual Property Tax',
          value: totalAnnualTax,
          type: 'currency' as const,
        },
        monthlyTax: {
          label: 'Monthly Tax (for budgeting)',
          value: monthlyTax,
          type: 'currency' as const,
        },
        exemptionSavings: {
          label: 'Annual Exemption Savings',
          value: exemptionSavings,
          type: 'currency' as const,
        },
      },
    };
  },
};
