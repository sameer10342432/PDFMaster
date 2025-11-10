import { CalculatorContent } from '@/types';

export const MACRS_DEPRECIATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'MACRS Depreciation Calculator (Real Estate)',
  description: 'Calculate Modified Accelerated Cost Recovery System depreciation for rental property',
  slug: 'macrs-depreciation-calculator',
  icon: '📉',
  category: 'Financial Planning',
  article: {
    title: 'Understanding MACRS Depreciation for Real Estate',
    content: `
    <h2>MACRS Depreciation for Rental Property</h2>
    <p>The Modified Accelerated Cost Recovery System (MACRS) allows real estate investors to recover the cost of income-producing property through annual tax deductions. Residential rental property is depreciated over 27.5 years using the straight-line method.</p>
    
    <h3>What Can Be Depreciated</h3>
    <ul>
      <li><strong>Building Structure:</strong> The main building (27.5 years residential, 39 years commercial)</li>
      <li><strong>Land:</strong> NOT depreciable - must separate land value from building value</li>
      <li><strong>Improvements:</strong> Renovations, additions, and major repairs</li>
      <li><strong>Personal Property:</strong> Appliances, carpeting, furniture (5-7 year recovery)</li>
      <li><strong>Land Improvements:</strong> Landscaping, fences, driveways (15 years)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property's purchase price, estimated land value, and placed-in-service date. The calculator provides:</p>
    <ul>
      <li>Depreciable basis (building value only)</li>
      <li>Annual depreciation deduction</li>
      <li>Monthly depreciation amount</li>
      <li>Accumulated depreciation over time</li>
      <li>Remaining depreciable basis</li>
    </ul>

    <h3>Residential vs Commercial Property</h3>
    <p><strong>Residential Rental:</strong> 27.5 year recovery period for properties where 80% or more of gross rental income comes from dwelling units (apartments, single-family homes, duplexes).</p>
    <p><strong>Commercial Property:</strong> 39 year recovery period for office buildings, retail, warehouses, and mixed-use where less than 80% is residential.</p>
    
    <h3>Mid-Month Convention</h3>
    <p>MACRS uses the mid-month convention for real property, meaning regardless of the actual purchase date, the property is treated as placed in service at the midpoint of that month. This affects first-year and final-year depreciation.</p>
    
    <h3>Depreciation Recapture on Sale</h3>
    <p>When you sell rental property, depreciation claimed is recaptured as ordinary income (currently taxed at maximum 25% rate). This reduces your capital gains and increases taxable income. Cost segregation studies can help maximize accelerated depreciation on specific property components.</p>
    
    <h3>Important Considerations</h3>
    <p>Depreciation is mandatory - if you don't claim it, the IRS still treats it as if you did when calculating gain on sale. Always consult a tax professional for your specific situation. Keep detailed records of purchase price allocation, improvements, and depreciation claimed.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential Rental (27.5 years)' },
          { value: 'commercial', label: 'Commercial (39 years)' },
        ],
        defaultValue: 'residential',
      },
      {
        name: 'purchasePrice',
        label: 'Total Purchase Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'landValue',
        label: 'Land Value (Not Depreciable)',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'closingCosts',
        label: 'Closing Costs (Added to Basis)',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'improvements',
        label: 'Capital Improvements',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'monthPlacedInService',
        label: 'Month Placed in Service',
        type: 'select',
        options: [
          { value: '1', label: 'January' },
          { value: '2', label: 'February' },
          { value: '3', label: 'March' },
          { value: '4', label: 'April' },
          { value: '5', label: 'May' },
          { value: '6', label: 'June' },
          { value: '7', label: 'July' },
          { value: '8', label: 'August' },
          { value: '9', label: 'September' },
          { value: '10', label: 'October' },
          { value: '11', label: 'November' },
          { value: '12', label: 'December' },
        ],
        defaultValue: '1',
      },
    ],
    results: [
      { label: 'Depreciable Basis', isCurrency: true },
      { label: 'Recovery Period (Years)', isCurrency: false },
      { label: 'Annual Depreciation', isCurrency: true },
      { label: 'Monthly Depreciation', isCurrency: true },
      { label: 'First Year Depreciation', isCurrency: true },
      { label: '10-Year Accumulated Depreciation', isCurrency: true },
      { label: 'Tax Savings (25% Rate)', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        propertyType,
        purchasePrice,
        landValue,
        closingCosts,
        improvements,
        monthPlacedInService,
      } = values;

      const depreciableBasis = purchasePrice - landValue + closingCosts + improvements;
      const recoveryPeriod = propertyType === 'residential' ? 27.5 : 39;
      const annualDepreciation = depreciableBasis / recoveryPeriod;
      const monthlyDepreciation = annualDepreciation / 12;
      
      // Mid-month convention: first year depreciation
      const month = parseInt(monthPlacedInService as string);
      const firstYearMonths = (12 - month) + 0.5; // Mid-month convention
      const firstYearDepreciation = monthlyDepreciation * firstYearMonths;
      
      const tenYearAccumulated = annualDepreciation * 10;
      const taxSavings = annualDepreciation * 0.25; // 25% recapture rate

      return [
        { label: 'Depreciable Basis', value: depreciableBasis.toFixed(2), isCurrency: true },
        { label: 'Recovery Period (Years)', value: recoveryPeriod.toString() },
        { label: 'Annual Depreciation', value: annualDepreciation.toFixed(2), isCurrency: true },
        { label: 'Monthly Depreciation', value: monthlyDepreciation.toFixed(2), isCurrency: true },
        { label: 'First Year Depreciation', value: firstYearDepreciation.toFixed(2), isCurrency: true },
        { label: '10-Year Accumulated Depreciation', value: tenYearAccumulated.toFixed(2), isCurrency: true },
        { label: 'Tax Savings (25% Rate)', value: taxSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
