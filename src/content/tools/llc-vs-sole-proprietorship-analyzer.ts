import { CalculatorContent } from '@/types';

export const LLC_VS_SOLE_PROP_ANALYZER_CONTENT: CalculatorContent = {
  title: 'LLC vs. Sole Proprietorship (Real Estate) Analyzer',
  description: 'Compare LLC and Sole Proprietorship structures for real estate investing - analyze tax implications, liability protection, and administrative costs.',
  icon: 'Icon',
  category: 'Tax Strategy & Entity Planning',
  slug: 'llc-vs-sole-proprietorship-analyzer',
  article: {
    title: "LLC vs. Sole Proprietorship for Real Estate Investors",
    content: `
    <h2>Entity Structure Comparison</h2>
    <p>Choosing the right business structure for your real estate investments affects your taxes, legal liability, and operational complexity.</p>
    
    <h3>Sole Proprietorship</h3>
    <p>The simplest structure where you personally own the property:</p>
    <ul>
      <li><strong>Setup:</strong> No formal registration required, lowest cost</li>
      <li><strong>Taxes:</strong> Report rental income on Schedule E of personal tax return</li>
      <li><strong>Liability:</strong> No liability protection - personal assets at risk</li>
      <li><strong>Administrative Burden:</strong> Minimal paperwork and compliance</li>
    </ul>
    
    <h3>Single-Member LLC (SMLLC)</h3>
    <p>A legal entity that provides liability protection:</p>
    <ul>
      <li><strong>Setup:</strong> Requires state filing, annual fees ($50-$800/year depending on state)</li>
      <li><strong>Taxes:</strong> Default "disregarded entity" - same tax treatment as sole proprietorship</li>
      <li><strong>Liability:</strong> Personal assets protected from lawsuits and creditors</li>
      <li><strong>Administrative Burden:</strong> Moderate - annual filings, separate bank accounts</li>
    </ul>
    
    <h3>Multi-Member LLC or LLC Taxed as S-Corp</h3>
    <p>Advanced structures for larger portfolios:</p>
    <ul>
      <li><strong>Partnership Tax Treatment:</strong> Default for multi-member LLCs</li>
      <li><strong>S-Corp Election:</strong> Can reduce self-employment taxes for active investors</li>
      <li><strong>Additional Costs:</strong> CPA fees $1,500-$5,000/year, payroll processing</li>
    </ul>
    
    <h3>Key Considerations</h3>
    <ul>
      <li><strong>Liability Risk:</strong> LLCs protect personal assets from property-related lawsuits</li>
      <li><strong>Number of Properties:</strong> More properties = greater benefit from LLC protection</li>
      <li><strong>Property Value:</strong> Higher-value properties warrant LLC protection</li>
      <li><strong>Insurance:</strong> Umbrella insurance provides alternative liability protection</li>
      <li><strong>Financing:</strong> Some lenders require personal guarantees even with LLC</li>
      <li><strong>Exit Strategy:</strong> LLCs offer easier transfer or sale of ownership interests</li>
    </ul>
    
    <p><em>Note: This analyzer provides general guidance. Consult an attorney and CPA for personalized recommendations.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Sole Proprietorship Total Annual Cost', isCurrency: true },
      { label: 'LLC Total Annual Cost', isCurrency: true },
      { label: 'Annual Cost Difference', isCurrency: true },
      { label: 'Sole Prop Net Income After Costs', isCurrency: true },
      { label: 'LLC Net Income After Costs', isCurrency: true },
      { label: 'Liability Protection Value', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    fields: [
      {
        name: 'annualRentalIncome',
        label: 'Annual Gross Rental Income',
        type: 'number',
        defaultValue: 48000,
      },
      {
        name: 'annualExpenses',
        label: 'Annual Property Expenses',
        type: 'number',
        defaultValue: 20000,
      },
      {
        name: 'numberOfProperties',
        label: 'Number of Rental Properties',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'totalPropertyValue',
        label: 'Total Property Portfolio Value',
        type: 'number',
        defaultValue: 600000,
      },
      {
        name: 'stateFilingFee',
        label: 'State LLC Annual Fee',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'accountingCosts',
        label: 'Additional CPA/Accounting Fees for LLC',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'registeredAgentFee',
        label: 'Registered Agent Fee (if needed)',
        type: 'number',
        defaultValue: 125,
      },
      {
        name: 'umbrellaInsurance',
        label: 'Current Umbrella Insurance Coverage',
        type: 'select',
        options: [
          { label: 'None', value: 'none' },
          { label: '$1M Coverage', value: '1m' },
          { label: '$2M+ Coverage', value: '2m' },
        ],
        defaultValue: 'none',
      },
    ],
    calculate: (data) => {
      const {
        annualRentalIncome,
        annualExpenses,
        numberOfProperties,
        totalPropertyValue,
        stateFilingFee,
        accountingCosts,
        registeredAgentFee,
        umbrellaInsurance,
      } = data;
      
      const netIncome = annualRentalIncome - annualExpenses;
      
      // Sole Proprietorship Costs (minimal)
      const solePropCosts = 0; // No entity formation or maintenance costs
      
      // LLC Costs
      const llcFormationCost = 0; // Not counting one-time formation in annual comparison
      const llcAnnualCosts = stateFilingFee + accountingCosts + registeredAgentFee;
      
      const costDifference = llcAnnualCosts - solePropCosts;
      
      const solePropNetIncome = netIncome - solePropCosts;
      const llcNetIncome = netIncome - llcAnnualCosts;
      
      // Liability assessment
      let liabilityProtection = '';
      if (umbrellaInsurance === '2m') {
        liabilityProtection = 'Good protection with $2M+ umbrella';
      } else if (umbrellaInsurance === '1m') {
        liabilityProtection = 'Moderate - $1M may not cover high claims';
      } else {
        liabilityProtection = 'High Risk - No umbrella insurance';
      }
      
      // Recommendation logic
      let recommendation = '';
      const costAsPercentOfIncome = (costDifference / netIncome) * 100;
      
      if (numberOfProperties >= 3 || totalPropertyValue >= 500000) {
        recommendation = '✓ LLC Recommended - Portfolio size justifies protection';
      } else if (numberOfProperties === 1 && totalPropertyValue < 200000 && umbrellaInsurance === '2m') {
        recommendation = '⚖️ Sole Prop OK - Small portfolio with good insurance';
      } else if (costAsPercentOfIncome > 20 && umbrellaInsurance !== 'none') {
        recommendation = '⚖️ Consider Umbrella Insurance - LLC costs are high relative to income';
      } else if (umbrellaInsurance === 'none') {
        recommendation = '✓ LLC Recommended - No liability protection currently';
      } else {
        recommendation = '⚖️ Either Structure Works - Moderate portfolio, assess risk tolerance';
      }
      
      return [
        { label: 'Sole Proprietorship Total Annual Cost', value: solePropCosts, isCurrency: true },
        { label: 'LLC Total Annual Cost', value: llcAnnualCosts, isCurrency: true },
        { label: 'Annual Cost Difference', value: costDifference, isCurrency: true },
        { label: 'Sole Prop Net Income After Costs', value: solePropNetIncome, isCurrency: true },
        { label: 'LLC Net Income After Costs', value: llcNetIncome, isCurrency: true },
        { label: 'Liability Protection Value', value: liabilityProtection, isCurrency: false },
        { label: 'Recommendation', value: recommendation, isCurrency: false },
      ];
    },
  },
};
