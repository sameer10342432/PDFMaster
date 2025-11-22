import { CalculatorContent } from '@/types';

export const WATER_EFFICIENT_FIXTURE_ROI_CONTENT: CalculatorContent = {
  title: 'Water-Efficient Fixture ROI Calculator',
  description: 'Calculate savings from installing water-efficient toilets, faucets, and showerheads with payback period and environmental impact',
  icon: 'Icon',
  category: 'Green & Sustainable',
  slug: 'water-efficient-fixture-roi',
  article: {
    title: "Water-Efficient Fixture ROI Analysis",
    content: `
    <h2>Why Water-Efficient Fixtures Matter</h2>
    <p>The average American family uses 300+ gallons of water daily. Water-efficient fixtures can reduce consumption by 20-60%, lowering utility bills and environmental impact while increasing home value.</p>
    
    <h3>Types of Water-Efficient Fixtures</h3>
    <ul>
      <li><strong>WaterSense Toilets:</strong> Use 1.28 gpf vs. 3.5+ gpf in older models (savings: 13,000 gal/year per toilet)</li>
      <li><strong>Low-Flow Showerheads:</strong> 1.5-2.0 gpm vs. 2.5+ gpm standard (savings: 2,700 gal/year)</li>
      <li><strong>Aerator Faucets:</strong> 0.5-1.5 gpm vs. 2.2 gpm standard (savings: 700 gal/year per faucet)</li>
      <li><strong>Touchless Faucets:</strong> Reduce unnecessary water flow (additional 15-20% savings)</li>
      <li><strong>Dual-Flush Toilets:</strong> 0.8/1.6 gpf options for liquid/solid waste (maximum efficiency)</li>
    </ul>
    
    <h3>Cost Breakdown</h3>
    <table>
      <tr>
        <th>Fixture</th>
        <th>Cost Range</th>
        <th>Installation</th>
        <th>Annual Savings</th>
      </tr>
      <tr>
        <td>Low-Flow Toilet</td>
        <td>$150-$500</td>
        <td>$150-$300</td>
        <td>$50-$110</td>
      </tr>
      <tr>
        <td>Efficient Showerhead</td>
        <td>$30-$150</td>
        <td>$0-$50 (DIY)</td>
        <td>$75-$150</td>
      </tr>
      <tr>
        <td>Aerator Faucet</td>
        <td>$20-$100</td>
        <td>$0-$75 (DIY)</td>
        <td>$15-$30</td>
      </tr>
    </table>
    
    <h3>Savings Components</h3>
    <ul>
      <li><strong>Water Bills:</strong> Direct reduction in consumption charges</li>
      <li><strong>Sewer Bills:</strong> Often based on water usage (doubles savings in many areas)</li>
      <li><strong>Hot Water:</strong> Reduced heating costs for efficient showerheads and faucets</li>
      <li><strong>Maintenance:</strong> Modern fixtures require less maintenance</li>
      <li><strong>Rebates:</strong> Many utilities offer $50-$200 per fixture installed</li>
    </ul>
    
    <h3>Environmental Impact</h3>
    <p>A typical family upgrading to water-efficient fixtures can:</p>
    <ul>
      <li>Save 20,000-50,000 gallons of water annually</li>
      <li>Reduce carbon footprint by 1,000-3,000 lbs CO2/year (from reduced water heating)</li>
      <li>Conserve enough water to fill a swimming pool every year</li>
    </ul>
    
    <h3>Home Value Impact</h3>
    <p>Water-efficient homes benefit from:</p>
    <ul>
      <li>Green home certifications (LEED points)</li>
      <li>Faster sales in eco-conscious markets</li>
      <li>Lower operating costs attractive to buyers</li>
      <li>Premium pricing in water-scarce regions (CA, AZ, NV)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "numToilets",
        label: "Number of Toilets to Upgrade",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "numShowerheads",
        label: "Number of Showerheads to Upgrade",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "numFaucets",
        label: "Number of Faucets to Upgrade",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "waterCost",
        label: "Water Cost ($/1000 gallons)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "sewerCost",
        label: "Sewer Cost ($/1000 gallons)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "householdSize",
        label: "Household Size (people)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "utilityRebate",
        label: "Total Utility Rebates ($)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "electricityCost",
        label: "Electricity Cost ($/kWh)",
        type: "number",
        placeholder: "0.12",
        defaultValue: "0.12",
      },
    ],
    results: [
      { label: "Total Installation Cost", isCurrency: true },
      { label: "Net Cost After Rebates", isCurrency: true },
      { label: "Annual Water/Sewer Savings", isCurrency: true },
      { label: "Annual Energy Savings", isCurrency: true },
      { label: "Total Annual Savings", isCurrency: true },
      { label: "Payback Period", isCurrency: false },
      { label: "5-Year Net Savings", isCurrency: true },
      { label: "Annual Water Saved (gallons)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const numToilets = Number(data.numToilets) || 0;
      const numShowerheads = Number(data.numShowerheads) || 0;
      const numFaucets = Number(data.numFaucets) || 0;
      const waterCost = Number(data.waterCost) || 0;
      const sewerCost = Number(data.sewerCost) || 0;
      const householdSize = Number(data.householdSize) || 0;
      const utilityRebate = Number(data.utilityRebate) || 0;
      const electricityCost = Number(data.electricityCost) || 0;
      
      // Installation costs
      const toiletCost = numToilets * 400; // avg $200 fixture + $200 install
      const showerheadCost = numShowerheads * 60; // avg $40 fixture + $20 install
      const faucetCost = numFaucets * 70; // avg $50 fixture + $20 install
      const totalInstallation = toiletCost + showerheadCost + faucetCost;
      const netCost = totalInstallation - utilityRebate;
      
      // Annual water savings (gallons)
      const toiletSavings = numToilets * 13000 * (householdSize / 4); // normalized to 4 people
      const showerSavings = numShowerheads * 2700 * (householdSize / 4);
      const faucetSavings = numFaucets * 700 * (householdSize / 4);
      const totalWaterSaved = toiletSavings + showerSavings + faucetSavings;
      
      // Annual cost savings
      const waterSavingsCost = (totalWaterSaved / 1000) * waterCost;
      const sewerSavingsCost = (totalWaterSaved / 1000) * sewerCost;
      const annualWaterSewerSavings = waterSavingsCost + sewerSavingsCost;
      
      // Energy savings (from reduced hot water heating)
      const hotWaterSavings = (showerSavings + (faucetSavings * 0.5)) * 0.0003 * 8.33 * 90 / 3412; // kWh
      const annualEnergySavings = hotWaterSavings * electricityCost;
      
      const totalAnnualSavings = annualWaterSewerSavings + annualEnergySavings;
      const paybackPeriod = totalAnnualSavings > 0 ? netCost / totalAnnualSavings : 0;
      const fiveYearNetSavings = (totalAnnualSavings * 5) - netCost;

      return [
        { label: "Total Installation Cost", value: totalInstallation.toFixed(2), isCurrency: true },
        { label: "Net Cost After Rebates", value: netCost.toFixed(2), isCurrency: true },
        { label: "Annual Water/Sewer Savings", value: annualWaterSewerSavings.toFixed(2), isCurrency: true },
        { label: "Annual Energy Savings", value: annualEnergySavings.toFixed(2), isCurrency: true },
        { label: "Total Annual Savings", value: totalAnnualSavings.toFixed(2), isCurrency: true },
        { label: "Payback Period", value: `${paybackPeriod.toFixed(1)} years`, isCurrency: false },
        { label: "5-Year Net Savings", value: fiveYearNetSavings.toFixed(2), isCurrency: true },
        { label: "Annual Water Saved (gallons)", value: totalWaterSaved.toFixed(0), isCurrency: false },
      ];
    },
  },
};
