import { CalculatorContent } from '@/types';

export const CONDO_VS_SINGLE_FAMILY_HOME_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Condo vs. Single-Family Home (SFH) Analyzer',
  description: 'Compare the total costs, responsibilities, and financial implications of condo versus single-family home ownership',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'condo-vs-single-family-home-analyzer',
  article: {
    title: "Condo vs. Single-Family Home: Complete Comparison",
    content: `
    <h2>Condo vs. Single-Family Home Ownership</h2>
    <p>Choosing between a condo and single-family home (SFH) involves comparing monthly costs, maintenance responsibilities, lifestyle preferences, and long-term financial outcomes.</p>
    
    <h3>Condo Ownership Advantages</h3>
    <ul>
      <li><strong>Lower Maintenance:</strong> HOA handles exterior, landscaping, roof, common areas</li>
      <li><strong>Amenities:</strong> Access to pool, gym, security, concierge</li>
      <li><strong>Lower Entry Price:</strong> Typically 20-30% less expensive than comparable SFH</li>
      <li><strong>Location:</strong> Often in urban areas with better walkability</li>
      <li><strong>Security:</strong> Controlled access, neighbors nearby</li>
      <li><strong>Insurance Savings:</strong> Master policy covers building exterior</li>
    </ul>
    
    <h3>Condo Ownership Disadvantages</h3>
    <ul>
      <li><strong>HOA Fees:</strong> $200-800/month for maintenance and amenities</li>
      <li><strong>Limited Control:</strong> Rules about pets, rentals, renovations</li>
      <li><strong>Special Assessments:</strong> Surprise fees for major repairs</li>
      <li><strong>Slower Appreciation:</strong> Condos often appreciate 1-2% less annually</li>
      <li><strong>Shared Walls:</strong> Noise from neighbors</li>
      <li><strong>Resale Challenges:</strong> FHA/VA financing restrictions if HOA poorly managed</li>
    </ul>
    
    <h3>Single-Family Home Advantages</h3>
    <ul>
      <li><strong>Full Control:</strong> Renovate, landscape, rent without restrictions</li>
      <li><strong>Privacy:</strong> No shared walls, more personal space</li>
      <li><strong>Land Value:</strong> Lot appreciates separately from structure</li>
      <li><strong>Better Appreciation:</strong> SFH typically appreciates faster</li>
      <li><strong>No HOA Fees:</strong> More predictable monthly costs</li>
      <li><strong>Family Friendly:</strong> Yards, parking, room to grow</li>
    </ul>
    
    <h3>Single-Family Home Disadvantages</h3>
    <ul>
      <li><strong>Higher Maintenance:</strong> You handle all repairs and upkeep</li>
      <li><strong>Higher Costs:</strong> More expensive insurance, utilities, maintenance</li>
      <li><strong>Time Commitment:</strong> Lawn care, snow removal, repairs</li>
      <li><strong>Higher Purchase Price:</strong> 20-50% more expensive</li>
      <li><strong>Cash Reserves Needed:</strong> Must save for major repairs (roof, HVAC)</li>
    </ul>
    
    <h3>Financial Comparison</h3>
    <p>When comparing total cost of ownership, consider:</p>
    <ul>
      <li><strong>Monthly Costs:</strong> Mortgage, HOA, insurance, utilities, maintenance</li>
      <li><strong>Upfront Costs:</strong> Down payment, closing costs</li>
      <li><strong>Cash Reserves:</strong> Emergency fund for repairs</li>
      <li><strong>Appreciation:</strong> Expected value growth over 5-10 years</li>
      <li><strong>Resale Marketability:</strong> Demand for each property type</li>
    </ul>
    
    <h3>Lifestyle Considerations</h3>
    <p><strong>Choose a Condo If:</strong> You want low-maintenance living, urban location, amenities, and plan to stay 3-7 years.</p>
    <p><strong>Choose a SFH If:</strong> You want control, privacy, yard space, and plan to stay 7+ years.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "condoPurchasePrice",
        label: "Condo Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "sfhPurchasePrice",
        label: "Single-Family Home Purchase Price",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "condoHOAFee",
        label: "Condo Monthly HOA Fee",
        type: "number",
        placeholder: "400",
        defaultValue: "400",
      },
      {
        name: "condoInsurance",
        label: "Condo Monthly Insurance",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "sfhInsurance",
        label: "SFH Monthly Insurance",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "sfhMaintenancePct",
        label: "SFH Annual Maintenance (% of home value)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "propertyTaxRate",
        label: "Property Tax Rate (%)",
        type: "number",
        placeholder: "1.2",
        defaultValue: "1.2",
      },
      {
        name: "condoAppreciation",
        label: "Condo Appreciation Rate (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "sfhAppreciation",
        label: "SFH Appreciation Rate (%)",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
    ],
    results: [
      { label: "Condo Monthly Ownership Cost", isCurrency: true },
      { label: "SFH Monthly Ownership Cost", isCurrency: true },
      { label: "Monthly Cost Difference", isCurrency: true },
      { label: "Condo 10-Year Value", isCurrency: true },
      { label: "SFH 10-Year Value", isCurrency: true },
      { label: "Better Long-Term Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const condoPurchasePrice = Number(data.condoPurchasePrice) || 0;
      const sfhPurchasePrice = Number(data.sfhPurchasePrice) || 0;
      const condoHOAFee = Number(data.condoHOAFee) || 0;
      const condoInsurance = Number(data.condoInsurance) || 0;
      const sfhInsurance = Number(data.sfhInsurance) || 0;
      const sfhMaintenancePct = Number(data.sfhMaintenancePct) / 100 || 0;
      const propertyTaxRate = Number(data.propertyTaxRate) / 100 || 0;
      const condoAppreciationRate = Number(data.condoAppreciation) / 100 || 0;
      const sfhAppreciationRate = Number(data.sfhAppreciation) / 100 || 0;
      
      const condoMonthlyPropertyTax = (condoPurchasePrice * propertyTaxRate) / 12;
      const sfhMonthlyPropertyTax = (sfhPurchasePrice * propertyTaxRate) / 12;
      
      const sfhMonthlyMaintenance = (sfhPurchasePrice * sfhMaintenancePct) / 12;
      
      const condoMonthlyOwnershipCost = condoHOAFee + condoInsurance + condoMonthlyPropertyTax;
      const sfhMonthlyOwnershipCost = sfhInsurance + sfhMonthlyPropertyTax + sfhMonthlyMaintenance;
      
      const monthlyCostDifference = sfhMonthlyOwnershipCost - condoMonthlyOwnershipCost;
      
      const condo10YearValue = condoPurchasePrice * Math.pow(1 + condoAppreciationRate, 10);
      const sfh10YearValue = sfhPurchasePrice * Math.pow(1 + sfhAppreciationRate, 10);
      
      const condo10YearGain = condo10YearValue - condoPurchasePrice;
      const sfh10YearGain = sfh10YearValue - sfhPurchasePrice;
      
      let verdict = "";
      if (sfh10YearGain > condo10YearGain + 20000) {
        verdict = "✅ SFH - Better long-term appreciation";
      } else if (condo10YearGain > sfh10YearGain + 20000) {
        verdict = "✅ Condo - Better value with lower costs";
      } else {
        verdict = "⚖️ Similar Investment - Choose based on lifestyle";
      }

      return [
        { label: "Condo Monthly Ownership Cost", value: `${condoMonthlyOwnershipCost.toFixed(2)}`, isCurrency: true },
        { label: "SFH Monthly Ownership Cost", value: `${sfhMonthlyOwnershipCost.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Cost Difference", value: `${Math.abs(monthlyCostDifference).toFixed(2)}`, isCurrency: true },
        { label: "Condo 10-Year Value", value: `${condo10YearValue.toFixed(2)}`, isCurrency: true },
        { label: "SFH 10-Year Value", value: `${sfh10YearValue.toFixed(2)}`, isCurrency: true },
        { label: "Better Long-Term Investment", value: verdict, isCurrency: false },
      ];
    },
  },
};
