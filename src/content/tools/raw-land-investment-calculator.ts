import { CalculatorContent } from '@/types';

export const RAW_LAND_INVESTMENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Raw Land Investment Calculator',
  description: 'Calculate ROI, holding costs, and profit potential for raw land investments',
  slug: 'raw-land-investment-calculator',
  icon: '🏞️',
  category: 'Investment Analysis',
  article: {
    title: 'Raw Land Investment Analysis Guide',
    content: `
    <h2>Understanding Raw Land Investment</h2>
    <p>Raw land investing involves purchasing undeveloped property with the expectation of future appreciation or development. Unlike improved properties, raw land generates no immediate income but offers significant long-term potential with proper analysis.</p>
    
    <h3>Key Investment Considerations</h3>
    <ul>
      <li><strong>Purchase Price:</strong> Total acquisition cost including closing costs and fees</li>
      <li><strong>Holding Costs:</strong> Property taxes, insurance, and maintenance expenses during ownership</li>
      <li><strong>Development Potential:</strong> Zoning, utilities access, and market demand</li>
      <li><strong>Exit Strategy:</strong> Resale timing, development plans, or long-term holding</li>
      <li><strong>Market Trends:</strong> Local growth patterns and infrastructure development</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Input your purchase price, annual holding costs (taxes, insurance, maintenance), holding period, and expected sale price. The calculator will determine:</p>
    <ul>
      <li>Total investment including cumulative holding costs</li>
      <li>Net profit after all expenses</li>
      <li>Return on investment (ROI) percentage</li>
      <li>Annualized return to evaluate performance</li>
      <li>Break-even price required to cover costs</li>
    </ul>

    <h3>Investment Strategies</h3>
    <p><strong>Buy and Hold:</strong> Purchase land in growth areas and wait for appreciation as development approaches your property.</p>
    <p><strong>Land Banking:</strong> Acquire large parcels in the path of development for future subdivision and sale.</p>
    <p><strong>Recreational Land:</strong> Invest in hunting, fishing, or timber land that provides enjoyment plus potential appreciation.</p>
    
    <h3>Risk Factors</h3>
    <p>Raw land carries unique risks including lack of cash flow, carrying costs, zoning changes, environmental issues, and market timing challenges. Always conduct thorough due diligence including title search, survey, environmental assessment, and market analysis before investing.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 50000,
      },
      {
        name: 'closingCosts',
        label: 'Closing Costs',
        type: 'number',
        defaultValue: 2500,
      },
      {
        name: 'annualPropertyTax',
        label: 'Annual Property Tax',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'annualInsurance',
        label: 'Annual Insurance',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'annualMaintenance',
        label: 'Annual Maintenance',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'expectedSalePrice',
        label: 'Expected Sale Price',
        type: 'number',
        defaultValue: 80000,
      },
      {
        name: 'sellingCosts',
        label: 'Selling Costs (%)',
        type: 'number',
        defaultValue: 6,
      },
    ],
    results: [
      { label: 'Total Investment', isCurrency: true },
      { label: 'Total Holding Costs', isCurrency: true },
      { label: 'Total Selling Costs', isCurrency: true },
      { label: 'Net Profit', isCurrency: true },
      { label: 'ROI', isCurrency: false },
      { label: 'Annualized Return', isCurrency: false },
      { label: 'Break-Even Price', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        purchasePrice,
        closingCosts,
        annualPropertyTax,
        annualInsurance,
        annualMaintenance,
        holdingPeriod,
        expectedSalePrice,
        sellingCosts,
      } = values;

      const totalAnnualHoldingCosts = annualPropertyTax + annualInsurance + annualMaintenance;
      const totalHoldingCosts = totalAnnualHoldingCosts * holdingPeriod;
      const totalInvestment = purchasePrice + closingCosts + totalHoldingCosts;
      const totalSellingCosts = expectedSalePrice * (sellingCosts / 100);
      const netProceeds = expectedSalePrice - totalSellingCosts;
      const netProfit = netProceeds - totalInvestment;
      const roi = (netProfit / totalInvestment) * 100;
      const annualizedReturn = (Math.pow(1 + roi / 100, 1 / holdingPeriod) - 1) * 100;
      const breakEvenPrice = totalInvestment / (1 - sellingCosts / 100);

      return [
        { label: 'Total Investment', value: totalInvestment.toFixed(2), isCurrency: true },
        { label: 'Total Holding Costs', value: totalHoldingCosts.toFixed(2), isCurrency: true },
        { label: 'Total Selling Costs', value: totalSellingCosts.toFixed(2), isCurrency: true },
        { label: 'Net Profit', value: netProfit.toFixed(2), isCurrency: true },
        { label: 'ROI', value: `${roi.toFixed(2)}%` },
        { label: 'Annualized Return', value: `${annualizedReturn.toFixed(2)}%` },
        { label: 'Break-Even Price', value: breakEvenPrice.toFixed(2), isCurrency: true },
      ];
    },
  },
};
