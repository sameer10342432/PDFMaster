import { CalculatorContent } from '@/types';

export const FEMA_FLOOD_ZONE_CHECKER_CONTENT: CalculatorContent = {
  title: 'FEMA Flood Zone Checker (by Address)',
  description: 'Check FEMA flood zone designation for any property address to assess flood risk and insurance requirements.',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'fema-flood-zone-checker',
  article: {
    title: "Understanding FEMA Flood Zones and Risk Assessment",
    content: `
    <h2>What are FEMA Flood Zones?</h2>
    <p>FEMA (Federal Emergency Management Agency) flood zones are geographic areas classified by flood risk level. These designations determine flood insurance requirements and premiums.</p>
    
    <h3>Common Flood Zone Designations</h3>
    <ul>
      <li><strong>Zone X (Shaded):</strong> Moderate risk - 0.2% annual chance (500-year flood)</li>
      <li><strong>Zone X (Unshaded):</strong> Minimal risk - outside 500-year floodplain</li>
      <li><strong>Zone A/AE:</strong> High risk - 1% annual chance (100-year flood), insurance required</li>
      <li><strong>Zone AH:</strong> High risk with shallow flooding (1-3 feet)</li>
      <li><strong>Zone AO:</strong> High risk with sheet flow flooding</li>
      <li><strong>Zone V/VE:</strong> High risk coastal areas with wave action, highest premiums</li>
    </ul>
    
    <h3>Flood Insurance Requirements</h3>
    <ul>
      <li><strong>Required:</strong> Mandatory for federally backed mortgages in high-risk zones (A, AE, V, VE)</li>
      <li><strong>Recommended:</strong> Strongly suggested for moderate-risk zones (X shaded)</li>
      <li><strong>Optional:</strong> Available but not required in minimal-risk zones (X unshaded)</li>
    </ul>
    
    <h3>Annual Flood Insurance Costs</h3>
    <ul>
      <li><strong>Zone X (Minimal):</strong> $400-$600/year average</li>
      <li><strong>Zone AE (High Risk):</strong> $1,500-$3,000/year average</li>
      <li><strong>Zone V (Coastal):</strong> $3,000-$10,000+/year</li>
    </ul>
    
    <h3>Impact on Property Value</h3>
    <ul>
      <li>High-risk zones may see 5-10% lower property values</li>
      <li>Flood insurance costs reduce affordability and cash flow</li>
      <li>Recent flooding can trigger zone reclassifications</li>
      <li>Climate change is expanding high-risk zones in many areas</li>
    </ul>
    
    <h3>Due Diligence Tips</h3>
    <ul>
      <li>Check FEMA's Flood Map Service Center (msc.fema.gov)</li>
      <li>Review property's elevation certificate if available</li>
      <li>Ask sellers about flood history and insurance claims</li>
      <li>Consider future climate projections and sea level rise</li>
    </ul>
    
    <p><em>Note: This is a demonstration tool. For official flood zone determinations, consult FEMA's Flood Map Service Center or a licensed surveyor.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Flood Zone Designation', isCurrency: false },
      { label: 'Risk Level', isCurrency: false },
      { label: 'Flood Insurance Required?', isCurrency: false },
      { label: 'Est. Annual Insurance Cost', isCurrency: true },
      { label: 'Annual Flood Probability', isCurrency: false },
    ],
    fields: [
      {
        name: 'address',
        label: 'Property Address',
        type: 'text',
        defaultValue: '123 Main Street, Houston, TX 77001',
      },
      {
        name: 'demoZone',
        label: 'Demo Flood Zone (Select for Testing)',
        type: 'select',
        options: [
          { label: 'Zone X (Minimal Risk)', value: 'X_minimal' },
          { label: 'Zone X Shaded (Moderate Risk)', value: 'X_moderate' },
          { label: 'Zone AE (High Risk)', value: 'AE' },
          { label: 'Zone V (Coastal High Risk)', value: 'V' },
        ],
        defaultValue: 'X_minimal',
      },
      {
        name: 'propertyValue',
        label: 'Property Value (for insurance estimate)',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'elevatedFoundation',
        label: 'Elevated Foundation/Above Base Flood Elevation?',
        type: 'boolean',
        defaultValue: false,
      },
    ],
    calculate: (data) => {
      const { address, demoZone, propertyValue, elevatedFoundation } = data;
      
      let zoneDesignation = '';
      let riskLevel = '';
      let insuranceRequired = '';
      let annualCost = 0;
      let floodProbability = '';
      
      switch (demoZone) {
        case 'X_minimal':
          zoneDesignation = 'Zone X (Unshaded)';
          riskLevel = 'Minimal Risk';
          insuranceRequired = 'No (Optional)';
          annualCost = 500;
          floodProbability = 'Less than 0.2% per year';
          break;
        case 'X_moderate':
          zoneDesignation = 'Zone X (Shaded)';
          riskLevel = 'Moderate Risk';
          insuranceRequired = 'Recommended';
          annualCost = 800;
          floodProbability = '0.2% per year (500-year flood)';
          break;
        case 'AE':
          zoneDesignation = 'Zone AE';
          riskLevel = 'High Risk';
          insuranceRequired = 'Yes (Mandatory)';
          annualCost = elevatedFoundation ? 1800 : 2800;
          floodProbability = '1% per year (100-year flood)';
          break;
        case 'V':
          zoneDesignation = 'Zone V/VE';
          riskLevel = 'Coastal High Risk';
          insuranceRequired = 'Yes (Mandatory)';
          annualCost = elevatedFoundation ? 5000 : 8500;
          floodProbability = '1%+ per year with wave action';
          break;
      }
      
      // Adjust cost based on property value (rough estimate)
      const valueAdjustment = (propertyValue / 350000);
      annualCost = annualCost * valueAdjustment;
      
      return [
        { label: 'Flood Zone Designation', value: zoneDesignation, isCurrency: false },
        { label: 'Risk Level', value: riskLevel, isCurrency: false },
        { label: 'Flood Insurance Required?', value: insuranceRequired, isCurrency: false },
        { label: 'Est. Annual Insurance Cost', value: annualCost, isCurrency: true },
        { label: 'Annual Flood Probability', value: floodProbability, isCurrency: false },
      ];
    },
  },
};
