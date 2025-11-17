import { CalculatorContent } from '@/types';

export const TOWNHOUSE_VS_CONDO_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Townhouse vs. Condo Analyzer',
  description: 'Compare ownership costs, maintenance responsibilities, and investment potential between townhouses and condos',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'townhouse-vs-condo-analyzer',
  article: {
    title: "Townhouse vs. Condo: Making the Right Choice",
    content: `
    <h2>Townhouse vs. Condo Comparison</h2>
    <p>Townhouses and condos are both attached housing options, but they differ significantly in ownership structure, costs, and responsibilities. This calculator helps you compare the financial implications.</p>
    
    <h3>Townhouse Ownership</h3>
    <p>A townhouse is a multi-story home that shares one or two walls with adjacent properties. You typically own the structure and the land beneath it.</p>
    <ul>
      <li><strong>Ownership:</strong> You own the building and land (fee simple)</li>
      <li><strong>Exterior Maintenance:</strong> Usually your responsibility (roof, siding, yard)</li>
      <li><strong>HOA Fees:</strong> Typically $100-300/month for common areas only</li>
      <li><strong>Privacy:</strong> More square footage, often 2-3 stories</li>
      <li><strong>Parking:</strong> Usually garage or dedicated driveway</li>
    </ul>
    
    <h3>Condo Ownership</h3>
    <p>A condo means you own the interior space of your unit, while the HOA owns the building structure and land.</p>
    <ul>
      <li><strong>Ownership:</strong> You own airspace only (shared-interest)</li>
      <li><strong>Exterior Maintenance:</strong> HOA responsibility (roof, exterior, grounds)</li>
      <li><strong>HOA Fees:</strong> Typically $300-800/month for full service</li>
      <li><strong>Layout:</strong> Usually single-story or stacked units</li>
      <li><strong>Parking:</strong> Assigned space or shared garage</li>
    </ul>
    
    <h3>Financial Differences</h3>
    <p><strong>Purchase Price:</strong> Townhouses typically cost 10-20% more than comparable condos due to land ownership.</p>
    <p><strong>HOA Fees:</strong> Condo fees are 2-3x higher but cover more services (roof, exterior, insurance).</p>
    <p><strong>Maintenance:</strong> Townhouse owners budget ~1% of home value annually for maintenance; condo HOA handles this.</p>
    <p><strong>Insurance:</strong> Townhouse insurance costs more ($100-200/mo) vs condo HO-6 policies ($30-75/mo).</p>
    
    <h3>Appreciation Potential</h3>
    <ul>
      <li><strong>Townhouses:</strong> Appreciate faster due to land ownership (4-5% annually)</li>
      <li><strong>Condos:</strong> Appreciate slower, tied to building condition (3-4% annually)</li>
      <li><strong>Market Cycles:</strong> Townhouses more resilient in downturns</li>
    </ul>
    
    <h3>Control & Restrictions</h3>
    <p><strong>Townhouse:</strong> More autonomy for exterior changes, but still subject to HOA architectural guidelines.</p>
    <p><strong>Condo:</strong> Minimal control over exterior; interior renovations may require approval.</p>
    
    <h3>Resale Considerations</h3>
    <ul>
      <li><strong>Townhouse Buyers:</strong> Families, first-time buyers seeking space</li>
      <li><strong>Condo Buyers:</strong> Singles, downsizers, urban professionals</li>
      <li><strong>Financing:</strong> Townhouses easier to finance (treated like SFH)</li>
      <li><strong>Market Demand:</strong> Varies by location; urban areas favor condos</li>
    </ul>
    
    <h3>Make Your Decision</h3>
    <p><strong>Choose a Townhouse If:</strong> You want more space, control, land ownership, and can handle maintenance.</p>
    <p><strong>Choose a Condo If:</strong> You prioritize low maintenance, amenities, and predictable costs.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "townhousePurchasePrice",
        label: "Townhouse Purchase Price",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "condoPurchasePrice",
        label: "Condo Purchase Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "townhouseHOAFee",
        label: "Townhouse Monthly HOA Fee",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "condoHOAFee",
        label: "Condo Monthly HOA Fee",
        type: "number",
        placeholder: "450",
        defaultValue: "450",
      },
      {
        name: "townhouseInsurance",
        label: "Townhouse Monthly Insurance",
        type: "number",
        placeholder: "120",
        defaultValue: "120",
      },
      {
        name: "condoInsurance",
        label: "Condo Monthly Insurance",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "townhouseMaintenancePct",
        label: "Townhouse Annual Maintenance (% of value)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "townhouseAppreciation",
        label: "Townhouse Appreciation Rate (%)",
        type: "number",
        placeholder: "4.5",
        defaultValue: "4.5",
      },
      {
        name: "condoAppreciation",
        label: "Condo Appreciation Rate (%)",
        type: "number",
        placeholder: "3.5",
        defaultValue: "3.5",
      },
    ],
    results: [
      { label: "Townhouse Monthly Cost", isCurrency: true },
      { label: "Condo Monthly Cost", isCurrency: true },
      { label: "Annual Cost Difference", isCurrency: true },
      { label: "Townhouse 10-Year Value", isCurrency: true },
      { label: "Condo 10-Year Value", isCurrency: true },
      { label: "Ownership Control Score", isCurrency: false },
      { label: "Better Financial Choice", isCurrency: false },
    ],
    calculate: (data: any) => {
      const townhousePurchasePrice = Number(data.townhousePurchasePrice) || 0;
      const condoPurchasePrice = Number(data.condoPurchasePrice) || 0;
      const townhouseHOAFee = Number(data.townhouseHOAFee) || 0;
      const condoHOAFee = Number(data.condoHOAFee) || 0;
      const townhouseInsurance = Number(data.townhouseInsurance) || 0;
      const condoInsurance = Number(data.condoInsurance) || 0;
      const townhouseMaintenancePct = Number(data.townhouseMaintenancePct) / 100 || 0;
      const townhouseAppreciationRate = Number(data.townhouseAppreciation) / 100 || 0;
      const condoAppreciationRate = Number(data.condoAppreciation) / 100 || 0;
      
      const townhouseMonthlyMaintenance = (townhousePurchasePrice * townhouseMaintenancePct) / 12;
      const townhouseMonthlyCost = townhouseHOAFee + townhouseInsurance + townhouseMonthlyMaintenance;
      const condoMonthlyCost = condoHOAFee + condoInsurance;
      
      const annualCostDifference = (townhouseMonthlyCost - condoMonthlyCost) * 12;
      
      const townhouse10YearValue = townhousePurchasePrice * Math.pow(1 + townhouseAppreciationRate, 10);
      const condo10YearValue = condoPurchasePrice * Math.pow(1 + condoAppreciationRate, 10);
      
      const townhouse10YearGain = townhouse10YearValue - townhousePurchasePrice;
      const condo10YearGain = condo10YearValue - condoPurchasePrice;
      
      const townhouse10YearNetGain = townhouse10YearGain - (annualCostDifference > 0 ? annualCostDifference * 10 : 0);
      const condo10YearNetGain = condo10YearGain - (annualCostDifference < 0 ? Math.abs(annualCostDifference) * 10 : 0);
      
      const ownershipControlScore = "Townhouse: 75/100 | Condo: 40/100";
      
      let verdict = "";
      if (townhouse10YearNetGain > condo10YearNetGain + 15000) {
        verdict = "✅ Townhouse - Better equity growth and control";
      } else if (condo10YearNetGain > townhouse10YearNetGain + 15000) {
        verdict = "✅ Condo - Better value with lower maintenance burden";
      } else {
        verdict = "⚖️ Similar Value - Choose based on lifestyle priorities";
      }

      return [
        { label: "Townhouse Monthly Cost", value: `${townhouseMonthlyCost.toFixed(2)}`, isCurrency: true },
        { label: "Condo Monthly Cost", value: `${condoMonthlyCost.toFixed(2)}`, isCurrency: true },
        { label: "Annual Cost Difference", value: `${Math.abs(annualCostDifference).toFixed(2)}`, isCurrency: true },
        { label: "Townhouse 10-Year Value", value: `${townhouse10YearValue.toFixed(2)}`, isCurrency: true },
        { label: "Condo 10-Year Value", value: `${condo10YearValue.toFixed(2)}`, isCurrency: true },
        { label: "Ownership Control Score", value: ownershipControlScore, isCurrency: false },
        { label: "Better Financial Choice", value: verdict, isCurrency: false },
      ];
    },
  },
};
