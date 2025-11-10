import { CalculatorContent } from '@/types';

export const RENT_CONTROL_LAW_FINDER_CONTENT: CalculatorContent = {
  title: 'Local Rent Control Law Finder (by City/State)',
  description: 'Search rent control laws and regulations by location to understand rental property restrictions, rent increase caps, and landlord obligations.',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'rent-control-law-finder',
  article: {
    title: "Understanding Rent Control Laws for Real Estate Investors",
    content: `
    <h2>What is Rent Control?</h2>
    <p>Rent control refers to laws that limit how much landlords can charge for rent and regulate rent increases. These regulations vary widely by jurisdiction and significantly impact investment strategies.</p>
    
    <h3>Types of Rent Control</h3>
    <ul>
      <li><strong>Strict Rent Control:</strong> Caps on initial rent and annual increases (e.g., San Francisco, NYC)</li>
      <li><strong>Rent Stabilization:</strong> Limits on annual increases but market-rate initial rents (e.g., Los Angeles)</li>
      <li><strong>Vacancy Decontrol:</strong> Rent resets to market rate between tenants</li>
      <li><strong>Statewide Caps:</strong> State-level limits on rent increases (e.g., California AB 1482, Oregon)</li>
    </ul>
    
    <h3>Common Rent Control Provisions</h3>
    <ul>
      <li><strong>Annual Increase Caps:</strong> Typically 3-10% per year or CPI + 3-5%</li>
      <li><strong>Exemptions:</strong> New construction (built after specific year), small landlords, single-family homes</li>
      <li><strong>Just Cause Eviction:</strong> Landlords must have valid reason to terminate tenancy</li>
      <li><strong>Tenant Protections:</strong> Notice requirements, relocation assistance, buyout regulations</li>
    </ul>
    
    <h3>Impact on Real Estate Investment</h3>
    <p><strong>Challenges:</strong></p>
    <ul>
      <li>Limited ability to increase rents to market rates</li>
      <li>Below-market rents reduce cash flow and property value</li>
      <li>Difficult to remove problem tenants</li>
      <li>Extensive documentation and compliance requirements</li>
      <li>Tenant buyouts can be expensive ($10k-$150k+ in some cities)</li>
    </ul>
    
    <p><strong>Opportunities:</strong></p>
    <ul>
      <li>Value-add through exemptions (new ADUs, substantial renovations)</li>
      <li>Stable long-term tenants with predictable income</li>
      <li>Lower property acquisition costs in rent-controlled markets</li>
      <li>Owner-occupied exemptions in some jurisdictions</li>
    </ul>
    
    <h3>States and Cities with Significant Rent Control</h3>
    <ul>
      <li><strong>California:</strong> Statewide cap (AB 1482) + local ordinances in SF, LA, Oakland, Berkeley</li>
      <li><strong>New York:</strong> NYC rent stabilization affecting 1M+ units</li>
      <li><strong>Oregon:</strong> Statewide rent control (7% + CPI cap)</li>
      <li><strong>Washington DC:</strong> Comprehensive rent control for buildings built before 1976</li>
      <li><strong>New Jersey:</strong> Multiple municipalities with rent control</li>
    </ul>
    
    <h3>Due Diligence for Investors</h3>
    <ul>
      <li>Research local ordinances before purchasing</li>
      <li>Understand property exemptions (age, unit count)</li>
      <li>Calculate impact of rent caps on projected returns</li>
      <li>Review existing tenant leases and rent levels</li>
      <li>Budget for legal compliance and potential buyouts</li>
    </ul>
    
    <p><em>Note: This is a general information tool. Rent control laws change frequently. Consult a local real estate attorney for current regulations.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Rent Control Status', isCurrency: false },
      { label: 'Annual Increase Cap', isCurrency: false },
      { label: 'Just Cause Eviction Required?', isCurrency: false },
      { label: 'Typical Property Exemptions', isCurrency: false },
      { label: 'Investor Impact', isCurrency: false },
    ],
    fields: [
      {
        name: 'city',
        label: 'City',
        type: 'text',
        defaultValue: 'San Francisco',
      },
      {
        name: 'state',
        label: 'State',
        type: 'text',
        defaultValue: 'California',
      },
      {
        name: 'demoJurisdiction',
        label: 'Demo Jurisdiction (Select for Testing)',
        type: 'select',
        options: [
          { label: 'No Rent Control', value: 'none' },
          { label: 'Statewide Cap Only', value: 'state_cap' },
          { label: 'Moderate Local Control', value: 'moderate' },
          { label: 'Strict Rent Control', value: 'strict' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'buildingAge',
        label: 'Building Year Built',
        type: 'number',
        defaultValue: 1985,
      },
      {
        name: 'unitCount',
        label: 'Number of Units in Building',
        type: 'number',
        defaultValue: 8,
      },
    ],
    calculate: (data) => {
      const { city, state, demoJurisdiction, buildingAge, unitCount } = data;
      
      let controlStatus = '';
      let increaseCap = '';
      let justCause = '';
      let exemptions = '';
      let impact = '';
      
      const currentYear = new Date().getFullYear();
      const isNewConstruction = buildingAge >= 2000;
      const isSmallLandlord = unitCount <= 2;
      
      switch (demoJurisdiction) {
        case 'none':
          controlStatus = '✓ No Rent Control - Free Market';
          increaseCap = 'None - Market-based pricing';
          justCause = 'No - At-will tenancy allowed';
          exemptions = 'N/A - No restrictions';
          impact = '✓ Low Impact - Full pricing flexibility, easier tenant management';
          break;
        case 'state_cap':
          controlStatus = 'Statewide Rent Cap (e.g., CA AB 1482, Oregon)';
          increaseCap = '5% + CPI (typically 8-10% max)';
          justCause = isSmallLandlord ? 'No - Small landlord exemption' : 'Yes - Just cause required after 12 months';
          exemptions = isNewConstruction ? '✓ Exempt - Built after 2000' : (isSmallLandlord ? '✓ Exempt - 2 units or fewer' : '✗ Not exempt');
          impact = exemptions.includes('Exempt') ? 
            '⚖️ Moderate Impact - Property is exempt from state caps' : 
            '⚠️ Moderate-High Impact - State caps limit increases but allow reasonable adjustments';
          break;
        case 'moderate':
          controlStatus = 'Local Rent Control Ordinance (Moderate)';
          increaseCap = '3-7% annual or 60% CPI, whichever is lower';
          justCause = 'Yes - Just cause eviction required';
          exemptions = isNewConstruction ? '✓ Exempt - Built after 1995' : (isSmallLandlord ? 'Partial - Registration required' : '✗ Not exempt');
          impact = exemptions.includes('Exempt') ? 
            '⚖️ Moderate Impact - Property exempt from local control' : 
            '⚠️ High Impact - Limited rent increases, tenant protections, compliance burden';
          break;
        case 'strict':
          controlStatus = '⚠️ Strict Rent Control (e.g., SF, NYC)';
          increaseCap = '1-3% annual maximum (often below inflation)';
          justCause = 'Yes - Extensive just cause protections';
          exemptions = isNewConstruction && buildingAge >= 2010 ? '✓ Exempt - Very new construction' : '✗ Not exempt - Most properties covered';
          impact = exemptions.includes('Exempt') ? 
            '⚖️ Moderate Impact - Property exempt from strictest controls' : 
            '✗ Very High Impact - Severe rent caps, difficult evictions, potential buyout costs $50k-$150k';
          break;
      }
      
      return [
        { label: 'Rent Control Status', value: controlStatus, isCurrency: false },
        { label: 'Annual Increase Cap', value: increaseCap, isCurrency: false },
        { label: 'Just Cause Eviction Required?', value: justCause, isCurrency: false },
        { label: 'Typical Property Exemptions', value: exemptions, isCurrency: false },
        { label: 'Investor Impact', value: impact, isCurrency: false },
      ];
    },
  },
};
