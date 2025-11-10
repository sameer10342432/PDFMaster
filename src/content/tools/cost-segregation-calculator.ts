import { CalculatorContent } from '@/types';

export const COST_SEGREGATION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost Segregation Benefit Calculator',
  description: 'Estimate tax savings from cost segregation studies that accelerate depreciation deductions on commercial and residential rental properties.',
  icon: 'Icon',
  category: 'Tax Strategy & Entity Planning',
  slug: 'cost-segregation-calculator',
  article: {
    title: "Understanding Cost Segregation Tax Benefits",
    content: `
    <h2>What is Cost Segregation?</h2>
    <p>Cost segregation is a tax strategy that accelerates depreciation deductions by reclassifying components of a building from 27.5-year (residential) or 39-year (commercial) property into shorter-lived 5, 7, or 15-year property classes.</p>
    
    <h3>How Cost Segregation Works</h3>
    <p>A professional cost segregation study identifies building components that can be depreciated faster:</p>
    <ul>
      <li><strong>5-Year Property:</strong> Carpeting, decorative lighting, landscaping (20-30% of building)</li>
      <li><strong>7-Year Property:</strong> Furniture, office equipment, appliances (5-10% of building)</li>
      <li><strong>15-Year Property:</strong> Land improvements, parking lots, fencing (10-20% of building)</li>
      <li><strong>27.5/39-Year Property:</strong> Structural components remaining (40-65% of building)</li>
    </ul>
    
    <h3>Key Benefits</h3>
    <ul>
      <li><strong>Accelerated Deductions:</strong> Front-load depreciation in early years</li>
      <li><strong>Cash Flow Improvement:</strong> Reduce current-year tax liability</li>
      <li><strong>Bonus Depreciation:</strong> 100% bonus depreciation available for qualified property (subject to tax law changes)</li>
      <li><strong>Time Value of Money:</strong> Tax savings now are worth more than future savings</li>
    </ul>
    
    <h3>Best Candidates for Cost Segregation</h3>
    <ul>
      <li>Properties purchased or built within the last year</li>
      <li>Buildings valued at $500,000 or more</li>
      <li>Properties with recent substantial improvements or renovations</li>
      <li>Real estate professionals with high ordinary income</li>
      <li>Properties held in entities with passive income to offset</li>
    </ul>
    
    <h3>Study Costs</h3>
    <p>Professional cost segregation studies typically cost $5,000-$15,000 depending on property value and complexity. The tax savings often exceed the study cost by 10-50x.</p>
    
    <p><em>Note: This calculator provides estimates. Consult a cost segregation specialist and tax advisor for personalized analysis.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Standard Annual Depreciation', isCurrency: true },
      { label: 'Year 1 Cost Segregation Depreciation', isCurrency: true },
      { label: 'Additional Year 1 Deduction', isCurrency: true },
      { label: 'Year 1 Tax Savings', isCurrency: true },
      { label: 'Estimated Study Cost', isCurrency: true },
      { label: 'Net Benefit (Year 1)', isCurrency: true },
      { label: 'ROI on Study (%)', isCurrency: false },
    ],
    fields: [
      {
        name: 'propertyValue',
        label: 'Total Property Purchase Price',
        type: 'number',
        defaultValue: 2000000,
      },
      {
        name: 'landValue',
        label: 'Land Value (Not Depreciable)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { label: 'Residential Rental (27.5 years)', value: 'residential' },
          { label: 'Commercial (39 years)', value: 'commercial' },
        ],
        defaultValue: 'commercial',
      },
      {
        name: 'reclassifiedPercent5Year',
        label: '% Reclassified to 5-Year Property',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'reclassifiedPercent15Year',
        label: '% Reclassified to 15-Year Property',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'bonusDepreciation',
        label: 'Use Bonus Depreciation (100%)?',
        type: 'boolean',
        defaultValue: true,
      },
      {
        name: 'marginalTaxRate',
        label: 'Your Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 37,
      },
    ],
    calculate: (data) => {
      const { 
        propertyValue, 
        landValue, 
        propertyType, 
        reclassifiedPercent5Year,
        reclassifiedPercent15Year,
        bonusDepreciation,
        marginalTaxRate 
      } = data;
      
      const depreciableBasis = propertyValue - landValue;
      const standardPeriod = propertyType === 'residential' ? 27.5 : 39;
      
      // Standard depreciation (straight line)
      const standardDepreciation = depreciableBasis / standardPeriod;
      
      // Cost segregation breakdown
      const fiveYearAmount = depreciableBasis * (reclassifiedPercent5Year / 100);
      const fifteenYearAmount = depreciableBasis * (reclassifiedPercent15Year / 100);
      const remainingAmount = depreciableBasis - fiveYearAmount - fifteenYearAmount;
      
      // Year 1 depreciation with cost segregation
      let year1Depreciation = 0;
      
      if (bonusDepreciation) {
        // 100% bonus depreciation on 5 and 15-year property
        year1Depreciation = fiveYearAmount + fifteenYearAmount + (remainingAmount / standardPeriod);
      } else {
        // MACRS without bonus: 5-year = 20%, 15-year = 5% first year
        year1Depreciation = (fiveYearAmount * 0.20) + (fifteenYearAmount * 0.05) + (remainingAmount / standardPeriod);
      }
      
      const additionalDeduction = year1Depreciation - standardDepreciation;
      const taxRate = marginalTaxRate / 100;
      const year1TaxSavings = additionalDeduction * taxRate;
      
      // Estimate study cost (typically $5k-$15k, scale with property value)
      let studyCost = 7500; // base cost
      if (depreciableBasis > 2000000) studyCost = 12000;
      if (depreciableBasis > 5000000) studyCost = 20000;
      if (depreciableBasis < 1000000) studyCost = 5000;
      
      const netBenefit = year1TaxSavings - studyCost;
      const roi = studyCost > 0 ? (netBenefit / studyCost) * 100 : 0;
      
      return [
        { label: 'Standard Annual Depreciation', value: standardDepreciation, isCurrency: true },
        { label: 'Year 1 Cost Segregation Depreciation', value: year1Depreciation, isCurrency: true },
        { label: 'Additional Year 1 Deduction', value: additionalDeduction, isCurrency: true },
        { label: 'Year 1 Tax Savings', value: year1TaxSavings, isCurrency: true },
        { label: 'Estimated Study Cost', value: studyCost, isCurrency: true },
        { label: 'Net Benefit (Year 1)', value: netBenefit, isCurrency: true },
        { label: 'ROI on Study (%)', value: parseFloat(roi.toFixed(1)), isCurrency: false },
      ];
    },
  },
};
