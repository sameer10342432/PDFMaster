import { CalculatorContent } from '@/types';

export const LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Land Development Cost Calculator',
  description: 'Calculate subdivision, infrastructure, and development costs for raw land projects',
  slug: 'land-development-cost-calculator',
  icon: '🚧',
  category: 'Investment Analysis',
  article: {
    title: 'Land Development Cost Analysis Guide',
    content: `
    <h2>Understanding Land Development Costs</h2>
    <p>Land development transforms raw land into buildable lots by installing infrastructure, obtaining approvals, and preparing sites for construction. Accurate cost estimation is critical for project feasibility and profitability.</p>
    
    <h3>Major Development Cost Categories</h3>
    <ul>
      <li><strong>Planning & Engineering:</strong> Surveys, soil tests, engineering plans, environmental studies</li>
      <li><strong>Permits & Approvals:</strong> Zoning, platting, impact fees, utility connection fees</li>
      <li><strong>Site Work:</strong> Clearing, grading, drainage, erosion control</li>
      <li><strong>Infrastructure:</strong> Roads, water lines, sewer, electricity, gas</li>
      <li><strong>Soft Costs:</strong> Legal, architecture, project management, financing costs</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your project details including acreage, number of lots, and estimated costs per category. The calculator provides:</p>
    <ul>
      <li>Total development cost breakdown by category</li>
      <li>Cost per lot and cost per acre analysis</li>
      <li>Infrastructure costs allocation</li>
      <li>Required lot sale price to achieve target profit margin</li>
      <li>Project profitability metrics</li>
    </ul>

    <h3>Typical Development Costs</h3>
    <p><strong>Engineering & Design:</strong> $5,000-$15,000 per acre for plans, surveys, and approvals</p>
    <p><strong>Site Preparation:</strong> $10,000-$30,000 per acre for clearing, grading, and drainage</p>
    <p><strong>Infrastructure:</strong> $25,000-$75,000 per lot for roads, utilities, and connections</p>
    <p><strong>Impact Fees:</strong> $5,000-$25,000 per lot depending on municipality requirements</p>
    
    <h3>Development Process Timeline</h3>
    <p>Typical subdivision development takes 12-36 months from acquisition to ready-to-build lots. Planning and approvals: 6-12 months. Infrastructure installation: 4-8 months. Final inspections and lot marketing: 2-4 months.</p>
    
    <h3>Risk Management</h3>
    <p>Key risks include permitting delays, unforeseen site conditions, utility capacity issues, market timing, and cost overruns. Maintain 20-30% contingency reserves. Conduct thorough due diligence including geotechnical studies, title review, and market analysis before proceeding.</p>
    
    <h3>Financing Considerations</h3>
    <p>Land development loans typically require 30-40% down payment with interest rates 2-4% above conventional mortgages. Lenders closely scrutinize experience, presales, and project feasibility. Consider joint ventures or partnerships to reduce capital requirements.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'totalAcres',
        label: 'Total Acreage',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'numberOfLots',
        label: 'Number of Lots',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'landCost',
        label: 'Raw Land Cost',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'engineeringCosts',
        label: 'Engineering & Planning',
        type: 'number',
        defaultValue: 250000,
      },
      {
        name: 'permitFees',
        label: 'Permits & Impact Fees',
        type: 'number',
        defaultValue: 375000,
      },
      {
        name: 'sitePrepCost',
        label: 'Site Preparation (Clearing, Grading)',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'roadsCost',
        label: 'Roads & Paving',
        type: 'number',
        defaultValue: 800000,
      },
      {
        name: 'utilitiesCost',
        label: 'Utilities (Water, Sewer, Electric)',
        type: 'number',
        defaultValue: 1200000,
      },
      {
        name: 'softCosts',
        label: 'Soft Costs (Legal, Admin, Marketing)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'contingency',
        label: 'Contingency (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'targetProfitMargin',
        label: 'Target Profit Margin (%)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      { label: 'Total Development Costs', isCurrency: true },
      { label: 'Contingency Reserve', isCurrency: true },
      { label: 'Total Project Cost', isCurrency: true },
      { label: 'Cost Per Lot', isCurrency: true },
      { label: 'Cost Per Acre', isCurrency: true },
      { label: 'Required Revenue', isCurrency: true },
      { label: 'Required Lot Sale Price', isCurrency: true },
      { label: 'Projected Profit', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        totalAcres,
        numberOfLots,
        landCost,
        engineeringCosts,
        permitFees,
        sitePrepCost,
        roadsCost,
        utilitiesCost,
        softCosts,
        contingency,
        targetProfitMargin,
      } = values;

      const totalDevelopmentCosts = 
        landCost + 
        engineeringCosts + 
        permitFees + 
        sitePrepCost + 
        roadsCost + 
        utilitiesCost + 
        softCosts;
      
      const contingencyReserve = totalDevelopmentCosts * (contingency / 100);
      const totalProjectCost = totalDevelopmentCosts + contingencyReserve;
      const costPerLot = totalProjectCost / numberOfLots;
      const costPerAcre = totalProjectCost / totalAcres;
      
      const requiredRevenue = totalProjectCost / (1 - targetProfitMargin / 100);
      const requiredLotSalePrice = requiredRevenue / numberOfLots;
      const projectedProfit = requiredRevenue - totalProjectCost;

      return [
        { label: 'Total Development Costs', value: totalDevelopmentCosts.toFixed(2), isCurrency: true },
        { label: 'Contingency Reserve', value: contingencyReserve.toFixed(2), isCurrency: true },
        { label: 'Total Project Cost', value: totalProjectCost.toFixed(2), isCurrency: true },
        { label: 'Cost Per Lot', value: costPerLot.toFixed(2), isCurrency: true },
        { label: 'Cost Per Acre', value: costPerAcre.toFixed(2), isCurrency: true },
        { label: 'Required Revenue', value: requiredRevenue.toFixed(2), isCurrency: true },
        { label: 'Required Lot Sale Price', value: requiredLotSalePrice.toFixed(2), isCurrency: true },
        { label: 'Projected Profit', value: projectedProfit.toFixed(2), isCurrency: true },
      ];
    },
  },
};
