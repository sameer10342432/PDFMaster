import { CalculatorContent } from '@/types';

export const PROPERTY_TAX_APPEAL_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Property Tax Appeal Analyzer',
  description: 'Determine if appealing your property tax assessment will save you money',
  slug: 'property-tax-appeal-analyzer',
  icon: '⚖️',
  category: 'Financial Planning',
  article: {
    title: 'Guide to Property Tax Appeals',
    content: `
    <h2>Should You Appeal Your Property Tax Assessment?</h2>
    <p>Property tax appeals can significantly reduce your annual tax bill when your home is overassessed. Understanding the process, costs, and potential savings helps you decide if an appeal makes financial sense.</p>
    
    <h3>When to Consider an Appeal</h3>
    <ul>
      <li><strong>Overvaluation:</strong> Your assessed value exceeds fair market value by 10%+ based on comparable sales</li>
      <li><strong>Property Issues:</strong> Damage, defects, or adverse conditions not reflected in assessment</li>
      <li><strong>Unequal Assessment:</strong> Similar homes in your area assessed at lower values</li>
      <li><strong>Incorrect Data:</strong> Wrong square footage, lot size, or features listed</li>
      <li><strong>Market Decline:</strong> Significant drop in property values not captured in assessment</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your current assessed value, estimated fair market value, tax rate, and appeal costs. The calculator determines:</p>
    <ul>
      <li>Potential annual tax savings</li>
      <li>5-year and 10-year cumulative savings</li>
      <li>Appeal costs (filing fees, professional appraisal, attorney if needed)</li>
      <li>Net benefit after costs</li>
      <li>Return on investment for appeal expenses</li>
    </ul>

    <h3>The Appeal Process</h3>
    <p><strong>Step 1:</strong> Review your assessment notice for accuracy. Check square footage, lot size, bedrooms, bathrooms, and property classification.</p>
    <p><strong>Step 2:</strong> Research comparable properties. Gather recent sale prices of similar homes in your neighborhood.</p>
    <p><strong>Step 3:</strong> File an appeal with your local assessment review board before the deadline (typically 30-60 days after assessment notice).</p>
    <p><strong>Step 4:</strong> Prepare evidence: professional appraisal, comparable sales data, photos of defects, and written arguments.</p>
    <p><strong>Step 5:</strong> Attend the hearing to present your case. You may hire a tax professional or attorney to represent you.</p>
    
    <h3>Building a Strong Case</h3>
    <p><strong>Comparable Sales:</strong> Find 3-5 similar homes sold recently in your area. Document differences and adjust values accordingly.</p>
    <p><strong>Professional Appraisal:</strong> $300-600 investment provides credible, independent valuation for your appeal.</p>
    <p><strong>Photographic Evidence:</strong> Document damage, deferred maintenance, and property defects.</p>
    <p><strong>Market Analysis:</strong> Show declining market trends if applicable to your area and property type.</p>
    
    <h3>Appeal Costs</h3>
    <p>Filing fees: $25-100 in most jurisdictions. Professional appraisal: $300-600. Property tax consultant: 25-50% of first year savings on contingency. Attorney representation: $500-2,000 flat fee or 30-50% contingency. Many firms work on contingency (no savings = no fee).</p>
    
    <h3>Success Tips</h3>
    <p>File early, be thorough with documentation, focus on factual evidence (not ability to pay), consider hiring professionals for large disparities, and be prepared to negotiate. Even partial reductions save money over time. Some jurisdictions allow reassessment increases, so know your local rules.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'currentAssessedValue',
        label: 'Current Assessed Value',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'estimatedFairValue',
        label: 'Estimated Fair Market Value',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'taxRate',
        label: 'Property Tax Rate (per $1,000)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'filingFee',
        label: 'Appeal Filing Fee',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'appraisalCost',
        label: 'Professional Appraisal Cost',
        type: 'number',
        defaultValue: 450,
      },
      {
        name: 'attorneyFee',
        label: 'Attorney/Consultant Fee (if any)',
        type: 'number',
        defaultValue: 0,
      },
      {
        name: 'successProbability',
        label: 'Estimated Success Probability (%)',
        type: 'number',
        defaultValue: 70,
      },
    ],
    results: [
      { label: 'Overassessment Amount', isCurrency: true },
      { label: 'Overassessment Percentage', isCurrency: false },
      { label: 'Current Annual Tax', isCurrency: true },
      { label: 'Potential Reduced Tax', isCurrency: true },
      { label: 'Annual Tax Savings', isCurrency: true },
      { label: 'Total Appeal Costs', isCurrency: true },
      { label: '5-Year Savings', isCurrency: true },
      { label: '10-Year Savings', isCurrency: true },
      { label: 'Net Benefit (5 Years)', isCurrency: true },
      { label: 'ROI on Appeal Costs', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        currentAssessedValue,
        estimatedFairValue,
        taxRate,
        filingFee,
        appraisalCost,
        attorneyFee,
        successProbability,
      } = values;

      const overassessment = currentAssessedValue - estimatedFairValue;
      const overassessmentPct = (overassessment / estimatedFairValue) * 100;
      
      const currentAnnualTax = (currentAssessedValue / 1000) * taxRate;
      const potentialReducedTax = (estimatedFairValue / 1000) * taxRate;
      const annualSavings = currentAnnualTax - potentialReducedTax;
      
      const totalAppealCosts = filingFee + appraisalCost + attorneyFee;
      
      // Adjust for success probability
      const expectedAnnualSavings = annualSavings * (successProbability / 100);
      const fiveYearSavings = expectedAnnualSavings * 5;
      const tenYearSavings = expectedAnnualSavings * 10;
      
      const netBenefit5Year = fiveYearSavings - totalAppealCosts;
      const roi = ((tenYearSavings - totalAppealCosts) / totalAppealCosts) * 100;

      return [
        { label: 'Overassessment Amount', value: overassessment.toFixed(2), isCurrency: true },
        { label: 'Overassessment Percentage', value: `${overassessmentPct.toFixed(2)}%` },
        { label: 'Current Annual Tax', value: currentAnnualTax.toFixed(2), isCurrency: true },
        { label: 'Potential Reduced Tax', value: potentialReducedTax.toFixed(2), isCurrency: true },
        { label: 'Annual Tax Savings', value: annualSavings.toFixed(2), isCurrency: true },
        { label: 'Total Appeal Costs', value: totalAppealCosts.toFixed(2), isCurrency: true },
        { label: '5-Year Savings', value: fiveYearSavings.toFixed(2), isCurrency: true },
        { label: '10-Year Savings', value: tenYearSavings.toFixed(2), isCurrency: true },
        { label: 'Net Benefit (5 Years)', value: netBenefit5Year.toFixed(2), isCurrency: true },
        { label: 'ROI on Appeal Costs', value: `${roi.toFixed(2)}%` },
      ];
    },
  },
};
