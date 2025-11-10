import { CalculatorContent } from '@/types';

export const OPPORTUNITY_ZONE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Opportunity Zone (OZ) Investment Benefit Calculator',
  description: 'Calculate tax benefits from Qualified Opportunity Zone investments and deferrals',
  slug: 'opportunity-zone-calculator',
  icon: '🎯',
  category: 'Investment Analysis',
  article: {
    title: 'Opportunity Zone Investment Tax Benefits Guide',
    content: `
    <h2>Understanding Opportunity Zone Investments</h2>
    <p>Qualified Opportunity Zones (QOZs) are economically distressed communities where investors can defer and reduce capital gains taxes by investing in Qualified Opportunity Funds (QOFs). This federal tax incentive encourages long-term investment in underserved areas.</p>
    
    <h3>Three Major Tax Benefits</h3>
    <ul>
      <li><strong>Temporary Tax Deferral:</strong> Defer capital gains taxes until December 31, 2026, or when QOF investment is sold</li>
      <li><strong>Step-Up in Basis:</strong> 10% step-up after 5 years, additional 5% after 7 years (total 15% if held through 12/31/2026)</li>
      <li><strong>Permanent Exclusion:</strong> Complete elimination of capital gains tax on QOF appreciation if held 10+ years</li>
      <li><strong>No AMT:</strong> Benefits not subject to alternative minimum tax</li>
      <li><strong>Reinvestment Flexibility:</strong> Can invest any capital gains (real estate, stocks, business sale)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your original capital gain amount, investment date, planned holding period, and expected QOF appreciation. The calculator shows:</p>
    <ul>
      <li>Deferred capital gains tax</li>
      <li>Step-up basis reduction after 5 and 7 years</li>
      <li>Tax savings on original gain</li>
      <li>Tax exclusion on new appreciation after 10 years</li>
      <li>Total tax benefit compared to paying immediately</li>
    </ul>

    <h3>Investment Requirements</h3>
    <p><strong>180-Day Window:</strong> Must invest capital gains in QOF within 180 days of realizing the gain.</p>
    <p><strong>Qualified Opportunity Fund:</strong> Must invest through certified QOF that holds 90% of assets in QOZ property or businesses.</p>
    <p><strong>Substantial Improvement:</strong> For existing buildings, must invest equal to or more than purchase price in improvements.</p>
    <p><strong>Operating Business:</strong> QOF businesses must derive 50%+ of gross income from active conduct of trade or business in the zone.</p>
    
    <h3>Timeline Example</h3>
    <p><strong>Year 0 (2024):</strong> Sell stock with $500K gain, invest in QOF within 180 days, defer $100K tax (20% rate)</p>
    <p><strong>Year 5 (2029):</strong> Basis steps up 10% ($50K), reducing deferred tax by $10K</p>
    <p><strong>Year 7 (2031):</strong> Additional 5% step-up ($25K), reducing deferred tax by another $5K</p>
    <p><strong>December 31, 2026:</strong> Pay tax on remaining deferred gain (85% of original if held since 2019-2021)</p>
    <p><strong>Year 10+ (2034):</strong> Sell QOF investment - pay ZERO tax on all appreciation regardless of amount</p>
    
    <h3>Investment Risks</h3>
    <p>QOZ investments carry unique risks including concentration in economically distressed areas, complex compliance requirements, illiquidity (10-year minimum hold for full benefits), potential for appreciation below expectations, and regulatory changes. Always consult tax professionals before investing.</p>
    
    <h3>Eligible Capital Gains</h3>
    <p>Almost any capital gain qualifies: stock sales, business sales, real estate sales, cryptocurrency gains, collectibles, and other assets. Gain must be recognized for tax purposes and invested within 180 days. Both short-term and long-term gains eligible, though typically more beneficial for long-term due to lower rates.</p>
    
    <h3>Finding Opportunity Zones</h3>
    <p>Over 8,700 designated Opportunity Zones exist across all 50 states, DC, and US territories. Use the IRS's official QOZ map or CDFI Fund's interactive mapping tool. Many zones are in gentrifying neighborhoods with strong fundamentals, not just distressed areas.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'capitalGain',
        label: 'Original Capital Gain',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'capitalGainTaxRate',
        label: 'Capital Gains Tax Rate (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'stateTaxRate',
        label: 'State Tax Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'holdingPeriod',
        label: 'Planned Holding Period (Years)',
        type: 'select',
        options: [
          { value: '5', label: '5 Years' },
          { value: '7', label: '7 Years' },
          { value: '10', label: '10+ Years (Full Benefits)' },
        ],
        defaultValue: '10',
      },
      {
        name: 'qofAppreciation',
        label: 'Expected QOF Appreciation (%)',
        type: 'number',
        defaultValue: 80,
      },
      {
        name: 'investmentDate',
        label: 'Investment Year',
        type: 'select',
        options: [
          { value: '2024', label: '2024' },
          { value: '2025', label: '2025' },
          { value: '2026', label: '2026' },
        ],
        defaultValue: '2024',
      },
    ],
    results: [
      { label: 'Original Tax Due (Without OZ)', isCurrency: true },
      { label: 'Tax Deferred Until 12/31/2026', isCurrency: true },
      { label: 'Step-Up Basis Reduction', isCurrency: false },
      { label: 'Tax on Original Gain (After Step-Up)', isCurrency: true },
      { label: 'QOF Investment Value at Exit', isCurrency: true },
      { label: 'Tax on QOF Appreciation (0% if 10+ years)', isCurrency: true },
      { label: 'Total Tax Paid', isCurrency: true },
      { label: 'Total Tax Savings', isCurrency: true },
      { label: 'Effective Tax Rate', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        capitalGain,
        capitalGainTaxRate,
        stateTaxRate,
        holdingPeriod,
        qofAppreciation,
      } = values;

      const federalTaxRate = capitalGainTaxRate / 100;
      const combinedTaxRate = (capitalGainTaxRate + stateTaxRate) / 100;
      const originalTaxDue = capitalGain * combinedTaxRate;
      
      // Step-up basis calculation
      let stepUpPercentage = 0;
      const period = parseInt(holdingPeriod as string);
      if (period >= 5) stepUpPercentage = 10;
      if (period >= 7) stepUpPercentage = 15; // 10% + 5%
      
      const stepUpAmount = capitalGain * (stepUpPercentage / 100);
      const taxableGainAfterStepUp = capitalGain - stepUpAmount;
      const taxOnOriginalGain = taxableGainAfterStepUp * combinedTaxRate;
      
      // QOF appreciation calculation
      const qofFinalValue = capitalGain * (1 + qofAppreciation / 100);
      const qofAppreciationAmount = qofFinalValue - capitalGain;
      
      // Tax on QOF appreciation (0% if held 10+ years)
      const taxOnQofAppreciation = period >= 10 ? 0 : qofAppreciationAmount * combinedTaxRate;
      
      const totalTaxPaid = taxOnOriginalGain + taxOnQofAppreciation;
      const totalTaxSavings = originalTaxDue + (qofAppreciationAmount * combinedTaxRate) - totalTaxPaid;
      const effectiveTaxRate = (totalTaxPaid / (capitalGain + qofAppreciationAmount)) * 100;

      return [
        { label: 'Original Tax Due (Without OZ)', value: originalTaxDue.toFixed(2), isCurrency: true },
        { label: 'Tax Deferred Until 12/31/2026', value: originalTaxDue.toFixed(2), isCurrency: true },
        { label: 'Step-Up Basis Reduction', value: `${stepUpPercentage}%` },
        { label: 'Tax on Original Gain (After Step-Up)', value: taxOnOriginalGain.toFixed(2), isCurrency: true },
        { label: 'QOF Investment Value at Exit', value: qofFinalValue.toFixed(2), isCurrency: true },
        { label: 'Tax on QOF Appreciation (0% if 10+ years)', value: taxOnQofAppreciation.toFixed(2), isCurrency: true },
        { label: 'Total Tax Paid', value: totalTaxPaid.toFixed(2), isCurrency: true },
        { label: 'Total Tax Savings', value: totalTaxSavings.toFixed(2), isCurrency: true },
        { label: 'Effective Tax Rate', value: `${effectiveTaxRate.toFixed(2)}%` },
      ];
    },
  },
};
