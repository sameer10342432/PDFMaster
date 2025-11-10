import { CalculatorContent } from '@/types';

export const NEW_CONSTRUCTION_BUDGET_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'New Construction Budget Calculator',
  description: 'Estimate total construction costs including materials, labor, permits, and contingency',
  slug: 'new-construction-budget-calculator',
  icon: '🏗️',
  category: 'Advanced Analytics',
  article: {
    title: 'Complete Guide to Construction Budgeting',
    content: `
    <h2>Planning Your Construction Budget</h2>
    <p>A comprehensive construction budget is essential for successful project completion. Understanding all cost components helps prevent budget overruns and ensures adequate financing from the start.</p>
    
    <h3>Major Cost Categories</h3>
    <ul>
      <li><strong>Land Costs:</strong> Lot purchase price and site preparation expenses</li>
      <li><strong>Hard Costs:</strong> Materials, labor, and physical construction expenses (60-70% of budget)</li>
      <li><strong>Soft Costs:</strong> Permits, fees, inspections, architecture, engineering (15-25%)</li>
      <li><strong>Financing Costs:</strong> Construction loan interest and fees during build period</li>
      <li><strong>Contingency:</strong> Reserve fund for unexpected issues (10-20% recommended)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your project details including square footage, cost per square foot, land cost, and various fees. The calculator provides:</p>
    <ul>
      <li>Itemized breakdown of all construction costs</li>
      <li>Total project budget with contingency</li>
      <li>Cost per square foot analysis</li>
      <li>Monthly financing costs during construction</li>
      <li>Hard vs soft cost allocation</li>
    </ul>

    <h3>Cost Estimation Guidelines</h3>
    <p><strong>Basic Construction:</strong> $100-150 per sq ft for standard finishes and materials</p>
    <p><strong>Mid-Range Construction:</strong> $150-250 per sq ft for quality finishes and custom features</p>
    <p><strong>Luxury Construction:</strong> $250-500+ per sq ft for premium finishes and high-end materials</p>
    
    <h3>Budget Management Tips</h3>
    <p>Always add 10-20% contingency for unforeseen issues. Get multiple contractor bids and verify all estimates. Track expenses against budget weekly. Plan for weather delays and material price fluctuations. Consider phased construction if budget is tight.</p>
    
    <h3>Common Budget Mistakes</h3>
    <p>Underestimating soft costs, inadequate contingency reserves, change order surprises, and forgetting landscaping and utility connections are frequent pitfalls. Proper planning and conservative estimates prevent cost overruns.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFootage',
        label: 'Square Footage',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'costPerSqFt',
        label: 'Cost Per Square Foot',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'landCost',
        label: 'Land Cost',
        type: 'number',
        defaultValue: 75000,
      },
      {
        name: 'sitePreparation',
        label: 'Site Preparation',
        type: 'number',
        defaultValue: 15000,
      },
      {
        name: 'permitsAndFees',
        label: 'Permits & Fees',
        type: 'number',
        defaultValue: 8000,
      },
      {
        name: 'architecturalFees',
        label: 'Architectural/Engineering Fees',
        type: 'number',
        defaultValue: 12000,
      },
      {
        name: 'landscaping',
        label: 'Landscaping',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'contingencyPercent',
        label: 'Contingency (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'constructionLoanRate',
        label: 'Construction Loan Rate (%)',
        type: 'number',
        defaultValue: 7,
      },
      {
        name: 'constructionPeriod',
        label: 'Construction Period (Months)',
        type: 'number',
        defaultValue: 12,
      },
    ],
    results: [
      { label: 'Hard Costs (Construction)', isCurrency: true },
      { label: 'Soft Costs (Fees & Services)', isCurrency: true },
      { label: 'Land & Site Costs', isCurrency: true },
      { label: 'Subtotal', isCurrency: true },
      { label: 'Contingency Reserve', isCurrency: true },
      { label: 'Financing Costs', isCurrency: true },
      { label: 'Total Project Budget', isCurrency: true },
      { label: 'Total Cost Per Sq Ft', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        squareFootage,
        costPerSqFt,
        landCost,
        sitePreparation,
        permitsAndFees,
        architecturalFees,
        landscaping,
        contingencyPercent,
        constructionLoanRate,
        constructionPeriod,
      } = values;

      const hardCosts = squareFootage * costPerSqFt;
      const softCosts = permitsAndFees + architecturalFees;
      const landAndSite = landCost + sitePreparation + landscaping;
      const subtotal = hardCosts + softCosts + landAndSite;
      const contingency = subtotal * (contingencyPercent / 100);
      const totalBeforeFinancing = subtotal + contingency;
      
      // Construction loan interest (average outstanding balance method)
      const avgLoanBalance = totalBeforeFinancing / 2;
      const monthlyRate = constructionLoanRate / 100 / 12;
      const financingCosts = avgLoanBalance * monthlyRate * constructionPeriod;
      
      const totalBudget = totalBeforeFinancing + financingCosts;
      const totalCostPerSqFt = totalBudget / squareFootage;

      return [
        { label: 'Hard Costs (Construction)', value: hardCosts.toFixed(2), isCurrency: true },
        { label: 'Soft Costs (Fees & Services)', value: softCosts.toFixed(2), isCurrency: true },
        { label: 'Land & Site Costs', value: landAndSite.toFixed(2), isCurrency: true },
        { label: 'Subtotal', value: subtotal.toFixed(2), isCurrency: true },
        { label: 'Contingency Reserve', value: contingency.toFixed(2), isCurrency: true },
        { label: 'Financing Costs', value: financingCosts.toFixed(2), isCurrency: true },
        { label: 'Total Project Budget', value: totalBudget.toFixed(2), isCurrency: true },
        { label: 'Total Cost Per Sq Ft', value: totalCostPerSqFt.toFixed(2), isCurrency: true },
      ];
    },
  },
};
